# 权限规则参考

allow/ask/deny DSL、模式、会话记忆和敏感路径。

## DSL

用户/项目配置的规则可精确匹配工具和参数。

## 模式

normal/yolo/auto；`--yolo` 跳过常规审批，`--auto` 全自动。

## 记忆

“approve for session” 会缓存批准。

## 路径

敏感文件、git 控制路径需要特殊审批。

## 专业实现要点（开发流程视角）

### 需求分析

参考手册要支持用户快速查找参数、命令、API、协议。

### 设计决策

以表格和代码块为主，保持条目化、可复制。

### 实现步骤

从 CLI 定义、protocol schema、SDK 类型和路由源码提取事实。

### 验证方式

运行 `nighthawk --help`、`pnpm doctor` 或对照 schema 测试。

### 维护注意

参考内容随代码变更同步更新。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

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
    - `packages/agent-core/src/agent/permission/types.ts`
  - `packages/agent-core-v2/src/agent/permissionRules//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/agent/permissionRules/configSection.ts`
    - `packages/agent-core-v2/src/agent/permissionRules/matchesRule.ts`
    - `packages/agent-core-v2/src/agent/permissionRules/permissionRules.ts`
    - `packages/agent-core-v2/src/agent/permissionRules/permissionRulesOps.ts`
    - `packages/agent-core-v2/src/agent/permissionRules/permissionRulesService.ts`
  - `docs/en/configuration/config-files.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/agent-core/src/agent/permission/`
- `packages/agent-core-v2/src/agent/permissionRules/`
- `docs/en/configuration/config-files.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
