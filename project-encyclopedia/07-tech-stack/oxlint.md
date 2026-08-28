# oxlint 与仓库守卫

oxlint 是主 linter，配合自定义脚本检查注释、Nix 同步、服务命名等。

## 配置

`.oxlintrc.json` 含 TypeScript、import、unicorn、promise、node 插件。

## 命令

`pnpm lint` = `node scripts/check-no-comments.mjs && oxlint --type-aware`。

## lint-staged

git hooks 在提交前自动 fix。

## 守卫

`check-nix-workspace.mjs`、`check-service-naming.mjs`、`check-no-comments.mjs`。

## 证据与代码位置

- `.oxlintrc.json`
- `package.json`
- `scripts/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
