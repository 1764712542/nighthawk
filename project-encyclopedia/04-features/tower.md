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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

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
  - `packages/agent-core-v2/src/features/tower/flag.ts` 导出：
    - 符号：`TOWER_FLAG_ENV`, `towerFlag`

## 证据与代码位置

- `packages/agent-core-v2/src/features/tower/`
- `packages/agent-core-v2/src/features/tower/flag.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
