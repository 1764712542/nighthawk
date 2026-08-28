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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/kap-server/src/protocol/ws-control.ts` 导出：
    - 符号：`WS_PROTOCOL_VERSION`, `sessionCursorSchema`, `SessionCursor`, `cursorsBySessionSchema`, `CursorsBySession`, `wsEventEnvelopeSchema`, `wsControlEnvelopeSchema`, `wsAckEnvelopeSchema`, `serverHelloPayloadSchema`, `serverHelloMessageSchema`, `ServerHelloMessage`, `agentFilterSchema`, `AgentFilter`, `clientHelloPayloadSchema`, `clientHelloMessageSchema`, `ClientHelloMessage`, `clientHelloAckPayloadSchema`, `helloAckPayloadSchema`, `clientHelloAckMessageSchema`, `watchFsConfigSchema`, `subscribePayloadSchema`, `subscribeMessageSchema`, `SubscribeMessage`, `subscribeV2PayloadSchema`, `subscribeV2MessageSchema`, `SubscribeV2Message`, `unsubscribeV2PayloadSchema`, `unsubscribeV2MessageSchema`, `UnsubscribeV2Message`, `subscribeAckPayloadSchema`, `subscribeAckMessageSchema`, `subscribeV2AckMessageSchema`, `unsubscribeV2AckMessageSchema`, `unsubscribePayloadSchema`, `unsubscribeMessageSchema`, `UnsubscribeMessage`, `unsubscribeAckPayloadSchema`, `unsubscribeAckMessageSchema`, `watchFsAddPayloadSchema`, `watchFsAddMessageSchema`, `WatchFsAddMessage`, `watchFsRemovePayloadSchema`, `watchFsRemoveMessageSchema`, `WatchFsRemoveMessage`, `watchFsAckPayloadSchema`, `watchFsAckMessageSchema`, `fsChangeKindSchema`, `FsChangeKind`, `fsChangeActionSchema`, `FsChangeAction`, `fsChangeEntrySchema`, `FsChangeEntry`, `fsChangeEventSchema`, `FsChangeEvent`, `abortPayloadSchema`, `abortMessageSchema`, `AbortMessage`, `abortAckPayloadSchema`, `abortAckMessageSchema`, `terminalAttachPayloadSchema`
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
