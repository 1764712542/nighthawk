# DepAudit 依赖审计

DepAudit 解析依赖清单，离线标记已知风险，并可查询 OSV 或调用宿主机审计工具。

## 清单

package.json、requirements.txt、go.mod。

## 离线检查

KNOWN_RISKS 内置列表、loose range、http registry、postinstall 远程脚本、Go pseudo-version。

## OSV

`osv-client.ts` 查询 OSV API。

## 外部

`useExternal: true` 运行 npm audit / pnpm audit / pip-audit 等。

## 证据与代码位置

- `packages/agent-core/src/tools/builtin/security/dep-audit.ts`
- `packages/agent-core/src/tools/builtin/security/osv-client.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
