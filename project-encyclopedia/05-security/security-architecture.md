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

## 专业实现要点（开发流程视角）

### 需求分析

安全工具要能作为 Agent 工具被调用，也要能被脚本/CI 使用。

### 设计决策

规则用模板数组声明，统一 CWE/OWASP/严重度/修复建议；扫描用 Kaos 抽象文件系统，便于远程执行。

### 实现步骤

定义规则 → 实现扫描引擎 → 包装为 BuiltinTool → 加缓存/SARIF/冒烟测试。

### 验证方式

运行 `node scripts/smoke-security.ts`，用已知漏洞样本验证 SecurityScan/SecretScan/TaintTrace/DepAudit。

### 维护注意

新规则要覆盖多语言、提供中英文修复建议，并考虑误报率。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/agent-core/src/tools/builtin/security/security-scan.ts`：
    - 导出签名/声明：
      - `export const SecurityScanInputSchema = z.object({`
      - `export type SecurityScanInput = z.infer<typeof SecurityScanInputSchema>;`
      - `export class SecurityScanTool implements BuiltinTool<SecurityScanInput>`
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
