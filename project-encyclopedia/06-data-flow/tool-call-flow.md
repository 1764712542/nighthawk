# 工具调用数据流

模型请求工具到工具结果回填上下文的完整链路。

## LLM 返回 tool_calls

kosong 把 provider 格式转成内部 ToolCall。

## Tool Activation/Policy

`toolActivation` 过滤可用工具，`toolPolicy` 评估策略，`toolApproval` 处理审批。

## Executor

`toolExecutor` 触发 before/after 事件，执行 `resolveExecution().execute`。

## 结果

ToolMessage 回填 contextMemory，并作为下一轮 LLM 输入。

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
  - `packages/agent-core-v2/src/agent/toolApproval//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/agent/toolApproval/toolApproval.ts`
    - `packages/agent-core-v2/src/agent/toolApproval/toolApprovalService.ts`
  - `packages/agent-core-v2/src/agent/toolActivation//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/agent/toolActivation/toolActivation.ts`
    - `packages/agent-core-v2/src/agent/toolActivation/toolActivationService.ts`

## 证据与代码位置

- `packages/agent-core-v2/src/agent/toolExecutor/toolExecutor.ts`
- `packages/agent-core-v2/src/agent/toolApproval/`
- `packages/agent-core-v2/src/agent/toolActivation/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
