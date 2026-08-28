# node-sdk 内部实现

本页说明 packages/node-sdk 的关键内部模块与设计思路，源码引用以文件列表为准。

## 关键模块

从源码树可以看到以下模块：`src/nighthawk-harness.ts`, `src/sdk-rpc-client.ts`, `src/sdk-rpc-client-v2.ts`, `src/rpc.ts`, `src/types.ts`, `src/session.ts`, `src/events.ts`, `src/index.ts`, `src/nighthawk-model-provider.ts`, `src/config-rpc.ts`, `src/oauth-error.ts`, `src/auth.ts`, `src/catalog.ts`, `src/v2/session-wiring.ts`, `src/v2/config-mapper.ts`, `src/v2/event-mapper.ts`。

## 设计重点

公开 TypeScript SDK：NighthawkHarness、Session、RPC client、provider、catalog、config 校验、image/media 工具。

## 与其他包的关系

packages/node-sdk 被上层应用或相邻包通过 workspace 依赖引用；具体依赖关系见 `package.json` 的 `dependencies` 中 `@nighthawk/*` 项。

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

## 证据与代码位置

- `packages/node-sdk/src/index.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
