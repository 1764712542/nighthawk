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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `AGENTS.md`（非 TS 源码，可直接阅读）
  - `package.json`（非 TS 源码，可直接阅读）
  - `mise.toml`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `AGENTS.md`
- `package.json`
- `mise.toml`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
