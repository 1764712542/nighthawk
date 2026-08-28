# Nix Flake 构建

flake.nix 提供可复现 dev shell 和 SEA 二进制构建。

## Dev shell

Node.js、pnpm、ripgrep、fd。

## Package build

构建 native SEA (Single Executable Application) 二进制。

## 平台

x86_64-linux、aarch64-linux、x86_64-darwin、aarch64-darwin。

## 同步

workspacePaths 和 workspaceNames 必须手动与 pnpm workspace 同步。

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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `flake.nix`（非 TS 源码，可直接阅读）
  - `AGENTS.md`（非 TS 源码，可直接阅读）
  - `Makefile`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `flake.nix`
- `AGENTS.md`
- `Makefile`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
