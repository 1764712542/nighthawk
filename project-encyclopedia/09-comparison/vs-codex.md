# 对比 OpenAI Codex

NightHawk 与 Codex 的差异集中在安全工具、开放性和终端形态。

## 相同点

都提供 agent loop、文件编辑、shell、上下文管理。

## 安全

NightHawk 内置 116 条漏洞规则、TaintTrace、SecretScan、DepAudit；Codex 依赖外部工具或 API。

## 开放

NightHawk 有完整 TypeScript SDK、REST/WS 协议、可自托管 server；Codex 以托管/IDE 生态为主。

## 终端

NightHawk TUI 原生毫秒启动、可 SSH；Codex CLI 也支持终端，但 NightHawk 把安全审计做成工作流。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `README.zh-CN.md`（非 TS 源码，可直接阅读）
  - `docs/en/reference/tools.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `README.zh-CN.md`
- `docs/en/reference/tools.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
