# 上下文压缩数据流

当上下文超长时，agent 如何压缩旧消息并继续。

## 触发

token 预算、turn 数或显式 `/compact`。

## 策略

full compaction、micro compaction、handoff；`compaction-instruction.md` 指导模型总结。

## 写入

压缩摘要作为系统/用户消息替换旧片段；records 保留原始历史供 replay。

## 风险

摘要可能丢失细节，因此保留原始 transcript 文件。

## 专业实现要点（开发流程视角）

### 需求分析

数据流文档要回答“一个请求从哪里来、经过哪些服务、最终写到哪里”。

### 设计决策

用事件驱动解耦引擎与 UI；用 transcript 记录可重放状态；用 minidb read model 加速查询。

### 实现步骤

识别入口 API → 跟踪 service 调用链 → 标注持久化点 → 标注事件/WS 推送。

### 验证方式

通过 e2e、klient conformance suite、WS 订阅测试验证链路。

### 维护注意

异步链路要处理取消、重试、幂等；持久化要保证崩溃安全。

## 逐函数实现说明

以下按源码文件列出可验证的导出函数/类，并给出实现职责说明。

### packages/agent-core/src/agent/compaction/full.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `FullCompaction` | 70 | `export class FullCompaction {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core/src/agent/compaction/handoff.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `compactionUserMessageDisposition` | 61 | `export function compactionUserMessageDisposition(` | `compactionUserMessageDisposition` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `isCompactionSummaryMessage` | 99 | `export function isCompactionSummaryMessage(message: MessageLike): boolean {` | `isCompactionSummaryMessage` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `isRealUserInput` | 108 | `export function isRealUserInput(message: MessageLike): boolean {` | `isRealUserInput` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `buildCompactionElisionText` | 333 | `export function buildCompactionElisionText(omittedTokens: number): string {` | `buildCompactionElisionText` 负责创建/构建相关对象或流程。 |
| `buildCompactionSummaryText` | 341 | `export function buildCompactionSummaryText(summary: string): string {` | `buildCompactionSummaryText` 负责创建/构建相关对象或流程。 |

