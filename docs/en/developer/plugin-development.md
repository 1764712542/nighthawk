# Plugin Development

This guide covers how to create a NightHawk plugin. It assumes you are already familiar with the [plugins](../customization/plugins.md) user guide.

## Plugin Manifest

A NightHawk plugin is a directory with a `nighthawk.plugin.json` manifest at the root. The manifest declares what the plugin contributes: skills, agents, MCP servers, hooks, commands, tools, profiles, and config sections.

### Minimal manifest

```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "description": "My first NightHawk plugin"
}
```

The `name` field must match `/^[a-z0-9][a-z0-9_-]{0,63}$/` and is normalized to lowercase.

### Full manifest reference

```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "description": "A plugin that adds developer tools",
  "keywords": ["dev-tools", "productivity"],
  "author": {
    "name": "Your Name",
    "email": "you@example.com"
  },
  "homepage": "https://github.com/you/my-plugin",
  "license": "MIT",
  "interface": {
    "displayName": "My Plugin",
    "shortDescription": "Developer tools plugin",
    "longDescription": "Adds a set of developer tools and agent profiles to NightHawk.",
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
  "systemPrompt": "You are a plugin-powered assistant...",
  "systemPromptPath": "./prompt.md",
  "skillInstructions": "Additional instructions for skills"
}
```

## Manifest Fields

### `tools`

A directory path (relative to the plugin root, starting with `./`) containing tool definition files contributed by the plugin. Tools are resolved as absolute paths to tool files or directories.

**Example structure:**

```
my-plugin/
  tools/
    database-query.md
    code-review.md
```

**Manifest declaration:**

```json
{
  "tools": "./tools"
}
```

When omitted, the `tools/` directory under the plugin root is **not** automatically picked up — you must declare it explicitly.

### `profiles`

A directory path containing agent profile files contributed by the plugin. Profiles are resolved as absolute paths to profile files.

**Example structure:**

```
my-plugin/
  profiles/
    security-agent.md
    data-analyst.md
```

**Manifest declaration:**

```json
{
  "profiles": "./profiles"
}
```

### `configSections`

A directory path containing config section definition files contributed by the plugin. Config sections define new configuration options that can be used in `config.toml`.

**Example structure:**

```
my-plugin/
  config-sections/
    my-feature.json
```

**Manifest declaration:**

```json
{
  "configSections": "./config-sections"
}
```

### `skills`

A directory containing [Agent Skills](../customization/skills.md) contributed by the plugin. When omitted, the plugin root's `SKILL.md` is used as a fallback (single skill bundle).

### `agents`

A directory containing [agent profiles](../customization/agents.md) contributed by the plugin. When omitted, the `agents/` directory under the plugin root is picked up automatically.

### `mcpServers`

An object mapping server names to MCP server configurations. Each server follows the [MCP configuration schema](../customization/mcp.md).

### `hooks`

An array of hook definitions for [event hooks](../customization/hooks.md).

### `commands`

A file or directory path containing slash command markdown files. Each file becomes a slash command available in the TUI.

### `sessionStart`

Configures a skill to be automatically activated on session start.

### `systemPrompt` / `systemPromptPath`

Inline or file-based system prompt instructions contributed by the plugin.

### `skillInstructions`

Additional instructions attached to the plugin's skills.

## The `reloadOne` API

Both `PluginManager` implementations (v1 and v2) expose a `reloadOne(id)` method for hot-reloading a single plugin without restarting the engine:

```typescript
const updated = await pluginManager.reloadOne('my-plugin');
if (updated !== undefined) {
  console.log(`Plugin "${updated.id}" reloaded successfully.`);
}
```

This re-parses the manifest and updates the in-memory record. The method is available on both:

- `packages/agent-core/src/plugin/manager.ts:PluginManager`
- `packages/agent-core-v2/src/app/plugin/manager.ts:PluginManager`

## Plugin API Methods

The `PluginManager` provides the following methods for accessing plugin-contributed resources:

| Method | Returns | Description |
| --- | --- | --- |
| `pluginToolRoots()` | `string[]` | Tool directories from enabled plugins |
| `pluginProfileRoots()` | `string[]` | Profile directories from enabled plugins |
| `pluginConfigSectionRoots()` | `string[]` | Config section directories from enabled plugins |
| `pluginSkillRoots()` | `SkillRoot[]` | Skill directories from enabled plugins |
| `pluginAgentRoots()` | `AgentFileRoot[]` | Agent directories from enabled plugins |
| `enabledSessionStarts()` | `EnabledPluginSessionStart[]` | Session start skills from enabled plugins |
| `enabledSystemPrompts()` | `EnabledPluginSystemPrompt[]` | System prompts from enabled plugins |
| `enabledCommands()` | `PluginCommandDef[]` | Slash commands from enabled plugins |
| `enabledMcpServers()` | `Record<string, McpServerConfig>` | MCP servers from enabled plugins |
| `enabledHooks()` | `HookDef[]` | Event hooks from enabled plugins |
| `reload()` | `ReloadSummary` | Reload all plugins from disk |
| `reloadOne(id)` | `PluginRecord \| undefined` | Hot-reload a single plugin |

