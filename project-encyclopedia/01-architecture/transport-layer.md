# 传输层与 RPC

REST、WebSocket、memory、IPC 四种方式访问同一套引擎能力。

## REST

kap-server 使用 Fastify，`/api/v1/*` 路由；envelope 统一 `{code,msg,data,request_id}`。

## WebSocket

`/api/v1/ws` 支持 server_hello、client_hello、subscribe、subscribe_v2、事件推送、心跳。

## memory/IPC

klient 的 `createKlient({scope})` 或 `/ipc`；memory 直接进程内 dispatcher，IPC 走 unix socket NDJSON。

## Debug RPC

`/api/v1/debug` 暴露 scoped DI 服务反射，供 nighthawk-inspect 使用。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/kap-server/src/transport/dispatcher.ts` 导出：
    - 符号：`ChannelLookup`
  - `packages/kap-server/src/protocol/ws-control.ts` 导出：
    - 符号：`WS_PROTOCOL_VERSION`, `sessionCursorSchema`, `SessionCursor`, `cursorsBySessionSchema`, `CursorsBySession`, `wsEventEnvelopeSchema`, `wsControlEnvelopeSchema`, `wsAckEnvelopeSchema`, `serverHelloPayloadSchema`, `serverHelloMessageSchema`, `ServerHelloMessage`, `agentFilterSchema`, `AgentFilter`, `clientHelloPayloadSchema`, `clientHelloMessageSchema`, `ClientHelloMessage`, `clientHelloAckPayloadSchema`, `helloAckPayloadSchema`, `clientHelloAckMessageSchema`, `watchFsConfigSchema`, `subscribePayloadSchema`, `subscribeMessageSchema`, `SubscribeMessage`, `subscribeV2PayloadSchema`, `subscribeV2MessageSchema`, `SubscribeV2Message`, `unsubscribeV2PayloadSchema`, `unsubscribeV2MessageSchema`, `UnsubscribeV2Message`, `subscribeAckPayloadSchema`, `subscribeAckMessageSchema`, `subscribeV2AckMessageSchema`, `unsubscribeV2AckMessageSchema`, `unsubscribePayloadSchema`, `unsubscribeMessageSchema`, `UnsubscribeMessage`, `unsubscribeAckPayloadSchema`, `unsubscribeAckMessageSchema`, `watchFsAddPayloadSchema`, `watchFsAddMessageSchema`, `WatchFsAddMessage`, `watchFsRemovePayloadSchema`, `watchFsRemoveMessageSchema`, `WatchFsRemoveMessage`, `watchFsAckPayloadSchema`, `watchFsAckMessageSchema`, `fsChangeKindSchema`, `FsChangeKind`, `fsChangeActionSchema`, `FsChangeAction`, `fsChangeEntrySchema`, `FsChangeEntry`, `fsChangeEventSchema`, `FsChangeEvent`, `abortPayloadSchema`, `abortMessageSchema`, `AbortMessage`, `abortAckPayloadSchema`, `abortAckMessageSchema`, `terminalAttachPayloadSchema`
  - `packages/klient/README.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/kap-server/src/transport/dispatcher.ts`
- `packages/kap-server/src/protocol/ws-control.ts`
- `packages/klient/README.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
