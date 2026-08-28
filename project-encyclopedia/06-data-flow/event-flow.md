# 事件与 WS 推送

引擎内部事件如何变成客户端可见的 WS 帧。

## EventBus

agent-core-v2 `IEventBus` 发布 `Event2` 对象。

## Wire Records

需要持久化的状态变更写入 wire records。

## Server Broadcast

kap-server 的 WS broadcaster 把 session/agent 事件转成 envelope。

## 客户端

klient `events.*` 订阅并解析。

## 证据与代码位置

- `packages/agent-core-v2/src/app/event/`
- `packages/kap-server/src/transport/ws/`
- `packages/klient/src/contract/agent/events.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
