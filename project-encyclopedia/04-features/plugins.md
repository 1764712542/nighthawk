# 插件系统

插件是自包含分发包，可携带 skills、MCP servers 和 tools。

## Manifest

`nighthawk.plugin.json` 声明 `kind`、`name`、`version`、`skills`、`mcpServers`、`tools`。

## 来源

本地路径、GitHub 仓库、市场 catalog。

## 信任

不同来源决定信任级别；安装时明示。

## 运行时

`IPluginService` 管理插件生命周期；feature 可 contribute plugin commands。

## 专业实现要点（开发流程视角）

### 需求分析

Feature 是自包含能力单元，必须能整体安装/卸载而不污染其他模块。

### 设计决策

用 `Feature` 基类组合 Service、Tool、Profile、Config、Command 贡献点；静态契约留在静态注册通道。

### 实现步骤

在 `src/features/<name>/` 写领域代码 → 写 `<name>Feature.ts` → 在 `src/index.ts` 精确导入 → 编写测试。

### 验证方式

通过 `test/features/feature.test.ts` 验证装配/卸载；通过 DI 视图观察 unit 状态。

### 维护注意

不要把所有能力塞进一个 Feature；配置段、wire 事件等静态契约必须保持可重放。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/agent-core/src/plugin//` 目录下源码文件示例：
    - `packages/agent-core/src/plugin/archive.ts`
    - `packages/agent-core/src/plugin/commands.ts`
    - `packages/agent-core/src/plugin/github-resolver.ts`
    - `packages/agent-core/src/plugin/index.ts`
    - `packages/agent-core/src/plugin/manager.ts`
    - `packages/agent-core/src/plugin/manifest.ts`
    - `packages/agent-core/src/plugin/source.ts`
    - `packages/agent-core/src/plugin/store.ts`
    - `packages/agent-core/src/plugin/types.ts`
  - `packages/agent-core-v2/src/app/plugin//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/app/plugin/archive.ts`
    - `packages/agent-core-v2/src/app/plugin/commands.ts`
    - `packages/agent-core-v2/src/app/plugin/errors.ts`
    - `packages/agent-core-v2/src/app/plugin/github-resolver.ts`
    - `packages/agent-core-v2/src/app/plugin/manager.ts`
    - `packages/agent-core-v2/src/app/plugin/manifest.ts`
    - `packages/agent-core-v2/src/app/plugin/marketplace.ts`
    - `packages/agent-core-v2/src/app/plugin/plugin.ts`
    - `packages/agent-core-v2/src/app/plugin/pluginEvents.ts`
    - `packages/agent-core-v2/src/app/plugin/pluginService.ts`
    - `packages/agent-core-v2/src/app/plugin/source.ts`
    - `packages/agent-core-v2/src/app/plugin/store.ts`
    - `packages/agent-core-v2/src/app/plugin/types.ts`
  - `docs/en/customization/plugins.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/agent-core/src/plugin/`
- `packages/agent-core-v2/src/app/plugin/`
- `docs/en/customization/plugins.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
