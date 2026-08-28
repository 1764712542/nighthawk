# 插件系统

插件是自包含分发包，可携带 skills、MCP servers 和 tools。

## Manifest

`nighthawk.plugin.json` 声明 `kind`、`name`、`version`、`skills`、`mcpServers`、`tools`。

## 来源

本地路径、GitHub 仓库、市场 catalog。

## 信任

不同来源决定信任级别；安装时明示。

## 运行时

`IPluginService` 管理插件生命周期；feature 可 contribute plugin commands。

## 证据与代码位置

- `packages/agent-core/src/plugin/`
- `packages/agent-core-v2/src/app/plugin/`
- `docs/en/customization/plugins.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
