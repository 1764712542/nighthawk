# 上下文压缩数据流

当上下文超长时，agent 如何压缩旧消息并继续。

## 触发

token 预算、turn 数或显式 `/compact`。

## 策略

full compaction、micro compaction、handoff；`compaction-instruction.md` 指导模型总结。

## 写入

压缩摘要作为系统/用户消息替换旧片段；records 保留原始历史供 replay。

## 风险

摘要可能丢失细节，因此保留原始 transcript 文件。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core/src/agent/compaction//` 目录下源码文件示例：
    - `packages/agent-core/src/agent/compaction/full.ts`
    - `packages/agent-core/src/agent/compaction/handoff.ts`
    - `packages/agent-core/src/agent/compaction/index.ts`
    - `packages/agent-core/src/agent/compaction/micro.ts`
    - `packages/agent-core/src/agent/compaction/render-messages.ts`
    - `packages/agent-core/src/agent/compaction/strategy.ts`
    - `packages/agent-core/src/agent/compaction/types.ts`
  - `packages/agent-core-v2/src/agent/fullCompaction//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/agent/fullCompaction/compactionOps.ts`
    - `packages/agent-core-v2/src/agent/fullCompaction/errors.ts`
    - `packages/agent-core-v2/src/agent/fullCompaction/fullCompaction.ts`
    - `packages/agent-core-v2/src/agent/fullCompaction/fullCompactionService.ts`
    - `packages/agent-core-v2/src/agent/fullCompaction/strategy.ts`
    - `packages/agent-core-v2/src/agent/fullCompaction/types.ts`
  - `packages/agent-core-v2/src/agent/contextMemory//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/agent/contextMemory/compactionHandoff.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/contextEvents.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/contextMemory.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/contextMemoryService.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/contextOps.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/contextTranscript.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/conversationTime.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/conversationUndoParticipants.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/loopEventFold.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/messageId.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/openToolExchange.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/toolResultRender.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/types.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/vacuousContent.ts`

## 证据与代码位置

- `packages/agent-core/src/agent/compaction/`
- `packages/agent-core-v2/src/agent/fullCompaction/`
- `packages/agent-core-v2/src/agent/contextMemory/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
