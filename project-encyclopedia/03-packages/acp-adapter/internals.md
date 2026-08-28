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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/acp-adapter/src/index.ts`（未发现直接 export 符号，可能以副作用注册为主）

## 证据与代码位置

- `packages/acp-adapter/src/index.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
