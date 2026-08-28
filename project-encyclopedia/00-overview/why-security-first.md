# 为什么安全优先

NightHawk 把“审计”当作一等工作流，而不是附加功能；安全能力被设计成 agent 自身的工具。

## 工作流闭环

一句“审计这个仓库的注入风险”就能触发 SecurityScan → TaintTrace → 修复建议的完整链路。安全工具之间共享同一套工具审批、路径安全和结果格式。

## 与通用 coding agent 的差异

市面 coding agent 主要优化“写代码”，NightHawk 还优化“攻破、证明、修复”。这体现在内置 116 条 OWASP/CWE 规则、Shannon 熵密钥检测、跨文件污点追踪和离线/OSV/宿主机包管理器依赖审计。

## 证据

`packages/agent-core/src/tools/builtin/security/rules.ts` 中实际有 116 条规则模板；`scripts/smoke-security.ts` 提供安全引擎冒烟测试。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `README.zh-CN.md`（非 TS 源码，可直接阅读）
  - `packages/agent-core/src/tools/builtin/security/rules.ts` 导出：
    - 符号：`Severity`, `SecurityRule`, `SECURITY_RULES`, `rulesForLanguage`, `detectLanguage`
  - `scripts/smoke-security.ts`（未发现直接 export 符号，可能以副作用注册为主）

## 证据与代码位置

- `README.zh-CN.md`
- `packages/agent-core/src/tools/builtin/security/rules.ts`
- `scripts/smoke-security.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
