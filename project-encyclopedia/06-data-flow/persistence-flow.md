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
  - `packages/minidb/src/write-path.ts`：
    - 导出签名/声明：
      - `export interface WritePathStats {`
      - `export interface WritePathDeps<V> {`
      - `export class WritePath<V>`
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
