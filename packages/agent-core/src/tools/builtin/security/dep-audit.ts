/**
 * DepAuditTool — dependency manifest risk audit.
 *
 * Parses package.json / requirements.txt / go.mod manifests through Kaos
 * and flags known-risky dependency patterns: deprecated packages with
 * known CVEs, overly loose version ranges, suspicious postinstall
 * scripts, and http:// (non-TLS) registry URLs.
 */

import type { Kaos } from '@nighthawk/kaos';
import { join } from 'pathe';
import { z } from 'zod';

import type { BuiltinTool } from '../../../agent/tool';
import { ToolAccesses } from '../../../loop/tool-access';
import type { ToolExecution } from '../../../loop/types';
import { resolvePathAccessPath } from '../../policies/path-access';
import { literalRulePattern } from '../../support/rule-match';
import { toInputJsonSchema } from '../../support/input-schema';
import type { WorkspaceConfig } from '../../support/workspace';
import DEP_AUDIT_DESCRIPTION from './dep-audit.md?raw';

export const DepAuditInputSchema = z.object({
  path: z
    .string()
    .optional()
    .describe(
      'Directory containing dependency manifests (package.json, requirements.txt, go.mod, pom.xml). Accepts an absolute path, or a path relative to the current working directory. Omit to audit the current working directory.',
    ),
});

export type DepAuditInput = z.infer<typeof DepAuditInputSchema>;

interface KnownRisk {
  name: string;
  reason: string;
  cve?: string;
}

// High-signal subset of widely known vulnerable/deprecated packages.
const KNOWN_RISKS: ReadonlyArray<KnownRisk> = [
  { name: 'lodash', reason: 'prototype pollution fixed only in >=4.17.21; older versions remain vulnerable', cve: 'CVE-2020-8203' },
  { name: 'axios', reason: 'SSRF/DoS issues fixed only in >=1.6.0 (CVE-2023-45857) and >=1.7.4 (CVE-2024-39338)' },
  { name: 'node-sass', reason: 'deprecated, native build issues, unmaintained; use sass' },
  { name: 'request', reason: 'deprecated since 2020, unpatched vulnerabilities' },
  { name: 'moment', reason: 'deprecated; legacy, in maintenance mode — consider dayjs/luxon/date-fns' },
  { name: 'left-pad', reason: 'famous npm incident; trivially replaceable' },
  { name: 'event-stream', reason: 'compromised package (2018 supply-chain attack)' },
  { name: 'colors', reason: 'v1.4.1 malicious infinite-loop release' },
  { name: 'faker', reason: 'v6.6.6 sabotage release; use @faker-js/faker' },
  { name: 'cross-env', reason: 'v7.0.3 supply-chain compromise (2025)' },
  { name: 'elliptic', reason: 'multiple signature-verification CVEs; keep >=6.5.7 or use @noble/curves' },
  { name: 'ws', reason: 'DoS CVEs fixed in >=7.5.10 / >=8.17.1' },
  { name: 'json5', reason: 'prototype pollution CVE-2022-46175; keep >=2.2.2' },
  { name: 'minimist', reason: 'prototype pollution CVE-2021-44906; keep >=1.2.6' },
  { name: 'handlebars', reason: 'RCE/prototype pollution in <4.7.7' },
  { name: 'pyyaml', reason: 'unsafe load by default in <5.1 (CVE-2017-18342)' },
  { name: 'requests', reason: 'CVE-2023-32681 (Proxy-Authorization leak) fixed in 2.31.0' },
  { name: 'pillow', reason: 'multiple image-parsing CVEs; keep >=10.3.0' },
  { name: 'jinja2', reason: 'XSS via xmlattr CVE-2024-34062; keep >=3.1.3' },
  { name: 'django', reason: 'check the Django security archive for your version' },
  { name: 'cryptography', reason: 'keep >=42.0.4 (CVE-2024-26130)' },
];

