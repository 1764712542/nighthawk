# 生命周期 Hooks

用户可以在关键生命周期点运行本地命令，拦截工具调用或审计决策。

## 事件

PreToolUse、PostToolUse、Notification、SessionStart 等。

## 实现

`externalHooks` Feature 提供 hook 配置与运行器；`onBeforeExecuteTool` 支持 veto。

## 用途

门禁危险命令、发送桌面通知、自动化审批审计。

## 配置

config.toml 中的 hooks 段声明命令和参数。

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

  - `packages/agent-core-v2/src/features/externalHooks//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/features/externalHooks/agent/agentExternalHooks.ts`
    - `packages/agent-core-v2/src/features/externalHooks/agent/agentExternalHooksService.ts`
    - `packages/agent-core-v2/src/features/externalHooks/app/externalHooksRunner.ts`
    - `packages/agent-core-v2/src/features/externalHooks/app/externalHooksRunnerService.ts`
    - `packages/agent-core-v2/src/features/externalHooks/configSection.ts`
    - `packages/agent-core-v2/src/features/externalHooks/externalHooksFeature.ts`
    - `packages/agent-core-v2/src/features/externalHooks/internal/matchHooks.ts`
    - `packages/agent-core-v2/src/features/externalHooks/internal/runHook.ts`
    - `packages/agent-core-v2/src/features/externalHooks/internal/types.ts`
    - `packages/agent-core-v2/src/features/externalHooks/internal/userPrompt.ts`
    - `packages/agent-core-v2/src/features/externalHooks/session/sessionExternalHooks.ts`
    - `packages/agent-core-v2/src/features/externalHooks/session/sessionExternalHooksService.ts`
  - `docs/en/customization/hooks.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/agent-core-v2/src/features/externalHooks/`
- `docs/en/customization/hooks.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
