# Native/SEA 构建开发

SEA 打包、worker 提取和 staged update 的开发注意事项。

## Bundle

`01-bundle.mjs` 先产出可注入 SEA 的脚本。

## SEA

`build.mjs --profile=release` 用 postject 注入 blob。

## Worker

`native/minidb-worker.ts`、`search-worker.ts` 从 SEA 提取运行。

## 调试

`runNativeAssetSmokeIfRequested` 提供 native smoke。

## 专业实现要点（开发流程视角）

### 需求分析

开发流程要让贡献者能快速搭建、构建、测试、提交。

### 设计决策

根 AGENTS.md 作为热路径规则；各包 AGENTS.md 记录局部约定；skill 目录沉淀可复用流程。

### 实现步骤

安装依赖 → 构建包 → 修改代码 → 运行相关测试 → lint → 生成 changeset → PR。

### 验证方式

本地 `pnpm lint && pnpm typecheck && pnpm test`；CI 分片验证。

### 维护注意

提交前清理 scratch 文件，遵循 Conventional Commit，不泄露内部标识。

## 逐函数实现说明

以下按源码文件列出可验证的导出函数/类，并给出实现职责说明。

### apps/nighthawk/src/native/minidb-worker.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `installMinidbTextBuildWorker` | 37 | `export function installMinidbTextBuildWorker(` | `installMinidbTextBuildWorker` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### apps/nighthawk/src/native/module-hook.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `installNativeModuleHook` | 26 | `export function installNativeModuleHook(): void {` | `installNativeModuleHook` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### apps/nighthawk/src/native/native-assets.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `nativeAssetManifestKey` | 89 | `export function nativeAssetManifestKey(target: string = currentTarget()): string {` | `nativeAssetManifestKey` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `validateNativeAssetManifest` | 171 | `export function validateNativeAssetManifest(` | `validateNativeAssetManifest` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `getSeaAssetSource` | 259 | `export function getSeaAssetSource(): NativeAssetSource \| null {` | `getSeaAssetSource` 负责读取或查询数据。 |
| `getEmbeddedNativeAssetManifest` | 268 | `export function getEmbeddedNativeAssetManifest(` | `getEmbeddedNativeAssetManifest` 负责读取或查询数据。 |
| `getNativeCacheBase` | 281 | `export function getNativeCacheBase(options: NativeAssetOptions = {}): string {` | `getNativeCacheBase` 负责读取或查询数据。 |
| `getNativeAssetCacheRoot` | 302 | `export function getNativeAssetCacheRoot(` | `getNativeAssetCacheRoot` 负责读取或查询数据。 |
| `ensureNativeAssetTree` | 363 | `export function ensureNativeAssetTree(options: NativeAssetOptions = {}): string \| null {` | `ensureNativeAssetTree` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `getNativeRuntimeFile` | 395 | `export function getNativeRuntimeFile(` | `getNativeRuntimeFile` 负责读取或查询数据。 |
| `getMinidbTextBuildWorkerFile` | 414 | `export function getMinidbTextBuildWorkerFile(` | `getMinidbTextBuildWorkerFile` 负责读取或查询数据。 |
| `getKapSearchWorkerFile` | 420 | `export function getKapSearchWorkerFile(options: NativeAssetOptions = {}): string \| null {` | `getKapSearchWorkerFile` 负责读取或查询数据。 |
| `getNativePackageRoot` | 424 | `export function getNativePackageRoot(` | `getNativePackageRoot` 负责读取或查询数据。 |
| `hasNativePackage` | 443 | `export function hasNativePackage(packageName: string, manifest: NativeAssetManifest): boolean {` | `hasNativePackage` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `nativeAssetCacheExists` | 447 | `export function nativeAssetCacheExists(` | `nativeAssetCacheExists` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `cleanupStaleNativeCache` | 479 | `export function cleanupStaleNativeCache(options: CleanupOptions): CleanupResult {` | `cleanupStaleNativeCache` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `cleanupStaleNativeCacheForCurrent` | 534 | `export function cleanupStaleNativeCacheForCurrent(` | `cleanupStaleNativeCacheForCurrent` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### apps/nighthawk/src/native/native-require.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `createNativePackageRequire` | 10 | `export function createNativePackageRequire(` | `createNativePackageRequire` 负责创建/构建相关对象或流程。 |

