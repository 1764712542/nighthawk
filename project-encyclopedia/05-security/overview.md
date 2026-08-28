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

  - `packages/agent-core/src/tools/builtin/security//` 目录下源码文件示例：
    - `packages/agent-core/src/tools/builtin/security/dep-audit.ts`
    - `packages/agent-core/src/tools/builtin/security/engine.ts`
    - `packages/agent-core/src/tools/builtin/security/index.ts`
    - `packages/agent-core/src/tools/builtin/security/osv-client.ts`
    - `packages/agent-core/src/tools/builtin/security/rules.ts`
    - `packages/agent-core/src/tools/builtin/security/sarif-formatter.ts`
    - `packages/agent-core/src/tools/builtin/security/scan-cache-persist.ts`
    - `packages/agent-core/src/tools/builtin/security/secret-scan.ts`
    - `packages/agent-core/src/tools/builtin/security/security-scan.ts`
    - `packages/agent-core/src/tools/builtin/security/taint-trace.ts`
  - `README.zh-CN.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/agent-core/src/tools/builtin/security/`
- `README.zh-CN.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
