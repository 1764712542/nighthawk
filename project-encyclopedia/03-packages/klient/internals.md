# klient 内部实现

本页说明 packages/klient 的关键内部模块与设计思路，源码引用以文件列表为准。

## 关键模块

从源码树可以看到以下模块：`src/index.ts`, `src/contract/helpers.ts`, `src/contract/mcp.ts`, `src/contract/types.ts`, `src/contract/index.ts`, `src/contract/agent/schemas.ts`, `src/contract/agent/activity.ts`, `src/contract/agent/events.ts`, `src/contract/agent/services.ts`, `src/contract/global/workspaces.ts`, `src/contract/global/providerDiscovery.ts`, `src/contract/global/capabilities.ts`, `src/contract/global/providers.ts`, `src/contract/global/hostFs.ts`, `src/contract/global/mcpManagement.ts`, `src/contract/global/events.ts`。

## 设计重点

契约驱动客户端 SDK：global/session/agent 三级 facade，zod contract，memory/IPC 两种传输，统一 conformance suite。

## 与其他包的关系

packages/klient 被上层应用或相邻包通过 workspace 依赖引用；具体依赖关系见 `package.json` 的 `dependencies` 中 `@nighthawk/*` 项。

## 可证明路径

阅读代码时应从 `src/index.ts` 或包入口开始，再沿导出符号进入具体实现。

## 证据与代码位置

- `packages/klient/src/index.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
