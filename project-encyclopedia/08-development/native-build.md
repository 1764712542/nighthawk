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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

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
