# TypeScript 工程规范

项目使用 strict TypeScript、ES2024 target、bundler module resolution，并执行 import 边界。

## 配置

`tsconfig.json` 开启 strict、noUncheckedIndexedAccess、noImplicitOverride 等。

## 路径别名

包内 `imports` 映射 `#/*` 到 `./src/*.ts`，避免相对路径地狱。

## 注释规则

agent-core-v2、kap-server、transcript 是 comment-free zones，仅允许 JSDoc 和 lint suppression。

## 导出

包入口 `index.ts` 通常用 `export * from "./module"`。

## 证据与代码位置

- `tsconfig.json`
- `AGENTS.md`
- `packages/agent-core-v2/package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
