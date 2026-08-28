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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/node-sdk/src/index.ts` 导出：
    - 再导出：`#/events`, `#/types`
  - `packages/klient/README.md`（非 TS 源码，可直接阅读）
  - `packages/node-sdk/README.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/node-sdk/src/index.ts`
- `packages/klient/README.md`
- `packages/node-sdk/README.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
