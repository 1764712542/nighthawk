/**
 * TaintTraceTool — intra-file data-flow tracing from sources to sinks.
 *
 * Tracks user-input variables (request params, req.query, superglobals,
 * stdin, env) through assignments, then flags when a tainted variable
 * reaches a dangerous sink (SQL execute, shell exec, eval, DOM write,
 * file op, HTTP request, deserialize).
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
import { formatTaint, taintAnalyze, taintAnalyzeModule } from './engine';
import TAINT_TRACE_DESCRIPTION from './taint-trace.md?raw';

export const TaintTraceInputSchema = z.object({
  path: z
    .string()
    .describe(
      'File to analyze. Accepts an absolute path, or a path relative to the current working directory. Pass the entry point (e.g. a route handler) and taint will be traced across files it imports.',
    ),
  scope: z
    .enum(['file', 'module'])
    .default('module')
    .describe(
      "Analysis granularity. 'module' (default) follows imports/requires across related files; 'file' restricts analysis to the single file. When 'module', the given path is treated as the entry point of a module graph.",
    ),
});

export type TaintTraceInput = z.infer<typeof TaintTraceInputSchema>;

export type TaintTraceInputArgs = z.input<typeof TaintTraceInputSchema>;

export class TaintTraceTool implements BuiltinTool<TaintTraceInput> {
  readonly name = 'TaintTrace' as const;
  readonly description = TAINT_TRACE_DESCRIPTION;
  readonly parameters: Record<string, unknown> = toInputJsonSchema(TaintTraceInputSchema);

  constructor(
    private readonly kaos: Kaos,
    private readonly workspace: WorkspaceConfig,
  ) {}

  resolveExecution(args: TaintTraceInputArgs): ToolExecution {
    const filePath = resolvePathAccessPath(args.path, {
      kaos: this.kaos,
      workspace: this.workspace,
      operation: 'read',
      policy: { guardMode: 'absolute-outside-allowed', checkSensitive: false },
    });
    return {
      accesses: ToolAccesses.searchTree(filePath),
      description: `Tracing taint flows in ${args.path}`,
      display: { kind: 'file_io', operation: 'grep', path: filePath },
      approvalRule: literalRulePattern(this.name, args.path),
      execute: async ({ signal }) => {
        if (signal.aborted) {
          return { isError: true, output: 'Aborted before analysis started' };
        }
        try {
          const findings =
            args.scope === 'file'
              ? await taintAnalyze(this.kaos, filePath)
              : await taintAnalyzeModule(this.kaos, filePath);
          return { isError: false, output: formatTaint(findings) };
        } catch (error) {
          return {
            isError: true,
            output: `TaintTrace failed: ${error instanceof Error ? error.message : String(error)}`,
          };
        }
      },
    };
  }
}
