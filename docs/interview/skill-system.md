# Agent Skills 子系统 — 面试深挖指南

> 对应源码：`packages/agent-core/src/skill/`、`packages/agent-core/src/agent/skill/`

## 一句话定位

Skill 是**以 Markdown 定义、按需激活的可复用 playbook**——不占 system prompt 常驻 token，只在被激活时以受控的上下文块注入，是"渐进式披露（progressive disclosure）"思想在 prompt 层的落地。

## 架构与数据流

```
skill 目录（多个 root）
   │  discoverSkills() 递归扫描，识别含 SKILL.md 的目录为 skill bundle
   ▼
SkillRegistry（byName 标准化命名索引）
   │  activate(name) 按名查找
   ▼
Agent Context 注入（origin: skill_activation）
   │  渲染为 <skill-loaded> 包裹的上下文块
   ▼
模型在该 skill 指导下执行后续动作
```

## 关键实现细节

### 1. Skill 定义格式（`src/skill/parser.ts`）

`SKILL.md` 使用 YAML frontmatter，核心字段：

| 字段 | 作用 |
| --- | --- |
| `name` / `description` | 目录型 skill 必填，注册进 registry 的索引键 |
| `type` | 控制激活方式（用户可激活 vs 模型可自主调用） |
| `whenToUse` | 声明式触发条件，供模型/路由判断相关性 |
| `disableModelInvocation` | 禁止模型自主调用（如 `/mcp-config` 这类产品内置 skill） |
| `arguments` | 调用 skill 时可携带的参数声明 |

解析器强制校验：目录型 skill 缺 `name` 或 `description` 直接拒绝加载。

### 2. 多层级 root 解析（`src/skill/scanner.ts`）

`resolveSkillRoots()` 按优先级合并扫描：

```
显式配置目录 > 项目级 brand(.nighthawk/skills) > 项目级通用(.agents/skills)
            > 用户级 brand > 用户级通用 > extra > plugin > builtin
```

设计意图：**项目约定覆盖用户习惯，builtin 兜底**。同名 skill 靠加载顺序自然解决优先级，无需显式 override 机制。

### 3. 激活路径（`src/agent/skill/index.ts` + `prompt.ts`）

- `activate(name)`：从 registry 查找 → 校验该 skill 是否允许当前激活方式 → 渲染 skill prompt → 以 `skill_activation` origin 写入 agent context。
- **关键决策：skill 内容不拼进 system prompt**，而是作为带 origin 标记的上下文块注入。这意味着：
  - system prompt 保持稳定（可被缓存，prefix caching 友好）
  - skill 激活/退出有明确的会话边界，可审计
  - 多个 skill 可叠加而不互相污染

## 面试高频追问

**Q: 为什么用 Markdown 而不是代码/JSON 定义 skill？**
A: 受众不同。Skill 的作者是"懂业务的人"而非"懂引擎的人"——Markdown 是最低门槛的作者格式，frontmatter 承载机器可读的元数据，正文承载给模型看的自然语言指令。这和 Claude Skills、Cursor Rules 的行业共识一致。

**Q: Skill 数量多了怎么办？全量注入吗？**
A: 不会。注册表只存元数据（name/description/whenToUse），正文按需加载——这是 token 经济性的核心。可讲的演进方向：把 whenToUse 做成向量检索或让模型先看目录再点名加载（two-stage disclosure）。

**Q: Skill 和 MCP 工具的区别？**
A: Skill 是**知识**（教模型"怎么做某类事"的流程性指令），MCP 工具是**能力**（可执行的外部动作）。一个 skill 的正文里通常会指导模型去调用某些工具——两者是正交组合关系。

**Q: 安全上怎么防恶意 skill？**
A: 可以讲的点：`disableModelInvocation` 防止模型被诱导自主激活产品级 skill；来源分层（用户/项目/plugin/builtin）本身就是信任分级的基础；激活产生带 origin 的可审计记录。
