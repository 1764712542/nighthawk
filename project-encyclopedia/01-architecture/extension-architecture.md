# 扩展架构

MCP、Skill、Plugin、Tool Schema 四条扩展路径最终都进入统一 tool registry。

## 统一内部表示

工具定义采用 OpenAI function calling JSON Schema 作为交换格式，内部转为 `AgentTool`。

## MCP

`McpConnectionManager` 管理 stdio/http/sse server；工具命名 `mcp__<server>__<tool>`。

## Skill

Markdown + frontmatter 的 playbook，按项目/用户/plugin/builtin 多层发现。

## Plugin

包含 manifest 的分发包，可携带 skills、mcpServers、tools。

## 证据与代码位置

- `docs/architecture/plugin-and-extension-design.md`
- `packages/agent-core/src/mcp/`
- `packages/agent-core-v2/src/agent/plugin/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
