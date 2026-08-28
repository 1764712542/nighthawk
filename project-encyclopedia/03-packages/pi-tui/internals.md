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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/pi-tui/src/index.ts`（未发现直接 export 符号，可能以副作用注册为主）

## 证据与代码位置

- `packages/pi-tui/src/index.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