### packages/agent-core/src/agent/compaction/micro.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `MicroCompaction` | 27 | `export class MicroCompaction {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core/src/agent/compaction/render-messages.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `renderMessagesToText` | 3 | `export function renderMessagesToText(messages: readonly Message[]): string {` | `renderMessagesToText` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core/src/agent/compaction/strategy.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `DefaultCompactionStrategy` | 41 | `export class DefaultCompactionStrategy implements CompactionStrategy {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/agent/fullCompaction/compactionOps.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `FullCompactionBegin` | 21 | `export class FullCompactionBegin extends AgentEvent2<` | 该类封装本文模块的核心状态与行为。 |
| `FullCompactionCancel` | 34 | `export class FullCompactionCancel extends AgentEvent2<` | 该类封装本文模块的核心状态与行为。 |
| `FullCompactionComplete` | 47 | `export class FullCompactionComplete extends AgentEvent2<` | 该类封装本文模块的核心状态与行为。 |
| `CompactionStarted` | 64 | `export class CompactionStarted extends AgentEvent2<CompactionStartedPayload> {` | 该类封装本文模块的核心状态与行为。 |
| `CompactionBlocked` | 75 | `export class CompactionBlocked extends AgentEvent2<CompactionBlockedPayload> {` | 该类封装本文模块的核心状态与行为。 |
| `CompactionCancelled` | 81 | `export class CompactionCancelled extends AgentEvent2<AgentDomainTrait> {` | 该类封装本文模块的核心状态与行为。 |
| `CompactionCompleted` | 94 | `export class CompactionCompleted extends AgentEvent2<CompactionCompletedPayload> {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/agent/fullCompaction/fullCompactionService.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `AgentFullCompactionService` | 129 | `export class AgentFullCompactionService extends Service implements IAgentFullCompactionService {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/agent/fullCompaction/strategy.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `RuntimeCompactionStrategy` | 40 | `export class RuntimeCompactionStrategy implements CompactionStrategy {` | 该类封装本文模块的核心状态与行为。 |
| `DefaultCompactionStrategy` | 105 | `export class DefaultCompactionStrategy implements CompactionStrategy {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/agent/contextMemory/compactionHandoff.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `buildContextCompactionShape` | 60 | `export function buildContextCompactionShape(` | `buildContextCompactionShape` 负责创建/构建相关对象或流程。 |
| `buildCompactionSummaryText` | 120 | `export function buildCompactionSummaryText(summary: string): string {` | `buildCompactionSummaryText` 负责创建/构建相关对象或流程。 |
| `createCompactionSummaryMessage` | 125 | `export function createCompactionSummaryMessage(text: string): ContextMessage {` | `createCompactionSummaryMessage` 负责创建/构建相关对象或流程。 |
| `createCompactionElisionMessage` | 134 | `export function createCompactionElisionMessage(omittedTokens: number): ContextMessage {` | `createCompactionElisionMessage` 负责创建/构建相关对象或流程。 |
| `buildCompactionElisionText` | 143 | `export function buildCompactionElisionText(omittedTokens: number): string {` | `buildCompactionElisionText` 负责创建/构建相关对象或流程。 |
| `isCompactionSummaryMessage` | 155 | `export function isCompactionSummaryMessage(message: MessageLike): boolean {` | `isCompactionSummaryMessage` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `isRealUserInput` | 159 | `export function isRealUserInput(message: MessageLike): boolean {` | `isRealUserInput` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `compactionUserMessageDisposition` | 163 | `export function compactionUserMessageDisposition(` | `compactionUserMessageDisposition` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core-v2/src/agent/contextMemory/contextEvents.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `ContextAppendMessage` | 17 | `export class ContextAppendMessage extends AgentEvent2<` | 该类封装本文模块的核心状态与行为。 |
| `ContextAppendLoopEvent` | 34 | `export class ContextAppendLoopEvent extends AgentEvent2<` | 该类封装本文模块的核心状态与行为。 |
| `ContextClear` | 48 | `export class ContextClear extends AgentEvent2<z.infer<typeof contextClearSchema>> {` | 该类封装本文模块的核心状态与行为。 |
| `ContextApplyCompaction` | 91 | `export class ContextApplyCompaction extends AgentEvent2<ContextApplyCompactionPayload> {` | 该类封装本文模块的核心状态与行为。 |
| `ContextUndo` | 102 | `export class ContextUndo extends AgentEvent2<z.infer<typeof contextUndoSchema>> {` | 该类封装本文模块的核心状态与行为。 |
| `ContextSpliced` | 120 | `export class ContextSpliced extends AgentEvent2<ContextSplicedPayload> {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/agent/contextMemory/contextMemoryService.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `AgentContextMemoryService` | 33 | `export class AgentContextMemoryService extends Disposable implements IAgentContextMemoryService {` | 该类封装本文模块的核心状态与行为。 |

### packages/agent-core-v2/src/agent/contextMemory/contextOps.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `popSwarmModeReminder` | 109 | `export function popSwarmModeReminder(state: ContextMessage[]): ContextMessage[] {` | `popSwarmModeReminder` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `applyContextCompactionRecord` | 121 | `export function applyContextCompactionRecord(` | `applyContextCompactionRecord` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `readContextCompactionShapeInput` | 129 | `export function readContextCompactionShapeInput(` | `readContextCompactionShapeInput` 负责读取或查询数据。 |
| `readContextCompactedCount` | 149 | `export function readContextCompactedCount(record: ContextCompactionRecord): number {` | `readContextCompactedCount` 负责读取或查询数据。 |
| `readContextCompactionSummary` | 168 | `export function readContextCompactionSummary(record: ContextCompactionRecord): ContextMessage {` | `readContextCompactionSummary` 负责读取或查询数据。 |
| `computeUndoCut` | 249 | `export function computeUndoCut(state: readonly ContextMessage[], count: number): UndoCut {` | `computeUndoCut` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `isFullyUndoable` | 276 | `export function isFullyUndoable(cut: UndoCut, count: number): boolean {` | `isFullyUndoable` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `precheckUndo` | 295 | `export function precheckUndo(history: readonly ContextMessage[], count: number): UndoPrecheck {` | `precheckUndo` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `formatUndoUnavailableMessage` | 306 | `export function formatUndoUnavailableMessage(` | `formatUndoUnavailableMessage` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core-v2/src/agent/contextMemory/contextTranscript.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `reduceContextTranscript` | 40 | `export function reduceContextTranscript(records: Iterable<WireRecord>): ContextTranscript {` | `reduceContextTranscript` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `createContextTranscriptReducer` | 46 | `export function createContextTranscriptReducer(): ContextTranscriptReducer {` | `createContextTranscriptReducer` 负责创建/构建相关对象或流程。 |

### packages/agent-core-v2/src/agent/contextMemory/conversationTime.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `isUndoAnchor` | 11 | `export function isUndoAnchor(message: ContextMessage): boolean {` | `isUndoAnchor` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `isPromptOwnedInjection` | 21 | `export function isPromptOwnedInjection(` | `isPromptOwnedInjection` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `isValidUndoCount` | 33 | `export function isValidUndoCount(count: number): boolean {` | `isValidUndoCount` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core-v2/src/agent/contextMemory/loopEventFold.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `createLoopEventFold` | 84 | `export function createLoopEventFold(sink: LoopEventFoldSink): LoopEventFold {` | `createLoopEventFold` 负责创建/构建相关对象或流程。 |
| `foldAppendMessage` | 225 | `export function foldAppendMessage(` | `foldAppendMessage` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `foldLoopEvent` | 234 | `export function foldLoopEvent(` | `foldLoopEvent` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `resetFold` | 243 | `export function resetFold(state: readonly ContextMessage[]): readonly ContextMessage[] {` | `resetFold` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core-v2/src/agent/contextMemory/messageId.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `newMessageId` | 3 | `export function newMessageId(): string {` | `newMessageId` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core-v2/src/agent/contextMemory/openToolExchange.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `closeTrailingOpenToolExchange` | 8 | `export function closeTrailingOpenToolExchange(` | `closeTrailingOpenToolExchange` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core-v2/src/agent/contextMemory/toolResultRender.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `renderToolResultForModel` | 15 | `export function renderToolResultForModel(result: RenderableToolResult): ContentPart[] {` | `renderToolResultForModel` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/agent-core-v2/src/agent/contextMemory/vacuousContent.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `isVacuousContentPart` | 3 | `export function isVacuousContentPart(part: ContentPart): boolean {` | `isVacuousContentPart` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

### 来自 `packages/agent-core/src/agent/compaction/full.ts` 的 `FullCompaction`

源码位置：`packages/agent-core/src/agent/compaction/full.ts:70` 附近。

```ts
export class FullCompaction {
  protected compactionCountInTurn = 0;
  protected compacting: {
    abortController: AbortController;
    promise: Promise<void>;
    blockedByTurn: boolean;
  } | null = null;
  private readonly observedMaxContextTokensByModel = new Map<string, number>();
  // Token count right after the last successful compaction. While no new
  // content has been appended (tokenCountWithPending <= this value), the
  // history is already in its minimal compacted form ([kept user prompts
  // (possibly split around an elision marker), summary]); re-compacting would
  // only nest summaries, so
  // checkAutoCompaction skips in that case even if an observed overflow
  // limit still flags the context as oversized.
  private lastCompactedTokenCount: number | null = null;
  // Counts provider-overflow recoveries in this turn that have not yet been
  // followed by a successful step. Trips MAX_OVERFLOW_COMPACTION_ATTEMPTS to
  // stop an overflow -> compact -> overflow loop when compaction can no
  // longer shrink the request below the model window.
  private consecutiveOverflowCompactions = 0;
  // Trace id (`x-trace-id`, NightHawk/KFC only) of the latest summarizer request,
  // updated on every attempt — success or failure — so a compaction cancelled
  // mid-request can still be attributed to its server-side request.
// ...
```

### 来自 `packages/agent-core/src/agent/compaction/handoff.ts` 的 `compactionUserMessageDisposition`

源码位置：`packages/agent-core/src/agent/compaction/handoff.ts:61` 附近。

```ts
export function compactionUserMessageDisposition(
  origin: PromptOrigin | undefined,
): CompactionUserDisposition {
  if (origin === undefined) return 'keep';
  switch (origin.kind) {
    case 'user':
      return 'keep';
    case 'skill_activation':
    case 'plugin_command':
      return origin.trigger === 'user-slash' ? 'keep' : 'drop';
    case 'injection':
    case 'shell_command':
    case 'compaction_summary':
    case 'system_trigger':
    case 'background_task':
    case 'cron_job':
    case 'cron_missed':
    case 'hook_result':
    case 'retry':
      return 'drop';
    default: {
      const _exhaustive: never = origin;
      void _exhaustive;
      return 'drop';
// ...
```

### 来自 `packages/agent-core/src/agent/compaction/micro.ts` 的 `MicroCompaction`

源码位置：`packages/agent-core/src/agent/compaction/micro.ts:27` 附近。

```ts
export class MicroCompaction {
  private cutoff = 0;
  readonly config: MicroCompactionConfig;

  constructor(
    public readonly agent: Agent,
    config?: Partial<MicroCompactionConfig>,
  ) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  reset(maxCutoff = 0): void {
    this.cutoff = Math.min(this.cutoff, maxCutoff);
  }

  apply(cutoff: number): void {
    this.agent.records.logRecord({
      type: 'micro_compaction.apply',
      cutoff,
    });
    this.cutoff = cutoff;
  }

  detect(): void {
// ...
```


## 时序/状态图

```mermaid
sequenceDiagram
    participant U as 用户/调用方
    participant A as API/SDK
    participant E as Engine/Service
    participant D as Data/Store
    U->>A: 发起请求
    A->>E: 调用服务方法
    E->>D: 读写持久化/索引
    D-->>E: 返回数据
    E-->>A: 返回结果
    A-->>U: 输出/事件
```

> 图注：`06-data-flow/compaction-flow.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/agent-core/src/agent/compaction//` 目录下源码文件示例：
    - `packages/agent-core/src/agent/compaction/full.ts`
    - `packages/agent-core/src/agent/compaction/handoff.ts`
    - `packages/agent-core/src/agent/compaction/index.ts`
    - `packages/agent-core/src/agent/compaction/micro.ts`
    - `packages/agent-core/src/agent/compaction/render-messages.ts`
    - `packages/agent-core/src/agent/compaction/strategy.ts`
    - `packages/agent-core/src/agent/compaction/types.ts`
  - `packages/agent-core-v2/src/agent/fullCompaction//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/agent/fullCompaction/compactionOps.ts`
    - `packages/agent-core-v2/src/agent/fullCompaction/errors.ts`
    - `packages/agent-core-v2/src/agent/fullCompaction/fullCompaction.ts`
    - `packages/agent-core-v2/src/agent/fullCompaction/fullCompactionService.ts`
    - `packages/agent-core-v2/src/agent/fullCompaction/strategy.ts`
    - `packages/agent-core-v2/src/agent/fullCompaction/types.ts`
  - `packages/agent-core-v2/src/agent/contextMemory//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/agent/contextMemory/compactionHandoff.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/contextEvents.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/contextMemory.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/contextMemoryService.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/contextOps.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/contextTranscript.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/conversationTime.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/conversationUndoParticipants.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/loopEventFold.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/messageId.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/openToolExchange.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/toolResultRender.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/types.ts`
    - `packages/agent-core-v2/src/agent/contextMemory/vacuousContent.ts`

## 证据与代码位置

- `packages/agent-core/src/agent/compaction/`
- `packages/agent-core-v2/src/agent/fullCompaction/`
- `packages/agent-core-v2/src/agent/contextMemory/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
