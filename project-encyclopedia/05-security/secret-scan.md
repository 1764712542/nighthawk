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

  - `packages/agent-core/src/tools/builtin/security/secret-scan.ts`：
    - 导出签名/声明：
      - `export const SecretScanInputSchema = z.object({`
      - `export type SecretScanInput = z.infer<typeof SecretScanInputSchema>;`
      - `export class SecretScanTool implements BuiltinTool<SecretScanInput>`
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

- `packages/agent-core/src/tools/builtin/security/secret-scan.ts`
- `packages/agent-core/src/tools/builtin/security/engine.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
