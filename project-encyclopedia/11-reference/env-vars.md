# 环境变量参考

常用环境变量：NIGHTHAWK_HOME、NIGHTHAWK_API_KEY、代理、实验开关。

## 路径

`NIGHTHAWK_HOME` 覆盖 `~/.nighthawk`。

## Provider

`NIGHTHAWK_API_KEY` 等供应商密钥。

## 网络

`HTTP_PROXY`/`HTTPS_PROXY`/`NO_PROXY` 由全局 dispatcher 接管。

## 实验

`NIGHTHAWK_EXPERIMENTAL_*` 开关单个实验；`NIGHTHAWK_EXPERIMENTAL_FLAG` 开全部。

## 专业实现要点（开发流程视角）

### 需求分析

参考手册要支持用户快速查找参数、命令、API、协议。

### 设计决策

以表格和代码块为主，保持条目化、可复制。

### 实现步骤

从 CLI 定义、protocol schema、SDK 类型和路由源码提取事实。

### 验证方式

运行 `nighthawk --help`、`pnpm doctor` 或对照 schema 测试。

### 维护注意

参考内容随代码变更同步更新。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `docs/en/configuration/env-vars.md`（非 TS 源码，可直接阅读）
  - `packages/agent-core/src/flags/registry.ts`：
    - 导出签名/声明：
      - `export const FLAG_DEFINITIONS = [`
      - `export type FlagId = (typeof FLAG_DEFINITIONS)[number]['id'];`
  - `apps/nighthawk/src/main.ts`：
    - 导出签名/声明：
      - `export interface MainCommandOutcome {`
      - `export async function handleMainCommand(
  opts: CLIOptions,
  version: string,
): Promise<MainCommandOutcome>`
      - `export async function handleUpgradeCommand(version: string): Promise<void>`
      - `export function main(): void`

## 证据与代码位置

- `docs/en/configuration/env-vars.md`
- `packages/agent-core/src/flags/registry.ts`
- `apps/nighthawk/src/main.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
