import type { Kaos } from '@nighthawk/kaos';
import { basename, join } from 'pathe';

import type { SecurityRule, Severity } from './rules';
import { detectLanguage, SECURITY_RULES } from './rules';

export type { Severity } from './rules';

export interface ScanResult {
  rule: SecurityRule;
  file: string;
  line: number;
  match: string;
  context: string;
}

export interface ScanReport {
  results: ScanResult[];
  filesScanned: number;
  durationMs: number;
  bySeverity: Record<string, number>;
  byCategory: Record<string, number>;
}

export interface SecretFinding {
  file: string;
  line: number;
  type: string;
  preview: string;
  entropy: number;
  confidence: 'high' | 'medium';
}

export interface TaintFinding {
  file: string;
  source: { line: number; desc: string };
  sink: { line: number; desc: string; risk: string };
  varName: string;
  flow: string;
}

export const SKIP_DIRS = new Set([
  'node_modules', '.git', '.hg', '.svn', 'dist', 'build', 'out', 'target',
  'vendor', '.venv', 'venv', '__pycache__', '.tox', '.mypy_cache', '.idea',
  '.next', '.nuxt', 'coverage', '.turbo', '.cache',
]);

const SEVERITY_ORDER: Record<Severity, number> = { critical: 0, high: 1, medium: 2, low: 3, info: 4 };

const MAX_SCAN_FILES = 5000;
const MAX_RESULTS_PER_FILE = 200;
const MAX_FILE_BYTES = 2_000_000;

export interface ScanOptions {
  root: string;
  include?: string;
  minSeverity?: Severity;
  categories?: readonly string[];
  maxFiles?: number;
}

function globMatch(name: string, pattern: string): boolean {
  const re = new RegExp(
    `^${pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.')}$`,
  );
  return re.test(name);
}

export async function collectFiles(
  kaos: Kaos,
  root: string,
  include?: string,
  maxFiles = MAX_SCAN_FILES,
): Promise<string[]> {
  const files: string[] = [];
  let rootIsFile = false;
  try {
    const stat = await kaos.stat(root);
    rootIsFile = (stat.stMode & 0o170000) === 0o100000;
  } catch {
    return [];
  }
  if (rootIsFile) return [root];

  async function walk(dir: string): Promise<void> {
    if (files.length >= maxFiles) return;
    try {
      for await (const entry of kaos.iterdir(dir)) {
        if (files.length >= maxFiles) return;
        // iterdir yields full paths; derive the basename for filters.
        const name = basename(entry);
        if (SKIP_DIRS.has(name) || (name.startsWith('.') && name !== '.github')) continue;
        const full = entry;
        let isDir = false;
        try {
          const st = await kaos.stat(full, { followSymlinks: false });
          isDir = (st.stMode & 0o170000) === 0o040000;
        } catch {
          continue;
        }
        if (isDir) await walk(full);
        else if (include === undefined || globMatch(name, include)) files.push(full);
      }
    } catch {
      // unreadable directory — skip
    }
  }
  await walk(root);
  return files;
}

export function scanContent(content: string, file: string, rules: readonly SecurityRule[]): ScanResult[] {
  const lang = detectLanguage(file);
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
          rule,
          file,
          line,
          match: m[0].slice(0, 200),
          context: lines
            .slice(Math.max(0, line - 2), line + 1)
            .map((l, i) => `  ${String(Math.max(1, line - 1) + i)} | ${l}`)
            .join('\n'),
        });
        if (out.length > MAX_RESULTS_PER_FILE) return out;
      }
    }
  }
  return out;
}

export async function runScan(kaos: Kaos, opts: ScanOptions): Promise<ScanReport> {
  const start = Date.now();
  const minSev = opts.minSeverity !== undefined ? (SEVERITY_ORDER[opts.minSeverity] ?? 99) : 99;
  let rules = SECURITY_RULES_FILTERED(minSev);
  if (opts.categories?.length) {
    const cats = new Set(opts.categories);
    rules = rules.filter(r => cats.has(r.category));
  }
  const files = await collectFiles(kaos, opts.root, opts.include, opts.maxFiles);
  const results: ScanResult[] = [];
  const CONCURRENCY = 16;
  for (let i = 0; i < files.length; i += CONCURRENCY) {
    const batch = files.slice(i, i + CONCURRENCY);
    const settled = await Promise.all(
      batch.map(async f => {
        try {
          const stat = await kaos.stat(f);
          if (stat.stSize > MAX_FILE_BYTES) return [];
          const content = await kaos.readText(f, { errors: 'replace' });
          return scanContent(content, f, rules);
        } catch {
          return [];
        }
      }),
    );
    results.push(...settled.flat());
  }
  results.sort((a, b) => (SEVERITY_ORDER[a.rule.severity] ?? 99) - (SEVERITY_ORDER[b.rule.severity] ?? 99));
  const bySeverity: Record<string, number> = {};
  const byCategory: Record<string, number> = {};
  for (const r of results) {
    bySeverity[r.rule.severity] = (bySeverity[r.rule.severity] ?? 0) + 1;
    byCategory[r.rule.category] = (byCategory[r.rule.category] ?? 0) + 1;
  }
  return { results, filesScanned: files.length, durationMs: Date.now() - start, bySeverity, byCategory };
}

