# TaintTrace 污点追踪

TaintTrace 从用户可控源追踪赋值链到危险汇点，默认跨文件按模块图分析。

## 源

HTTP 参数、req.query、环境变量、stdin、superglobals。

## 汇点

SQL execute、shell exec、eval、DOM write、文件操作、HTTP 请求、反序列化。

## 作用域

`scope: file` 单文件，`scope: module` 跨 import/require。

## 输出

source、sink、varName、flow。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core/src/tools/builtin/security/taint-trace.ts` 导出：
    - 符号：`TaintTraceInputSchema`, `TaintTraceInput`, `TaintTraceInputArgs`, `TaintTraceTool`
  - `packages/agent-core/src/tools/builtin/security/engine.ts` 导出：
    - 符号：`ScanResult`, `FindingKind`, `FindingEvidence`, `NormalizedFinding`, `ScanMetrics`, `ScanReport`, `SecretFinding`, `TaintFinding`, `SKIP_DIRS`, `ScanOptions`, `ScanProgress`, `ScanProgressCallback`, `scanContent`, `ScanCacheKey`, `ScanCacheEntry`, `ScanCache`, `createScanCacheKey`, `formatScanReport`, `scanSecretsInContent`, `formatSecrets`, `taintAnalyzeContent`, `formatTaint`, `secretFindingToNormalized`, `taintFindingToNormalized`

## 证据与代码位置

- `packages/agent-core/src/tools/builtin/security/taint-trace.ts`
- `packages/agent-core/src/tools/builtin/security/engine.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
