# security-core 内部实现

本页说明 packages/security-core 的关键内部模块与设计思路，源码引用以文件列表为准。

## 关键模块

从源码树可以看到以下模块：`src/ui/i18n.ts`, `src/ui/shell.ts`, `src/ui/theme.ts`, `src/tools/file-tools.ts`, `src/tools/git-tools.ts`, `src/tools/security-tools.ts`, `src/tools/analysis-tools.ts`, `src/tools/sandbox.ts`, `src/tools/registry.ts`, `src/core/types.ts`, `src/core/llm/client.ts`, `src/core/providers/anthropic.ts`, `src/core/providers/openai.ts`, `src/core/providers/index.ts`, `src/core/providers/nighthawk.ts`, `src/core/agent/loop.ts`。

## 设计重点

已弃用的独立安全引擎源码；生产安全引擎已移到 agent-core/src/tools/builtin/security/，保留供参考。

## 与其他包的关系

packages/security-core 被上层应用或相邻包通过 workspace 依赖引用；具体依赖关系见 `package.json` 的 `dependencies` 中 `@nighthawk/*` 项。

## 可证明路径

阅读代码时应从 `src/index.ts` 或包入口开始，再沿导出符号进入具体实现。

## 专业实现要点（开发流程视角）

### 需求分析

每个包只解决一个领域问题，并通过 package.json exports 暴露最小公开面。

### 设计决策

使用 workspace 协议链接本地依赖；包入口用 `export *` 聚合；内部用 `#/` 别名。

### 实现步骤

定义接口与类型 → 实现服务/函数 → 注册到 DI（如适用）→ 编写测试 → 构建 dist。

### 验证方式

运行 `pnpm -C <pkg> typecheck`、`pnpm -C <pkg> test`、`pnpm lint:pkg`。

### 维护注意

公开导出变化要同步 `klient` contract parity 或 SDK 类型；发布前生成 changeset。

## 逐函数实现说明

以下按源码文件列出可验证的导出函数/类，并给出实现职责说明。

### packages/security-core/src/cli/commands.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `buildSlashCommands` | 32 | `export function buildSlashCommands(): SlashCommand[] {` | `buildSlashCommands` 负责创建/构建相关对象或流程。 |
| `dispatchCommand` | 52 | `export async function dispatchCommand(input: string, ctx: CommandContext): Promise<boolean> {` | `dispatchCommand` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/security-core/src/config/index.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `loadConfig` | 8 | `export function loadConfig(): AppConfig {` | `loadConfig` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `getProviderConfig` | 31 | `export function getProviderConfig(c: AppConfig): ProviderConfig {` | `getProviderConfig` 负责读取或查询数据。 |
| `trustDir` | 37 | `export function trustDir(dir: string, c: AppConfig): void {` | `trustDir` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `isTrustedDir` | 45 | `export function isTrustedDir(dir: string, c: AppConfig): boolean {` | `isTrustedDir` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/security-core/src/core/agent/loop.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `AgentLoop` | 38 | `export class AgentLoop {` | 该类封装本文模块的核心状态与行为。 |

### packages/security-core/src/core/llm/client.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `LLMClient` | 5 | `export class LLMClient {` | 该类封装本文模块的核心状态与行为。 |

### packages/security-core/src/core/providers/anthropic.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `AnthropicProvider` | 3 | `export class AnthropicProvider implements ChatProvider {` | 该类封装本文模块的核心状态与行为。 |

### packages/security-core/src/core/providers/index.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `createProvider` | 6 | `export function createProvider(config: ProviderConfig): ChatProvider {` | 根据配置创建 LLM Provider。 |

### packages/security-core/src/core/providers/nighthawk.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `NighthawkProvider` | 5 | `export class NighthawkProvider extends OpenAIProvider {` | 该类封装本文模块的核心状态与行为。 |

### packages/security-core/src/core/providers/openai.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `OpenAIProvider` | 4 | `export class OpenAIProvider implements ChatProvider {` | 该类封装本文模块的核心状态与行为。 |

### packages/security-core/src/core/rag/index.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `rrfFuse` | 110 | `export function rrfFuse(rankings: string[][]): Array<{ id: string; score: number }> {` | `rrfFuse` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `buildRagContext` | 121 | `export async function buildRagContext(query: string, workspace: string, topK = 5): Promise<string> {` | `buildRagContext` 负责创建/构建相关对象或流程。 |
| `invalidateRagIndex` | 163 | `export function invalidateRagIndex(workspace?: string) {` | `invalidateRagIndex` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/security-core/src/core/session/store.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `listSessions` | 100 | `export function listSessions(workspace?: string): Array<{ id: string; title: string; updatedAt: number; model: string...` | `listSessions` 负责读取或查询数据。 |
| `loadSession` | 115 | `export function loadSession(id: string): StoredSession \| null {` | `loadSession` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `SessionStore` | 35 | `export class SessionStore {` | 该类封装本文模块的核心状态与行为。 |

