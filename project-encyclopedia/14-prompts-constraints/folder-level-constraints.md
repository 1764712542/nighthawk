# 目录级约束落地指南

要让工具严格遵守约束，最好的方式是把约束写进每个目录的 `AGENTS.md` 或文档，并让 NightHawk 自动读取。

## 推荐结构

```text
your-project/
├── AGENTS.md                 # 全局约束
├── src/
│   ├── AGENTS.md             # src 目录约束
│   └── modules/
│       ├── AGENTS.md         # 模块级约束
│       └── README.md         # 模块说明与提示词
├── test/
│   └── AGENTS.md             # 测试约束
└── .nighthawk/
    ├── skills/               # 项目技能
    └── agents/               # 项目 Agent
```

## 根 AGENTS.md 模板

```markdown
# Project Agent Guide

## 全局约束
- 所有修改必须通过测试。
- 禁止提交敏感信息。
- 复杂任务先计划后实现。
```

## src/AGENTS.md 模板

```markdown
# Source Constraints

- 只修改与任务直接相关的源码。
- 新增文件必须导出清晰 API。
- 禁止在业务代码中使用 eval。
- 所有公共函数必须写 JSDoc。
```

## test/AGENTS.md 模板

```markdown
# Test Constraints

- 每个新功能必须有测试。
- 优先加入现有测试文件。
- 测试必须可重复、不依赖网络。
- 不 mock 掉真实集成点。
```

## 模块级 README 模板

```markdown
# 模块名

## 用途
一句话说明。

## 提示词
请实现 [功能] 时遵守：
- 先阅读本 README。
- 使用 [模块] 的公开 API。

## 约束
- 不修改 [外部依赖]。
- 不改变 [公共契约]。
```

## 让 NightHawk 自动遵守

```text
请先阅读项目根 AGENTS.md、当前目录 AGENTS.md 和相关 README，
然后严格按照其中约束执行。
```

## 强制检查

```sh
# 确保所有约束文档存在
find . -name AGENTS.md -o -name README.md | sort
```

## 证据与代码位置

- `AGENTS.md`
- `apps/nighthawk/AGENTS.md`
- `packages/agent-core-v2/AGENTS.md`
- `packages/kap-server/AGENTS.md`
- `docs/en/customization/agents.md`
- `project-encyclopedia/13-vibe-coding/agents-md-and-skills.md`
