# klient 使用与开发

本页提供 packages/klient 的常用命令与集成方式。

## 常用命令

```sh
pnpm -C packages/klient build
pnpm -C packages/klient typecheck
pnpm -C packages/klient typecheck:examples
pnpm -C packages/klient test
pnpm -C packages/klient smoke
pnpm -C packages/klient smoke:boundary
pnpm -C packages/klient smoke:select-tools
pnpm -C packages/klient stress:kosong-config
```

## 构建

构建命令是 `pnpm -C packages/klient build`（如 package.json 中存在）。产物默认输出到 `packages/klient/dist`。

## 测试

运行 `pnpm -C packages/klient test` 执行 Vitest；部分包另有 smoke/typecheck 命令。

## 集成注意

`klient` 的公开入口以 package.json 的 `exports`/`imports` 为准；跨包引用请使用 workspace 协议 `workspace:^`。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/klient/package.json`（非 TS 源码，可直接阅读）
  - `packages/klient/tsdown.config.ts`（未发现直接 export 符号，可能以副作用注册为主）

## 证据与代码位置

- `packages/klient/package.json`
- `packages/klient/tsdown.config.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
