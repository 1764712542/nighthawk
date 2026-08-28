# 核心术语表

解释 Agent、Session、Workspace、Scope、Tool、Skill、MCP 等术语。

## Agent

执行任务的智能体实例，包含 prompt、上下文、工具、状态。

## Session

一次对话/任务的持久单元，包含一个或多个 agent。

## Workspace

按工作目录聚合的共享资源层，多个 session 可共享。

## Scope

DI 生命周期层级：App/Workspace/Session/Agent。

## 证据与代码位置

- `packages/agent-core-v2/src/app/scopes.ts`
- `packages/agent-core-v2/docs/di.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
