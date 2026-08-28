# NightHawk 服务端模式

CLI 可以通过 `pnpm dev:server` 或 `nighthawk` 内嵌启动 kap-server，供 Web UI 和远程访问。

## 命令

根 `package.json` 有 `dev:server`、`dev:kap-server`、`dev:v2` 等脚本。

## 端口

默认 `127.0.0.1:58627`。

## Web UI

`apps/nighthawk/dist-web` 是提交的预构建 bundle，由 code-app 同步；server 可托管 web assets。

## 安全

非 loopback 绑定必须 TLS 或 `--insecure-no-tls`；默认 bearer token 认证。

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

  - `package.json`（非 TS 源码，可直接阅读）
  - `apps/nighthawk/AGENTS.md`（非 TS 源码，可直接阅读）
  - `packages/kap-server/src/start.ts`：
    - 导出签名/声明：
      - `export interface ServerHostIdentity extends NighthawkHostIdentity {`
      - `export interface ServerStartOptions {`
      - `export interface RunningServer {`
      - `export async function startServer(opts: ServerStartOptions): Promise<RunningServer>`
      - `export const PORT_RETRY_LIMIT = 100;`
      - `export interface ListenWithPortRetryOptions {`
      - `export async function listenWithPortRetry(
  opts: ListenWithPortRetryOptions,
): Promise<`

## 证据与代码位置

- `package.json`
- `apps/nighthawk/AGENTS.md`
- `packages/kap-server/src/start.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
