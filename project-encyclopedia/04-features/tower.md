# Tower 模式

Tower 是一个面向 tower-worker 的编排模式，包含协议存储、限流和 11 个 Tower 工具。

## 实现

Feature `tower` 位于 `packages/agent-core-v2/src/features/tower/`，有 `towerService`、`towerRateLimit`、`workerProfile`。

## 模式注入

tower-mode service 带 reminders，承载编排 manual。

## 工具

Tower* 工具集（共 11 个）。

## 用途

批量/worker 型自动化任务编排。

## 证据与代码位置

- `packages/agent-core-v2/src/features/tower/`
- `packages/agent-core-v2/src/features/tower/flag.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
