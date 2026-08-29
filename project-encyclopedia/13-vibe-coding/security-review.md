# Vibe Coding 安全审计提示词

Vibe Coding 的高效率也带来风险：AI 可能生成不安全代码。NightHawk 的安全工具可以让“写完即审计”成为标准动作。

## 通用审计提示词

```text
请对当前工作区执行一次完整安全审计。

工具顺序：
1. SecurityScan
2. SecretScan
3. TaintTrace
4. DepAudit

输出要求：
- 按 critical/high/medium/low 排序
- 每条给出 file:line
- 给出中英文修复建议
- 区分“确认漏洞”和“疑似风险”
```

## 针对 Web 应用的审计提示词

```text
请重点审计以下 Web 安全风险：
- SQL 注入
- XSS / DOM XSS
- CSRF
- SSRF
- 路径穿越
- 认证/会话管理
- 越权
- 不安全反序列化
- 依赖漏洞
```

## 针对 AI 生成代码的专项检查

```text
请以“AI 生成代码常见错误”的视角审查：
1. 是否把用户输入直接拼进 SQL/shell/HTML？
2. 是否使用了不安全的随机数、硬编码密钥、弱哈希？
3. 是否缺少输入校验、输出编码、访问控制？
4. 是否有原型污染、路径穿越、任意文件读写？
5. 是否引入了可疑的 postinstall 脚本或未锁定依赖？
```

## 密钥泄露检查

```text
请使用 SecretScan 检查整个项目，并额外人工检查：
- .env 是否被提交
- 配置文件中的 token/password
- 日志中是否打印敏感信息
- 前端 bundle 中是否嵌入密钥
```

## 依赖风险检查

```text
请使用 DepAudit 检查依赖：
- package.json / requirements.txt / go.mod
- 是否有已知 CVE
- 是否使用 latest / * 等未锁定版本
- 是否有 curl|sh、postinstall 下载远程脚本等供应链风险
- 是否可以使用宿主机审计工具（useExternal=true）
```

## 修复确认

```text
请修复你发现的安全问题，并遵循：
1. 使用参数化查询/预编译语句
2. 使用安全的 API，避免 eval/child_process shell
3. 对所有输出做编码/消毒
4. 使用环境变量保存密钥
5. 修复后重新运行 SecurityScan/SecretScan/TaintTrace 验证
```

## 渗透测试模式

如果用户已授权对目标进行渗透测试：

```sh
nighthawk
/pentest <target>
```

NightHawk 会按 9 阶段执行：合规红线 → 范围确认 → 信息收集 → 攻击面分析 → 漏洞验证 → 漏洞利用 → 后渗透评估 → 修复方案 → 报告生成。

## 逐函数实现说明

以下按源码文件列出可验证的导出函数/类，并给出实现职责说明。

