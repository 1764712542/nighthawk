# MCP (Model Context Protocol) 客户端子系统 — 面试深挖指南

> 对应源码：`packages/agent-core/src/mcp/connection-manager.ts`、`packages/agent-core-v2/src/agent/mcp/`

## 一句话定位

MCP 子系统把任意外部服务器的能力（工具/资源）**动态转译为 agent 工具注册表里的一等公民**——带审批规则、超时控制和断线重连，外部生态因此成为 agent 能力的插件机制。

## 架构与数据流

```
mcp.json / config.toml [mcp]
   │  McpConnectionManager（Session 级生命周期）
   │  按 transport 创建 client：stdio / sse / http
   ▼
connectAndDiscoverTools() → 状态机：connected / needs-auth / failed
   │  mcpService（v2）把 connected server 的工具注册进 tool registry
   ▼
createMcpTool() 包装为 ExecutableTool
   │  带 approvalRule、参数透传、结果规范化、失败重连
   ▼
模型像调用内置工具一样调用 mcp__<server>__<tool>
```

## 关键实现细节

### 1. 连接管理（`connection-manager.ts`）

- **Session 作用域**：每个 agent session 持有独立的 `McpConnectionManager`，server 生命周期与会话对齐，不泄漏到全局。
- **状态机驱动 TUI**：`connected / needs-auth / failed` 状态变化通过 wire events 推给终端 UI，用户实时看到每个 server 的健康度。
- **传输抽象**：`config.transport` 显式指定，否则按配置字段推断（有 command → stdio，有 url → http/sse）。

### 2. 工具转译（`agent-core-v2/src/agent/mcp/tools/mcp.ts`）

`createMcpTool()` 是核心适配层：

- MCP tool schema → agent `ExecutableTool` 的参数透传映射
- 每个工具绑定 `approvalRule` —— **MCP 工具调用走与内置工具同一套审批流**，这是安全叙事的关键：外部能力不绕过权限体系
- 工具名冲突处理：多个 server 出现同名工具时的命名空间隔离（`mcp__<server>__<tool>`）
- `enabledTools / disabledTools` 白名单过滤

### 3. 容错：调用失败后的重连（L63-L115）

MCP tool 调用失败时：判断错误是否可恢复 → 探测 server liveness → 重连 → 重放调用。外部进程崩溃不应导致整个 session 报废。

### 4. 对话式配置（`src/skill/builtin/mcp-config.md`）

`/mcp-config` 本身是一个 `disableModelInvocation` 的内置 skill：用户用自然语言说"帮我加一个 GitHub MCP server"，agent 读取该 skill 的指令后生成/编辑 `mcp.json`，触发 reload。**把配置文件操作编码成 skill 指令**而不是写死的配置 UI 代码，是"用 agent 的机制解决 agent 自己的问题"的典型案例。

### 5. 认证流

Server 未登录时注册 `mcp__<server>__authenticate` 工具，agent 引导用户走授权 URL，登录完成后 server 转为 connected 并重新发现工具。

## 面试高频追问

**Q: MCP 工具和内置工具的安全性差异？**
A: 没有差异——都过同一个 `approvalRule` 审批门。这是设计上的刻意选择：外部能力的攻击面更大（供应链风险），所以更不能给它绕过权限体系的快捷方式。可延伸讲 per-tool 审批粒度 vs per-server 信任级别。

**Q: stdio 和 http 传输各适用什么场景？**
A: stdio 适合本地进程（低延迟、无网络暴露、凭据留在本机）；http/sse 适合远程共享 server（团队共用一套凭据和状态）。推断规则让用户少写一个字段，但显式声明永远优先。

**Q: server 挂了怎么办？**
A: 分层容错——单次调用失败先判断可恢复性，liveness 探测 + 重连 + 重放；重连失败则该 server 工具从 registry 摘除，session 继续跑其余工具。崩溃隔离在 server 粒度。

**Q: 工具太多会不会撑爆上下文？**
A: 工具 schema 全量注入确实是大工具生态的痛点。可讲的方向：分组披露（先注册工具摘要、调用前再展开 schema）、server 级启用开关、以及按会话相关性做工具路由。

**Q: 为什么 MCP 值得做，而不是直接为每个外部系统写适配器？**
A: MCP 把"N 个 agent × M 个外部系统"的适配矩阵从 N×M 降到 N+M——agent 实现一次协议，生态侧各自实现 server。这是标准协议的经典网络效应论证。
