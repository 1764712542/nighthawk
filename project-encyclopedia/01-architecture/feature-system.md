# Feature 系统

Feature 是自包含的内置能力单元，一个 Feature 可以贡献服务、工具、profile、配置、命令。

## 定义

`src/features/feature.ts` 定义 `Feature` 基类；`registerFeature(Recipe)` 注册；`src/features/featureRegistry.ts` 保存模块表。

## 贡献方式

`contributeService`、`contributeAgentService`、`contributeTool`、`contributeProfiles`、`contributeConfig`、`contributeCommand`。

## 现有 Feature

plan、goal、skill、swarm、todo、cron、externalHooks、interaction、security、sessionInit、staleGuard、tokenCounting、usage、tower、btw、debugEvents、dateChange。

## 装配

App scope 创建时 `IFeatureAssemblyService` 灌入 `IFeatureManager`；每个 feature 都是可 introspection、可 retract 的 unit。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core-v2/src/features/feature.ts` 导出：
    - 符号：`Feature`
  - `packages/agent-core-v2/src/features/featureAssemblyService.ts` 导出：
    - 符号：`FeatureAssemblyService`
  - `packages/agent-core-v2/docs/features.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/agent-core-v2/src/features/feature.ts`
- `packages/agent-core-v2/src/features/featureAssemblyService.ts`
- `packages/agent-core-v2/docs/features.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
