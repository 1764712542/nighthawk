# 安全术语表

解释 OWASP、CWE、SARIF、污点分析、Shannon entropy、SSRF、XXE。

## OWASP Top 10

Web 应用安全风险 Top 10 列表。

## CWE

Common Weakness Enumeration，通用弱点枚举。

## SARIF

Static Analysis Results Interchange Format。

## Taint

不可信输入沿数据流传播到危险操作。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core/src/tools/builtin/security/rules.ts` 导出：
    - 符号：`Severity`, `SecurityRule`, `SECURITY_RULES`, `rulesForLanguage`, `detectLanguage`
  - `packages/agent-core/src/tools/builtin/security/sarif-formatter.ts` 导出：
    - 符号：`SarifLog`, `SarifRun`, `SarifTool`, `SarifReportingDescriptor`, `SarifResult`, `SarifInvocation`, `SarifFormatterOptions`, `severityToLevel`, `normalizeFileUri`, `RuleInfo`, `buildSarifRules`, `formatToSarif`

## 证据与代码位置

- `packages/agent-core/src/tools/builtin/security/rules.ts`
- `packages/agent-core/src/tools/builtin/security/sarif-formatter.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
