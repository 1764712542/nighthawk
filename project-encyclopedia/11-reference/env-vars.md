# 环境变量参考

常用环境变量：NIGHTHAWK_HOME、NIGHTHAWK_API_KEY、代理、实验开关。

## 路径

`NIGHTHAWK_HOME` 覆盖 `~/.nighthawk`。

## Provider

`NIGHTHAWK_API_KEY` 等供应商密钥。

## 网络

`HTTP_PROXY`/`HTTPS_PROXY`/`NO_PROXY` 由全局 dispatcher 接管。

## 实验

`NIGHTHAWK_EXPERIMENTAL_*` 开关单个实验；`NIGHTHAWK_EXPERIMENTAL_FLAG` 开全部。

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

## 逐函数实现说明

以下按源码文件列出可验证的导出函数/类，并给出实现职责说明。

### apps/nighthawk/src/main.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `handleMainCommand` | 60 | `export async function handleMainCommand(` | `handleMainCommand` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `handleUpgradeCommand` | 101 | `export async function handleUpgradeCommand(version: string): Promise<void> {` | `handleUpgradeCommand` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `main` | 147 | `export function main(): void {` | `main` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

### 来自 `apps/nighthawk/src/main.ts` 的 `handleMainCommand`

源码位置：`apps/nighthawk/src/main.ts:60` 附近。

```ts
export async function handleMainCommand(
  opts: CLIOptions,
  version: string,
): Promise<MainCommandOutcome> {
  let validated: ReturnType<typeof validateOptions>;
  startupTrace('main:enter');
  try {
    validated = validateOptions(opts);
  } catch (error) {
    if (error instanceof OptionConflictError) {
      process.stderr.write(`error: ${error.message}\n`);
      process.exit(1);
    }
    throw error;
  }

  startupTrace('preflight:begin');
  const preflightResult = await runUpdatePreflight(
    version,
    validated.uiMode === 'print' ? { track, isTTY: false } : { track },
  );
  startupTrace('preflight:end');
  if (preflightResult === 'exit') {
    process.exit(0);
// ...
```


## 时序/状态图

```mermaid
flowchart LR
    A[入口/调用方] --> B[本文核心模块]
    B --> C[依赖服务/数据层]
    C --> D[输出/事件/持久化]
```

> 图注：`11-reference/env-vars.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `docs/en/configuration/env-vars.md`（非 TS 源码，可直接阅读）
  - `packages/agent-core/src/flags/registry.ts`：
    - 导出签名/声明：
      - `export const FLAG_DEFINITIONS = [`
      - `export type FlagId = (typeof FLAG_DEFINITIONS)[number]['id'];`
  - `apps/nighthawk/src/main.ts`：
    - 导出签名/声明：
      - `export interface MainCommandOutcome {`
      - `export async function handleMainCommand(
  opts: CLIOptions,
  version: string,
): Promise<MainCommandOutcome>`
      - `export async function handleUpgradeCommand(version: string): Promise<void>`
      - `export function main(): void`

## 证据与代码位置

- `docs/en/configuration/env-vars.md`
- `packages/agent-core/src/flags/registry.ts`
- `apps/nighthawk/src/main.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
