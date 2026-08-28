# 安全引擎总览

NightHawk 内置安全工具箱，包含漏洞扫描、密钥扫描、污点追踪、依赖审计和渗透测试工具。

## 四大核心工具

SecurityScan（116 规则）、SecretScan（Shannon 熵 + 模式）、TaintTrace（跨文件污点）、DepAudit（离线/OSV/外部）。

## 渗透测试工具

PortScanner、DirBrute、PasswordBrute、ThreatModel、SubdomainEnum 仅在 `/pentest` 模式可用。

## 生产位置

生产代码在 `packages/agent-core/src/tools/builtin/security/`；`packages/security-core` 已弃用。

## 证据

`rules.ts` 中可数到 116 条规则模板；`scripts/smoke-security.ts` 是安全冒烟。

## 证据与代码位置

- `packages/agent-core/src/tools/builtin/security/`
- `README.zh-CN.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
