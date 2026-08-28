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
