# oxlint 与仓库守卫

oxlint 是主 linter，配合自定义脚本检查注释、Nix 同步、服务命名等。

## 配置

`.oxlintrc.json` 含 TypeScript、import、unicorn、promise、node 插件。

## 命令

`pnpm lint` = `node scripts/check-no-comments.mjs && oxlint --type-aware`。

## lint-staged

git hooks 在提交前自动 fix。

## 守卫

`check-nix-workspace.mjs`、`check-service-naming.mjs`、`check-no-comments.mjs`。

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

  - `.oxlintrc.json`（非 TS 源码，可直接阅读）
  - `package.json`（非 TS 源码，可直接阅读）
  - `scripts//` 目录下源码文件示例：
    - `scripts/smoke-security.ts`
    - `scripts/smoke-vendor.ts`

## 证据与代码位置

- `.oxlintrc.json`
- `package.json`
- `scripts/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
