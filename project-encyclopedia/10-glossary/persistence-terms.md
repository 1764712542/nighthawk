# 持久化术语

解释 WAL、Snapshot、Generation、Read Model、Blob。

## WAL

Write-Ahead Log，先写日志再落数据。

## Snapshot

某一时刻的全量快照。

## Generation

minidb 持久化索引代际。

## Read Model

为查询优化的投影数据。

## 证据与代码位置

- `packages/minidb/README.md`
- `packages/minidb/AGENTS.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
