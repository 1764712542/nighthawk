# 持久化数据流

会话状态何时写盘、何时只留在内存。

## Session 写盘

消息、metadata、records 写 session 目录；close/checkpoint 时 flush。

## Read Model

session summary 通过 mirror 异步进入 minidb query store。

## Compaction

上下文压缩会生成 summary 写回 transcript。

## Blob

媒体文件存 blobs，消息里存引用。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core-v2/src/persistence//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/persistence/backends/memory/inMemoryStorageService.ts`
    - `packages/agent-core-v2/src/persistence/backends/minidb/flag.ts`
    - `packages/agent-core-v2/src/persistence/backends/minidb/miniDbQueryStore.ts`
    - `packages/agent-core-v2/src/persistence/backends/node-fs/appendLogStore.ts`
    - `packages/agent-core-v2/src/persistence/backends/node-fs/atomicDocumentStore.ts`
    - `packages/agent-core-v2/src/persistence/backends/node-fs/blobStoreService.ts`
    - `packages/agent-core-v2/src/persistence/backends/node-fs/fileStorageService.ts`
    - `packages/agent-core-v2/src/persistence/backends/node-fs/projectLocalConfigService.ts`
    - `packages/agent-core-v2/src/persistence/interface/appendLogStore.ts`
    - `packages/agent-core-v2/src/persistence/interface/atomicDocumentStore.ts`
    - `packages/agent-core-v2/src/persistence/interface/blobStore.ts`
    - `packages/agent-core-v2/src/persistence/interface/queryStore.ts`
    - `packages/agent-core-v2/src/persistence/interface/storage.ts`
  - `packages/minidb/src/write-path.ts` 导出：
    - 符号：`WritePathStats`, `WritePathDeps`, `WritePath`
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

- `packages/agent-core-v2/src/persistence/`
- `packages/minidb/src/write-path.ts`
- `packages/agent-core-v2/src/agent/contextMemory/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
