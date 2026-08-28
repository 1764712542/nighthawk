# migration-legacy 内部实现

本页说明 packages/migration-legacy 的关键内部模块与设计思路，源码引用以文件列表为准。

## 关键模块

从源码树可以看到以下模块：`src/report.ts`, `src/detect.ts`, `src/prompt.ts`, `src/stub-detect.ts`, `src/kimi-cli-schema.ts`, `src/marker.ts`, `src/session-index.ts`, `src/migration-errors-log.ts`, `src/atomic-write.ts`, `src/types.ts`, `src/run-migration.ts`, `src/index.ts`, `src/paths.ts`, `src/sessions/wire-writer.ts`, `src/sessions/content-part.ts`, `src/sessions/workdir-bucket.ts`。

## 设计重点

legacy kimi-cli 数据迁移：检测、读取、转换、写入到 nighthawk 目录，原子写和错误日志。

## 与其他包的关系

packages/migration-legacy 被上层应用或相邻包通过 workspace 依赖引用；具体依赖关系见 `package.json` 的 `dependencies` 中 `@nighthawk/*` 项。

## 可证明路径

阅读代码时应从 `src/index.ts` 或包入口开始，再沿导出符号进入具体实现。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/migration-legacy/src/index.ts` 导出：
    - 再导出：`./types.js`

## 证据与代码位置

- `packages/migration-legacy/src/index.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
