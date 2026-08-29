# NightHawk Vibe Coding 全流程

本文描述用 NightHawk 从“一个想法”到“可上线代码”的专业开发流程，并把 NightHawk 的 Plan、Agent、Skills、MCP、权限、安全工具串起来。

## 阶段 0：准备项目上下文

目标：让 Agent 一上来就理解项目规范和边界。

```sh
cd your-project
nighthawk
```

建议在项目根目录维护：

- `AGENTS.md`：项目结构、命令、编码规范、禁止事项
- `README.md`：项目用途
- `.nighthawk/`：本地配置、skills、agents

### 推荐提示词

```text
请阅读 AGENTS.md、README.md 和 package.json，然后总结：
1. 这个项目是做什么的？
2. 技术栈和关键目录是什么？
3. 我可以用哪些命令构建/测试？
4. 项目里有哪些约束？
```

## 阶段 1：需求澄清

目标：把模糊想法转成可执行的验收标准。

```text
我想要的最终效果是：[一句话描述]。

请帮我拆解成：
- 用户故事
- 输入/输出
- 技术方案选项
- 风险点
- 验收标准
```

如果需求复杂，先进入 Plan 模式：

```sh
nighthawk --plan
```

## 阶段 2：技术方案设计

目标：让 Agent 先读代码、再给方案，而不是直接改。

```text
请先不要写代码。阅读相关模块后，给我一份实现方案：
1. 涉及文件
2. 数据结构/接口
3. 数据流
4. 测试策略
5. 兼容性影响
```

## 阶段 3：小步实现

目标：把大任务拆成可验证的小切片，每步运行测试。

```text
请按以下顺序实现：
1. 先创建类型/接口
2. 再实现核心逻辑
3. 然后写测试
4. 运行 `pnpm test` 或项目对应测试命令
5. 修复失败
```

也可以使用子 Agent 并行探索：

```text
请用子 Agent 分别调研 A 模块和 B 模块，把结论汇总给我。
```

## 阶段 4：代码审查

目标：让 Agent 用 Review 视角检查自己的代码。

```text
请 review 你刚才的改动，重点检查：
- 边界条件
- 错误处理
- 安全性
- 性能
- 与项目风格的一致性
- 测试是否足够
```

## 阶段 5：安全审计

目标：Vibe Coding 最容易被忽略的是安全，NightHawk 内置工具可以直接跑。

```text
请对本次改动执行安全审计：
1. SecurityScan 扫描相关文件
2. SecretScan 检查密钥
3. TaintTrace 追踪用户输入
4. DepAudit 检查依赖
```

如果涉及授权渗透测试，可使用 `/pentest` 模式或 `nighthawk-pentest` 插件。

## 阶段 6：提交与文档

目标：生成干净提交和必要文档。

```text
请帮我：
1. 查看 git diff
2. 写符合 Conventional Commit 的提交信息
3. 更新 README/文档
4. 如果有 breaking change，说明迁移方式
```

## 阶段 7：持续迭代

```text
请继续当前任务。先读 TODO，再选择下一步，完成后运行验证并更新 TODO。
```

## 推荐的权限策略

| 场景 | 建议 |
| --- | --- |
| 只读探索 | `nighthawk` 默认 |
| 普通开发 | 默认审批，观察每个写操作 |
| 可信项目批量任务 | `nighthawk --yolo` |
| 完全自主流水线 | `nighthawk --auto`，但先确保静态 deny 规则 |
| 复杂/重构 | `nighthawk --plan` |

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

> 图注：`13-vibe-coding/workflow.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

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
  - `docs/en/guides/use-cases.md`（非 TS 源码，可直接阅读）
  - `docs/en/reference/nighthawk-command.md`（非 TS 源码，可直接阅读）
  - `docs/en/reference/slash-commands.md`（非 TS 源码，可直接阅读）
  - `project-encyclopedia/04-features/plan-mode.md`（非 TS 源码，可直接阅读）
  - `project-encyclopedia/04-features/subagents.md`（非 TS 源码，可直接阅读）
  - `project-encyclopedia/05-security//`（目录内无 .ts 文件）

## 证据与代码位置

- `docs/en/guides/interaction.md`
- `docs/en/guides/use-cases.md`
- `docs/en/reference/nighthawk-command.md`
- `docs/en/reference/slash-commands.md`
- `project-encyclopedia/04-features/plan-mode.md`
- `project-encyclopedia/04-features/subagents.md`
- `project-encyclopedia/05-security/`
