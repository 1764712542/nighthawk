# 与市面 Coding Agent 的差异总览

NightHawk 与 Codex、Claude Code、Cursor 等的主要差异在于安全原生、终端优先、开放协议和多层扩展。

## 定位差异

多数 coding agent 是“帮你写代码”，NightHawk 同时是“帮你审计和攻破代码”的安全工作台。

## 架构差异

NightHawk 是 TypeScript monorepo + 自研 DI×Scope 引擎 + 开放 REST/WS/SDK；闭源产品通常不公开内部。

## 扩展差异

NightHawk 同时兼容 MCP、SKILL.md、插件 manifest 和 OpenAI function schema，而不是锁定单一插件格式。

## 部署差异

NightHawk 可本地 SEA 单文件、npm 包、server/Web、VS Code 扩展多种形态。

## 证据与代码位置

- `README.zh-CN.md`
- `docs/architecture/plugin-and-extension-design.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
