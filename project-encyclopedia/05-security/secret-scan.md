# SecretScan 密钥检测

SecretScan 检测硬编码凭据，结合已知 token 格式与 Shannon 熵评分。

## 模式

AWS/GCP/Azure 密钥、GitHub token、Stripe、OpenAI 等。

## 熵

对疑似 key 计算 Shannon entropy，低于阈值的低置信结果被过滤。

## 输出

file、line、type、preview、entropy、confidence。

## 使用

`SecretScan` 工具参数 `path`/`include`，默认扫 workspace。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core/src/tools/builtin/security/secret-scan.ts` 导出：
    - 符号：`SecretScanInputSchema`, `SecretScanInput`, `SecretScanTool`
  - `packages/agent-core/src/tools/builtin/security/engine.ts` 导出：
    - 符号：`ScanResult`, `FindingKind`, `FindingEvidence`, `NormalizedFinding`, `ScanMetrics`, `ScanReport`, `SecretFinding`, `TaintFinding`, `SKIP_DIRS`, `ScanOptions`, `ScanProgress`, `ScanProgressCallback`, `scanContent`, `ScanCacheKey`, `ScanCacheEntry`, `ScanCache`, `createScanCacheKey`, `formatScanReport`, `scanSecretsInContent`, `formatSecrets`, `taintAnalyzeContent`, `formatTaint`, `secretFindingToNormalized`, `taintFindingToNormalized`

## 证据与代码位置

- `packages/agent-core/src/tools/builtin/security/secret-scan.ts`
- `packages/agent-core/src/tools/builtin/security/engine.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
