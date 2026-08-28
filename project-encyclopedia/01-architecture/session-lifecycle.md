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

## 专业实现要点（开发流程视角）

### 需求分析

架构要支撑多会话、多 agent、可扩展工具、可观测 DI、持久化和安全边界。

### 设计决策

使用四层 Scope 表达状态生命周期；用 Service/Feature/Contribution 替代中心化注册表；用事件和 veto 解耦模块。

### 实现步骤

先实现 `_base/di` 与 `_base/lifecycle`，再建立 App/Workspace/Session/Agent scope，最后把领域能力实现为 Feature。

### 验证方式

通过 `packages/agent-core-v2/test/` 的 scope host 测试、DI 级联测试和 nighthawk-inspect 的可视化验证。

### 维护注意

遵循依赖方向：子 scope 依赖父 scope；App 服务不得持有 session 级 Map 状态。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/agent-core-v2/src/app/sessionIndex/sessionIndex.ts`：
    - 导出签名/声明：
      - `export const PARENT_SESSION_ID_KEY = 'parent_session_id';`
      - `export const CHILD_SESSION_KIND_KEY = 'child_session_kind';`
      - `export const CHILD_SESSION_KIND = 'child';`
      - `export interface SessionSummary {`
      - `export interface SessionListQuery {`
      - `export interface SessionCountQuery {`
      - `export type SessionIndexState = 'uninitialized' | 'preparing' | 'ready' | 'degraded';`
      - `export interface SessionIndexStatus {`
      - `export interface ISessionIndex {`
      - `export const ISessionIndex: ServiceIdentifier<ISessionIndex> =`
      - `export interface ISessionIndexMirror {`
      - `export const ISessionIndexMirror: ServiceIdentifier<ISessionIndexMirror> =`
  - `packages/agent-core-v2/src/workspace/sessionLifecycle//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/workspace/sessionLifecycle/coldSessionArchive.ts`
    - `packages/agent-core-v2/src/workspace/sessionLifecycle/internal/addressing.ts`
    - `packages/agent-core-v2/src/workspace/sessionLifecycle/internal/forkTurnSlice.ts`
    - `packages/agent-core-v2/src/workspace/sessionLifecycle/sessionLifecycle.ts`
    - `packages/agent-core-v2/src/workspace/sessionLifecycle/sessionLifecycleEvents.ts`
    - `packages/agent-core-v2/src/workspace/sessionLifecycle/sessionLifecycleService.ts`
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

- `packages/agent-core-v2/src/app/sessionIndex/sessionIndex.ts`
- `packages/agent-core-v2/src/workspace/sessionLifecycle/`
- `packages/kap-server/src/protocol/rest-session.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
