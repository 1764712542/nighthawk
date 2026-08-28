# transcript 内部实现

本页说明 packages/transcript 的关键内部模块与设计思路，源码引用以文件列表为准。

## 关键模块

从源码树可以看到以下模块：`src/index.ts`, `src/pagination/paginate.ts`, `src/contract/schema.ts`, `src/contract/mediaRef.ts`, `src/contract/events.ts`, `src/granularity/grade.ts`, `src/granularity/filterOps.ts`, `src/model/meta.ts`, `src/model/item.ts`, `src/model/todo.ts`, `src/model/ids.ts`, `src/model/prompt.ts`, `src/model/frame.ts`, `src/model/attachment.ts`, `src/model/interaction.ts`, `src/model/task.ts`。

## 设计重点

同构 transcript 数据层：L1 store、L2 idempotent ops、L3 订阅粒度、L4 view registry；拥有契约类型。

## 与其他包的关系

packages/transcript 被上层应用或相邻包通过 workspace 依赖引用；具体依赖关系见 `package.json` 的 `dependencies` 中 `@nighthawk/*` 项。

## 可证明路径

阅读代码时应从 `src/index.ts` 或包入口开始，再沿导出符号进入具体实现。

## 证据与代码位置

- `packages/transcript/src/index.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
