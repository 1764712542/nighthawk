# klient 包概览

本页介绍 packages/klient 包的定位、版本、目录结构和依赖。

## 定位

NightHawk client SDK — contract-driven facade over agent-core-v2, routable over ipc or in-memory transports.

## 元数据

| 属性 | 值 |
| --- | --- |
| 包名 | `@nighthawk/klient` |
| 版本 | 0.1.2 |
| 说明 | NightHawk client SDK — contract-driven facade over agent-core-v2, routable over ipc or in-memory transports. |
| 源码文件数 | 50 |
| 测试文件数 | 27 |
| 顶层源码目录 | contract, core, index.ts, transports |
| 主要 scripts | build, typecheck, typecheck:examples, test, smoke, smoke:boundary, smoke:select-tools, stress:kosong-config, clean, docker:e2e |
| 依赖数 | 6 |

## 顶层模块

主要顶层源码文件/目录：`contract`, `core`, `index.ts`, `transports`。

## 测试规模

测试文件约 27 个；测试入口通常在 `packages/klient/test/`。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/klient/package.json`（非 TS 源码，可直接阅读）
  - `packages/klient/README.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/klient/package.json`
- `packages/klient/README.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
