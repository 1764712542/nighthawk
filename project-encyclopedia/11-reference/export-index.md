# 包导出索引

> 本索引由脚本遍历所有 `packages/*/src/index.ts` 生成，列出每个包的顶层导出符号。

## acp-adapter

入口：`packages/acp-adapter/src/index.ts`

### 直接导出

| 符号 |
| --- |
| `ACP_BUILTIN_SLASH_COMMANDS` |
| `ACP_BUILTIN_SLASH_COMMAND_NAMES` |
| `AcpServer` |
| `AcpSession` |
| `CURRENT_VERSION` |
| `HideOutputMarker` |
| `MIN_PROTOCOL_VERSION` |
| `acpBlocksToPromptParts` |
| `acpToolCallId` |
| `assistantDeltaToSessionUpdate` |
| `displayBlockToAcpContent` |
| `inferToolKind` |
| `isAcpBuiltinSlashCommand` |
| `isHideOutputMarker` |
| `negotiateVersion` |
| `redirectConsoleToStderr` |
| `runAcpServer` |
| `runAcpServerWithStream` |
| `stringifyArgs` |
| `thinkingDeltaToSessionUpdate` |
| `toolCallDeltaToSessionUpdate` |
| `toolCallLazyCreateToSessionUpdate` |
| `toolCallStartToSessionUpdate` |
| `toolCallStartedUpgradeToSessionUpdate` |
| `toolProgressToSessionUpdate` |
| `toolResultToAcpContent` |
| `toolResultToSessionUpdate` |
| `turnEndReasonToStopReason` |

## acp-server

入口：`packages/acp-server/src/index.ts`

### 直接导出

| 符号 |
| --- |
| `ACP_BUILTIN_SLASH_COMMANDS` |
| `ACP_BUILTIN_SLASH_COMMAND_NAMES` |
| `ACP_MODES` |
| `APPROVE_ALWAYS_OPTION_ID` |
| `APPROVE_ONCE_OPTION_ID` |
| `AcpInteractionBridge` |
| `AcpRuntimeProviderFactory` |
| `AcpServer` |
| `AcpSession` |
| `DEFAULT_MODE_ID` |
| `HideOutputMarker` |
| `PLAN_APPROVE_OPTION_ID` |
| `PLAN_REJECT_AND_EXIT_OPTION_ID` |
| `PLAN_REVISE_OPTION_ID` |
| `REJECT_OPTION_ID` |
| `acpBlocksToContentParts` |
| `acpClientFromContext` |
| `acpModeToToggles` |
| `acpToolCallId` |
| `approvalRequestToPermissionOptions` |
| `assistantDeltaToSessionUpdate` |
| `attachSelectedLabel` |
| `availableCommandsUpdateNotification` |
| `buildModeOption` |
| `buildModelOption` |
| `buildPermissionToolCallUpdate` |
| `buildSessionConfigOptions` |
| `buildThinkingOption` |
| `configOptionUpdateNotification` |
| `createAcpAgentApp` |
| `deriveAlwaysThinking` |
| `deriveDefaultThinkingEffort` |
| `deriveThinkingSupported` |
| `detectSlashIntent` |
| `displayBlockToAcpContent` |
| `elicitationResponseToQuestionAnswers` |
| `inferToolKind` |
| `isAcpBuiltinSlashCommand` |
| `isAcpModeId` |
| `isHideOutputMarker` |
| `outcomeToQuestionAnswer` |
| `parseSlashInput` |
| `permissionResponseToApprovalResponse` |
| `planFromDisplayBlock` |
| `projectHistoryToSessionUpdates` |
| `projectModelCatalog` |
| `questionItemToPermissionOptions` |
| `questionRequestToElicitationParams` |
| `resolveSkillCommand` |
| `runAcpServer` |
| `runAcpServerWithStream` |
| `stringifyArgs` |
| `thinkingDeltaToSessionUpdate` |
| `todoListToSessionUpdate` |
| `toolCallDeltaToSessionUpdate` |
| `toolCallLazyCreateToSessionUpdate` |
| `toolCallStartToSessionUpdate` |
| `toolCallStartedUpgradeToSessionUpdate` |
| `toolProgressToSessionUpdate` |
| `toolResultToAcpContent` |
| `toolResultToSessionUpdate` |
| `turnEndReasonToStopReason` |

## agent-core

入口：`packages/agent-core/src/index.ts`

### 直接导出

| 符号 |
| --- |
| `AGENT_WIRE_PROTOCOL_VERSION` |
| `COMPACTION_ELISION_VARIANT` |
| `COMPACT_USER_MESSAGE_HEAD_TOKENS` |
| `COMPACT_USER_MESSAGE_MAX_TOKENS` |
| `Emitter` |
| `IMAGE_BYTE_BUDGET` |
| `ImageLimits` |
| `MAX_IMAGE_EDGE_PX` |
| `MODEL_ACCEPTED_IMAGE_MIMES` |
| `READ_IMAGE_BYTE_BUDGET` |
| `SingleModelProvider` |
| `USER_PROMPT_ORIGIN` |
| `buildCompactionElisionText` |
| `buildImageCompressionCaption` |
| `buildImageConversionGuidance` |
| `buildReplay` |
| `buildUnsupportedImageNotice` |
| `collectCompactableUserMessages` |
| `compressBase64ForModel` |
| `compressImageContentParts` |
| `compressImageForModel` |
| `cropImageForModel` |
| `decodeBase64Prefix` |
| `flushDiagnosticLogs` |
| `flushDiagnosticLogsSync` |
| `formatByteSize` |
| `gateImageFormatParts` |
| `getRootLogger` |
| `installGlobalProxyDispatcher` |
| `isAgentReplayUserTurnRecord` |
| `isModelAcceptedImageMime` |
| `isRealUserInput` |
| `limitAgentReplayByTurns` |
| `log` |
| `normalizeImageMime` |
| `originalImageCacheDir` |
| `parseAgentFileText` |
| `parseImageDataUrl` |
| `persistOriginalImage` |
| `redact` |
| `renderToolResultForModel` |
| `resolveAgentPath` |
| `resolveEffectiveImageMime` |
| `resolveGlobalLogPath` |
| `resolveLoggingConfig` |
| `resolveMaxImageEdgePx` |
| `resolveReadImageByteBudget` |
| `selectCompactionUserMessages` |
| `selectRecentUserMessages` |
| `sessionMediaOriginalsDir` |
| `unsupportedImageMimeFromUrl` |

### 再导出模块

- `./agent`
- `./config`
- `./di`
- `./errors`
- `./flags`
- `./plugin`
- `./rpc`
- `./services`
- `./session`
- `./session/export`
- `./telemetry`

## agent-core-v2

入口：`packages/agent-core-v2/src/index.ts`

### 直接导出

