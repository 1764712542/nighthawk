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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core-v2/src/app/event//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/app/event/errors.ts`
    - `packages/agent-core-v2/src/app/event/event.ts`
    - `packages/agent-core-v2/src/app/event/event2.ts`
    - `packages/agent-core-v2/src/app/event/eventBus.ts`
    - `packages/agent-core-v2/src/app/event/eventBusService.ts`
    - `packages/agent-core-v2/src/app/event/eventService.ts`
    - `packages/agent-core-v2/src/app/event/fiberEventResolver.ts`
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
  - `packages/klient/src/contract/agent/events.ts` 导出：
    - 符号：`turnStartedEventSchema`, `turnEndedEventSchema`, `assistantDeltaEventSchema`, `thinkingDeltaEventSchema`, `toolCallStartedEventSchema`, `toolCallDeltaEventSchema`, `toolProgressEventSchema`, `toolResultEventSchema`, `promptCompletedEventSchema`, `promptAbortedEventSchema`, `compactionStartedEventSchema`, `compactionBlockedEventSchema`, `compactionCancelledEventSchema`, `compactionCompletedEventSchema`, `permissionApprovalRequestedEventSchema`, `permissionApprovalResolvedEventSchema`, `errorEventSchema`, `warningEventSchema`, `agentStatusUpdatedEventSchema`, `AgentEventPayloads`, `AgentEventName`, `agentEvents`

## 证据与代码位置

- `packages/agent-core-v2/src/app/event/`
- `packages/kap-server/src/transport/ws/`
- `packages/klient/src/contract/agent/events.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
