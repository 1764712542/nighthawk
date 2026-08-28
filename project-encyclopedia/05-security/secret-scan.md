# SecretScan 密钥检测

SecretScan 检测硬编码凭据，结合已知 token 格式与 Shannon 熵评分。

## 模式

AWS/GCP/Azure 密钥、GitHub token、Stripe、OpenAI 等。

## 熵

对疑似 key 计算 Shannon entropy，低于阈值的低置信结果被过滤。

## 输出

file、line、type、preview、entropy、confidence。

## 使用

`SecretScan` 工具参数 `path`/`include`，默认扫 workspace。

## 证据与代码位置

- `packages/agent-core/src/tools/builtin/security/secret-scan.ts`
- `packages/agent-core/src/tools/builtin/security/engine.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