| 符号 |
| --- |
| `AGENT_RUN_PROMPT_ORIGIN` |
| `AgentRuntimeContributionPoint` |
| `AgentRuntimeOverrideContributionPoint` |
| `AgentTaskConfig` |
| `AgentToolContribution` |
| `ApprovalDecision` |
| `ApprovalRequest` |
| `ApprovalResponse` |
| `CollectionChange` |
| `CollectionRecord` |
| `CollectionToken` |
| `CollectionView` |
| `ConfigSchema` |
| `Fiber` |
| `FiberHandle` |
| `FiberProtocolError` |
| `FiberProvideOptions` |
| `FiberState` |
| `IAgentToolActivationService` |
| `IAgentToolRegistryService` |
| `IEventBus` |
| `IEventService` |
| `IMAGE_BYTE_BUDGET` |
| `IMcpConfigStore` |
| `IMcpOAuthService` |
| `ISessionApprovalService` |
| `ImageCompressionTelemetry` |
| `MAX_IMAGE_EDGE_PX` |
| `MCP_SECTION` |
| `MODEL_ACCEPTED_IMAGE_MIMES` |
| `MODEL_CATALOG_SECTION` |
| `McpSection` |
| `McpSectionSchema` |
| `ModelCatalogConfig` |
| `ModelCatalogConfigSchema` |
| `PrintBackgroundMode` |
| `READ_IMAGE_BYTE_BUDGET` |
| `RecipeStatics` |
| `ScopeUnits` |
| `Service` |
| `ServiceRecipe` |
| `ServiceRecipeError` |
| `SessionSummary` |
| `TaskService` |
| `_clearAgentProfileContributionsForTests` |
| `buildDaemonFileUrl` |
| `buildImageCompressionCaption` |
| `buildImageConversionGuidance` |
| `buildMediaPathTag` |
| `buildUnsupportedImageNotice` |
| `collection` |
| `compressBase64ForModel` |
| `compressImageForModel` |
| `daemonFileRefFromPart` |
| `decodeBase64Prefix` |
| `defineAgentRuntimeContract` |
| `defineAgentRuntimeProvider` |
| `gateImageFormatParts` |
| `getAgentProfileContributions` |
| `isCollectionToken` |
| `isModelAcceptedImageMime` |
| `matchSingleMediaPathTag` |
| `mediaExtensionForMime` |
| `normalizeImageMime` |
| `parseAgentFileText` |
| `parseDaemonFileUrl` |
| `parseImageDataUrl` |
| `persistOriginalImage` |
| `registerAgentProfile` |
| `registerAgentToolService` |
| `resolveAgentPath` |
| `resolveAgentTaskConfig` |
| `resolveEffectiveImageMime` |
| `resolveMaxImageEdgePx` |
| `resolvePrintBackgroundMode` |
| `resolveReadImageByteBudget` |
| `sessionMediaOriginalsDir` |
| `setFiberEventResolver` |
| `unsupportedImageMimeFromUrl` |

### 再导出模块

