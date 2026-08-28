# kosong 使用与开发

本页提供 packages/kosong 的常用命令与集成方式。

## 常用命令

```sh
pnpm -C packages/kosong build
pnpm -C packages/kosong typecheck
pnpm -C packages/kosong clean
```

## 构建

构建命令是 `pnpm -C packages/kosong build`（如 package.json 中存在）。产物默认输出到 `packages/kosong/dist`。

## 测试

运行 `pnpm -C packages/kosong test` 执行 Vitest；部分包另有 smoke/typecheck 命令。

## 集成注意

`kosong` 的公开入口以 package.json 的 `exports`/`imports` 为准；跨包引用请使用 workspace 协议 `workspace:^`。

## 证据与代码位置

- `packages/kosong/package.json`
- `packages/kosong/tsdown.config.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
