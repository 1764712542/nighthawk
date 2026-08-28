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
  - `packages/agent-core/src/loop//` 目录下源码文件示例：
    - `packages/agent-core/src/loop/errors.ts`
    - `packages/agent-core/src/loop/events.ts`
    - `packages/agent-core/src/loop/index.ts`
    - `packages/agent-core/src/loop/llm.ts`
    - `packages/agent-core/src/loop/retry.ts`
    - `packages/agent-core/src/loop/run-turn.ts`
    - `packages/agent-core/src/loop/tool-access.ts`
    - `packages/agent-core/src/loop/tool-args-parse.ts`
    - `packages/agent-core/src/loop/tool-call.ts`
    - `packages/agent-core/src/loop/tool-scheduler.ts`
    - `packages/agent-core/src/loop/turn-step.ts`
    - `packages/agent-core/src/loop/types.ts`

## 证据与代码位置

- `packages/agent-core-v2/src/agent/loop/`
- `packages/agent-core/src/loop/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
