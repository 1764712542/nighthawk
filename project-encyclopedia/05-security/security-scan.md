# SecurityScan 漏洞扫描

SecurityScan 用内置规则引擎扫描代码，输出按严重度排序的发现。

## 输入

`path`、`include`、`min_severity`、`categories`。

## 规则覆盖

SQLi、XSS、命令注入、路径穿越、SSRF、反序列化、弱加密、认证缺陷、XXE、Node/Python/Java/Go/PHP 专用。

## 实现

`engine.ts` 的 `collectFiles` + `scanContent`，并发 16，单文件上限 2MB，最多 5000 文件。

## 缓存

`scan-cache-persist.ts` 按文件内容 hash 缓存结果，未变更文件重复扫描更快。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core/src/tools/builtin/security/security-scan.ts` 导出：
    - 符号：`SecurityScanInputSchema`, `SecurityScanInput`, `SecurityScanTool`
  - `packages/agent-core/src/tools/builtin/security/engine.ts` 导出：
    - 符号：`ScanResult`, `FindingKind`, `FindingEvidence`, `NormalizedFinding`, `ScanMetrics`, `ScanReport`, `SecretFinding`, `TaintFinding`, `SKIP_DIRS`, `ScanOptions`, `ScanProgress`, `ScanProgressCallback`, `scanContent`, `ScanCacheKey`, `ScanCacheEntry`, `ScanCache`, `createScanCacheKey`, `formatScanReport`, `scanSecretsInContent`, `formatSecrets`, `taintAnalyzeContent`, `formatTaint`, `secretFindingToNormalized`, `taintFindingToNormalized`
  - `packages/agent-core/src/tools/builtin/security/scan-cache-persist.ts` 导出：
    - 符号：`PersistentScanCache`

## 证据与代码位置

- `packages/agent-core/src/tools/builtin/security/security-scan.ts`
- `packages/agent-core/src/tools/builtin/security/engine.ts`
- `packages/agent-core/src/tools/builtin/security/scan-cache-persist.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
