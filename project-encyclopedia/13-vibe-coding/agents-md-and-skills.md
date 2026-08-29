# 用 AGENTS.md 与 Skills 提升 Vibe Coding 质量

Vibe Coding 最大的不稳定来源是“项目上下文缺失”。NightHawk 支持通过 `AGENTS.md`、Skills、Agent 文件和 MCP 把项目规范注入到每次对话中。

## 为什么 AGENTS.md 重要

`AGENTS.md` 是 NightHawk 在会话中自动读取的项目级指令文件。它相当于给每个 vibe coding 任务预设：

- 项目结构
- 技术栈
- 常用命令
- 编码规范
- 禁止事项
- 安全边界

### 推荐 AGENTS.md 模板

```markdown
# 项目指南

## 项目简介
一句话说明项目做什么。

## 技术栈
- TypeScript / Node.js
- pnpm workspace
- Vitest
- ...

## 目录结构
- `src/`：源码
- `test/`：测试
- ...

## 常用命令
- `pnpm install`
- `pnpm test`
- `pnpm lint`
- `pnpm typecheck`

## 编码规范
- 使用 strict TypeScript
- 禁止 any
- 新功能必须写测试
- 不要直接修改公共 API，除非先讨论

## 禁止事项
- 不要提交 .env
- 不要使用 eval
- 不要引入未锁定的依赖
- 不要破坏现有测试
```

## 如何让 Agent 使用 AGENTS.md

```text
请先阅读 AGENTS.md，并严格按照其中的命令和规范执行。
如果某个任务与 AGENTS.md 冲突，先停下来问我。
```

## Skills 的作用

Skills 是 Markdown 定义的 playbook，适合把“团队级流程”沉淀下来，例如：

- `code-review`：每次改完代码都执行的标准审查流程
- `security-check`：每次上线前执行的安全检查
- `tdd`：先写测试再写实现
- `commit`：生成符合 Conventional Commit 的提交信息

### 创建 Skill

在 `~/.nighthawk/skills/` 或项目 `.nighthawk/skills/` 下创建：

```markdown
---
name: code-review
description: 对当前改动执行标准代码审查
whenToUse: 代码完成后、提交前
---

请按以下顺序审查：
1. 检查 diff 范围
2. 检查正确性
3. 检查安全性
4. 检查测试
5. 输出问题清单
```

然后在对话中让 Agent 加载：

```text
请使用 code-review skill 审查当前改动。
```

## 配合 MCP

如果项目依赖外部数据/服务，可以通过 MCP 接入：

- 数据库查询
- 云平台 API
- 内部文档
- 浏览器自动化

```text
请通过 MCP 查询 [数据源]，把结果用于实现 [功能]。
```

## 配合 Agent 文件

你可以定义专用 Agent，例如 `reviewer`、`security-auditor`、`architect`：

```text
nighthawk --agent security-auditor -p "审计当前分支"
```

## 专业实现要点（开发流程视角）

### 需求分析

Vibe Coding 文档要把“自然语言开发”变成可重复、可验证、安全可控的工程流程。

### 设计决策

以提示词模板、阶段化工作流、安全审计清单为核心，让用户可以直接复制使用。

### 实现步骤

从项目准备 → 需求澄清 → 方案设计 → 小步实现 → 审查 → 安全审计 → 提交 → 迭代。

### 验证方式

每个提示词都要求 Agent 运行测试、lint、安全工具；文档本身引用 NightHawk 真实命令。

### 维护注意

提示词应随 NightHawk 工具集和权限模式演进，避免使用已废弃命令。

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

> 图注：`13-vibe-coding/agents-md-and-skills.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `docs/en/customization/agents.md`（非 TS 源码，可直接阅读）
  - `docs/en/customization/skills.md`（非 TS 源码，可直接阅读）
  - `docs/en/customization/mcp.md`（非 TS 源码，可直接阅读）
  - `project-encyclopedia/04-features/skills.md`（非 TS 源码，可直接阅读）
  - `project-encyclopedia/04-features/mcp.md`（非 TS 源码，可直接阅读）
  - `project-encyclopedia/04-features/plugins.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `docs/en/customization/agents.md`
- `docs/en/customization/skills.md`
- `docs/en/customization/mcp.md`
- `project-encyclopedia/04-features/skills.md`
- `project-encyclopedia/04-features/mcp.md`
- `project-encyclopedia/04-features/plugins.md`
