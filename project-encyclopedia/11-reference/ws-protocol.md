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

## 证据与代码位置

- `packages/kap-server/src/protocol/ws-control.ts`
- `packages/kap-server/src/transport/ws/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
