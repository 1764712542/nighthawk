# 产品定位与设计哲学

NightHawk 的设计哲学是“进攻性安全与严肃工程属于同一个 Agent”，扩展体系兼容多格式而不是自造方言。

## 安全不是插件而是内核

安全工具不是外挂 MCP，而是作为一等工具内建在 `packages/agent-core/src/tools/builtin/security/`。Agent 可以在会话中随时调用 SecurityScan、TaintTrace 等工具，不需要切换 IDE。

## 多格式扩展兼容

项目同时支持 MCP、SKILL.md、插件 manifest、OpenAI function calling JSON Schema。文档 `docs/architecture/plugin-and-extension-design.md` 对此有完整论述。

## 终端原生

TUI 由 `packages/pi-tui` 驱动，毫秒级启动，可 over SSH，不需要 IDE。

## 供应商无关

LLM 抽象层在 `packages/kosong`，支持 OpenAI、Anthropic、Google、DeepSeek 与兼容端点。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `README.zh-CN.md`（非 TS 源码，可直接阅读）
  - `docs/architecture/plugin-and-extension-design.md`（非 TS 源码，可直接阅读）
  - `packages/kosong/README.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `README.zh-CN.md`
- `docs/architecture/plugin-and-extension-design.md`
- `packages/kosong/README.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
