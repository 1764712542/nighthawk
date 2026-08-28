# 核心术语表

解释 Agent、Session、Workspace、Scope、Tool、Skill、MCP 等术语。

## Agent

执行任务的智能体实例，包含 prompt、上下文、工具、状态。

## Session

一次对话/任务的持久单元，包含一个或多个 agent。

## Workspace

按工作目录聚合的共享资源层，多个 session 可共享。

## Scope

DI 生命周期层级：App/Workspace/Session/Agent。

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

  - `packages/agent-core-v2/src/app/scopes.ts`：
    - 导出签名/声明：
      - `export enum LifecycleScope {`
      - `export const SCOPE_TOPOLOGY: readonly LifecycleScope[] = [`
  - `packages/agent-core-v2/docs/di.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/agent-core-v2/src/app/scopes.ts`
- `packages/agent-core-v2/docs/di.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
