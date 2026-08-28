# telemetry 内部实现

本页说明 packages/telemetry 的关键内部模块与设计思路，源码引用以文件列表为准。

## 关键模块

从源码树可以看到以下模块：`src/systemMetrics.ts`, `src/types.ts`, `src/client.ts`, `src/remote.ts`, `src/sink.ts`, `src/transport.ts`, `src/index.ts`, `src/crash.ts`, `src/bootstrap.ts`。

## 设计重点

共享遥测基础设施：客户端、远程 sink、crash handler、系统指标、隐私过滤。

## 与其他包的关系

packages/telemetry 被上层应用或相邻包通过 workspace 依赖引用；具体依赖关系见 `package.json` 的 `dependencies` 中 `@nighthawk/*` 项。

## 可证明路径

阅读代码时应从 `src/index.ts` 或包入口开始，再沿导出符号进入具体实现。

## 专业实现要点（开发流程视角）

### 需求分析

每个包只解决一个领域问题，并通过 package.json exports 暴露最小公开面。

### 设计决策

使用 workspace 协议链接本地依赖；包入口用 `export *` 聚合；内部用 `#/` 别名。

### 实现步骤

定义接口与类型 → 实现服务/函数 → 注册到 DI（如适用）→ 编写测试 → 构建 dist。

### 验证方式

运行 `pnpm -C <pkg> typecheck`、`pnpm -C <pkg> test`、`pnpm lint:pkg`。

### 维护注意

公开导出变化要同步 `klient` contract parity 或 SDK 类型；发布前生成 changeset。

## 逐函数实现说明

以下按源码文件列出可验证的导出函数/类，并给出实现职责说明。

### packages/telemetry/src/index.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `track` | 11 | `export function track(event: string, properties: TelemetryPropertiesType = {}): void {` | `track` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `setTelemetryContext` | 15 | `export function setTelemetryContext(patch: TelemetryContextIds): void {` | `setTelemetryContext` 负责写入或更新状态。 |
| `withTelemetryContext` | 19 | `export function withTelemetryContext(patch: TelemetryContextIds): TelemetryClient {` | `withTelemetryContext` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `flushTelemetrySync` | 23 | `export function flushTelemetrySync(): void {` | `flushTelemetrySync` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `shutdownTelemetry` | 27 | `export async function shutdownTelemetry(` | `shutdownTelemetry` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

### 来自 `packages/telemetry/src/index.ts` 的 `track`

源码位置：`packages/telemetry/src/index.ts:11` 附近。

```ts
export function track(event: string, properties: TelemetryPropertiesType = {}): void {
  trackEvent(event, properties);
}

export function setTelemetryContext(patch: TelemetryContextIds): void {
  setContext(patch);
}

export function withTelemetryContext(patch: TelemetryContextIds): TelemetryClient {
  return withContext(patch);
}

export function flushTelemetrySync(): void {
  flushSync();
}

export async function shutdownTelemetry(
  options: { readonly timeoutMs?: number } = {},
): Promise<void> {
  await shutdown(options);
}

export { initializeTelemetry } from './bootstrap';
export type { TelemetryBootstrapOptions } from './bootstrap';
// ...
```


## 时序/状态图

```mermaid
flowchart LR
    A[入口/调用方] --> B[本文核心模块]
    B --> C[依赖服务/数据层]
    C --> D[输出/事件/持久化]
```

> 图注：`03-packages/telemetry/internals.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/telemetry/src/index.ts`：
    - 导出签名/声明：
      - `export function track(event: string, properties: TelemetryPropertiesType =`
      - `export function setTelemetryContext(patch: TelemetryContextIds): void`
      - `export function withTelemetryContext(patch: TelemetryContextIds): TelemetryClient`
      - `export function flushTelemetrySync(): void`
      - `export async function shutdownTelemetry(
  options:`
      - `export type { TelemetryBootstrapOptions } from './bootstrap';`
      - `export type { CrashPhase } from './crash';`
      - `export type { TelemetryPrimitive, TelemetryProperties } from './types';`
      - `export type { TelemetryClient, TelemetryContextIds } from './client';`

## 证据与代码位置

- `packages/telemetry/src/index.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
