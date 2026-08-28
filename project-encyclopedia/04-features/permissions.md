# 权限与审批

权限系统是责任链，工具声明资源访问，policy 决策 approve/ask/deny。

## 责任链

v1 有 19 个 policy，v2 重构为 PermissionPolicy 服务 + veto 事件。

## 模式

normal/yolo/auto 模式；`--yolo` 跳过常规审批，`--auto` 不问用户。

## 资源声明

工具在 resolveExecution 中声明 ToolAccesses（file/all 等），policy 消费这些元数据。

## 设计文档

`packages/agent-core-v2/docs/Permission.md` 详细解释了为什么不引入 Casbin。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core/src/agent/permission//` 目录下源码文件示例：
    - `packages/agent-core/src/agent/permission/index.ts`
    - `packages/agent-core/src/agent/permission/matches-rule.ts`
    - `packages/agent-core/src/agent/permission/policies/agent-swarm-exclusive-deny.ts`
    - `packages/agent-core/src/agent/permission/policies/auto-mode-approve.ts`
    - `packages/agent-core/src/agent/permission/policies/auto-mode-ask-user-question-deny.ts`
    - `packages/agent-core/src/agent/permission/policies/default-tool-approve.ts`
    - `packages/agent-core/src/agent/permission/policies/deny-all.ts`
    - `packages/agent-core/src/agent/permission/policies/exit-plan-mode-review-ask.ts`
    - `packages/agent-core/src/agent/permission/policies/fallback-ask.ts`
    - `packages/agent-core/src/agent/permission/policies/file-access-ask.ts`
    - `packages/agent-core/src/agent/permission/policies/git-cwd-write-approve.ts`
    - `packages/agent-core/src/agent/permission/policies/goal-start-review-ask.ts`
    - `packages/agent-core/src/agent/permission/policies/index.ts`
    - `packages/agent-core/src/agent/permission/policies/plan-mode-guard-deny.ts`
    - `packages/agent-core/src/agent/permission/policies/plan-mode-tool-approve.ts`
    - `packages/agent-core/src/agent/permission/policies/pre-tool-call-hook.ts`
    - `packages/agent-core/src/agent/permission/policies/session-approval-history.ts`
    - `packages/agent-core/src/agent/permission/policies/swarm-mode-agent-swarm-approve.ts`
    - `packages/agent-core/src/agent/permission/policies/user-configured-rules.ts`
    - `packages/agent-core/src/agent/permission/policies/yolo-mode-approve.ts`
  - `packages/agent-core-v2/src/agent/permissionPolicy//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/agent/permissionPolicy/permissionPolicy.ts`
    - `packages/agent-core-v2/src/agent/permissionPolicy/permissionPolicyService.ts`
    - `packages/agent-core-v2/src/agent/permissionPolicy/policies/auto-mode-approve.ts`
    - `packages/agent-core-v2/src/agent/permissionPolicy/policies/auto-mode-ask-user-question-deny.ts`
    - `packages/agent-core-v2/src/agent/permissionPolicy/policies/default-tool-approve.ts`
    - `packages/agent-core-v2/src/agent/permissionPolicy/policies/fallback-ask.ts`
    - `packages/agent-core-v2/src/agent/permissionPolicy/policies/git-control-path-access-ask.ts`
    - `packages/agent-core-v2/src/agent/permissionPolicy/policies/git-cwd-write-approve.ts`
    - `packages/agent-core-v2/src/agent/permissionPolicy/policies/path-utils.ts`
    - `packages/agent-core-v2/src/agent/permissionPolicy/policies/sensitive-file-access-ask.ts`
    - `packages/agent-core-v2/src/agent/permissionPolicy/policies/session-approval-history.ts`
    - `packages/agent-core-v2/src/agent/permissionPolicy/policies/user-configured-allow.ts`
    - `packages/agent-core-v2/src/agent/permissionPolicy/policies/user-configured-ask.ts`
    - `packages/agent-core-v2/src/agent/permissionPolicy/policies/user-configured-deny.ts`
    - `packages/agent-core-v2/src/agent/permissionPolicy/policies/user-configured-rule.ts`
    - `packages/agent-core-v2/src/agent/permissionPolicy/policies/yolo-mode-approve.ts`
    - `packages/agent-core-v2/src/agent/permissionPolicy/types.ts`
  - `packages/agent-core-v2/docs/Permission.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/agent-core/src/agent/permission/`
- `packages/agent-core-v2/src/agent/permissionPolicy/`
- `packages/agent-core-v2/docs/Permission.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
