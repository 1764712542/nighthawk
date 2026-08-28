# agent-core 内部实现

本页说明 packages/agent-core 的关键内部模块与设计思路，源码引用以文件列表为准。

## 关键模块

从源码树可以看到以下模块：`src/errors.ts`, `src/plugin.ts`, `src/telemetry.ts`, `src/index.ts`, `src/version.ts`, `src/prompt-modules.d.ts`, `src/tools/args-validator.ts`, `src/tools/store.ts`, `src/tools/background/task-stop.ts`, `src/tools/background/task-output.ts`, `src/tools/background/task-list.ts`, `src/tools/background/format.ts`, `src/tools/background/index.ts`, `src/tools/providers/nighthawk-fetch-url.ts`, `src/tools/providers/local-fetch-url.ts`, `src/tools/providers/nighthawk-web-search.ts`。

## 设计重点

v1 统一 Agent 引擎：Agent/Session/loop/tools/permission/skills/MCP/records/安全工具；仍是安全工具生产位置。

## 与其他包的关系

packages/agent-core 被上层应用或相邻包通过 workspace 依赖引用；具体依赖关系见 `package.json` 的 `dependencies` 中 `@nighthawk/*` 项。

## 可证明路径

阅读代码时应从 `src/index.ts` 或包入口开始，再沿导出符号进入具体实现。

## 证据与代码位置

- `packages/agent-core/src/index.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
