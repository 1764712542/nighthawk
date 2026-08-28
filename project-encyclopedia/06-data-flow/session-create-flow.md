# 会话创建数据流

新会话从 API/SDK 到磁盘持久化的流程。

## API

`POST /api/v1/sessions` 或 `klient.global.sessions.create`。

## Engine

`ISessionIndex` → `workspaceLifecycle.handlerFor` → session lifecycle create。

## 持久化

session metadata、initial context、profile 写入 `~/.nighthawk/sessions/<id>`。

## 返回

session id、workspace id、title 等 summary。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/kap-server/src/routes/sessions.ts` 导出：
    - 符号：`registerSessionsRoutes`, `SessionWireFields`, `toWireSession`, `SessionFacts`, `resolveSessionFacts`
  - `packages/agent-core-v2/src/app/sessionIndex//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/app/sessionIndex/sessionIndex.ts`
    - `packages/agent-core-v2/src/app/sessionIndex/sessionIndexMirrorService.ts`
    - `packages/agent-core-v2/src/app/sessionIndex/sessionIndexModel.ts`
    - `packages/agent-core-v2/src/app/sessionIndex/sessionIndexProjector.ts`
    - `packages/agent-core-v2/src/app/sessionIndex/sessionIndexService.ts`
    - `packages/agent-core-v2/src/app/sessionIndex/sessionIndexSource.ts`
  - `packages/kap-server/src/protocol/rest-session.ts` 导出：
    - 符号：`createSessionRequestSchema`, `CreateSessionRequest`, `createSessionResponseSchema`, `CreateSessionResponse`, `listSessionsQuerySchema`, `ListSessionsQuery`, `getSessionResponseSchema`, `GetSessionResponse`, `getSessionProfileResponseSchema`, `GetSessionProfileResponse`, `MAX_SESSION_EXPORT_WEB_LOG_BYTES`, `exportSessionParamsSchema`, `ExportSessionParams`, `exportSessionRequestSchema`, `ExportSessionRequest`, `updateSessionProfileResponseSchema`, `UpdateSessionProfileResponse`, `updateSessionMetaRequestSchema`, `UpdateSessionMetaRequest`, `updateSessionMetaResponseSchema`, `UpdateSessionMetaResponse`, `updateSessionRequestSchema`, `UpdateSessionRequest`, `updateSessionResponseSchema`, `UpdateSessionResponse`, `forkSessionRequestSchema`, `ForkSessionRequest`, `forkSessionResponseSchema`, `ForkSessionResponse`, `startBtwSessionResponseSchema`, `StartBtwSessionResponse`, `listSessionChildrenQuerySchema`, `ListSessionChildrenQuery`, `listSessionChildrenResponseSchema`, `ListSessionChildrenResponse`, `createSessionChildRequestSchema`, `CreateSessionChildRequest`, `createSessionChildResponseSchema`, `CreateSessionChildResponse`, `getSessionGoalResponseSchema`, `GetSessionGoalResponse`, `compactSessionRequestSchema`, `CompactSessionRequest`, `compactSessionResponseSchema`, `CompactSessionResponse`, `undoSessionRequestSchema`, `UndoSessionRequest`, `undoSessionResponseSchema`, `UndoSessionResponse`, `archiveSessionResponseSchema`, `ArchiveSessionResponse`, `restoreSessionResponseSchema`, `RestoreSessionResponse`, `deleteSessionResponseSchema`, `DeleteSessionResponse`, `sessionAbortResponseSchema`, `SessionAbortResponse`

## 证据与代码位置

- `packages/kap-server/src/routes/sessions.ts`
- `packages/agent-core-v2/src/app/sessionIndex/`
- `packages/kap-server/src/protocol/rest-session.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
