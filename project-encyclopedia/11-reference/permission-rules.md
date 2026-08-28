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

## 证据与代码位置

- `packages/agent-core/src/agent/permission/`
- `packages/agent-core-v2/src/agent/permissionRules/`
- `docs/en/configuration/config-files.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
