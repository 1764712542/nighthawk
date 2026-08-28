# 安全差异化详解

NightHawk 的“安全优先”不是宣传语，而是代码中的一等工具和工程守卫。

## 内置规则

116 条规则映射 OWASP/CWE，且每条带中英文修复建议。

## 污点追踪

跨文件 module scope 的 TaintTrace 是多数 coding agent 没有的能力。

## 依赖审计

离线已知风险 + OSV + 宿主机包管理器三重来源。

## 权限

扩展进入统一审批，格式自由但行为不自由。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core/src/tools/builtin/security/rules.ts` 导出：
    - 符号：`Severity`, `SecurityRule`, `SECURITY_RULES`, `rulesForLanguage`, `detectLanguage`
  - `packages/agent-core/src/tools/builtin/security/taint-trace.ts` 导出：
    - 符号：`TaintTraceInputSchema`, `TaintTraceInput`, `TaintTraceInputArgs`, `TaintTraceTool`
  - `docs/architecture/plugin-and-extension-design.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/agent-core/src/tools/builtin/security/rules.ts`
- `packages/agent-core/src/tools/builtin/security/taint-trace.ts`
- `docs/architecture/plugin-and-extension-design.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
