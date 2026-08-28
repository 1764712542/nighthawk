# 会话生命周期

Session 从创建、恢复、fork、关闭到删除的完整流程。

## 创建

通过 `ISessionIndex`/`workspaceLifecycle.handlerFor` 创建 session scope；`SessionLifecycle` 初始化 session 服务。

## 恢复

`resume` 从磁盘读取 session metadata/transcript，重新 materialize main agent；subagent 不自动恢复。

## Fork

`fork` 基于原 session 创建子 session，适合并行分支实验。

## 关闭/删除

close 销毁 session scope；delete 删除目录并从 session index evict。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core-v2/src/app/sessionIndex/sessionIndex.ts` 导出：
    - 符号：`PARENT_SESSION_ID_KEY`, `CHILD_SESSION_KIND_KEY`, `CHILD_SESSION_KIND`, `SessionSummary`, `SessionListQuery`, `SessionCountQuery`, `SessionIndexState`, `SessionIndexStatus`, `ISessionIndex`, `ISessionIndexMirror`
  - `packages/agent-core-v2/src/workspace/sessionLifecycle//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/workspace/sessionLifecycle/coldSessionArchive.ts`
    - `packages/agent-core-v2/src/workspace/sessionLifecycle/internal/addressing.ts`
    - `packages/agent-core-v2/src/workspace/sessionLifecycle/internal/forkTurnSlice.ts`
    - `packages/agent-core-v2/src/workspace/sessionLifecycle/sessionLifecycle.ts`
    - `packages/agent-core-v2/src/workspace/sessionLifecycle/sessionLifecycleEvents.ts`
    - `packages/agent-core-v2/src/workspace/sessionLifecycle/sessionLifecycleService.ts`
  - `packages/kap-server/src/protocol/rest-session.ts` 导出：
    - 符号：`createSessionRequestSchema`, `CreateSessionRequest`, `createSessionResponseSchema`, `CreateSessionResponse`, `listSessionsQuerySchema`, `ListSessionsQuery`, `getSessionResponseSchema`, `GetSessionResponse`, `getSessionProfileResponseSchema`, `GetSessionProfileResponse`, `MAX_SESSION_EXPORT_WEB_LOG_BYTES`, `exportSessionParamsSchema`, `ExportSessionParams`, `exportSessionRequestSchema`, `ExportSessionRequest`, `updateSessionProfileResponseSchema`, `UpdateSessionProfileResponse`, `updateSessionMetaRequestSchema`, `UpdateSessionMetaRequest`, `updateSessionMetaResponseSchema`, `UpdateSessionMetaResponse`, `updateSessionRequestSchema`, `UpdateSessionRequest`, `updateSessionResponseSchema`, `UpdateSessionResponse`, `forkSessionRequestSchema`, `ForkSessionRequest`, `forkSessionResponseSchema`, `ForkSessionResponse`, `startBtwSessionResponseSchema`, `StartBtwSessionResponse`, `listSessionChildrenQuerySchema`, `ListSessionChildrenQuery`, `listSessionChildrenResponseSchema`, `ListSessionChildrenResponse`, `createSessionChildRequestSchema`, `CreateSessionChildRequest`, `createSessionChildResponseSchema`, `CreateSessionChildResponse`, `getSessionGoalResponseSchema`, `GetSessionGoalResponse`, `compactSessionRequestSchema`, `CompactSessionRequest`, `compactSessionResponseSchema`, `CompactSessionResponse`, `undoSessionRequestSchema`, `UndoSessionRequest`, `undoSessionResponseSchema`, `UndoSessionResponse`, `archiveSessionResponseSchema`, `ArchiveSessionResponse`, `restoreSessionResponseSchema`, `RestoreSessionResponse`, `deleteSessionResponseSchema`, `DeleteSessionResponse`, `sessionAbortResponseSchema`, `SessionAbortResponse`

## 证据与代码位置

- `packages/agent-core-v2/src/app/sessionIndex/sessionIndex.ts`
- `packages/agent-core-v2/src/workspace/sessionLifecycle/`
- `packages/kap-server/src/protocol/rest-session.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
