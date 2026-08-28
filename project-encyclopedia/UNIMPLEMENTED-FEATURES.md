# NightHawk 未实现/未完整实现功能清单

> 本文通过遍历仓库生产源码、SDK 迁移层、ACP 适配层、TUI 与文档，整理当前 coding agent 尚未实现、部分实现、实验性默认关闭或预留未做的功能。所有条目均附代码位置，可自行验证。

## A. 明确未实现（代码抛错 / no-op stub）

### 1. MCP stdio 自定义 executor（非 `local`）未实现
- 现象：配置 MCP stdio server 时如果指定 `executor` 且不是 `local`，启动直接抛 `NOT_IMPLEMENTED`。
- 代码位置：
  - `packages/agent-core-v2/src/mcpCore/client-stdio.ts:55`
  - `packages/agent-core/src/mcp/client-stdio.ts:63`
- 影响：目前只能通过本机 `local` 启动 MCP stdio 子进程，无法接入自定义 executor / 远程执行器。

### 2. SSHKaos 远程环境变量探测未实现
- 现象：`SSHKaos.osEnv` 直接抛错。
- 代码位置：`packages/kaos/src/ssh.ts:448`
- 影响：通过 SSH 使用 Kaos 时，无法读取远程 `osEnv`；远程环境探测是预留 stub。

### 3. MiniDb 跨分片两阶段提交（2PC）未实现
- 现象：`crossShard: '2pc'` 直接抛错，仅 `best-effort` / `none` 可用。
- 代码位置：
  - `packages/minidb/src/cluster/index.ts:84`
  - `packages/minidb/src/cluster/coordinator.ts:26`
- 影响：ClusterDb 尚不支持严格跨分片原子提交。

### 4. ACP `extMethod` / `extNotification` 扩展面是 no-op stub
- 现象：ACP 客户端调用扩展方法会得到 `MethodNotFound`。
- 代码位置：`packages/acp-adapter/src/server.ts:804-835`
- 影响：slash-command bridge / model-list / mode-list 等 ACP 扩展尚未接入 nighthawk registry。

### 5. ACP `type: 'acp'` 的 MCP server 传输不支持
- 现象：来自 ACP 的 MCP server 若为 `acp` transport 会被 `log.warn` 丢弃。
- 代码位置：
  - `packages/acp-adapter/src/mcp.ts:16`
  - `packages/acp-server/src/convert.ts:169`
- 影响：无法通过 ACP 使用基于 ACP transport 的 MCP server。

### 6. v2 引擎的 `setPentestMode` 未实现
- 现象：v2 SDK 客户端调用 `setPentestMode` 会抛 `NOT_IMPLEMENTED`。
- 代码位置：`packages/node-sdk/src/sdk-rpc-client-v2.ts:2104-2110`
- 影响：只有 v1 引擎支持通过 SDK 切换渗透测试模式；v2 尚未实现。

### 7. TUI Agent 分组后无法取消分组
- 现象：多个 Agent 工具调用被渲染成组后，没有 ungroup 能力。
- 代码位置：`apps/nighthawk/src/tui/components/messages/agent-group.ts:15`
- 影响：用户无法在 TUI 中把已合并的 Agent 组重新拆开。

### 8. 旧版 CLI 插件迁移不支持
- 现象：`nighthawk migrate` 遇到 legacy CLI plugins 时提示“not yet supported for migration”。
- 代码位置：`apps/nighthawk/src/migration/migration-screen.ts:324`
- 影响：迁移工具不会迁移旧版 CLI 插件。

## B. 部分实现 / 降级

### 1. ACP AskUserQuestion 多问题/多选降级
- 现象：ACP `request_permission` bridge 当前只处理单问题；`questionIndex` 始终为 `0`；`multiSelect` 的 “Other” 自由文本在 ACP 侧不支持。
- 代码位置：
  - `packages/acp-adapter/src/question.ts:32-42`
  - `packages/acp-server/src/question.ts:125`
- 影响：通过 ACP 使用 `AskUserQuestion` 时，多问题会降级为单问题；部分选项语义不完整。

### 2. ACP `plan_removed` 延迟实现
- 现象：TodoList 清空时不会向 ACP 客户端发送 `plan_removed`。
- 代码位置：`packages/acp-adapter/src/events-map.ts:414`
- 影响：ACP 客户端无法感知计划被清空。

### 3. TodoList 没有优先级轴
- 现象：映射到 ACP plan 时 `priority` 固定为 `'medium'`。
- 代码位置：`packages/acp-adapter/src/events-map.ts:404`
- 影响：ACP 侧无法展示 nighthawk todo 的优先级（因为 nighthawk todo 本身暂无优先级字段）。

### 4. v2 BTW fork 行为与 v1 有差异
- 现象：v2 总是 fork main agent，且 child 是持久化 agent；v1 可 fork `interactiveAgentId`，child 是内存态。
- 代码位置：`packages/node-sdk/src/sdk-rpc-client-v2.ts:2038-2048`
- 影响：依赖 v1 BTW 语义的宿主可能观察到差异。

