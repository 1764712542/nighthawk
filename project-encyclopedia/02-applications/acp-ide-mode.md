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

## 专业实现要点（开发流程视角）

### 需求分析

应用层要把引擎能力包装成用户可操作的产品：CLI 参数、TUI 交互、IDE 集成、Web 访问。

### 设计决策

应用层不直接 import 内核，通过 SDK/RPC 通信；TUI 使用 pi-tui 组件化渲染。

### 实现步骤

CLI 解析参数 → 创建 Harness/SDK 客户端 → 进入 TUI 或 headless；TUI 通过 reverse-rpc 桥接审批/提问。

### 验证方式

使用 `pnpm -C apps/nighthawk test`、`pnpm -C apps/nighthawk run smoke` 和 e2e。

### 维护注意

TUI 组件不得直接读写 session 状态；启动路径必须遵守 workspace trust。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `apps/nighthawk/src/cli/sub/acp.ts`：
    - 导出签名/声明：
      - `export function registerAcpCommand(parent: Command): void`
  - `packages/acp-server/README.md`（路径不存在，请以仓库实际文件为准）
  - `packages/acp-server/package.json`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `apps/nighthawk/src/cli/sub/acp.ts`
- `packages/acp-server/README.md`
- `packages/acp-server/package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
