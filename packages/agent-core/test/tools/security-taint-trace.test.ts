import { describe, expect, it } from 'vitest';

import { taintAnalyzeContent } from '../../src/tools/builtin/security/engine.js';

describe('taint analysis content', () => {
  it('detects a direct source-to-sink flow', () => {
    const findings = taintAnalyzeContent('eval(req.query.input)', 'route.ts');

    expect(findings).toHaveLength(1);
    expect(findings[0]?.varName).toBe('input');
    expect(findings[0]?.sink.risk).toBe('Code Injection');
  });

  it('tracks taint through one variable assignment', () => {
    const findings = taintAnalyzeContent('const userInput = req.body.input;\neval(userInput)', 'route.ts');

    expect(findings.some(finding => finding.varName === 'userInput')).toBe(true);
  });

  it('tracks taint through multiple assignments', () => {
    const findings = taintAnalyzeContent('const userInput = req.body.input;\nconst cmd = userInput;\neval(cmd)', 'route.ts');

    expect(findings.some(finding => finding.varName === 'cmd')).toBe(true);
    expect(findings[0]?.source.line).toBe(1);
  });

  it('does not track flows beyond the propagation limit', () => {
    const content = [
      'let a = req.body.value;',
      'let b = a;',
      'let c = b;',
      'let d = c;',
      'let e = d;',
      'eval(e)',
    ].join('\n');

    const findings = taintAnalyzeContent(content, 'route.ts');

    expect(findings).toEqual([]);
  });

  it('does not report an unrelated safe variable', () => {
    const findings = taintAnalyzeContent('let x = "safe";\neval("test")', 'route.ts');

    expect(findings).toEqual([]);
  });

  it('returns no findings for an empty file', () => {
    expect(taintAnalyzeContent('', 'empty.ts')).toEqual([]);
  });
});
