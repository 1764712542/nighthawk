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

## 证据与代码位置

- `packages/agent-core/src/agent/permission/`
- `packages/agent-core-v2/src/agent/permissionPolicy/`
- `packages/agent-core-v2/docs/Permission.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
