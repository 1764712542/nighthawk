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
