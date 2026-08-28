# 开发环境搭建

从零配置 Node、pnpm、依赖和本地构建。

## 工具

Node.js >= 24.15.0、pnpm 10.33.0；可用 nvm/fnm/mise。

## 安装

`pnpm install`；postinstall 修复 node-pty 权限。

## 构建

`pnpm run build` 或 `pnpm run build:packages`。

## 验证

`pnpm lint`、`pnpm typecheck`、`pnpm test`。

## 专业实现要点（开发流程视角）

### 需求分析

开发流程要让贡献者能快速搭建、构建、测试、提交。

### 设计决策

根 AGENTS.md 作为热路径规则；各包 AGENTS.md 记录局部约定；skill 目录沉淀可复用流程。

### 实现步骤

安装依赖 → 构建包 → 修改代码 → 运行相关测试 → lint → 生成 changeset → PR。

### 验证方式

本地 `pnpm lint && pnpm typecheck && pnpm test`；CI 分片验证。

### 维护注意

提交前清理 scratch 文件，遵循 Conventional Commit，不泄露内部标识。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `AGENTS.md`（非 TS 源码，可直接阅读）
  - `package.json`（非 TS 源码，可直接阅读）
  - `mise.toml`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `AGENTS.md`
- `package.json`
- `mise.toml`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