### packages/security-core/src/security/rules.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `rulesForLanguage` | 250 | `export function rulesForLanguage(lang: string): SecurityRule[] {` | `rulesForLanguage` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `detectLanguage` | 254 | `export function detectLanguage(filePath: string): string {` | `detectLanguage` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/security-core/src/security/scanner.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `collectFiles` | 29 | `export function collectFiles(root: string, include?: string, maxFiles = 5000): string[] {` | 收集待扫描/待处理的文件列表，支持目录递归与过滤。 |
| `scanFile` | 47 | `export function scanFile(file: string, rules: SecurityRule[]): ScanResult[] {` | `scanFile` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `runScan` | 74 | `export async function runScan(opts: ScanOptions): Promise<ScanReport> {` | 运行完整扫描流程，包括文件收集、并发扫描、缓存和报告。 |
| `formatScanReport` | 96 | `export function formatScanReport(report: ScanReport, lang: 'zh' \| 'en' = 'zh'): string {` | 把扫描报告格式化为文本或 SARIF。 |

### packages/security-core/src/security/secrets.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `scanSecretsInContent` | 46 | `export function scanSecretsInContent(content: string, file: string): SecretFinding[] {` | `scanSecretsInContent` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `scanSecrets` | 70 | `export function scanSecrets(root: string, include?: string): SecretFinding[] {` | 扫描目录或文件中的硬编码密钥。 |

### packages/security-core/src/security/taint.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `taintAnalyze` | 35 | `export function taintAnalyze(file: string): TaintFinding[] {` | 在单个文件中执行污点分析。 |
| `formatTaint` | 100 | `export function formatTaint(findings: TaintFinding[]): string {` | `formatTaint` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/security-core/src/tools/registry.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `createToolRegistry` | 10 | `export function createToolRegistry(): ToolRegistry {` | `createToolRegistry` 负责创建/构建相关对象或流程。 |

### packages/security-core/src/tools/sandbox.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `createRunCommandTool` | 27 | `export function createRunCommandTool(opts: SandboxOptions): Tool {` | `createRunCommandTool` 负责创建/构建相关对象或流程。 |

### packages/security-core/src/ui/i18n.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `t` | 41 | `export function t(lang: Lang, key: StringKey): string {` | `t` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/security-core/src/ui/shell.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `MoonLoader` | 28 | `export class MoonLoader extends Text {` | 该类封装本文模块的核心状态与行为。 |
| `LiveMessage` | 70 | `export class LiveMessage {` | 该类封装本文模块的核心状态与行为。 |
| `ScaShell` | 116 | `export class ScaShell {` | 该类封装本文模块的核心状态与行为。 |


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

### 来自 `packages/security-core/src/cli/commands.ts` 的 `buildSlashCommands`

源码位置：`packages/security-core/src/cli/commands.ts:32` 附近。

```ts
export function buildSlashCommands(): SlashCommand[] {
  return Object.entries(COMMAND_HELP).map(([name, desc]) => ({
    name: name.slice(1),
    description: desc.zh,
  }));
}

function parseFlags(rest: string[]): { flags: Record<string, string>; positional: string[] } {
  const flags: Record<string, string> = {};
  const positional: string[] = [];
  for (let i = 0; i < rest.length; i++) {
    if (rest[i].startsWith('--')) {
      const key = rest[i].slice(2);
      if (i + 1 < rest.length && !rest[i + 1].startsWith('--')) { flags[key] = rest[++i]; }
      else flags[key] = 'true';
    } else positional.push(rest[i]);
  }
  return { flags, positional };
}

export async function dispatchCommand(input: string, ctx: CommandContext): Promise<boolean> {
  const trimmed = input.trim();
  if (!trimmed.startsWith('/')) return false;

// ...
```

### 来自 `packages/security-core/src/config/index.ts` 的 `loadConfig`

源码位置：`packages/security-core/src/config/index.ts:8` 附近。

