# protocol 内部实现

本页说明 packages/protocol 的关键内部模块与设计思路，源码引用以文件列表为准。

## 关键模块

从源码树可以看到以下模块：`src/envelope.ts`, `src/modelCatalog.ts`, `src/tool.ts`, `src/request-id.ts`, `src/pagination.ts`, `src/workspace.ts`, `src/ws-control.ts`, `src/approval.ts`, `src/fs.ts`, `src/file.ts`, `src/error-codes.ts`, `src/display.ts`, `src/message.ts`, `src/session.ts`, `src/question.ts`, `src/events.ts`。

## 设计重点

共享协议 schema：envelope、error codes、pagination、ws-control、rest-*，被 server/klient/engine 引用。

## 与其他包的关系

packages/protocol 被上层应用或相邻包通过 workspace 依赖引用；具体依赖关系见 `package.json` 的 `dependencies` 中 `@nighthawk/*` 项。

## 可证明路径

阅读代码时应从 `src/index.ts` 或包入口开始，再沿导出符号进入具体实现。

## 证据与代码位置

- `packages/protocol/src/index.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
