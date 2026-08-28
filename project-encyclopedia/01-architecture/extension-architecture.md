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

## 专业实现要点（开发流程视角）

### 需求分析

架构要支撑多会话、多 agent、可扩展工具、可观测 DI、持久化和安全边界。

### 设计决策

使用四层 Scope 表达状态生命周期；用 Service/Feature/Contribution 替代中心化注册表；用事件和 veto 解耦模块。

### 实现步骤

先实现 `_base/di` 与 `_base/lifecycle`，再建立 App/Workspace/Session/Agent scope，最后把领域能力实现为 Feature。

### 验证方式

通过 `packages/agent-core-v2/test/` 的 scope host 测试、DI 级联测试和 nighthawk-inspect 的可视化验证。

### 维护注意

遵循依赖方向：子 scope 依赖父 scope；App 服务不得持有 session 级 Map 状态。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `docs/architecture/plugin-and-extension-design.md`（非 TS 源码，可直接阅读）
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
  - `packages/agent-core-v2/src/agent/plugin//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/agent/plugin/agentPlugin.ts`
    - `packages/agent-core-v2/src/agent/plugin/agentPluginOps.ts`
    - `packages/agent-core-v2/src/agent/plugin/agentPluginService.ts`
    - `packages/agent-core-v2/src/agent/plugin/index.ts`

## 证据与代码位置

- `docs/architecture/plugin-and-extension-design.md`
- `packages/agent-core/src/mcp/`
- `packages/agent-core-v2/src/agent/plugin/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
