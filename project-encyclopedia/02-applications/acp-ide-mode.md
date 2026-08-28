# ACP 模式

ACP（Agent Client Protocol）让 IDE 通过 JSON-RPC over stdio 直接驱动 NightHawk。

## 入口

`nighthawk acp` 启动 ACP 模式；`packages/acp-adapter` 是 v1 适配器，`packages/acp-server` 是 v2 宿主。

## 协议

基于 Agent Client Protocol SDK，传输 JSON-RPC 消息。

## 能力

会话管理、工具调用、审批、MCP、terminal、file 等。

## 使用场景

IDE 扩展把 NightHawk 作为子进程，实现编辑器内 agent 体验。

## 证据与代码位置

- `apps/nighthawk/src/cli/sub/acp.ts`
- `packages/acp-server/README.md`
- `packages/acp-server/package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
