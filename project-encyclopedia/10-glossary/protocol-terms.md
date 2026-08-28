# 协议与传输术语

解释 REST、WebSocket、IPC、NDJSON、RPC、MCP、ACP。

## REST

HTTP 风格的 API 设计。

## WebSocket

全双工长连接，用于事件推送。

## IPC

进程间通信；klient IPC 走 unix socket NDJSON。

## MCP

Model Context Protocol，模型上下文协议。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/klient/README.md`（非 TS 源码，可直接阅读）
  - `packages/protocol/README.md`（路径不存在，请以仓库实际文件为准）
  - `packages/kap-server/src/protocol/ws-control.ts` 导出：
    - 符号：`WS_PROTOCOL_VERSION`, `sessionCursorSchema`, `SessionCursor`, `cursorsBySessionSchema`, `CursorsBySession`, `wsEventEnvelopeSchema`, `wsControlEnvelopeSchema`, `wsAckEnvelopeSchema`, `serverHelloPayloadSchema`, `serverHelloMessageSchema`, `ServerHelloMessage`, `agentFilterSchema`, `AgentFilter`, `clientHelloPayloadSchema`, `clientHelloMessageSchema`, `ClientHelloMessage`, `clientHelloAckPayloadSchema`, `helloAckPayloadSchema`, `clientHelloAckMessageSchema`, `watchFsConfigSchema`, `subscribePayloadSchema`, `subscribeMessageSchema`, `SubscribeMessage`, `subscribeV2PayloadSchema`, `subscribeV2MessageSchema`, `SubscribeV2Message`, `unsubscribeV2PayloadSchema`, `unsubscribeV2MessageSchema`, `UnsubscribeV2Message`, `subscribeAckPayloadSchema`, `subscribeAckMessageSchema`, `subscribeV2AckMessageSchema`, `unsubscribeV2AckMessageSchema`, `unsubscribePayloadSchema`, `unsubscribeMessageSchema`, `UnsubscribeMessage`, `unsubscribeAckPayloadSchema`, `unsubscribeAckMessageSchema`, `watchFsAddPayloadSchema`, `watchFsAddMessageSchema`, `WatchFsAddMessage`, `watchFsRemovePayloadSchema`, `watchFsRemoveMessageSchema`, `WatchFsRemoveMessage`, `watchFsAckPayloadSchema`, `watchFsAckMessageSchema`, `fsChangeKindSchema`, `FsChangeKind`, `fsChangeActionSchema`, `FsChangeAction`, `fsChangeEntrySchema`, `FsChangeEntry`, `fsChangeEventSchema`, `FsChangeEvent`, `abortPayloadSchema`, `abortMessageSchema`, `AbortMessage`, `abortAckPayloadSchema`, `abortAckMessageSchema`, `terminalAttachPayloadSchema`

## 证据与代码位置

- `packages/klient/README.md`
- `packages/protocol/README.md`
- `packages/kap-server/src/protocol/ws-control.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
