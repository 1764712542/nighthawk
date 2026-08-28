# 无头/非交互模式

`nighthawk -p` 用于脚本和 CI，支持 text 与 stream-json 输出。

## 行为

不打开 TUI，不使用人工审批，按 auto 权限策略执行；静态 deny 仍生效。

## 输出格式

`text` 输出 transcript 风格；`stream-json` 每行一个 JSON 对象。

## 退出处理

headless 完成时 `finalizeHeadlessRun` 刷新 stdout/stderr 并 armed 一个 unref 的兜底退出。

## 冲突规则

`-p` 不能与 `--yolo`、`--auto`、`--plan` 同时使用。

## 证据与代码位置

- `apps/nighthawk/src/cli/run-prompt.ts`
- `apps/nighthawk/src/cli/headless-exit.ts`
- `docs/en/reference/nighthawk-command.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
