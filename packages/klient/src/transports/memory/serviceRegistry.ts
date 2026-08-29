/**
 * Service name → DI token registry for the in-process dispatcher. Only leaf
 * modules are imported (tokens + types) — never the engine root barrel, so
 * hosting klient in-process does not force the full registration side effects
 * beyond what the host already bootstrapped.
 */

import type { ServiceIdentifier } from '@nighthawk/agent-core-v2/_base/di/instantiation';
import { ISessionIndex } from '@nighthawk/agent-core-v2/app/sessionIndex/sessionIndex';
import { IWorkspaceService } from '@nighthawk/agent-core-v2/app/workspace/workspace';
import { IConfigService } from '@nighthawk/agent-core-v2/app/config/config';
import { IModelService } from '@nighthawk/agent-core-v2/kosong/model/model';
import { IModelCatalog } from '@nighthawk/agent-core-v2/kosong/model/catalog';
import { IProviderDiscoveryService } from '@nighthawk/agent-core-v2/app/kosongConfig/discovery';
import { IProviderService } from '@nighthawk/agent-core-v2/kosong/provider/provider';
import {
  IAuthSummaryService,
  IOAuthService,
} from '@nighthawk/agent-core-v2/app/auth/auth';
import { IFlagService } from '@nighthawk/agent-core-v2/app/flag/flag';
import { IPluginService } from '@nighthawk/agent-core-v2/app/plugin/plugin';
import { ICapabilityService } from '@nighthawk/agent-core-v2/app/capability/capability';
import { IBootstrapService } from '@nighthawk/agent-core-v2/app/bootstrap/bootstrap';
import { IEventService } from '@nighthawk/agent-core-v2/app/event/event';
import { IFileService } from '@nighthawk/agent-core-v2/app/file/fileService';
import { IHostFolderBrowser } from '@nighthawk/agent-core-v2/app/hostFolderBrowser/hostFolderBrowser';
import { IWorkspaceInstanceManager } from '@nighthawk/agent-core-v2/workspace/workspaceInstance/workspaceInstanceManager';
import { ISessionManager } from '@nighthawk/agent-core-v2/app/sessionManager/sessionManager';
import { ISessionMetadata } from '@nighthawk/agent-core-v2/session/sessionMetadata/sessionMetadata';
import { ISessionApprovalService } from '@nighthawk/agent-core-v2/session/approval/approval';
import { ISessionQuestionService } from '@nighthawk/agent-core-v2/session/question/question';
import { ISessionSkillCatalog } from '@nighthawk/agent-core-v2/features/skill/session/skillCatalog';
import { ISessionTitleService } from '@nighthawk/agent-core-v2/session/sessionTitle/sessionTitle';
import { IAgentPromptService } from '@nighthawk/agent-core-v2/agent/prompt/prompt';
import { IAgentLoopService } from '@nighthawk/agent-core-v2/agent/loop/loop';
import { IAgentPermissionModeService } from '@nighthawk/agent-core-v2/agent/permissionMode/permissionMode';
import { IAgentCommandService } from '@nighthawk/agent-core-v2/agent/command/agentCommand';
import { IAgentRuntimeBindingService } from '@nighthawk/agent-core-v2/agent/runtimeBinding/runtimeBinding';
import { IAgentContextMemoryService } from '@nighthawk/agent-core-v2/agent/contextMemory/contextMemory';
import { ISessionTokenCountingService } from '@nighthawk/agent-core-v2/session/tokenCounting/sessionTokenCounting';
import { IAgentActivityView } from '@nighthawk/agent-core-v2/agent/activityView/activityView';
import { IAgentPlanService } from '@nighthawk/agent-core-v2/features/plan/plan';
import { IAgentProfileService } from '@nighthawk/agent-core-v2/agent/profile/profile';
import { IAgentShellCommandService } from '@nighthawk/agent-core-v2/agent/shellCommand/shellCommand';
import { IAgentTaskService } from '@nighthawk/agent-core-v2/agent/task/task';
import { ISessionUsageService } from '@nighthawk/agent-core-v2/session/usage/sessionUsage';
import { IAgentMcpService } from '@nighthawk/agent-core-v2/agent/mcp/mcp';
import { IAgentFullCompactionService } from '@nighthawk/agent-core-v2/agent/fullCompaction/fullCompaction';
import { IMcpManagementService } from '@nighthawk/agent-core-v2/app/mcpManagement/mcpManagement';
import { IAgentPentestModeService } from '@nighthawk/agent-core-v2/agent/pentestMode/pentestMode';

/** Wire service name (decorator id string) → token. */
export const serviceTokens: Readonly<Record<string, ServiceIdentifier<unknown>>> = {
  sessionIndex: ISessionIndex,
  workspaceService: IWorkspaceService,
  configService: IConfigService,
  modelService: IModelService,
  modelResolver: IModelCatalog,
  providerDiscovery: IProviderDiscoveryService,
  providerService: IProviderService,
  oauthService: IOAuthService,
  authSummaryService: IAuthSummaryService,
  flagService: IFlagService,
  pluginService: IPluginService,
  capabilityService: ICapabilityService,
  hostFolderBrowser: IHostFolderBrowser,
  bootstrapService: IBootstrapService,
  fileService: IFileService,
  workspaceInstanceManager: IWorkspaceInstanceManager,
  sessionManager: ISessionManager,
  sessionMetadata: ISessionMetadata,
  sessionApprovalService: ISessionApprovalService,
  sessionQuestionService: ISessionQuestionService,
  sessionSkillCatalog: ISessionSkillCatalog,
  sessionTitleService: ISessionTitleService,
  agentPromptService: IAgentPromptService,
  agentLoopService: IAgentLoopService,
  agentPermissionModeService: IAgentPermissionModeService,
  agentCommandService: IAgentCommandService,
  agentRuntimeBindingService: IAgentRuntimeBindingService,
  agentContextMemoryService: IAgentContextMemoryService,
  agentTokenCountingService: ISessionTokenCountingService,
  agentActivityView: IAgentActivityView,
  agentShellCommandService: IAgentShellCommandService,
  agentProfileService: IAgentProfileService,
  agentUsageService: ISessionUsageService,
  agentPlanService: IAgentPlanService,
  agentTaskService: IAgentTaskService,
  agentMcpService: IAgentMcpService,
  agentFullCompactionService: IAgentFullCompactionService,
  agentPentestModeService: IAgentPentestModeService,
  mcpManagementService: IMcpManagementService,
};

export { IEventService };
