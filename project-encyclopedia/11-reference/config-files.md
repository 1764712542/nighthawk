# 配置文件参考

`config.toml`、`tui.toml`、mcp.json、agent 文件的位置与作用。

## config.toml

`~/.nighthawk/config.toml`：providers、models、permissions、hooks、skills 等。

## tui.toml

TUI 主题/布局配置。

## mcp.json

项目级或全局 MCP server 配置。

## agent 文件

Markdown frontmatter 定义 agent profile。

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

  - `docs/en/configuration/config-files.md`（非 TS 源码，可直接阅读）
  - `packages/agent-core/src/config//` 目录下源码文件示例：
    - `packages/agent-core/src/config/env-model.ts`
    - `packages/agent-core/src/config/index.ts`
    - `packages/agent-core/src/config/merge.ts`
    - `packages/agent-core/src/config/migrations.ts`
    - `packages/agent-core/src/config/model.ts`
    - `packages/agent-core/src/config/nighthawk-env-params.ts`
    - `packages/agent-core/src/config/path.ts`
    - `packages/agent-core/src/config/print-defaults.ts`
    - `packages/agent-core/src/config/resolve.ts`
    - `packages/agent-core/src/config/schema.ts`
    - `packages/agent-core/src/config/secondary-model.ts`
    - `packages/agent-core/src/config/toml.ts`
    - `packages/agent-core/src/config/workspace-local.ts`
  - `packages/agent-core-v2/src/app/config//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/app/config/config.ts`
    - `packages/agent-core-v2/src/app/config/configEvents.ts`
    - `packages/agent-core-v2/src/app/config/configOverlayContributions.ts`
    - `packages/agent-core-v2/src/app/config/configPure.ts`
    - `packages/agent-core-v2/src/app/config/configSectionContributions.ts`
    - `packages/agent-core-v2/src/app/config/configService.ts`
    - `packages/agent-core-v2/src/app/config/deprecations.ts`
    - `packages/agent-core-v2/src/app/config/errors.ts`
    - `packages/agent-core-v2/src/app/config/migrations.ts`
    - `packages/agent-core-v2/src/app/config/sectionDiff.ts`
    - `packages/agent-core-v2/src/app/config/toml.ts`

## 证据与代码位置

- `docs/en/configuration/config-files.md`
- `packages/agent-core/src/config/`
- `packages/agent-core-v2/src/app/config/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
