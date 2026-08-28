# Vis 可视化工具

Vis 是会话调试可视化工具，浏览器中查看 session 与 replay。

## 结构

`apps/vis` 包含根脚本、`server/` 和 `web/` 两个子包；server 处理 session 数据，web 渲染。

## 命令

`pnpm vis` 或 `nighthawk vis` 启动；`--port`、`--host`、`--no-open` 控制服务。

## 数据源

读取本地 `~/.nighthawk/sessions` 数据，内嵌 server 提供 HTTP API。

## 用途

适合调试会话恢复、消息流、工具调用链。

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

## 逐函数实现说明

以下按源码文件列出可验证的导出函数/类，并给出实现职责说明。

### apps/nighthawk/src/cli/commands.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `createProgram` | 18 | `export function createProgram(` | `createProgram` 负责创建/构建相关对象或流程。 |


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

### 来自 `apps/nighthawk/src/cli/commands.ts` 的 `createProgram`

源码位置：`apps/nighthawk/src/cli/commands.ts:18` 附近。

```ts
export function createProgram(
  version: string,
  onMain: MainCommandHandler,
  onMigrate: MigrateCommandHandler,
  onPluginNodeRunner: PluginNodeRunnerHandler = () => {},
  onUpgrade: UpgradeCommandHandler = () => {},
  onUpdateDownload: UpdateDownloadHandler = () => {},
): Command {
  const program = new Command(CLI_COMMAND_NAME)
    .description('The Starting Point for Next-Gen Agents')
    .version(version, '-V, --version')
    .allowUnknownOption(false)
    .configureHelp({ helpWidth: 100 })
    .helpOption('-h, --help', 'Show help.')
    .usage('[options] [command]')
    .addHelpText('after', '\nDocumentation:        https://AliceGoto.github.io/nighthawk/\n');

  program
    .addOption(
      new Option(
        '-S, --session [id]',
        'Resume a session. With ID: resume that session. Without ID: interactively pick.',
      ).argParser((val: string | boolean) => (val === true ? '' : (val as string))),
    )
// ...
```


## 时序/状态图

```mermaid
flowchart LR
    A[入口/调用方] --> B[本文核心模块]
    B --> C[依赖服务/数据层]
    C --> D[输出/事件/持久化]
```

> 图注：`02-applications/vis.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `apps/vis/package.json`（非 TS 源码，可直接阅读）
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

- `apps/vis/package.json`
- `apps/nighthawk/src/cli/commands.ts`
- `docs/en/reference/nighthawk-command.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