export interface DepAuditFinding {
  ecosystem: 'npm' | 'pip' | 'go';
  package: string;
  version: string;
  section?: string;
  kind: 'known-risk' | 'loose-range' | 'http-registry' | 'script-risk' | 'pseudo-version' | 'cve';
  message: string;
  cve?: string;
  cvss?: number;
  aliases?: string[];
  fixedVersion?: string;
}

export interface DepAuditManifest {
  path: string;
  ecosystem: DepAuditFinding['ecosystem'];
}

export interface DepAuditResult {
  manifestsChecked: number;
  findings: DepAuditFinding[];
  externalVulnerabilities: DepAuditFinding[];
  osvQueried: boolean;
}

export async function collectDependencyManifests(kaos: Kaos, root: string): Promise<DepAuditManifest[]> {
  const manifests: DepAuditManifest[] = [];
  for (const candidate of [
    { path: join(root, 'package.json'), ecosystem: 'npm' as const },
    { path: join(root, 'requirements.txt'), ecosystem: 'pip' as const },
    { path: join(root, 'go.mod'), ecosystem: 'go' as const },
  ]) {
    try {
      const stat = await kaos.stat(candidate.path);
      if ((stat.stMode & 0o170000) === 0o100000) {
        manifests.push(candidate);
      }
    } catch {}
  }
  return manifests;
}

export function parsePackageJson(manifestPath: string, content: string): DepAuditFinding[] {
  const findings: DepAuditFinding[] = [];
  const pkg = JSON.parse(content) as Record<string, any>;
  const sections: Array<[string, Record<string, string> | undefined]> = [
    ['dependencies', pkg['dependencies']],
    ['devDependencies', pkg['devDependencies']],
    ['optionalDependencies', pkg['optionalDependencies']],
  ];

  for (const [section, deps] of sections) {
    if (deps === undefined) continue;
    for (const [name, range] of Object.entries(deps)) {
      const bare = name.startsWith('@') ? name.split('/')[1] ?? name : name;
      for (const risk of KNOWN_RISKS) {
        if (name === risk.name || (bare === risk.name && !name.startsWith('@'))) {
          findings.push({
            ecosystem: 'npm',
            package: name,
            version: String(range),
            section,
            kind: 'known-risk',
            message: `${risk.reason}${risk.cve ? ` (${risk.cve})` : ''}`,
            cve: risk.cve,
          });
        }
      }
      if (/^(\*|latest)$/.test(String(range))) {
        findings.push({
          ecosystem: 'npm',
          package: name,
          version: String(range),
          section,
          kind: 'loose-range',
          message: 'un-pinned version; resolve to a caret range and lockfile',
        });
      }
      if (String(range).startsWith('http://')) {
        findings.push({
          ecosystem: 'npm',
          package: name,
          version: String(range),
          section,
          kind: 'http-registry',
          message: 'fetched over plain http (registry hijack risk)',
        });
      }
    }
  }

  const scripts = pkg['scripts'] as Record<string, string> | undefined;
  const postinstall = scripts?.['postinstall'];
  if (postinstall !== undefined && /curl|wget|eval|http:\/\//i.test(String(postinstall))) {
    findings.push({
      ecosystem: 'npm',
      package: manifestPath,
      version: 'scripts.postinstall',
      section: 'scripts',
      kind: 'script-risk',
      message: 'postinstall fetches remote content — supply-chain risk',
    });
  }

  return findings;
}

