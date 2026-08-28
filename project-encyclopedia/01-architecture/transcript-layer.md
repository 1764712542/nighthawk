# Transcript 数据层

transcript 包提供 L1 store、L2 idempotent ops、L3 订阅粒度、L4 视图注册。

## L1

agent-granular store：按 agent 保存 transcript items。

## L2

idempotent 操作：同样的 op 多次应用结果一致，支持持久化重放。

## L3

订阅粒度 off/turn/block/delta，避免客户端收到不必要事件。

## L4

framework-free view registry，可在 React/Vue/终端等不同 UI 复用。

## 证据与代码位置

- `packages/transcript/AGENTS.md`
- `packages/transcript/src/index.ts`
- `packages/transcript/src/contract/schema.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
