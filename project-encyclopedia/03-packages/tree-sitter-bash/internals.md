# tree-sitter-bash 内部实现

本页说明 packages/tree-sitter-bash 的关键内部模块与设计思路，源码引用以文件列表为准。

## 关键模块

从源码树可以看到以下模块：`src/node.ts`, `src/parse.ts`, `src/lexer.ts`, `src/parser.ts`, `src/grammar.ts`, `src/budget.ts`, `src/index.ts`。

## 设计重点

纯 TypeScript bash parser：无 wasm、无原生依赖，带预算和错误恢复，用于 bash 权限/命令分析。

## 与其他包的关系

packages/tree-sitter-bash 被上层应用或相邻包通过 workspace 依赖引用；具体依赖关系见 `package.json` 的 `dependencies` 中 `@nighthawk/*` 项。

## 可证明路径

阅读代码时应从 `src/index.ts` 或包入口开始，再沿导出符号进入具体实现。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/tree-sitter-bash/src/index.ts` 导出：
    - 再导出：`./node`, `./budget`, `./parse`, `./grammar`

## 证据与代码位置

- `packages/tree-sitter-bash/src/index.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
