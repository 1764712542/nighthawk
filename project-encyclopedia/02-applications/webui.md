# Web UI 与远程访问

Web UI 的源码不在本仓库，但预构建 bundle 会提交到 `apps/nighthawk/dist-web`。

## 来源

Web UI 在 code-app 仓库的 `apps/web` 开发，通过 `NIGHTHAWK_REPO=<checkout> pnpm run sync:web` 同步到本仓库。

## 打包保护

`apps/nighthawk/scripts/check-web-assets.mjs` 防止缺少 bundle 时打包。

## 运行

本仓库 `pnpm dev:server` 起服务，code-app 的 `pnpm dev:web` 可通过 `NIGHTHAWK_SERVER_URL` 指向它。

## 用途

远程浏览器访问 NightHawk 会话、审批和状态。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `apps/nighthawk/AGENTS.md`（非 TS 源码，可直接阅读）
  - `apps/nighthawk/scripts/check-web-assets.mjs`（路径不存在，请以仓库实际文件为准）
  - `package.json`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `apps/nighthawk/AGENTS.md`
- `apps/nighthawk/scripts/check-web-assets.mjs`
- `package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