## Testing Your Plugin

Create a test plugin directory with the structure described above, then install it:

```sh
nighthawk /plugins install /path/to/your-plugin
```

Or programmatically in tests:

```typescript
const manager = new PluginManager({ nighthawkHomeDir: '/tmp/nighthawk-test' });
await manager.install('/path/to/your-plugin');
const tools = manager.pluginToolRoots();
```

## Plugin Lifecycle

1. **Install**: The plugin directory is copied to the managed plugins directory (`$NIGHTHAWK_HOME/plugins/managed/<id>`). The manifest is parsed and validated.
2. **Load**: On startup, `PluginManager.load()` reads the installed plugins file and materializes each plugin record.
3. **Enable/Disable**: Plugins can be toggled without uninstalling. Disabled plugins still have their manifest loaded but their resources are excluded from the active set.
4. **Reload**: `reload()` re-reads all manifests from disk. `reloadOne(id)` re-reads a single manifest.
5. **Remove**: The plugin is removed from the managed list. The directory is kept for reinstallation.

## Compatibility

- **v1 engine** (`packages/agent-core`): The legacy plugin system. The `tools`, `profiles`, and `configSections` fields are parsed and stored in the manifest but their consumption is deferred to the integration layer.
- **v2 engine** (`packages/agent-core-v2`): The current plugin system. The same fields are parsed and exposed through the `IPluginService` interface.

## Marketplace Submission Guide

NightHawk's plugin marketplace is managed through `plugins/marketplace.json`, which contains official and curated plugins. If you want to submit your plugin to the marketplace, follow the guidelines below.

### Marketplace Entry Format

Each plugin entry in the marketplace contains the following fields:

```json
{
  "id": "your-plugin-id",
  "tier": "curated",
  "displayName": "Your Plugin",
  "version": "1.0.0",
  "description": "A short description of what your plugin does.",
  "keywords": ["keyword1", "keyword2"],
  "homepage": "https://github.com/you/your-plugin",
  "source": "https://github.com/you/your-plugin"
}
```

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier, must match `/^[a-z0-9][a-z0-9_-]{0,63}$/` |
| `tier` | `string` | Tier: `official`, `curated`, or `community` |
| `displayName` | `string` | Display name |
| `version` | `string` | Semantic version |
| `description` | `string` | Short description (1-2 sentences recommended) |
| `keywords` | `string[]` | Search keywords |
| `homepage` | `string` | Project homepage URL |
| `source` | `string` | Plugin source (GitHub URL or local path) |

### Submission Requirements

1. **Plugin must be functional** — verify that the plugin installs and works correctly before submitting.
2. **Valid manifest** — the plugin root must contain a valid `nighthawk.plugin.json`.
3. **Open source preferred** — hosting on GitHub is recommended for community review and contributions.
4. **Naming convention** — the `id` must be globally unique and not conflict with existing plugins.
5. **Clear description** — the `description` should accurately describe the plugin's functionality, avoiding marketing language.

### Submission Process

1. Complete your plugin, ensuring it includes a `nighthawk.plugin.json` manifest.
2. Publish the plugin repository on GitHub.
3. Submit a Pull Request to the [NightHawk repository](https://github.com/AliceGoto/nighthawk) modifying `plugins/marketplace.json` to add your plugin entry.
4. Once the PR is reviewed and merged, the plugin will appear in the marketplace listing.

### TypeScript SDK

Plugin developers can use the `@nighthawk/plugin-sdk` package for TypeScript type support:

```bash
npm install --save-dev @nighthawk/plugin-sdk
```

```typescript
import type { PluginManifest } from '@nighthawk/plugin-sdk';

const manifest: PluginManifest = {
  name: 'my-plugin',
  version: '1.0.0',
  description: 'My plugin',
  interface: {
    displayName: 'My Plugin',
    shortDescription: 'A useful plugin',
    developerName: 'Your Name',
  },
};
```

The SDK provides types such as `PluginManifest`, `McpServerConfig`, `HookDefConfig`, and `PluginInterface` to give you IDE autocompletion and type checking during development.
