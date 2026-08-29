# 全仓库遍历报告

本文是当前仓库的完整遍历快照，覆盖非生成文件、顶层目录、源码规模、测试规模、插件、脚本、CI 与文档体系。目的是证明“文档不是只看 README 写出来的”，而是基于真实目录结构生成。

## 总体规模

| 指标 | 数值 |
| --- | --- |
| 非生成文件总数（排除 node_modules/dist/.git 等） | 4714 |
| TypeScript/TSX 源文件 | 3899 |
| Markdown 文件 | 468 |
| JSON/JSONL 文件 | 195 |
| 顶层目录 | `packages`、`apps`、`project-encyclopedia`、`reports`、`docs`、`.agents`、`plugins`、`scripts`、`build` 等 |

> 统计来自 `.tmp/repo_stats.py`，当前仓库 HEAD 状态。

## 顶层目录遍历

| 目录 | 文件数 | 内容 |
| --- | --- | --- |
| `packages/` | 3384 | 18 个核心/支撑包，包含 agent 引擎、服务端、SDK、LLM 抽象、执行环境、TUI 框架、数据层 |
| `apps/` | 924 | CLI/TUI、VS Code 扩展、inspect、vis 及内置 web/native 资源 |
| `project-encyclopedia/` | 167 | 本项目深度文档集 |
| `reports/` | 80 | 测试/运行事件 JSONL，多为自动化产出 |
| `docs/` | 73 | VitePress 双语用户文档（不含 dist 后） |
| `.agents/` | 29 | 仓库内置 AI 开发技能：agent-core-dev、gen-docs、write-tui、translate-docs 等 |
| `plugins/` | 18 | 官方/精选插件市场与插件包 |
| `scripts/` | 8 | 构建、守卫、安全冒烟、Nix 校验等脚本 |
| `build/` | 3 | 原始文本加载器与 Vite 插件，用于打包 markdown 资源 |

## 源码包清单

| 包 | 源码文件数 | 测试文件数 | 主要职责 |
| --- | --- | --- | --- |
| `packages/agent-core` | 397 | 257 | v1 统一 Agent 引擎、安全工具生产代码 |
| `packages/agent-core-v2` | 922 | 395 | v2 DI×Scope 引擎、Feature 系统 |
| `packages/kap-server` | 153 | 77 | REST+WebSocket 服务端 |
| `packages/klient` | 50 | 27 | 契约驱动客户端 SDK |
| `packages/node-sdk` | 20 | 35 | 公开 TypeScript SDK |
| `packages/kosong` | 26 | 57 | LLM 供应商抽象 |
| `packages/kaos` | 12 | 20 | 执行环境抽象 |
| `packages/pi-tui` | 40 | 39 | 终端 UI 组件框架 |
| `packages/minidb` | 58 | 53 | 嵌入式 KV/文档库 |
| `packages/transcript` | 24 | 2 | transcript 数据层 |
| `packages/protocol` | 70 | 0 | 共享协议 schema |
| `packages/oauth` | 26 | 20 | OAuth 工具包 |
| `packages/telemetry` | 9 | 2 | 遥测基础设施 |
| `packages/migration-legacy` | 27 | 27 | 旧版数据迁移 |
| `packages/acp-adapter` | 18 | 37 | ACP 协议 v1 适配 |
| `packages/acp-server` | 25 | 18 | ACP 协议 v2 宿主 |
| `packages/tree-sitter-bash` | 7 | 8 | 纯 TS Bash 解析器 |
| `packages/security-core` | 25 | 0 | 已弃用安全引擎参考实现 |

## 应用清单

| 应用 | 说明 |
| --- | --- |
| `apps/nighthawk` | 主 CLI/TUI，308 个 src 文件、213 个测试文件 |
| `apps/nighthawk-inspect` | kap-server debug RPC 的 Web 检查器 |
| `apps/vscode` | VS Code 扩展 |
| `apps/vis` | 会话可视化工具，含 server/web 子包 |

