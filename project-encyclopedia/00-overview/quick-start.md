# 快速开始

从 clone 到跑起来：安装依赖、构建包、构建 CLI、进入 TUI 或 headless 审计。

## 环境要求

Node.js >= 24.15.0，pnpm 10.33.0；`.npmrc` 设置 `engine-strict=true`，版本不满足会安装失败。

## 安装与构建

```sh
git clone https://github.com/example/nighthawk.git && cd nighthawk
pnpm install
pnpm run build:packages
pnpm -C apps/nighthawk run build
```

## 交互式 TUI

```sh
node apps/nighthawk/dist/main.mjs
``` 或安装后运行 `nighthawk`。

## 无头安全审计

```sh
node apps/nighthawk/dist/main.mjs -p "审计这个仓库的注入和 XSS 风险，按可利用性排序。"
```

## 证据与代码位置

- `README.zh-CN.md`
- `package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
