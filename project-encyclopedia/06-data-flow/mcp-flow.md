# MCP 数据流

MCP server 从配置发现到工具调用和 OAuth 的流程。

## 发现

mcp.json 分层（global/project/plugin/caller/session overlay）→ `McpConnectionManager` 建立连接。

## 注册

MCP 工具以 `mcp__<server>__<tool>` 注册进 tool registry。

## 调用

工具执行时通过 MCP client 发 JSON-RPC 请求到 server，取回结果。

## 认证

需要 OAuth 时进入 `needs-auth` 状态机，PKCE 回调后保存 token。

## 证据与代码位置

- `packages/agent-core/src/mcp/`
- `packages/agent-core-v2/src/agent/mcp/`
- `packages/agent-core-v2/src/mcpCore/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
