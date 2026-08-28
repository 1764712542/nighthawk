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

## 专业实现要点（开发流程视角）

### 需求分析

架构要支撑多会话、多 agent、可扩展工具、可观测 DI、持久化和安全边界。

### 设计决策

使用四层 Scope 表达状态生命周期；用 Service/Feature/Contribution 替代中心化注册表；用事件和 veto 解耦模块。

### 实现步骤

先实现 `_base/di` 与 `_base/lifecycle`，再建立 App/Workspace/Session/Agent scope，最后把领域能力实现为 Feature。

### 验证方式

通过 `packages/agent-core-v2/test/` 的 scope host 测试、DI 级联测试和 nighthawk-inspect 的可视化验证。

### 维护注意

遵循依赖方向：子 scope 依赖父 scope；App 服务不得持有 session 级 Map 状态。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/agent-core-v2/src/app/workspace/workspace.ts`：
    - 导出签名/声明：
      - `export interface Workspace {`
      - `export interface WorkspaceUpdate {`
      - `export interface IWorkspaceService {`
      - `export const IWorkspaceService: ServiceIdentifier<IWorkspaceService> =`
  - `packages/agent-core-v2/src/app/sessionIndex/sessionIndex.ts`：
    - 导出签名/声明：
      - `export const PARENT_SESSION_ID_KEY = 'parent_session_id';`
      - `export const CHILD_SESSION_KIND_KEY = 'child_session_kind';`
      - `export const CHILD_SESSION_KIND = 'child';`
      - `export interface SessionSummary {`
      - `export interface SessionListQuery {`
      - `export interface SessionCountQuery {`
      - `export type SessionIndexState = 'uninitialized' | 'preparing' | 'ready' | 'degraded';`
      - `export interface SessionIndexStatus {`
      - `export interface ISessionIndex {`
      - `export const ISessionIndex: ServiceIdentifier<ISessionIndex> =`
      - `export interface ISessionIndexMirror {`
      - `export const ISessionIndexMirror: ServiceIdentifier<ISessionIndexMirror> =`
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
