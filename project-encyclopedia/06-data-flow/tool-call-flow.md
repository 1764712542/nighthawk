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

## 证据与代码位置

- `packages/agent-core-v2/src/agent/toolExecutor/toolExecutor.ts`
- `packages/agent-core-v2/src/agent/toolApproval/`
- `packages/agent-core-v2/src/agent/toolActivation/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