function SECURITY_RULES_FILTERED(minSev: number): readonly SecurityRule[] {
  return SECURITY_RULES.filter(r => (SEVERITY_ORDER[r.severity] ?? 99) <= minSev);
}

export function formatScanReport(report: ScanReport): string {
  const sevIcon: Record<string, string> = {
    critical: '[CRITICAL]',
    high: '[HIGH]',
    medium: '[MEDIUM]',
    low: '[LOW]',
    info: '[INFO]',
  };
  const head = `Security scan complete: ${String(report.filesScanned)} files scanned, ${String(report.results.length)} findings (${String(report.durationMs)}ms)`;
  const sevLine =
    Object.entries(report.bySeverity)
      .map(([s, n]) => `${sevIcon[s] ?? s} ${s}: ${String(n)}`)
      .join('  ') || 'No findings';
  const shown = report.results.slice(0, 50);
  const body = shown
    .map(
      r =>
        `${sevIcon[r.rule.severity] ?? r.rule.severity} [${r.rule.id}] ${r.rule.name}\n` +
        `   ${r.file}:${String(r.line)}  (${r.rule.cwe ?? 'N/A'}${r.rule.owasp ? `, ${r.rule.owasp}` : ''})\n` +
        `   Fix: ${r.rule.fix}`,
    )
    .join('\n\n');
  const more =
    report.results.length > shown.length ? `\n\n... ${String(report.results.length - shown.length)} more findings` : '';
  return `${head}\n${sevLine}\n\n${body}${more}`;
}

// ── Secret scanning ───────────────────────────────────────────────

interface SecretPattern {
  type: string;
  re: RegExp;
  confidence: 'high' | 'medium';
  minEntropy?: number;
}

