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

## 专业实现要点（开发流程视角）

### 需求分析

技术栈选择要支撑大型 monorepo、严格类型、快速构建、可复现环境。

### 设计决策

TypeScript strict + tsdown + pnpm workspace + Nix flake；用 oxlint 而非传统 eslint。

### 实现步骤

先搭 workspace 与 tsconfig，再引入 tsdown/vitest/oxlint/changesets/CI。

### 验证方式

执行 `pnpm lint`、`pnpm typecheck`、`pnpm test`、`pnpm run build`。

### 维护注意

依赖版本锁定在 packageManager；Nix 路径与 pnpm workspace 保持一致。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `tsconfig.json`（非 TS 源码，可直接阅读）
  - `AGENTS.md`（非 TS 源码，可直接阅读）
  - `packages/agent-core-v2/package.json`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `tsconfig.json`
- `AGENTS.md`
- `packages/agent-core-v2/package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
