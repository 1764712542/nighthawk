export interface OsvPackage {
  name: string;
  ecosystem: 'npm' | 'PyPI' | 'Go';
}

export interface OsvQuery {
  package: OsvPackage;
  version: string;
}

export interface OsvVulnerability {
  id: string;
  summary: string;
  details?: string;
  aliases?: string[];
  severity?: string;
  database_specific?: { severity?: string; cwe?: string[] };
  affected?: Array<{
    package: { name: string; ecosystem: string };
    ranges?: Array<{
      events: Array<{ introduced?: string; fixed?: string }>;
    }>;
  }>;
}

export interface OsvBatchQuery {
  queries: OsvQuery[];
}

export interface OsvBatchResponse {
  results: Array<{ vulnerabilities?: OsvVulnerability[] }>;
}

export interface OsvClientOptions {
  baseUrl?: string;
  timeoutMs?: number;
  maxBatchSize?: number;
}

type FetchFn = typeof globalThis.fetch;

export interface OsvClient {
  querySingle: (query: OsvQuery) => Promise<OsvVulnerability[]>;
  queryBatch: (queries: OsvQuery[]) => Promise<OsvVulnerability[][]>;
}

export function mapEcosystem(ecosystem: 'npm' | 'pip' | 'go'): 'npm' | 'PyPI' | 'Go' {
  switch (ecosystem) {
    case 'npm':
      return 'npm';
    case 'pip':
      return 'PyPI';
    case 'go':
      return 'Go';
  }
}

export function extractFixedVersion(
  vuln: OsvVulnerability,
  packageName: string,
): string | undefined {
  const affected = vuln.affected;
  if (!affected) return undefined;

  for (const entry of affected) {
    if (entry.package.name !== packageName) continue;
    for (const range of entry.ranges ?? []) {
      for (const event of range.events) {
        if (event.fixed !== undefined) return event.fixed;
      }
    }
  }

  return undefined;
}

export function extractCvssScore(vuln: OsvVulnerability): number | undefined {
  const severityStr = vuln.severity;
  if (severityStr !== undefined) {
    const match = severityStr.match(
      /CVSS:\d+\.\d+\/.*?AV:N.*?AC:L.*?PR:N.*?UI:N.*?S:U.*?C:H.*?I:H.*?A:H/,
    );
    if (match) return 10.0;

    const baseMatch = severityStr.match(/(\d+\.\d+)\/10/);
    if (baseMatch !== null) return Number.parseFloat(baseMatch[1]!);

    const numMatch = severityStr.match(/^(\d+(?:\.\d+)?)$/);
    if (numMatch !== null) return Number.parseFloat(numMatch[1]!);
  }

  const dbSeverity = vuln.database_specific?.severity;
  if (dbSeverity !== undefined) {
    const num = Number.parseFloat(dbSeverity);
    if (!Number.isNaN(num)) return num;
  }

  return undefined;
}

export function createOsvClient(fetchFn: FetchFn, options?: OsvClientOptions): OsvClient {
  const baseUrl = options?.baseUrl ?? 'https://api.osv.dev';
  const timeoutMs = options?.timeoutMs ?? 5000;
  const maxBatchSize = options?.maxBatchSize ?? 1000;

  async function querySingle(query: OsvQuery): Promise<OsvVulnerability[]> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetchFn(`${baseUrl}/v1/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(query),
        signal: controller.signal,
      });
      if (!res.ok) return [];
      const data = (await res.json()) as { vulns?: OsvVulnerability[] };
      return data.vulns ?? [];
    } catch {
      return [];
    } finally {
      clearTimeout(timer);
    }
  }

  async function queryBatch(queries: OsvQuery[]): Promise<OsvVulnerability[][]> {
    const results: OsvVulnerability[][] = [];
    for (let i = 0; i < queries.length; i += maxBatchSize) {
      const batch = queries.slice(i, i + maxBatchSize);
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      try {
        const res = await fetchFn(`${baseUrl}/v1/querybatch`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ queries: batch } satisfies OsvBatchQuery),
          signal: controller.signal,
        });
        if (!res.ok) {
          for (const _ of batch) results.push([]);
          continue;
        }
        const data = (await res.json()) as OsvBatchResponse;
        for (const result of data.results) {
          results.push(result.vulnerabilities ?? []);
        }
      } catch {
        for (const _ of batch) results.push([]);
      } finally {
        clearTimeout(timer);
      }
    }
    return results;
  }

  return { querySingle, queryBatch };
}
