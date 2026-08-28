# 传输层与 RPC

REST、WebSocket、memory、IPC 四种方式访问同一套引擎能力。

## REST

kap-server 使用 Fastify，`/api/v1/*` 路由；envelope 统一 `{code,msg,data,request_id}`。

## WebSocket

`/api/v1/ws` 支持 server_hello、client_hello、subscribe、subscribe_v2、事件推送、心跳。

## memory/IPC

klient 的 `createKlient({scope})` 或 `/ipc`；memory 直接进程内 dispatcher，IPC 走 unix socket NDJSON。

## Debug RPC

`/api/v1/debug` 暴露 scoped DI 服务反射，供 nighthawk-inspect 使用。

## 证据与代码位置

- `packages/kap-server/src/transport/dispatcher.ts`
- `packages/kap-server/src/protocol/ws-control.ts`
- `packages/klient/README.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
