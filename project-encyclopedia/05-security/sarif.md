# SARIF 输出

安全引擎支持把扫描结果格式化为 SARIF。

## 文件

`sarif-formatter.ts` 提供 `formatToSarif`。

## 结构

ScanReport 可带 `sarif` 字段。

## 用途

对接 GitHub Code Scanning、IDE 插件等 SARIF 消费者。

## 证据

`engine.ts` 中 `SarifLog` 类型和 `formatToSarif` 引用。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core/src/tools/builtin/security/sarif-formatter.ts` 导出：
    - 符号：`SarifLog`, `SarifRun`, `SarifTool`, `SarifReportingDescriptor`, `SarifResult`, `SarifInvocation`, `SarifFormatterOptions`, `severityToLevel`, `normalizeFileUri`, `RuleInfo`, `buildSarifRules`, `formatToSarif`
  - `packages/agent-core/src/tools/builtin/security/engine.ts` 导出：
    - 符号：`ScanResult`, `FindingKind`, `FindingEvidence`, `NormalizedFinding`, `ScanMetrics`, `ScanReport`, `SecretFinding`, `TaintFinding`, `SKIP_DIRS`, `ScanOptions`, `ScanProgress`, `ScanProgressCallback`, `scanContent`, `ScanCacheKey`, `ScanCacheEntry`, `ScanCache`, `createScanCacheKey`, `formatScanReport`, `scanSecretsInContent`, `formatSecrets`, `taintAnalyzeContent`, `formatTaint`, `secretFindingToNormalized`, `taintFindingToNormalized`

## 证据与代码位置

- `packages/agent-core/src/tools/builtin/security/sarif-formatter.ts`
- `packages/agent-core/src/tools/builtin/security/engine.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
