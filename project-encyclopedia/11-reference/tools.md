# 内置工具参考

Read/Write/Edit/Grep/Glob/Bash/Fetch/Agent/Task 等内置工具。

## 文件

Read、Write、Edit、Grep、Glob、ReadMediaFile。

## 执行

Bash、ProcessTerminal。

## Agent

Agent（子 agent/fork）、AskUserQuestion。

## 任务

TaskList、TaskOutput、TaskStop。

## 安全

SecurityScan、SecretScan、TaintTrace、DepAudit。

## 专业实现要点（开发流程视角）

### 需求分析

参考手册要支持用户快速查找参数、命令、API、协议。

### 设计决策

以表格和代码块为主，保持条目化、可复制。

### 实现步骤

从 CLI 定义、protocol schema、SDK 类型和路由源码提取事实。

### 验证方式

运行 `nighthawk --help`、`pnpm doctor` 或对照 schema 测试。

### 维护注意

参考内容随代码变更同步更新。

## 逐函数实现说明

以下按源码文件列出可验证的导出函数/类，并给出实现职责说明。

### packages/agent-core-v2/src/agent/tools/agent/agentTool.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `SubagentTool` | 82 | `export class SubagentTool implements ISubagentTool {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/agent/tools/agent/subagent-task.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `createSubagentExecutor` | 43 | `export function createSubagentExecutor(` | `createSubagentExecutor` 负责创建/构建相关对象或流程。 |

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `SubagentTask` | 72 | `export class SubagentTask implements AgentTask {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/agent/tools/ask-user-question/ask-user-question.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `questionUniquenessError` | 46 | `export function questionUniquenessError(` | `questionUniquenessError` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core-v2/src/agent/tools/ask-user-question/askUserQuestionTool.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `AskUserQuestionTool` | 48 | `export class AskUserQuestionTool implements IAskUserQuestionTool {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/agent/tools/ask-user-question/question-background-task.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `QuestionBackgroundTask` | 25 | `export class QuestionBackgroundTask implements AgentTask {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/agent/tools/edit/editTool.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `EditTool` | 24 | `export class EditTool implements IEditTool {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/agent/tools/fetch-url/fetchUrlTool.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `FetchURLTool` | 17 | `export class FetchURLTool implements IFetchURLTool {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/agent/tools/mainAgentOnly.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `mainAgentOnlyExecution` | 9 | `export function mainAgentOnlyExecution(` | `mainAgentOnlyExecution` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core-v2/src/agent/tools/os/bash/bashTool.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `BashTool` | 87 | `export class BashTool implements IBashTool {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/agent/tools/os/bash/process-task.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `createProcessExecutor` | 202 | `export function createProcessExecutor(` | `createProcessExecutor` 负责创建/构建相关对象或流程。 |

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `ProcessTask` | 36 | `export class ProcessTask implements AgentTask {` | 该类封装本文模块的核心状态与行为。 |
| `ProcessExitError` | 249 | `export class ProcessExitError extends Error {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/agent/tools/os/glob/globTool.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `splitCompletePaths` | 364 | `export function splitCompletePaths(stdoutText: string, truncatedOutput: boolean): string[] {` | `splitCompletePaths` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `GlobTool` | 60 | `export class GlobTool implements IGlobTool {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/agent/tools/os/grep/grepTool.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `GrepTool` | 65 | `export class GrepTool implements IGrepTool {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/agent/tools/os/read/read.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `normalizeReadInput` | 77 | `export function normalizeReadInput(args: unknown): unknown {` | `normalizeReadInput` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core-v2/src/agent/tools/os/read/readTool.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `ReadTool` | 202 | `export class ReadTool implements IReadTool {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/agent/tools/os/write/writeTool.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `WriteTool` | 24 | `export class WriteTool implements IWriteTool {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/agent/tools/read-media-file/readMediaFileTool.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `ReadMediaFileTool` | 175 | `export class ReadMediaFileTool implements AgentTool<ReadMediaFileInput> {` | 该类封装本文模块的核心状态与行为。 |


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

### 来自 `packages/agent-core-v2/src/agent/tools/agent/agentTool.ts` 的 `SubagentTool`

源码位置：`packages/agent-core-v2/src/agent/tools/agent/agentTool.ts:82` 附近。

```ts
export class SubagentTool implements ISubagentTool {
  declare readonly _serviceBrand: undefined;
  readonly name: string = 'Agent';

  get parameters(): Record<string, unknown> {
    const parameters = exposesSubagentModelChoice(this.config, this.flags)
      ? SUBAGENT_TOOL_PARAMETERS
      : SUBAGENT_TOOL_PARAMETERS_NO_MODEL;
    return this.flags.enabled(SUBAGENT_FORK_FLAG_ID)
      ? parameters
      : stripSubagentForkParameter(parameters);
  }

  private readonly callerAgentId: string;
  private readonly canRunInBackground: () => boolean;
  private catalogReady = false;
  private frozenCatalogProfiles: readonly AgentProfile[] | undefined;

  constructor(
    @IAgentLifecycleService private readonly agentLifecycle: IAgentLifecycleService,
    @ISessionSubagentService private readonly subagents: ISessionSubagentService,
    @ISessionAgentProfileCatalog private readonly catalog: ISessionAgentProfileCatalog,
    @IAgentScopeContext scopeContext: IAgentScopeContext,
    @IAgentTaskService private readonly tasks: IAgentTaskService,
// ...
```

### 来自 `packages/agent-core-v2/src/agent/tools/agent/subagent-task.ts` 的 `createSubagentExecutor`

源码位置：`packages/agent-core-v2/src/agent/tools/agent/subagent-task.ts:43` 附近。

```ts
export function createSubagentExecutor(
  handle: SubagentHandle,
  abortController: AbortController,
): (signal: AbortSignal, output: (data: string) => void) => Promise<SubagentCompletion> {
  return async (signal, output) => {
    const requestAbort = (): void => {
      abortController.abort(signal.reason);
    };
    if (signal.aborted) {
      requestAbort();
    } else {
      signal.addEventListener('abort', requestAbort, { once: true });
    }

    try {
      const outcome = await handle.completion;
      output(outcome.result);
      return outcome;
    } catch (error: unknown) {
      if (signal.aborted && (isAbortError(error) || error === signal.reason)) {
        throw error;
      }
      throw error;
    } finally {
// ...
```

### 来自 `packages/agent-core-v2/src/agent/tools/ask-user-question/ask-user-question.ts` 的 `questionUniquenessError`

源码位置：`packages/agent-core-v2/src/agent/tools/ask-user-question/ask-user-question.ts:46` 附近。

```ts
export function questionUniquenessError(
  questions: AskUserQuestionInput['questions'],
): string | null {
  const texts = new Set<string>();
  for (const q of questions) {
    if (texts.has(q.question)) {
      return `Invalid questions: duplicate question text ${JSON.stringify(q.question)}. ${QUESTION_UNIQUENESS_MESSAGE} Rephrase the duplicates and call the tool again.`;
    }
    texts.add(q.question);
    const labels = new Set<string>();
    for (const option of q.options) {
      if (labels.has(option.label)) {
        return `Invalid questions: duplicate option label ${JSON.stringify(option.label)} in question ${JSON.stringify(q.question)}. ${QUESTION_UNIQUENESS_MESSAGE} Rephrase the duplicates and call the tool again.`;
      }
      labels.add(option.label);
    }
  }
  return null;
}

const AskUserQuestionInputBaseSchema = z.object({
  questions: z
    .array(QuestionItemSchema)
    .min(1)
// ...
```


## 时序/状态图

```mermaid
flowchart LR
    A[入口/调用方] --> B[本文核心模块]
    B --> C[依赖服务/数据层]
    C --> D[输出/事件/持久化]
```

> 图注：`11-reference/tools.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/agent-core-v2/src/agent/tools//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/agent/tools/agent/agent.ts`
    - `packages/agent-core-v2/src/agent/tools/agent/agentTool.ts`
    - `packages/agent-core-v2/src/agent/tools/agent/subagent-task.ts`
    - `packages/agent-core-v2/src/agent/tools/ask-user-question/ask-user-question.ts`
    - `packages/agent-core-v2/src/agent/tools/ask-user-question/askUserQuestionTool.ts`
    - `packages/agent-core-v2/src/agent/tools/ask-user-question/question-background-task.ts`
    - `packages/agent-core-v2/src/agent/tools/edit/edit.ts`
    - `packages/agent-core-v2/src/agent/tools/edit/editTool.ts`
    - `packages/agent-core-v2/src/agent/tools/fetch-url/fetch-url.ts`
    - `packages/agent-core-v2/src/agent/tools/fetch-url/fetchUrlTool.ts`
    - `packages/agent-core-v2/src/agent/tools/mainAgentOnly.ts`
    - `packages/agent-core-v2/src/agent/tools/os/bash/bash.ts`
    - `packages/agent-core-v2/src/agent/tools/os/bash/bashTool.ts`
    - `packages/agent-core-v2/src/agent/tools/os/bash/process-task.ts`
    - `packages/agent-core-v2/src/agent/tools/os/glob/glob.ts`
    - `packages/agent-core-v2/src/agent/tools/os/glob/globTool.ts`
    - `packages/agent-core-v2/src/agent/tools/os/grep/grep.ts`
    - `packages/agent-core-v2/src/agent/tools/os/grep/grepTool.ts`
    - `packages/agent-core-v2/src/agent/tools/os/read/read.ts`
    - `packages/agent-core-v2/src/agent/tools/os/read/readTool.ts`
    - `packages/agent-core-v2/src/agent/tools/os/write/write.ts`
    - `packages/agent-core-v2/src/agent/tools/os/write/writeTool.ts`
    - `packages/agent-core-v2/src/agent/tools/read-media-file/read-media-file.ts`
    - `packages/agent-core-v2/src/agent/tools/read-media-file/readMediaFileTool.ts`
  - `docs/en/reference/tools.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/agent-core-v2/src/agent/tools/`
- `docs/en/reference/tools.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
