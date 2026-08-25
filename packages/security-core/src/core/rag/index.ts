// ═══════════════════════════════════════════════════════════════════
// RAG 上下文构建 — BM25 词法检索 + n-gram 稠密代理，RRF 融合排序
// （对标简历：BM25 + Dense Embedding 混合检索，RRF 融合）
// ═══════════════════════════════════════════════════════════════════
import fs from 'node:fs';
import path from 'node:path';
import { SKIP_DIRS } from '../../tools/registry.js';
import { detectLanguage } from '../../security/rules.js';

interface Chunk { file: string; startLine: number; text: string; terms: string[] }

const INDEX_CACHE = new Map<string, { chunks: Chunk[]; df: Map<string, number>; builtAt: number }>();
const INDEX_TTL_MS = 60_000;
const MAX_CHUNKS = 3000;

// ── 分词：标识符驼峰拆分 + CJK bigram ──────────────────────────────
function tokenize(text: string): string[] {
  const tokens: string[] = [];
  for (const m of text.matchAll(/[A-Za-z_][A-Za-z0-9_]*|\d+|[\u4e00-\u9fff]/gu)) {
    const w = m[0];
    if (/^[\u4e00-\u9fff]$/.test(w)) continue; // CJK 单字走 bigram
    if (/^\d+$/.test(w)) continue;
    tokens.push(w.toLowerCase());
    // 驼峰拆分：getUserById → get, user, by, id
    const sub = w.match(/[A-Z]?[a-z]+|[A-Z]+(?![a-z])/g);
    if (sub && sub.length > 1) tokens.push(...sub.map(s => s.toLowerCase()));
  }
  // CJK bigram
  const cjk = text.match(/[\u4e00-\u9fff]+/g) || [];
  for (const seg of cjk) for (let i = 0; i < seg.length - 1; i++) tokens.push(seg.slice(i, i + 2));
  return tokens;
}

function chunkFile(file: string): Chunk[] {
  let content: string;
  try { content = fs.readFileSync(file, 'utf-8'); } catch { return []; }
  if (content.length > 500_000) content = content.slice(0, 500_000);
  const lines = content.split('\n');
  const chunks: Chunk[] = [];
  const SIZE = 60; // 行/块
  for (let i = 0; i < lines.length; i += SIZE) {
    const text = lines.slice(i, i + SIZE).join('\n');
    if (text.trim()) chunks.push({ file, startLine: i + 1, text, terms: tokenize(text) });
    if (chunks.length >= MAX_CHUNKS) break;
  }
  return chunks;
}

function buildIndex(workspace: string): { chunks: Chunk[]; df: Map<string, number> } {
  const chunks: Chunk[] = [];
  const walk = (dir: string, depth: number) => {
    if (chunks.length >= MAX_CHUNKS || depth > 6) return;
    try {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        if (SKIP_DIRS.has(e.name) || e.name.startsWith('.')) continue;
        const full = path.join(dir, e.name);
        if (e.isDirectory()) walk(full, depth + 1);
        else {
          const lang = detectLanguage(e.name);
          if (lang === 'unknown') continue;
          chunks.push(...chunkFile(full));
        }
      }
    } catch {}
  };
  walk(path.resolve(workspace), 0);

  const df = new Map<string, number>();
  for (const c of chunks) {
    const seen = new Set(c.terms);
    for (const t of seen) df.set(t, (df.get(t) || 0) + 1);
  }
  return { chunks, df };
}

// ── BM25 ───────────────────────────────────────────────────────────
function bm25Score(queryTerms: string[], chunk: Chunk, N: number, df: Map<string, number>, avgLen: number): number {
  const k1 = 1.5, b = 0.75;
  const tf = new Map<string, number>();
  for (const t of chunk.terms) tf.set(t, (tf.get(t) || 0) + 1);
  let score = 0;
  for (const qt of new Set(queryTerms)) {
    const f = tf.get(qt) || 0;
    if (!f) continue;
    const n = df.get(qt) || 0;
    const idf = Math.log(1 + (N - n + 0.5) / (n + 0.5));
    score += idf * (f * (k1 + 1)) / (f + k1 * (1 - b + b * chunk.terms.length / avgLen));
  }
  return score;
}

// ── n-gram 重叠（稠密代理：字符 trigram 余弦）──────────────────────
function trigrams(s: string): Set<string> {
  const s2 = s.toLowerCase().replace(/\s+/g, ' ');
  const g = new Set<string>();
  for (let i = 0; i < s2.length - 2; i++) g.add(s2.slice(i, i + 3));
  return g;
}

function denseProxy(query: string, chunk: Chunk): number {
  const q = trigrams(query), c = trigrams(chunk.text.slice(0, 2000));
  if (!q.size || !c.size) return 0;
  let inter = 0;
  for (const g of q) if (c.has(g)) inter++;
  return inter / Math.sqrt(q.size * c.size);
}

// ── RRF 融合 ───────────────────────────────────────────────────────
const RRF_K = 60;
export function rrfFuse(rankings: string[][]): Array<{ id: string; score: number }> {
  const scores = new Map<string, number>();
  for (const ranking of rankings) {
    ranking.forEach((id, rank) => {
      scores.set(id, (scores.get(id) || 0) + 1 / (RRF_K + rank + 1));
    });
  }
  return [...scores.entries()].map(([id, score]) => ({ id, score })).sort((a, b) => b.score - a.score);
}

// ── 对外：构建上下文 ───────────────────────────────────────────────
export async function buildRagContext(query: string, workspace: string, topK = 5): Promise<string> {
  const cached = INDEX_CACHE.get(workspace);
  let index = cached && Date.now() - cached.builtAt < INDEX_TTL_MS ? cached : null;
  if (!index) {
    index = { ...buildIndex(workspace), builtAt: Date.now() };
    INDEX_CACHE.set(workspace, index);
  }
  const { chunks, df } = index;
  if (!chunks.length) return '';

  const queryTerms = tokenize(query);
  const N = chunks.length;
  const avgLen = chunks.reduce((s, c) => s + c.terms.length, 0) / N;

  // 两个排序通道
  const bm25Ranked = chunks
    .map((c, i) => ({ i, s: bm25Score(queryTerms, c, N, df, avgLen) }))
    .filter(x => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, 30)
    .map(x => String(x.i));

  const denseRanked = chunks
    .map((c, i) => ({ i, s: denseProxy(query, c) }))
    .filter(x => x.s > 0.02)
    .sort((a, b) => b.s - a.s)
    .slice(0, 30)
    .map(x => String(x.i));

  if (!bm25Ranked.length && !denseRanked.length) return '';

  // RRF 融合
  const fused = rrfFuse([bm25Ranked, denseRanked]).slice(0, topK);

  const parts = fused.map(({ id }) => {
    const c = chunks[Number(id)];
    const preview = c.text.length > 1200 ? c.text.slice(0, 1200) + '\n…' : c.text;
    return `── ${c.file} (L${c.startLine}) ──\n${preview}`;
  });
  return `[Retrieved context (BM25+dense, RRF fused, top ${fused.length})]\n${parts.join('\n\n')}`;
}

export function invalidateRagIndex(workspace?: string) {
  if (workspace) INDEX_CACHE.delete(workspace);
  else INDEX_CACHE.clear();
}
