/**
 * SecretScanTool — detect hardcoded credentials and API keys.
 *
 * Combines known token formats (AWS/GitHub/Stripe/OpenAI/...) with
 * key-assignment heuristics gated by Shannon entropy, run through Kaos.
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
import { formatSecrets, scanSecrets } from './engine';
import SECRET_SCAN_DESCRIPTION from './secret-scan.md?raw';

export const SecretScanInputSchema = z.object({
  path: z
    .string()
    .optional()
    .describe(
      'File or directory to scan. Accepts an absolute path, or a path relative to the current working directory. Omit to scan the current working directory.',
    ),
  include: z
    .string()
    .optional()
    .describe('Optional glob filter for file names, e.g. `*.env` or `*.ts`.'),
});

export type SecretScanInput = z.infer<typeof SecretScanInputSchema>;

export class SecretScanTool implements BuiltinTool<SecretScanInput> {
  readonly name = 'SecretScan' as const;
  readonly description = SECRET_SCAN_DESCRIPTION;
  readonly parameters: Record<string, unknown> = toInputJsonSchema(SecretScanInputSchema);

  constructor(
    private readonly kaos: Kaos,
    private readonly workspace: WorkspaceConfig,
  ) {}

  resolveExecution(args: SecretScanInput): ToolExecution {
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
      description: `Scanning for secrets in ${args.path ?? 'workspace'}`,
      display: { kind: 'file_io', operation: 'grep', path: scanPath },
      approvalRule: literalRulePattern(this.name, args.path ?? ''),
      execute: async ({ signal }) => {
        if (signal.aborted) {
          return { isError: true, output: 'Aborted before scan started' };
        }
        try {
          const findings = await scanSecrets(this.kaos, scanPath, args.include);
          return { isError: false, output: formatSecrets(findings) };
        } catch (error) {
          return {
            isError: true,
            output: `SecretScan failed: ${error instanceof Error ? error.message : String(error)}`,
          };
        }
      },
    };
  }
}
