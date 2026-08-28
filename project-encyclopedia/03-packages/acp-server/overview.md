# acp-server 包概览

本页介绍 packages/acp-server 包的定位、版本、目录结构和依赖。

## 定位

Agent Client Protocol (ACP) host backed directly by the DI × Scope agent engine (agent-core-v2)

## 元数据

| 属性 | 值 |
| --- | --- |
| 包名 | `@nighthawk/acp-server` |
| 版本 | 0.0.1 |
| 说明 | Agent Client Protocol (ACP) host backed directly by the DI × Scope agent engine (agent-core-v2) |
| 源码文件数 | 25 |
| 测试文件数 | 18 |
| 顶层源码目录 | acp-client.ts, acp-fs, acp-terminal, approval.ts, builtin-commands.ts, config-options.ts, convert.ts, events-map.ts, index.ts, interaction-bridge.ts, log.ts, marker.ts |
| 主要 scripts | build, typecheck, test, clean |
| 依赖数 | 4 |

## 顶层模块

主要顶层源码文件/目录：`acp-client.ts`, `acp-fs`, `acp-terminal`, `approval.ts`, `builtin-commands.ts`, `config-options.ts`, `convert.ts`, `events-map.ts`, `index.ts`, `interaction-bridge.ts`, `log.ts`, `marker.ts`, `model-catalog.ts`, `modes.ts`, `question.ts`, `replay.ts`, `server.ts`, `session.ts`, `slash.ts`, `start.ts`。

## 测试规模

测试文件约 18 个；测试入口通常在 `packages/acp-server/test/`。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/acp-server/package.json`（非 TS 源码，可直接阅读）
  - `packages/acp-server/package.json`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/acp-server/package.json`
- `packages/acp-server/package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
