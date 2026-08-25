// ═══════════════════════════════════════════════════════════════════
// 污点分析（Taint Analysis）— Source → Propagation → Sink
// 基于变量赋值链的文件内轻量级数据流追踪（AST 级思想的正则实现）
// ═══════════════════════════════════════════════════════════════════
import fs from 'node:fs';

export interface TaintFinding {
  file: string;
  source: { line: number; desc: string };
  sink: { line: number; desc: string; risk: string };
  varName: string;
  flow: string;
}

const SOURCES: Array<{ re: RegExp; desc: string }> = [
  { re: /request\.(?:GET|POST|args|form|values|data|json|files)(?:\.get\()?\[?\s*['"`]?(\w+)/gi, desc: 'Flask/Django request' },
  { re: /req\.(?:query|params|body|cookies|headers)\.(\w+)/gi, desc: 'Express req' },
  { re: /(?:params|query|args|input|request|event)\[?\s*['"`]?(\w+)/gi, desc: 'user input' },
  { re: /(?:input|gets|readline|Scanner|stdin)\s*\(\s*\)/gi, desc: 'stdin read' },
  { re: /\$_(?:GET|POST|REQUEST|COOKIE|SERVER)\[.?.?(\w+)/gi, desc: 'PHP superglobal' },
  { re: /os\.environ(?:\.get)?\[(?:'|"|`)(\w+)/gi, desc: 'env var' },
];

const SINKS: Array<{ re: RegExp; desc: string; risk: string }> = [
  { re: /(?:execute|executemany|query|raw)\s*\(/gi, desc: 'SQL execute', risk: 'SQL Injection' },
  { re: /os\.(?:system|popen)\s*\(|subprocess\.(?:run|call|Popen|check_output)\s*\(/gi, desc: 'shell exec', risk: 'Command Injection' },
  { re: /child_process\.(?:exec|execSync|spawn)\s*\(|Runtime\./gi, desc: 'process exec', risk: 'Command Injection' },
  { re: /(?:eval|new\s+Function|exec)\s*\(/gi, desc: 'eval', risk: 'Code Injection' },
  { re: /\.innerHTML\s*=|document\.write\s*\(/gi, desc: 'DOM write', risk: 'XSS' },
  { re: /(?:open|readFile|writeFile|sendFile|File)\s*\(/gi, desc: 'file op', risk: 'Path Traversal' },
  { re: /(?:requests\.|fetch|axios|urlopen|http\.Get)/gi, desc: 'HTTP request', risk: 'SSRF' },
  { re: /(?:pickle\.|unserialize|Marshal\.|yaml\.load)\s*\(/gi, desc: 'deserialize', risk: 'Deserialization' },
];

export function taintAnalyze(file: string): TaintFinding[] {
  let content: string;
  try { content = fs.readFileSync(file, 'utf-8'); } catch { return []; }
  const lines = content.split('\n');
  const findings: TaintFinding[] = [];

  // 1. 找 Sources：记录被污染的变量名及其行号
  const tainted = new Map<string, { line: number; desc: string }>();
  lines.forEach((line, i) => {
    for (const src of SOURCES) {
      src.re.lastIndex = 0;
      const m = src.re.exec(line);
      if (m) {
        // 提取赋值目标变量：var = ... source ... / const x = req.query.y
        const assign = line.match(/(?:const|let|var|\b)\s*(\w+)\s*=\s*[^=]/);
        const varName = assign?.[1] || m[1];
        if (varName && varName.length > 1 && !['if', 'for', 'while', 'return', 'const', 'let', 'var'].includes(varName)) {
          tainted.set(varName, { line: i + 1, desc: src.desc });
        }
      }
    }
  });

  if (tainted.size === 0) return [];

  // 2. 传播：污染变量二次赋值（varB = f(varA)）
  for (let pass = 0; pass < 3; pass++) {
    let changed = false;
    lines.forEach(line => {
      const assign = line.match(/(\w+)\s*=\s*(.*)/);
      if (!assign) return;
      const [_, target, rhs] = assign;
      for (const [srcVar, meta] of tainted) {
        if (rhs.includes(srcVar) && !tainted.has(target)) {
          tainted.set(target, meta);
          changed = true;
        }
      }
    });
    if (!changed) break;
  }

  // 3. 找 Sinks：污染变量流入危险函数
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
            flow: `L${meta.line} [${meta.desc}] → ${varName} → L${i + 1} [${sink.desc}]`,
          });
        }
      }
    }
  });

  return findings;
}

export function formatTaint(findings: TaintFinding[]): string {
  if (!findings.length) return 'No taint flows found. 未发现污点传播路径。';
  const header = `Taint Analysis — ${findings.length} flow(s) found:\n`;
  return header + findings.slice(0, 30).map(f =>
    `🚨 ${f.sink.risk}\n` +
    `   Flow: ${f.flow}\n` +
    `   Source: L${f.source.line} (${f.source.desc})\n` +
    `   Sink:   L${f.sink.line}: ${f.sink.desc}`
  ).join('\n\n');
}

function escapeRe(s: string): string { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
