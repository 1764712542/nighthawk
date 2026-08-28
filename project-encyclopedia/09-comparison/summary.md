# 差异总结表

一张表总结 NightHawk 与主流 coding agent 的差异。

## 表

| 维度 | NightHawk | Codex | Claude Code | Cursor | Aider |
| --- | --- | --- | --- | --- | --- |
| 形态 | 终端+TUI+Server+VS Code | CLI/IDE | CLI | IDE | CLI |
| 开源 | MIT 仓库 | 否 | 否 | 否 | 是 |
| 模型中立 | 多供应商 | OpenAI 系 | Anthropic 系 | 多供应商 | 多供应商 |
| 内置安全引擎 | 有 | 弱 | 弱 | 弱 | 无 |
| MCP | 是 | 部分 | 是 | 是 | 部分 |
| Skills/Plugin | 是 | 部分 | 部分 | 部分 | 否 |
| 自托管 Server | 是 | 否 | 否 | 否 | 否 |
| 可观测 DI | 是 | 否 | 否 | 否 | 否 |

## 说明

表中“弱/部分”表示该产品可能依赖外部工具或仅有限支持；NightHawk 的结论可从本仓库源码验证。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `README.zh-CN.md`（非 TS 源码，可直接阅读）
  - `packages/agent-core-v2/docs/features.md`（非 TS 源码，可直接阅读）
  - `packages/kap-server/package.json`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `README.zh-CN.md`
- `packages/agent-core-v2/docs/features.md`
- `packages/kap-server/package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
