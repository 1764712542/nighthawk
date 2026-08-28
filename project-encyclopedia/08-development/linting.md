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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

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
