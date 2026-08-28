# Goal 系统

Goal 让用户给 agent 设定长期目标，agent 在任务循环中维护目标状态和预算。

## 用途

把一个大的多步任务拆成持久目标，跨轮次跟踪进度。

## 实现

Feature `goal` 提供 `goalAgentRuntime`、`goalDeadlineScheduler`、`goalOps` 等。

## 状态

goal 有创建、更新、完成、清除等 wire records，支持重放。

## 权限

goal 预算/过期拒绝是硬 deny，没有 ask 通道。

## 证据与代码位置

- `packages/agent-core-v2/src/features/goal/`
- `packages/agent-core-v2/src/features/todo/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
