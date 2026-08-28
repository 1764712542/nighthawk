# pi-tui 内部实现

本页说明 packages/pi-tui 的关键内部模块与设计思路，源码引用以文件列表为准。

## 关键模块

从源码树可以看到以下模块：`src/stdin-buffer.ts`, `src/terminal-image.ts`, `src/terminal-colors.ts`, `src/latex.ts`, `src/word-navigation.ts`, `src/autocomplete.ts`, `src/tui.ts`, `src/undo-stack.ts`, `src/alt-screen-search.ts`, `src/kill-ring.ts`, `src/utils.ts`, `src/tui-main-screen.ts`, `src/keys.ts`, `src/native-modifiers.ts`, `src/editor-component.ts`, `src/layout-node.ts`。

## 设计重点

终端 UI 组件框架：differential rendering、overlay、editor、markdown、image、autocomplete，驱动 NightHawk TUI。

## 与其他包的关系

packages/pi-tui 被上层应用或相邻包通过 workspace 依赖引用；具体依赖关系见 `package.json` 的 `dependencies` 中 `@nighthawk/*` 项。

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

  - `packages/pi-tui/src/index.ts`：
    - 导出签名/声明：
      - `export type { EditorComponent } from "./editor-component.ts";`

## 证据与代码位置

- `packages/pi-tui/src/index.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
