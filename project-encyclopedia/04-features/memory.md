# 持久记忆与会话恢复

NightHawk 通过 session 文件、transcript、compaction 实现跨会话记忆。

## 会话持久化

session 目录保存 metadata、messages、records；`-S`/`-c` 恢复。

## Compaction

上下文超长时压缩：full compaction、micro compaction、handoff summary。

## Replay

transcript 和 records 支持回放。

## 长期记忆

项目记忆文件、AGENTS.md、用户 skill 等构成跨会话上下文。

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
  - `packages/agent-core/src/agent/records//` 目录下源码文件示例：
    - `packages/agent-core/src/agent/records/blobref.ts`
    - `packages/agent-core/src/agent/records/index.ts`
    - `packages/agent-core/src/agent/records/migration/index.ts`
    - `packages/agent-core/src/agent/records/migration/v1.1.ts`
    - `packages/agent-core/src/agent/records/migration/v1.2.ts`
    - `packages/agent-core/src/agent/records/migration/v1.3.ts`
    - `packages/agent-core/src/agent/records/migration/v1.4.ts`
    - `packages/agent-core/src/agent/records/persistence.ts`
    - `packages/agent-core/src/agent/records/types.ts`
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
- `packages/agent-core/src/agent/records/`
- `packages/agent-core-v2/src/agent/contextMemory/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
