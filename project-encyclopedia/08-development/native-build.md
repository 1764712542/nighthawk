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

## 证据与代码位置

- `apps/nighthawk/scripts/native/`
- `apps/nighthawk/src/native/`
- `apps/nighthawk/package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
