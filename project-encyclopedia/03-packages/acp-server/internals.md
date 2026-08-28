# acp-server 内部实现

本页说明 packages/acp-server 的关键内部模块与设计思路，源码引用以文件列表为准。

## 关键模块

从源码树可以看到以下模块：`src/config-options.ts`, `src/events-map.ts`, `src/acp-client.ts`, `src/approval.ts`, `src/model-catalog.ts`, `src/replay.ts`, `src/marker.ts`, `src/start.ts`, `src/modes.ts`, `src/types.ts`, `src/session.ts`, `src/interaction-bridge.ts`, `src/question.ts`, `src/convert.ts`, `src/log.ts`, `src/builtin-commands.ts`。

## 设计重点

实现 ACP 协议到 v2 agent-core-v2 的宿主：直接基于 DI×Scope 引擎，提供 replay、interaction bridge、内置命令等。

## 与其他包的关系

packages/acp-server 被上层应用或相邻包通过 workspace 依赖引用；具体依赖关系见 `package.json` 的 `dependencies` 中 `@nighthawk/*` 项。

## 可证明路径

阅读代码时应从 `src/index.ts` 或包入口开始，再沿导出符号进入具体实现。

## 证据与代码位置

- `packages/acp-server/src/index.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
