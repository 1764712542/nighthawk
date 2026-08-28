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

## 专业实现要点（开发流程视角）

### 需求分析

每个包只解决一个领域问题，并通过 package.json exports 暴露最小公开面。

### 设计决策

使用 workspace 协议链接本地依赖；包入口用 `export *` 聚合；内部用 `#/` 别名。

### 实现步骤

定义接口与类型 → 实现服务/函数 → 注册到 DI（如适用）→ 编写测试 → 构建 dist。

### 验证方式

运行 `pnpm -C <pkg> typecheck`、`pnpm -C <pkg> test`、`pnpm lint:pkg`。

### 维护注意

公开导出变化要同步 `klient` contract parity 或 SDK 类型；发布前生成 changeset。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/agent-core-v2/src/index.ts`：
    - 导出签名/声明：
      - `export type {`
      - `export type { SkillSource } from '#/features/skill/catalog/types';`
      - `export type { DaemonFileRef, MediaKind } from '#/agent/media/mediaRef';`
      - `export type { AgentToolContributionOptions } from '#/agent/toolRegistry/toolContribution';`
    - 再导出：`#/_base/di/descriptors`, `#/_base/di/errors`, `#/_base/di/graph`, `#/_base/di/instantiation`, `#/_base/di/instantiationService`, `#/_base/di/lifecycle`, `#/_base/di/scope`, `./app/scopes`, `#/_base/di/serviceCollection`, `#/_base/di/cascadeEngine`, `#/_base/di/dependencyGraph`, `#/_base/lifecycle/ledger`, `./errors`, `#/runtime/runtime`, `#/runtime/runtimeRegistry`, `#/runtime/runtimeWorkspaceView`, `#/runtime/runtimeProvider`, `#/runtime/runtimeUnitHost`, `#/runtime/localRuntime`, `#/runtime/standaloneRuntime`, `#/program/program`, `#/workspace/workspaceInstance/workspaceInstance`, `#/workspace/workspaceInstance/workspaceInstanceManager`, `#/workspace/workspaceInstance/workspaceInstanceManagerService`, `#/agent/runtimeBinding/runtimeBinding`, `#/agent/runtimeBinding/runtimeBindingService`, `#/agent/runtimeBinding/agentRuntime`, `#/app/sessionManager/sessionManager`, `#/app/sessionManager/sessionManagerService`, `#/_base/log/log`

## 证据与代码位置

- `packages/agent-core-v2/src/index.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
