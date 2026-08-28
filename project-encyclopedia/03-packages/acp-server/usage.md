# acp-server 使用与开发

本页提供 packages/acp-server 的常用命令与集成方式。

## 常用命令

```sh
pnpm -C packages/acp-server build
pnpm -C packages/acp-server typecheck
pnpm -C packages/acp-server test
pnpm -C packages/acp-server clean
```

## 构建

构建命令是 `pnpm -C packages/acp-server build`（如 package.json 中存在）。产物默认输出到 `packages/acp-server/dist`。

## 测试

运行 `pnpm -C packages/acp-server test` 执行 Vitest；部分包另有 smoke/typecheck 命令。

## 集成注意

`acp-server` 的公开入口以 package.json 的 `exports`/`imports` 为准；跨包引用请使用 workspace 协议 `workspace:^`。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/acp-server/package.json`（非 TS 源码，可直接阅读）
  - `packages/acp-server/tsdown.config.ts`（未发现直接 export 符号，可能以副作用注册为主）

## 证据与代码位置

- `packages/acp-server/package.json`
- `packages/acp-server/tsdown.config.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
