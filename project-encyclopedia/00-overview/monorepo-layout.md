# Monorepo 结构与依赖方向

依赖方向是：应用层只通过公开 SDK 访问内核，核心包按领域分层，数据层和协议层被服务端与客户端共享。

## 应用依赖约束

`apps/nighthawk` 只能通过 `@nighthawk/nighthawk-sdk` 使用核心能力，不能直接依赖 `@nighthawk/agent-core`；v2 能力需要 deep-path 且有架构注释。见 `apps/nighthawk/AGENTS.md`。

## 包依赖

`agent-core-v2` 依赖 `minidb`、`protocol`、`oauth`、`tree-sitter-bash`；`kap-server` 依赖 `agent-core-v2`、`minidb`、`transcript`；`klient` 依赖 `agent-core-v2`、`protocol`。

## 共享契约

`protocol` 提供 REST/WS 协议 schema；`transcript` 拥有 transcript 契约类型；`klient` 的 contract 与引擎类型做编译期 parity。

## 数据流概要

用户输入 → CLI/TUI/SDK → server/dispatcher → agent-core-v2 Session/Agent → LLM 工具调用 → 结果写回 transcript/records/session。

## 证据与代码位置

- `AGENTS.md`
- `apps/nighthawk/AGENTS.md`
- `packages/klient/AGENTS.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
