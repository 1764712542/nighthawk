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

  - `packages/kap-server/src/start.ts`：
    - 导出签名/声明：
      - `export interface ServerHostIdentity extends NighthawkHostIdentity {`
      - `export interface ServerStartOptions {`
      - `export interface RunningServer {`
      - `export async function startServer(opts: ServerStartOptions): Promise<RunningServer>`
      - `export const PORT_RETRY_LIMIT = 100;`
      - `export interface ListenWithPortRetryOptions {`
      - `export async function listenWithPortRetry(
  opts: ListenWithPortRetryOptions,
): Promise<`
  - `packages/agent-core-v2/docs/Permission.md`（非 TS 源码，可直接阅读）
  - `docs/architecture/plugin-and-extension-design.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/kap-server/src/start.ts`
- `packages/agent-core-v2/docs/Permission.md`
- `docs/architecture/plugin-and-extension-design.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
