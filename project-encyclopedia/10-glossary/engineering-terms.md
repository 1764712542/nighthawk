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

## 专业实现要点（开发流程视角）

### 需求分析

术语表帮助新读者快速理解文档中的专有名词。

### 设计决策

术语按领域分组，给出简短定义和代码映射。

### 实现步骤

从核心文档提取高频术语 → 对照源码确认含义 → 编写定义。

### 验证方式

检查术语是否在正文中被一致使用。

### 维护注意

新增概念时应同步补充术语表。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `package.json`（非 TS 源码，可直接阅读）
  - `pnpm-workspace.yaml`（非 TS 源码，可直接阅读）
  - `apps/nighthawk/package.json`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `package.json`
- `pnpm-workspace.yaml`
- `apps/nighthawk/package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
