# CLI 选项参考

`nighthawk` 主命令的全部选项、别名和冲突规则。

## 选项

`-V/--version`、`-h/--help`、`-S/--session`、`-c/--continue`、`-y/--yolo`、`--auto`、`-m/--model`、`-p/--prompt`、`--output-format`、`--agent`、`--agent-file`、`--plan`、`--skills-dir`、`--add-dir`。

## 别名

`-r/--resume` 是 `--session` 隐藏别名；`--yes`/`--auto-approve` 是 `--yolo` 隐藏别名。

## 冲突

`--continue` 与 `--session` 互斥；`--yolo` 与 `--auto` 互斥；`-p` 不能和 `--yolo/--auto/--plan` 同时用。

## 文档

详见 `docs/en/reference/nighthawk-command.md`。

## 证据与代码位置

- `apps/nighthawk/src/cli/commands.ts`
- `docs/en/reference/nighthawk-command.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
