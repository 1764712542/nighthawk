# 常见问题

回答 NightHawk 是什么、和扫描器有什么区别、v1/v2 是什么、如何扩展等高频问题。

## NightHawk 是扫描器吗？

不是。扫描器是它的一部分，但它本身是完整 coding agent，能读、改、跑、审计、修复。

## v1 和 v2 引擎区别？

v1 是 `packages/agent-core` 的统一引擎，包含 Agent/Session/profile/skills/安全工具；v2 是 `packages/agent-core-v2`，基于 DI×Scope 的 App/Workspace/Session/Agent 四层生命周期。当前服务端和 CLI 新能力主要走 v2。

## 如何扩展？

通过 MCP server、SKILL.md、插件 manifest、OpenAI 风格工具 schema 都能进入统一 tool registry。

## 是否只能在终端用？

不是。有 VS Code 扩展、REST/WS 服务端、Web inspector、可视化工具；但终端是主力形态。

## 证据与代码位置

- `README.zh-CN.md`
- `docs/architecture/plugin-and-extension-design.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
