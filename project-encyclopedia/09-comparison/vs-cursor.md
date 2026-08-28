# 对比 Cursor

Cursor 是 IDE 型 coding agent；NightHawk 是终端+服务端型 agent，可嵌入 IDE 但不依赖 IDE。

## 界面

Cursor 以编辑器为中心；NightHawk 以终端 TUI 和 server API 为中心。

## 架构

Cursor 是商业 IDE 插件生态；NightHawk 是 monorepo 可自托管。

## 扩展

Cursor 有 rules/AGENTS 和 MCP；NightHawk 同时支持 Skills、Plugin、MCP。

## 安全

NightHawk 提供渗透测试模式和报告生成，Cursor 不具备。

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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `apps/vscode/README.md`（非 TS 源码，可直接阅读）
  - `docs/en/guides/ides.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `apps/vscode/README.md`
- `docs/en/guides/ides.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
