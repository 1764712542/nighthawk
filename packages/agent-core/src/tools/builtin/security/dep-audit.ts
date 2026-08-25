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

export class DepAuditTool implements BuiltinTool<DepAuditInput> {
  readonly name = 'DepAudit' as const;
  readonly description = DEP_AUDIT_DESCRIPTION;
  readonly parameters: Record<string, unknown> = toInputJsonSchema(DepAuditInputSchema);

  constructor(
    private readonly kaos: Kaos,
    private readonly workspace: WorkspaceConfig,
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
    const findings: string[] = [];
    let manifestsChecked = 0;

    // package.json
    const pkgPath = join(root, 'package.json');
    try {
      const raw = await this.kaos.readText(pkgPath, { errors: 'replace' });
      manifestsChecked++;
      const pkg = JSON.parse(raw) as Record<string, any>;
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
            if (bare === risk.name) {
              findings.push(
                `[npm:${section}] ${name}@${range} — ${risk.reason}${risk.cve ? ` (${risk.cve})` : ''}`,
              );
            }
          }
          if (/^(\*|latest)$/.test(range)) {
            findings.push(`[npm:${section}] ${name}@${range} — un-pinned version; resolve to a caret range and lockfile`);
          }
          if (range.startsWith('http://')) {
            findings.push(`[npm:${section}] ${name} — fetched over plain http (registry hijack risk)`);
          }
        }
      }
      const scripts = pkg['scripts'] as Record<string, string> | undefined;
      const postinstall = scripts?.['postinstall'];
      if (postinstall !== undefined && /curl|wget|eval|http:\/\//i.test(postinstall)) {
        findings.push('[npm:scripts] postinstall fetches remote content — supply-chain risk');
      }
    } catch {
      // no package.json
    }

    // requirements.txt
    const reqPath = join(root, 'requirements.txt');
    try {
      const raw = await this.kaos.readText(reqPath, { errors: 'replace' });
      manifestsChecked++;
      for (const line of raw.split('\n')) {
        const m = line.trim().match(/^([A-Za-z0-9_.-]+)(?:[=<>~!]=?\s*([^\s;#]+))?/);
        if (!m) continue;
        const name = (m[1] ?? '').toLowerCase();
        const version = m[2] ?? '';
        for (const risk of KNOWN_RISKS) {
          if (name === risk.name) {
            findings.push(`[pip] ${name}${version ? `==${version}` : ''} — ${risk.reason}${risk.cve ? ` (${risk.cve})` : ''}`);
          }
        }
      }
    } catch {
      // no requirements.txt
    }

    // go.mod
    const goPath = join(root, 'go.mod');
    try {
      const raw = await this.kaos.readText(goPath, { errors: 'replace' });
      manifestsChecked++;
      for (const line of raw.split('\n')) {
        const m = line.trim().match(/^([\w./-]+)\s+v(\S+)/);
        if (!m) continue;
        const name = m[1] ?? '';
        const version = m[2] ?? '';
        if (/^v?0\.0\.0-\d{14}-/.test(version)) {
          findings.push(`[go] ${name}@${version} — pseudo-version pin; prefer a tagged release`);
        }
      }
    } catch {
      // no go.mod
    }

    if (manifestsChecked === 0) {
      return `No dependency manifests (package.json / requirements.txt / go.mod) found under ${root}`;
    }
    if (findings.length === 0) {
      return `Dependency audit: ${String(manifestsChecked)} manifest(s) checked, no known-risk patterns found.`;
    }
    return (
      `Dependency audit: ${String(manifestsChecked)} manifest(s) checked, ${String(findings.length)} risk(s) found:\n\n` +
      findings.map(f => `- ${f}`).join('\n')
    );
  }
}
