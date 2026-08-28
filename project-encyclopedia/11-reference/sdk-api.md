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
