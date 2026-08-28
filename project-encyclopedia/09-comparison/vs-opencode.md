# 对比 OpenCode

OpenCode 是开源的终端 coding agent，NightHawk 在安全引擎、服务端和协议层更深。

## 相同点

开源、终端 TUI、支持多模型、MCP。

## 工程规模

NightHawk 包含 kap-server、klient、minidb、transcript、native SEA 等；OpenCode 更轻。

## 安全

NightHawk 原生安全工具集是差异化点。

## 扩展

NightHawk 的 DI×Scope Feature 系统让内置能力可插拔可观测。

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
  - `packages/agent-core-v2/docs/features.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `README.zh-CN.md`
- `packages/agent-core-v2/docs/features.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
