# 四层生命周期

App、Workspace、Session、Agent 各自的创建、持有和销毁语义。

## App

进程内单例；`bootstrap()` 创建 app scope；config、plugin、workspace service、session index 等常驻。

## Workspace

按 workspaceId 持有 handler；`workspaceLifecycle.handlerFor` 创建或获取，handler 不随 session 关闭而销毁。

## Session

一个会话一个 scope；session lifecycle 负责 create/resume/fork/close/delete。

## Agent

一个会话内可有一个 main agent 和多个 subagent；agent lifecycle 管理 runtime、contextMemory、toolExecutor 等。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core-v2/src/app/workspace/workspace.ts` 导出：
    - 符号：`Workspace`, `WorkspaceUpdate`, `IWorkspaceService`
  - `packages/agent-core-v2/src/app/sessionIndex/sessionIndex.ts` 导出：
    - 符号：`PARENT_SESSION_ID_KEY`, `CHILD_SESSION_KIND_KEY`, `CHILD_SESSION_KIND`, `SessionSummary`, `SessionListQuery`, `SessionCountQuery`, `SessionIndexState`, `SessionIndexStatus`, `ISessionIndex`, `ISessionIndexMirror`
  - `packages/agent-core-v2/src/session/agentLifecycle//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/session/agentLifecycle/agentLifecycle.ts`
    - `packages/agent-core-v2/src/session/agentLifecycle/agentLifecycleService.ts`
    - `packages/agent-core-v2/src/session/agentLifecycle/errors.ts`
    - `packages/agent-core-v2/src/session/agentLifecycle/mainAgent.ts`
    - `packages/agent-core-v2/src/session/agentLifecycle/managedAgent.ts`
    - `packages/agent-core-v2/src/session/agentLifecycle/profile/gitContext.ts`
    - `packages/agent-core-v2/src/session/agentLifecycle/profile/profiles.ts`
    - `packages/agent-core-v2/src/session/agentLifecycle/subagentMetadata.ts`

## 证据与代码位置

- `packages/agent-core-v2/src/app/workspace/workspace.ts`
- `packages/agent-core-v2/src/app/sessionIndex/sessionIndex.ts`
- `packages/agent-core-v2/src/session/agentLifecycle/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