```ts
export function loadConfig(): AppConfig {
  const home = process.env.HOME || '~';
  const workspace = process.env.SCA_WORKSPACE || '.';
  let trustedDirs: string[] = [];
  try { trustedDirs = JSON.parse(fs.readFileSync(path.join(home, '.sca-trust.json'), 'utf-8')).trustedDirs || []; } catch {}
  let mcpServers: Record<string, McpServerConfig> = {};
  try { mcpServers = JSON.parse(fs.readFileSync(path.join(workspace, '.sca-mcp.json'), 'utf-8')); } catch {}

  return {
    providerType: (process.env.AUDIT_AGENT_PROVIDER as ProviderType) || 'openai_compatible',
    apiKey: process.env.AUDIT_AGENT_API_KEY || '',
    baseUrl: process.env.AUDIT_AGENT_BASE_URL || '',
    model: process.env.AUDIT_AGENT_MODEL || '',
    anthropicApiKey: process.env.ANTHROPIC_API_KEY || '',
    anthropicBaseUrl: process.env.ANTHROPIC_BASE_URL || '',
    workspace, lang: (process.env.SCA_LANG as Lang) || 'en',
    maxTurns: parseInt(process.env.SCA_MAX_TURNS || '40'), maxToolCalls: parseInt(process.env.SCA_MAX_TOOL_CALLS || '50'),
    permissionMode: (process.env.SCA_PERMISSION_MODE as PermissionMode) || 'manual', trustedDirs,
    thinkingEnabled: process.env.SCA_THINKING !== 'false', thinkingEffort: process.env.SCA_THINKING_EFFORT || 'medium',
    theme: process.env.SCA_THEME || 'eva', yoloMode: process.env.SCA_YOLO === 'true', planMode: false, mcpServers,
  };
}

export function getProviderConfig(c: AppConfig): ProviderConfig {
// ...
```

### 来自 `packages/security-core/src/core/agent/loop.ts` 的 `AgentLoop`

源码位置：`packages/security-core/src/core/agent/loop.ts:38` 附近。

```ts
export class AgentLoop {
  messages: ProviderMessage[] = [];
  fileChanges: FileChange[] = [];
  private interrupted = false;
  private turnCount = 0;

  constructor(
    private llm: LLMClient,
    private registry: ToolRegistry,
    private maxTurns = 40,
    private reflectEvery = 5,
  ) {}

  interrupt() { this.interrupted = true; }

  clear() { this.messages = []; this.fileChanges = []; }

  // 记录被修改文件的历史内容（供 undo）
  private snapshotForUndo(toolName: string, args: Record<string, unknown>) {
    if (toolName === 'write_file' && typeof args.path === 'string') {
      const p = path.resolve(args.path);
      const exists = this.fileChanges.find(c => c.path === p);
      if (!exists) {
        this.fileChanges.push({ path: p, before: fs.existsSync(p) ? fs.readFileSync(p, 'utf-8') : null });
// ...
```


## 时序/状态图

```mermaid
flowchart LR
    A[入口/调用方] --> B[本文核心模块]
    B --> C[依赖服务/数据层]
    C --> D[输出/事件/持久化]
```

> 图注：`03-packages/security-core/internals.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/security-core/src/` 目录下源码文件示例：
    - `packages/security-core/src/cli/commands.ts`
    - `packages/security-core/src/cli/index.ts`
    - `packages/security-core/src/config/index.ts`
    - `packages/security-core/src/core/agent/loop.ts`
    - `packages/security-core/src/core/llm/client.ts`
    - `packages/security-core/src/core/providers/anthropic.ts`
    - `packages/security-core/src/core/providers/index.ts`
    - `packages/security-core/src/core/providers/nighthawk.ts`
    - `packages/security-core/src/core/providers/openai.ts`
    - `packages/security-core/src/core/rag/index.ts`
    - `packages/security-core/src/core/session/store.ts`
    - `packages/security-core/src/core/types.ts`
    - `packages/security-core/src/security/rules.ts`
    - `packages/security-core/src/security/scanner.ts`
    - `packages/security-core/src/security/secrets.ts`
    - `packages/security-core/src/security/taint.ts`
    - `packages/security-core/src/tools/analysis-tools.ts`
    - `packages/security-core/src/tools/file-tools.ts`
    - `packages/security-core/src/tools/git-tools.ts`
    - `packages/security-core/src/tools/registry.ts`
    - `packages/security-core/src/tools/sandbox.ts`
    - `packages/security-core/src/tools/security-tools.ts`
    - `packages/security-core/src/ui/i18n.ts`
    - `packages/security-core/src/ui/shell.ts`

## 证据与代码位置

- `packages/security-core/src`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
