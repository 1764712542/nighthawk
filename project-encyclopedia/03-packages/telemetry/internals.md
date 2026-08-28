# telemetry 内部实现

本页说明 packages/telemetry 的关键内部模块与设计思路，源码引用以文件列表为准。

## 关键模块

从源码树可以看到以下模块：`src/systemMetrics.ts`, `src/types.ts`, `src/client.ts`, `src/remote.ts`, `src/sink.ts`, `src/transport.ts`, `src/index.ts`, `src/crash.ts`, `src/bootstrap.ts`。

## 设计重点

共享遥测基础设施：客户端、远程 sink、crash handler、系统指标、隐私过滤。

## 与其他包的关系

packages/telemetry 被上层应用或相邻包通过 workspace 依赖引用；具体依赖关系见 `package.json` 的 `dependencies` 中 `@nighthawk/*` 项。

## 可证明路径

阅读代码时应从 `src/index.ts` 或包入口开始，再沿导出符号进入具体实现。

## 证据与代码位置

- `packages/telemetry/src/index.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
