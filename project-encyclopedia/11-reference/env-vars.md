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

## 证据与代码位置

- `docs/en/configuration/env-vars.md`
- `packages/agent-core/src/flags/registry.ts`
- `apps/nighthawk/src/main.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
