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

## 逐函数实现说明

以下按源码文件列出可验证的导出函数/类，并给出实现职责说明。

### packages/agent-core/src/tools/builtin/security/rules.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `rulesForLanguage` | 272 | `export function rulesForLanguage(lang: string): readonly SecurityRule[] {` | `rulesForLanguage` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `detectLanguage` | 276 | `export function detectLanguage(filePath: string): string {` | `detectLanguage` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core/src/tools/builtin/security/sarif-formatter.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `severityToLevel` | 67 | `export function severityToLevel(severity: Severity): 'error' \| 'warning' \| 'note' \| 'none' {` | `severityToLevel` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `normalizeFileUri` | 81 | `export function normalizeFileUri(file: string): string {` | `normalizeFileUri` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `buildSarifRules` | 100 | `export function buildSarifRules(` | `buildSarifRules` 负责创建/构建相关对象或流程。 |
| `formatToSarif` | 150 | `export function formatToSarif(` | `formatToSarif` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

### 来自 `packages/agent-core/src/tools/builtin/security/rules.ts` 的 `rulesForLanguage`

源码位置：`packages/agent-core/src/tools/builtin/security/rules.ts:272` 附近。

```ts
export function rulesForLanguage(lang: string): readonly SecurityRule[] {
  return SECURITY_RULES.filter(r => r.languages.includes('*') || r.languages.includes(lang));
}

export function detectLanguage(filePath: string): string {
  const ext = filePath.split('.').pop()?.toLowerCase() ?? '';
  const m: Record<string, string> = {
    py: 'python',
    js: 'javascript',
    jsx: 'javascript',
    mjs: 'javascript',
    cjs: 'javascript',
    ts: 'typescript',
    tsx: 'typescript',
    java: 'java',
    php: 'php',
    go: 'go',
    rb: 'ruby',
    kt: 'java',
    rs: 'rust',
    c: 'c',
    h: 'c',
    cpp: 'cpp',
    cc: 'cpp',
// ...
```

### 来自 `packages/agent-core/src/tools/builtin/security/sarif-formatter.ts` 的 `severityToLevel`

源码位置：`packages/agent-core/src/tools/builtin/security/sarif-formatter.ts:67` 附近。

```ts
export function severityToLevel(severity: Severity): 'error' | 'warning' | 'note' | 'none' {
  switch (severity) {
    case 'critical':
    case 'high':
      return 'error';
    case 'medium':
      return 'warning';
    case 'low':
      return 'note';
    case 'info':
      return 'none';
  }
}

export function normalizeFileUri(file: string): string {
  let normalized = file;
  if (/^[A-Za-z]:\\/.test(normalized)) {
    normalized = normalized.slice(3);
  }
  if (normalized.startsWith('/')) {
    normalized = normalized.slice(1);
  }
  return normalized.split('\\').join('/');
}
// ...
```


## 时序/状态图

```mermaid
flowchart LR
    A[入口/调用方] --> B[本文核心模块]
    B --> C[依赖服务/数据层]
    C --> D[输出/事件/持久化]
```

> 图注：`10-glossary/security-terms.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

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
