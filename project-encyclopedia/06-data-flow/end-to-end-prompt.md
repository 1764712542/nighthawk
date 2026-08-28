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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/klient/README.md`（非 TS 源码，可直接阅读）
  - `packages/agent-core-v2/src/agent/llmRequester/llmRequester.ts` 导出：
    - 符号：`AgentLLMRequestLogFields`, `AgentLLMRequestSource`, `AgentLLMRequestFinish`, `AgentLLMRequestPartHandler`, `AgentLLMRequestOverrides`, `AgentLLMRequestTask`, `PreparedTurnRequestConfig`, `IAgentLLMRequesterService`
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
