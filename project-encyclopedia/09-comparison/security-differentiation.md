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

## 逐函数实现说明

以下按源码文件列出可验证的导出函数/类，并给出实现职责说明。

### packages/agent-core/src/tools/builtin/security/rules.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `rulesForLanguage` | 272 | `export function rulesForLanguage(lang: string): readonly SecurityRule[] {` | `rulesForLanguage` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `detectLanguage` | 276 | `export function detectLanguage(filePath: string): string {` | `detectLanguage` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core/src/tools/builtin/security/taint-trace.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `TaintTraceTool` | 41 | `export class TaintTraceTool implements BuiltinTool<TaintTraceInput> {` | 该类封装本文模块的核心状态与行为。 |


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

### 来自 `packages/agent-core/src/tools/builtin/security/rules.ts` 的 `rulesForLanguage`

源码位置：`packages/agent-core/src/tools/builtin/security/rules.ts:272` 附近。

```ts
export function rulesForLanguage(lang: string): readonly SecurityRule[] {
  return SECURITY_RULES.filter(r => r.languages.includes('*') || r.languages.includes(lang));
}

export function detectLanguage(filePath: string): string {
  const ext = filePath.split('.').pop()?.toLowerCase() ?? '';
  const m: Record<string, string> = {
    py: 'python',
    js: 'javascript',
    jsx: 'javascript',
    mjs: 'javascript',
    cjs: 'javascript',
    ts: 'typescript',
    tsx: 'typescript',
    java: 'java',
    php: 'php',
    go: 'go',
    rb: 'ruby',
    kt: 'java',
    rs: 'rust',
    c: 'c',
    h: 'c',
    cpp: 'cpp',
    cc: 'cpp',
// ...
```

### 来自 `packages/agent-core/src/tools/builtin/security/taint-trace.ts` 的 `TaintTraceTool`

源码位置：`packages/agent-core/src/tools/builtin/security/taint-trace.ts:41` 附近。

```ts
export class TaintTraceTool implements BuiltinTool<TaintTraceInput> {
  readonly name = 'TaintTrace' as const;
  readonly description = TAINT_TRACE_DESCRIPTION;
  readonly parameters: Record<string, unknown> = toInputJsonSchema(TaintTraceInputSchema);

  constructor(
    private readonly kaos: Kaos,
    private readonly workspace: WorkspaceConfig,
  ) {}

  resolveExecution(args: TaintTraceInputArgs): ToolExecution {
    const filePath = resolvePathAccessPath(args.path, {
      kaos: this.kaos,
      workspace: this.workspace,
      operation: 'read',
      policy: { guardMode: 'absolute-outside-allowed', checkSensitive: false },
    });
    return {
      accesses: ToolAccesses.searchTree(filePath),
      description: `Tracing taint flows in ${args.path}`,
      display: { kind: 'file_io', operation: 'grep', path: filePath },
      approvalRule: literalRulePattern(this.name, args.path),
      execute: async ({ signal }) => {
        if (signal.aborted) {
// ...
```


## 时序/状态图

```mermaid
flowchart LR
    A[入口/调用方] --> B[本文核心模块]
    B --> C[依赖服务/数据层]
    C --> D[输出/事件/持久化]
```

> 图注：`09-comparison/security-differentiation.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

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
