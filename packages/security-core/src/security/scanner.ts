// ═══════════════════════════════════════════════════════════════════
// 规则扫描引擎 — 多线程分批扫描，支持严重度过滤与上下文输出
// ═══════════════════════════════════════════════════════════════════
import fs from 'node:fs';
import path from 'node:path';
import type { ScanResult, SecurityRule, Severity } from '../core/types.js';
import { SECURITY_RULES, detectLanguage } from './rules.js';
import { SKIP_DIRS } from '../tools/registry.js';

const SEVERITY_ORDER: Record<Severity, number> = { critical: 0, high: 1, medium: 2, low: 3, info: 4 };

export interface ScanOptions {
  root: string;
  include?: string;
  minSeverity?: Severity;
  categories?: string[];
  maxFiles?: number;
  language?: string;
}

export interface ScanReport {
  results: ScanResult[];
  filesScanned: number;
  durationMs: number;
  bySeverity: Record<string, number>;
  byCategory: Record<string, number>;
}

export function collectFiles(root: string, include?: string, maxFiles = 5000): string[] {
  const files: string[] = [];
  const rootStat = fs.existsSync(root) ? fs.statSync(root) : null;
  if (rootStat?.isFile()) return [root];
  (function walk(dir: string) {
    if (files.length >= maxFiles) return;
    try {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        if (SKIP_DIRS.has(e.name) || (e.name.startsWith('.') && e.name !== '.github')) continue;
        const full = path.join(dir, e.name);
        if (e.isDirectory()) walk(full);
        else if (!include || globMatch(e.name, include)) files.push(full);
      }
    } catch {}
  })(path.resolve(root));
  return files;
}

export function scanFile(file: string, rules: SecurityRule[]): ScanResult[] {
  const lang = detectLanguage(file);
  if (lang === 'unknown' && !rules.some(r => r.languages.includes('*'))) return [];
  let content: string;
  try { content = fs.readFileSync(file, 'utf-8'); } catch { return []; }
  const lines = content.split('\n');
  const out: ScanResult[] = [];
  for (const rule of rules) {
    if (!(rule.languages.includes('*') || rule.languages.includes(lang))) continue;
    for (const re of rule.patterns) {
      re.lastIndex = 0;
      for (const m of content.matchAll(re)) {
        const upto = m.index ?? 0;
        const line = content.slice(0, upto).split('\n').length;
        out.push({
          rule, file,
          line,
          match: m[0].slice(0, 200),
          context: lines.slice(Math.max(0, line - 2), line + 1).map((l, i) => `  ${Math.max(1, line - 1) + i} │ ${l}`).join('\n'),
        });
        if (out.length > 200) return out; // 单文件上限
      }
    }
  }
  return out;
}

export async function runScan(opts: ScanOptions): Promise<ScanReport> {
  const start = Date.now();
  const minSev = opts.minSeverity ? SEVERITY_ORDER[opts.minSeverity] : 99;
  let rules = SECURITY_RULES.filter(r => SEVERITY_ORDER[r.severity] <= minSev);
  if (opts.categories?.length) rules = rules.filter(r => opts.categories!.includes(r.category));
  const files = collectFiles(opts.root, opts.include);
  const results: ScanResult[] = [];
  const CONCURRENCY = 16;
  for (let i = 0; i < files.length; i += CONCURRENCY) {
    const batch = files.slice(i, i + CONCURRENCY);
    results.push(...batch.flatMap(f => scanFile(f, rules)));
  }
  results.sort((a, b) => SEVERITY_ORDER[a.rule.severity] - SEVERITY_ORDER[b.rule.severity]);
  const bySeverity: Record<string, number> = {};
  const byCategory: Record<string, number> = {};
  for (const r of results) {
    bySeverity[r.rule.severity] = (bySeverity[r.rule.severity] || 0) + 1;
    byCategory[r.rule.category] = (byCategory[r.rule.category] || 0) + 1;
  }
  return { results, filesScanned: files.length, durationMs: Date.now() - start, bySeverity, byCategory };
}

export function formatScanReport(report: ScanReport, lang: 'zh' | 'en' = 'zh'): string {
  const zh = lang === 'zh';
  const sevIcon: Record<string, string> = { critical: '🔴', high: '🟠', medium: '🟡', low: '🔵', info: '⚪' };
  const head = zh
    ? `扫描完成：${report.filesScanned} 个文件，发现 ${report.results.length} 个问题（${report.durationMs}ms）`
    : `Scan complete: ${report.filesScanned} files, ${report.results.length} findings (${report.durationMs}ms)`;
  const sevLine = Object.entries(report.bySeverity).map(([s, n]) => `${sevIcon[s] || s} ${s}: ${n}`).join('  ');
  const shown = report.results.slice(0, 50);
  const body = shown.map(r =>
    `${sevIcon[r.rule.severity]} [${r.rule.id}] ${zh ? r.rule.nameZh : r.rule.name}\n` +
    `   📍 ${r.file}:${r.line}  (${r.rule.cwe || 'N/A'})\n` +
    `   💡 ${zh ? r.rule.fixZh : r.rule.fix}`
  ).join('\n\n');
  const more = report.results.length > shown.length ? `\n\n… ${report.results.length - shown.length} more` : '';
  return `${head}\n${sevLine}\n\n${body}${more}`;
}

function globMatch(name: string, pattern: string): boolean {
  const re = new RegExp('^' + pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.') + '$');
  return re.test(name);
}
