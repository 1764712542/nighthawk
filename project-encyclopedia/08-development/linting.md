# Lint 与守卫

lint 不仅检查代码风格，还检查注释、Nix 同步、服务命名。

## 命令

`pnpm lint` / `pnpm lint:fix`。

## 守卫脚本

`scripts/check-no-comments.mjs`、`check-nix-workspace.mjs`、`check-service-naming.mjs`。

## 提交

simple-git-hooks + lint-staged 自动跑 oxlint。

## Sherif

`pnpm sherif` 检查 workspace 依赖。

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

  - `package.json`（非 TS 源码，可直接阅读）
  - `.oxlintrc.json`（非 TS 源码，可直接阅读）
  - `scripts//` 目录下源码文件示例：
    - `scripts/smoke-security.ts`
    - `scripts/smoke-vendor.ts`

## 证据与代码位置

- `package.json`
- `.oxlintrc.json`
- `scripts/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
