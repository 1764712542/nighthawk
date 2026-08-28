# 构建流程

包构建、CLI 构建、native 构建和产物检查。

## 包构建

`pnpm -r run build`，每个包 tsdown。

## CLI 构建

`pnpm -C apps/nighthawk run build`；prebuild 生成 vis asset。

## Native 构建

`pnpm -C apps/nighthawk run build:native:sea` 生成 SEA。

## 检查

`pnpm lint:pkg` 运行 publint + attw。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `package.json`（非 TS 源码，可直接阅读）
  - `apps/nighthawk/package.json`（非 TS 源码，可直接阅读）
  - `scripts/build.mjs`（未发现直接 export 符号，可能以副作用注册为主）

## 证据与代码位置

- `package.json`
- `apps/nighthawk/package.json`
- `scripts/build.mjs`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
