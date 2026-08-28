# agent-core-v2 内部实现

本页说明 packages/agent-core-v2 的关键内部模块与设计思路，源码引用以文件列表为准。

## 关键模块

从源码树可以看到以下模块：`src/errors.ts`, `src/env.d.ts`, `src/index.ts`, `src/hooks.ts`, `src/app/scopes.ts`, `src/app/mcpRegistry/mcpRegistry.ts`, `src/app/mcpRegistry/mcpRegistryService.ts`, `src/app/flag/flagRegistryService.ts`, `src/app/flag/flagService.ts`, `src/app/flag/flagRegistry.ts`, `src/app/flag/flag.ts`, `src/app/bashParser/bashParser.ts`, `src/app/bashParser/bashParserService.ts`, `src/app/sessionLegacy/sessionProtocol.ts`, `src/app/sessionLegacy/sessionLegacy.ts`, `src/app/sessionLegacy/sessionLegacyService.ts`。

## 设计重点

当前主引擎：DI×Scope 四层生命周期、Feature 系统、contextMemory、LLM Requester、toolExecutor、permission、media、plugin、MCP core。

## 与其他包的关系

packages/agent-core-v2 被上层应用或相邻包通过 workspace 依赖引用；具体依赖关系见 `package.json` 的 `dependencies` 中 `@nighthawk/*` 项。

## 可证明路径

阅读代码时应从 `src/index.ts` 或包入口开始，再沿导出符号进入具体实现。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core-v2/src/index.ts` 导出：
    - 再导出：`#/_base/di/descriptors`, `#/_base/di/errors`, `#/_base/di/graph`, `#/_base/di/instantiation`, `#/_base/di/instantiationService`, `#/_base/di/lifecycle`, `#/_base/di/scope`, `./app/scopes`, `#/_base/di/serviceCollection`, `#/_base/di/cascadeEngine`, `#/_base/di/dependencyGraph`, `#/_base/lifecycle/ledger`, `./errors`, `#/runtime/runtime`, `#/runtime/runtimeRegistry`, `#/runtime/runtimeWorkspaceView`, `#/runtime/runtimeProvider`, `#/runtime/runtimeUnitHost`, `#/runtime/localRuntime`, `#/runtime/standaloneRuntime`, `#/program/program`, `#/workspace/workspaceInstance/workspaceInstance`, `#/workspace/workspaceInstance/workspaceInstanceManager`, `#/workspace/workspaceInstance/workspaceInstanceManagerService`, `#/agent/runtimeBinding/runtimeBinding`, `#/agent/runtimeBinding/runtimeBindingService`, `#/agent/runtimeBinding/agentRuntime`, `#/app/sessionManager/sessionManager`, `#/app/sessionManager/sessionManagerService`, `#/_base/log/log`

## 证据与代码位置

- `packages/agent-core-v2/src/index.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
