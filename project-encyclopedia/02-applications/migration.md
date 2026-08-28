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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/migration-legacy/README.md`（路径不存在，请以仓库实际文件为准）
  - `packages/migration-legacy/src/run-migration.ts` 导出：
    - 符号：`RunMigrationInput`
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
