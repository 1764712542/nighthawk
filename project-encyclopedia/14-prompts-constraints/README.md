# NightHawk 提示词与约束体系

本目录为 NightHawk 的每个功能、每个包、每个目录设定“提示词 + 约束”，目标是让工具严格遵守项目规范。

## 为什么需要提示词与约束

- 提示词告诉 Agent **做什么**。
- 约束告诉 Agent **不做什么、必须怎么做**。
- 只有两者同时存在，Vibe Coding 才可重复、可审查、可安全落地。

## 目录内容

| 文档 | 内容 |
| --- | --- |
| `README.md` | 本目录说明 |
| `global-constraints.md` | 所有任务都必须遵守的通用约束 |
| `per-feature-prompts.md` | 每个功能/工具的提示词与约束 |
| `per-package-prompts.md` | 每个包的开发提示词与约束 |
| `folder-level-constraints.md` | 如何把约束放到每个目录的 AGENTS.md/文档 |
| `enforcement.md` | 如何用权限、Hook、测试、CI 强制执行约束 |

## 使用方式

1. 阅读 `global-constraints.md`，把这些约束写入你的 `AGENTS.md`。
2. 按功能/包选择 `per-feature-prompts.md` / `per-package-prompts.md` 中的提示词。
3. 按 `folder-level-constraints.md` 把约束下沉到具体目录。
4. 按 `enforcement.md` 用权限/Hook/测试/CI 保证遵守。

## 证据与代码位置

- `AGENTS.md`
- `docs/en/customization/agents.md`
- `docs/en/customization/hooks.md`
- `docs/en/configuration/config-files.md`
- `project-encyclopedia/04-features/`
- `project-encyclopedia/05-security/`
