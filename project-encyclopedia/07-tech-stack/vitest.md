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

## 证据与代码位置

- `vitest.config.ts`
- `package.json`
- `.github/workflows/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
