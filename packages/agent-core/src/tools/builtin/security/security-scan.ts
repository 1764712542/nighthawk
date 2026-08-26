/**
 * SecurityScanTool — OWASP/CWE pattern-based vulnerability scan.
 *
 * Runs the built-in 116-rule engine (injection, XSS, crypto, auth,
 * deserialization, path traversal, SSRF, language-specific packs) over the
 * workspace or a subpath through Kaos, so it works on local, SSH, and
 * container environments alike.
 */

import type { Kaos } from '@nighthawk/kaos';
import { z } from 'zod';

import type { BuiltinTool } from '../../../agent/tool';
import { ToolAccesses } from '../../../loop/tool-access';
import type { ToolExecution } from '../../../loop/types';
import { resolvePathAccessPath } from '../../policies/path-access';
import { literalRulePattern } from '../../support/rule-match';
import { toInputJsonSchema } from '../../support/input-schema';
import type { WorkspaceConfig } from '../../support/workspace';
import { formatScanReport, runScan, type Severity } from './engine';
import SECURITY_SCAN_DESCRIPTION from './security-scan.md?raw';

export const SecurityScanInputSchema = z.object({
  path: z
    .string()
    .optional()
    .describe(
      'File or directory to scan. Accepts an absolute path, or a path relative to the current working directory. Omit to scan the current working directory.',
    ),
  include: z
    .string()
    .optional()
    .describe('Optional glob filter for file names, e.g. `*.py` or `*.ts`.'),
  min_severity: z
    .enum(['critical', 'high', 'medium', 'low', 'info'])
    .optional()
    .describe('Only report findings at or above this severity. Defaults to `low`.'),
  categories: z
    .array(z.string())
    .optional()
    .describe(
      'Restrict the scan to rule categories, e.g. ["sqli", "xss", "crypto"]. Omit to scan all categories. Known categories: sqli, xss, cmdi, path-traversal, ssrf, deserialization, crypto, auth, xxe, node, python, java, go, php, dependency.',
    ),
});

export type SecurityScanInput = z.infer<typeof SecurityScanInputSchema>;

export class SecurityScanTool implements BuiltinTool<SecurityScanInput> {
  readonly name = 'SecurityScan' as const;
  readonly description = SECURITY_SCAN_DESCRIPTION;
  readonly parameters: Record<string, unknown> = toInputJsonSchema(SecurityScanInputSchema);

  constructor(
    private readonly kaos: Kaos,
    private readonly workspace: WorkspaceConfig,
  ) {}

  resolveExecution(args: SecurityScanInput): ToolExecution {
    const scanPath =
      args.path !== undefined
        ? resolvePathAccessPath(args.path, {
            kaos: this.kaos,
            workspace: this.workspace,
            operation: 'read',
            policy: { guardMode: 'absolute-outside-allowed', checkSensitive: false },
          })
        : this.workspace.workspaceDir;
    return {
      accesses: ToolAccesses.searchTree(scanPath),
      description: `Security scanning ${args.path ?? 'workspace'}`,
      display: { kind: 'file_io', operation: 'grep', path: scanPath },
      approvalRule: literalRulePattern(this.name, args.path ?? ''),
      execute: async ({ signal }) => {
        if (signal.aborted) {
          return { isError: true, output: 'Aborted before scan started' };
        }
        try {
          const report = await runScan(this.kaos, {
            root: scanPath,
            include: args.include,
            minSeverity: args.min_severity as Severity | undefined,
            categories: args.categories,
          });
          if (report.filesScanned === 0) {
            return { isError: false, output: `No scannable files found under ${scanPath}` };
          }
          return { isError: false, output: formatScanReport(report) };
        } catch (error) {
          return {
            isError: true,
            output: `SecurityScan failed: ${error instanceof Error ? error.message : String(error)}`,
          };
        }
      },
    };
  }
}
