# SDK 传输一致性

klient 的 memory 和 IPC 传输如何共享同一套 dispatcher 和数据。

## Facade

客户端方法统一参数和 zod 校验。

## Channel

`KlientChannel.call/listen` 是唯一传输 SPI。

## Memory

直接使用进程内 dispatcher，JSON round-trip。

## IPC

NDJSON over unix socket，与 memory 共享同一 dispatcher 流量。

## 证据与代码位置

- `packages/klient/src/transports/`
- `packages/klient/README.md`
- `packages/klient/test/helpers/conformance.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
