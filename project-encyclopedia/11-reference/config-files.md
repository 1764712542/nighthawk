# 配置文件参考

`config.toml`、`tui.toml`、mcp.json、agent 文件的位置与作用。

## config.toml

`~/.nighthawk/config.toml`：providers、models、permissions、hooks、skills 等。

## tui.toml

TUI 主题/布局配置。

## mcp.json

项目级或全局 MCP server 配置。

## agent 文件

Markdown frontmatter 定义 agent profile。

## 专业实现要点（开发流程视角）

### 需求分析

参考手册要支持用户快速查找参数、命令、API、协议。

### 设计决策

以表格和代码块为主，保持条目化、可复制。

### 实现步骤

从 CLI 定义、protocol schema、SDK 类型和路由源码提取事实。

### 验证方式

运行 `nighthawk --help`、`pnpm doctor` 或对照 schema 测试。

### 维护注意

参考内容随代码变更同步更新。

## 逐函数实现说明

以下按源码文件列出可验证的导出函数/类，并给出实现职责说明。

### packages/agent-core/src/config/env-model.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `applyEnvModelConfig` | 93 | `export function applyEnvModelConfig(config: NighthawkConfig, env: Env = process.env): NighthawkConfig {` | `applyEnvModelConfig` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `stripEnvModelConfig` | 170 | `export function stripEnvModelConfig(config: NighthawkConfig): NighthawkConfig {` | `stripEnvModelConfig` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core/src/config/merge.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `mergeConfigPatch` | 10 | `export function mergeConfigPatch(config: NighthawkConfig, patch: NighthawkConfigPatch): NighthawkConfig {` | `mergeConfigPatch` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core/src/config/migrations.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `migrateThinkingEffortMaxToHigh` | 53 | `export function migrateThinkingEffortMaxToHigh(configPath: string, homeDir: string): void {` | `migrateThinkingEffortMaxToHigh` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `migrateProviderTypeKimiToNighthawk` | 92 | `export function migrateProviderTypeKimiToNighthawk(configPath: string, homeDir: string): void {` | `migrateProviderTypeKimiToNighthawk` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core/src/config/model.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `effectiveModelAlias` | 9 | `export function effectiveModelAlias(` | `effectiveModelAlias` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `effectiveModelAliases` | 74 | `export function effectiveModelAliases(` | `effectiveModelAliases` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core/src/config/nighthawk-env-params.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `applyNighthawkEnvSamplingParams` | 25 | `export function applyNighthawkEnvSamplingParams(` | `applyNighthawkEnvSamplingParams` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `resolveNighthawkEnvThinkingEffort` | 48 | `export function resolveNighthawkEnvThinkingEffort(` | `resolveNighthawkEnvThinkingEffort` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `resolveThinkingKeep` | 91 | `export function resolveThinkingKeep(` | `resolveThinkingKeep` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `applyNighthawkEnvThinkingKeep` | 109 | `export function applyNighthawkEnvThinkingKeep(` | `applyNighthawkEnvThinkingKeep` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `applyAnthropicThinkingKeep` | 130 | `export function applyAnthropicThinkingKeep(` | `applyAnthropicThinkingKeep` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core/src/config/path.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `resolveNighthawkHome` | 5 | `export function resolveNighthawkHome(homeDir?: string \| undefined): string {` | `resolveNighthawkHome` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `resolveConfigPath` | 9 | `export function resolveConfigPath(input: {` | `resolveConfigPath` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `ensureNighthawkHome` | 16 | `export function ensureNighthawkHome(homeDir: string): void {` | `ensureNighthawkHome` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core/src/config/print-defaults.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `applyPrintModeConfigDefaults` | 43 | `export function applyPrintModeConfigDefaults(config: NighthawkConfig): NighthawkConfig {` | `applyPrintModeConfigDefaults` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core/src/config/resolve.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `parseBooleanEnv` | 22 | `export function parseBooleanEnv(value: string \| undefined): boolean \| undefined {` | `parseBooleanEnv` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `parseFloatEnv` | 36 | `export function parseFloatEnv(value: string \| undefined, varName: string): number \| undefined {` | `parseFloatEnv` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core/src/config/schema.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `getDefaultConfig` | 426 | `export function getDefaultConfig(): NighthawkConfig {` | `getDefaultConfig` 负责读取或查询数据。 |
| `validateConfig` | 432 | `export function validateConfig(config: unknown): NighthawkConfig {` | `validateConfig` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `formatConfigValidationError` | 442 | `export function formatConfigValidationError(error: unknown): string {` | `formatConfigValidationError` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core/src/config/secondary-model.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `secondaryModelPatch` | 46 | `export function secondaryModelPatch(` | `secondaryModelPatch` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `applySecondaryModelConfig` | 70 | `export function applySecondaryModelConfig(config: NighthawkConfig, env: Env = process.env): NighthawkConfig {` | `applySecondaryModelConfig` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `stripSecondaryModelConfig` | 115 | `export function stripSecondaryModelConfig(` | `stripSecondaryModelConfig` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core/src/config/toml.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `ensureConfigFile` | 56 | `export async function ensureConfigFile(filePath: string): Promise<void> {` | `ensureConfigFile` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `readConfigFile` | 70 | `export function readConfigFile(filePath: string): NighthawkConfig {` | `readConfigFile` 负责读取或查询数据。 |
| `readConfigFileForUpdate` | 84 | `export function readConfigFileForUpdate(filePath: string): NighthawkConfig {` | `readConfigFileForUpdate` 负责读取或查询数据。 |
| `loadRuntimeConfig` | 105 | `export function loadRuntimeConfig(` | `loadRuntimeConfig` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `loadRuntimeConfigSafe` | 137 | `export function loadRuntimeConfigSafe(` | `loadRuntimeConfigSafe` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `parseConfigString` | 272 | `export function parseConfigString(tomlText: string, filePath = 'config.toml'): NighthawkConfig {` | `parseConfigString` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `transformTomlData` | 303 | `export function transformTomlData(data: Record<string, unknown>): Record<string, unknown> {` | `transformTomlData` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `writeConfigFile` | 466 | `export async function writeConfigFile(filePath: string, config: NighthawkConfig): Promise<void> {` | `writeConfigFile` 负责写入或更新状态。 |
| `configToTomlData` | 476 | `export function configToTomlData(config: NighthawkConfig): Record<string, unknown> {` | `configToTomlData` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core/src/config/workspace-local.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `loadWorkspaceLocalConfig` | 35 | `export async function loadWorkspaceLocalConfig(` | `loadWorkspaceLocalConfig` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `readWorkspaceAdditionalDirs` | 55 | `export async function readWorkspaceAdditionalDirs(` | `readWorkspaceAdditionalDirs` 负责读取或查询数据。 |
| `resolveWorkspaceAdditionalDirs` | 62 | `export async function resolveWorkspaceAdditionalDirs(` | `resolveWorkspaceAdditionalDirs` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `appendWorkspaceAdditionalDir` | 70 | `export async function appendWorkspaceAdditionalDir(` | `appendWorkspaceAdditionalDir` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `normalizeAdditionalDirs` | 97 | `export function normalizeAdditionalDirs(additionalDirs: readonly string[]): string[] {` | `normalizeAdditionalDirs` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core-v2/src/app/config/configEvents.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `ConfigWarning` | 13 | `export class ConfigWarning extends Event2<{ readonly payload: ConfigWarningPayload }> {` | 该类封装本文模块的核心状态与行为。 |
| `ConfigChanged` | 25 | `export class ConfigChanged extends Event2<{ readonly payload: ConfigChangedPayload }> {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/app/config/configOverlayContributions.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerConfigOverlay` | 5 | `export function registerConfigOverlay(overlay: ConfigEffectiveOverlay): void {` | `registerConfigOverlay` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `getConfigOverlayContributions` | 9 | `export function getConfigOverlayContributions(): readonly ConfigEffectiveOverlay[] {` | `getConfigOverlayContributions` 负责读取或查询数据。 |
| `_clearConfigOverlayContributionsForTests` | 13 | `export function _clearConfigOverlayContributionsForTests(): void {` | `_clearConfigOverlayContributionsForTests` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core-v2/src/app/config/configPure.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `isPlainObject` | 1 | `export function isPlainObject(value: unknown): value is Record<string, unknown> {` | `isPlainObject` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `deepEqual` | 5 | `export function deepEqual(a: unknown, b: unknown): boolean {` | `deepEqual` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `describeUnknownError` | 49 | `export function describeUnknownError(error: unknown): string {` | `describeUnknownError` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core-v2/src/app/config/configSectionContributions.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `getConfigSectionContributions` | 26 | `export function getConfigSectionContributions(): readonly ConfigSectionContribution[] {` | `getConfigSectionContributions` 负责读取或查询数据。 |
| `_clearConfigSectionContributionsForTests` | 30 | `export function _clearConfigSectionContributionsForTests(): void {` | `_clearConfigSectionContributionsForTests` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core-v2/src/app/config/configService.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `ConfigRegistry` | 153 | `export class ConfigRegistry extends Disposable implements IConfigRegistry {` | 该类封装本文模块的核心状态与行为。 |
| `ConfigService` | 288 | `export class ConfigService extends Disposable implements IConfigService {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/app/config/deprecations.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `collectKeyDeprecations` | 5 | `export function collectKeyDeprecations(` | `collectKeyDeprecations` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core-v2/src/app/config/migrations.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `migrateThinkingEffortMaxToHigh` | 33 | `export async function migrateThinkingEffortMaxToHigh(` | `migrateThinkingEffortMaxToHigh` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core-v2/src/app/config/sectionDiff.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `deepEqual` | 31 | `export function deepEqual(a: unknown, b: unknown): boolean {` | `deepEqual` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core-v2/src/app/config/toml.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `snakeToCamel` | 9 | `export function snakeToCamel(str: string): string {` | `snakeToCamel` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `camelToSnake` | 13 | `export function camelToSnake(str: string): string {` | `camelToSnake` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `transformPlainObject` | 17 | `export function transformPlainObject(data: Record<string, unknown>): Record<string, unknown> {` | `transformPlainObject` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `plainObjectToToml` | 25 | `export function plainObjectToToml(value: Record<string, unknown>, raw: unknown): Record<string, unknown> {` | `plainObjectToToml` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `transformTomlData` | 37 | `export function transformTomlData(` | `transformTomlData` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `applySectionToToml` | 50 | `export function applySectionToToml(` | `applySectionToToml` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `describeTomlSyntaxError` | 90 | `export function describeTomlSyntaxError(error: unknown): string {` | `describeTomlSyntaxError` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `cloneRecord` | 98 | `export function cloneRecord(value: unknown): Record<string, unknown> {` | `cloneRecord` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `setDefined` | 107 | `export function setDefined(target: Record<string, unknown>, key: string, value: unknown): void {` | `setDefined` 负责写入或更新状态。 |


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

### 来自 `packages/agent-core/src/config/env-model.ts` 的 `applyEnvModelConfig`

源码位置：`packages/agent-core/src/config/env-model.ts:93` 附近。

```ts
export function applyEnvModelConfig(config: NighthawkConfig, env: Env = process.env): NighthawkConfig {
  const model = trimmed(env['NIGHTHAWK_MODEL_NAME']);
  if (model === undefined) return config;

  const apiKey = trimmed(env['NIGHTHAWK_MODEL_API_KEY']);
  if (apiKey === undefined) {
    fail('NIGHTHAWK_MODEL_NAME is set but NIGHTHAWK_MODEL_API_KEY is missing.');
  }

  const maxContextRaw = trimmed(env['NIGHTHAWK_MODEL_MAX_CONTEXT_SIZE']);
  const maxContextSize =
    maxContextRaw === undefined
      ? DEFAULT_MAX_CONTEXT_SIZE
      : parsePositiveInt(maxContextRaw, 'NIGHTHAWK_MODEL_MAX_CONTEXT_SIZE');

  const type = parseProviderType(trimmed(env['NIGHTHAWK_MODEL_PROVIDER_TYPE']));
  const baseUrl = trimmed(env['NIGHTHAWK_MODEL_BASE_URL']) ?? DEFAULT_BASE_URL[type];

  const provider: ProviderConfig = {
    type,
    apiKey,
    ...(baseUrl !== undefined ? { baseUrl } : {}),
  };

// ...
```

### 来自 `packages/agent-core/src/config/merge.ts` 的 `mergeConfigPatch`

源码位置：`packages/agent-core/src/config/merge.ts:10` 附近。

```ts
export function mergeConfigPatch(config: NighthawkConfig, patch: NighthawkConfigPatch): NighthawkConfig {
  const base = validateConfig(config);
  const parsedPatch = parsePatch(patch);
  const merged = deepMerge(base, parsedPatch);
  return validateConfig(merged);
}

function parsePatch(patch: NighthawkConfigPatch): NighthawkConfigPatch {
  try {
    return stripUndefinedDeep(NighthawkConfigPatchSchema.parse(patch)) as NighthawkConfigPatch;
  } catch (error) {
    throw new NighthawkError(ErrorCodes.CONFIG_INVALID, `Invalid configuration patch: ${formatConfigValidationError(error)}`, {
      cause: error,
    });
  }
}

function deepMerge(
  target: Record<string, unknown>,
  source: Record<string, unknown>,
): Record<string, unknown> {
  const result = { ...target };
  for (const [key, sourceValue] of Object.entries(source)) {
    if (sourceValue === undefined) continue;
// ...
```

### 来自 `packages/agent-core/src/config/migrations.ts` 的 `migrateThinkingEffortMaxToHigh`

源码位置：`packages/agent-core/src/config/migrations.ts:53` 附近。

```ts
export function migrateThinkingEffortMaxToHigh(configPath: string, homeDir: string): void {
  try {
    if (readMigrationMarkers(homeDir)[THINKING_EFFORT_MAX_TO_HIGH] !== undefined) return;
    if (!existsSync(configPath)) {
      writeMigrationMarker(homeDir, THINKING_EFFORT_MAX_TO_HIGH);
      return;
    }
    let config;
    try {
      config = readConfigFileForUpdate(configPath);
    } catch {
      return; // Unreadable config: no marker, retry on the next start.
    }
    if (config.thinking?.effort === 'max') {
      const validated = validateConfig({
        ...config,
        thinking: { ...config.thinking, effort: 'high' },
      });
      const tmp = `${configPath}.migrate-${process.pid}-${Date.now()}`;
      writeFileSync(tmp, `${stringifyToml(configToTomlData(validated))}\n`, { mode: 0o600 });
      renameSync(tmp, configPath);
    }
    writeMigrationMarker(homeDir, THINKING_EFFORT_MAX_TO_HIGH);
  } catch {
// ...
```


## 时序/状态图

```mermaid
flowchart LR
    A[入口/调用方] --> B[本文核心模块]
    B --> C[依赖服务/数据层]
    C --> D[输出/事件/持久化]
```

> 图注：`11-reference/config-files.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `docs/en/configuration/config-files.md`（非 TS 源码，可直接阅读）
  - `packages/agent-core/src/config//` 目录下源码文件示例：
    - `packages/agent-core/src/config/env-model.ts`
    - `packages/agent-core/src/config/index.ts`
    - `packages/agent-core/src/config/merge.ts`
    - `packages/agent-core/src/config/migrations.ts`
    - `packages/agent-core/src/config/model.ts`
    - `packages/agent-core/src/config/nighthawk-env-params.ts`
    - `packages/agent-core/src/config/path.ts`
    - `packages/agent-core/src/config/print-defaults.ts`
    - `packages/agent-core/src/config/resolve.ts`
    - `packages/agent-core/src/config/schema.ts`
    - `packages/agent-core/src/config/secondary-model.ts`
    - `packages/agent-core/src/config/toml.ts`
    - `packages/agent-core/src/config/workspace-local.ts`
  - `packages/agent-core-v2/src/app/config//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/app/config/config.ts`
    - `packages/agent-core-v2/src/app/config/configEvents.ts`
    - `packages/agent-core-v2/src/app/config/configOverlayContributions.ts`
    - `packages/agent-core-v2/src/app/config/configPure.ts`
    - `packages/agent-core-v2/src/app/config/configSectionContributions.ts`
    - `packages/agent-core-v2/src/app/config/configService.ts`
    - `packages/agent-core-v2/src/app/config/deprecations.ts`
    - `packages/agent-core-v2/src/app/config/errors.ts`
    - `packages/agent-core-v2/src/app/config/migrations.ts`
    - `packages/agent-core-v2/src/app/config/sectionDiff.ts`
    - `packages/agent-core-v2/src/app/config/toml.ts`

## 证据与代码位置

- `docs/en/configuration/config-files.md`
- `packages/agent-core/src/config/`
- `packages/agent-core-v2/src/app/config/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
