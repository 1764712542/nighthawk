# NightHawk 仓库全局约束

本文件是所有 AI 工具进入本仓库时必须遵守的顶层约束。子目录中的 `CONSTRAINTS.md` 优先级更高。

## 全局硬约束

- 不提交 `.env`、密钥、token、密码。
- 不提交 scratch 文件、设计稿、handoff 文档。
- 不修改与当前任务无关的文件。
- 不升级依赖，除非任务明确要求。
- 不破坏公共 API，除非先讨论。
- 新功能必须包含测试。
- 提交信息遵循 Conventional Commit。
- 公开文本使用中性占位符，不泄露内部标识。

## 技术栈约束

- TypeScript strict。
- pnpm workspace。
- 新增包必须同步 `pnpm-workspace.yaml` 与 `flake.nix`。
- `packages/agent-core-v2`、`packages/kap-server`、`packages/transcript` 是 comment-free 区域。
- 包入口优先 `export * from './module'`。

## 安全约束

- 禁止 eval、shell=True、裸命令拼接用户输入。
- 禁止硬编码密钥。
- 禁止未授权渗透测试。
- 修改安全引擎后必须运行 `node scripts/smoke-security.ts`。

## 工具调用约束

### Read
- 已知路径文件直接 Read，不提前 ls/glob。
- 大文件使用 line_offset 分页。
- 敏感文件（.env、密钥、SSH 私钥）被拒绝读取。

### Edit
- 每次 Edit 前必须 Read 文件获取最新内容。
- 不连续对同一文件 Edit 两次——中间必须 Read。
- old_string 必须唯一，否则用 replace_all。
- 不允许用 Write 修改已有文件。

### Write
- 只用于创建新文件或完全覆盖已有文件。
- 读后才覆盖已有文件。
- 不创建 unsolicited 文档。

### Grep/Glob
- 优先用 Grep 搜内容，Glob 搜文件名。
- 不 shell grep 绕过工具。

### Bash
- 遵守 workspace 权限限制。
- 后台任务用 run_in_background。
- 长命令设 timeout。

### Agent/AgentSwarm
- 子任务独立，不冲突。
- AgentSwarm 最多 128 子任务。
- 每个子任务给区别 scope。

## 提示词模板

```text
请严格遵循根 CONSTRAINTS.md、当前目录 CONSTRAINTS.md 和 AGENTS.md。
先阅读相关文档，再开始修改。
完成后运行测试、typecheck、lint，并自检是否违反约束。
```

## 子目录约束文件

- `packages/*/CONSTRAINTS.md`
- `apps/*/CONSTRAINTS.md`
- `scripts/CONSTRAINTS.md`
- `build/CONSTRAINTS.md`
- `.github/CONSTRAINTS.md`
- `docs/CONSTRAINTS.md`
- `plugins/CONSTRAINTS.md`

## 证据与代码位置

- `AGENTS.md`
- `CONSTRAINTS.md`
- `project-encyclopedia/14-prompts-constraints/`
