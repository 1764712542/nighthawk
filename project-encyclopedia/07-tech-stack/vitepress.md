# VitePress 文档站

docs/ 是双语文档站，英文和中文镜像同步。

## 结构

`docs/en/` 和 `docs/zh/` 镜像；release notes 英文源 → 中文翻译。

## 配置

`docs/.vitepress/config.ts` 定义导航和侧边栏。

## 风格

`docs/AGENTS.md` 定义术语表、排版、写作规范。

## 命令

`pnpm dev:docs` 本地预览。

## 证据与代码位置

- `docs/package.json`
- `docs/.vitepress/config.ts`
- `docs/AGENTS.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
