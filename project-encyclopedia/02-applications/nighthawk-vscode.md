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

## 专业实现要点（开发流程视角）

### 需求分析

应用层要把引擎能力包装成用户可操作的产品：CLI 参数、TUI 交互、IDE 集成、Web 访问。

### 设计决策

应用层不直接 import 内核，通过 SDK/RPC 通信；TUI 使用 pi-tui 组件化渲染。

### 实现步骤

CLI 解析参数 → 创建 Harness/SDK 客户端 → 进入 TUI 或 headless；TUI 通过 reverse-rpc 桥接审批/提问。

### 验证方式

使用 `pnpm -C apps/nighthawk test`、`pnpm -C apps/nighthawk run smoke` 和 e2e。

### 维护注意

TUI 组件不得直接读写 session 状态；启动路径必须遵守 workspace trust。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `apps/vscode/package.json`（非 TS 源码，可直接阅读）
  - `apps/vscode/src/extension.ts`：
    - 导出签名/声明：
      - `export async function activate(context: vscode.ExtensionContext): Promise<void>`
      - `export async function deactivate(): Promise<void>`
  - `apps/vscode/README.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `apps/vscode/package.json`
- `apps/vscode/src/extension.ts`
- `apps/vscode/README.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
