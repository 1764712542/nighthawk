# NightHawk CLI 应用

CLI 是主入口，负责参数解析、TUI 启动、headless 模式、更新、迁移和子命令。

## 入口链

`src/main.ts` → `src/cli/commands.ts` → `src/cli/run-shell.ts` → SDK `NighthawkHarness` → `src/tui/nighthawk-tui.ts`。

## CLI 选项

`-S/--session`、`-c/--continue`、`-y/--yolo`、`--auto`、`-m/--model`、`-p/--prompt`、`--output-format`、`--agent`、`--agent-file`、`--plan`、`--skills-dir`。

## 子命令

`acp`、`doctor`、`export`、`migrate`、`upgrade`、`vis`、`provider`。

## 启动保护

启动路径在 workspace trust 前不得用裸命令名 spawn 子进程，避免 binary planting。

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

  - `apps/nighthawk/src/main.ts`：
    - 导出签名/声明：
      - `export interface MainCommandOutcome {`
      - `export async function handleMainCommand(
  opts: CLIOptions,
  version: string,
): Promise<MainCommandOutcome>`
      - `export async function handleUpgradeCommand(version: string): Promise<void>`
      - `export function main(): void`
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
  - `apps/nighthawk/AGENTS.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `apps/nighthawk/src/main.ts`
- `apps/nighthawk/src/cli/commands.ts`
- `apps/nighthawk/AGENTS.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
