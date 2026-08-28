# 威胁模型

NightHawk 自身的安全模型围绕扩展统一权限、路径边界、信任门和最小暴露。

## 扩展风险

MCP/Skill/Plugin 都可能引入不可信代码；所有扩展进入统一审批和审计。

## 网络暴露

server 默认 loopback；非 loopback 需 TLS；debug endpoints 仅 loopback。

## 数据保护

OAuth token 写入使用事务串行化；日志 redact 敏感信息。

## 供应链

依赖审计工具自身可检查 postinstall 脚本和未锁定版本。

## 证据与代码位置

- `packages/kap-server/src/start.ts`
- `packages/agent-core-v2/docs/Permission.md`
- `docs/architecture/plugin-and-extension-design.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
