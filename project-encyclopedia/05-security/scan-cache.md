# 扫描缓存

SecurityScan 使用持久化扫描缓存，未变更文件不重复计算。

## Key

基于文件内容 hash 和版本号。

## 持久化

`scan-cache-persist.ts` 按批写盘，默认每 100 文件持久化。

## 降级

缓存不可用则无缓存扫描。

## 指标

ScanMetrics 包含 cacheHits、filesScanned、durationMs。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core/src/tools/builtin/security/scan-cache-persist.ts` 导出：
    - 符号：`PersistentScanCache`
  - `packages/agent-core/src/tools/builtin/security/engine.ts` 导出：
    - 符号：`ScanResult`, `FindingKind`, `FindingEvidence`, `NormalizedFinding`, `ScanMetrics`, `ScanReport`, `SecretFinding`, `TaintFinding`, `SKIP_DIRS`, `ScanOptions`, `ScanProgress`, `ScanProgressCallback`, `scanContent`, `ScanCacheKey`, `ScanCacheEntry`, `ScanCache`, `createScanCacheKey`, `formatScanReport`, `scanSecretsInContent`, `formatSecrets`, `taintAnalyzeContent`, `formatTaint`, `secretFindingToNormalized`, `taintFindingToNormalized`

## 证据与代码位置

- `packages/agent-core/src/tools/builtin/security/scan-cache-persist.ts`
- `packages/agent-core/src/tools/builtin/security/engine.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
