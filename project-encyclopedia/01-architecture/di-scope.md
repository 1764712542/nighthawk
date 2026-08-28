# DI × Scope 架构

agent-core-v2 使用自研依赖注入与四层 Scope，服务通过装饰器身份注册，状态归属决定生命周期。

## 服务身份

每个服务接口用 `createDecorator(name)` 创建全局唯一 `ServiceIdentifier`，实现类通过 `registerScopedService(scope, id, ctor, activation, domain)` 注册。

## Scope

App（进程级）、Workspace（每工作区）、Session（每会话）、Agent（每 agent）。子 scope 可以访问父 scope 服务，反之不行。

## 贡献点

Collection、ScopeUnits、Feature、ConfigSection、AgentToolContribution、EventStateContribution、CommandContribution 等。

## 级联与 Ledger

provide/unprovide/update 以事务方式执行，依赖图变化触发级联重建；Ledger 记录有序副作用并逆序销毁。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core-v2/src/_base/di/scope.ts` 导出：
    - 符号：`ScopeKind`, `setScopeTopology`, `ScopedEntry`, `registerScopedService`, `overrideScopedService`, `getScopedServiceDescriptors`, `_clearScopedRegistryForTests`, `ScopeSeed`, `ScopeOptions`, `IScopeHandle`, `IAppScopeHandle`, `ISessionScopeHandle`, `IAgentScopeHandle`, `createScopedChildHandle`, `Scope`, `createAppScope`
  - `packages/agent-core-v2/docs/di.md`（非 TS 源码，可直接阅读）
  - `packages/agent-core-v2/src/app/scopes.ts` 导出：
    - 符号：`LifecycleScope`, `SCOPE_TOPOLOGY`

## 证据与代码位置

- `packages/agent-core-v2/src/_base/di/scope.ts`
- `packages/agent-core-v2/docs/di.md`
- `packages/agent-core-v2/src/app/scopes.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
