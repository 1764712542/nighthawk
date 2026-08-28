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

## 证据与代码位置

- `packages/agent-core/src/tools/builtin/security/scan-cache-persist.ts`
- `packages/agent-core/src/tools/builtin/security/engine.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