- `#/_base/contribution/registry`
- `#/_base/di/cascadeEngine`
- `#/_base/di/dependencyGraph`
- `#/_base/di/descriptors`
- `#/_base/di/errors`
- `#/_base/di/graph`
- `#/_base/di/instantiation`
- `#/_base/di/instantiationService`
- `#/_base/di/lifecycle`
- `#/_base/di/scope`
- `#/_base/di/serviceCollection`
- `#/_base/lifecycle/ledger`
- `#/_base/log/fileLog`
- `#/_base/log/formatter`
- `#/_base/log/log`
- `#/_base/log/logConfig`
- `#/_base/log/logService`
- `#/_base/state/stateRegistry`
- `#/_base/utils/promise`
- `#/_base/utils/retry`
- `#/_base/utils/timer`
- `#/agent/activityView/activityView`
- `#/agent/agentContext/agentContext`
- `#/agent/agentContext/agentSpace`
- `#/agent/agentsMdReminder/agentsMdReminder`
- `#/agent/agentsMdReminder/agentsMdReminderService`
- `#/agent/blob/agentBlobService`
- `#/agent/blob/agentBlobServiceImpl`
- `#/agent/command/agentCommand`
- `#/agent/command/commandContribution`
- `#/agent/contextInjector/contextInjector`
- `#/agent/contextInjector/contextInjectorService`
- `#/agent/contextMemory/compactionHandoff`
- `#/agent/contextMemory/contextMemory`
- `#/agent/contextMemory/contextMemoryService`
- `#/agent/contextMemory/contextOps`
- `#/agent/contextMemory/contextTranscript`
- `#/agent/contextMemory/conversationTime`
- `#/agent/contextMemory/conversationUndoParticipants`
- `#/agent/contextMemory/loopEventFold`
- `#/agent/contextMemory/messageId`
- `#/agent/contextMemory/types`
- `#/agent/contextProjector/contextProjector`
- `#/agent/contextProjector/contextProjectorService`
- `#/agent/contextProjector/mediaProjection`
- `#/agent/fullCompaction/compactionOps`
- `#/agent/fullCompaction/fullCompaction`
- `#/agent/fullCompaction/fullCompactionService`
- `#/agent/fullCompaction/strategy`
- `#/agent/fullCompaction/types`
- `#/agent/interruptionReminder/interruptionReminder`
- `#/agent/interruptionReminder/interruptionReminderOps`
- `#/agent/interruptionReminder/interruptionReminderService`
- `#/agent/llmRequester/llmRequestOps`
- `#/agent/llmRequester/llmRequester`
- `#/agent/llmRequester/llmRequesterService`
- `#/agent/loop/loop`
- `#/agent/loop/loopContinuation`
- `#/agent/loop/loopContinuationService`
- `#/agent/loop/loopService`
- `#/agent/mcp/mcp`
- `#/agent/mcp/mcpDiscoveryOps`
- `#/agent/mcp/mcpService`
- `#/agent/media/imageConfigBridge`
- `#/agent/media/mediaResolver`
- `#/agent/media/mediaResolverService`
- `#/agent/media/mediaTools`
- `#/agent/media/mediaToolsRegistrar`
- `#/agent/media/nighthawkFileUrl`
- `#/agent/media/registerMediaTools`
- `#/agent/media/sessionMediaStore`
- `#/agent/media/videoUpload`
- `#/agent/permissionGate/permissionGate`
- `#/agent/permissionGate/permissionGateService`
- `#/agent/permissionMode/permissionMode`
- `#/agent/permissionMode/permissionModeService`
- `#/agent/permissionPolicy/permissionPolicy`
- `#/agent/permissionPolicy/permissionPolicyService`
- `#/agent/permissionPolicy/types`
- `#/agent/permissionRules/matchesRule`
- `#/agent/permissionRules/permissionRules`
- `#/agent/permissionRules/permissionRulesService`
- `#/agent/plugin/agentPlugin`
- `#/agent/plugin/agentPluginOps`
- `#/agent/plugin/agentPluginService`
- `#/agent/pluginCommand/pluginCommand`
- `#/agent/pluginCommand/pluginCommandService`
- `#/agent/profile/context`
- `#/agent/profile/profile`
- `#/agent/profile/profileService`
- `#/agent/prompt/prompt`
- `#/agent/prompt/promptMetadataText`
- `#/agent/prompt/promptOps`
- `#/agent/prompt/promptService`
- `#/agent/replayBuilder/types`
- `#/agent/runtimeBinding/agentRuntime`
- `#/agent/runtimeBinding/runtimeBinding`
- `#/agent/runtimeBinding/runtimeBindingService`
- `#/agent/scopeContext/scopeContext`
- `#/agent/shellCommand/shellCommand`
- `#/agent/shellCommand/shellCommandService`
- `#/agent/state/agentState`
- `#/agent/stepRetry/stepRetry`
- `#/agent/stepRetry/stepRetryService`
- `#/agent/systemReminder/systemReminder`
- `#/agent/systemReminder/systemReminderService`
- `#/agent/task/printDefaults`
- `#/agent/task/task`
- `#/agent/task/taskOps`
- `#/agent/task/taskService`
- `#/agent/tokenCounting/tokenCounting`
- `#/agent/tokenCounting/tokenCountingOps`
- `#/agent/toolApproval/toolApproval`
- `#/agent/toolApproval/toolApprovalService`
- `#/agent/toolDedupe/toolDedupe`
- `#/agent/toolDedupe/toolDedupeService`
- `#/agent/toolExecutor/toolExecutor`
- `#/agent/toolExecutor/toolExecutorService`
- `#/agent/toolExecutor/toolHooks`
- `#/agent/toolPolicy/configSection`
- `#/agent/toolPolicy/evaluate`
- `#/agent/toolPolicy/toolPolicy`
- `#/agent/toolPolicy/toolPolicyService`
- `#/agent/toolResultTruncation/toolResultTruncation`
- `#/agent/toolSelect/dynamicTools`
- `#/agent/toolSelect/toolSelect`
- `#/agent/toolSelect/toolSelectAnnouncements`
- `#/agent/toolSelect/toolSelectAnnouncementsService`
- `#/agent/toolSelect/toolSelectSchemas`
- `#/agent/toolSelect/toolSelectSchemasService`
- `#/agent/toolSelect/toolSelectService`
- `#/agent/tools/agent/agent`
- `#/agent/tools/agent/subagent-task`
- `#/agent/tools/ask-user-question/ask-user-question`
- `#/agent/tools/edit/edit`
- `#/agent/tools/fetch-url/fetch-url`
- `#/agent/tools/os/bash/bash`
- `#/agent/tools/os/glob/glob`
- `#/agent/tools/os/grep/grep`
- `#/agent/tools/os/read/read`
- `#/agent/tools/os/write/write`
- `#/agent/tools/select-tools/select-tools`
- `#/agent/tools/task/task-list/task-list`
- `#/agent/tools/task/task-output/task-output`
- `#/agent/tools/task/task-stop/task-stop`
- `#/agent/tools/task/task-wait/task-wait`
- `#/agent/tools/web-search/web-search`
- `#/agent/undo/undo`
- `#/agent/undo/undoService`
- `#/agent/usage/cacheProbe`
- `#/agent/usage/cacheProbeService`
- `#/agent/usage/usage`
- `#/agent/userTool/userTool`
- `#/agent/userTool/userToolOps`
- `#/agent/userTool/userToolService`
- `#/app/agentIdentity/agentIdentity`
- `#/app/agentIdentity/agentIdentityService`
- `#/app/agentIdentity/configSection`
- `#/app/agentProfileCatalog/agentProfileCatalog`
- `#/app/agentProfileCatalog/agentProfileContribution`
- `#/app/agentProfileCatalog/agentProfileRegistry`
- `#/app/agentProfileCatalog/agentProfileRegistryService`
- `#/app/agentProfileCatalog/builtinAgentProfileLoader`
- `#/app/agentProfileCatalog/builtinAgentProfileLoaderService`
- `#/app/agentProfileCatalog/profile-shared`
- `#/app/agentProfileCatalog/promptPrefix`
- `#/app/auth/auth`
- `#/app/auth/authService`
- `#/app/auth/configSection`
- `#/app/auth/webSearch/providers/nighthawk-web-search`
- `#/app/auth/webSearch/webSearch`
- `#/app/auth/webSearch/webSearchService`
- `#/app/authLegacy/authLegacy`
- `#/app/authLegacy/authLegacyService`
- `#/app/bashParser/bashParser`
- `#/app/bootstrap/bootstrap`
- `#/app/bootstrap/bootstrapService`
- `#/app/capability/capability`
- `#/app/capability/capabilityEvents`
- `#/app/capability/capabilityService`
- `#/app/capability/errors`
- `#/app/capability/types`
- `#/app/config/config`
- `#/app/config/configEvents`
- `#/app/config/configSectionContributions`
- `#/app/config/configService`
- `#/app/edit/editService`
- `#/app/edit/fileEdit`
- `#/app/edit/fileEditService`
- `#/app/edit/textModel`
- `#/app/event/errors`
- `#/app/event/event2`
- `#/app/feature/featureManager`
- `#/app/feature/featureServiceContribution`
- `#/app/file/fileService`
- `#/app/file/fileServiceImpl`
- `#/app/flag/flag`
- `#/app/flag/flagRegistry`
- `#/app/flag/flagRegistryService`
- `#/app/flag/flagService`
- `#/app/gateway/gateway`
- `#/app/gateway/gatewayService`
- `#/app/hostFolderBrowser/hostFolderBrowser`
- `#/app/hostFolderBrowser/hostFolderBrowserService`
- `#/app/kosongConfig/discovery`
- `#/app/kosongConfig/discoveryService`
- `#/app/kosongConfig/errors`
- `#/app/kosongConfig/hostRequestHeadersAdapter`
- `#/app/kosongConfig/kosongConfig`
- `#/app/kosongConfig/kosongConfigService`
- `#/app/kosongConfig/modelsDev`
- `#/app/kosongConfig/modelsDevImport`
- `#/app/kosongConfig/modelsDevImportService`
- `#/app/kosongConfig/modelsDevUpstream`
- `#/app/kosongConfig/oauthTokenAdapter`
- `#/app/mcpConfig/oauthStore`
- `#/app/mcpManagement/mcpManagement`
- `#/app/mcpRegistry/mcpRegistry`
- `#/app/plugin/archive`
- `#/app/plugin/commands`
- `#/app/plugin/github-resolver`
- `#/app/plugin/manager`
- `#/app/plugin/manifest`
- `#/app/plugin/marketplace`
- `#/app/plugin/plugin`
- `#/app/plugin/pluginEvents`
- `#/app/plugin/pluginService`
- `#/app/plugin/source`
- `#/app/plugin/store`
- `#/app/plugin/types`
- `#/app/projectLocalConfig/projectLocalConfig`
- `#/app/sessionExport/manifest`
- `#/app/sessionExport/sessionExport`
- `#/app/sessionExport/sessionExportService`
- `#/app/sessionExport/wire-scan`
- `#/app/sessionExport/zip`
- `#/app/sessionIndex/sessionIndex`
- `#/app/sessionIndex/sessionIndexMirrorService`
- `#/app/sessionIndex/sessionIndexService`
- `#/app/sessionLegacy/sessionLegacy`
- `#/app/sessionLegacy/sessionLegacyService`
- `#/app/sessionManager/sessionLookup`
- `#/app/sessionManager/sessionManager`
- `#/app/sessionManager/sessionManagerService`
- `#/app/state/appState`
- `#/app/task/task`
- `#/app/telemetry/agentTelemetryContext`
- `#/app/telemetry/agentTelemetryContextService`
- `#/app/telemetry/cloudAppender`
- `#/app/telemetry/consoleAppender`
- `#/app/telemetry/events`
- `#/app/telemetry/telemetry`
- `#/app/telemetry/telemetryService`
- `#/app/web/providers/local-fetch-url`
- `#/app/web/providers/nighthawk-fetch-url`
- `#/app/web/web`
- `#/app/web/webService`
- `#/app/workspace/fileWorkspacePersistence`
- `#/app/workspace/workspace`
- `#/app/workspace/workspaceAlias`
- `#/app/workspace/workspaceEvents`
- `#/app/workspace/workspacePersistence`
- `#/app/workspace/workspaceService`
- `#/app/workspaceAliases/workspaceAliases`
- `#/app/workspaceSessions/workspaceSessions`
- `#/debug/index`
- `#/features/btw/btw`
- `#/features/btw/btwService`
- `#/features/cron/configSection`
- `#/features/cron/cronAgentRuntime`
- `#/features/cron/cronOps`
- `#/features/cron/cronTask`
- `#/features/cron/tools/cron-create/cron-create`
- `#/features/cron/tools/cron-delete/cron-delete`
- `#/features/cron/tools/cron-list/cron-list`
- `#/features/dateChange/dateChange`
- `#/features/dateChange/dateChangeService`
- `#/features/debugEvents/debugEvents`
- `#/features/debugEvents/debugEventsService`
- `#/features/externalHooks/agent/agentExternalHooks`
- `#/features/externalHooks/agent/agentExternalHooksService`
- `#/features/externalHooks/app/externalHooksRunner`
- `#/features/externalHooks/app/externalHooksRunnerService`
- `#/features/externalHooks/configSection`
- `#/features/externalHooks/session/sessionExternalHooks`
- `#/features/externalHooks/session/sessionExternalHooksService`
- `#/features/feature`
- `#/features/featureAssembly`
- `#/features/featureRegistry`
- `#/features/goal/goal`
- `#/features/goal/goalAgentRuntime`
- `#/features/goal/goalDeadlineScheduler`
- `#/features/goal/goalOps`
- `#/features/goal/tools/create-goal/create-goal`
- `#/features/goal/tools/get-goal/get-goal`
- `#/features/goal/tools/set-goal-budget/set-goal-budget`
- `#/features/goal/tools/update-goal/update-goal`
- `#/features/goal/types`
- `#/features/interaction/interaction`
- `#/features/interaction/interactionAgentRuntime`
- `#/features/interaction/interactionOps`
- `#/features/interaction/sessionInteractions`
- `#/features/plan/configSection`
- `#/features/plan/plan`
- `#/features/plan/planOps`
- `#/features/plan/planService`
- `#/features/plan/tools/enter-plan-mode/enter-plan-mode`
- `#/features/plan/tools/exit-plan-mode/exit-plan-mode`
- `#/features/security/tools/dep-audit`
- `#/features/security/tools/secret-scan`
- `#/features/security/tools/security-scan`
- `#/features/security/tools/taint-trace`
- `#/features/sessionInit/profile/init`
- `#/features/sessionInit/sessionInit`
- `#/features/sessionInit/sessionInitService`
- `#/features/skill/catalog/builtin/builtin`
- `#/features/skill/catalog/builtinSkillSource`
- `#/features/skill/catalog/configSection`
- `#/features/skill/catalog/errors`
- `#/features/skill/catalog/inMemorySkillDiscovery`
- `#/features/skill/catalog/parser`
- `#/features/skill/catalog/registry`
- `#/features/skill/catalog/skillDiscovery`
- `#/features/skill/catalog/skillRoots`
- `#/features/skill/catalog/skillSource`
- `#/features/skill/catalog/types`
- `#/features/skill/catalog/userFileSkillSource`
- `#/features/skill/session/skillCatalog`
- `#/features/skill/session/skillCatalogData`
- `#/features/skill/session/skillCatalogService`
- `#/features/skill/skill`
- `#/features/skill/skillAgentRuntime`
- `#/features/skill/tools/skill`
- `#/features/skill/workspace/explicitFileSkillSource`
- `#/features/skill/workspace/extraFileSkillSource`
- `#/features/skill/workspace/pluginSkillSource`
- `#/features/skill/workspace/rootFileSkillSource`
- `#/features/skill/workspace/workspaceSkillCatalog`
- `#/features/skill/workspace/workspaceSkillCatalogService`
- `#/features/swarm/agent/swarm`
- `#/features/swarm/agent/swarmService`
- `#/features/swarm/configSection`
- `#/features/swarm/session/sessionSwarm`
- `#/features/swarm/session/sessionSwarmService`
- `#/features/swarm/tools/agent-swarm/agent-swarm`
- `#/features/todo/todoAgentRuntime`
- `#/features/todo/todoItem`
- `#/features/todo/todoListReminder`
- `#/features/todo/tools/todo-list/todo-list`
- `#/features/tower/flag`
- `#/features/tower/tools/finding/finding`
- `#/features/tower/tools/inbox/inbox`
- `#/features/tower/tools/init/init`
- `#/features/tower/tools/merge/merge`
- `#/features/tower/tools/mission/mission`
- `#/features/tower/tools/plan/plan`
- `#/features/tower/tools/review/review`
- `#/features/tower/tools/send/send`
- `#/features/tower/tools/spawn/spawn`
- `#/features/tower/tools/status/status`
- `#/features/tower/tools/teardown/teardown`
- `#/features/tower/tower`
- `#/features/tower/towerFeature`
- `#/features/tower/towerRateLimit`
- `#/features/tower/towerRateLimitService`
- `#/features/tower/towerService`
- `#/kosong/contract/capability`
- `#/kosong/contract/errors`
- `#/kosong/contract/generate`
- `#/kosong/contract/message`
- `#/kosong/contract/messageHelpers`
- `#/kosong/contract/provider`
- `#/kosong/contract/requestTrace`
- `#/kosong/contract/tool`
- `#/kosong/contract/usage`
- `#/kosong/model/catalog`
- `#/kosong/model/catalogService`
- `#/kosong/model/completionBudget`
- `#/kosong/model/hostRequestHeaders`
- `#/kosong/model/model`
- `#/kosong/model/model.types`
- `#/kosong/model/modelOAuth`
- `#/kosong/model/modelRequester`
- `#/kosong/model/modelService`
- `#/kosong/model/thinking`
- `#/kosong/protocol/errors`
- `#/kosong/protocol/protocol`
- `#/kosong/protocol/protocolBase`
- `#/kosong/protocol/protocolTrait`
- `#/kosong/provider/protocolAdapterRegistry`
- `#/kosong/provider/provider`
- `#/kosong/provider/providerDefinition`
- `#/kosong/provider/providerService`
- `#/mcpCore/config-schema`
- `#/os/backends/node-local/hostClockService`
- `#/os/backends/node-local/hostEnvironmentService`
- `#/os/backends/node-local/hostFsService`
- `#/os/backends/node-local/hostFsWatchService`
- `#/os/backends/node-local/hostProcessService`
- `#/os/backends/node-local/hostTerminalService`
- `#/os/interface/hostClock`
- `#/os/interface/hostEnvironment`
- `#/os/interface/hostFileSystem`
- `#/os/interface/hostFsWatch`
- `#/os/interface/hostProcess`
- `#/os/interface/terminal`
- `#/os/interface/terminalErrors`
- `#/persistence/backends/memory/inMemoryStorageService`
- `#/persistence/backends/minidb/miniDbQueryStore`
- `#/persistence/backends/node-fs/appendLogStore`
- `#/persistence/backends/node-fs/atomicDocumentStore`
- `#/persistence/backends/node-fs/blobStoreService`
- `#/persistence/backends/node-fs/fileStorageService`
- `#/persistence/backends/node-fs/projectLocalConfigService`
- `#/persistence/interface/appendLogStore`
- `#/persistence/interface/atomicDocumentStore`
- `#/persistence/interface/blobStore`
- `#/persistence/interface/queryStore`
- `#/persistence/interface/storage`
- `#/program/program`
- `#/runtime/localRuntime`
- `#/runtime/runtime`
- `#/runtime/runtimeProvider`
- `#/runtime/runtimeRegistry`
- `#/runtime/runtimeUnitHost`
- `#/runtime/runtimeWorkspaceView`
- `#/runtime/standaloneRuntime`
- `#/session/agentLifecycle/agentLifecycle`
- `#/session/agentLifecycle/agentLifecycleService`
- `#/session/agentLifecycle/mainAgent`
- `#/session/agentLifecycle/profile/gitContext`
- `#/session/mcp/sessionMcpHandle`
- `#/session/question/question`
- `#/session/question/questionService`
- `#/session/sessionActivity/sessionActivity`
- `#/session/sessionActivity/sessionActivityService`
- `#/session/sessionActivity/sessionOutcomeMirror`
- `#/session/sessionActivity/sessionOutcomeMirrorService`
- `#/session/sessionAgentProfileCatalog/agentProfileCatalogSeed`
- `#/session/sessionAgentProfileCatalog/sessionAgentProfileCatalog`
- `#/session/sessionAgentProfileCatalog/sessionAgentProfileCatalogService`
- `#/session/sessionContext/sessionContext`
- `#/session/sessionInstructions/instructionsProvider`
- `#/session/sessionLog/sessionLogService`
- `#/session/sessionMetadata/promptMetadata`
- `#/session/sessionMetadata/sessionMetadata`
- `#/session/sessionMetadata/sessionMetadataService`
- `#/session/sessionTitle/agentTitlePromptSource`
- `#/session/sessionTitle/sessionTitle`
- `#/session/sessionTitle/sessionTitleService`
- `#/session/sessionToolPolicy/sessionToolPolicy`
- `#/session/sessionToolPolicy/sessionToolPolicyService`
- `#/session/sessionToolPolicyGate/sessionToolPolicyGate`
- `#/session/sessionToolPolicyGate/sessionToolPolicyGateService`
- `#/session/state/sessionState`
- `#/session/subagent/mirrorAgentRun`
- `#/session/subagent/spawn`
- `#/session/subagent/subagent`
- `#/session/subagent/subagentModelsValidation`
- `#/session/subagent/subagentService`
- `#/session/terminal/terminalService`
- `#/session/tokenCounting/sessionTokenCounting`
- `#/session/tokenCounting/sessionTokenCountingService`
- `#/session/tokenCounting/tokenCountingAgentModel`
- `#/session/usage/sessionUsage`
- `#/session/usage/sessionUsageService`
- `#/session/usage/usageAgentModel`
- `#/session/workspaceContext/workspaceContext`
- `#/session/workspaceContext/workspaceContextService`
- `#/session/workspaceInfo/workspaceInfo`
- `#/state/agentModel`
- `#/state/errors`
- `#/state/eventDispatcher`
- `#/state/state`
- `#/state/stateContribution`
- `#/tool/toolContract`
- `#/wire/migration/migration`
- `#/wire/record`
- `#/wire/wire`
- `#/wire/wireService`
- `#/workspace/sessionLifecycle/coldSessionArchive`
- `#/workspace/sessionLifecycle/internal/addressing`
- `#/workspace/sessionLifecycle/sessionLifecycle`
- `#/workspace/sessionLifecycle/sessionLifecycleEvents`
- `#/workspace/sessionLifecycle/sessionLifecycleService`
- `#/workspace/state/workspaceState`
- `#/workspace/workspaceAgentProfileLoader/configSection`
- `#/workspace/workspaceAgentProfileLoader/explicitAgentProfileLoader`
- `#/workspace/workspaceAgentProfileLoader/explicitAgentProfileLoaderService`
- `#/workspace/workspaceAgentProfileLoader/extraAgentProfileLoader`
- `#/workspace/workspaceAgentProfileLoader/extraAgentProfileLoaderService`
- `#/workspace/workspaceAgentProfileLoader/pluginAgentProfileLoader`
- `#/workspace/workspaceAgentProfileLoader/pluginAgentProfileLoaderService`
- `#/workspace/workspaceAgentProfileLoader/userAgentProfileLoader`
- `#/workspace/workspaceAgentProfileLoader/userAgentProfileLoaderService`
- `#/workspace/workspaceAgentProfileLoader/workspaceAgentProfileLoader`
- `#/workspace/workspaceAgentProfileLoader/workspaceAgentProfileLoaderService`
- `#/workspace/workspaceContext/workspaceContext`
- `#/workspace/workspaceDirs/workspaceDirs`
- `#/workspace/workspaceDirs/workspaceDirsService`
- `#/workspace/workspaceFs/fs`
- `#/workspace/workspaceFs/fsService`
- `#/workspace/workspaceFs/fsWatch`
- `#/workspace/workspaceFs/fsWatchService`
- `#/workspace/workspaceFs/internal/errors`
- `#/workspace/workspaceFs/internal/rgLocator`
- `#/workspace/workspaceFs/internal/runRg`
- `#/workspace/workspaceGit/workspaceGit`
- `#/workspace/workspaceGit/workspaceGitService`
- `#/workspace/workspaceInstance/workspaceInstance`
- `#/workspace/workspaceInstance/workspaceInstanceManager`
- `#/workspace/workspaceInstance/workspaceInstanceManagerService`
- `#/workspace/workspaceInstructions/workspaceInstructions`
- `#/workspace/workspaceInstructions/workspaceInstructionsService`
- `#/workspace/workspaceMcp/workspaceMcp`
- `#/workspace/workspaceMcp/workspaceMcpService`
- `#/workspace/workspaceMcpConfig/workspaceMcpConfig`
- `#/workspace/workspaceMcpConfig/workspaceMcpConfigService`
- `#/workspace/workspaceTrust/workspaceTrust`
- `#/workspace/workspaceTrust/workspaceTrustService`
- `./app/scopes`
- `./errors`

