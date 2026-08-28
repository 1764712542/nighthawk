# node-sdk 包概览

本页介绍 packages/node-sdk 包的定位、版本、目录结构和依赖。

## 定位

TypeScript SDK for the NightHawk Agent

## 元数据

| 属性 | 值 |
| --- | --- |
| 包名 | `@nighthawk/nighthawk-sdk` |
| 版本 | 0.19.2 |
| 说明 | TypeScript SDK for the NightHawk Agent |
| 源码文件数 | 20 |
| 测试文件数 | 35 |
| 顶层源码目录 | auth.ts, catalog.ts, config-rpc.ts, events.ts, index.ts, nighthawk-harness.ts, nighthawk-model-provider.ts, oauth-error.ts, rpc.ts, sdk-rpc-client-v2.ts, sdk-rpc-client.ts, session.ts |
| 主要 scripts | build, build:dts, typecheck, clean |
| 依赖数 | 12 |

## 顶层模块

主要顶层源码文件/目录：`auth.ts`, `catalog.ts`, `config-rpc.ts`, `events.ts`, `index.ts`, `nighthawk-harness.ts`, `nighthawk-model-provider.ts`, `oauth-error.ts`, `rpc.ts`, `sdk-rpc-client-v2.ts`, `sdk-rpc-client.ts`, `session.ts`, `types.ts`, `v2`。

## 测试规模

测试文件约 35 个；测试入口通常在 `packages/node-sdk/test/`。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/node-sdk/package.json`（非 TS 源码，可直接阅读）
  - `packages/node-sdk/README.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/node-sdk/package.json`
- `packages/node-sdk/README.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
