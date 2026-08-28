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

## 专业实现要点（开发流程视角）

### 需求分析

每个包只解决一个领域问题，并通过 package.json exports 暴露最小公开面。

### 设计决策

使用 workspace 协议链接本地依赖；包入口用 `export *` 聚合；内部用 `#/` 别名。

### 实现步骤

定义接口与类型 → 实现服务/函数 → 注册到 DI（如适用）→ 编写测试 → 构建 dist。

### 验证方式

运行 `pnpm -C <pkg> typecheck`、`pnpm -C <pkg> test`、`pnpm lint:pkg`。

### 维护注意

公开导出变化要同步 `klient` contract parity 或 SDK 类型；发布前生成 changeset。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/minidb/package.json`（非 TS 源码，可直接阅读）
  - `packages/minidb/README.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/minidb/package.json`
- `packages/minidb/README.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
