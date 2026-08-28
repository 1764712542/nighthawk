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

  - `packages/agent-core-v2/src/features/plan//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/features/plan/configSection.ts`
    - `packages/agent-core-v2/src/features/plan/exitPlanModeReview.ts`
    - `packages/agent-core-v2/src/features/plan/injection/planModeInjection.ts`
    - `packages/agent-core-v2/src/features/plan/plan.ts`
    - `packages/agent-core-v2/src/features/plan/planFeature.ts`
    - `packages/agent-core-v2/src/features/plan/planOps.ts`
    - `packages/agent-core-v2/src/features/plan/planService.ts`
    - `packages/agent-core-v2/src/features/plan/profile/plan.ts`
    - `packages/agent-core-v2/src/features/plan/tools/enter-plan-mode/enter-plan-mode.ts`
    - `packages/agent-core-v2/src/features/plan/tools/enter-plan-mode/enterPlanModeTool.ts`
    - `packages/agent-core-v2/src/features/plan/tools/exit-plan-mode/exit-plan-mode.ts`
    - `packages/agent-core-v2/src/features/plan/tools/exit-plan-mode/exitPlanModeTool.ts`
  - `docs/en/reference/slash-commands.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/agent-core-v2/src/features/plan/`
- `docs/en/reference/slash-commands.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
