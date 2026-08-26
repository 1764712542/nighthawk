import { describe, expect, it, vi } from 'vitest';

import {
  parsePackageJson,
  parseRequirementsTxt,
  parseGoMod,
  DepAuditTool,
} from '../../src/tools/builtin/security/dep-audit.js';
import { createFakeKaos, PERMISSIVE_WORKSPACE } from './fixtures/fake-kaos.js';

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

describe('DepAuditTool with OSV client', () => {
  function makeKaosWithPackageJson(pkgContent: string) {
    return createFakeKaos({
      stat: async (p: string) => {
        if (p.endsWith('package.json')) return { stMode: 0o100644 } as any;
        throw new Error('not found');
      },
      readText: async (p: string) => {
        if (p.endsWith('package.json')) return pkgContent;
        throw new Error('not found');
      },
    });
  }

  it('merges offline and OSV findings', async () => {
    const pkgJson = JSON.stringify({ dependencies: { lodash: '4.17.20' } });
    const kaos = makeKaosWithPackageJson(pkgJson);

    const mockOsvClient = {
      queryBatch: vi.fn().mockResolvedValue([
        [
          {
            id: 'GHSA-jf85-cpcp-j695',
            summary: 'Prototype Pollution in lodash',
            aliases: ['CVE-2020-8203'],
            severity: '7.5',
            affected: [
              {
                ranges: [{ events: [{ fixed: '4.17.21' }] }],
              },
            ],
          },
        ],
      ]),
    };

    const tool = new DepAuditTool(kaos, PERMISSIVE_WORKSPACE, mockOsvClient);
    const execution = tool.resolveExecution({});
    const result = await execution.execute({ signal: AbortSignal.timeout(5000) });
    const output = result.output as string;

    expect(output).toContain('offline risk(s) found');
    expect(output).toContain('CVE(s) found via OSV');
    expect(output).toContain('4.17.21');
    expect(mockOsvClient.queryBatch).toHaveBeenCalledOnce();

    const queries = mockOsvClient.queryBatch.mock.calls[0]![0] as any[];
    expect(queries).toHaveLength(1);
    expect(queries[0]!.package.ecosystem).toBe('npm');
    expect(queries[0]!.version).toBe('4.17.20');
  });

  it('degrades gracefully when OSV client fails', async () => {
    const pkgJson = JSON.stringify({ dependencies: { express: '4.18.0' } });
    const kaos = makeKaosWithPackageJson(pkgJson);

    const mockOsvClient = {
      queryBatch: vi.fn().mockRejectedValue(new Error('network error')),
    };

    const tool = new DepAuditTool(kaos, PERMISSIVE_WORKSPACE, mockOsvClient);
    const execution = tool.resolveExecution({});
    const result = await execution.execute({ signal: AbortSignal.timeout(5000) });
    const output = result.output as string;

    expect(result.isError).toBe(false);
    expect(output).toContain('Dependency audit:');
    expect(output).toContain('No offline risk patterns found');
    expect(output).not.toContain('CVE(s) found via OSV');
  });

  it('skips OSV when client not provided', async () => {
    const pkgJson = JSON.stringify({ dependencies: { lodash: '4.17.20' } });
    const kaos = makeKaosWithPackageJson(pkgJson);

    const tool = new DepAuditTool(kaos, PERMISSIVE_WORKSPACE);
    const execution = tool.resolveExecution({});
    const result = await execution.execute({ signal: AbortSignal.timeout(5000) });
    const output = result.output as string;

    expect(output).toContain('offline risk(s) found');
    expect(output).not.toContain('CVE(s) found via OSV');
    expect(output).not.toContain('No CVEs found via OSV');
  });
});
