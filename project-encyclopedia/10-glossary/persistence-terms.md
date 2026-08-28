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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/minidb/README.md`（非 TS 源码，可直接阅读）
  - `packages/minidb/AGENTS.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/minidb/README.md`
- `packages/minidb/AGENTS.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
