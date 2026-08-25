# 记忆子系统 — 面试深挖指南

> 对应源码：`packages/agent-core/src/agent/context/index.ts`、`packages/agent-core-v2/src/agent/contextMemory/`、`packages/agent-core/src/profile/resolve.ts`

## 一句话定位

NightHawk 的记忆是**分层设计**：会话内 `ContextMemory` 管理完整上下文历史并在逼近 token 上限时做压缩摘要（compaction），跨会话靠 session checkpoint 存活,项目级约定靠 `AGENTS.md` 注入——三层各管一个时间尺度。

## 三层记忆架构

```
┌────────────────────────────────────────────────────┐
│ 时间尺度：会话内（分钟~小时）                        │
│ ContextMemory：完整消息历史 + token 计数             │
│   └─ applyCompaction()：超限时压缩为 summary         │
├────────────────────────────────────────────────────┤
│ 时间尺度：跨会话（天）                               │
│ Session 持久化 + resume：checkpoint 落盘，           │
│   transcript 重放时还原 compaction 状态              │
├────────────────────────────────────────────────────┤
│ 时间尺度：项目生命周期（永久）                       │
│ AGENTS.md：项目级约定，渲染时经                      │
│   NIGHTHAWK_AGENTS_MD 注入 system prompt            │
└────────────────────────────────────────────────────┘
```

## 关键实现细节

### 1. ContextMemory —— 会话内记忆（`src/agent/context/index.ts`）

- 内部以 `_history: ContextMessage[]` 保存完整历史，同时维护 token 计数、open tool steps、pending tool results、deferred messages——**不只是消息列表，而是带状态的执行上下文**。
- `appendUserMessage` / `injectAndNotify` 等写入入口区分用户消息、system reminder、injection 的不同来源。
- `project()` 把内部历史**投影**为模型输入——投影意味着可以在这里做裁剪、重排、脱敏，而不是把原始历史直接倒给模型。

### 2. Compaction —— 压缩与保留策略（L314-L429）

这是记忆子系统最有面试价值的设计：

- 当上下文逼近 token 上限时触发,决定**哪些用户消息保留、其余生成 summary**。
- 压缩后同步更新 `_history`、token 计数、deferred messages，保证后续增量操作基于一致状态。
- 与 session resume 兼容：transcript 重放时通过 `context.apply_compaction` 操作还原（`services/message/transcript.ts`）——**压缩是可重放的确定性操作**，不是一次性的就地修改。这让 checkpoint 语义在任何时刻都一致。

### 3. AGENTS.md —— 项目级指令记忆（`src/profile/resolve.ts`）

项目根/各级目录的 `AGENTS.md` 在 profile 解析时读入，经 `NIGHTHAWK_AGENTS_MD` 变量在渲染期注入 system prompt。效果：**仓库自身携带自己的工程规范**，克隆下来的人（和 agent）自动继承。离根目录最近的 AGENTS.md 优先——规则就近覆盖。

### 4. v2 的注入接口（`agent-core-v2/src/agent/contextInjector/`）

`ContextInjectionProvider` 定义了外部记忆/知识源的注入契约,`reconcileWhenIdle()` 支持空闲期同步注入来源——这是为检索式记忆（RAG）预留的扩展点。

## 诚实的边界（面试时主动讲清）

当前版本**没有**向量检索式的长期记忆（user profile / 跨项目偏好）。这是刻意的范围控制：先把"会话不丢上下文、审计可跨重启存活、项目约定自动继承"三件确定性的事做对，再引入检索这种概率性的记忆——检索错了比没有更糟。

## 面试高频追问

**Q: 为什么 compaction 设计成可重放的操作？**
A: session checkpoint 要求任意时刻落盘、任意时刻恢复。如果压缩是不可逆的就地修改，恢复时无法区分"压缩前的历史"和"压缩后的状态"。把 compaction 建模为 transcript 里的一个操作（op），重放即重建——和 event sourcing 的思路同源。

**Q: 压缩时保留什么、丢什么？**
A: 用户消息优先保留（用户意图不能丢），中间的工具结果和长输出是压缩的主要对象——它们的信息密度低但 token 占用高。摘要保"结论"不保"过程"。

**Q: 如果让你加 RAG 长期记忆，怎么设计？**
A: 复用 `ContextInjectionProvider` 扩展点：写入侧在会话结束/空闲时把对话沉淀为结构化记忆条目（分 user 级和 project 级）；读取侧按当前任务做混合检索（关键词 + 向量），命中后经 injector 注入——注入天然带 origin 标记，可审计也可撤销。关键约束：记忆注入必须显式可追溯，不能悄悄改 system prompt。

**Q: AGENTS.md 和 system prompt 的关系？**
A: AGENTS.md 是"项目提供的 system prompt 增量"——渲染期变量注入，属于声明式配置而非运行时学习。它和记忆的区别：AGENTS.md 是人写的、版本控制的、确定性的；记忆是 agent 生成的、概率性检索的。前者管规范，后者管经验。
