# pnpm Monorepo

pnpm workspace 管理所有包，workspace 协议 `workspace:^` 链接本地依赖。

## 配置

`pnpm-workspace.yaml` 包含 `packages/*`、`apps/*` 和 docs。

## 安装

`pnpm install`；`.npmrc` 设置 `engine-strict=true`。

## 脚本

根脚本 `build`、`test`、`lint`、`typecheck` 等。

## Nix 同步

`flake.nix` 手动维护 workspacePaths 和 workspaceNames，新增包必须同步。

## 证据与代码位置

- `pnpm-workspace.yaml`
- `package.json`
- `AGENTS.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
