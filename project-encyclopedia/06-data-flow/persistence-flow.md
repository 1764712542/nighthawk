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

## 证据与代码位置

- `packages/agent-core-v2/src/persistence/`
- `packages/minidb/src/write-path.ts`
- `packages/agent-core-v2/src/agent/contextMemory/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
