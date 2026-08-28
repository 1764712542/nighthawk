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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `package.json`（非 TS 源码，可直接阅读）
  - `pnpm-workspace.yaml`（非 TS 源码，可直接阅读）
  - `flake.nix`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `package.json`
- `pnpm-workspace.yaml`
- `flake.nix`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
