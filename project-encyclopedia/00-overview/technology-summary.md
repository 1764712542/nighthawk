# 技术栈总览

项目使用 TypeScript strict、pnpm workspace、tsdown、Vitest、oxlint、Changesets、VitePress 和 Nix。

## 语言与运行时

TypeScript（strict、ES2024 target、bundler resolution），Node.js >= 24.15.0，pnpm 10.33.0。

## 构建与测试

tsdown 打包；Vitest 4.1.4 测试；oxlint 1.59.0 lint；lint-staged + simple-git-hooks；GitHub Actions 分片测试。

## 发布与文档

Changesets 管理版本；VitePress 双语文档；Nix flake 提供可复现构建和 dev shell。

## 关键依赖

Fastify、zod、xstate、node-pty、openai/anthropic/google-genai SDK、MCP SDK、tree-sitter 数据等。具体见各 `package.json`。

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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `package.json`（非 TS 源码，可直接阅读）
  - `pnpm-workspace.yaml`（非 TS 源码，可直接阅读）
  - `flake.nix`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `package.json`
- `pnpm-workspace.yaml`
- `flake.nix`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
