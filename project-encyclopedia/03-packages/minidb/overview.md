# minidb 包概览

本页介绍 packages/minidb 包的定位、版本、目录结构和依赖。

## 定位

A pure-Node.js embedded key-value database mixing Redis-style in-memory KV with SQLite-style durable persistence (WAL + snapshot).

## 元数据

| 属性 | 值 |
| --- | --- |
| 包名 | `@nighthawk/minidb` |
| 版本 | 0.2.0 |
| 说明 | A pure-Node.js embedded key-value database mixing Redis-style in-memory KV with SQLite-style durable persistence (WAL + snapshot). |
| 源码文件数 | 58 |
| 测试文件数 | 53 |
| 顶层源码目录 | backup.ts, cluster, codec.ts, compaction.ts, compound-index.ts, crc32.ts, dt-index.ts, gen-codec.ts, generation-builder.ts, generation-files.ts, generation-loader.ts, generation.ts |
| 主要 scripts | build, typecheck, test, bench, bench:cluster, bench:open, clean |
| 依赖数 | 0 |

## 顶层模块

主要顶层源码文件/目录：`backup.ts`, `cluster`, `codec.ts`, `compaction.ts`, `compound-index.ts`, `crc32.ts`, `dt-index.ts`, `gen-codec.ts`, `generation-builder.ts`, `generation-files.ts`, `generation-loader.ts`, `generation.ts`, `index-admin.ts`, `index-manager.ts`, `index.ts`, `lifecycle-status.ts`, `lifecycle.ts`, `lockfile.ts`, `maintenance.ts`, `memory-guard.ts`。

## 测试规模

测试文件约 53 个；测试入口通常在 `packages/minidb/test/`。

## 证据与代码位置

- `packages/minidb/package.json`
- `packages/minidb/README.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
