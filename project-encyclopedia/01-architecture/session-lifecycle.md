# 会话生命周期

Session 从创建、恢复、fork、关闭到删除的完整流程。

## 创建

通过 `ISessionIndex`/`workspaceLifecycle.handlerFor` 创建 session scope；`SessionLifecycle` 初始化 session 服务。

## 恢复

`resume` 从磁盘读取 session metadata/transcript，重新 materialize main agent；subagent 不自动恢复。

## Fork

`fork` 基于原 session 创建子 session，适合并行分支实验。

## 关闭/删除

close 销毁 session scope；delete 删除目录并从 session index evict。

## 证据与代码位置

- `packages/agent-core-v2/src/app/sessionIndex/sessionIndex.ts`
- `packages/agent-core-v2/src/workspace/sessionLifecycle/`
- `packages/kap-server/src/protocol/rest-session.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
