# Transcript 数据层

transcript 包提供 L1 store、L2 idempotent ops、L3 订阅粒度、L4 视图注册。

## L1

agent-granular store：按 agent 保存 transcript items。

## L2

idempotent 操作：同样的 op 多次应用结果一致，支持持久化重放。

## L3

订阅粒度 off/turn/block/delta，避免客户端收到不必要事件。

## L4

framework-free view registry，可在 React/Vue/终端等不同 UI 复用。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/transcript/AGENTS.md`（非 TS 源码，可直接阅读）
  - `packages/transcript/src/index.ts` 导出：
    - 再导出：`./model/ids`, `./model/turn`, `./model/frame`, `./model/interaction`, `./model/attachment`, `./model/todo`, `./model/item`, `./model/task`, `./model/meta`, `./model/prompt`, `./ops/operation`, `./store/agentTranscript`, `./store/transcriptStore`, `./granularity/grade`, `./granularity/filterOps`, `./view/registry`, `./pagination/paginate`, `./history/groupTurns`, `./history/foldFacts`, `./contract/schema`, `./contract/events`, `./contract/mediaRef`
  - `packages/transcript/src/contract/schema.ts` 导出：
    - 符号：`turnIdSchema`, `stepIdSchema`, `frameIdSchema`, `taskIdSchema`, `agentIdSchema`, `isPlainAgentId`, `turnOriginSchema`, `transcriptUsageSchema`, `stepUsageSchema`, `stepTimingSchema`, `stepRetrySchema`, `turnStateSchema`, `stepStateSchema`, `textFrameSchema`, `thinkingFrameSchema`, `agentRefSchema`, `toolFrameProgressSchema`, `toolCallFrameSchema`, `interactionSchema`, `noticeFrameSchema`, `transcriptFrameSchema`, `transcriptStepSchema`, `transcriptTurnSchema`, `transcriptMarkerSchema`, `transcriptTaskRefSchema`, `transcriptItemSchema`, `transcriptTaskSchema`, `goalMetaSchema`, `modesMetaSchema`, `modesMetaMergeSchema`, `agentPhaseMetaSchema`, `agentUsageMetaSchema`, `agentStatusMetaSchema`, `transcriptMetaSchema`, `transcriptMetaMergeSchema`, `attachmentSchema`, `todoItemSchema`, `todoSchema`, `transcriptPromptSchema`, `agentTranscriptSnapshotSchema`, `turnHeaderSchema`, `stepHeaderSchema`, `appendTargetSchema`, `transcriptOperationSchema`, `transcriptOpBatchSchema`, `transcriptGradeSchema`, `transcriptSeqSchema`, `transcriptGradeSpecSchema`, `transcriptSubscribeV2PayloadSchema`, `TranscriptSubscribeV2Payload`, `transcriptQuerySchema`, `agentDescriptorSchema`, `transcriptResponseSchema`, `transcriptOpsCatchupResponseSchema`, `transcriptUserMessageSchema`, `transcriptUserMessagesResponseSchema`, `transcriptPlanReviewSchema`, `transcriptPlanEntrySchema`, `transcriptPlanResponseSchema`, `transcriptResetPayloadSchema`

## 证据与代码位置

- `packages/transcript/AGENTS.md`
- `packages/transcript/src/index.ts`
- `packages/transcript/src/contract/schema.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
