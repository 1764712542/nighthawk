# 仓库内置 AI 开发技能（.agents/skills）

NightHawk 仓库自带一套面向 AI Agent 的开发技能，用于让 Agent 在修改本仓库时遵循专业流程。

## 技能清单

| Skill | 作用 |
| --- | --- |
| `agent-core-dev` | 开发 `agent-core-v2` 时的完整指南：DI、Scope、Service、Feature、测试、错误处理 |
| `agent-core-review` | 代码审查与测试审查指南 |
| `gen-changesets` | 生成符合仓库规则的 Changeset |
| `gen-docs` | 更新 NightHawk 用户文档 |
| `pre-changelog` | 发布前预览 changelog |
| `sync-changelog` | 发布后同步 changelog |
| `translate-docs` | 同步/翻译中英文文档 |
| `write-tui` | 编写或修改 NightHawk TUI 的架构与视觉规范 |

## 如何被 Agent 使用

这些技能位于：

```text
.agents/skills/<skill-name>/SKILL.md
```

当任务匹配技能描述时，Agent 会加载对应 `SKILL.md` 作为工作指令。

## 典型使用场景

- 修改 `packages/agent-core-v2`：使用 `agent-core-dev`
- 修改 TUI：使用 `write-tui`
- 修改用户文档：使用 `gen-docs` + `translate-docs`
- 提交前生成 changeset：使用 `gen-changesets`
- 发布前/后处理 changelog：使用 `pre-changelog` / `sync-changelog`

## 示例

```sh
# 开发者提示
请使用 agent-core-dev 技能，为 agent-core-v2 新增一个 Session 级服务。
```

```sh
# 文档提示
请使用 gen-docs 技能，更新 CLI 用户文档。
```

## 专业实现要点（开发流程视角）

### 需求分析

技术栈选择要支撑大型 monorepo、严格类型、快速构建、可复现环境。

### 设计决策

TypeScript strict + tsdown + pnpm workspace + Nix flake；用 oxlint 而非传统 eslint。

### 实现步骤

先搭 workspace 与 tsconfig，再引入 tsdown/vitest/oxlint/changesets/CI。

### 验证方式

执行 `pnpm lint`、`pnpm typecheck`、`pnpm test`、`pnpm run build`。

### 维护注意

依赖版本锁定在 packageManager；Nix 路径与 pnpm workspace 保持一致。

## 逐函数实现说明

以下按源码文件列出可验证的导出函数/类，并给出实现职责说明。


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

> 本文证据路径没有可直接展示的 TS 源码片段。

## 时序/状态图

```mermaid
flowchart LR
    A[入口/调用方] --> B[本文核心模块]
    B --> C[依赖服务/数据层]
    C --> D[输出/事件/持久化]
```

> 图注：`07-tech-stack/repo-skills.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `.agents/skills//`（目录内无 .ts 文件）
  - `AGENTS.md`（非 TS 源码，可直接阅读）
  - `CONTRIBUTING.md`（非 TS 源码，可直接阅读）
  - `project-encyclopedia/08-development//`（目录内无 .ts 文件）

## 证据与代码位置

- `.agents/skills/`
- `AGENTS.md`
- `CONTRIBUTING.md`
- `project-encyclopedia/08-development/`