const PATTERNS: SecretPattern[] = [
  { type: 'AWS Access Key', re: /AKIA[0-9A-Z]{16}/g, confidence: 'high' },
  { type: 'AWS Secret Key', re: /(?<=["'`\s])[A-Za-z0-9/+=]{40}(?=["'`\s])/g, confidence: 'medium', minEntropy: 3.5 },
  { type: 'GitHub Token', re: /gh[pousr]_[A-Za-z0-9]{36,}/g, confidence: 'high' },
  { type: 'GitLab Token', re: /glpat-[A-Za-z0-9\-_]{20,}/g, confidence: 'high' },
  { type: 'Slack Token', re: /xox[baprs]-[A-Za-z0-9\-]{10,}/g, confidence: 'high' },
  { type: 'Google API Key', re: /AIza[0-9A-Za-z\-_]{35}/g, confidence: 'high' },
  { type: 'Private Key Block', re: /-----BEGIN (?:RSA |EC |DSA |OPENSSH |PGP )?PRIVATE KEY-----/g, confidence: 'high' },
  { type: 'JWT', re: /eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{5,}/g, confidence: 'medium' },
  { type: 'OpenAI Key', re: /sk-(?:proj-)?[A-Za-z0-9_-]{20,}/g, confidence: 'high' },
  { type: 'Anthropic Key', re: /sk-ant-[A-Za-z0-9_-]{20,}/g, confidence: 'high' },
  { type: 'MongoDB URI', re: /mongodb(?:\+srv)?:\/\/[^:\s"']+:[^@\s"']+@/g, confidence: 'high' },
  { type: 'PostgreSQL URI', re: /postgres(?:ql)?:\/\/[^:\s"']+:[^@\s"']+@/g, confidence: 'high' },
  { type: 'MySQL URI', re: /mysql:\/\/[^:\s"']+:[^@\s"']+@/g, confidence: 'high' },
  { type: 'Redis URI', re: /rediss?:\/\/[^:\s"']*:[^@\s"']+@/g, confidence: 'high' },
  { type: 'Stripe Key', re: /sk_live_[A-Za-z0-9]{24,}|pk_live_[A-Za-z0-9]{24,}/g, confidence: 'high' },
  { type: 'Telegram Bot Token', re: /\d{8,10}:AA[A-Za-z0-9_-]{33}/g, confidence: 'high' },
  { type: 'Tencent Cloud Secret', re: /(?<=["'`\s])[A-Za-z0-9]{36}(?=["'`\s])/g, confidence: 'medium', minEntropy: 3.8 },
];

const KEY_ASSIGN =
  /(?:secret|token|key|password|passwd|credential|api_key|apikey|access_key)\s*[=:]\s*["'`]([A-Za-z0-9+/_=-]{16,})["'`]/gi;

function shannonEntropy(s: string): number {
  const freq: Record<string, number> = {};
  for (const c of s) freq[c] = (freq[c] ?? 0) + 1;
  return Object.values(freq).reduce((e, n) => {
    const p = n / s.length;
    return e - p * Math.log2(p);
  }, 0);
}

function mask(s: string): string {
  if (s.length <= 12) return `${s.slice(0, 4)}****`;
  return `${s.slice(0, 8)}...${s.slice(-4)}`;
}

export function scanSecretsInContent(content: string, file: string): SecretFinding[] {
  const findings: SecretFinding[] = [];
  for (const p of PATTERNS) {
    p.re.lastIndex = 0;
    for (const m of content.matchAll(p.re)) {
      const line = content.slice(0, m.index ?? 0).split('\n').length;
      const ent = shannonEntropy(m[0]);
      if (p.minEntropy !== undefined && ent < p.minEntropy) continue;
      findings.push({
        file,
        line,
        type: p.type,
        preview: mask(m[0]),
        entropy: Number(ent.toFixed(2)),
        confidence: p.confidence,
      });
    }
  }
  KEY_ASSIGN.lastIndex = 0;
  for (const m of content.matchAll(KEY_ASSIGN)) {
    const line = content.slice(0, m.index ?? 0).split('\n').length;
    const val = m[1] ?? '';
    const ent = shannonEntropy(val);
    if (ent > 3.2 && !/^(?:true|false|null|undefined|none|0+|x+|test|example|placeholder|your[_-]?)\w*$/i.test(val)) {
      findings.push({
        file,
        line,
        type: 'Hardcoded Credential',
        preview: mask(val),
        entropy: Number(ent.toFixed(2)),
        confidence: ent > 4 ? 'high' : 'medium',
      });
    }
  }
  return findings;
}

export async function scanSecrets(kaos: Kaos, root: string, include?: string): Promise<SecretFinding[]> {
  const findings: SecretFinding[] = [];
  const files = await collectFiles(kaos, root, include);
  const CONCURRENCY = 16;
  for (let i = 0; i < files.length; i += CONCURRENCY) {
    const batch = files.slice(i, i + CONCURRENCY);
    const settled = await Promise.all(
      batch.map(async f => {
        try {
          const stat = await kaos.stat(f);
          if (stat.stSize > MAX_FILE_BYTES) return [];
          const content = await kaos.readText(f, { errors: 'replace' });
          return scanSecretsInContent(content, f);
        } catch {
          return [];
        }
      }),
    );
    findings.push(...settled.flat());
  }
  return findings;
}

export function formatSecrets(findings: readonly SecretFinding[]): string {
  if (findings.length === 0) return 'No secrets or credentials detected.';
  const header = `Secret scan: ${String(findings.length)} potential secret(s) found:\n`;
  return (
    header +
    findings
      .slice(0, 50)
      .map(
        f =>
          `CONFIDENT ${f.confidence.toUpperCase()} [${f.type}]\n` +
          `   ${f.file}:${String(f.line)}  entropy=${String(f.entropy)}\n` +
          `   preview: ${f.preview}`,
      )
      .join('\n\n')
  );
}

// ── Taint analysis ────────────────────────────────────────────────

const SOURCES: ReadonlyArray<{ re: RegExp; desc: string }> = [
  { re: /request\.(?:GET|POST|args|form|values|data|json|files)(?:\.get\()?\[?\s*['"`]?(\w+)/gi, desc: 'Flask/Django request' },
  { re: /req\.(?:query|params|body|cookies|headers)\.(\w+)/gi, desc: 'Express req' },
  { re: /(?:params|query|args|input|request|event)\[?\s*['"`]?(\w+)/gi, desc: 'user input' },
  { re: /(?:input|gets|readline|Scanner|stdin)\s*\(\s*\)/gi, desc: 'stdin read' },
  { re: /\$_(?:GET|POST|REQUEST|COOKIE|SERVER)\[.?.?(\w+)/gi, desc: 'PHP superglobal' },
  { re: /os\.environ(?:\.get)?\[(?:'|"|`)(\w+)/gi, desc: 'env var' },
];

const SINKS: ReadonlyArray<{ re: RegExp; desc: string; risk: string }> = [
  { re: /(?:execute|executemany|query|raw)\s*\(/gi, desc: 'SQL execute', risk: 'SQL Injection' },
  { re: /os\.(?:system|popen)\s*\(|subprocess\.(?:run|call|Popen|check_output)\s*\(/gi, desc: 'shell exec', risk: 'Command Injection' },
  { re: /child_process\.(?:exec|execSync|spawn)\s*\(|Runtime\./gi, desc: 'process exec', risk: 'Command Injection' },
  { re: /(?:eval|new\s+Function|exec)\s*\(/gi, desc: 'eval', risk: 'Code Injection' },
  { re: /\.innerHTML\s*=|document\.write\s*\(/gi, desc: 'DOM write', risk: 'XSS' },
  { re: /(?:open|readFile|writeFile|sendFile|File)\s*\(/gi, desc: 'file op', risk: 'Path Traversal' },
  { re: /(?:requests\.|fetch|axios|urlopen|http\.Get)/gi, desc: 'HTTP request', risk: 'SSRF' },
  { re: /(?:pickle\.|unserialize|Marshal\.|yaml\.load)\s*\(/gi, desc: 'deserialize', risk: 'Deserialization' },
];

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function taintAnalyzeContent(content: string, file: string): TaintFinding[] {
  const lines = content.split('\n');
  const findings: TaintFinding[] = [];

  const tainted = new Map<string, { line: number; desc: string }>();
  lines.forEach((line, i) => {
    for (const src of SOURCES) {
      src.re.lastIndex = 0;
      const m = src.re.exec(line);
      if (m) {
        const assign = line.match(/(?:const|let|var|\b)\s*(\w+)\s*=\s*[^=]/);
        const varName = assign?.[1] ?? m[1];
        if (
          varName !== undefined &&
          varName.length > 1 &&
          !['if', 'for', 'while', 'return', 'const', 'let', 'var'].includes(varName)
        ) {
          tainted.set(varName, { line: i + 1, desc: src.desc });
        }
      }
    }
  });

  if (tainted.size === 0) return [];

  for (let pass = 0; pass < 3; pass++) {
    let changed = false;
    for (const line of lines) {
      const assign = line.match(/(\w+)\s*=\s*(.*)/);
      if (!assign) continue;
      const target = assign[1] ?? '';
      const rhs = assign[2] ?? '';
      for (const [srcVar, meta] of tainted) {
        if (rhs.includes(srcVar) && !tainted.has(target)) {
          tainted.set(target, meta);
          changed = true;
        }
      }
    }
    if (!changed) break;
  }

  lines.forEach((line, i) => {
    for (const sink of SINKS) {
      sink.re.lastIndex = 0;
      if (!sink.re.test(line)) continue;
      for (const [varName, meta] of tainted) {
        const useRe = new RegExp(`\\b${escapeRe(varName)}\\b`);
        if (useRe.test(line)) {
          findings.push({
            file,
            source: meta,
            sink: { line: i + 1, desc: line.trim().slice(0, 100), risk: sink.risk },
            varName,
            flow: `L${String(meta.line)} [${meta.desc}] -> ${varName} -> L${String(i + 1)} [${sink.desc}]`,
          });
        }
      }
    }
  });

  return findings;
}

export async function taintAnalyze(kaos: Kaos, file: string): Promise<TaintFinding[]> {
  try {
    const content = await kaos.readText(file, { errors: 'replace' });
    return taintAnalyzeContent(content, file);
  } catch {
    return [];
  }
}

export function formatTaint(findings: readonly TaintFinding[]): string {
  if (findings.length === 0) return 'No taint flows found.';
  const header = `Taint analysis: ${String(findings.length)} flow(s) found:\n`;
  return (
    header +
    findings
      .slice(0, 30)
      .map(
        f =>
          `RISK [${f.sink.risk}]\n` +
          `   Flow: ${f.flow}\n` +
          `   Source: L${String(f.source.line)} (${f.source.desc})\n` +
          `   Sink:   L${String(f.sink.line)}: ${f.sink.desc}`,
      )
      .join('\n\n')
  );
}
