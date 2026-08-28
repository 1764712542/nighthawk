# Agent 主循环

v2 的 loop 由 stepRequest、turnOps、llmRequester、toolExecutor、toolScheduler 等协作完成 Plan/Act/Observe/Reflect。

## 循环入口

用户 prompt 进入 `IAgentPromptService`，构建 step request，交给 `ILoopService` 或 `TurnService` 执行。

## LLM 请求

`agent/llmRequester/llmRequester.ts` 组装消息、工具 schema、thinking 配置，调用 kosong ChatProvider。

## 工具执行

`agent/toolExecutor/toolExecutor.ts` 负责 before/after 事件、veto、approval、执行；`toolScheduler` 处理并行工具。

## 上下文记忆

`agent/contextMemory/` 维护 transcript、消息 id、工具结果渲染、loop event fold、compaction。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core-v2/src/agent/loop//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/agent/loop/configSection.ts`
    - `packages/agent-core-v2/src/agent/loop/errors.ts`
    - `packages/agent-core-v2/src/agent/loop/loop.ts`
    - `packages/agent-core-v2/src/agent/loop/loopContinuation.ts`
    - `packages/agent-core-v2/src/agent/loop/loopContinuationService.ts`
    - `packages/agent-core-v2/src/agent/loop/loopService.ts`
    - `packages/agent-core-v2/src/agent/loop/stepRequest.ts`
    - `packages/agent-core-v2/src/agent/loop/stepRequestQueue.ts`
    - `packages/agent-core-v2/src/agent/loop/turnEvents.ts`
    - `packages/agent-core-v2/src/agent/loop/turnOps.ts`
  - `packages/agent-core-v2/src/agent/llmRequester/llmRequester.ts` 导出：
    - 符号：`AgentLLMRequestLogFields`, `AgentLLMRequestSource`, `AgentLLMRequestFinish`, `AgentLLMRequestPartHandler`, `AgentLLMRequestOverrides`, `AgentLLMRequestTask`, `PreparedTurnRequestConfig`, `IAgentLLMRequesterService`
  - `packages/agent-core-v2/src/agent/toolExecutor/toolExecutor.ts` 导出：
    - 符号：`ToolCallStartedPayload`, `ToolExecutorExecuteOptions`, `ToolExecutionResult`, `MissingToolDescriber`, `UnavailableToolDescriber`, `ToolCallGuard`, `ToolCallDupType`, `IAgentToolExecutorService`

## 证据与代码位置

- `packages/agent-core-v2/src/agent/loop/`
- `packages/agent-core-v2/src/agent/llmRequester/llmRequester.ts`
- `packages/agent-core-v2/src/agent/toolExecutor/toolExecutor.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
