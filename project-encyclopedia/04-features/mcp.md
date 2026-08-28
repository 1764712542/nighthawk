# MCP 支持

NightHawk 原生支持 Model Context Protocol，可接入任意 MCP server。

## 传输

支持 stdio、HTTP、SSE；`McpConnectionManager` 管理连接。

## 工具命名

MCP 工具以 `mcp__<server>__<tool>` 注册，避免命名冲突。

## 配置

`/mcp-config` 对话式管理；mcp.json 分层（global/plugin/caller/session overlay）。

## 认证

MCP OAuth 流程支持 PKCE、回调 server、token store。

## 证据与代码位置

- `packages/agent-core/src/mcp/`
- `docs/interview/mcp.md`
- `docs/en/customization/mcp.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
