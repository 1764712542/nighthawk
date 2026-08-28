# WebSocket 协议参考

握手、订阅、cursor、ack、事件推送。

## 握手

server_hello → client_hello → ack。

## 订阅

subscribe / subscribe_v2 / unsubscribe / unsubscribe_v2。

## Cursor

`{seq, epoch}`；epoch 变更触发 resync_required。

## 事件

每个事件带 type、seq、epoch、volatile、session_id、timestamp。

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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/kap-server/src/protocol/ws-control.ts`：
    - 导出签名/声明：
      - `export const WS_PROTOCOL_VERSION = 2;`
      - `export const sessionCursorSchema = z.object({`
      - `export type SessionCursor = z.infer<typeof sessionCursorSchema>;`
      - `export const cursorsBySessionSchema = z.record(z.string(), sessionCursorSchema);`
      - `export type CursorsBySession = z.infer<typeof cursorsBySessionSchema>;`
      - `export const wsEventEnvelopeSchema = <T extends z.ZodTypeAny>(payload: T) =>`
      - `export const wsControlEnvelopeSchema = <T extends z.ZodTypeAny>(payload: T) =>`
      - `export const wsAckEnvelopeSchema = <T extends z.ZodTypeAny>(payload: T) =>`
      - `export const serverHelloPayloadSchema = z.object({`
      - `export const serverHelloMessageSchema = z.object({`
      - `export type ServerHelloMessage = z.infer<typeof serverHelloMessageSchema>;`
      - `export const agentFilterSchema = z.record(z.string(), z.array(z.string()).min(1));`
      - `export type AgentFilter = z.infer<typeof agentFilterSchema>;`
      - `export const clientHelloPayloadSchema = z.object({`
      - `export const clientHelloMessageSchema = z.object({`
      - `export type ClientHelloMessage = z.infer<typeof clientHelloMessageSchema>;`
      - `export const clientHelloAckPayloadSchema = z.object({`
      - `export const helloAckPayloadSchema = clientHelloAckPayloadSchema;`
      - `export const clientHelloAckMessageSchema = wsAckEnvelopeSchema(clientHelloAckPayloadSchema);`
      - `export const watchFsConfigSchema = z.object({`
      - `export const subscribePayloadSchema = z.object({`
      - `export const subscribeMessageSchema = z.object({`
      - `export type SubscribeMessage = z.infer<typeof subscribeMessageSchema>;`
      - `export const subscribeV2PayloadSchema = z.object({`
      - `export const subscribeV2MessageSchema = z.object({`
      - `export type SubscribeV2Message = z.infer<typeof subscribeV2MessageSchema>;`
      - `export const unsubscribeV2PayloadSchema = z.object({`
      - `export const unsubscribeV2MessageSchema = z.object({`
      - `export type UnsubscribeV2Message = z.infer<typeof unsubscribeV2MessageSchema>;`
      - `export const subscribeAckPayloadSchema = z.object({`
      - `export const subscribeAckMessageSchema = wsAckEnvelopeSchema(subscribeAckPayloadSchema);`
      - `export const subscribeV2AckMessageSchema = wsAckEnvelopeSchema(subscribeAckPayloadSchema);`
      - `export const unsubscribeV2AckMessageSchema = wsAckEnvelopeSchema(subscribeAckPayloadSchema);`
      - `export const unsubscribePayloadSchema = z.object({`
      - `export const unsubscribeMessageSchema = z.object({`
      - `export type UnsubscribeMessage = z.infer<typeof unsubscribeMessageSchema>;`
      - `export const unsubscribeAckPayloadSchema = subscribeAckPayloadSchema;`
      - `export const unsubscribeAckMessageSchema = wsAckEnvelopeSchema(unsubscribeAckPayloadSchema);`
      - `export const watchFsAddPayloadSchema = z.object({`
      - `export const watchFsAddMessageSchema = z.object({`
      - `export type WatchFsAddMessage = z.infer<typeof watchFsAddMessageSchema>;`
      - `export const watchFsRemovePayloadSchema = z.object({`
      - `export const watchFsRemoveMessageSchema = z.object({`
      - `export type WatchFsRemoveMessage = z.infer<typeof watchFsRemoveMessageSchema>;`
      - `export const watchFsAckPayloadSchema = z.object({`
      - `export const watchFsAckMessageSchema = wsAckEnvelopeSchema(watchFsAckPayloadSchema);`
      - `export const fsChangeKindSchema = z.enum(['file', 'directory', 'symlink']);`
      - `export type FsChangeKind = z.infer<typeof fsChangeKindSchema>;`
      - `export const fsChangeActionSchema = z.enum(['created', 'modified', 'deleted']);`
      - `export type FsChangeAction = z.infer<typeof fsChangeActionSchema>;`
      - `export const fsChangeEntrySchema = z.object({`
      - `export type FsChangeEntry = z.infer<typeof fsChangeEntrySchema>;`
      - `export const fsChangeEventSchema = z.object({`
      - `export type FsChangeEvent = z.infer<typeof fsChangeEventSchema>;`
      - `export const abortPayloadSchema = z.object({`
      - `export const abortMessageSchema = z.object({`
      - `export type AbortMessage = z.infer<typeof abortMessageSchema>;`
      - `export const abortAckPayloadSchema = z.object({`
      - `export const abortAckMessageSchema = wsAckEnvelopeSchema(abortAckPayloadSchema);`
      - `export const terminalAttachPayloadSchema = z.object({`
      - `export const terminalAttachMessageSchema = z.object({`
      - `export type TerminalAttachMessage = z.infer<typeof terminalAttachMessageSchema>;`
      - `export const terminalAttachAckPayloadSchema = z.object({`
      - `export const terminalAttachAckMessageSchema = wsAckEnvelopeSchema(`
      - `export const terminalDetachPayloadSchema = z.object({`
      - `export const terminalDetachMessageSchema = z.object({`
      - `export type TerminalDetachMessage = z.infer<typeof terminalDetachMessageSchema>;`
      - `export const terminalDetachAckPayloadSchema = z.object({`
      - `export const terminalDetachAckMessageSchema = wsAckEnvelopeSchema(`
      - `export const terminalInputPayloadSchema = z.object({`
      - `export const terminalInputMessageSchema = z.object({`
      - `export type TerminalInputMessage = z.infer<typeof terminalInputMessageSchema>;`
      - `export const terminalInputAckPayloadSchema = z.object({`
      - `export const terminalInputAckMessageSchema = wsAckEnvelopeSchema(`
      - `export const terminalResizePayloadSchema = z.object({`
      - `export const terminalResizeMessageSchema = z.object({`
      - `export type TerminalResizeMessage = z.infer<typeof terminalResizeMessageSchema>;`
      - `export const terminalResizeAckPayloadSchema = z.object({`
      - `export const terminalResizeAckMessageSchema = wsAckEnvelopeSchema(`
      - `export const terminalClosePayloadSchema = z.object({`
  - `packages/kap-server/src/transport/ws//` 目录下源码文件示例：
    - `packages/kap-server/src/transport/ws/bearerProtocol.ts`
    - `packages/kap-server/src/transport/ws/connectionRegistry.ts`
    - `packages/kap-server/src/transport/ws/v1/events.ts`
    - `packages/kap-server/src/transport/ws/v1/fsWatchBridge.ts`
    - `packages/kap-server/src/transport/ws/v1/inFlightTurnTracker.ts`
    - `packages/kap-server/src/transport/ws/v1/protocol.ts`
    - `packages/kap-server/src/transport/ws/v1/registerWsV1.ts`
    - `packages/kap-server/src/transport/ws/v1/sessionEventBroadcaster.ts`
    - `packages/kap-server/src/transport/ws/v1/sessionEventJournal.ts`
    - `packages/kap-server/src/transport/ws/v1/subagentRosterTracker.ts`
    - `packages/kap-server/src/transport/ws/v1/wsConnectionV1.ts`

## 证据与代码位置

- `packages/kap-server/src/protocol/ws-control.ts`
- `packages/kap-server/src/transport/ws/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
