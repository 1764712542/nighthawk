# 与市面 Coding Agent 的差异总览

NightHawk 与 Codex、Claude Code、Cursor 等的主要差异在于安全原生、终端优先、开放协议和多层扩展。

## 定位差异

多数 coding agent 是“帮你写代码”，NightHawk 同时是“帮你审计和攻破代码”的安全工作台。

## 架构差异

NightHawk 是 TypeScript monorepo + 自研 DI×Scope 引擎 + 开放 REST/WS/SDK；闭源产品通常不公开内部。

## 扩展差异

NightHawk 同时兼容 MCP、SKILL.md、插件 manifest 和 OpenAI function schema，而不是锁定单一插件格式。

## 部署差异

NightHawk 可本地 SEA 单文件、npm 包、server/Web、VS Code 扩展多种形态。

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

  - `README.zh-CN.md`（非 TS 源码，可直接阅读）
  - `docs/architecture/plugin-and-extension-design.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `README.zh-CN.md`
- `docs/architecture/plugin-and-extension-design.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
