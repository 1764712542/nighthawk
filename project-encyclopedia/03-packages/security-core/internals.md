# security-core 内部实现

本页说明 packages/security-core 的关键内部模块与设计思路，源码引用以文件列表为准。

## 关键模块

从源码树可以看到以下模块：`src/ui/i18n.ts`, `src/ui/shell.ts`, `src/ui/theme.ts`, `src/tools/file-tools.ts`, `src/tools/git-tools.ts`, `src/tools/security-tools.ts`, `src/tools/analysis-tools.ts`, `src/tools/sandbox.ts`, `src/tools/registry.ts`, `src/core/types.ts`, `src/core/llm/client.ts`, `src/core/providers/anthropic.ts`, `src/core/providers/openai.ts`, `src/core/providers/index.ts`, `src/core/providers/nighthawk.ts`, `src/core/agent/loop.ts`。

## 设计重点

已弃用的独立安全引擎源码；生产安全引擎已移到 agent-core/src/tools/builtin/security/，保留供参考。

## 与其他包的关系

packages/security-core 被上层应用或相邻包通过 workspace 依赖引用；具体依赖关系见 `package.json` 的 `dependencies` 中 `@nighthawk/*` 项。

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

  - `packages/security-core/src/` 目录下源码文件示例：
    - `packages/security-core/src/cli/commands.ts`
    - `packages/security-core/src/cli/index.ts`
    - `packages/security-core/src/config/index.ts`
    - `packages/security-core/src/core/agent/loop.ts`
    - `packages/security-core/src/core/llm/client.ts`
    - `packages/security-core/src/core/providers/anthropic.ts`
    - `packages/security-core/src/core/providers/index.ts`
    - `packages/security-core/src/core/providers/nighthawk.ts`
    - `packages/security-core/src/core/providers/openai.ts`
    - `packages/security-core/src/core/rag/index.ts`
    - `packages/security-core/src/core/session/store.ts`
    - `packages/security-core/src/core/types.ts`
    - `packages/security-core/src/security/rules.ts`
    - `packages/security-core/src/security/scanner.ts`
    - `packages/security-core/src/security/secrets.ts`
    - `packages/security-core/src/security/taint.ts`
    - `packages/security-core/src/tools/analysis-tools.ts`
    - `packages/security-core/src/tools/file-tools.ts`
    - `packages/security-core/src/tools/git-tools.ts`
    - `packages/security-core/src/tools/registry.ts`
    - `packages/security-core/src/tools/sandbox.ts`
    - `packages/security-core/src/tools/security-tools.ts`
    - `packages/security-core/src/ui/i18n.ts`
    - `packages/security-core/src/ui/shell.ts`

## 证据与代码位置

- `packages/security-core/src`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
