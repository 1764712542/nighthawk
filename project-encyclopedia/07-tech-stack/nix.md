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

## 证据与代码位置

- `flake.nix`
- `AGENTS.md`
- `Makefile`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
