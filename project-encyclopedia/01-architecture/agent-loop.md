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

## 专业实现要点（开发流程视角）

### 需求分析

架构要支撑多会话、多 agent、可扩展工具、可观测 DI、持久化和安全边界。

### 设计决策

使用四层 Scope 表达状态生命周期；用 Service/Feature/Contribution 替代中心化注册表；用事件和 veto 解耦模块。

### 实现步骤

先实现 `_base/di` 与 `_base/lifecycle`，再建立 App/Workspace/Session/Agent scope，最后把领域能力实现为 Feature。

### 验证方式

通过 `packages/agent-core-v2/test/` 的 scope host 测试、DI 级联测试和 nighthawk-inspect 的可视化验证。

### 维护注意

遵循依赖方向：子 scope 依赖父 scope；App 服务不得持有 session 级 Map 状态。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

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
  - `packages/agent-core-v2/src/agent/toolExecutor/toolExecutor.ts`：
    - 导出签名/声明：
      - `export interface ToolCallStartedPayload {`
      - `export interface ToolExecutorExecuteOptions {`
      - `export interface ToolExecutionResult {`
      - `export type MissingToolDescriber = (toolName: string) => string | undefined;`
      - `export type UnavailableToolDescriber = (toolName: string) => string | undefined;`
      - `export type ToolCallGuard = (tool: {`
      - `export type ToolCallDupType = 'same_step' | 'cross_step';`
      - `export interface IAgentToolExecutorService {`
      - `export const IAgentToolExecutorService =`

## 证据与代码位置

- `packages/agent-core-v2/src/agent/loop/`
- `packages/agent-core-v2/src/agent/llmRequester/llmRequester.ts`
- `packages/agent-core-v2/src/agent/toolExecutor/toolExecutor.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