### apps/nighthawk/src/native/search-worker.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `installKapSearchWorker` | 42 | `export function installKapSearchWorker(` | `installKapSearchWorker` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### apps/nighthawk/src/native/smoke.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `runNativeAssetSmokeIfRequested` | 124 | `export function runNativeAssetSmokeIfRequested(): boolean {` | `runNativeAssetSmokeIfRequested` 负责执行核心流程。 |


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

### 来自 `apps/nighthawk/src/native/minidb-worker.ts` 的 `installMinidbTextBuildWorker`

源码位置：`apps/nighthawk/src/native/minidb-worker.ts:37` 附近。

```ts
export function installMinidbTextBuildWorker(
  options: NativeAssetOptions = {},
): MinidbTextBuildWorkerInstallStatus {
  const source = options.source ?? getSeaAssetSource();
  if (source === null) return { status: 'not-sea' };

  let assetSha256: string | undefined;
  try {
    const manifest = options.manifest ?? getEmbeddedNativeAssetManifest(source);
    const file = manifest?.runtimeFiles.find(
      (entry) => entry.key === MINIDB_TEXT_BUILD_WORKER_ASSET.key,
    );
    if (manifest === null || file === undefined) return { status: 'asset-missing' };
    assetSha256 = file.sha256;

    const workerPath = getMinidbTextBuildWorkerFile({ ...options, source, manifest });
    if (workerPath === null) return { status: 'asset-missing' };
    configureTextBuildWorkerRuntime(workerPath);
    const runtime = getTextBuildWorkerRuntimeState();
    if (!runtime.configured) throw new Error('MiniDb worker runtime was not configured');
    return {
      status: 'installed',
      assetSha256,
      basename: basename(workerPath),
// ...
```

### 来自 `apps/nighthawk/src/native/module-hook.ts` 的 `installNativeModuleHook`

源码位置：`apps/nighthawk/src/native/module-hook.ts:26` 附近。

```ts
export function installNativeModuleHook(): void {
  if (installed) return;
  installed = true;

  const moduleBuiltin = nodeRequire('node:module') as ModuleWithLoad;
  const originalLoad = moduleBuiltin._load;
  if (originalLoad === undefined) return;

  moduleBuiltin._load = function loadWithNativeAssets(
    this: unknown,
    request: string,
    parent: unknown,
    isMain: boolean,
  ): unknown {
    if (
      typeof request === 'string' &&
      PI_TUI_NATIVE_PATTERN.test(request) &&
      !existsSync(request)
    ) {
      const pkgRoot = getNativePackageRoot('@nighthawk/pi-tui');
      if (pkgRoot !== null) {
        const match = request.match(PI_TUI_NATIVE_PATTERN);
        if (match !== null) {
          const redirected = join(pkgRoot, match[0]);
// ...
```

### 来自 `apps/nighthawk/src/native/native-assets.ts` 的 `nativeAssetManifestKey`

源码位置：`apps/nighthawk/src/native/native-assets.ts:89` 附近。

```ts
export function nativeAssetManifestKey(target: string = currentTarget()): string {
  return buildManifestKey(target);
}

function toBuffer(value: ArrayBuffer | ArrayBufferView | Buffer | string): Buffer {
  if (Buffer.isBuffer(value)) return value;
  if (typeof value === 'string') return Buffer.from(value);
  if (ArrayBuffer.isView(value)) {
    return Buffer.from(value.buffer, value.byteOffset, value.byteLength);
  }
  return Buffer.from(value);
}

function sha256(bytes: Buffer | Uint8Array | string): string {
  return createHash('sha256').update(bytes).digest('hex');
}

function manifestObject(value: unknown, label: string): Record<string, unknown> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    throw new Error(`Invalid native asset manifest: ${label} must be an object`);
  }
  return value as Record<string, unknown>;
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

> 图注：`08-development/native-build.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `apps/nighthawk/scripts/native//`（目录内无 .ts 文件）
  - `apps/nighthawk/src/native//` 目录下源码文件示例：
    - `apps/nighthawk/src/native/minidb-worker.ts`
    - `apps/nighthawk/src/native/module-hook.ts`
    - `apps/nighthawk/src/native/native-assets.ts`
    - `apps/nighthawk/src/native/native-require.ts`
    - `apps/nighthawk/src/native/search-worker.ts`
    - `apps/nighthawk/src/native/smoke.ts`
  - `apps/nighthawk/package.json`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `apps/nighthawk/scripts/native/`
- `apps/nighthawk/src/native/`
- `apps/nighthawk/package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
