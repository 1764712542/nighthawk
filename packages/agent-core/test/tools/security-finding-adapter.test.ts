import { describe, it, expect } from 'vitest';

import type {
  SecretFinding,
  TaintFinding,
} from '../../src/tools/builtin/security/engine';
import {
  secretFindingToNormalized,
  taintFindingToNormalized,
} from '../../src/tools/builtin/security/engine';

import type { DepAuditFinding } from '../../src/tools/builtin/security/dep-audit';
import { depFindingToNormalized } from '../../src/tools/builtin/security/dep-audit';

// ── SecretFinding adapters ──────────────────────────────────────────
describe('secretFindingToNormalized', () => {
  it('converts high confidence secret', () => {
    const f: SecretFinding = {
      file: 'src/config.ts',
      line: 12,
      type: 'AWS Access Key',
      preview: 'AKIA****XYZW',
      entropy: 4.1,
      confidence: 'high',
    };
    const out = secretFindingToNormalized(f);
    expect(out).toEqual({
      file: 'src/config.ts',
      startLine: 12,
      message: '[secret:AWS Access Key] AKIA****XYZW',
      severity: 'high',
      evidence: [
        expect.objectContaining({
          kind: 'secret',
          source: 'regex+entropy',
          confidence: 'high',
          analyzerVersion: '1.0.0',
        }),
      ],
    });
  });

  it('converts medium confidence secret', () => {
    const f: SecretFinding = {
      file: '.env',
      line: 3,
      type: 'Hardcoded Credential',
      preview: 'abc1****xy9z',
      entropy: 3.4,
      confidence: 'medium',
    };
    const out = secretFindingToNormalized(f);
    expect(out.file).toBe('.env');
    expect(out.startLine).toBe(3);
    expect(out.severity).toBe('medium');
    expect(out.evidence[0].confidence).toBe('medium');
  });
});

// ── TaintFinding adapters ───────────────────────────────────────────
describe('taintFindingToNormalized', () => {
  it('maps SQL Injection to critical', () => {
    const f: TaintFinding = {
      file: 'app/db.py',
      source: { line: 5, desc: 'Flask/Django request' },
      sink: { line: 20, desc: 'execute()', risk: 'SQL Injection' },
      varName: 'query',
      flow: 'L5 [Flask/Django request] -> query -> L20 [execute()]',
    };
    const out = taintFindingToNormalized(f);
    expect(out.file).toBe('app/db.py');
    expect(out.startLine).toBe(5);
    expect(out.endLine).toBe(20);
    expect(out.severity).toBe('critical');
    expect(out.evidence[0].kind).toBe('taint');
  });

  it('maps XSS to high', () => {
    const f: TaintFinding = {
      file: 'views/index.ts',
      source: { line: 10, desc: 'Express req' },
      sink: { line: 30, desc: 'innerHTML assignment', risk: 'XSS' },
      varName: 'input',
      flow: 'L10 [Express req] -> input -> L30 [innerHTML assignment]',
    };
    const out = taintFindingToNormalized(f);
    expect(out.severity).toBe('high');
    expect(out.endLine).toBe(30);
  });

  it('maps Command Injection to critical', () => {
    const f: TaintFinding = {
      file: 'cmd.sh',
      source: { line: 2, desc: 'stdin read' },
      sink: { line: 8, desc: 'os.system()', risk: 'Command Injection' },
      varName: 'userInput',
      flow: 'L2 [stdin read] -> userInput -> L8 [os.system()]',
    };
    const out = taintFindingToNormalized(f);
    expect(out.severity).toBe('critical');
  });

  it('maps Code Injection to high', () => {
    const f: TaintFinding = {
      file: 'eval.ts',
      source: { line: 1, desc: 'user input' },
      sink: { line: 5, desc: 'eval()', risk: 'Code Injection' },
      varName: 'code',
      flow: 'L1 [user input] -> code -> L5 [eval()]',
    };
    const out = taintFindingToNormalized(f);
    expect(out.severity).toBe('high');
  });

  it('maps Path Traversal to medium', () => {
    const f: TaintFinding = {
      file: 'fs.py',
      source: { line: 3, desc: 'user input' },
      sink: { line: 15, desc: 'open()', risk: 'Path Traversal' },
      varName: 'filename',
      flow: 'L3 [user input] -> filename -> L15 [open()]',
    };
    const out = taintFindingToNormalized(f);
    expect(out.severity).toBe('medium');
  });

  it('maps SSRF to medium', () => {
    const f: TaintFinding = {
      file: 'net.ts',
      source: { line: 4, desc: 'user input' },
      sink: { line: 12, desc: 'fetch()', risk: 'SSRF' },
      varName: 'url',
      flow: 'L4 [user input] -> url -> L12 [fetch()]',
    };
    const out = taintFindingToNormalized(f);
    expect(out.severity).toBe('medium');
  });

  it('includes endLine from sink', () => {
    const f: TaintFinding = {
      file: 'app.py',
      source: { line: 10, desc: 'env var' },
      sink: { line: 55, desc: 'execute()', risk: 'SQL Injection' },
      varName: 'val',
      flow: 'L10 [env var] -> val -> L55 [execute()]',
    };
    const out = taintFindingToNormalized(f);
    expect(out.endLine).toBe(55);
  });
});

