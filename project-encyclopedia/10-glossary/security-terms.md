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

## 专业实现要点（开发流程视角）

### 需求分析

术语表帮助新读者快速理解文档中的专有名词。

### 设计决策

术语按领域分组，给出简短定义和代码映射。

### 实现步骤

从核心文档提取高频术语 → 对照源码确认含义 → 编写定义。

### 验证方式

检查术语是否在正文中被一致使用。

### 维护注意

新增概念时应同步补充术语表。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/agent-core/src/tools/builtin/security/rules.ts`：
    - 导出签名/声明：
      - `export type Severity = 'critical' | 'high' | 'medium' | 'low' | 'info';`
      - `export interface SecurityRule {`
      - `export const SECURITY_RULES: readonly SecurityRule[] = [`
      - `export function rulesForLanguage(lang: string): readonly SecurityRule[]`
      - `export function detectLanguage(filePath: string): string`
  - `packages/agent-core/src/tools/builtin/security/sarif-formatter.ts`：
    - 导出签名/声明：
      - `export interface SarifLog {`
      - `export interface SarifRun {`
      - `export interface SarifTool {`
      - `export interface SarifReportingDescriptor {`
      - `export interface SarifResult {`
      - `export interface SarifInvocation {`
      - `export interface SarifFormatterOptions {`
      - `export function severityToLevel(severity: Severity): 'error' | 'warning' | 'note' | 'none'`
      - `export function normalizeFileUri(file: string): string`
      - `export interface RuleInfo {`
      - `export function buildSarifRules(
  findings: NormalizedFinding[],
  allRules?: RuleInfo[],
): SarifReportingDescriptor[]`
      - `export function formatToSarif(
  findings: NormalizedFinding[],
  metrics?: ScanMetrics,
  options?: SarifFormatterOptions,
): SarifLog`

## 证据与代码位置

- `packages/agent-core/src/tools/builtin/security/rules.ts`
- `packages/agent-core/src/tools/builtin/security/sarif-formatter.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
