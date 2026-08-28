# 安全引擎与 Agent 集成

安全工具是一等 Agent 工具，遵循统一审批、路径安全和结果格式。

## Tool 类

SecurityScanTool、SecretScanTool、TaintTraceTool、DepAuditTool 都实现 `BuiltinTool`。

## resolveExecution

每个工具声明 `accesses` 和 `approvalRule`，纳入权限链。

## 路径安全

用 `resolvePathAccessPath` 解析路径，遵守 workspace 边界。

## v2 迁移

`packages/agent-core-v2/src/features/security/` 把安全工具移植到 v2 引擎。

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

## 逐函数实现说明

以下按源码文件列出可验证的导出函数/类，并给出实现职责说明。

### packages/agent-core-v2/src/features/security/engine/dep-audit.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `collectDependencyManifests` | 68 | `export async function collectDependencyManifests(fs: IHostFileSystem, root: string): Promise<DepAuditManifest[]> {` | `collectDependencyManifests` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `parsePackageJson` | 85 | `export function parsePackageJson(manifestPath: string, content: string): DepAuditFinding[] {` | `parsePackageJson` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `parseRequirementsTxt` | 150 | `export function parseRequirementsTxt(content: string): DepAuditFinding[] {` | `parseRequirementsTxt` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `parseGoMod` | 173 | `export function parseGoMod(content: string): DepAuditFinding[] {` | `parseGoMod` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `detectPackageManager` | 206 | `export async function detectPackageManager(fs: IHostFileSystem, root: string): Promise<LockFileInfo \| undefined> {` | `detectPackageManager` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `parseNpmAuditJson` | 227 | `export function parseNpmAuditJson(` | `parseNpmAuditJson` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `parsePipAuditJson` | 268 | `export function parsePipAuditJson(raw: string): DepAuditFinding[] {` | `parsePipAuditJson` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `depFindingToNormalized` | 302 | `export function depFindingToNormalized(f: DepAuditFinding): NormalizedFinding {` | `depFindingToNormalized` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core-v2/src/features/security/engine/engine.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `collectFiles` | 117 | `export async function collectFiles(` | 收集待扫描/待处理的文件列表，支持目录递归与过滤。 |
| `scanContent` | 157 | `export function scanContent(content: string, file: string, rules: readonly SecurityRule[]): ScanResult[] {` | 对单个文件内容执行规则扫描，返回命中结果。 |
| `runScan` | 202 | `export async function runScan(` | 运行完整扫描流程，包括文件收集、并发扫描、缓存和报告。 |
| `createScanCacheKey` | 402 | `export function createScanCacheKey(version: string, file: string, content: string): ScanCacheKey {` | `createScanCacheKey` 负责创建/构建相关对象或流程。 |
| `formatScanReport` | 418 | `export function formatScanReport(report: ScanReport, outputFormat?: 'text' \| 'sarif'): string {` | 把扫描报告格式化为文本或 SARIF。 |
| `scanSecretsInContent` | 493 | `export function scanSecretsInContent(content: string, file: string): SecretFinding[] {` | `scanSecretsInContent` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `scanSecrets` | 530 | `export async function scanSecrets(fs: IHostFileSystem, root: string, include?: string): Promise<SecretFinding[]> {` | 扫描目录或文件中的硬编码密钥。 |
| `formatSecrets` | 553 | `export function formatSecrets(findings: readonly SecretFinding[]): string {` | `formatSecrets` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `taintAnalyzeContent` | 671 | `export function taintAnalyzeContent(content: string, file: string): TaintFinding[] {` | `taintAnalyzeContent` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `taintAnalyze` | 679 | `export async function taintAnalyze(fs: IHostFileSystem, file: string): Promise<TaintFinding[]> {` | 在单个文件中执行污点分析。 |
| `taintAnalyzeModule` | 793 | `export async function taintAnalyzeModule(fs: IHostFileSystem, file: string): Promise<TaintFinding[]> {` | 沿模块导入关系执行跨文件污点分析。 |
| `formatTaint` | 892 | `export function formatTaint(findings: readonly TaintFinding[]): string {` | `formatTaint` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `secretFindingToNormalized` | 910 | `export function secretFindingToNormalized(f: SecretFinding): NormalizedFinding {` | `secretFindingToNormalized` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `taintFindingToNormalized` | 927 | `export function taintFindingToNormalized(f: TaintFinding): NormalizedFinding {` | `taintFindingToNormalized` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `ScanCache` | 361 | `export class ScanCache {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/features/security/engine/rules.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `rulesForLanguage` | 257 | `export function rulesForLanguage(lang: string): readonly SecurityRule[] {` | `rulesForLanguage` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `detectLanguage` | 261 | `export function detectLanguage(filePath: string): string {` | `detectLanguage` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core-v2/src/features/security/engine/sarif-formatter.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `severityToLevel` | 67 | `export function severityToLevel(severity: Severity): 'error' \| 'warning' \| 'note' \| 'none' {` | `severityToLevel` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `normalizeFileUri` | 81 | `export function normalizeFileUri(file: string): string {` | `normalizeFileUri` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `buildSarifRules` | 100 | `export function buildSarifRules(` | `buildSarifRules` 负责创建/构建相关对象或流程。 |
| `formatToSarif` | 150 | `export function formatToSarif(` | `formatToSarif` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core-v2/src/features/security/engine/scan-cache-persist.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `createScanCache` | 92 | `export async function createScanCache(fs: IHostFileSystem, workspaceDir: string): Promise<PersistentScanCache> {` | 创建持久化扫描缓存。 |

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `PersistentScanCache` | 11 | `export class PersistentScanCache extends ScanCache {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/features/security/securityFeature.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `SecurityFeature` | 13 | `export class SecurityFeature extends Feature {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/features/security/tools/depAuditTool.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `DepAuditTool` | 36 | `export class DepAuditTool implements IDepAuditTool {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/features/security/tools/secretScanTool.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `SecretScanTool` | 14 | `export class SecretScanTool implements ISecretScanTool {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/features/security/tools/securityScanTool.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `SecurityScanTool` | 15 | `export class SecurityScanTool implements ISecurityScanTool {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/features/security/tools/taintTraceTool.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `TaintTraceTool` | 14 | `export class TaintTraceTool implements ITaintTraceTool {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core/src/tools/builtin/security/security-scan.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `SecurityScanTool` | 53 | `export class SecurityScanTool implements BuiltinTool<SecurityScanInput> {` | 该类封装本文模块的核心状态与行为。 |


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

### 来自 `packages/agent-core-v2/src/features/security/engine/dep-audit.ts` 的 `collectDependencyManifests`

源码位置：`packages/agent-core-v2/src/features/security/engine/dep-audit.ts:68` 附近。

```ts
export async function collectDependencyManifests(fs: IHostFileSystem, root: string): Promise<DepAuditManifest[]> {
  const manifests: DepAuditManifest[] = [];
  for (const candidate of [
    { path: join(root, 'package.json'), ecosystem: 'npm' as const },
    { path: join(root, 'requirements.txt'), ecosystem: 'pip' as const },
    { path: join(root, 'go.mod'), ecosystem: 'go' as const },
  ]) {
    try {
      const stat = await fs.stat(candidate.path);
      if (stat.isFile) {
        manifests.push(candidate);
      }
    } catch {}
  }
  return manifests;
}
```

### 来自 `packages/agent-core-v2/src/features/security/engine/engine.ts` 的 `collectFiles`

源码位置：`packages/agent-core-v2/src/features/security/engine/engine.ts:117` 附近。

```ts
export async function collectFiles(
  fs: IHostFileSystem,
  root: string,
  include?: string,
  maxFiles = MAX_SCAN_FILES,
): Promise<string[]> {
  const files: string[] = [];
  let rootIsFile = false;
  try {
    const stat = await fs.stat(root);
    rootIsFile = stat.isFile;
  } catch {
    return [];
  }
  if (rootIsFile) return [root];

  async function walk(dir: string): Promise<void> {
    if (files.length >= maxFiles) return;
    let entries;
    try {
      entries = await fs.readdir(dir);
    } catch {
      return;
    }
// ...
```

### 来自 `packages/agent-core-v2/src/features/security/engine/rules.ts` 的 `rulesForLanguage`

源码位置：`packages/agent-core-v2/src/features/security/engine/rules.ts:257` 附近。

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


## 时序/状态图

```mermaid
stateDiagram-v2
    [*] --> Init: 初始化
    Init --> Ready: 依赖就绪
    Ready --> Running: 执行主流程
    Running --> Success: 正常完成
    Running --> Failed: 异常/拒绝
    Failed --> Ready: 重试/恢复
    Success --> [*]
```

> 图注：`05-security/security-architecture.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/agent-core/src/tools/builtin/security/security-scan.ts`：
    - 导出签名/声明：
      - `export const SecurityScanInputSchema = z.object({`
      - `export type SecurityScanInput = z.infer<typeof SecurityScanInputSchema>;`
      - `export class SecurityScanTool implements BuiltinTool<SecurityScanInput>`
  - `packages/agent-core-v2/src/features/security//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/features/security/engine/dep-audit.ts`
    - `packages/agent-core-v2/src/features/security/engine/engine.ts`
    - `packages/agent-core-v2/src/features/security/engine/rules.ts`
    - `packages/agent-core-v2/src/features/security/engine/sarif-formatter.ts`
    - `packages/agent-core-v2/src/features/security/engine/scan-cache-persist.ts`
    - `packages/agent-core-v2/src/features/security/securityFeature.ts`
    - `packages/agent-core-v2/src/features/security/tools/dep-audit.ts`
    - `packages/agent-core-v2/src/features/security/tools/depAuditTool.ts`
    - `packages/agent-core-v2/src/features/security/tools/secret-scan.ts`
    - `packages/agent-core-v2/src/features/security/tools/secretScanTool.ts`
    - `packages/agent-core-v2/src/features/security/tools/security-scan.ts`
    - `packages/agent-core-v2/src/features/security/tools/securityScanTool.ts`
    - `packages/agent-core-v2/src/features/security/tools/taint-trace.ts`
    - `packages/agent-core-v2/src/features/security/tools/taintTraceTool.ts`

## 证据与代码位置

- `packages/agent-core/src/tools/builtin/security/security-scan.ts`
- `packages/agent-core-v2/src/features/security/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
