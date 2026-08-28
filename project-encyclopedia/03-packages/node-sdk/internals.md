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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/node-sdk/src/index.ts` 导出：
    - 再导出：`#/events`, `#/types`

## 证据与代码位置

- `packages/node-sdk/src/index.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
