# VitePress 文档站

docs/ 是双语文档站，英文和中文镜像同步。

## 结构

`docs/en/` 和 `docs/zh/` 镜像；release notes 英文源 → 中文翻译。

## 配置

`docs/.vitepress/config.ts` 定义导航和侧边栏。

## 风格

`docs/AGENTS.md` 定义术语表、排版、写作规范。

## 命令

`pnpm dev:docs` 本地预览。

## 专业实现要点（开发流程视角）

### 需求分析

技术栈选择要支撑大型 monorepo、严格类型、快速构建、可复现环境。

### 设计决策

TypeScript strict + tsdown + pnpm workspace + Nix flake；用 oxlint 而非传统 eslint。

### 实现步骤

先搭 workspace 与 tsconfig，再引入 tsdown/vitest/oxlint/changesets/CI。

### 验证方式

执行 `pnpm lint`、`pnpm typecheck`、`pnpm test`、`pnpm run build`。

### 维护注意

依赖版本锁定在 packageManager；Nix 路径与 pnpm workspace 保持一致。

## 逐函数实现说明

以下按源码文件列出可验证的导出函数/类，并给出实现职责说明。


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

> 本文证据路径没有可直接展示的 TS 源码片段。

## 时序/状态图

```mermaid
flowchart LR
    A[入口/调用方] --> B[本文核心模块]
    B --> C[依赖服务/数据层]
    C --> D[输出/事件/持久化]
```

> 图注：`07-tech-stack/vitepress.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `docs/package.json`（非 TS 源码，可直接阅读）
  - `docs/.vitepress/config.ts`：
    - 导出签名/声明：
      - `export default config`
  - `docs/AGENTS.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `docs/package.json`
- `docs/.vitepress/config.ts`
- `docs/AGENTS.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
