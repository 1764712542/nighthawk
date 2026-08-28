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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `docs/en/configuration/env-vars.md`（非 TS 源码，可直接阅读）
  - `packages/agent-core/src/flags/registry.ts` 导出：
    - 符号：`FLAG_DEFINITIONS`, `FlagId`
  - `apps/nighthawk/src/main.ts` 导出：
    - 符号：`MainCommandOutcome`, `main`

## 证据与代码位置

- `docs/en/configuration/env-vars.md`
- `packages/agent-core/src/flags/registry.ts`
- `apps/nighthawk/src/main.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
