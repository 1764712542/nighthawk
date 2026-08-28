# 分层架构详解

从 UI 到存储的每一层职责、接口和依赖方向。

## UI 层

CLI/TUI 负责参数解析、交互渲染、审批弹窗、slash 命令；VS Code 负责 webview 会话；inspect 负责反射查看 DI/服务。UI 层通过 SDK 或 RPC 与内核通信。

## 传输层

kap-server 提供 REST `/api/v1`、WebSocket `/api/v1/ws`、debug `/api/v1/debug`。`klient` 提供 memory/IPC 传输。

## 引擎层

agent-core-v2 提供 workspace/session/agent 生命周期、agent loop、工具注册/执行、权限、MCP、skill、profile、plugin、transcript。

## 存储层

minidb 提供会话索引和搜索；文件系统存储 sessions/blobs/store/cache/logs；transcript 提供内存/持久化的 transcript 数据层。

## 证据与代码位置

- `packages/kap-server/src/routes/registerApiV2Routes.ts`
- `packages/agent-core-v2/src/app/bootstrap/bootstrap.ts`
- `packages/minidb/src/mini-db.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
