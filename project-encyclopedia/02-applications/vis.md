# Vis 可视化工具

Vis 是会话调试可视化工具，浏览器中查看 session 与 replay。

## 结构

`apps/vis` 包含根脚本、`server/` 和 `web/` 两个子包；server 处理 session 数据，web 渲染。

## 命令

`pnpm vis` 或 `nighthawk vis` 启动；`--port`、`--host`、`--no-open` 控制服务。

## 数据源

读取本地 `~/.nighthawk/sessions` 数据，内嵌 server 提供 HTTP API。

## 用途

适合调试会话恢复、消息流、工具调用链。

## 证据与代码位置

- `apps/vis/package.json`
- `apps/nighthawk/src/cli/commands.ts`
- `docs/en/reference/nighthawk-command.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
