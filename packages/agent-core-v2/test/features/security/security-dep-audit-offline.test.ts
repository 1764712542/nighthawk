import { describe, expect, it } from 'vitest';

import {
  parsePackageJson,
  parseRequirementsTxt,
  parseGoMod,
  parseNpmAuditJson,
} from '#/features/security/engine/dep-audit';

describe('parsePackageJson', () => {
  it('detects known-risk lodash 4.17.20', () => {
    const content = JSON.stringify({
      dependencies: { lodash: '4.17.20' },
    });

    const findings = parsePackageJson('/test/package.json', content);
    expect(findings).toHaveLength(1);
    expect(findings[0]!.kind).toBe('known-risk');
    expect(findings[0]!.package).toBe('lodash');
    expect(findings[0]!.version).toBe('4.17.20');
    expect(findings[0]!.cve).toBe('CVE-2020-8203');
  });

  it('detects loose-range *', () => {
    const content = JSON.stringify({
      dependencies: { lodash: '^4.0.0', some: '*' },
    });

    const findings = parsePackageJson('/test/package.json', content);
    const loose = findings.filter(f => f.kind === 'loose-range');
    expect(loose).toHaveLength(1);
    expect(loose[0]!.package).toBe('some');
    expect(loose[0]!.version).toBe('*');
  });

  it('detects postinstall script risk with curl', () => {
    const content = JSON.stringify({
      dependencies: { foo: '1.0.0' },
      scripts: { postinstall: 'curl http://x' },
    });

    const findings = parsePackageJson('/test/package.json', content);
    expect(findings).toHaveLength(1);
    expect(findings[0]!.kind).toBe('script-risk');
    expect(findings[0]!.version).toBe('scripts.postinstall');
  });

  it('no findings for safe deps', () => {
    const content = JSON.stringify({
      dependencies: { qs: '6.13.0', helmet: '8.0.0' },
    });

    const findings = parsePackageJson('/test/package.json', content);
    expect(findings).toHaveLength(0);
  });

  it('scoped package @types/lodash does not match lodash', () => {
    const content = JSON.stringify({
      dependencies: { '@types/lodash': '4.14.182' },
    });

    const findings = parsePackageJson('/test/package.json', content);
    expect(findings).toHaveLength(0);
  });
});

describe('parseRequirementsTxt', () => {
  it('detects known-risk pyyaml 4.0', () => {
    const content = 'pyyaml==4.0\n';

    const findings = parseRequirementsTxt(content);
    expect(findings).toHaveLength(1);
    expect(findings[0]!.kind).toBe('known-risk');
    expect(findings[0]!.package).toBe('pyyaml');
    expect(findings[0]!.version).toBe('4.0');
  });

  it('no findings for safe flask 3.0', () => {
    const content = 'flask==3.0\n';

    const findings = parseRequirementsTxt(content);
    expect(findings).toHaveLength(0);
  });
});

describe('parseGoMod', () => {
  it('detects pseudo-version', () => {
    const content = 'require github.com/foo/bar v0.0.0-20240101120000-abcdef123456\n';

    const findings = parseGoMod(content);
    const pseudo = findings.filter(f => f.kind === 'pseudo-version');
    expect(pseudo).toHaveLength(1);
    expect(pseudo[0]!.package).toBe('github.com/foo/bar');
    expect(pseudo[0]!.version).toBe('0.0.0-20240101120000-abcdef123456');
  });

  it('no findings for safe version v1.2.3', () => {
    const content = 'require github.com/foo/bar v1.2.3\n';

    const findings = parseGoMod(content);
    expect(findings).toHaveLength(0);
  });
});

describe('parseNpmAuditJson', () => {
  it('parses pnpm audit json into CVE findings', () => {
    const raw = JSON.stringify({
      vulnerabilities: {
        lodash: {
          severity: 'high',
          via: [
            { title: 'Prototype Pollution', url: 'https://github.com/advisories/CVE-2020-8203', range: '4.17.21' },
          ],
        },
      },
    });

    const findings = parseNpmAuditJson(raw, 'pnpm');
    expect(findings).toHaveLength(1);
    expect(findings[0]!.package).toBe('lodash');
    expect(findings[0]!.kind).toBe('cve');
    expect(findings[0]!.source).toBe('external');
    expect(findings[0]!.cve).toBe('CVE-2020-8203');
  });

  it('returns empty for unparseable output', () => {
    expect(parseNpmAuditJson('not json', 'pnpm')).toEqual([]);
  });
});
