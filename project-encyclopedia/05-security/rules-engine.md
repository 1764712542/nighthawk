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

## 专业实现要点（开发流程视角）

### 需求分析

安全工具要能作为 Agent 工具被调用，也要能被脚本/CI 使用。

### 设计决策

规则用模板数组声明，统一 CWE/OWASP/严重度/修复建议；扫描用 Kaos 抽象文件系统，便于远程执行。

### 实现步骤

定义规则 → 实现扫描引擎 → 包装为 BuiltinTool → 加缓存/SARIF/冒烟测试。

### 验证方式

运行 `node scripts/smoke-security.ts`，用已知漏洞样本验证 SecurityScan/SecretScan/TaintTrace/DepAudit。

### 维护注意

新规则要覆盖多语言、提供中英文修复建议，并考虑误报率。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/agent-core/src/tools/builtin/security/rules.ts`：
    - 导出签名/声明：
      - `export type Severity = 'critical' | 'high' | 'medium' | 'low' | 'info';`
      - `export interface SecurityRule {`
      - `export const SECURITY_RULES: readonly SecurityRule[] = [`
      - `export function rulesForLanguage(lang: string): readonly SecurityRule[]`
      - `export function detectLanguage(filePath: string): string`

## 证据与代码位置

- `packages/agent-core/src/tools/builtin/security/rules.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
