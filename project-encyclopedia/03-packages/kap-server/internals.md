# kap-server 内部实现

本页说明 packages/kap-server 的关键内部模块与设计思路，源码引用以文件列表为准。

## 关键模块

从源码树可以看到以下模块：`src/envelope.ts`, `src/contract.ts`, `src/request-id.ts`, `src/error-handler.ts`, `src/requestLogging.ts`, `src/env.d.ts`, `src/start.ts`, `src/index.ts`, `src/version.ts`, `src/instanceRegistry.ts`, `src/middleware/schema.ts`, `src/middleware/defineRoute.ts`, `src/middleware/origin.ts`, `src/middleware/securityHeaders.ts`, `src/middleware/validate.ts`, `src/middleware/rateLimit.ts`。

## 设计重点

NightHawk server：Fastify REST + WebSocket，承载 v2 engine，提供 sessions/workspaces/prompts/search/transcript/debug 路由。

## 与其他包的关系

packages/kap-server 被上层应用或相邻包通过 workspace 依赖引用；具体依赖关系见 `package.json` 的 `dependencies` 中 `@nighthawk/*` 项。

## 可证明路径

阅读代码时应从 `src/index.ts` 或包入口开始，再沿导出符号进入具体实现。

## 证据与代码位置

- `packages/kap-server/src/index.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
