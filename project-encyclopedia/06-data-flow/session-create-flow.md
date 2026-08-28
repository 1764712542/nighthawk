# 会话创建数据流

新会话从 API/SDK 到磁盘持久化的流程。

## API

`POST /api/v1/sessions` 或 `klient.global.sessions.create`。

## Engine

`ISessionIndex` → `workspaceLifecycle.handlerFor` → session lifecycle create。

## 持久化

session metadata、initial context、profile 写入 `~/.nighthawk/sessions/<id>`。

## 返回

session id、workspace id、title 等 summary。

## 证据与代码位置

- `packages/kap-server/src/routes/sessions.ts`
- `packages/agent-core-v2/src/app/sessionIndex/`
- `packages/kap-server/src/protocol/rest-session.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
