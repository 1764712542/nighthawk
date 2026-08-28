# 斜杠命令参考

TUI 内常用 slash 命令。

## 会话

`/new`、`/clear`、`/save`、`/sessions`、`/load`、`/session`。

## 模式

`/plan`、`/yolo`、`/auto`、`/trust`。

## 配置

`/model`、`/provider`、`/mcp-config`、`/theme`、`/lang`。

## 工具

`/compact`、`/undo`、`/export`、`/status`、`/help`、`/quit`。

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

  - `apps/nighthawk/src/tui/commands//` 目录下源码文件示例：
    - `apps/nighthawk/src/tui/commands/add-dir.ts`
    - `apps/nighthawk/src/tui/commands/auth.ts`
    - `apps/nighthawk/src/tui/commands/btw.ts`
    - `apps/nighthawk/src/tui/commands/complete-args.ts`
    - `apps/nighthawk/src/tui/commands/config.ts`
    - `apps/nighthawk/src/tui/commands/copy.ts`
    - `apps/nighthawk/src/tui/commands/dispatch.ts`
    - `apps/nighthawk/src/tui/commands/experimental-flags.ts`
    - `apps/nighthawk/src/tui/commands/goal.ts`
    - `apps/nighthawk/src/tui/commands/index.ts`
    - `apps/nighthawk/src/tui/commands/info.ts`
    - `apps/nighthawk/src/tui/commands/parse.ts`
    - `apps/nighthawk/src/tui/commands/pentest-scan.ts`
    - `apps/nighthawk/src/tui/commands/pentest.ts`
    - `apps/nighthawk/src/tui/commands/plugin-commands.ts`
    - `apps/nighthawk/src/tui/commands/plugins.ts`
    - `apps/nighthawk/src/tui/commands/prompts.ts`
    - `apps/nighthawk/src/tui/commands/provider.ts`
    - `apps/nighthawk/src/tui/commands/registry.ts`
    - `apps/nighthawk/src/tui/commands/reload.ts`
    - `apps/nighthawk/src/tui/commands/resolve.ts`
    - `apps/nighthawk/src/tui/commands/session.ts`
    - `apps/nighthawk/src/tui/commands/skills.ts`
    - `apps/nighthawk/src/tui/commands/swarm.ts`
  - `docs/en/reference/slash-commands.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `apps/nighthawk/src/tui/commands/`
- `docs/en/reference/slash-commands.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
