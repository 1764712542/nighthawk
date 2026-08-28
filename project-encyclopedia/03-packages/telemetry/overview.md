# telemetry 包概览

本页介绍 packages/telemetry 包的定位、版本、目录结构和依赖。

## 定位

Shared telemetry infrastructure for NightHawk

## 元数据

| 属性 | 值 |
| --- | --- |
| 包名 | `@nighthawk/telemetry` |
| 版本 | 0.1.1 |
| 说明 | Shared telemetry infrastructure for NightHawk |
| 源码文件数 | 9 |
| 测试文件数 | 2 |
| 顶层源码目录 | bootstrap.ts, client.ts, crash.ts, index.ts, remote.ts, sink.ts, systemMetrics.ts, transport.ts, types.ts |
| 主要 scripts | build, test, typecheck, clean |
| 依赖数 | 0 |

## 顶层模块

主要顶层源码文件/目录：`bootstrap.ts`, `client.ts`, `crash.ts`, `index.ts`, `remote.ts`, `sink.ts`, `systemMetrics.ts`, `transport.ts`, `types.ts`。

## 测试规模

测试文件约 2 个；测试入口通常在 `packages/telemetry/test/`。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/telemetry/package.json`（非 TS 源码，可直接阅读）
  - `packages/telemetry/README.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/telemetry/package.json`
- `packages/telemetry/README.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