### 5. v2 Goal 不支持非 main agent
- 现象：v2 对非 main agent 执行 goal 命令会 `goal.unsupported_agent`。
- 代码位置：`packages/node-sdk/src/sdk-rpc-client-v2.ts:2128`
- 影响：v1 每个 agent 都有 GoalMode，v2 仅 main agent 支持 goal。

### 6. v2 忽略 `createSessionWithKaos` / `resumeSessionWithKaos` 的 kaos 注入
- 现象：v2 没有 kaos 注入点，传入的 kaos 参数会被忽略，退化为本地执行。
- 代码位置：`packages/node-sdk/src/sdk-rpc-client-v2.ts:848-858`
- 影响：依赖自定义 Kaos 执行环境的宿主在 v2 下无法注入远程/自定义文件系统。

### 7. v1 若干能力在 v2 没有独立服务，由 SDK 适配层重建
- 例子：`getSessionWarnings`、`listWorkspaceSkills`、print policy。
- 代码位置：
  - `packages/node-sdk/src/sdk-rpc-client-v2.ts:603-621`
  - `packages/node-sdk/src/sdk-rpc-client-v2.ts:2004-2020`
  - `packages/node-sdk/src/sdk-rpc-client-v2.ts:2271-2300`
- 影响：不是用户功能缺失，但 v2 服务层未聚合这些能力，维护成本在客户端。

## C. 实验性 / 默认关闭（代码已实现，但未默认开放）

| 功能 | Flag | 默认 | 位置 |
| --- | --- | --- | --- |
| Tool select（渐进式工具披露） | `tool-select` | false | `packages/agent-core-v2/src/agent/toolSelect/flag.ts` |
| Secondary model for subagents | `secondary-model` | false | `packages/agent-core-v2/src/session/subagent/flag.ts` |
| Subagent fork context | `subagent_fork` | false | `packages/agent-core-v2/src/session/subagent/flag.ts` |
| AI session titles | `auto_session_title` | false | `packages/agent-core-v2/src/session/sessionTitle/flag.ts` |
| Tower mode | `tower` | false | `packages/agent-core-v2/src/features/tower/flag.ts` |
| v1 Tool select | `tool-select` | false | `packages/agent-core/src/flags/registry.ts` |
| v1 Secondary model | `secondary-model` | false | `packages/agent-core/src/flags/registry.ts` |
| Micro compaction | 已禁用/移除 | — | `packages/agent-core/src/flags/registry.ts` 注释保留 |

默认开启但属于实验性可回退的功能：
- `search_worker`（默认 ON）：`packages/kap-server/src/search/searchService.ts:86`
- `persistence_minidb_readmodel`（默认 ON）：`packages/agent-core-v2/src/persistence/backends/minidb/flag.ts`

## D. 设计保留 / 未来预留

- MiniDb `crossShard: '2pc'` 为未来 release 保留。
- ACP `extMethod` / `extNotification` 为未来 PLAN D9 扩展入口。
- `event.di.*` debug feed 目前只允许 `client_id: 'nighthawk-inspect'` 的连接，属于临时 gate，未来会做客户端声明式事件白名单。
  - 证据：`packages/kap-server/AGENTS.md` 中 “a temporary gate until a client-declared event whitelist exists”。
- 部分平台不支持某些能力，例如 `nighthawk-webbridge` 仅在 darwin/linux/win32 的常见架构有二进制；这不是“未实现”，而是平台限制。
  - 证据：`packages/agent-core-v2/src/app/capability/entries/nighthawkWebbridge.ts:198`

## 验证命令

```sh
# 查看生产源码中的未实现标记
grep -R "not implemented\|not yet implemented\|NotImplementedError\|no-op stub" -n \
  packages/*/src apps/*/src --include='*.ts' --include='*.tsx' \
  | grep -v node_modules | grep -v dist | grep -v test
```

> 本文是快照式报告，基于当前 `HEAD` 与工作区源码。后续代码更新后应以实际源码为准。

## 证据与代码位置

- `packages/agent-core-v2/src/mcpCore/client-stdio.ts`
- `packages/agent-core/src/mcp/client-stdio.ts`
- `packages/kaos/src/ssh.ts`
- `packages/minidb/src/cluster/index.ts`
- `packages/minidb/src/cluster/coordinator.ts`
- `packages/acp-adapter/src/server.ts`
- `packages/acp-adapter/src/mcp.ts`
- `packages/acp-server/src/convert.ts`
- `packages/node-sdk/src/sdk-rpc-client-v2.ts`
- `apps/nighthawk/src/tui/components/messages/agent-group.ts`
- `apps/nighthawk/src/migration/migration-screen.ts`
- `packages/acp-adapter/src/question.ts`
- `packages/acp-adapter/src/events-map.ts`
- `packages/agent-core/src/flags/registry.ts`
- `packages/agent-core-v2/src/features/tower/flag.ts`
- `packages/agent-core-v2/src/session/subagent/flag.ts`
- `packages/agent-core-v2/src/session/sessionTitle/flag.ts`
- `packages/kap-server/src/search/searchService.ts`
- `packages/agent-core-v2/src/app/capability/entries/nighthawkWebbridge.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。

