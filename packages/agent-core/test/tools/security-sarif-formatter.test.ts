import { describe, expect, it } from 'vitest';

import type { NormalizedFinding, ScanMetrics, FindingEvidence } from '../../src/tools/builtin/security/engine.js';
import {
  buildSarifRules,
  formatToSarif,
  normalizeFileUri,
  severityToLevel,
} from '../../src/tools/builtin/security/sarif-formatter.js';
import { SECURITY_RULES } from '../../src/tools/builtin/security/rules.js';

function makeFinding(overrides: Partial<NormalizedFinding> & { severity?: string } = {}): NormalizedFinding {
  return {
    file: 'src/app.ts',
    startLine: 10,
    message: 'SQL injection detected',
    severity: (overrides.severity as any) ?? 'high',
    evidence: [
      { kind: 'rule', ruleId: 'sqli-001', source: 'regex', confidence: 'medium' },
    ],
    ...overrides,
  };
}

describe('severityToLevel', () => {
  it('critical → error', () => {
    expect(severityToLevel('critical')).toBe('error');
  });

  it('high → error', () => {
    expect(severityToLevel('high')).toBe('error');
  });

  it('medium → warning', () => {
    expect(severityToLevel('medium')).toBe('warning');
  });

  it('low → note', () => {
    expect(severityToLevel('low')).toBe('note');
  });

  it('info → none', () => {
    expect(severityToLevel('info')).toBe('none');
  });
});

describe('normalizeFileUri', () => {
  it('strips leading slash from absolute path', () => {
    expect(normalizeFileUri('/Users/dev/project/src/app.ts')).toBe('Users/dev/project/src/app.ts');
  });

  it('converts Windows absolute path', () => {
    expect(normalizeFileUri('C:\\Users\\dev\\src\\app.ts')).toBe('Users/dev/src/app.ts');
  });

  it('converts backslashes to forward slashes', () => {
    expect(normalizeFileUri('C:\\foo\\bar\\baz.ts')).toBe('foo/bar/baz.ts');
  });

  it('passes through relative path unchanged', () => {
    expect(normalizeFileUri('src/app.ts')).toBe('src/app.ts');
  });
});

describe('buildSarifRules', () => {
  it('extracts unique ruleIds from findings evidence', () => {
    const findings = [
      makeFinding({ evidence: [{ kind: 'rule', ruleId: 'sqli-001', source: 'regex', confidence: 'medium' }] }),
      makeFinding({
        file: 'src/other.ts',
        evidence: [{ kind: 'rule', ruleId: 'xss-003', source: 'regex', confidence: 'high' }],
      }),
      makeFinding({
        file: 'src/third.ts',
        evidence: [{ kind: 'rule', ruleId: 'sqli-001', source: 'regex', confidence: 'low' }],
      }),
    ];

    const rules = buildSarifRules(findings);
    expect(rules).toHaveLength(2);
    expect(rules.map(r => r.id).sort()).toEqual(['sqli-001', 'xss-003']);
  });

  it('includes CWE and OWASP tags when allRules provided', () => {
    const findings = [
      makeFinding({
        severity: 'critical',
        evidence: [{ kind: 'rule', ruleId: 'sqli-001', source: 'regex', confidence: 'high' }],
      }),
    ];

    const sqliRule = SECURITY_RULES.find(r => r.id === 'sqli-001');
    const allRules = sqliRule !== undefined
      ? [{ id: sqliRule.id, name: sqliRule.name, description: sqliRule.description, cwe: sqliRule.cwe, owasp: sqliRule.owasp }]
      : [];

    const rules = buildSarifRules(findings, allRules);
    expect(rules).toHaveLength(1);
    expect(rules[0].properties?.tags).toBeDefined();
    if (rules[0].properties?.tags !== undefined) {
      expect(rules[0].properties.tags.some(t => t.startsWith('CWE-'))).toBe(true);
    }
  });

  it('returns empty array for empty findings', () => {
    expect(buildSarifRules([])).toEqual([]);
  });
});

describe('formatToSarif', () => {
  it('empty findings → empty results array', () => {
    const sarif = formatToSarif([]);
    expect(sarif.version).toBe('2.1.0');
    expect(sarif.runs).toHaveLength(1);
    expect(sarif.runs[0].results).toEqual([]);
    expect(sarif.runs[0].tool.driver.name).toBe('NightHawk SecurityScan');
  });

  it('single critical finding → level is error', () => {
    const sarif = formatToSarif([makeFinding({ severity: 'critical' })]);
    expect(sarif.runs[0].results).toHaveLength(1);
    expect(sarif.runs[0].results[0].level).toBe('error');
  });

  it('single medium finding → level is warning', () => {
    const sarif = formatToSarif([makeFinding({ severity: 'medium' })]);
    expect(sarif.runs[0].results[0].level).toBe('warning');
  });

  it('single low finding → level is note', () => {
    const sarif = formatToSarif([makeFinding({ severity: 'low' })]);
    expect(sarif.runs[0].results[0].level).toBe('note');
  });

  it('single info finding → level is none', () => {
    const sarif = formatToSarif([makeFinding({ severity: 'info' })]);
    expect(sarif.runs[0].results[0].level).toBe('none');
  });

  it('multiple findings in same file → same uri', () => {
    const sarif = formatToSarif([
      makeFinding({ file: '/app/src/auth.ts', startLine: 5, severity: 'high' }),
      makeFinding({ file: '/app/src/auth.ts', startLine: 42, severity: 'medium' }),
    ]);
    const uris = sarif.runs[0].results.map(r => r.locations[0].physicalLocation.artifactLocation.uri);
    expect(uris.every(u => u === 'app/src/auth.ts')).toBe(true);
  });

  it('finding with evidence → properties.evidence is passed through', () => {
    const evidence: FindingEvidence[] = [
      { kind: 'rule', ruleId: 'xss-001', source: 'regex', confidence: 'high', analyzerVersion: '1.0' },
    ];
    const sarif = formatToSarif([makeFinding({ evidence })]);
    const result = sarif.runs[0].results[0];
    expect(result.properties).toBeDefined();
    expect(result.properties?.evidence).toHaveLength(1);
    expect(result.properties?.evidence?.[0].ruleId).toBe('xss-001');
    expect(result.properties?.confidence).toBe('high');
  });

  it('metrics present → invocations[0].properties.metrics', () => {
    const metrics: ScanMetrics = {
      filesScanned: 100,
      filesSkipped: 2,
      filesParseFailed: 1,
      cacheHits: 50,
      durationMs: 1234,
    };
    const sarif = formatToSarif([makeFinding()], metrics);
    expect(sarif.runs[0].invocations).toHaveLength(1);
    expect(sarif.runs[0].invocations?.[0].executionSuccessful).toBe(true);
    expect(sarif.runs[0].invocations?.[0].properties?.metrics).toEqual(metrics);
  });

  it('multiple files → results are grouped by file', () => {
    const sarif = formatToSarif([
      makeFinding({ file: 'z-file.ts', startLine: 1, severity: 'high' }),
      makeFinding({ file: 'a-file.ts', startLine: 1, severity: 'medium' }),
      makeFinding({ file: 'z-file.ts', startLine: 5, severity: 'low' }),
    ]);
    const files = sarif.runs[0].results.map(r => r.locations[0].physicalLocation.artifactLocation.uri);
    expect(files).toEqual(['a-file.ts', 'z-file.ts', 'z-file.ts']);
  });
});
