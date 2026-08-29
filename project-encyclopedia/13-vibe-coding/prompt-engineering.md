# NightHawk 提示词工程

好的 vibe coding 提示词不是“帮我写个 XX”，而是包含目标、约束、步骤、验收标准。本文给出可复用的提示词结构。

## 提示词五要素

1. **角色/上下文**：告诉 Agent 项目背景
2. **目标**：明确要交付什么
3. **约束**：技术栈、禁止事项、兼容性
4. **步骤**：希望 Agent 按什么顺序执行
5. **验收标准**：如何判断完成

## 模板

```text
背景：
- 项目：[项目名]
- 技术栈：[TypeScript/Node/React/...]
- 相关目录：[src/...]

目标：
- 实现/修复/重构 [功能]

约束：
- 使用 [技术/模式]
- 不要 [做某些事]
- 保持 [公共 API/现有测试]

步骤：
1. 阅读 [文件]
2. 给出计划
3. 实现
4. 测试
5. 汇报

验收标准：
- [可观察结果]
- [测试通过]
```

## 好与坏的对比

### 坏提示词

```text
帮我做个 todo app
```

问题：没有技术栈、没有范围、没有验收标准。

### 好提示词

```text
请用 React + TypeScript 实现一个本地 todo app。

功能：
- 添加/删除/标记完成
- 使用 localStorage 持久化
- 支持过滤：all / active / completed

约束：
- 不要引入 UI 框架
- 使用函数组件和 hooks
- 提供 Vitest 测试

步骤：
1. 先看 package.json 和现有 src 结构
2. 给出文件计划
3. 实现
4. 写测试并运行

验收：
- pnpm test 通过
- 手动启动后可以完成上述交互
```

## 让 Agent 先读代码

```text
在开始前，请先阅读：
- README.md
- package.json
- src/index.ts
- 最近的相关测试

然后总结你的理解，再开始。
```

## 控制 Agent 的“过度发挥”

```text
约束：
- 只修改与任务直接相关的文件
- 不要顺手重构无关代码
- 不要升级依赖，除非任务明确要求
- 不要改变公共 API，除非先说明
```

## 要求小步验证

```text
每完成一个子任务：
1. 运行对应的 typecheck/lint/test
2. 如果失败，先修复再继续
3. 用简短文字汇报当前状态
```

## 让 Agent 使用 NightHawk 特有能力

```text
请使用：
- Plan 模式先规划
- Grep/Glob 定位代码
- Bash 运行测试
- Read/Edit/Write 修改文件
- SecurityScan/SecretScan/TaintTrace/DepAudit 做安全审计
- AskUserQuestion 在关键决策点询问我
```

## 追问与迭代

第一轮结果不理想时，不要重复整个提示词，而是：

```text
你刚才的方案在 [某处] 不符合预期。
具体问题：[...]
请调整：
- [...]
- [...]
然后重新验证。
```

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

> 图注：`13-vibe-coding/prompt-engineering.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `docs/en/guides/interaction.md`（非 TS 源码，可直接阅读）
  - `docs/en/reference/tools.md`（非 TS 源码，可直接阅读）
  - `docs/en/reference/slash-commands.md`（非 TS 源码，可直接阅读）
  - `project-encyclopedia/04-features//`（目录内无 .ts 文件）
  - `project-encyclopedia/06-data-flow//`（目录内无 .ts 文件）

## 证据与代码位置

- `docs/en/guides/interaction.md`
- `docs/en/reference/tools.md`
- `docs/en/reference/slash-commands.md`
- `project-encyclopedia/04-features/`
- `project-encyclopedia/06-data-flow/`
