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

  - `packages/agent-core-v2/src/features/tower//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/features/tower/flag.ts`
    - `packages/agent-core-v2/src/features/tower/injection/towerModeInjection.ts`
    - `packages/agent-core-v2/src/features/tower/protocol/frontmatter.ts`
    - `packages/agent-core-v2/src/features/tower/protocol/git.ts`
    - `packages/agent-core-v2/src/features/tower/protocol/index.ts`
    - `packages/agent-core-v2/src/features/tower/protocol/paths.ts`
    - `packages/agent-core-v2/src/features/tower/protocol/repoRoot.ts`
    - `packages/agent-core-v2/src/features/tower/protocol/store.ts`
    - `packages/agent-core-v2/src/features/tower/protocol/types.ts`
    - `packages/agent-core-v2/src/features/tower/tools/finding/finding.ts`
    - `packages/agent-core-v2/src/features/tower/tools/finding/findingTool.ts`
    - `packages/agent-core-v2/src/features/tower/tools/inbox/inbox.ts`
    - `packages/agent-core-v2/src/features/tower/tools/inbox/inboxTool.ts`
    - `packages/agent-core-v2/src/features/tower/tools/init/init.ts`
    - `packages/agent-core-v2/src/features/tower/tools/init/initTool.ts`
    - `packages/agent-core-v2/src/features/tower/tools/merge/merge.ts`
    - `packages/agent-core-v2/src/features/tower/tools/merge/mergeTool.ts`
    - `packages/agent-core-v2/src/features/tower/tools/mission/mission.ts`
    - `packages/agent-core-v2/src/features/tower/tools/mission/missionTool.ts`
    - `packages/agent-core-v2/src/features/tower/tools/plan/plan.ts`
    - `packages/agent-core-v2/src/features/tower/tools/plan/planTool.ts`
    - `packages/agent-core-v2/src/features/tower/tools/review/review.ts`
    - `packages/agent-core-v2/src/features/tower/tools/review/reviewTool.ts`
    - `packages/agent-core-v2/src/features/tower/tools/send/send.ts`
  - `packages/agent-core-v2/src/features/tower/flag.ts`：
    - 导出签名/声明：
      - `export const TOWER_FLAG_ENV = 'NIGHTHAWK_EXPERIMENTAL_TOWER';`
      - `export const towerFlag: FlagDefinitionInput = {`

## 证据与代码位置

- `packages/agent-core-v2/src/features/tower/`
- `packages/agent-core-v2/src/features/tower/flag.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
