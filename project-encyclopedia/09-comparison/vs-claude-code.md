# 对比 Claude Code

Claude Code 是 Anthropic 的终端 agent，NightHawk 在安全引擎、开放协议和供应商中立上不同。

## 相同点

都强调终端体验、agent 循环、工具调用、MCP 支持。

## 模型绑定

Claude Code 深度绑定 Claude 模型；NightHawk 通过 kosong 支持 OpenAI/Anthropic/Google/DeepSeek 和兼容端点。

## 安全

NightHawk 把 OWASP/CWE 规则、污点追踪作为一等工具；Claude Code 没有同等内置安全工具集。

## 开源程度

NightHawk 源码仓库公开且 MIT；Claude Code 不开源。

## 专业实现要点（开发流程视角）

### 需求分析

对比文档要基于可验证事实，而不是营销话术。

### 设计决策

从形态、开源、模型中立、安全、扩展、可观测、部署等维度对比。

### 实现步骤

列出 NightHawk 源码证据 → 与公开产品信息对照 → 给出差异结论。

### 验证方式

每个结论尽量引用仓库文件路径；无法验证的标为“公开信息/生态判断”。

### 维护注意

竞品功能会变化，定期复核，避免过时结论。

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

> 图注：`09-comparison/vs-claude-code.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/kosong/README.md`（非 TS 源码，可直接阅读）
  - `README.zh-CN.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/kosong/README.md`
- `README.zh-CN.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
