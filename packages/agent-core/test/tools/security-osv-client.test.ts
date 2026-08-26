import { describe, expect, it, vi } from 'vitest';

import {
  createOsvClient,
  mapEcosystem,
  extractFixedVersion,
  extractCvssScore,
  type OsvVulnerability,
} from '../../src/tools/builtin/security/osv-client.js';

function makeVuln(overrides?: Partial<OsvVulnerability>): OsvVulnerability {
  return {
    id: 'GHSA-test-1234-xxxx',
    summary: 'Test vulnerability',
    ...overrides,
  };
}

describe('mapEcosystem', () => {
  it('maps npm → npm', () => {
    expect(mapEcosystem('npm')).toBe('npm');
  });

  it('maps pip → PyPI', () => {
    expect(mapEcosystem('pip')).toBe('PyPI');
  });

  it('maps go → Go', () => {
    expect(mapEcosystem('go')).toBe('Go');
  });
});

describe('extractFixedVersion', () => {
  it('extracts fixed version from affected ranges', () => {
    const vuln = makeVuln({
      affected: [
        {
          package: { name: 'lodash', ecosystem: 'npm' },
          ranges: [
            {
              events: [
                { introduced: '0' },
                { fixed: '4.17.21' },
              ],
            },
          ],
        },
      ],
    });

    expect(extractFixedVersion(vuln, 'lodash')).toBe('4.17.21');
  });

  it('returns undefined when no fixed event exists', () => {
    const vuln = makeVuln({
      affected: [
        {
          package: { name: 'lodash', ecosystem: 'npm' },
          ranges: [
            {
              events: [{ introduced: '0' }],
            },
          ],
        },
      ],
    });

    expect(extractFixedVersion(vuln, 'lodash')).toBeUndefined();
  });

  it('returns undefined when package not found', () => {
    const vuln = makeVuln({
      affected: [
        {
          package: { name: 'lodash', ecosystem: 'npm' },
          ranges: [
            { events: [{ fixed: '4.17.21' }] },
          ],
        },
      ],
    });

    expect(extractFixedVersion(vuln, 'express')).toBeUndefined();
  });

  it('returns undefined when no affected field', () => {
    const vuln = makeVuln();
    expect(extractFixedVersion(vuln, 'lodash')).toBeUndefined();
  });
});

describe('extractCvssScore', () => {
  it('returns 10.0 for full CVSS:3.1 vector with critical scores', () => {
    const vuln = makeVuln({
      severity: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
    });
    expect(extractCvssScore(vuln)).toBe(10.0);
  });

  it('parses numeric score from severity string', () => {
    const vuln = makeVuln({ severity: '7.5/10' });
    expect(extractCvssScore(vuln)).toBe(7.5);
  });

  it('parses plain numeric severity', () => {
    const vuln = makeVuln({ severity: '8.8' });
    expect(extractCvssScore(vuln)).toBe(8.8);
  });

  it('falls back to database_specific.severity', () => {
    const vuln = makeVuln({
      database_specific: { severity: 'HIGH' },
    });
    expect(extractCvssScore(vuln)).toBeUndefined();
  });

  it('parses numeric database_specific.severity', () => {
    const vuln = makeVuln({
      database_specific: { severity: '9.1' },
    });
    expect(extractCvssScore(vuln)).toBe(9.1);
  });

  it('returns undefined when no severity info', () => {
    const vuln = makeVuln();
    expect(extractCvssScore(vuln)).toBeUndefined();
  });
});

describe('createOsvClient', () => {
  it('querySingle returns vulnerability list', async () => {
    const mockVulns = [makeVuln()];
    const fetchFn = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ vulns: mockVulns }),
    });

    const client = createOsvClient(fetchFn);
    const result = await client.querySingle({
      package: { name: 'lodash', ecosystem: 'npm' },
      version: '4.17.20',
    });

    expect(result).toEqual(mockVulns);
    expect(fetchFn).toHaveBeenCalledWith(
      'https://api.osv.dev/v1/query',
      expect.objectContaining({ method: 'POST' }),
    );
  });

  it('querySingle returns empty array on network error', async () => {
    const fetchFn = vi.fn().mockRejectedValue(new Error('network'));
    const client = createOsvClient(fetchFn);
    const result = await client.querySingle({
      package: { name: 'lodash', ecosystem: 'npm' },
      version: '4.17.20',
    });

    expect(result).toEqual([]);
  });

  it('querySingle returns empty array on HTTP 500', async () => {
    const fetchFn = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => ({}),
    });
    const client = createOsvClient(fetchFn);
    const result = await client.querySingle({
      package: { name: 'lodash', ecosystem: 'npm' },
      version: '4.17.20',
    });

    expect(result).toEqual([]);
  });

  it('querySingle returns empty array on abort/timeout', async () => {
    const fetchFn = vi.fn().mockImplementation(() => {
      return new Promise((_resolve, reject) => {
        setTimeout(() => reject(new Error('aborted')), 10);
      });
    });
    const client = createOsvClient(fetchFn, { timeoutMs: 5 });
    const result = await client.querySingle({
      package: { name: 'lodash', ecosystem: 'npm' },
      version: '4.17.20',
    });

    expect(result).toEqual([]);
  });

  it('queryBatch returns results for multiple queries', async () => {
    const vuln1 = makeVuln({ id: 'VULN-1' });
    const vuln2 = makeVuln({ id: 'VULN-2' });
    const fetchFn = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        results: [
          { vulnerabilities: [vuln1] },
          { vulnerabilities: [vuln2] },
        ],
      }),
    });

    const client = createOsvClient(fetchFn);
    const result = await client.queryBatch([
      { package: { name: 'lodash', ecosystem: 'npm' }, version: '4.17.20' },
      { package: { name: 'express', ecosystem: 'npm' }, version: '4.18.0' },
    ]);

    expect(result).toHaveLength(2);
    expect(result[0]).toEqual([vuln1]);
    expect(result[1]).toEqual([vuln2]);
  });

  it('queryBatch returns empty arrays for failed batches', async () => {
    const fetchFn = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
    });

    const client = createOsvClient(fetchFn);
    const result = await client.queryBatch([
      { package: { name: 'lodash', ecosystem: 'npm' }, version: '4.17.20' },
      { package: { name: 'express', ecosystem: 'npm' }, version: '4.18.0' },
    ]);

    expect(result).toHaveLength(2);
    expect(result[0]).toEqual([]);
    expect(result[1]).toEqual([]);
  });

  it('queryBatch splits into multiple batches when exceeding maxBatchSize', async () => {
    const fetchFn = vi.fn().mockImplementation(async (_url: string, init?: RequestInit) => {
      const body = JSON.parse(init!.body as string) as { queries: unknown[] };
      return {
        ok: true,
        json: async () => ({
          results: body.queries.map(() => ({ vulnerabilities: [] })),
        }),
      };
    });

    const client = createOsvClient(fetchFn, { maxBatchSize: 2 });
    const queries = Array.from({ length: 5 }, (_, i) => ({
      package: { name: `pkg-${i}`, ecosystem: 'npm' as const },
      version: '1.0.0',
    }));

    const result = await client.queryBatch(queries);

    expect(fetchFn).toHaveBeenCalledTimes(3);
    expect(result).toHaveLength(5);
  });

  it('queryBatch handles network errors silently', async () => {
    const fetchFn = vi.fn().mockRejectedValue(new Error('network'));

    const client = createOsvClient(fetchFn);
    const result = await client.queryBatch([
      { package: { name: 'lodash', ecosystem: 'npm' }, version: '4.17.20' },
    ]);

    expect(result).toEqual([[]]);
  });
});
