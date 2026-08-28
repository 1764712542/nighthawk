# 工程术语表

解释 Monorepo、workspace、tsdown、changeset、lint-staged、SEA。

## Monorepo

多包在一个仓库管理。

## Workspace

pnpm 的本地包聚合。

## SEA

Node.js Single Executable Application。

## Changeset

描述版本变更的 markdown 文件。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `package.json`（非 TS 源码，可直接阅读）
  - `pnpm-workspace.yaml`（非 TS 源码，可直接阅读）
  - `apps/nighthawk/package.json`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `package.json`
- `pnpm-workspace.yaml`
- `apps/nighthawk/package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
