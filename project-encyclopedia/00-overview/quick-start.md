# 快速开始

从 clone 到跑起来：安装依赖、构建包、构建 CLI、进入 TUI 或 headless 审计。

## 环境要求

Node.js >= 24.15.0，pnpm 10.33.0；`.npmrc` 设置 `engine-strict=true`，版本不满足会安装失败。

## 安装与构建

```sh
git clone https://github.com/example/nighthawk.git && cd nighthawk
pnpm install
pnpm run build:packages
pnpm -C apps/nighthawk run build
```

## 交互式 TUI

```sh
node apps/nighthawk/dist/main.mjs
``` 或安装后运行 `nighthawk`。

## 无头安全审计

```sh
node apps/nighthawk/dist/main.mjs -p "审计这个仓库的注入和 XSS 风险，按可利用性排序。"
```

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

> 图注：`00-overview/quick-start.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `README.zh-CN.md`（非 TS 源码，可直接阅读）
  - `package.json`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `README.zh-CN.md`
- `package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
