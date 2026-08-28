# kap-server 包概览

本页介绍 packages/kap-server 包的定位、版本、目录结构和依赖。

## 定位

NightHawk server backed by the DI × Scope agent engine (agent-core-v2)

## 元数据

| 属性 | 值 |
| --- | --- |
| 包名 | `@nighthawk/kap-server` |
| 版本 | 0.2.3 |
| 说明 | NightHawk server backed by the DI × Scope agent engine (agent-core-v2) |
| 源码文件数 | 153 |
| 测试文件数 | 77 |
| 顶层源码目录 | contract.ts, env.d.ts, envelope.ts, error-handler.ts, index.ts, instanceRegistry.ts, lib, middleware, openapi, protocol, request-id.ts, requestLogging.ts |
| 主要 scripts | build, typecheck, test, clean |
| 依赖数 | 18 |

## 顶层模块

主要顶层源码文件/目录：`contract.ts`, `env.d.ts`, `envelope.ts`, `error-handler.ts`, `index.ts`, `instanceRegistry.ts`, `lib`, `middleware`, `openapi`, `protocol`, `request-id.ts`, `requestLogging.ts`, `routes`, `search`, `security`, `services`, `start.ts`, `transport`, `version.ts`。

## 测试规模

测试文件约 77 个；测试入口通常在 `packages/kap-server/test/`。

## 证据与代码位置

- `packages/kap-server/package.json`
- `packages/kap-server/package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
