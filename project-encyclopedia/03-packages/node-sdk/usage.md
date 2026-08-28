# node-sdk 使用与开发

本页提供 packages/node-sdk 的常用命令与集成方式。

## 常用命令

```sh
pnpm -C packages/node-sdk build
pnpm -C packages/node-sdk build:dts
pnpm -C packages/node-sdk typecheck
pnpm -C packages/node-sdk clean
```

## 构建

构建命令是 `pnpm -C packages/node-sdk build`（如 package.json 中存在）。产物默认输出到 `packages/node-sdk/dist`。

## 测试

运行 `pnpm -C packages/node-sdk test` 执行 Vitest；部分包另有 smoke/typecheck 命令。

## 集成注意

`node-sdk` 的公开入口以 package.json 的 `exports`/`imports` 为准；跨包引用请使用 workspace 协议 `workspace:^`。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/node-sdk/package.json`（非 TS 源码，可直接阅读）
  - `packages/node-sdk/tsdown.config.ts`（未发现直接 export 符号，可能以副作用注册为主）

## 证据与代码位置

- `packages/node-sdk/package.json`
- `packages/node-sdk/tsdown.config.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
