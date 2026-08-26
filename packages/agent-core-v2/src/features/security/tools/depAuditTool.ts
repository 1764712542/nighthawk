import { IAgentRuntimeService, inspectAgentRuntime } from '#/agent/runtimeBinding/agentRuntime';
import type { IHostFileSystem } from '#/os/interface/hostFileSystem';
import type { IHostProcessService } from '#/os/interface/hostProcess';
import { RuntimeWorkspaceView } from '#/runtime/runtimeWorkspaceView';
import { ISessionWorkspaceContext } from '#/session/workspaceContext/workspaceContext';
import { toInputJsonSchema } from '#/tool/input-schema';
import { resolvePathAccessPath, type WorkspaceConfig } from '#/tool/path-access';
import { literalRulePattern, matchesPathRuleSubject } from '#/tool/rule-match';
import { ToolAccesses, type ExecutableToolResult, type ToolExecution } from '#/tool/toolContract';

import {
  collectDependencyManifests,
  detectPackageManager,
  type DepAuditFinding,
  parseGoMod,
  parseNpmAuditJson,
  parsePackageJson,
  parsePipAuditJson,
  parseRequirementsTxt,
} from '../engine/dep-audit';
import { IDepAuditTool, DepAuditInputSchema, type DepAuditInputArgs } from './dep-audit';
import DEP_AUDIT_DESCRIPTION from './dep-audit.md?raw';

function collectStream(stream: NodeJS.ReadableStream): Promise<string> {
  const chunks: Buffer[] = [];
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk: any) => {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    });
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    stream.on('error', reject);
  });
}

export class DepAuditTool implements IDepAuditTool {
  declare readonly _serviceBrand: undefined;
  readonly name = 'DepAudit' as const;
  readonly description = DEP_AUDIT_DESCRIPTION;
  readonly parameters: Record<string, unknown> = toInputJsonSchema(DepAuditInputSchema);

  constructor(
    @IAgentRuntimeService private readonly runtime: IAgentRuntimeService,
    @ISessionWorkspaceContext private readonly workspaceCtx: ISessionWorkspaceContext,
  ) {}

  private workspaceConfig(view: RuntimeWorkspaceView): WorkspaceConfig {
    return { workspaceDir: view.workDir, additionalDirs: view.additionalDirs };
  }

  resolveExecution(args: DepAuditInputArgs): ToolExecution {
    const inspected = inspectAgentRuntime(this.runtime);
    const view = new RuntimeWorkspaceView(inspected, {
      workDir: this.workspaceCtx.workDir,
      additionalDirs: [...this.workspaceCtx.additionalDirs],
    });
    const env = { _serviceBrand: undefined, ...inspected.environment, ready: Promise.resolve() };
    const workspace = this.workspaceConfig(view);
    const auditPath =
      args.path !== undefined
        ? resolvePathAccessPath(args.path, { env, workspace, operation: 'read', policy: { guardMode: 'absolute-outside-allowed', checkSensitive: false } })
        : workspace.workspaceDir;
    return {
      accesses: ToolAccesses.searchTree(auditPath),
      description: `Auditing dependencies in ${args.path ?? 'workspace'}`,
      display: { kind: 'file_io', operation: 'grep', path: auditPath },
      approvalRule: literalRulePattern(this.name, args.path ?? ''),
      matchesRule: (ruleArgs) =>
        matchesPathRuleSubject(ruleArgs, auditPath, {
          cwd: workspace.workspaceDir,
          pathClass: env.pathClass,
          homeDir: env.homeDir,
        }),
      execute: async () => {
        const lease = this.runtime.acquire(['fs', 'process']);
        try {
          if (lease.runtime.identity.generation !== inspected.identity.generation) {
            return { isError: true, output: 'Runtime changed before execution. Retry the tool call.' };
          }
          const useExternal = args.useExternal ?? false;
          return await this.execution(lease.runtime.fs!, auditPath, lease.runtime.process!, useExternal);
        } finally {
          lease.dispose();
        }
      },
    };
  }

  private async execution(
    fs: IHostFileSystem,
    auditPath: string,
    processService: IHostProcessService,
    useExternal: boolean,
  ): Promise<ExecutableToolResult> {
    try {
      const output = await this.audit(fs, processService, auditPath, useExternal);
      return { isError: false, output };
    } catch (error) {
      return {
        isError: true,
        output: `DepAudit failed: ${error instanceof Error ? error.message : String(error)}`,
      };
    }
  }

  private async audit(
    fs: IHostFileSystem,
    processService: IHostProcessService,
    root: string,
    useExternal: boolean,
  ): Promise<string> {
    const manifests = await collectDependencyManifests(fs, root);
    const findings: DepAuditFinding[] = [];

    for (const manifest of manifests) {
      try {
        const raw = await fs.readText(manifest.path, { errors: 'replace' });
        if (manifest.ecosystem === 'npm') {
          findings.push(...parsePackageJson(manifest.path, raw));
        } else if (manifest.ecosystem === 'pip') {
          findings.push(...parseRequirementsTxt(raw));
        } else if (manifest.ecosystem === 'go') {
          findings.push(...parseGoMod(raw));
        }
      } catch {}
    }

    const externalFindings: DepAuditFinding[] = [];
    let externalSourced = false;
    if (useExternal) {
      const { findings: externalToolFindings, toolName } = await this.runExternalAudit(fs, processService, root);
      externalFindings.push(...externalToolFindings);
      externalSourced = externalToolFindings.length > 0 || toolName !== '';
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

    if (externalFindings.length > 0) {
      parts.push(`\n${String(externalFindings.length)} CVE(s) found via host package-manager audit:`);
      for (const v of externalFindings) {
        parts.push(
          `- [${v.ecosystem}:${v.package}@${v.version}] ${v.message}${v.fixedVersion ? ` (fix: ${v.fixedVersion})` : ''}`,
        );
      }
    } else if (externalSourced) {
      parts.push('\nNo CVEs found via external sources.');
    }

    return parts.join('\n');
  }

  private async runExternalAudit(
    fs: IHostFileSystem,
    processService: IHostProcessService,
    root: string,
  ): Promise<{ findings: DepAuditFinding[]; toolName: string }> {
    const lockInfo = await detectPackageManager(fs, root);
    if (!lockInfo) return { findings: [], toolName: '' };
    try {
      const command = lockInfo.ecosystem === 'npm' ? lockInfo.packageManager : 'pip-audit';
      const args = lockInfo.ecosystem === 'npm' ? ['audit', '--json'] : ['--format', 'json'];
      const proc = await processService.spawn(command, args, { cwd: root });
      const stdout = await collectStream(proc.stdout);
      await proc.wait();
      try {
        await proc.dispose();
      } catch {}
      const findings =
        lockInfo.ecosystem === 'npm'
          ? parseNpmAuditJson(stdout, lockInfo.packageManager)
          : parsePipAuditJson(stdout);
      return { findings, toolName: lockInfo.packageManager };
    } catch {
      return { findings: [], toolName: lockInfo.packageManager };
    }
  }
}
