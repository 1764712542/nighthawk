# 子 Agent 与后台任务

子 Agent 在独立上下文窗口并行工作，不污染主上下文。

## 工具

`agent` 工具可 fork 子 agent；`ask-user-question`、后台任务等配合。

## 生命周期

子 agent 是 session 下的 Agent scope，有独立 contextMemory 和 transcript。

## 并行

`AgentSwarm` 可以批量扇出，当前 swarm 上限较高（代码中曾有 cap 提升到 2000）。

## 状态

子 agent 完成/失败后把结果带回主 agent。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core/src/agent/swarm//` 目录下源码文件示例：
    - `packages/agent-core/src/agent/swarm/index.ts`
  - `packages/agent-core-v2/src/agent/tools/agent//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/agent/tools/agent/agent.ts`
    - `packages/agent-core-v2/src/agent/tools/agent/agentTool.ts`
    - `packages/agent-core-v2/src/agent/tools/agent/subagent-task.ts`
  - `packages/agent-core-v2/src/features/swarm//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/features/swarm/agent/injection/swarmInjection.ts`
    - `packages/agent-core-v2/src/features/swarm/agent/swarm.ts`
    - `packages/agent-core-v2/src/features/swarm/agent/swarmService.ts`
    - `packages/agent-core-v2/src/features/swarm/configSection.ts`
    - `packages/agent-core-v2/src/features/swarm/session/agentRunBatch.ts`
    - `packages/agent-core-v2/src/features/swarm/session/sessionSwarm.ts`
    - `packages/agent-core-v2/src/features/swarm/session/sessionSwarmService.ts`
    - `packages/agent-core-v2/src/features/swarm/swarmFeature.ts`
    - `packages/agent-core-v2/src/features/swarm/swarmOps.ts`
    - `packages/agent-core-v2/src/features/swarm/tools/agent-swarm/agent-swarm.ts`
    - `packages/agent-core-v2/src/features/swarm/tools/agent-swarm/agentSwarmTool.ts`

## 证据与代码位置

- `packages/agent-core/src/agent/swarm/`
- `packages/agent-core-v2/src/agent/tools/agent/`
- `packages/agent-core-v2/src/features/swarm/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