## 插件与扩展

- 官方插件：`nighthawk-datasource`、`nighthawk-webbridge`、`nighthawk-pentest`
- 市场精选：`superpowers`、`vercel-plugin`、`modern-web-guidance`、`cloudbase`
- 扩展格式：MCP server、SKILL.md、Agent 文件、Plugin manifest、OpenAI function schema

## 工程脚本

- `scripts/build.mjs`：构建入口
- `scripts/check-no-comments.mjs`：comment-free 区域守卫
- `scripts/check-nix-workspace.mjs`：Nix workspace 同步校验
- `scripts/check-service-naming.mjs`：服务命名守卫
- `scripts/smoke-security.ts`：安全引擎冒烟测试
- `scripts/smoke-vendor.ts`：供应商冒烟
- `scripts/fix-node-pty-perms.mjs`：node-pty 权限修复

## CI/CD

- `.github/workflows/ci.yml`
- `.github/workflows/release.yml`
- `.github/workflows/nix-build.yml`
- `.github/workflows/docs-deploy.yml`
- `.github/workflows/_native-build.yml`
- `.github/workflows/manual-native-bundle.yml`
- `.github/workflows/pkg-pr-new.yml`
- `.github/workflows/pr-title-checker.yml`

## 文档体系

- `docs/`：VitePress 双语用户文档
- `project-encyclopedia/`：本项目深度技术文档
- `.agents/skills/`：AI 开发技能，例如 gen-docs、write-tui、agent-core-dev、translate-docs

## 遍历结论

仓库不是“一个 CLI 那么简单”，而是一个完整、可自托管的 coding agent 平台：

- 有独立引擎 v1/v2
- 有服务端、客户端 SDK、多传输协议
- 有 TUI、VS Code、Web、Inspect、Vis 多种前端
- 有安全引擎、插件市场、ACP、MCP、Skills
- 有 Nix、SEA、CI、Changesets 完整工程化设施

## 专业实现要点（开发流程视角）

### 需求分析

先明确产品要解决的核心问题：终端 AI Agent 需要同时具备编程、代码审计、渗透测试能力。

### 架构选型

选择 TypeScript monorepo，让应用、服务端、SDK、数据层共享类型；选择 pnpm workspace 管理依赖。

### 实现步骤

先做 Agent 内核（v1），再沉淀公共包（kosong/kaos），随后演进 v2 DI×Scope 引擎，最后包装 CLI/TUI/VS Code/Server。

### 验证方式

使用 `pnpm lint`、`pnpm typecheck`、`pnpm test`、`node scripts/smoke-security.ts` 形成回归防线。

### 维护注意

新增包必须同步 `pnpm-workspace.yaml` 与 `flake.nix`；公开 API 变更需 changeset。

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

> 图注：`00-overview/full-traversal.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `package.json`（非 TS 源码，可直接阅读）
  - `pnpm-workspace.yaml`（非 TS 源码，可直接阅读）
  - `apps/nighthawk/package.json`（非 TS 源码，可直接阅读）
  - `packages/*/package.json`（路径不存在，请以仓库实际文件为准）
  - `plugins/marketplace.json`（非 TS 源码，可直接阅读）
  - `.github/workflows//`（目录内无 .ts 文件）
  - `scripts//` 目录下源码文件示例：
    - `scripts/smoke-security.ts`
    - `scripts/smoke-vendor.ts`
  - `docs//` 目录下源码文件示例：
    - `docs/.vitepress/config.ts`
    - `docs/.vitepress/theme/index.ts`
  - `project-encyclopedia//`（目录内无 .ts 文件）

## 证据与代码位置

- `package.json`
- `pnpm-workspace.yaml`
- `apps/nighthawk/package.json`
- `packages/*/package.json`
- `plugins/marketplace.json`
- `.github/workflows/`
- `scripts/`
- `docs/`
- `project-encyclopedia/`