## kaos

入口：`packages/kaos/src/index.ts`

### 直接导出

| 符号 |
| --- |
| `KaosError` |
| `KaosFileExistsError` |
| `KaosShellNotFoundError` |
| `KaosValueError` |
| `LocalKaos` |
| `chdir` |
| `createShellPathBridge` |
| `detectEnvironment` |
| `detectEnvironmentFromNode` |
| `exec` |
| `execWithEnv` |
| `getCurrentKaos` |
| `getShellPathBridge` |
| `getcwd` |
| `gethome` |
| `glob` |
| `iterdir` |
| `mkdir` |
| `normpath` |
| `pathClass` |
| `readBytes` |
| `readLines` |
| `readText` |
| `runWithKaos` |
| `setCurrentKaos` |
| `stat` |
| `translateShellDrivePath` |
| `writeBytes` |
| `writeText` |

## kap-server

入口：`packages/kap-server/src/index.ts`

### 直接导出

| 符号 |
| --- |
| `DEFAULT_SERVER_DIR` |
| `DEFAULT_SERVER_INSTANCES_DIR` |
| `HEARTBEAT_INTERVAL_MS` |
| `classify` |
| `createInstanceRegistry` |
| `createServerLogger` |
| `errEnvelope` |
| `getLiveServerInstance` |
| `listLiveServerInstances` |
| `okEnvelope` |
| `resolveServerInstancesDir` |
| `rotateServerToken` |
| `serverTokenPath` |
| `startServer` |

