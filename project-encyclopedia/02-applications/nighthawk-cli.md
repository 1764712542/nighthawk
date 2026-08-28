# NightHawk CLI 应用

CLI 是主入口，负责参数解析、TUI 启动、headless 模式、更新、迁移和子命令。

## 入口链

`src/main.ts` → `src/cli/commands.ts` → `src/cli/run-shell.ts` → SDK `NighthawkHarness` → `src/tui/nighthawk-tui.ts`。

## CLI 选项

`-S/--session`、`-c/--continue`、`-y/--yolo`、`--auto`、`-m/--model`、`-p/--prompt`、`--output-format`、`--agent`、`--agent-file`、`--plan`、`--skills-dir`。

## 子命令

`acp`、`doctor`、`export`、`migrate`、`upgrade`、`vis`、`provider`。

## 启动保护

启动路径在 workspace trust 前不得用裸命令名 spawn 子进程，避免 binary planting。

## 证据与代码位置

- `apps/nighthawk/src/main.ts`
- `apps/nighthawk/src/cli/commands.ts`
- `apps/nighthawk/AGENTS.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
