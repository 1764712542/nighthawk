# NightHawk 是什么

NightHawk 是一个安全优先的终端 AI Agent，把现代 coding agent 的 Plan/Act/Observe/Reflect 循环与原生安全引擎放进同一个终端产品。

## 一句话定位

NightHawk 是“安全为先的终端 AI Agent —— 渗透测试、代码审计与高强度编程，同一个闭环”。它不是一个纯扫描器，也不是一个纯聊天机器人，而是一个既能读代码、改代码、跑命令，又能主动审计漏洞、追踪污点、扫描密钥的 agent harness。

## 核心能力

它包含：现代化 agent 内核（Plan/Act/Observe/Reflect、子 Agent、MCP、Skills、持久记忆）、安全工具箱（116 条漏洞规则、密钥检测、跨文件污点追踪、依赖审计）、REST/WebSocket 服务端、CLI/TUI、VS Code 扩展、Web inspector 和可视化调试器。

## 目标用户

适合安全工程师、开发工程师、DevOps、代码审计人员，以及想在终端里获得完整 agent 工作流而不依赖 IDE 的用户。

## 代码事实

根 `README.zh-CN.md` 明确写了产品定位；`apps/nighthawk/package.json` 的 `bin.nighthawk` 是 CLI 入口；`packages/agent-core-v2` 是当前 v2 引擎。

## 证据与代码位置

- `README.zh-CN.md`
- `apps/nighthawk/package.json`
- `packages/agent-core-v2/src/index.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
