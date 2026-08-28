# v1 与 v2 引擎对比

v1 是统一的单体式引擎，v2 是基于 DI×Scope 的重构引擎。

## v1 结构

`packages/agent-core` 包含 Agent、Session、profile、skills、tools、plan、permission、background、records、RPC、services 等。安全工具生产代码在此。

## v2 结构

`packages/agent-core-v2` 把生命周期拆成 App/Workspace/Session/Agent 四层，引入 Service/Feature/Contribution 模型，支持级联销毁和运行时装配。

## 当前使用

kap-server 和 klient 基于 v2；CLI 的很多新能力也走 v2；v1 仍保留用于兼容和 ACP 等场景。

## 迁移证据

`packages/agent-core-v2/docs/` 有 di、service-design、features、permission 等设计文档，说明迁移思路。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core/AGENTS.md`（非 TS 源码，可直接阅读）
  - `packages/agent-core-v2/AGENTS.md`（非 TS 源码，可直接阅读）
  - `packages/agent-core-v2/docs/di.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/agent-core/AGENTS.md`
- `packages/agent-core-v2/AGENTS.md`
- `packages/agent-core-v2/docs/di.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
