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

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `.changeset//`（目录内无 .ts 文件）
  - `package.json`（非 TS 源码，可直接阅读）
  - `.agents/skills/gen-changesets/SKILL.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `.changeset/`
- `package.json`
- `.agents/skills/gen-changesets/SKILL.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
