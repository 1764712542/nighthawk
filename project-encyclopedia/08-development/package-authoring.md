# 新增/修改包指南

monorepo 中加包必须同步 pnpm-workspace 与 flake.nix。

## Workspace

`pnpm-workspace.yaml` globs 自动包含 packages/*；flake.nix 需要手动加 path 和 name。

## 依赖

使用 `workspace:^` 引用本地包。

## 构建

新建 tsdown.config.ts、vitest.config.ts、package.json scripts。

## 检查

运行 `pnpm run sherif`、`node scripts/check-nix-workspace.mjs`。

## 证据与代码位置

- `pnpm-workspace.yaml`
- `flake.nix`
- `AGENTS.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
