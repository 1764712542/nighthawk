# 端到端 Prompt 数据流

从用户在终端输入到模型回复渲染的完整链路。

## 步骤

1) 用户在 TUI 输入框输入 → 2) SDK `agent.prompt()` → 3) kap-server/dispatcher 或内存 channel → 4) Session/Agent 的 prompt 服务 → 5) LLM Requester 调 kosong → 6) 工具调用循环 → 7) 结果写回 transcript → 8) 事件推回 TUI 渲染。

## 关键文件

`apps/nighthawk/src/tui/nighthawk-tui.ts`、`packages/klient/src/core/facade/`、`packages/agent-core-v2/src/agent/llmRequester/`。

## 事件

`assistant.delta`、`tool_call`、`tool_result`、`prompt.completed` 等。

## 可观测

transcript 记录 op-batch，server 可推送 WS 事件。

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

  - `packages/klient/README.md`（非 TS 源码，可直接阅读）
  - `packages/agent-core-v2/src/agent/llmRequester/llmRequester.ts`：
    - 导出签名/声明：
      - `export type AgentLLMRequestLogFields = Readonly<LogContext>;`
      - `export type AgentLLMRequestSource =`
      - `export interface AgentLLMRequestFinish {`
      - `export type AgentLLMRequestPartHandler = (part: StreamedMessagePart) => void | Promise<void>;`
      - `export interface AgentLLMRequestOverrides {`
      - `export interface AgentLLMRequestTask {`
      - `export interface PreparedTurnRequestConfig {`
      - `export interface IAgentLLMRequesterService {`
      - `export const IAgentLLMRequesterService = createDecorator<IAgentLLMRequesterService>(`
  - `packages/kap-server/src/transport//` 目录下源码文件示例：
    - `packages/kap-server/src/transport/businessSnapshotDispatcher.ts`
    - `packages/kap-server/src/transport/businessSnapshotRoutes.ts`
    - `packages/kap-server/src/transport/channel.ts`
    - `packages/kap-server/src/transport/channelRegistry.ts`
    - `packages/kap-server/src/transport/dispatcher.ts`
    - `packages/kap-server/src/transport/errors.ts`
    - `packages/kap-server/src/transport/mainAgent.ts`
    - `packages/kap-server/src/transport/registerDebugRoutes.ts`
    - `packages/kap-server/src/transport/serviceDispatcherRoutes.ts`
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

- `packages/klient/README.md`
- `packages/agent-core-v2/src/agent/llmRequester/llmRequester.ts`
- `packages/kap-server/src/transport/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
