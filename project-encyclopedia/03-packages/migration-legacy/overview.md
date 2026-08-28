# migration-legacy 包概览

本页介绍 packages/migration-legacy 包的定位、版本、目录结构和依赖。

## 定位

Migrate kimi-cli (~/.kimi/) data into nighthawk (~/.nighthawk/).

## 元数据

| 属性 | 值 |
| --- | --- |
| 包名 | `@nighthawk/migration-legacy` |
| 版本 | 0.1.16 |
| 说明 | Migrate kimi-cli (~/.kimi/) data into nighthawk (~/.nighthawk/). |
| 源码文件数 | 27 |
| 测试文件数 | 27 |
| 顶层源码目录 | atomic-write.ts, detect.ts, index.ts, kimi-cli-schema.ts, marker.ts, migration-errors-log.ts, paths.ts, prompt.ts, report.ts, run-migration.ts, session-index.ts, sessions |
| 主要 scripts | build, typecheck, test, clean |
| 依赖数 | 4 |

## 顶层模块

主要顶层源码文件/目录：`atomic-write.ts`, `detect.ts`, `index.ts`, `kimi-cli-schema.ts`, `marker.ts`, `migration-errors-log.ts`, `paths.ts`, `prompt.ts`, `report.ts`, `run-migration.ts`, `session-index.ts`, `sessions`, `steps`, `stub-detect.ts`, `types.ts`。

## 测试规模

测试文件约 27 个；测试入口通常在 `packages/migration-legacy/test/`。

## 证据与代码位置

- `packages/migration-legacy/package.json`
- `packages/migration-legacy/package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
