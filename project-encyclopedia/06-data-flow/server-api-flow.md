# REST API 请求流

一个 REST 请求从 Fastify 到 engine 服务到响应的路径。

## Route

Fastify route handler 校验参数/body，构造 request。

## Dispatcher

`transport/dispatcher.ts` 按 scope kind 解析 session/agent，调用 service 方法。

## Envelope

成功 `okEnvelope`，失败 `errEnvelope`。

## Auth

中间件先验证 bearer token、origin/host。

## 专业实现要点（开发流程视角）

### 需求分析

数据流文档要回答“一个请求从哪里来、经过哪些服务、最终写到哪里”。

### 设计决策

用事件驱动解耦引擎与 UI；用 transcript 记录可重放状态；用 minidb read model 加速查询。

### 实现步骤

识别入口 API → 跟踪 service 调用链 → 标注持久化点 → 标注事件/WS 推送。

### 验证方式

通过 e2e、klient conformance suite、WS 订阅测试验证链路。

### 维护注意

异步链路要处理取消、重试、幂等；持久化要保证崩溃安全。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/kap-server/src/middleware/auth.ts`：
    - 导出签名/声明：
      - `export interface AuthHookOptions {`
      - `export function createAuthHook(
  authTokenService: IAuthTokenService,
  opts?: AuthHookOptions,
): (req: FastifyRequest, reply: FastifyReply) => Promise<Fas...`
  - `packages/kap-server/src/transport/dispatcher.ts`：
    - 导出签名/声明：
      - `export type ChannelLookup = (name: string) => ServiceIdentifier<unknown> | undefined;`
      - `export async function resolveScope(
  core: Scope,
  scopeKind: ScopeKind,
  params: Record<string, string>,
): Promise<Scope | IScopeHandle>`
      - `export async function resolveService(
  core: Scope,
  scopeKind: ScopeKind,
  params: Record<string, string>,
  serviceName: string,
  lookup: ChannelLookup...`
      - `export async function dispatch(
  core: Scope,
  scopeKind: ScopeKind,
  params: Record<string, string>,
  serviceName: string,
  method: string,
  arg: unkn...`
  - `packages/kap-server/src/envelope.ts`（未发现直接 export 符号，可能以副作用注册为主）

## 证据与代码位置

- `packages/kap-server/src/middleware/auth.ts`
- `packages/kap-server/src/transport/dispatcher.ts`
- `packages/kap-server/src/envelope.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
