# MCP 配置参考

如何配置 stdio/HTTP/SSE MCP server，如何 OAuth。

## 配置层

global mcp.json、project mcp.json、plugin manifest、caller/session overlay。

## 命令

`/mcp-config` 对话式添加/编辑/认证。

## 工具前缀

`mcp__<server>__<tool>`。

## 安全

项目级 MCP 在 workspace untrusted 时跳过。

## 证据与代码位置

- `packages/agent-core/src/mcp/`
- `docs/en/customization/mcp.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
