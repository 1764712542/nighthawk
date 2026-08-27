import { IAgentRuntimeService, inspectAgentRuntime } from '#/agent/runtimeBinding/agentRuntime';
import type { IHostFileSystem } from '#/os/interface/hostFileSystem';
import { RuntimeWorkspaceView } from '#/runtime/runtimeWorkspaceView';
import { ISessionWorkspaceContext } from '#/session/workspaceContext/workspaceContext';
import { toInputJsonSchema } from '#/tool/input-schema';
import { resolvePathAccessPath, type WorkspaceConfig } from '#/tool/path-access';
import { literalRulePattern, matchesPathRuleSubject } from '#/tool/rule-match';
import { ToolAccesses, type ExecutableToolContext, type ExecutableToolResult, type ToolExecution } from '#/tool/toolContract';

import { formatScanReport, runScan, type Severity } from '../engine/engine';
import { createScanCache } from '../engine/scan-cache-persist';
import { ISecurityScanTool, SecurityScanInputSchema, type SecurityScanInput } from './security-scan';
import SECURITY_SCAN_DESCRIPTION from './security-scan.md?raw';

export class SecurityScanTool implements ISecurityScanTool {
  declare readonly _serviceBrand: undefined;
  readonly name = 'SecurityScan' as const;
  readonly description = SECURITY_SCAN_DESCRIPTION;
  readonly parameters: Record<string, unknown> = toInputJsonSchema(SecurityScanInputSchema);

  constructor(
    @IAgentRuntimeService private readonly runtime: IAgentRuntimeService,
    @ISessionWorkspaceContext private readonly workspaceCtx: ISessionWorkspaceContext,
  ) {}

  private workspaceConfig(view: RuntimeWorkspaceView): WorkspaceConfig {
    return { workspaceDir: view.workDir, additionalDirs: view.additionalDirs };
  }

  resolveExecution(args: SecurityScanInput): ToolExecution {
    const inspected = inspectAgentRuntime(this.runtime);
    const view = new RuntimeWorkspaceView(inspected, {
      workDir: this.workspaceCtx.workDir,
      additionalDirs: [...this.workspaceCtx.additionalDirs],
    });
    const env = { _serviceBrand: undefined, ...inspected.environment, ready: Promise.resolve() };
    const workspace = this.workspaceConfig(view);
    const scanPath =
      args.path !== undefined
        ? resolvePathAccessPath(args.path, { env, workspace, operation: 'read', policy: { guardMode: 'absolute-outside-allowed', checkSensitive: false } })
        : workspace.workspaceDir;
    return {
      accesses: ToolAccesses.searchTree(scanPath),
      description: `Security scanning ${args.path ?? 'workspace'}`,
      display: { kind: 'file_io', operation: 'grep', path: scanPath },
      approvalRule: literalRulePattern(this.name, args.path ?? ''),
      matchesRule: (ruleArgs) =>
        matchesPathRuleSubject(ruleArgs, scanPath, {
          cwd: workspace.workspaceDir,
          pathClass: env.pathClass,
          homeDir: env.homeDir,
        }),
      execute: async (ctx) => {
        const lease = this.runtime.acquire(['fs']);
        try {
          if (lease.runtime.identity.generation !== inspected.identity.generation) {
            return { isError: true, output: 'Runtime changed before execution. Retry the tool call.' };
          }
          return await this.execution(lease.runtime.fs!, scanPath, workspace.workspaceDir, args, ctx);
        } finally {
          lease.dispose();
        }
      },
    };
  }

  private async execution(
    fs: IHostFileSystem,
    scanPath: string,
    workspaceDir: string,
    args: SecurityScanInput,
    _ctx: ExecutableToolContext,
  ): Promise<ExecutableToolResult> {
    try {
      const report = await runScan(
        fs,
        {
          root: scanPath,
          include: args.include,
          minSeverity: args.min_severity as Severity | undefined,
          categories: args.categories,
        },
        undefined,
        () => createScanCache(fs, workspaceDir),
      );
      if (report.filesScanned === 0) {
        return { isError: false, output: `No scannable files found under ${scanPath}` };
      }
      return { isError: false, output: formatScanReport(report, args.output_format) };
    } catch (error) {
      return {
        isError: true,
        output: `SecurityScan failed: ${error instanceof Error ? error.message : String(error)}`,
      };
    }
  }
}
