# Plugin 开发

本指南介绍如何创建 NightHawk 插件。阅读前请先熟悉[插件用户指南](../customization/plugins.md)。

## 插件 Manifest

NightHawk 插件是一个目录，根目录下包含 `nighthawk.plugin.json` manifest 文件。Manifest 声明插件贡献的内容：skills、agents、MCP 服务器、hooks、commands、tools、profiles 和 configSections。

### 最小 manifest

```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "description": "我的第一个 NightHawk 插件"
}
```

`name` 字段必须符合 `/^[a-z0-9][a-z0-9_-]{0,63}$/`，并会被规范化为小写。

### 完整 manifest 参考

```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "description": "提供开发者工具的插件",
  "keywords": ["dev-tools", "productivity"],
  "author": {
    "name": "Your Name",
    "email": "you@example.com"
  },
  "homepage": "https://github.com/you/my-plugin",
  "license": "MIT",
  "interface": {
    "displayName": "My Plugin",
    "shortDescription": "开发者工具插件",
    "longDescription": "为 NightHawk 添加一组开发者工具和 Agent 配置文件。",
    "developerName": "Your Name",
    "websiteURL": "https://github.com/you/my-plugin"
  },
  "skills": "./skills",
  "agents": "./agents",
  "tools": "./tools",
  "profiles": "./profiles",
  "configSections": "./config-sections",
  "commands": "./commands",
  "mcpServers": {
    "my-server": {
      "transport": "stdio",
      "command": "node",
      "args": ["server.js"],
      "enabled": true
    }
  },
  "hooks": [
    {
      "name": "on-session-start",
      "event": "session:start",
      "command": "echo",
      "args": ["plugin loaded"]
    }
  ],
  "sessionStart": {
    "skill": "onboarding"
  },
  "systemPrompt": "你是一个由插件驱动的助手……",
  "systemPromptPath": "./prompt.md",
  "skillInstructions": "Skills 的附加说明"
}
```

## Manifest 字段

### `tools`

一个目录路径（相对于插件根目录，以 `./` 开头），包含插件贡献的工具定义文件。工具会解析为工具文件或目录的绝对路径。

**示例结构：**

```
my-plugin/
  tools/
    database-query.md
    code-review.md
```

**Manifest 声明：**

```json
{
  "tools": "./tools"
}
```

省略时，插件根目录下的 `tools/` 目录**不会**被自动发现——必须显式声明。

### `profiles`

一个目录路径，包含插件贡献的 Agent 配置文件。Profiles 会解析为配置文件的绝对路径。

**示例结构：**

```
my-plugin/
  profiles/
    security-agent.md
    data-analyst.md
```

**Manifest 声明：**

```json
{
  "profiles": "./profiles"
}
```

### `configSections`

一个目录路径，包含插件贡献的配置节定义文件。Config sections 定义可在 `config.toml` 中使用的新配置选项。

**示例结构：**

```
my-plugin/
  config-sections/
    my-feature.json
```

**Manifest 声明：**

```json
{
  "configSections": "./config-sections"
}
```

### `skills`

包含插件贡献的 [Agent Skills](../customization/skills.md) 的目录。省略时，插件根目录下的 `SKILL.md` 会作为回退（单个 skill 包）。

### `agents`

包含插件贡献的 [Agent 配置文件](../customization/agents.md) 的目录。省略时，插件根目录下的 `agents/` 目录会被自动发现。

### `mcpServers`

一个对象，将服务器名称映射到 MCP 服务器配置。每个服务器遵循 [MCP 配置模式](../customization/mcp.md)。

### `hooks`

一个钩子定义数组，用于[事件钩子](../customization/hooks.md)。

### `commands`

一个文件或目录路径，包含斜杠命令的 Markdown 文件。每个文件会成为 TUI 中的一个斜杠命令。

### `sessionStart`

配置一个在会话启动时自动激活的 skill。

### `systemPrompt` / `systemPromptPath`

插件贡献的内联或基于文件的系统提示词指令。

### `skillInstructions`

附加到插件 skills 的额外说明。

## `reloadOne` API

两个 `PluginManager` 实现（v1 和 v2）都提供 `reloadOne(id)` 方法，用于热加载单个插件而无需重启引擎：

```typescript
const updated = await pluginManager.reloadOne('my-plugin');
if (updated !== undefined) {
  console.log(`插件 "${updated.id}" 已成功重新加载。`);
}
```

这会重新解析 manifest 并更新内存中的记录。该方法在以下两个类中均可使用：

- `packages/agent-core/src/plugin/manager.ts:PluginManager`
- `packages/agent-core-v2/src/app/plugin/manager.ts:PluginManager`

## 插件 API 方法

`PluginManager` 提供以下方法用于访问插件贡献的资源：

| 方法 | 返回类型 | 说明 |
| --- | --- | --- |
| `pluginToolRoots()` | `string[]` | 已启用插件的工具目录 |
| `pluginProfileRoots()` | `string[]` | 已启用插件的配置文件目录 |
| `pluginConfigSectionRoots()` | `string[]` | 已启用插件的配置节目录 |
| `pluginSkillRoots()` | `SkillRoot[]` | 已启用插件的 skill 目录 |
| `pluginAgentRoots()` | `AgentFileRoot[]` | 已启用插件的 agent 目录 |
| `enabledSessionStarts()` | `EnabledPluginSessionStart[]` | 已启用插件的会话启动 skill |
| `enabledSystemPrompts()` | `EnabledPluginSystemPrompt[]` | 已启用插件的系统提示词 |
| `enabledCommands()` | `PluginCommandDef[]` | 已启用插件的斜杠命令 |
| `enabledMcpServers()` | `Record<string, McpServerConfig>` | 已启用插件的 MCP 服务器 |
| `enabledHooks()` | `HookDef[]` | 已启用插件的事件钩子 |
| `reload()` | `ReloadSummary` | 从磁盘重新加载所有插件 |
| `reloadOne(id)` | `PluginRecord \| undefined` | 热加载单个插件 |

## 测试你的插件

创建具有上述结构的测试插件目录，然后安装它：

```sh
nighthawk /plugins install /path/to/your-plugin
```

或者在测试中以编程方式操作：

```typescript
const manager = new PluginManager({ nighthawkHomeDir: '/tmp/nighthawk-test' });
await manager.install('/path/to/your-plugin');
const tools = manager.pluginToolRoots();
```

## 插件生命周期

1. **安装**：插件目录被复制到托管插件目录（`$NIGHTHAWK_HOME/plugins/managed/<id>`）。解析并验证 manifest。
2. **加载**：启动时，`PluginManager.load()` 读取已安装插件文件并实例化每个插件记录。
3. **启用/禁用**：插件可以切换启用状态而无需卸载。禁用的插件仍会加载 manifest，但其资源不会包含在活动集合中。
4. **重新加载**：`reload()` 从磁盘重新读取所有 manifest。`reloadOne(id)` 重新读取单个 manifest。
5. **移除**：插件从托管列表中移除。目录会保留以便重新安装。

## 兼容性

- **v1 引擎**（`packages/agent-core`）：旧版插件系统。`tools`、`profiles` 和 `configSections` 字段会被解析并存储在 manifest 中，但其消费延迟到集成层。
- **v2 引擎**（`packages/agent-core-v2`）：当前插件系统。相同字段被解析并通过 `IPluginService` 接口暴露。
