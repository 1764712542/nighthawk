# 无头/非交互模式

`nighthawk -p` 用于脚本和 CI，支持 text 与 stream-json 输出。

## 行为

不打开 TUI，不使用人工审批，按 auto 权限策略执行；静态 deny 仍生效。

## 输出格式

`text` 输出 transcript 风格；`stream-json` 每行一个 JSON 对象。

## 退出处理

headless 完成时 `finalizeHeadlessRun` 刷新 stdout/stderr 并 armed 一个 unref 的兜底退出。

## 冲突规则

`-p` 不能与 `--yolo`、`--auto`、`--plan` 同时使用。

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

  - `apps/nighthawk/src/cli/run-prompt.ts`：
    - 导出签名/声明：
      - `export async function raceWithTimeout(promise: Promise<void>, timeoutMs: number): Promise<void>`
      - `export interface PromptRunIO {`
      - `export interface PromptProcess {`
      - `export async function runPrompt(
  opts: CLIOptions,
  version: string,
  io: PromptRunIO =`
      - `export function requireConfiguredModel(...models: readonly (string | undefined)[]): string`
      - `export function configuredModel(...models: readonly (string | undefined)[]): string | undefined`
      - `export function installPromptTerminationCleanup(
  promptProcess: PromptProcess,
  cleanup: () => Promise<void>,
): () => void`
      - `export function signalExitCode(signal: NodeJS.Signals): number`
  - `apps/nighthawk/src/cli/headless-exit.ts`：
    - 导出签名/声明：
      - `export interface ExitableProcess {`
      - `export function scheduleHeadlessForceExit(
  proc: ExitableProcess,
  getExitCode: () => number,
  graceMs: number = HEADLESS_FORCE_EXIT_GRACE_MS,
): NodeJS....`
      - `export async function drainStdio(
  streams: readonly Writable[],
  timeoutMs: number = HEADLESS_STDIO_DRAIN_TIMEOUT_MS,
): Promise<void>`
      - `export async function finalizeHeadlessRun(
  proc: ExitableProcess,
  streams: readonly Writable[],
  getExitCode: () => number,
  options:`
  - `docs/en/reference/nighthawk-command.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `apps/nighthawk/src/cli/run-prompt.ts`
- `apps/nighthawk/src/cli/headless-exit.ts`
- `docs/en/reference/nighthawk-command.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
