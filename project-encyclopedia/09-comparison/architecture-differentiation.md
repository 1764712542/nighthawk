# 架构与工程化差异化

NightHawk 的开放架构、契约测试、可观测 DI 是很多闭源 agent 无法直接比较的部分。

## 契约驱动 SDK

klient contract 与引擎类型编译期 parity，防止 schema 漂移。

## DI 可观测

nighthawk-inspect 能看到 unit tree、graph、cascade，调试 agent 引擎像调试 IDE。

## 传输一致性

memory 和 IPC 跑同一套 conformance suite，保证字节级一致。

## Nix/SEA

可复现构建和单文件原生分发降低部署成本。

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

  - `packages/klient/README.md`（非 TS 源码，可直接阅读）
  - `apps/nighthawk-inspect/README.md`（非 TS 源码，可直接阅读）
  - `flake.nix`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/klient/README.md`
- `apps/nighthawk-inspect/README.md`
- `flake.nix`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
