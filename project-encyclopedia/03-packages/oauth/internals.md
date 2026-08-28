# oauth 内部实现

本页说明 packages/oauth 的关键内部模块与设计思路，源码引用以文件列表为准。

## 关键模块

从源码树可以看到以下模块：`src/oauth.ts`, `src/identity.ts`, `src/managed-usage.ts`, `src/api-error.ts`, `src/errors.ts`, `src/managed-feedback.ts`, `src/model-alias-merge.ts`, `src/storage.ts`, `src/oauth-manager.ts`, `src/utils.ts`, `src/managed-feedback-upload.ts`, `src/types.ts`, `src/managed-userinfo.ts`, `src/managed-tools.ts`, `src/managed-nighthawk.ts`, `src/constants.ts`。

## 设计重点

OAuth 工具包：managed auth、token transaction、设备码/API key、provider 模型目录、用户信息/用量。

## 与其他包的关系

packages/oauth 被上层应用或相邻包通过 workspace 依赖引用；具体依赖关系见 `package.json` 的 `dependencies` 中 `@nighthawk/*` 项。

## 可证明路径

阅读代码时应从 `src/index.ts` 或包入口开始，再沿导出符号进入具体实现。

## 证据与代码位置

- `packages/oauth/src/index.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
