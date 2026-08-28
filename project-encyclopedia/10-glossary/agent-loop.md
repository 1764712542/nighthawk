# Agent Loop 术语

解释 Turn、Step、Plan/Act/Observe/Reflect、tool call、LLM requester。

## Turn

一次用户输入到最终 assistant 回复的完整循环。

## Step

循环内一次 LLM 请求或工具执行。

## Tool Call

模型请求调用工具的 JSON 结构。

## Compaction

上下文过长时压缩旧消息。

## 证据与代码位置

- `packages/agent-core-v2/src/agent/loop/`
- `packages/agent-core/src/loop/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
