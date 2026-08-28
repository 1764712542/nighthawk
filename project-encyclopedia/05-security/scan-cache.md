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

  - `packages/agent-core/src/tools/builtin/security/scan-cache-persist.ts`：
    - 导出签名/声明：
      - `export class PersistentScanCache extends ScanCache`
      - `export async function createScanCache(workspaceDir: string): Promise<PersistentScanCache>`
  - `packages/agent-core/src/tools/builtin/security/engine.ts`：
    - 导出签名/声明：
      - `export type { Severity } from './rules';`
      - `export interface ScanResult {`
      - `export type FindingKind = 'rule' | 'ast' | 'secret' | 'taint' | 'dep';`
      - `export interface FindingEvidence {`
      - `export interface NormalizedFinding {`
      - `export interface ScanMetrics {`
      - `export interface ScanReport {`
      - `export interface SecretFinding {`
      - `export interface TaintFinding {`
      - `export const SKIP_DIRS = new Set([`
      - `export interface ScanOptions {`
      - `export interface ScanProgress {`
      - `export type ScanProgressCallback = (progress: ScanProgress) => void;`
      - `export async function collectFiles(
  kaos: Kaos,
  root: string,
  include?: string,
  maxFiles = MAX_SCAN_FILES,
): Promise<string[]>`
      - `export function scanContent(content: string, file: string, rules: readonly SecurityRule[]): ScanResult[]`
      - `export async function runScan(
  kaos: Kaos,
  opts: ScanOptions,
  cache?: ScanCache,
  createCache?: () => Promise<ScanCache>,
): Promise<ScanReport>`
      - `export interface ScanCacheKey {`
      - `export interface ScanCacheEntry {`
      - `export class ScanCache`
      - `export function createScanCacheKey(version: string, file: string, content: string): ScanCacheKey`
      - `export function formatScanReport(report: ScanReport, outputFormat?: 'text' | 'sarif'): string`
      - `export function scanSecretsInContent(content: string, file: string): SecretFinding[]`
      - `export async function scanSecrets(kaos: Kaos, root: string, include?: string): Promise<SecretFinding[]>`
      - `export function formatSecrets(findings: readonly SecretFinding[]): string`
      - `export function taintAnalyzeContent(content: string, file: string): TaintFinding[]`
      - `export async function taintAnalyze(kaos: Kaos, file: string): Promise<TaintFinding[]>`
      - `export async function taintAnalyzeModule(kaos: Kaos, file: string): Promise<TaintFinding[]>`
      - `export function formatTaint(findings: readonly TaintFinding[]): string`
      - `export function secretFindingToNormalized(f: SecretFinding): NormalizedFinding`
      - `export function taintFindingToNormalized(f: TaintFinding): NormalizedFinding`

## 证据与代码位置

- `packages/agent-core/src/tools/builtin/security/scan-cache-persist.ts`
- `packages/agent-core/src/tools/builtin/security/engine.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
