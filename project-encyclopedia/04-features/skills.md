# Skills 系统

Skill 是 Markdown 定义的可复用 playbook，按相关性自动加载到上下文。

## 格式

SKILL.md + YAML frontmatter：`name`、`description`、`whenToUse`、`type`、`disableModelInvocation`。

## 发现

项目、用户、plugin、builtin 多层目录；`FileSkillDiscovery` 扫描。

## 加载

Agent 根据任务相关性自动注入带 origin 标记的 skill 内容。

## 工具

`skill` Feature 提供 skill catalog 和 skill 相关工具。

## 证据与代码位置

- `docs/interview/skill-system.md`
- `packages/agent-core/src/agent/skill/`
- `packages/agent-core-v2/src/features/skill/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
