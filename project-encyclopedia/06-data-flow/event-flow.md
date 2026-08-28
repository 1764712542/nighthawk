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
  - `packages/klient/src/contract/agent/events.ts`：
    - 导出签名/声明：
      - `export const turnStartedEventSchema = z.object({`
      - `export const turnEndedEventSchema = z.object({`
      - `export const assistantDeltaEventSchema = z.object({`
      - `export const thinkingDeltaEventSchema = z.object({`
      - `export const toolCallStartedEventSchema = z.object({`
      - `export const toolCallDeltaEventSchema = z.object({`
      - `export const toolProgressEventSchema = z.object({`
      - `export const toolResultEventSchema = z.object({`
      - `export const promptCompletedEventSchema = z.object({`
      - `export const promptAbortedEventSchema = z.object({`
      - `export const compactionStartedEventSchema = z.object({`
      - `export const compactionBlockedEventSchema = z.object({`
      - `export const compactionCancelledEventSchema = z.object({`
      - `export const compactionCompletedEventSchema = z.object({`
      - `export const permissionApprovalRequestedEventSchema = z.looseObject({`
      - `export const permissionApprovalResolvedEventSchema = z.looseObject({`
      - `export const errorEventSchema = z.looseObject({`
      - `export const warningEventSchema = z.object({`
      - `export const agentStatusUpdatedEventSchema = z.looseObject({`
      - `export interface AgentEventPayloads {`
      - `export type AgentEventName = keyof AgentEventPayloads;`
      - `export const agentEvents = {`

## 证据与代码位置

- `packages/agent-core-v2/src/app/event/`
- `packages/kap-server/src/transport/ws/`
- `packages/klient/src/contract/agent/events.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
