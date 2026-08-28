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

## 逐函数实现说明

以下按源码文件列出可验证的导出函数/类，并给出实现职责说明。

### apps/nighthawk/src/cli/sub/acp.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerAcpCommand` | 34 | `export function registerAcpCommand(parent: Command): void {` | `registerAcpCommand` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

### 来自 `apps/nighthawk/src/cli/sub/acp.ts` 的 `registerAcpCommand`

源码位置：`apps/nighthawk/src/cli/sub/acp.ts:34` 附近。

```ts
export function registerAcpCommand(parent: Command): void {
  if (!isLegacyEnabled()) {
    registerNativeAcpCommand(parent);
    return;
  }

  parent
    .command('acp')
    .description('Run nighthawk as an Agent Client Protocol (ACP) server over stdio.')
    .action(async () => {
      const identity = createNighthawkHostIdentity();
      const harness = createNighthawkHarness({
        identity,
        uiMode: 'acp',
      });
      const builtinCommands: AvailableCommand[] = (ACP_BUILTIN_SLASH_COMMANDS as readonly AvailableCommand[]).map((cmd) => ({
        name: cmd.name,
        description: cmd.description,
        input: cmd.input,
      }));
      // Skills are session-scoped (per-cwd config), so we defer the
      // listSkills() call until the adapter hands us the just-created
      // Session — mirrors opencode's per-directory snapshot. A
      // listSkills() failure degrades to builtins-only so a broken
// ...
```


## 时序/状态图

```mermaid
flowchart LR
    A[入口/调用方] --> B[本文核心模块]
    B --> C[依赖服务/数据层]
    C --> D[输出/事件/持久化]
```

> 图注：`02-applications/acp-ide-mode.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

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
