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

  - `packages/klient/src/transports//` 目录下源码文件示例：
    - `packages/klient/src/transports/args.ts`
    - `packages/klient/src/transports/ipc/channel.ts`
    - `packages/klient/src/transports/ipc/codec.ts`
    - `packages/klient/src/transports/ipc/host.ts`
    - `packages/klient/src/transports/ipc/index.ts`
    - `packages/klient/src/transports/memory/dispatcher.ts`
    - `packages/klient/src/transports/memory/index.ts`
    - `packages/klient/src/transports/memory/serviceRegistry.ts`
  - `packages/klient/README.md`（非 TS 源码，可直接阅读）
  - `packages/klient/test/helpers/conformance.ts`：
    - 导出签名/声明：
      - `export interface KlientConformanceTarget {`
      - `export function defineKlientConformance(
  transport: string,
  makeTarget: () => Promise<KlientConformanceTarget>,
): void`

## 证据与代码位置

- `packages/klient/src/transports/`
- `packages/klient/README.md`
- `packages/klient/test/helpers/conformance.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
