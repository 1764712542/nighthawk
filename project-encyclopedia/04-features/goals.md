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

## 专业实现要点（开发流程视角）

### 需求分析

Feature 是自包含能力单元，必须能整体安装/卸载而不污染其他模块。

### 设计决策

用 `Feature` 基类组合 Service、Tool、Profile、Config、Command 贡献点；静态契约留在静态注册通道。

### 实现步骤

在 `src/features/<name>/` 写领域代码 → 写 `<name>Feature.ts` → 在 `src/index.ts` 精确导入 → 编写测试。

### 验证方式

通过 `test/features/feature.test.ts` 验证装配/卸载；通过 DI 视图观察 unit 状态。

### 维护注意

不要把所有能力塞进一个 Feature；配置段、wire 事件等静态契约必须保持可重放。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/agent-core-v2/src/features/goal//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/features/goal/errors.ts`
    - `packages/agent-core-v2/src/features/goal/goal.ts`
    - `packages/agent-core-v2/src/features/goal/goalAgentRuntime.ts`
    - `packages/agent-core-v2/src/features/goal/goalDeadlineScheduler.ts`
    - `packages/agent-core-v2/src/features/goal/goalDeadlineSchedulerService.ts`
    - `packages/agent-core-v2/src/features/goal/goalFeature.ts`
    - `packages/agent-core-v2/src/features/goal/goalOps.ts`
    - `packages/agent-core-v2/src/features/goal/injection/goalInjection.ts`
    - `packages/agent-core-v2/src/features/goal/tools/create-goal/create-goal.ts`
    - `packages/agent-core-v2/src/features/goal/tools/create-goal/createGoalTool.ts`
    - `packages/agent-core-v2/src/features/goal/tools/get-goal/get-goal.ts`
    - `packages/agent-core-v2/src/features/goal/tools/get-goal/getGoalTool.ts`
    - `packages/agent-core-v2/src/features/goal/tools/outcome-prompts.ts`
    - `packages/agent-core-v2/src/features/goal/tools/serialize.ts`
    - `packages/agent-core-v2/src/features/goal/tools/set-goal-budget/set-goal-budget.ts`
    - `packages/agent-core-v2/src/features/goal/tools/set-goal-budget/setGoalBudgetTool.ts`
    - `packages/agent-core-v2/src/features/goal/tools/update-goal/update-goal.ts`
    - `packages/agent-core-v2/src/features/goal/tools/update-goal/updateGoalTool.ts`
    - `packages/agent-core-v2/src/features/goal/types.ts`
  - `packages/agent-core-v2/src/features/todo//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/features/todo/todoAgentRuntime.ts`
    - `packages/agent-core-v2/src/features/todo/todoFeature.ts`
    - `packages/agent-core-v2/src/features/todo/todoItem.ts`
    - `packages/agent-core-v2/src/features/todo/todoListReminder.ts`
    - `packages/agent-core-v2/src/features/todo/todoOps.ts`
    - `packages/agent-core-v2/src/features/todo/tools/todo-list/todo-list.ts`
    - `packages/agent-core-v2/src/features/todo/tools/todo-list/todoListTool.ts`

## 证据与代码位置

- `packages/agent-core-v2/src/features/goal/`
- `packages/agent-core-v2/src/features/todo/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
