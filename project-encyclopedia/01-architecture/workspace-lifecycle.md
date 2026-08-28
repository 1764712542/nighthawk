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

## 证据与代码位置

- `packages/agent-core-v2/src/app/workspace/workspaceService.ts`
- `packages/agent-core-v2/src/workspace/workspaceInstance/`
- `packages/agent-core-v2/AGENTS.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