// ── DepAuditFinding adapters ────────────────────────────────────────
describe('depFindingToNormalized', () => {
  it('maps cve with high cvss to critical', () => {
    const f: DepAuditFinding = {
      ecosystem: 'npm',
      package: 'lodash',
      version: '4.17.20',
      kind: 'cve',
      message: 'CVE-2020-8203: prototype pollution',
      cve: 'CVE-2020-8203',
      cvss: 9.8,
    };
    const out = depFindingToNormalized(f);
    expect(out.file).toBe('lodash');
    expect(out.startLine).toBe(1);
    expect(out.severity).toBe('critical');
    expect(out.evidence[0].source).toBe('osv');
    expect(out.evidence[0].ruleId).toBe('CVE-2020-8203');
  });

  it('maps cve with low cvss to high', () => {
    const f: DepAuditFinding = {
      ecosystem: 'npm',
      package: 'ws',
      version: '7.0.0',
      kind: 'cve',
      message: 'CVE-2024-1234: minor DoS',
      cve: 'CVE-2024-1234',
      cvss: 5.3,
    };
    const out = depFindingToNormalized(f);
    expect(out.severity).toBe('high');
  });

  it('maps cve without cvss to high', () => {
    const f: DepAuditFinding = {
      ecosystem: 'pip',
      package: 'requests',
      version: '2.28.0',
      kind: 'cve',
      message: 'CVE-2023-32681: proxy header leak',
      cve: 'CVE-2023-32681',
    };
    const out = depFindingToNormalized(f);
    expect(out.severity).toBe('high');
    expect(out.evidence[0].confidence).toBe('high');
  });

  it('maps known-risk to high', () => {
    const f: DepAuditFinding = {
      ecosystem: 'npm',
      package: 'request',
      version: '*',
      kind: 'known-risk',
      message: 'deprecated since 2020',
    };
    const out = depFindingToNormalized(f);
    expect(out.severity).toBe('high');
    expect(out.evidence[0].source).toBe('offline');
    expect(out.evidence[0].confidence).toBe('medium');
  });

  it('maps script-risk to high', () => {
    const f: DepAuditFinding = {
      ecosystem: 'npm',
      package: 'package.json',
      version: 'scripts.postinstall',
      kind: 'script-risk',
      message: 'postinstall fetches remote content',
    };
    const out = depFindingToNormalized(f);
    expect(out.severity).toBe('high');
  });

  it('maps http-registry to medium', () => {
    const f: DepAuditFinding = {
      ecosystem: 'npm',
      package: 'internal-pkg',
      version: 'http://registry.internal/pkg',
      kind: 'http-registry',
      message: 'fetched over plain http',
    };
    const out = depFindingToNormalized(f);
    expect(out.severity).toBe('medium');
  });

  it('maps pseudo-version to medium', () => {
    const f: DepAuditFinding = {
      ecosystem: 'go',
      package: 'github.com/foo/bar',
      version: 'v0.0.0-20240101120000-abc123def456',
      kind: 'pseudo-version',
      message: 'pseudo-version pin; prefer a tagged release',
    };
    const out = depFindingToNormalized(f);
    expect(out.severity).toBe('medium');
  });

  it('maps loose-range to low', () => {
    const f: DepAuditFinding = {
      ecosystem: 'npm',
      package: 'express',
      version: '*',
      kind: 'loose-range',
      message: 'un-pinned version',
    };
    const out = depFindingToNormalized(f);
    expect(out.severity).toBe('low');
  });

  it('sets evidence source to osv for cve kind', () => {
    const f: DepAuditFinding = {
      ecosystem: 'npm',
      package: 'axios',
      version: '1.5.0',
      kind: 'cve',
      message: 'test vuln',
      cve: 'CVE-2024-0001',
    };
    const out = depFindingToNormalized(f);
    expect(out.evidence[0].source).toBe('osv');
  });

  it('sets evidence source to offline for known-risk', () => {
    const f: DepAuditFinding = {
      ecosystem: 'npm',
      package: 'moment',
      version: '2.29.0',
      kind: 'known-risk',
      message: 'deprecated',
    };
    const out = depFindingToNormalized(f);
    expect(out.evidence[0].source).toBe('offline');
  });
});
