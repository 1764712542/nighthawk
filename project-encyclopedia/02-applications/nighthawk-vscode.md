# VS Code 扩展

VS Code 扩展提供侧边栏 webview 聊天、文件插入、会话管理和 v1/v2 引擎切换。

## 功能

`nighthawk.webview` 视图、`nighthawk.openInTab`、`focusInput`、`insertMention`、`newConversation`、`migrateLegacyData` 等命令。

## 配置

`nighthawk.yoloMode`、`autosave`、`showThinkingContent`、`editorContext`、`useAgentCoreV1` 等。

## 架构

扩展侧 `src/extension.ts` 与 runtime 管理 SDK 会话；webview-ui 是 React 前端。

## 打包

通过 `vsix-package.mjs` 打包 .vsix，可发布到 VS Code Marketplace 和 Open VSX。

## 证据与代码位置

- `apps/vscode/package.json`
- `apps/vscode/src/extension.ts`
- `apps/vscode/README.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
