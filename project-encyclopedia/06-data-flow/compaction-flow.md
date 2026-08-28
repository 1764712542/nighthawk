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

## 证据与代码位置

- `packages/agent-core/src/agent/compaction/`
- `packages/agent-core-v2/src/agent/fullCompaction/`
- `packages/agent-core-v2/src/agent/contextMemory/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
