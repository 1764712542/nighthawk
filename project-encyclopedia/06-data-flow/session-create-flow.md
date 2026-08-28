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

## 专业实现要点（开发流程视角）

### 需求分析

数据流文档要回答“一个请求从哪里来、经过哪些服务、最终写到哪里”。

### 设计决策

用事件驱动解耦引擎与 UI；用 transcript 记录可重放状态；用 minidb read model 加速查询。

### 实现步骤

识别入口 API → 跟踪 service 调用链 → 标注持久化点 → 标注事件/WS 推送。

### 验证方式

通过 e2e、klient conformance suite、WS 订阅测试验证链路。

### 维护注意

异步链路要处理取消、重试、幂等；持久化要保证崩溃安全。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/kap-server/src/routes/sessions.ts`：
    - 导出签名/声明：
      - `export function registerSessionsRoutes(app: SessionRouteHost, core: Scope): void`
      - `export interface SessionWireFields {`
      - `export function toWireSession(
  fields: SessionWireFields,
  cwd: string,
  facts: SessionFacts,
): Session`
      - `export interface SessionFacts {`
      - `export function resolveSessionFacts(core: Scope, sessionId: string): SessionFacts`
  - `packages/agent-core-v2/src/app/sessionIndex//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/app/sessionIndex/sessionIndex.ts`
    - `packages/agent-core-v2/src/app/sessionIndex/sessionIndexMirrorService.ts`
    - `packages/agent-core-v2/src/app/sessionIndex/sessionIndexModel.ts`
    - `packages/agent-core-v2/src/app/sessionIndex/sessionIndexProjector.ts`
    - `packages/agent-core-v2/src/app/sessionIndex/sessionIndexService.ts`
    - `packages/agent-core-v2/src/app/sessionIndex/sessionIndexSource.ts`
  - `packages/kap-server/src/protocol/rest-session.ts`：
    - 导出签名/声明：
      - `export type {`
      - `export const createSessionRequestSchema = sessionCreateSchema;`
      - `export type CreateSessionRequest = z.infer<typeof createSessionRequestSchema>;`
      - `export const createSessionResponseSchema = sessionSchema;`
      - `export type CreateSessionResponse = z.infer<typeof createSessionResponseSchema>;`
      - `export const listSessionsQuerySchema = cursorQuerySchema.and(`
      - `export type ListSessionsQuery = z.infer<typeof listSessionsQuerySchema>;`
      - `export const getSessionResponseSchema = sessionSchema;`
      - `export type GetSessionResponse = z.infer<typeof getSessionResponseSchema>;`
      - `export const getSessionProfileResponseSchema = sessionSchema;`
      - `export type GetSessionProfileResponse = z.infer<typeof getSessionProfileResponseSchema>;`
      - `export const MAX_SESSION_EXPORT_WEB_LOG_BYTES = 256 * 1024;`
      - `export const exportSessionParamsSchema = z.object({`
      - `export type ExportSessionParams = z.infer<typeof exportSessionParamsSchema>;`
      - `export const exportSessionRequestSchema = z`
      - `export type ExportSessionRequest = z.infer<typeof exportSessionRequestSchema>;`
      - `export const updateSessionProfileResponseSchema = sessionSchema;`
      - `export type UpdateSessionProfileResponse = z.infer<typeof updateSessionProfileResponseSchema>;`
      - `export const updateSessionMetaRequestSchema = updateSessionProfileRequestSchema;`
      - `export type UpdateSessionMetaRequest = UpdateSessionProfileRequest;`
      - `export const updateSessionMetaResponseSchema = updateSessionProfileResponseSchema;`
      - `export type UpdateSessionMetaResponse = UpdateSessionProfileResponse;`
      - `export const updateSessionRequestSchema = updateSessionProfileRequestSchema;`
      - `export type UpdateSessionRequest = z.infer<typeof updateSessionRequestSchema>;`
      - `export const updateSessionResponseSchema = sessionSchema;`
      - `export type UpdateSessionResponse = z.infer<typeof updateSessionResponseSchema>;`
      - `export const forkSessionRequestSchema = sessionForkSchema;`
      - `export type ForkSessionRequest = z.infer<typeof forkSessionRequestSchema>;`
      - `export const forkSessionResponseSchema = sessionSchema;`
      - `export type ForkSessionResponse = z.infer<typeof forkSessionResponseSchema>;`
      - `export const startBtwSessionResponseSchema = z.object({`
      - `export type StartBtwSessionResponse = z.infer<typeof startBtwSessionResponseSchema>;`
      - `export const listSessionChildrenQuerySchema = cursorQuerySchema.and(`
      - `export type ListSessionChildrenQuery = z.infer<typeof listSessionChildrenQuerySchema>;`
      - `export const listSessionChildrenResponseSchema = pageResponseSchema(sessionSchema);`
      - `export type ListSessionChildrenResponse = z.infer<typeof listSessionChildrenResponseSchema>;`
      - `export const createSessionChildRequestSchema = sessionChildCreateSchema;`
      - `export type CreateSessionChildRequest = z.infer<typeof createSessionChildRequestSchema>;`
      - `export const createSessionChildResponseSchema = sessionSchema;`
      - `export type CreateSessionChildResponse = z.infer<typeof createSessionChildResponseSchema>;`
      - `export const getSessionGoalResponseSchema = goalSnapshotSchema.nullable();`
      - `export type GetSessionGoalResponse = z.infer<typeof getSessionGoalResponseSchema>;`
      - `export const compactSessionRequestSchema = z.preprocess(`
      - `export type CompactSessionRequest = z.infer<typeof compactSessionRequestSchema>;`
      - `export const compactSessionResponseSchema = z.object({});`
      - `export type CompactSessionResponse = z.infer<typeof compactSessionResponseSchema>;`
      - `export const undoSessionRequestSchema = z.preprocess(`
      - `export type UndoSessionRequest = z.infer<typeof undoSessionRequestSchema>;`
      - `export const undoSessionResponseSchema = z.object({`
      - `export type UndoSessionResponse = z.infer<typeof undoSessionResponseSchema>;`
      - `export const archiveSessionResponseSchema = z.object({`
      - `export type ArchiveSessionResponse = z.infer<typeof archiveSessionResponseSchema>;`
      - `export const restoreSessionResponseSchema = sessionSchema;`
      - `export type RestoreSessionResponse = z.infer<typeof restoreSessionResponseSchema>;`
      - `export const deleteSessionResponseSchema = archiveSessionResponseSchema;`
      - `export type DeleteSessionResponse = ArchiveSessionResponse;`
      - `export const sessionAbortResponseSchema = z.object({`
      - `export type SessionAbortResponse = z.infer<typeof sessionAbortResponseSchema>;`

## 证据与代码位置

- `packages/kap-server/src/routes/sessions.ts`
- `packages/agent-core-v2/src/app/sessionIndex/`
- `packages/kap-server/src/protocol/rest-session.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
