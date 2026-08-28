# 仓库地图

这是一个 pnpm workspace TypeScript monorepo，包含应用、核心包、插件、文档、脚本和构建设施。

## 顶层目录

`apps/` 放 CLI/TUI、VS Code、inspect、vis；`packages/` 放 agent 内核、服务端、SDK、数据层等；`plugins/` 放插件市场；`docs/` 放 VitePress 文档；`scripts/` 放构建和守卫脚本。

## 核心包

`agent-core`（v1 统一引擎）、`agent-core-v2`（当前 DI×Scope 引擎）、`kap-server`（REST+WS 服务端）、`klient`（客户端 SDK）、`node-sdk`（公开 TS SDK）、`kosong`（LLM 抽象）、`kaos`（执行环境）、`pi-tui`（TUI 框架）、`transcript`（transcript 数据层）、`minidb`（嵌入式 KV/索引）。

## 应用层

`apps/nighthawk` 是 CLI/TUI 主应用；`apps/nighthawk-inspect` 是 debug RPC 检查器；`apps/vscode` 是 VS Code 扩展；`apps/vis` 是会话可视化。

## 数据

包数量 22（含 apps），源码 TS 文件约 4500+，测试文件大量。具体统计见各包文档。

## 证据与代码位置

- `pnpm-workspace.yaml`
- `AGENTS.md`
- `package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
