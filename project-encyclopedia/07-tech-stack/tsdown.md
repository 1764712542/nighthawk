# tsdown 构建

每个包用 tsdown 打包成 ESM，CLI 额外有 worker/native 配置。

## 基础

各包 `tsdown.config.ts` 定义入口、格式、目标。

## CLI 配置

`apps/nighthawk` 有 tsdown、tsdown.dist-worker、tsdown.worker、tsdown.native 多个配置。

## 产物

dist/index.mjs、dist/main.mjs 等。

## 发布

publishConfig 的 exports 指向 dist 类型和实现。

## 证据与代码位置

- `apps/nighthawk/tsdown.config.ts`
- `packages/agent-core-v2/tsdown.config.ts`
- `package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