### packages/agent-core/src/tools/builtin/security/dep-audit.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `collectDependencyManifests` | 102 | `export async function collectDependencyManifests(kaos: Kaos, root: string): Promise<DepAuditManifest[]> {` | `collectDependencyManifests` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `parsePackageJson` | 119 | `export function parsePackageJson(manifestPath: string, content: string): DepAuditFinding[] {` | `parsePackageJson` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `parseRequirementsTxt` | 184 | `export function parseRequirementsTxt(content: string): DepAuditFinding[] {` | `parseRequirementsTxt` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `parseGoMod` | 207 | `export function parseGoMod(content: string): DepAuditFinding[] {` | `parseGoMod` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `detectPackageManager` | 250 | `export async function detectPackageManager(kaos: Kaos, root: string): Promise<LockFileInfo \| undefined> {` | `detectPackageManager` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `parseNpmAuditJson` | 274 | `export function parseNpmAuditJson(` | `parseNpmAuditJson` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `parsePipAuditJson` | 318 | `export function parsePipAuditJson(raw: string): DepAuditFinding[] {` | `parsePipAuditJson` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `depFindingToNormalized` | 550 | `export function depFindingToNormalized(f: DepAuditFinding): NormalizedFinding {` | `depFindingToNormalized` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `DepAuditTool` | 356 | `export class DepAuditTool implements BuiltinTool<DepAuditInput> {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core/src/tools/builtin/security/engine.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `collectFiles` | 117 | `export async function collectFiles(` | 收集待扫描/待处理的文件列表，支持目录递归与过滤。 |
| `scanContent` | 160 | `export function scanContent(content: string, file: string, rules: readonly SecurityRule[]): ScanResult[] {` | 对单个文件内容执行规则扫描，返回命中结果。 |
| `runScan` | 205 | `export async function runScan(` | 运行完整扫描流程，包括文件收集、并发扫描、缓存和报告。 |
| `createScanCacheKey` | 409 | `export function createScanCacheKey(version: string, file: string, content: string): ScanCacheKey {` | `createScanCacheKey` 负责创建/构建相关对象或流程。 |
| `formatScanReport` | 425 | `export function formatScanReport(report: ScanReport, outputFormat?: 'text' \| 'sarif'): string {` | 把扫描报告格式化为文本或 SARIF。 |
| `scanSecretsInContent` | 502 | `export function scanSecretsInContent(content: string, file: string): SecretFinding[] {` | `scanSecretsInContent` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `scanSecrets` | 539 | `export async function scanSecrets(kaos: Kaos, root: string, include?: string): Promise<SecretFinding[]> {` | 扫描目录或文件中的硬编码密钥。 |
| `formatSecrets` | 562 | `export function formatSecrets(findings: readonly SecretFinding[]): string {` | `formatSecrets` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `taintAnalyzeContent` | 683 | `export function taintAnalyzeContent(content: string, file: string): TaintFinding[] {` | `taintAnalyzeContent` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `taintAnalyze` | 691 | `export async function taintAnalyze(kaos: Kaos, file: string): Promise<TaintFinding[]> {` | 在单个文件中执行污点分析。 |
| `taintAnalyzeModule` | 831 | `export async function taintAnalyzeModule(kaos: Kaos, file: string): Promise<TaintFinding[]> {` | 沿模块导入关系执行跨文件污点分析。 |
| `formatTaint` | 936 | `export function formatTaint(findings: readonly TaintFinding[]): string {` | `formatTaint` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `secretFindingToNormalized` | 954 | `export function secretFindingToNormalized(f: SecretFinding): NormalizedFinding {` | `secretFindingToNormalized` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `taintFindingToNormalized` | 971 | `export function taintFindingToNormalized(f: TaintFinding): NormalizedFinding {` | `taintFindingToNormalized` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `ScanCache` | 372 | `export class ScanCache {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core/src/tools/builtin/security/osv-client.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `mapEcosystem` | 47 | `export function mapEcosystem(ecosystem: 'npm' \| 'pip' \| 'go'): 'npm' \| 'PyPI' \| 'Go' {` | `mapEcosystem` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `extractFixedVersion` | 58 | `export function extractFixedVersion(` | `extractFixedVersion` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `extractCvssScore` | 77 | `export function extractCvssScore(vuln: OsvVulnerability): number \| undefined {` | `extractCvssScore` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `createOsvClient` | 101 | `export function createOsvClient(fetchFn: FetchFn, options?: OsvClientOptions): OsvClient {` | `createOsvClient` 负责创建/构建相关对象或流程。 |

### packages/agent-core/src/tools/builtin/security/rules.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `rulesForLanguage` | 272 | `export function rulesForLanguage(lang: string): readonly SecurityRule[] {` | `rulesForLanguage` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `detectLanguage` | 276 | `export function detectLanguage(filePath: string): string {` | `detectLanguage` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core/src/tools/builtin/security/sarif-formatter.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `severityToLevel` | 67 | `export function severityToLevel(severity: Severity): 'error' \| 'warning' \| 'note' \| 'none' {` | `severityToLevel` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `normalizeFileUri` | 81 | `export function normalizeFileUri(file: string): string {` | `normalizeFileUri` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `buildSarifRules` | 100 | `export function buildSarifRules(` | `buildSarifRules` 负责创建/构建相关对象或流程。 |
| `formatToSarif` | 150 | `export function formatToSarif(` | `formatToSarif` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core/src/tools/builtin/security/scan-cache-persist.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `createScanCache` | 67 | `export async function createScanCache(workspaceDir: string): Promise<PersistentScanCache> {` | 创建持久化扫描缓存。 |

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `PersistentScanCache` | 9 | `export class PersistentScanCache extends ScanCache {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core/src/tools/builtin/security/secret-scan.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `SecretScanTool` | 36 | `export class SecretScanTool implements BuiltinTool<SecretScanInput> {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core/src/tools/builtin/security/security-scan.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `SecurityScanTool` | 53 | `export class SecurityScanTool implements BuiltinTool<SecurityScanInput> {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core/src/tools/builtin/security/taint-trace.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `TaintTraceTool` | 41 | `export class TaintTraceTool implements BuiltinTool<TaintTraceInput> {` | 该类封装本文模块的核心状态与行为。 |


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

### 来自 `packages/agent-core/src/tools/builtin/security/dep-audit.ts` 的 `collectDependencyManifests`

源码位置：`packages/agent-core/src/tools/builtin/security/dep-audit.ts:102` 附近。

```ts
export async function collectDependencyManifests(kaos: Kaos, root: string): Promise<DepAuditManifest[]> {
  const manifests: DepAuditManifest[] = [];
  for (const candidate of [
    { path: join(root, 'package.json'), ecosystem: 'npm' as const },
    { path: join(root, 'requirements.txt'), ecosystem: 'pip' as const },
    { path: join(root, 'go.mod'), ecosystem: 'go' as const },
  ]) {
    try {
      const stat = await kaos.stat(candidate.path);
      if ((stat.stMode & 0o170000) === 0o100000) {
        manifests.push(candidate);
      }
    } catch {}
  }
  return manifests;
}
```

### 来自 `packages/agent-core/src/tools/builtin/security/engine.ts` 的 `collectFiles`

源码位置：`packages/agent-core/src/tools/builtin/security/engine.ts:117` 附近。

```ts
export async function collectFiles(
  kaos: Kaos,
  root: string,
  include?: string,
  maxFiles = MAX_SCAN_FILES,
): Promise<string[]> {
  const files: string[] = [];
  let rootIsFile = false;
  try {
    const stat = await kaos.stat(root);
    rootIsFile = (stat.stMode & 0o170000) === 0o100000;
  } catch {
    return [];
  }
  if (rootIsFile) return [root];

  async function walk(dir: string): Promise<void> {
    if (files.length >= maxFiles) return;
    try {
      for await (const entry of kaos.iterdir(dir)) {
        if (files.length >= maxFiles) return;
        // iterdir yields full paths; derive the basename for filters.
        const name = basename(entry);
        if (SKIP_DIRS.has(name) || (name.startsWith('.') && name !== '.github')) continue;
// ...
```

### 来自 `packages/agent-core/src/tools/builtin/security/osv-client.ts` 的 `mapEcosystem`

源码位置：`packages/agent-core/src/tools/builtin/security/osv-client.ts:47` 附近。

```ts
export function mapEcosystem(ecosystem: 'npm' | 'pip' | 'go'): 'npm' | 'PyPI' | 'Go' {
  switch (ecosystem) {
    case 'npm':
      return 'npm';
    case 'pip':
      return 'PyPI';
    case 'go':
      return 'Go';
  }
}

export function extractFixedVersion(
  vuln: OsvVulnerability,
  packageName: string,
): string | undefined {
  const affected = vuln.affected;
  if (!affected) return undefined;

  for (const entry of affected) {
    if (entry.package.name !== packageName) continue;
    for (const range of entry.ranges ?? []) {
      for (const event of range.events) {
        if (event.fixed !== undefined) return event.fixed;
      }
// ...
```


## 时序/状态图

```mermaid
flowchart LR
    A[入口/调用方] --> B[本文核心模块]
    B --> C[依赖服务/数据层]
    C --> D[输出/事件/持久化]
```

> 图注：`13-vibe-coding/security-review.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

## 专业实现要点（开发流程视角）

### 需求分析

Vibe Coding 文档要把“自然语言开发”变成可重复、可验证、安全可控的工程流程。

### 设计决策

以提示词模板、阶段化工作流、安全审计清单为核心，让用户可以直接复制使用。

### 实现步骤

从项目准备 → 需求澄清 → 方案设计 → 小步实现 → 审查 → 安全审计 → 提交 → 迭代。

### 验证方式

每个提示词都要求 Agent 运行测试、lint、安全工具；文档本身引用 NightHawk 真实命令。

### 维护注意

提示词应随 NightHawk 工具集和权限模式演进，避免使用已废弃命令。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/agent-core/src/tools/builtin/security//` 目录下源码文件示例：
    - `packages/agent-core/src/tools/builtin/security/dep-audit.ts`
    - `packages/agent-core/src/tools/builtin/security/engine.ts`
    - `packages/agent-core/src/tools/builtin/security/index.ts`
    - `packages/agent-core/src/tools/builtin/security/osv-client.ts`
    - `packages/agent-core/src/tools/builtin/security/rules.ts`
    - `packages/agent-core/src/tools/builtin/security/sarif-formatter.ts`
    - `packages/agent-core/src/tools/builtin/security/scan-cache-persist.ts`
    - `packages/agent-core/src/tools/builtin/security/secret-scan.ts`
    - `packages/agent-core/src/tools/builtin/security/security-scan.ts`
    - `packages/agent-core/src/tools/builtin/security/taint-trace.ts`
  - `scripts/smoke-security.ts`（未发现直接 export 符号，可能以副作用注册为主）
  - `docs/en/reference/tools.md`（非 TS 源码，可直接阅读）
  - `docs/en/guides/pentest-mode.md`（非 TS 源码，可直接阅读）
  - `project-encyclopedia/05-security//`（目录内无 .ts 文件）

## 证据与代码位置

- `packages/agent-core/src/tools/builtin/security/`
- `scripts/smoke-security.ts`
- `docs/en/reference/tools.md`
- `docs/en/guides/pentest-mode.md`
- `project-encyclopedia/05-security/`
