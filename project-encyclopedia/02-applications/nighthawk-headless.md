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

## 逐函数实现说明

以下按源码文件列出可验证的导出函数/类，并给出实现职责说明。

### apps/nighthawk/src/cli/run-prompt.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `raceWithTimeout` | 55 | `export async function raceWithTimeout(promise: Promise<void>, timeoutMs: number): Promise<void> {` | `raceWithTimeout` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `runPrompt` | 98 | `export async function runPrompt(` | `runPrompt` 负责执行核心流程。 |
| `requireConfiguredModel` | 412 | `export function requireConfiguredModel(...models: readonly (string \| undefined)[]): string {` | `requireConfiguredModel` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `configuredModel` | 422 | `export function configuredModel(...models: readonly (string \| undefined)[]): string \| undefined {` | `configuredModel` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `installPromptTerminationCleanup` | 431 | `export function installPromptTerminationCleanup(` | `installPromptTerminationCleanup` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `signalExitCode` | 458 | `export function signalExitCode(signal: NodeJS.Signals): number {` | `signalExitCode` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### apps/nighthawk/src/cli/headless-exit.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `scheduleHeadlessForceExit` | 29 | `export function scheduleHeadlessForceExit(` | `scheduleHeadlessForceExit` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `drainStdio` | 63 | `export async function drainStdio(` | `drainStdio` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `finalizeHeadlessRun` | 88 | `export async function finalizeHeadlessRun(` | `finalizeHeadlessRun` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

### 来自 `apps/nighthawk/src/cli/run-prompt.ts` 的 `raceWithTimeout`

源码位置：`apps/nighthawk/src/cli/run-prompt.ts:55` 附近。

```ts
export async function raceWithTimeout(promise: Promise<void>, timeoutMs: number): Promise<void> {
  let timedOut = false;
  let timer: ReturnType<typeof setTimeout> | undefined;
  // Attach the catch eagerly (synchronously) so `promise` is always consumed and
  // a late rejection can never become an unhandled rejection. Before the timeout
  // wins, the handler rethrows so a real cleanup failure still propagates.
  const guarded = promise.catch((error: unknown) => {
    if (timedOut) return;
    throw error;
  });
  const timedOutSignal = new Promise<void>((resolve) => {
    timer = setTimeout(() => {
      timedOut = true;
      resolve();
    }, timeoutMs);
  });
  try {
    await Promise.race([guarded, timedOutSignal]);
  } finally {
    if (timer !== undefined) clearTimeout(timer);
  }
}

interface PromptOutput {
// ...
```

### 来自 `apps/nighthawk/src/cli/headless-exit.ts` 的 `scheduleHeadlessForceExit`

源码位置：`apps/nighthawk/src/cli/headless-exit.ts:29` 附近。

```ts
export function scheduleHeadlessForceExit(
  proc: ExitableProcess,
  getExitCode: () => number,
  graceMs: number = HEADLESS_FORCE_EXIT_GRACE_MS,
): NodeJS.Timeout {
  const timer = setTimeout(() => {
    proc.exit(getExitCode());
  }, graceMs);
  timer.unref?.();
  return timer;
}

/** Resolve once a stream's currently-buffered writes have flushed to its sink. */
function flushStream(stream: Writable): Promise<void> {
  return new Promise<void>((resolve) => {
    try {
      // An empty write's callback fires after all previously-queued writes have
      // been flushed (writes are ordered), which is the documented way to know a
      // stream's buffer has drained.
      stream.write('', () => resolve());
    } catch {
      resolve();
    }
  });
// ...
```


## 时序/状态图

```mermaid
flowchart LR
    A[入口/调用方] --> B[本文核心模块]
    B --> C[依赖服务/数据层]
    C --> D[输出/事件/持久化]
```

> 图注：`02-applications/nighthawk-headless.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

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
