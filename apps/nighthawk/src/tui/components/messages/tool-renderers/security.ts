/**
 * Security tool renderers — chips + collapsed-glance bodies for
 * SecurityScan, SecretScan, TaintTrace, and DepAudit.
 *
 * The tools emit human-readable reports (severity counts, findings with
 * file:line anchors). The chip owns the numeric headline ("3 findings",
 * "clean"); the glance shows the report header plus the top findings,
 * tinted by severity so the user can triage without expanding. Errors
 * fall through to the truncated renderer, and the raw report appears
 * when the global expand toggle is on.
 */

import { Text, type Component } from '@nighthawk/pi-tui';

import { currentTheme } from '#/tui/theme';
import type { ToolResultBlockData } from '#/tui/types';

import { renderTruncated } from './truncated';
import type { ChipProvider } from './chip';
import type { ResultRenderer } from './types';

const GLANCE_SAMPLES = 3;

type ThemeTone = 'error' | 'warning' | 'primary' | 'success';

function toneForSeverity(severity: string): ThemeTone {
  if (severity === 'critical') return 'error';
  if (severity === 'high') return 'warning';
  if (severity === 'medium') return 'primary';
  return 'success';
}

/** Glance body with severity-tinted finding lines; raw output when expanded. */
function withSeverityGlance(
  glance: (result: ToolResultBlockData) => string[],
): ResultRenderer {
  return (toolCall, result, ctx) => {
    if (result.is_error) return renderTruncated(toolCall, result, ctx);
    const out: Component[] = [];
    for (const line of glance(result)) {
      const sev = /^\[(CRITICAL|HIGH|MEDIUM|LOW|INFO)\]/.exec(line);
      const styled =
        sev !== null
          ? currentTheme.fg(toneForSeverity((sev[1] ?? 'info').toLowerCase()), line)
          : currentTheme.dim(line);
      out.push(new Text(`  ${styled}`, 0, 0));
    }
    if (ctx.expanded && result.output.length > 0) {
      out.push(new Text(currentTheme.dim(result.output), 4, 0));
    }
    return out;
  };
}

function tailLine(total: number, shown: number, noun: string): string[] {
  const remaining = total - shown;
  if (remaining <= 0) return [];
  return [`+${String(remaining)} more ${noun} (expand for details)`];
}

// ── SecurityScan ──────────────────────────────────────────────────

interface ScanFindingView {
  readonly severity: string;
  readonly title: string;
  readonly location: string;
}

function parseScanFindings(output: string): ScanFindingView[] {
  const findings: ScanFindingView[] = [];
  // Finding blocks look like:
  //   [CRITICAL] [sqli-002] SQL injection: f-string SQL
  //      src/app.py:12  (CWE-89)
  const re =
    /^\[(CRITICAL|HIGH|MEDIUM|LOW|INFO)\] \[[^\]]+\] (.+)$|^\s+(\S+:\d+)\s+\((?:CWE-[\d-]+[^)]*)\)$/gm;
  let title: string | undefined;
  let severity: string | undefined;
  for (const m of output.matchAll(re)) {
    if (m[1] !== undefined) {
      severity = m[1].toLowerCase();
      title = m[2];
    } else if (title !== undefined && severity !== undefined) {
      findings.push({ severity, title, location: m[3] ?? '' });
      title = undefined;
      severity = undefined;
    }
  }
  return findings;
}

export const securityScanChip: ChipProvider = (_toolCall, result) => {
  const m = result.output.match(/(\d+) files scanned, (\d+) findings/);
  if (m === null) return '';
  const findings = Number(m[2]);
  if (findings === 0) return 'clean';
  return `${String(findings)} ${findings === 1 ? 'finding' : 'findings'}`;
};

export const securityScanSummary: ResultRenderer = withSeverityGlance((result) => {
  const lines: string[] = [];
  const header = result.output.match(/Security scan complete: (.+)$/m);
  if (header !== null) lines.push(header[1] ?? '');
  const findings = parseScanFindings(result.output);
  const shown = findings.slice(0, GLANCE_SAMPLES);
  for (const f of shown) {
    lines.push(`[${f.severity.toUpperCase()}] ${f.title} — ${f.location}`);
  }
  lines.push(...tailLine(findings.length, shown.length, 'findings'));
  return lines;
});

