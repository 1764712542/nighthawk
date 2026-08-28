# TUI 架构

TUI 基于 pi-tui，用 NighthawkTUI 协调 state、layout、editor、session 和 dialogs。

## 文件布局

`src/tui/` 下有 `nighthawk-tui.ts`、`tui-state.ts`、`controllers/`、`commands/`、`components/`、`reverse-rpc/`、`theme/`。

## 职责分离

controllers 承担可独立测试的重逻辑；components 只做展示；reverse-rpc 把 SDK approval/question 转成 UI 面板数据。

## 主题系统

theme 是颜色与样式的单一来源，禁止组件直接用 chalk 命名色。

## 键盘协议

比较可打印字符必须先用 `printableChar` 解码，避免 Kitty keyboard protocol 的 CSI-u 序列无法匹配。

## 证据与代码位置

- `apps/nighthawk/AGENTS.md`
- `apps/nighthawk/src/tui/nighthawk-tui.ts`
- `packages/pi-tui/README.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