## klient

入口：`packages/klient/src/index.ts`

### 直接导出

| 符号 |
| --- |
| `AgentHandle` |
| `Klient` |
| `KlientOptions` |
| `KlientValidationError` |
| `RPCError` |
| `SessionHandle` |
| `ValidationPhase` |
| `createKlientFromChannel` |

## kosong

入口：`packages/kosong/src/index.ts`

### 直接导出

| 符号 |
| --- |
| `APIConnectionError` |
| `APIContextOverflowError` |
| `APIEmptyResponseError` |
| `APIProviderQuotaExhaustedError` |
| `APIProviderRateLimitError` |
| `APIRequestTooLargeError` |
| `APIStatusError` |
| `APITimeoutError` |
| `ChatProviderError` |
| `NighthawkChatProvider` |
| `UNKNOWN_CAPABILITY` |
| `addUsage` |
| `catalogBaseUrl` |
| `catalogModelToCapability` |
| `catalogProviderModels` |
| `classifyNighthawkQuotaError` |
| `createAbortError` |
| `createAssistantMessage` |
| `createProvider` |
| `createToolMessage` |
| `createUserMessage` |
| `emptyUsage` |
| `extractText` |
| `generate` |
| `getModelCapability` |
| `grandTotal` |
| `inferWireType` |
| `inputTotal` |
| `isAbortError` |
| `isContentPart` |
| `isContextOverflowStatusError` |
| `isImageFormatError` |
| `isProviderRateLimitError` |
| `isRecoverableRequestStructureError` |
| `isRequestTooLargeStatusError` |
| `isRetryableGenerateError` |
| `isToolCall` |
| `isToolCallPart` |
| `isToolExchangeAdjacencyError` |
| `isUnknownCapability` |
| `mergeInPlace` |
| `resolveCatalogImport` |
| `throwIfAbortError` |

