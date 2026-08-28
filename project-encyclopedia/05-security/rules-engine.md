# 116 条规则引擎

规则引擎由模板数组生成 SecurityRule，每条规则带 CWE/OWASP、严重度、中英文修复建议。

## 规则结构

`SecurityRule` 含 id、name、nameZh、severity、category、cwe、owasp、languages、patterns、description、fix。

## 分类

sqli、xss、cmdi、path、ssrf、deser、crypto、auth、xxe、node、python、java、go、php、dep。

## 数量

脚本统计 `rules.ts` 中 `['...',` 条目共 116 条。

## 映射

`owaspFor(cwe)` 把 CWE 映射到 OWASP Top 10 2021 的 A 编号。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core/src/tools/builtin/security/rules.ts` 导出：
    - 符号：`Severity`, `SecurityRule`, `SECURITY_RULES`, `rulesForLanguage`, `detectLanguage`

## 证据与代码位置

- `packages/agent-core/src/tools/builtin/security/rules.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
