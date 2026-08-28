# NightHawk Inspect

Inspect 是 kap-server `/api/v1/debug` 的 Web 检查器，可查看 workspace/session/agent 服务和 DI 单元。

## 启动

先启动带 `--debug-endpoints` 的 server，再 `pnpm --filter @nighthawk/nighthawk-inspect dev`。

## 视图

Chat workspace、Search、Model Catalog、App/Workspace Services、DI 四面板。

## DI 面板

Unit tree、Graph、Cascade、Pending 四个视图，反映 DI 单元状态和级联事务。

## 数据源

没有 fallback 数据源；连接失败显示 blocking 错误页。

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

### apps/nighthawk-inspect/src/panels.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `call` | 42 | `export function call(svc: AnyService, method: string, ...args: unknown[]): Promise<unknown> {` | `call` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/transport/registerDebugRoutes.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerDebugRoutes` | 7 | `export function registerDebugRoutes(app: RouteHost, core: Scope): void {` | `registerDebugRoutes` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

### 来自 `apps/nighthawk-inspect/src/panels.ts` 的 `call`

源码位置：`apps/nighthawk-inspect/src/panels.ts:42` 附近。

```ts
export function call(svc: AnyService, method: string, ...args: unknown[]): Promise<unknown> {
  const fn = svc[method];
  if (fn === undefined) {
    return Promise.reject(new Error(`no such method on proxy: ${method}`));
  }
  return fn(...args);
}

export interface PanelAction {
  readonly label: string;
  /** Prompt for one string input before running (raw string passed to `run`). */
  readonly input?: string;
  readonly danger?: boolean;
  readonly run: (svc: AnyService, input?: string) => unknown;
}

export interface ServicePanelDef {
  /** Decorator id / wire channel name, e.g. `sessionMetadata`. */
  readonly id: string;
  readonly label: string;
  /** Wire scope the Service is called on (`app` maps to the `core` route). */
  readonly scope: 'app' | 'workspace' | 'session' | 'agent';
  readonly fetch?: (svc: AnyService) => Promise<unknown>;
  readonly actions?: readonly PanelAction[];
// ...
```

### 来自 `packages/kap-server/src/transport/registerDebugRoutes.ts` 的 `registerDebugRoutes`

源码位置：`packages/kap-server/src/transport/registerDebugRoutes.ts:7` 附近。

```ts
export function registerDebugRoutes(app: RouteHost, core: Scope): void {
  registerServiceDispatcherRoutes(app, core, '/debug', {
    lookup: (name) => resolveAnyScopedServiceId(core, name),
    describe: describeAllChannels,
  });
  registerBusinessSnapshotRoutes(app, core, '/debug');
}
```


## 时序/状态图

```mermaid
flowchart LR
    A[入口/调用方] --> B[本文核心模块]
    B --> C[依赖服务/数据层]
    C --> D[输出/事件/持久化]
```

> 图注：`02-applications/nighthawk-inspect.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `apps/nighthawk-inspect/README.md`（非 TS 源码，可直接阅读）
  - `apps/nighthawk-inspect/src/panels.ts`：
    - 导出签名/声明：
      - `export type AnyService = Record<string, (...args: unknown[]) => Promise<unknown>>;`
      - `export function call(svc: AnyService, method: string, ...args: unknown[]): Promise<unknown>`
      - `export interface PanelAction {`
      - `export interface ServicePanelDef {`
      - `export const CORE_PANELS: readonly ServicePanelDef[] = [`
      - `export const SESSION_PANELS: readonly ServicePanelDef[] = [`
      - `export const AGENT_PANELS: readonly ServicePanelDef[] = [`
  - `packages/kap-server/src/transport/registerDebugRoutes.ts`：
    - 导出签名/声明：
      - `export function registerDebugRoutes(app: RouteHost, core: Scope): void`

## 证据与代码位置

- `apps/nighthawk-inspect/README.md`
- `apps/nighthawk-inspect/src/panels.ts`
- `packages/kap-server/src/transport/registerDebugRoutes.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