### 再导出模块

- `./provider`

## migration-legacy

入口：`packages/migration-legacy/src/index.ts`

### 直接导出

| 符号 |
| --- |
| `AnyChoice` |
| `MigrationPromptResult` |
| `MigrationSuppressionInput` |
| `Prompt1Choice` |
| `Prompt2Choice` |
| `RunMigrationInput` |
| `detectMigration` |
| `resolveMigrationScope` |
| `runMigration` |
| `shouldSuppressMigration` |

### 再导出模块

- `./types.js`

## minidb

入口：`packages/minidb/src/index.ts`

### 直接导出

| 符号 |
| --- |
| `LockError` |
| `OpTracker` |
| `TextIndexBuildingError` |
| `UniqueViolationError` |
| `createNgramTokenizer` |
| `normalizeLiteral` |
| `tokenize` |

### 再导出模块

- `./mini-db.js`

## node-sdk

入口：`packages/node-sdk/src/index.ts`

### 直接导出

| 符号 |
| --- |
| `CatalogFetchError` |
| `DEFAULT_CATALOG_URL` |
| `ErrorCodes` |
| `IMAGE_BYTE_BUDGET` |
| `ImageLimits` |
| `MAX_IMAGE_EDGE_PX` |
| `NIGHTHAWK_ERROR_INFO` |
| `NIGHTHAWK_PLUGIN_MARKETPLACE_URL_ENV` |
| `NighthawkAuthFacade` |
| `NighthawkConfigRpc` |
| `NighthawkConfigRpcClient` |
| `NighthawkConfigValidationIssue` |
| `NighthawkConfigValidationPathSegment` |
| `NighthawkError` |
| `NighthawkErrorCode` |
| `NighthawkErrorInfo` |
| `NighthawkErrorOptions` |
| `NighthawkErrorPayload` |
| `NighthawkForCodingProvider` |
| `NighthawkHarness` |
| `PLUGIN_MARKETPLACE_TIERS` |
| `PRIMARY_SUBAGENT_MODEL_CHOICE` |
| `ResolveNighthawkConfigPathInput` |
| `SDKRpcClient` |
| `SDKRpcClientBase` |
| `SDKRpcClientOptions` |
| `SDKRpcClientV2` |
| `SDKRpcClientV2Options` |
| `SECONDARY_DERIVED_MODEL_ALIAS` |
| `Session` |
| `ValidateNighthawkConfigTomlInput` |
| `applyCatalogProvider` |
| `buildDaemonFileUrl` |
| `buildImageCompressionCaption` |
| `buildMediaPathTag` |
| `buildUnsupportedImageNotice` |
| `cascadeSubagentModelPool` |
| `catalogBaseUrl` |
| `catalogModelToAlias` |
| `catalogProviderModels` |
| `compressBase64ForModel` |
| `compressImageForModel` |
| `computeUpdateStatus` |
| `createNighthawkConfigRpc` |
| `createNighthawkHarness` |
| `createNighthawkHarnessV2` |
| `effectiveModelAlias` |
| `fetchCatalog` |
| `flushDiagnosticLogs` |
| `flushDiagnosticLogsSync` |
| `fromNighthawkErrorPayload` |
| `gateImageFormatParts` |
| `inferWireType` |
| `installGlobalProxyDispatcher` |
| `isDaemonFileUrl` |
| `isModelAcceptedImageMime` |
| `isNighthawkError` |
| `limitAgentReplayByTurns` |
| `loadBuiltInCatalog` |
| `loadRuntimeConfigSafe` |
| `log` |
| `matchSingleMediaPathTag` |
| `normalizeImageMime` |
| `parseAgentFileText` |
| `parseDaemonFileUrl` |
| `parseImageDataUrl` |
| `parsePluginMarketplace` |
| `persistOriginalImage` |
| `readPluginMarketplace` |
| `redact` |
| `removeProviderFromConfig` |
| `resolveAgentPath` |
| `resolveCatalogImport` |
| `resolveConfigPath` |
| `resolveGlobalLogPath` |
| `resolveNighthawkHome` |
| `sessionMediaOriginalsDir` |
| `toNighthawkErrorPayload` |
| `withBuiltInEntries` |
| `withLatestVersions` |

