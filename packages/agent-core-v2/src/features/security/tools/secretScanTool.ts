import { IAgentRuntimeService, inspectAgentRuntime } from '#/agent/runtimeBinding/agentRuntime';
import type { IHostFileSystem } from '#/os/interface/hostFileSystem';
import { RuntimeWorkspaceView } from '#/runtime/runtimeWorkspaceView';
import { ISessionWorkspaceContext } from '#/session/workspaceContext/workspaceContext';
import { toInputJsonSchema } from '#/tool/input-schema';
import { resolvePathAccessPath, type WorkspaceConfig } from '#/tool/path-access';
import { literalRulePattern, matchesPathRuleSubject } from '#/tool/rule-match';
import { ToolAccesses, type ExecutableToolResult, type ToolExecution } from '#/tool/toolContract';

import { formatSecrets, scanSecrets } from '../engine/engine';
import { ISecretScanTool, SecretScanInputSchema, type SecretScanInput } from './secret-scan';
import SECRET_SCAN_DESCRIPTION from './secret-scan.md?raw';

export class SecretScanTool implements ISecretScanTool {
  declare readonly _serviceBrand: undefined;
  readonly name = 'SecretScan' as const;
  readonly description = SECRET_SCAN_DESCRIPTION;
  readonly parameters: Record<string, unknown> = toInputJsonSchema(SecretScanInputSchema);

  constructor(
    @IAgentRuntimeService private readonly runtime: IAgentRuntimeService,
    @ISessionWorkspaceContext private readonly workspaceCtx: ISessionWorkspaceContext,
  ) {}

  private workspaceConfig(view: RuntimeWorkspaceView): WorkspaceConfig {
    return { workspaceDir: view.workDir, additionalDirs: view.additionalDirs };
  }

  resolveExecution(args: SecretScanInput): ToolExecution {
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
      description: `Scanning for secrets in ${args.path ?? 'workspace'}`,
      display: { kind: 'file_io', operation: 'grep', path: scanPath },
      approvalRule: literalRulePattern(this.name, args.path ?? ''),
      matchesRule: (ruleArgs) =>
        matchesPathRuleSubject(ruleArgs, scanPath, {
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
          return await this.execution(lease.runtime.fs!, scanPath, args);
        } finally {
          lease.dispose();
        }
      },
    };
  }

  private async execution(
    fs: IHostFileSystem,
    scanPath: string,
    args: SecretScanInput,
  ): Promise<ExecutableToolResult> {
    try {
      const findings = await scanSecrets(fs, scanPath, args.include);
      return { isError: false, output: formatSecrets(findings) };
    } catch (error) {
      return {
        isError: true,
        output: `SecretScan failed: ${error instanceof Error ? error.message : String(error)}`,
      };
    }
  }
}
