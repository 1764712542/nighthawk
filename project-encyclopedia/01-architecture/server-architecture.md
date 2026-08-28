# Kap Server 架构

服务端把 agent-core-v2 的 scope 树映射成 REST/WS 可调用面，并负责认证、安全头、速率限制、实例注册。

## 启动

`start.ts` 解析 options，拒绝非 loopback 无 TLS，创建 engine bootstrap，注册 Fastify 路由，启动 model catalog scheduler。

## 中间件

auth hook、origin/host check、security headers、rate limit、request logging、schema validation。

## 路由组

sessions、workspaces、prompts、approvals、questions、files、fs、terminals、plugins、search、transcript、snapshot、tasks 等。

## 认证

持久 bearer token + 可选密码；loopback 下 debug endpoints 可开启。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/kap-server/src/start.ts` 导出：
    - 符号：`ServerHostIdentity`, `ServerStartOptions`, `RunningServer`, `PORT_RETRY_LIMIT`, `ListenWithPortRetryOptions`
  - `packages/kap-server/src/middleware/auth.ts` 导出：
    - 符号：`AuthHookOptions`, `createAuthHook`
  - `packages/kap-server/src/routes/registerApiV2Routes.ts`（未发现直接 export 符号，可能以副作用注册为主）

## 证据与代码位置

- `packages/kap-server/src/start.ts`
- `packages/kap-server/src/middleware/auth.ts`
- `packages/kap-server/src/routes/registerApiV2Routes.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
