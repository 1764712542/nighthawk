# Vitest 测试体系

单元、集成、e2e、smoke 都围绕 Vitest，另有 node:test 用于 pi-tui。

## 根测试

`vitest run` 跑全部包测试。

## 分片

CI 中 5 shard 并行。

## 安全 smoke

`scripts/smoke-security.ts` 独立于 vitest 运行。

## e2e

`apps/nighthawk` 的 e2e 需要 `NIGHTHAWK_E2E=1`；真实 LLM 需要 `NIGHTHAWK_E2E_REAL=1`。

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

  - `vitest.config.ts`：
    - 导出签名/声明：
      - `export default defineConfig({`
  - `package.json`（非 TS 源码，可直接阅读）
  - `.github/workflows//`（目录内无 .ts 文件）

## 证据与代码位置

- `vitest.config.ts`
- `package.json`
- `.github/workflows/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
