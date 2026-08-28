# Plan 模式

Plan 模式让 agent 先只读探索、产出计划，再退出计划并请求审批。

## 用途

适合复杂任务开始前先理解代码、列出方案，避免直接改文件。

## 实现

Feature `plan` 贡献 `AgentPlanService`、`EnterPlanMode`/`ExitPlanMode` 工具和配置段。

## 权限

Plan 模式下写工具被 veto；退出计划需要 review 审批。

## 数据流

用户 `/plan` 或 `--plan` → 进入 plan state → 工具调用被限制 → `ExitPlanMode` 提交计划 → 审批后恢复。

## 证据与代码位置

- `packages/agent-core-v2/src/features/plan/`
- `docs/en/reference/slash-commands.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
