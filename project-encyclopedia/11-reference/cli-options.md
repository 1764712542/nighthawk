# CLI 选项参考

`nighthawk` 主命令的全部选项、别名和冲突规则。

## 选项

`-V/--version`、`-h/--help`、`-S/--session`、`-c/--continue`、`-y/--yolo`、`--auto`、`-m/--model`、`-p/--prompt`、`--output-format`、`--agent`、`--agent-file`、`--plan`、`--skills-dir`、`--add-dir`。

## 别名

`-r/--resume` 是 `--session` 隐藏别名；`--yes`/`--auto-approve` 是 `--yolo` 隐藏别名。

## 冲突

`--continue` 与 `--session` 互斥；`--yolo` 与 `--auto` 互斥；`-p` 不能和 `--yolo/--auto/--plan` 同时用。

## 文档

详见 `docs/en/reference/nighthawk-command.md`。

## 专业实现要点（开发流程视角）

### 需求分析

参考手册要支持用户快速查找参数、命令、API、协议。

### 设计决策

以表格和代码块为主，保持条目化、可复制。

### 实现步骤

从 CLI 定义、protocol schema、SDK 类型和路由源码提取事实。

### 验证方式

运行 `nighthawk --help`、`pnpm doctor` 或对照 schema 测试。

### 维护注意

参考内容随代码变更同步更新。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `apps/nighthawk/src/cli/commands.ts`：
    - 导出签名/声明：
      - `export type MainCommandHandler = (opts: CLIOptions) => void;`
      - `export type MigrateCommandHandler = () => void;`
      - `export type PluginNodeRunnerHandler = (entry: string, args: readonly string[]) => void;`
      - `export type UpgradeCommandHandler = () => void | Promise<void>;`
      - `export type UpdateDownloadHandler = (version: string, manual: boolean) => void;`
      - `export function createProgram(
  version: string,
  onMain: MainCommandHandler,
  onMigrate: MigrateCommandHandler,
  onPluginNodeRunner: PluginNodeRunnerHan...`
  - `docs/en/reference/nighthawk-command.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `apps/nighthawk/src/cli/commands.ts`
- `docs/en/reference/nighthawk-command.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
