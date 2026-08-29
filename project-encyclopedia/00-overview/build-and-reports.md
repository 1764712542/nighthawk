# build/、reports/ 与脚本目录说明

本文说明仓库中容易被忽略的 `build/`、`reports/`、`scripts/` 目录，它们不是核心业务代码，但支撑整个工程的构建、验证与可观测性。

## build/

位置：`build/`

| 文件 | 作用 |
| --- | --- |
| `build/raw-text-loader.mjs` | 让打包器能把 `.md` 等文本资源作为字符串导入 |
| `build/raw-text-plugin.mjs` | Vite/Rolldown 插件，把 raw text 请求转成 loader |
| `build/register-raw-text-loader.mjs` | 开发/运行时注册 raw text loader |

典型用途：

```ts
import DESCRIPTION from './tool.md?raw';
```

## reports/

位置：`reports/latest/`

内容：大量 `events-*.jsonl`，是测试/运行过程中产生的事件流记录，用于：

- 调试 Agent 事件
- 验证 WS/事件推送
- 回放会话行为

这些是自动化产物，不属于源码。

## scripts/

位置：`scripts/`

| 文件 | 作用 |
| --- | --- |
| `build.mjs` | 通用构建脚本 |
| `check-no-comments.mjs` | 检查 comment-free 区域 |
| `check-nix-workspace.mjs` | 校验 `flake.nix` 与 pnpm workspace 同步 |
| `check-service-naming.mjs` | 校验服务命名 |
| `smoke-security.ts` | 安全引擎端到端冒烟 |
| `smoke-vendor.ts` | 供应商冒烟 |
| `fix-node-pty-perms.mjs` | 修复 node-pty 权限 |
| `debrand-dist-web.mjs` | 清理 web dist 品牌残留 |
| `make-ico.mjs` | 生成图标 |

## 与其他文档的关系

- `07-tech-stack/tsdown.md`：构建工具
- `07-tech-stack/github-actions.md`：CI 如何调用这些脚本
- `08-development/build.md`：开发构建流程
- `05-security/security-development.md`：安全冒烟脚本

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

> 图注：`00-overview/build-and-reports.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `build//`（目录内无 .ts 文件）
  - `reports/latest//`（目录内无 .ts 文件）
  - `scripts//` 目录下源码文件示例：
    - `scripts/smoke-security.ts`
    - `scripts/smoke-vendor.ts`
  - `package.json`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `build/`
- `reports/latest/`
- `scripts/`
- `package.json`
