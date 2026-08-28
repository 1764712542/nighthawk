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

## 证据与代码位置

- `package.json`
- `.oxlintrc.json`
- `scripts/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
