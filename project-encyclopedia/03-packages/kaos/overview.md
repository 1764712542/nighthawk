# kaos 包概览

本页介绍 packages/kaos 包的定位、版本、目录结构和依赖。

## 定位

Execution environment abstraction for AI agent applications

## 元数据

| 属性 | 值 |
| --- | --- |
| 包名 | `@nighthawk/kaos` |
| 版本 | 0.1.6 |
| 说明 | Execution environment abstraction for AI agent applications |
| 源码文件数 | 12 |
| 测试文件数 | 20 |
| 顶层源码目录 | current.ts, environment.ts, errors.ts, index.ts, internal.ts, kaos.ts, local.ts, login-shell-path.ts, process.ts, shell-path-bridge.ts, ssh.ts, types.ts |
| 主要 scripts | build, typecheck, clean |
| 依赖数 | 3 |

## 顶层模块

主要顶层源码文件/目录：`current.ts`, `environment.ts`, `errors.ts`, `index.ts`, `internal.ts`, `kaos.ts`, `local.ts`, `login-shell-path.ts`, `process.ts`, `shell-path-bridge.ts`, `ssh.ts`, `types.ts`。

## 测试规模

测试文件约 20 个；测试入口通常在 `packages/kaos/test/`。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/kaos/package.json`（非 TS 源码，可直接阅读）
  - `packages/kaos/README.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/kaos/package.json`
- `packages/kaos/README.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