### 再导出模块

- `#/events`
- `#/types`

## oauth

入口：`packages/oauth/src/index.ts`

### 直接导出

| 符号 |
| --- |
| `CUSTOM_REGISTRY_DEFAULT_CAPABILITIES` |
| `CUSTOM_REGISTRY_DEFAULT_MAX_CONTEXT` |
| `CustomRegistryApiError` |
| `DeviceCodeExpiredError` |
| `DeviceCodeTimeoutError` |
| `FileTokenStorage` |
| `ManagedNighthawkModelsAuthError` |
| `NIGHTHAWK_CUSTOM_HEADERS_ENV` |
| `NIGHTHAWK_FLOW_CONFIG` |
| `NIGHTHAWK_OAUTH_KEY` |
| `NIGHTHAWK_PLATFORM` |
| `NIGHTHAWK_PLATFORM_ID` |
| `NIGHTHAWK_PROVIDER_NAME` |
| `NIGHTHAWK_REGION_MARKER_FILENAME` |
| `NIGHTHAWK_REGION_PROFILES` |
| `NighthawkOAuthToolkit` |
| `OAuthConnectionError` |
| `OAuthError` |
| `OAuthManager` |
| `OAuthTokenTransaction` |
| `OAuthUnauthorizedError` |
| `OPEN_PLATFORMS` |
| `OpenPlatformApiError` |
| `RetryableRefreshError` |
| `applyCustomRegistryEntries` |
| `applyCustomRegistryProvider` |
| `applyManagedApiKeyProviderModels` |
| `applyManagedNighthawkConfig` |
| `applyManagedNighthawkLogoutConfig` |
| `applyOpenPlatformConfig` |
| `assertNighthawkHostIdentity` |
| `capabilitiesForModel` |
| `capabilitiesFromCustomEntry` |
| `clearManagedNighthawkConfig` |
| `createNighthawkDefaultHeaders` |
| `createNighthawkDeviceHeaders` |
| `createNighthawkDeviceId` |
| `createNighthawkUserAgent` |
| `defaultRefreshThreshold` |
| `fetchChatTitle` |
| `fetchCompleteFeedbackUpload` |
| `fetchCreateFeedbackUploadUrl` |
| `fetchCustomRegistry` |
| `fetchManagedNighthawkModels` |
| `fetchManagedUsage` |
| `fetchManagedUserInfo` |
| `fetchOpenPlatformModels` |
| `fetchSubmitFeedback` |
| `filterModelsByPrefix` |
| `formatDuration` |
| `getOpenPlatformById` |
| `isManagedNighthawk` |
| `isManagedNighthawkBaseUrl` |
| `isOpenPlatformId` |
| `managedUserInfoPhoneSchema` |
| `managedUserInfoResultSchema` |
| `managedUserInfoSchema` |
| `newInstanceId` |
| `nighthawkBaseUrl` |
| `nighthawkCdnContentUrl` |
| `nighthawkEnvBaseUrl` |
| `nighthawkEnvOAuthHost` |
| `nighthawkFeedbackUploadCompleteUrl` |
| `nighthawkFeedbackUploadUrl` |
| `nighthawkFeedbackUrl` |
| `nighthawkRegionLoginHosts` |
| `nighthawkRegionProfile` |
| `nighthawkRegionSchema` |
| `nighthawkTelemetryEndpoint` |
| `nighthawkToolsUrl` |
| `nighthawkUsageUrl` |
| `nighthawkUserInfoUrl` |
| `parseManagedUsagePayload` |
| `parseManagedUserInfoPayload` |
| `parseNighthawkCustomHeaders` |
| `pollDeviceToken` |
| `provisionManagedNighthawkConfig` |
| `readNighthawkDeviceId` |
| `refreshAccessToken` |
| `refreshProviderModels` |
| `removeCustomRegistryProvider` |
| `removeOpenPlatformConfig` |
| `replaceUserAgentProduct` |
| `requestDeviceAuthorization` |
| `resolveNighthawkLoginAuth` |
| `resolveNighthawkOAuthKey` |
| `resolveNighthawkOAuthRef` |
| `resolveNighthawkRegion` |
| `resolveNighthawkRuntimeAuth` |
| `resolveNighthawkTokenStorageName` |
| `toManagedModelAlias` |
| `tokenFromWire` |
| `tokenToWire` |

## pi-tui

入口：`packages/pi-tui/src/index.ts`

### 直接导出

