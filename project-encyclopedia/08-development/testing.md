# 测试指南

在哪里加测试、如何运行、CI 分片。

## 原则

优先加进现有测试文件，不要为每个小改动新建文件。

## 包测试

`pnpm -C packages/agent-core test` 等。

## e2e

`pnpm -C apps/nighthawk e2e`；live e2e 需要 server。

## 安全

安全引擎改动后运行 `node scripts/smoke-security.ts`。

## 专业实现要点（开发流程视角）

### 需求分析

开发流程要让贡献者能快速搭建、构建、测试、提交。

### 设计决策

根 AGENTS.md 作为热路径规则；各包 AGENTS.md 记录局部约定；skill 目录沉淀可复用流程。

### 实现步骤

安装依赖 → 构建包 → 修改代码 → 运行相关测试 → lint → 生成 changeset → PR。

### 验证方式

本地 `pnpm lint && pnpm typecheck && pnpm test`；CI 分片验证。

### 维护注意

提交前清理 scratch 文件，遵循 Conventional Commit，不泄露内部标识。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `AGENTS.md`（非 TS 源码，可直接阅读）
  - `vitest.config.ts`：
    - 导出签名/声明：
      - `export default defineConfig({`
  - `scripts/smoke-security.ts`（未发现直接 export 符号，可能以副作用注册为主）

## 证据与代码位置

- `AGENTS.md`
- `vitest.config.ts`
- `scripts/smoke-security.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
