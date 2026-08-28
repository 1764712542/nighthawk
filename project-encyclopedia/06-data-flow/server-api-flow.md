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

## 证据与代码位置

- `packages/kap-server/src/middleware/auth.ts`
- `packages/kap-server/src/transport/dispatcher.ts`
- `packages/kap-server/src/envelope.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
