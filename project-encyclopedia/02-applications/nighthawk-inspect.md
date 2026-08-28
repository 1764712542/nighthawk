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

## 证据与代码位置

- `apps/nighthawk-inspect/README.md`
- `apps/nighthawk-inspect/src/panels.ts`
- `packages/kap-server/src/transport/registerDebugRoutes.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
