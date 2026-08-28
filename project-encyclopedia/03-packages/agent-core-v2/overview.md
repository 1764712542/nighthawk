# agent-core-v2 包概览

本页介绍 packages/agent-core-v2 包的定位、版本、目录结构和依赖。

## 定位

The unified agent engine for NightHawk (v2 — DI Scope architecture)

## 元数据

| 属性 | 值 |
| --- | --- |
| 包名 | `@nighthawk/agent-core-v2` |
| 版本 | 0.4.2 |
| 说明 | The unified agent engine for NightHawk (v2 — DI Scope architecture) |
| 源码文件数 | 922 |
| 测试文件数 | 395 |
| 顶层源码目录 | _base, agent, app, debug, env.d.ts, errors.ts, features, hooks.ts, index.ts, kosong, mcpCore, os |
| 主要 scripts | build, test, typecheck, gen:contract-types, gen:config-manifest, gen:wire-manifest, gen:state-manifest, lint:imports, clean |
| 依赖数 | 44 |

## 顶层模块

主要顶层源码文件/目录：`_base`, `agent`, `app`, `debug`, `env.d.ts`, `errors.ts`, `features`, `hooks.ts`, `index.ts`, `kosong`, `mcpCore`, `os`, `persistence`, `program`, `runtime`, `session`, `state`, `tool`, `wire`, `workspace`。

## 测试规模

测试文件约 395 个；测试入口通常在 `packages/agent-core-v2/test/`。

## 证据与代码位置

- `packages/agent-core-v2/package.json`
- `packages/agent-core-v2/package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
