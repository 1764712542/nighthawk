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

## 专业实现要点（开发流程视角）

### 需求分析

数据流文档要回答“一个请求从哪里来、经过哪些服务、最终写到哪里”。

### 设计决策

用事件驱动解耦引擎与 UI；用 transcript 记录可重放状态；用 minidb read model 加速查询。

### 实现步骤

识别入口 API → 跟踪 service 调用链 → 标注持久化点 → 标注事件/WS 推送。

### 验证方式

通过 e2e、klient conformance suite、WS 订阅测试验证链路。

### 维护注意

异步链路要处理取消、重试、幂等；持久化要保证崩溃安全。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

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
    - `packages/agent-core/src/mcp/types.ts`
  - `packages/agent-core-v2/src/agent/mcp//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/agent/mcp/mcp.ts`
    - `packages/agent-core-v2/src/agent/mcp/mcpDiscoveryOps.ts`
    - `packages/agent-core-v2/src/agent/mcp/mcpEvents.ts`
    - `packages/agent-core-v2/src/agent/mcp/mcpService.ts`
    - `packages/agent-core-v2/src/agent/mcp/output.ts`
    - `packages/agent-core-v2/src/agent/mcp/tools/auth.ts`
    - `packages/agent-core-v2/src/agent/mcp/tools/mcp.ts`
  - `packages/agent-core-v2/src/mcpCore//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/mcpCore/client-http.ts`
    - `packages/agent-core-v2/src/mcpCore/client-remote.ts`
    - `packages/agent-core-v2/src/mcpCore/client-shared.ts`
    - `packages/agent-core-v2/src/mcpCore/client-sse.ts`
    - `packages/agent-core-v2/src/mcpCore/client-stdio.ts`
    - `packages/agent-core-v2/src/mcpCore/config-schema.ts`
    - `packages/agent-core-v2/src/mcpCore/configView.ts`
    - `packages/agent-core-v2/src/mcpCore/connection-manager.ts`
    - `packages/agent-core-v2/src/mcpCore/errors.ts`
    - `packages/agent-core-v2/src/mcpCore/oauth/callback-server.ts`
    - `packages/agent-core-v2/src/mcpCore/oauth/provider.ts`
    - `packages/agent-core-v2/src/mcpCore/oauth/service.ts`
    - `packages/agent-core-v2/src/mcpCore/oauth/store.ts`
    - `packages/agent-core-v2/src/mcpCore/tool-naming.ts`
    - `packages/agent-core-v2/src/mcpCore/types.ts`

## 证据与代码位置

- `packages/agent-core/src/mcp/`
- `packages/agent-core-v2/src/agent/mcp/`
- `packages/agent-core-v2/src/mcpCore/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
