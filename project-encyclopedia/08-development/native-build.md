# Native/SEA 构建开发

SEA 打包、worker 提取和 staged update 的开发注意事项。

## Bundle

`01-bundle.mjs` 先产出可注入 SEA 的脚本。

## SEA

`build.mjs --profile=release` 用 postject 注入 blob。

## Worker

`native/minidb-worker.ts`、`search-worker.ts` 从 SEA 提取运行。

## 调试

`runNativeAssetSmokeIfRequested` 提供 native smoke。

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

  - `apps/nighthawk/scripts/native//`（目录内无 .ts 文件）
  - `apps/nighthawk/src/native//` 目录下源码文件示例：
    - `apps/nighthawk/src/native/minidb-worker.ts`
    - `apps/nighthawk/src/native/module-hook.ts`
    - `apps/nighthawk/src/native/native-assets.ts`
    - `apps/nighthawk/src/native/native-require.ts`
    - `apps/nighthawk/src/native/search-worker.ts`
    - `apps/nighthawk/src/native/smoke.ts`
  - `apps/nighthawk/package.json`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `apps/nighthawk/scripts/native/`
- `apps/nighthawk/src/native/`
- `apps/nighthawk/package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