| 符号 |
| --- |
| `AutocompleteItem` |
| `AutocompleteProvider` |
| `AutocompleteSuggestions` |
| `Box` |
| `CURSOR_MARKER` |
| `CancellableLoader` |
| `CellDimensions` |
| `CombinedAutocompleteProvider` |
| `Component` |
| `Container` |
| `DefaultTextStyle` |
| `Editor` |
| `EditorOptions` |
| `EditorTheme` |
| `Focusable` |
| `FuzzyMatch` |
| `HStack` |
| `Image` |
| `ImageDimensions` |
| `ImageOptions` |
| `ImageProtocol` |
| `ImageRenderOptions` |
| `ImageTheme` |
| `Input` |
| `Key` |
| `KeyEventType` |
| `KeyId` |
| `Keybinding` |
| `KeybindingConflict` |
| `KeybindingDefinition` |
| `KeybindingDefinitions` |
| `Keybindings` |
| `KeybindingsConfig` |
| `KeybindingsManager` |
| `Loader` |
| `LoaderIndicatorOptions` |
| `Markdown` |
| `MarkdownOptions` |
| `MarkdownTheme` |
| `Marked` |
| `OverlayAnchor` |
| `OverlayHandle` |
| `OverlayMargin` |
| `OverlayOptions` |
| `OverlayUnfocusOptions` |
| `ProcessTerminal` |
| `RenderLatexOptions` |
| `RgbColor` |
| `ScrollView` |
| `ScrollViewOptions` |
| `ScrollViewScrollToOptions` |
| `ScrollViewScrollbar` |
| `SelectItem` |
| `SelectList` |
| `SelectListLayoutOptions` |
| `SelectListTheme` |
| `SelectListTruncatePrimaryContext` |
| `SettingItem` |
| `SettingsList` |
| `SettingsListTheme` |
| `SizeValue` |
| `SlashCommand` |
| `Spacer` |
| `StackChild` |
| `StackEntry` |
| `StackEntryOptions` |
| `StackOptions` |
| `StdinBuffer` |
| `StdinBufferEventMap` |
| `StdinBufferOptions` |
| `TUI` |
| `TUI_KEYBINDINGS` |
| `Terminal` |
| `TerminalCapabilities` |
| `TerminalColorScheme` |
| `Text` |
| `Token` |
| `Tokens` |
| `TruncatedText` |
| `TuiAltScreen` |
| `TuiAltScreenOptions` |
| `TuiInputListener` |
| `TuiInputListenerResult` |
| `TuiMainScreen` |
| `TuiMainScreenRenderState` |
| `TuiMode` |
| `TuiStopOptions` |
| `VStack` |
| `ViewportTUI` |
| `allocateImageId` |
| `calculateImageRows` |
| `compositeTuiLine` |
| `decodeKittyPrintable` |
| `deleteAllKittyImages` |
| `deleteKittyImage` |
| `detectCapabilities` |
| `encodeITerm2` |
| `encodeKitty` |
| `fuzzyFilter` |
| `fuzzyMatch` |
| `getCapabilities` |
| `getCellDimensions` |
| `getGifDimensions` |
| `getImageDimensions` |
| `getJpegDimensions` |
| `getKeybindings` |
| `getOsc8LinkAtColumn` |
| `getPngDimensions` |
| `getWebpDimensions` |
| `hyperlink` |
| `imageFallback` |
| `isFocusable` |
| `isKeyRelease` |
| `isKeyRepeat` |
| `isKittyProtocolActive` |
| `isViewportTUI` |
| `matchesKey` |
| `parseKey` |
| `parseOsc11BackgroundColor` |
| `parseTerminalColorSchemeReport` |
| `renderImage` |
| `renderLatex` |
| `resetCapabilitiesCache` |
| `setCapabilities` |
| `setCellDimensions` |
| `setKeybindings` |
| `setKittyProtocolActive` |
| `sliceByColumn` |
| `stripTerminalSequences` |
| `truncateToWidth` |
| `visibleWidth` |
| `wrapTextWithAnsi` |

## protocol

入口：`packages/protocol/src/index.ts`

### 再导出模块

- `./approval`
- `./asyncapi`
- `./display`
- `./envelope`
- `./error-codes`
- `./events`
- `./file`
- `./fs`
- `./message`
- `./modelCatalog`
- `./pagination`
- `./question`
- `./request-id`
- `./rest/approval`
- `./rest/auth`
- `./rest/config`
- `./rest/connection`
- `./rest/file`
- `./rest/fs`
- `./rest/fsBrowse`
- `./rest/guiStore`
- `./rest/message`
- `./rest/meta`
- `./rest/modelCatalog`
- `./rest/oauth`
- `./rest/prompt`
- `./rest/question`
- `./rest/session`
- `./rest/skill`
- `./rest/snapshot`
- `./rest/task`
- `./rest/terminal`
- `./rest/tool`
- `./rest/workspace`
- `./session`
- `./skill`
- `./task`
- `./time`
- `./tool`
- `./workspace`
- `./ws-control`

## telemetry

入口：`packages/telemetry/src/index.ts`

### 直接导出

| 符号 |
| --- |
| `flushTelemetrySync` |
| `initializeTelemetry` |
| `installCrashHandlers` |
| `normalizeRemote` |
| `setCrashPhase` |
| `setTelemetryContext` |
| `track` |
| `withTelemetryContext` |

## transcript

入口：`packages/transcript/src/index.ts`

### 直接导出

| 符号 |
| --- |
| `EMPTY_AGENT_STATE` |
| `appendAtOffset` |
| `applyOperation` |

### 再导出模块

- `./contract/events`
- `./contract/mediaRef`
- `./contract/schema`
- `./granularity/filterOps`
- `./granularity/grade`
- `./history/foldFacts`
- `./history/groupTurns`
- `./model/attachment`
- `./model/frame`
- `./model/ids`
- `./model/interaction`
- `./model/item`
- `./model/meta`
- `./model/prompt`
- `./model/task`
- `./model/todo`
- `./model/turn`
- `./ops/operation`
- `./pagination/paginate`
- `./store/agentTranscript`
- `./store/transcriptStore`
- `./view/registry`

## tree-sitter-bash

入口：`packages/tree-sitter-bash/src/index.ts`

### 再导出模块

- `./budget`
- `./grammar`
- `./node`
- `./parse`

## 专业实现要点（开发流程视角）

### 需求分析

参考手册要支持用户快速查找参数、命令、API、协议。

### 设计决策

以表格和代码块为主，保持条目化、可复制。

### 实现步骤

从 CLI 定义、protocol schema、SDK 类型和路由源码提取事实。

### 验证方式

运行 `nighthawk --help`、`pnpm doctor` 或对照 schema 测试。

### 维护注意

参考内容随代码变更同步更新。

## 逐函数实现说明

以下按源码文件列出可验证的导出函数/类，并给出实现职责说明。


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

> 本文证据路径没有可直接展示的 TS 源码片段。

## 时序/状态图

```mermaid
flowchart LR
    A[入口/调用方] --> B[本文核心模块]
    B --> C[依赖服务/数据层]
    C --> D[输出/事件/持久化]
```

> 图注：`11-reference/export-index.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/*/src/index.ts`（路径不存在，请以仓库实际文件为准）

## 证据与代码位置

- `packages/*/src/index.ts`
- 本文件由 `.tmp/gen_export_index.py` 生成
