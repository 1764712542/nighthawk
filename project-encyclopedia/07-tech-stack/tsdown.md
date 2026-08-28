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

  - `apps/nighthawk/tsdown.config.ts`：
    - 导出签名/声明：
      - `export default defineConfig({`
  - `packages/agent-core-v2/tsdown.config.ts`：
    - 导出签名/声明：
      - `export default defineConfig({`
  - `package.json`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `apps/nighthawk/tsdown.config.ts`
- `packages/agent-core-v2/tsdown.config.ts`
- `package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
