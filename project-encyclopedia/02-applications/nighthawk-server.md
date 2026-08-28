# NightHawk 服务端模式

CLI 可以通过 `pnpm dev:server` 或 `nighthawk` 内嵌启动 kap-server，供 Web UI 和远程访问。

## 命令

根 `package.json` 有 `dev:server`、`dev:kap-server`、`dev:v2` 等脚本。

## 端口

默认 `127.0.0.1:58627`。

## Web UI

`apps/nighthawk/dist-web` 是提交的预构建 bundle，由 code-app 同步；server 可托管 web assets。

## 安全

非 loopback 绑定必须 TLS 或 `--insecure-no-tls`；默认 bearer token 认证。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `package.json`（非 TS 源码，可直接阅读）
  - `apps/nighthawk/AGENTS.md`（非 TS 源码，可直接阅读）
  - `packages/kap-server/src/start.ts` 导出：
    - 符号：`ServerHostIdentity`, `ServerStartOptions`, `RunningServer`, `PORT_RETRY_LIMIT`, `ListenWithPortRetryOptions`

## 证据与代码位置

- `package.json`
- `apps/nighthawk/AGENTS.md`
- `packages/kap-server/src/start.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
