# 故障排查参考

常用排查命令和日志位置。

## 日志

`~/.nighthawk/logs/nighthawk.log` 全局诊断日志。

## doctor

`nighthawk doctor` 校验 config/tui 文件。

## 重置

VS Code 扩展有 `nighthawk.reset`；CLI 可清理本地状态。

## 导出

`nighthawk export` 打包会话用于 bug report。

## 证据与代码位置

- `apps/nighthawk/src/cli/commands.ts`
- `docs/en/reference/nighthawk-command.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