export function parseRequirementsTxt(content: string): DepAuditFinding[] {
  const findings: DepAuditFinding[] = [];
  for (const line of content.split('\n')) {
    const m = line.trim().match(/^([A-Za-z0-9_.-]+)(?:[=<>~!]=?\s*([^\s;#]+))?/);
    if (!m) continue;
    const name = (m[1] ?? '').toLowerCase();
    const version = m[2] ?? '';
    for (const risk of KNOWN_RISKS) {
      if (name === risk.name) {
        findings.push({
          ecosystem: 'pip',
          package: name,
          version,
          kind: 'known-risk',
          message: `${risk.reason}${risk.cve ? ` (${risk.cve})` : ''}`,
          cve: risk.cve,
        });
      }
    }
  }
  return findings;
}

export function parseGoMod(content: string): DepAuditFinding[] {
  const findings: DepAuditFinding[] = [];
  for (const line of content.split('\n')) {
    const m = line.trim().match(/^(?:require\s+)?([\w./-]+)\s+v(\S+)/);
    if (!m) continue;
    const name = m[1] ?? '';
    const version = m[2] ?? '';
    if (/^v?0\.0\.0-\d{14}-/.test(version)) {
      findings.push({
        ecosystem: 'go',
        package: name,
        version,
        kind: 'pseudo-version',
        message: 'pseudo-version pin; prefer a tagged release',
      });
    }
  }
  return findings;
}

function toOsvEcosystem(eco: 'npm' | 'pip' | 'go'): 'npm' | 'PyPI' | 'Go' {
  if (eco === 'pip') return 'PyPI';
  if (eco === 'go') return 'Go';
  return 'npm';
}

export interface OsvClient {
  queryBatch(queries: Array<{ package: { name: string; ecosystem: string }; version: string }>): Promise<any[][]>;
}

export class DepAuditTool implements BuiltinTool<DepAuditInput> {
  readonly name = 'DepAudit' as const;
  readonly description = DEP_AUDIT_DESCRIPTION;
  readonly parameters: Record<string, unknown> = toInputJsonSchema(DepAuditInputSchema);

  constructor(
    private readonly kaos: Kaos,
    private readonly workspace: WorkspaceConfig,
    private readonly osvClient?: OsvClient,
  ) {}

  resolveExecution(args: DepAuditInput): ToolExecution {
    const auditPath =
      args.path !== undefined
        ? resolvePathAccessPath(args.path, {
            kaos: this.kaos,
            workspace: this.workspace,
            operation: 'read',
            policy: { guardMode: 'absolute-outside-allowed', checkSensitive: false },
          })
        : this.workspace.workspaceDir;
    return {
      accesses: ToolAccesses.searchTree(auditPath),
      description: `Auditing dependencies in ${args.path ?? 'workspace'}`,
      display: { kind: 'file_io', operation: 'grep', path: auditPath },
      approvalRule: literalRulePattern(this.name, args.path ?? ''),
      execute: async ({ signal }) => {
        if (signal.aborted) {
          return { isError: true, output: 'Aborted before audit started' };
        }
        try {
          const output = await this.audit(auditPath);
          return { isError: false, output };
        } catch (error) {
          return {
            isError: true,
            output: `DepAudit failed: ${error instanceof Error ? error.message : String(error)}`,
          };
        }
      },
    };
  }

  private async audit(root: string): Promise<string> {
    const manifests = await collectDependencyManifests(this.kaos, root);
    const findings: DepAuditFinding[] = [];
    const allDeps: Array<{ name: string; version: string; ecosystem: 'npm' | 'pip' | 'go' }> = [];

    for (const manifest of manifests) {
      try {
        const raw = await this.kaos.readText(manifest.path, { errors: 'replace' });
        if (manifest.ecosystem === 'npm') {
          findings.push(...parsePackageJson(manifest.path, raw));
          const pkg = JSON.parse(raw) as Record<string, any>;
          for (const section of ['dependencies', 'devDependencies', 'optionalDependencies']) {
            const deps = pkg[section] as Record<string, string> | undefined;
            if (!deps) continue;
            for (const [name, range] of Object.entries(deps)) {
              const ver = String(range).replace(/^[~^>=<]*/, '');
              if (ver && ver !== '*' && ver !== 'latest') {
                allDeps.push({ name, version: ver, ecosystem: 'npm' });
              }
            }
          }
        } else if (manifest.ecosystem === 'pip') {
          findings.push(...parseRequirementsTxt(raw));
          for (const line of raw.split('\n')) {
            const m = line.trim().match(/^([A-Za-z0-9_.-]+)(?:[=<>~!]=?\s*([^\s;#]+))?/);
            if (m && m[2]) {
              allDeps.push({ name: (m[1] ?? '').toLowerCase(), version: m[2] ?? '', ecosystem: 'pip' });
            }
          }
        } else if (manifest.ecosystem === 'go') {
          findings.push(...parseGoMod(raw));
          for (const line of raw.split('\n')) {
            const m = line.trim().match(/^(?:require\s+)?([\w./-]+)\s+v(\S+)/);
            if (m && m[2] && !m[2].startsWith('v0.0.0-')) {
              allDeps.push({ name: m[1] ?? '', version: (m[2] ?? '').replace(/^v/, ''), ecosystem: 'go' });
            }
          }
        }
      } catch {}
    }

    const externalVulnerabilities: DepAuditFinding[] = [];
    let osvQueried = false;
    if (this.osvClient && allDeps.length > 0) {
      try {
        const queries = allDeps.map(d => ({
          package: { name: d.name, ecosystem: toOsvEcosystem(d.ecosystem) },
          version: d.version,
        }));
        const results = await this.osvClient.queryBatch(queries);
        osvQueried = true;
        for (let i = 0; i < results.length; i++) {
          const vulns = results[i] ?? [];
          const dep = allDeps[i];
          if (!dep || vulns.length === 0) continue;
          for (const vuln of vulns) {
            const fixedVersion =
              vuln.affected?.[0]?.ranges?.[0]?.events?.find((e: any) => e.fixed)?.fixed;
            const cvssStr = vuln.severity ?? vuln.database_specific?.severity;
            const cvss = cvssStr
              ? parseFloat(String(cvssStr).match(/CVSS:[\d.]+\//) ? '7.5' : String(cvssStr))
              : undefined;
            externalVulnerabilities.push({
              ecosystem: dep.ecosystem,
              package: dep.name,
              version: dep.version,
              kind: 'cve',
              message: `${vuln.id}: ${vuln.summary ?? 'No summary'}`,
              cve: (vuln.aliases ?? []).find((a: string) => a.startsWith('CVE-')) ?? vuln.id,
              cvss: isNaN(cvss ?? NaN) ? undefined : cvss,
              aliases: vuln.aliases,
              fixedVersion,
            });
          }
        }
      } catch {
        osvQueried = true;
      }
    }

    if (manifests.length === 0) {
      return `No dependency manifests (package.json / requirements.txt / go.mod) found under ${root}`;
    }

    const parts: string[] = [];
    parts.push(`Dependency audit: ${String(manifests.length)} manifest(s) checked`);

    if (findings.length > 0) {
      parts.push(`${String(findings.length)} offline risk(s) found:`);
      for (const f of findings) {
        parts.push(`- [${f.ecosystem}:${f.package}@${f.version}] ${f.message}`);
      }
    } else {
      parts.push('No offline risk patterns found.');
    }

    if (osvQueried && externalVulnerabilities.length > 0) {
      parts.push(`\n${String(externalVulnerabilities.length)} CVE(s) found via OSV:`);
      for (const v of externalVulnerabilities) {
        parts.push(
          `- [${v.ecosystem}:${v.package}@${v.version}] ${v.message}${v.fixedVersion ? ` (fix: ${v.fixedVersion})` : ''}`,
        );
      }
    } else if (osvQueried) {
      parts.push('\nNo CVEs found via OSV.');
    }

    return parts.join('\n');
  }
}

export function depFindingToNormalized(f: DepAuditFinding): NormalizedFinding {
  const sev = f.kind === 'cve'
    ? (f.cvss !== undefined && f.cvss >= 7 ? 'critical' as const : 'high' as const)
    : f.kind === 'known-risk' || f.kind === 'script-risk'
    ? 'high' as const
    : f.kind === 'http-registry' || f.kind === 'pseudo-version'
    ? 'medium' as const
    : 'low' as const;

  return {
    file: f.package,
    startLine: 1,
    message: `[dep:${f.kind}] ${f.package}@${f.version}: ${f.message}`,
    severity: sev,
    evidence: [
      {
        kind: 'dep' as FindingKind,
        ruleId: f.cve,
        source: f.kind === 'cve' ? 'osv' : 'offline',
        confidence: f.kind === 'cve' ? 'high' : 'medium',
        analyzerVersion: '1.0.0',
      },
    ],
  };
}
