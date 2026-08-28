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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `apps/nighthawk/src/cli/sub/acp.ts` 导出：
    - 符号：`registerAcpCommand`
  - `packages/acp-server/README.md`（路径不存在，请以仓库实际文件为准）
  - `packages/acp-server/package.json`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `apps/nighthawk/src/cli/sub/acp.ts`
- `packages/acp-server/README.md`
- `packages/acp-server/package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
