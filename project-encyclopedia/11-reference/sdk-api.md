# SDK API 参考

`@nighthawk/nighthawk-sdk` 和 `@nighthawk/klient` 的主要 API。

## Harness

`createNighthawkHarness` 创建 CLI/embedding 宿主；`createNighthawkHarnessV2` 走 v2。

## Session

`Session` 类封装 prompt、events、resume。

## Klient

`createKlient` 得到 `global.*` / `session(id).*` / `agent(id).*`。

## Transport

`@nighthawk/klient/memory` 或 `/ipc`。

## 专业实现要点（开发流程视角）

### 需求分析

参考手册要支持用户快速查找参数、命令、API、协议。

### 设计决策

以表格和代码块为主，保持条目化、可复制。

### 实现步骤

从 CLI 定义、protocol schema、SDK 类型和路由源码提取事实。

### 验证方式

运行 `nighthawk --help`、`pnpm doctor` 或对照 schema 测试。

### 维护注意

参考内容随代码变更同步更新。

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

> 图注：`11-reference/sdk-api.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/node-sdk/src/index.ts`：
    - 导出签名/声明：
      - `export type { NighthawkHarnessRuntimeOptions } from '#/nighthawk-harness';`
      - `export type { NighthawkForCodingProviderOptions } from '#/nighthawk-model-provider';`
      - `export type {`
      - `export type { LogContext, LogLevel, LogPayload, Logger } from '@nighthawk/agent-core';`
      - `export type * from '#/types';`
    - 再导出：`#/events`, `#/types`
  - `packages/klient/README.md`（非 TS 源码，可直接阅读）
  - `packages/node-sdk/README.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/node-sdk/src/index.ts`
- `packages/klient/README.md`
- `packages/node-sdk/README.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
