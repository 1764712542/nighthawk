# 安全开发规范

仓库对安全开发有明确规则：先过 trust gate、绝对路径解析、依赖审计和 smoke。

## Workspace Trust

启动路径在 trust gate 前不得以裸命令名 spawn 子进程。

## 命令解析

外部命令用 `resolveCommandPath` 解析绝对路径，拒绝 cwd 内匹配。

## 安全 smoke

安全引擎变更后运行 `node scripts/smoke-security.ts`。

## 依赖检查

`pnpm run sherif` 检查 workspace 依赖问题。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `AGENTS.md`（非 TS 源码，可直接阅读）
  - `apps/nighthawk/AGENTS.md`（非 TS 源码，可直接阅读）
  - `scripts/smoke-security.ts`（未发现直接 export 符号，可能以副作用注册为主）

## 证据与代码位置

- `AGENTS.md`
- `apps/nighthawk/AGENTS.md`
- `scripts/smoke-security.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
