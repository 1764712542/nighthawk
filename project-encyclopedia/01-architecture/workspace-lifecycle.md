# 工作区生命周期

Workspace 是多个 session 共享的资源层，加载一次，fs watch 刷新。

## workspaceId

由 workdir slug 生成；`WorkspaceService.createOrTouch` 写 workspace catalog。

## 共享资源

workspaceSkillCatalog、workspaceAgentProfileLoader、workspaceInstructions、workspaceMcp、workspaceDirs、workspaceFs、workspaceGit、workspaceTrust 等。

## handler

`IWorkspaceLifecycleService.handlerFor(workspaceId)` 创建或获取 handler；handler 存活到进程结束。

## Session seed

workspace 服务通过 session seed adapters 向 session 提供数据并转发变更事件。

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

  - `packages/agent-core-v2/src/app/workspace/workspaceService.ts`：
    - 导出签名/声明：
      - `export class WorkspaceService implements IWorkspaceService`
  - `packages/agent-core-v2/src/workspace/workspaceInstance//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/workspace/workspaceInstance/workspaceInstance.ts`
    - `packages/agent-core-v2/src/workspace/workspaceInstance/workspaceInstanceManager.ts`
    - `packages/agent-core-v2/src/workspace/workspaceInstance/workspaceInstanceManagerService.ts`
  - `packages/agent-core-v2/AGENTS.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/agent-core-v2/src/app/workspace/workspaceService.ts`
- `packages/agent-core-v2/src/workspace/workspaceInstance/`
- `packages/agent-core-v2/AGENTS.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
