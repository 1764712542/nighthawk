# 迁移工具

`nighthawk migrate` 把 legacy kimi-cli 数据迁移到 nighthawk。

## 包

`packages/migration-legacy` 实现检测、读取、转换、写入。

## 数据

迁移 `~/.kimi/` 的 session 和 config 到 `~/.nighthawk/`。

## 流程

`src/run-migration.ts` 编排步骤；`src/report.ts` 生成报告；原子写保护。

## 命令

`nighthawk migrate` 交互式引导。

## 专业实现要点（开发流程视角）

### 需求分析

应用层要把引擎能力包装成用户可操作的产品：CLI 参数、TUI 交互、IDE 集成、Web 访问。

### 设计决策

应用层不直接 import 内核，通过 SDK/RPC 通信；TUI 使用 pi-tui 组件化渲染。

### 实现步骤

CLI 解析参数 → 创建 Harness/SDK 客户端 → 进入 TUI 或 headless；TUI 通过 reverse-rpc 桥接审批/提问。

### 验证方式

使用 `pnpm -C apps/nighthawk test`、`pnpm -C apps/nighthawk run smoke` 和 e2e。

### 维护注意

TUI 组件不得直接读写 session 状态；启动路径必须遵守 workspace trust。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/migration-legacy/README.md`（路径不存在，请以仓库实际文件为准）
  - `packages/migration-legacy/src/run-migration.ts`：
    - 导出签名/声明：
      - `export interface RunMigrationInput {`
      - `export async function runMigration(input: RunMigrationInput): Promise<MigrationReport>`
  - `apps/nighthawk/src/migration//` 目录下源码文件示例：
    - `apps/nighthawk/src/migration/badge.ts`
    - `apps/nighthawk/src/migration/command.ts`
    - `apps/nighthawk/src/migration/detect-pending.ts`
    - `apps/nighthawk/src/migration/index.ts`
    - `apps/nighthawk/src/migration/migration-screen.ts`

## 证据与代码位置

- `packages/migration-legacy/README.md`
- `packages/migration-legacy/src/run-migration.ts`
- `apps/nighthawk/src/migration/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
