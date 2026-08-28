# 安全引擎与 Agent 集成

安全工具是一等 Agent 工具，遵循统一审批、路径安全和结果格式。

## Tool 类

SecurityScanTool、SecretScanTool、TaintTraceTool、DepAuditTool 都实现 `BuiltinTool`。

## resolveExecution

每个工具声明 `accesses` 和 `approvalRule`，纳入权限链。

## 路径安全

用 `resolvePathAccessPath` 解析路径，遵守 workspace 边界。

## v2 迁移

`packages/agent-core-v2/src/features/security/` 把安全工具移植到 v2 引擎。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core/src/tools/builtin/security/security-scan.ts` 导出：
    - 符号：`SecurityScanInputSchema`, `SecurityScanInput`, `SecurityScanTool`
  - `packages/agent-core-v2/src/features/security//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/features/security/engine/dep-audit.ts`
    - `packages/agent-core-v2/src/features/security/engine/engine.ts`
    - `packages/agent-core-v2/src/features/security/engine/rules.ts`
    - `packages/agent-core-v2/src/features/security/engine/sarif-formatter.ts`
    - `packages/agent-core-v2/src/features/security/engine/scan-cache-persist.ts`
    - `packages/agent-core-v2/src/features/security/securityFeature.ts`
    - `packages/agent-core-v2/src/features/security/tools/dep-audit.ts`
    - `packages/agent-core-v2/src/features/security/tools/depAuditTool.ts`
    - `packages/agent-core-v2/src/features/security/tools/secret-scan.ts`
    - `packages/agent-core-v2/src/features/security/tools/secretScanTool.ts`
    - `packages/agent-core-v2/src/features/security/tools/security-scan.ts`
    - `packages/agent-core-v2/src/features/security/tools/securityScanTool.ts`
    - `packages/agent-core-v2/src/features/security/tools/taint-trace.ts`
    - `packages/agent-core-v2/src/features/security/tools/taintTraceTool.ts`

## 证据与代码位置

- `packages/agent-core/src/tools/builtin/security/security-scan.ts`
- `packages/agent-core-v2/src/features/security/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
