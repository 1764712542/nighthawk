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

## 逐函数实现说明

以下按源码文件列出可验证的导出函数/类，并给出实现职责说明。


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

> 本文证据路径没有可直接展示的 TS 源码片段。

## 时序/状态图

```mermaid
flowchart LR
    A[入口/调用方] --> B[本文核心模块]
    B --> C[依赖服务/数据层]
    C --> D[输出/事件/持久化]
```

> 图注：`10-glossary/core-terms.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

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
