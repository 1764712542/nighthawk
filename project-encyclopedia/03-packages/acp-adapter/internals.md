# acp-adapter 内部实现

本页说明 packages/acp-adapter 的关键内部模块与设计思路，源码引用以文件列表为准。

## 关键模块

从源码树可以看到以下模块：`src/log-guard.ts`, `src/config-options.ts`, `src/events-map.ts`, `src/approval.ts`, `src/mcp.ts`, `src/model-catalog.ts`, `src/marker.ts`, `src/modes.ts`, `src/types.ts`, `src/session.ts`, `src/question.ts`, `src/convert.ts`, `src/builtin-commands.ts`, `src/index.ts`, `src/version.ts`, `src/slash.ts`。

## 设计重点

实现 ACP 协议到 v1 agent-core 的适配：把 JSON-RPC 的会话/审批/工具/MCP/终端事件映射为引擎 API，供 IDE 宿主使用。

## 与其他包的关系

packages/acp-adapter 被上层应用或相邻包通过 workspace 依赖引用；具体依赖关系见 `package.json` 的 `dependencies` 中 `@nighthawk/*` 项。

## 可证明路径

阅读代码时应从 `src/index.ts` 或包入口开始，再沿导出符号进入具体实现。

## 专业实现要点（开发流程视角）

### 需求分析

每个包只解决一个领域问题，并通过 package.json exports 暴露最小公开面。

### 设计决策

使用 workspace 协议链接本地依赖；包入口用 `export *` 聚合；内部用 `#/` 别名。

### 实现步骤

定义接口与类型 → 实现服务/函数 → 注册到 DI（如适用）→ 编写测试 → 构建 dist。

### 验证方式

运行 `pnpm -C <pkg> typecheck`、`pnpm -C <pkg> test`、`pnpm lint:pkg`。

### 维护注意

公开导出变化要同步 `klient` contract parity 或 SDK 类型；发布前生成 changeset。

## 逐函数实现说明

以下按源码文件列出可验证的导出函数/类，并给出实现职责说明。


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

> 本文证据路径没有可直接展示的 TS 源码片段。

## 时序/状态图

```mermaid
flowchart LR
    A[入口/调用方] --> B[本文核心模块]
    B --> C[依赖服务/数据层]
    C --> D[输出/事件/持久化]
```

> 图注：`03-packages/acp-adapter/internals.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/acp-adapter/src/index.ts`：
    - 导出签名/声明：
      - `export type { AvailableCommand, Implementation } from '@agentclientprotocol/sdk';`
      - `export type { AcpBuiltinSlashCommandName } from './builtin-commands';`
      - `export type { AcpVersionSpec } from './version';`
      - `export type { SlashCommandsSnapshot } from './server';`
      - `export type { AcpStopReason, AcpToolCallStatus, AcpToolKind } from './types';`

## 证据与代码位置

- `packages/acp-adapter/src/index.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
