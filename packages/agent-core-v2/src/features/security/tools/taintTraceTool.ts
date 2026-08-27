import { IAgentRuntimeService, inspectAgentRuntime } from '#/agent/runtimeBinding/agentRuntime';
import type { IHostFileSystem } from '#/os/interface/hostFileSystem';
import { RuntimeWorkspaceView } from '#/runtime/runtimeWorkspaceView';
import { ISessionWorkspaceContext } from '#/session/workspaceContext/workspaceContext';
import { toInputJsonSchema } from '#/tool/input-schema';
import { resolvePathAccessPath, type WorkspaceConfig } from '#/tool/path-access';
import { literalRulePattern, matchesPathRuleSubject } from '#/tool/rule-match';
import { ToolAccesses, type ExecutableToolResult, type ToolExecution } from '#/tool/toolContract';

import { formatTaint, taintAnalyze, taintAnalyzeModule } from '../engine/engine';
import { ITaintTraceTool, TaintTraceInputSchema, type TaintTraceInputArgs } from './taint-trace';
import TAINT_TRACE_DESCRIPTION from './taint-trace.md?raw';

export class TaintTraceTool implements ITaintTraceTool {
  declare readonly _serviceBrand: undefined;
  readonly name = 'TaintTrace' as const;
  readonly description = TAINT_TRACE_DESCRIPTION;
  readonly parameters: Record<string, unknown> = toInputJsonSchema(TaintTraceInputSchema);

  constructor(
    @IAgentRuntimeService private readonly runtime: IAgentRuntimeService,
    @ISessionWorkspaceContext private readonly workspaceCtx: ISessionWorkspaceContext,
  ) {}

  private workspaceConfig(view: RuntimeWorkspaceView): WorkspaceConfig {
    return { workspaceDir: view.workDir, additionalDirs: view.additionalDirs };
  }

  resolveExecution(args: TaintTraceInputArgs): ToolExecution {
    const inspected = inspectAgentRuntime(this.runtime);
    const view = new RuntimeWorkspaceView(inspected, {
      workDir: this.workspaceCtx.workDir,
      additionalDirs: [...this.workspaceCtx.additionalDirs],
    });
    const env = { _serviceBrand: undefined, ...inspected.environment, ready: Promise.resolve() };
    const workspace = this.workspaceConfig(view);
    const filePath = resolvePathAccessPath(args.path, { env, workspace, operation: 'read', policy: { guardMode: 'absolute-outside-allowed', checkSensitive: false } });
    return {
      accesses: ToolAccesses.searchTree(filePath),
      description: `Tracing taint flows in ${args.path}`,
      display: { kind: 'file_io', operation: 'grep', path: filePath },
      approvalRule: literalRulePattern(this.name, args.path),
      matchesRule: (ruleArgs) =>
        matchesPathRuleSubject(ruleArgs, filePath, {
          cwd: workspace.workspaceDir,
          pathClass: env.pathClass,
          homeDir: env.homeDir,
        }),
      execute: async () => {
        const lease = this.runtime.acquire(['fs']);
        try {
          if (lease.runtime.identity.generation !== inspected.identity.generation) {
            return { isError: true, output: 'Runtime changed before execution. Retry the tool call.' };
          }
          return await this.execution(lease.runtime.fs!, filePath, args);
        } finally {
          lease.dispose();
        }
      },
    };
  }

  private async execution(
    fs: IHostFileSystem,
    filePath: string,
    args: TaintTraceInputArgs,
  ): Promise<ExecutableToolResult> {
    try {
      const findings =
        (args.scope ?? 'module') === 'file'
          ? await taintAnalyze(fs, filePath)
          : await taintAnalyzeModule(fs, filePath);
      return { isError: false, output: formatTaint(findings) };
    } catch (error) {
      return {
        isError: true,
        output: `TaintTrace failed: ${error instanceof Error ? error.message : String(error)}`,
      };
    }
  }
}
