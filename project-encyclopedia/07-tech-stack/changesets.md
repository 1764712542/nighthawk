# Changesets 发布

版本和 changelog 由 Changesets 管理。

## 配置

`.changeset/config.json` 和 README。

## 命令

`pnpm changeset`、`pnpm version`、`pnpm publish`。

## 规则

新功能 minor，修复 patch；major 需用户确认。

## Changelog

根 CHANGELOG 由 changeset 生成，docs changelog 由同步脚本更新。

## 证据与代码位置

- `.changeset/`
- `package.json`
- `.agents/skills/gen-changesets/SKILL.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
