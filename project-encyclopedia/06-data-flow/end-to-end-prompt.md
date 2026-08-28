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

## 证据与代码位置

- `packages/klient/README.md`
- `packages/agent-core-v2/src/agent/llmRequester/llmRequester.ts`
- `packages/kap-server/src/transport/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