// ── SecretScan ────────────────────────────────────────────────────

interface SecretView {
  readonly confidence: string;
  readonly type: string;
  readonly location: string;
  readonly entropy: string;
}

function parseSecrets(output: string): SecretView[] {
  const views: SecretView[] = [];
  const re = /^CONFIDENT (HIGH|MEDIUM) \[([^\]]+)\]\n\s+(\S+:\d+)\s+entropy=([\d.]+)/gm;
  for (const m of output.matchAll(re)) {
    views.push({
      confidence: (m[1] ?? 'MEDIUM').toLowerCase(),
      type: m[2] ?? 'secret',
      location: m[3] ?? '',
      entropy: m[4] ?? '0',
    });
  }
  return views;
}

export const secretScanChip: ChipProvider = (_toolCall, result) => {
  if (/No secrets/i.test(result.output)) return 'clean';
  const m = result.output.match(/(\d+) potential secret/i);
  if (m === null) return '';
  const count = Number(m[1]);
  return `${String(count)} potential ${count === 1 ? 'secret' : 'secrets'}`;
};

export const secretScanSummary: ResultRenderer = withSeverityGlance((result) => {
  const secrets = parseSecrets(result.output);
  if (secrets.length === 0) {
    const noFindings = result.output.match(/^(No secrets.*)$/m);
    return noFindings !== null ? [noFindings[1] ?? ''] : [];
  }
  const lines: string[] = [];
  const shown = secrets.slice(0, GLANCE_SAMPLES);
  for (const s of shown) {
    lines.push(`[${s.confidence.toUpperCase()}] ${s.type} — ${s.location} (entropy ${s.entropy})`);
  }
  lines.push(...tailLine(secrets.length, shown.length, 'secrets'));
  return lines;
});

// ── TaintTrace ────────────────────────────────────────────────────

interface TaintView {
  readonly risk: string;
  readonly flow: string;
}

function parseTaintFlows(output: string): TaintView[] {
  const views: TaintView[] = [];
  const re = /^RISK \[([^\]]+)\]\n\s+Flow: (.+)$/gm;
  for (const m of output.matchAll(re)) {
    views.push({ risk: m[1] ?? 'risk', flow: m[2] ?? '' });
  }
  return views;
}

export const taintTraceChip: ChipProvider = (_toolCall, result) => {
  if (/No taint flows/i.test(result.output)) return 'no flows';
  const m = result.output.match(/(\d+) flow/i);
  if (m === null) return '';
  const count = Number(m[1]);
  return `${String(count)} ${count === 1 ? 'flow' : 'flows'}`;
};

export const taintTraceSummary: ResultRenderer = withSeverityGlance((result) => {
  const flows = parseTaintFlows(result.output);
  if (flows.length === 0) {
    const noFlows = result.output.match(/^(No taint flows.*)$/m);
    return noFlows !== null ? [noFlows[1] ?? ''] : [];
  }
  const lines: string[] = [];
  const shown = flows.slice(0, GLANCE_SAMPLES);
  for (const f of shown) {
    lines.push(`${f.risk} — ${f.flow}`);
  }
  lines.push(...tailLine(flows.length, shown.length, 'flows'));
  return lines;
});

// ── DepAudit ──────────────────────────────────────────────────────

export const depAuditChip: ChipProvider = (_toolCall, result) => {
  if (/no known-risk patterns/i.test(result.output)) return 'clean';
  const m = result.output.match(/(\d+) risk\(s\) found/);
  if (m === null) return '';
  const count = Number(m[1]);
  return `${String(count)} ${count === 1 ? 'risk' : 'risks'}`;
};

export const depAuditSummary: ResultRenderer = withSeverityGlance((result) => {
  const lines: string[] = [];
  const header = result.output.match(/^Dependency audit: (.+)$/m);
  if (header !== null) lines.push(header[1] ?? '');
  const risks = [...result.output.matchAll(/^- (\[.*?\] .+)$/gm)].map((m) => m[1] ?? '');
  const shown = risks.slice(0, GLANCE_SAMPLES);
  for (const risk of shown) lines.push(risk);
  lines.push(...tailLine(risks.length, shown.length, 'risks'));
  return lines;
});
