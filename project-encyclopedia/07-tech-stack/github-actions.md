# CI/CD

GitHub Actions 做构建、分片测试、lint、typecheck、安全 smoke。

## Workflows

`.github/workflows/` 包含 PR 和 push 流水线。

## 测试分片

5 个 vitest shard；pi-tui 单独；VS Code legacy 单独。

## Lint

oxlint + sherif + 仓库守卫。

## 发布

Changesets action 管理版本 PR 和 npm publish。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `.github/workflows//`（目录内无 .ts 文件）
  - `AGENTS.md`（非 TS 源码，可直接阅读）
  - `package.json`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `.github/workflows/`
- `AGENTS.md`
- `package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
