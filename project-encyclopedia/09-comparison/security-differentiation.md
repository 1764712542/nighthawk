# 安全差异化详解

NightHawk 的“安全优先”不是宣传语，而是代码中的一等工具和工程守卫。

## 内置规则

116 条规则映射 OWASP/CWE，且每条带中英文修复建议。

## 污点追踪

跨文件 module scope 的 TaintTrace 是多数 coding agent 没有的能力。

## 依赖审计

离线已知风险 + OSV + 宿主机包管理器三重来源。

## 权限

扩展进入统一审批，格式自由但行为不自由。

## 专业实现要点（开发流程视角）

### 需求分析

对比文档要基于可验证事实，而不是营销话术。

### 设计决策

从形态、开源、模型中立、安全、扩展、可观测、部署等维度对比。

### 实现步骤

列出 NightHawk 源码证据 → 与公开产品信息对照 → 给出差异结论。

### 验证方式

每个结论尽量引用仓库文件路径；无法验证的标为“公开信息/生态判断”。

### 维护注意

竞品功能会变化，定期复核，避免过时结论。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/agent-core/src/tools/builtin/security/rules.ts`：
    - 导出签名/声明：
      - `export type Severity = 'critical' | 'high' | 'medium' | 'low' | 'info';`
      - `export interface SecurityRule {`
      - `export const SECURITY_RULES: readonly SecurityRule[] = [`
      - `export function rulesForLanguage(lang: string): readonly SecurityRule[]`
      - `export function detectLanguage(filePath: string): string`
  - `packages/agent-core/src/tools/builtin/security/taint-trace.ts`：
    - 导出签名/声明：
      - `export const TaintTraceInputSchema = z.object({`
      - `export type TaintTraceInput = z.infer<typeof TaintTraceInputSchema>;`
      - `export type TaintTraceInputArgs = z.input<typeof TaintTraceInputSchema>;`
      - `export class TaintTraceTool implements BuiltinTool<TaintTraceInput>`
  - `docs/architecture/plugin-and-extension-design.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/agent-core/src/tools/builtin/security/rules.ts`
- `packages/agent-core/src/tools/builtin/security/taint-trace.ts`
- `docs/architecture/plugin-and-extension-design.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
