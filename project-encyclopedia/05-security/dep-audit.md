# DepAudit 依赖审计

DepAudit 解析依赖清单，离线标记已知风险，并可查询 OSV 或调用宿主机审计工具。

## 清单

package.json、requirements.txt、go.mod。

## 离线检查

KNOWN_RISKS 内置列表、loose range、http registry、postinstall 远程脚本、Go pseudo-version。

## OSV

`osv-client.ts` 查询 OSV API。

## 外部

`useExternal: true` 运行 npm audit / pnpm audit / pip-audit 等。

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

  - `packages/agent-core/src/tools/builtin/security/dep-audit.ts`：
    - 导出签名/声明：
      - `export const DepAuditInputSchema = z.object({`
      - `export type DepAuditInput = z.infer<typeof DepAuditInputSchema>;`
      - `export type DepAuditInputArgs = z.input<typeof DepAuditInputSchema>;`
      - `export interface DepAuditFinding {`
      - `export interface DepAuditManifest {`
      - `export interface DepAuditResult {`
      - `export async function collectDependencyManifests(kaos: Kaos, root: string): Promise<DepAuditManifest[]>`
      - `export function parsePackageJson(manifestPath: string, content: string): DepAuditFinding[]`
      - `export function parseRequirementsTxt(content: string): DepAuditFinding[]`
      - `export function parseGoMod(content: string): DepAuditFinding[]`
      - `export interface LockFileInfo {`
      - `export async function detectPackageManager(kaos: Kaos, root: string): Promise<LockFileInfo | undefined>`
      - `export function parseNpmAuditJson(
  raw: string,
  pm: string,
): DepAuditFinding[]`
      - `export function parsePipAuditJson(raw: string): DepAuditFinding[]`
      - `export interface OsvClient {`
      - `export class DepAuditTool implements BuiltinTool<DepAuditInput>`
      - `export function depFindingToNormalized(f: DepAuditFinding): NormalizedFinding`
  - `packages/agent-core/src/tools/builtin/security/osv-client.ts`：
    - 导出签名/声明：
      - `export interface OsvPackage {`
      - `export interface OsvQuery {`
      - `export interface OsvVulnerability {`
      - `export interface OsvBatchQuery {`
      - `export interface OsvBatchResponse {`
      - `export interface OsvClientOptions {`
      - `export interface OsvClient {`
      - `export function mapEcosystem(ecosystem: 'npm' | 'pip' | 'go'): 'npm' | 'PyPI' | 'Go'`
      - `export function extractFixedVersion(
  vuln: OsvVulnerability,
  packageName: string,
): string | undefined`
      - `export function extractCvssScore(vuln: OsvVulnerability): number | undefined`
      - `export function createOsvClient(fetchFn: FetchFn, options?: OsvClientOptions): OsvClient`

## 证据与代码位置

- `packages/agent-core/src/tools/builtin/security/dep-audit.ts`
- `packages/agent-core/src/tools/builtin/security/osv-client.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
