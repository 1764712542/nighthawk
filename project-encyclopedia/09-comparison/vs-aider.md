# 对比 Aider

Aider 专注 Git 感知的结对编程；NightHawk 覆盖更广的 agent 和安全审计。

## 定位

Aider 强调命令行 pair programmer、git diff 管理；NightHawk 强调通用 agent + 安全。

## 架构

Aider 是轻量 Python 工具；NightHawk 是大型 TS monorepo。

## 能力

NightHawk 有子 agent、MCP、skills、plugins、server、Web/VS Code；Aider 更聚焦。

## 安全

NightHawk 有渗透测试模式和漏洞规则。

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
  - `docs/en/reference/nighthawk-command.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `README.zh-CN.md`
- `docs/en/reference/nighthawk-command.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
