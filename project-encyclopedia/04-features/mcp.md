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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core/src/mcp//` 目录下源码文件示例：
    - `packages/agent-core/src/mcp/auth-tool.ts`
    - `packages/agent-core/src/mcp/client-http.ts`
    - `packages/agent-core/src/mcp/client-remote.ts`
    - `packages/agent-core/src/mcp/client-shared.ts`
    - `packages/agent-core/src/mcp/client-sse.ts`
    - `packages/agent-core/src/mcp/client-stdio.ts`
    - `packages/agent-core/src/mcp/config-loader.ts`
    - `packages/agent-core/src/mcp/config-view.ts`
    - `packages/agent-core/src/mcp/connection-manager.ts`
    - `packages/agent-core/src/mcp/global-config.ts`
    - `packages/agent-core/src/mcp/index.ts`
    - `packages/agent-core/src/mcp/oauth/callback-server.ts`
    - `packages/agent-core/src/mcp/oauth/index.ts`
    - `packages/agent-core/src/mcp/oauth/provider.ts`
    - `packages/agent-core/src/mcp/oauth/service.ts`
    - `packages/agent-core/src/mcp/oauth/store.ts`
    - `packages/agent-core/src/mcp/output.ts`
    - `packages/agent-core/src/mcp/registry.ts`
    - `packages/agent-core/src/mcp/session-config.ts`
    - `packages/agent-core/src/mcp/tool-naming.ts`
  - `docs/interview/mcp.md`（非 TS 源码，可直接阅读）
  - `docs/en/customization/mcp.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/agent-core/src/mcp/`
- `docs/interview/mcp.md`
- `docs/en/customization/mcp.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
