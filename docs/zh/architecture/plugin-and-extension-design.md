# NightHawk 插件与扩展体系设计

> 定位：说明 NightHawk 如何通过**多格式清单兼容**的扩展体系重新定义 agent 的能力边界——不绑定单一 harness 的插件方言，而是把业界已形成共识的扩展格式全部纳入同一运行时。

## 设计哲学：集合百家之长

当前 agent 生态的事实是：**没有单一的插件标准赢得一切**，但每个层面都出现了事实标准：

| 扩展层 | 事实标准 | NightHawk 的态度 |
| --- | --- | --- |
| 能力（工具） | MCP (Model Context Protocol) | 原生客户端，一等公民 |
| 知识（流程/playbook） | SKILL.md（Markdown + frontmatter） | 原生支持，多层 root |
| 工具描述协议 | OpenAI 风格 function-calling JSON Schema | 作为工具 schema 的通用交换格式 |
| 分发 | npm / GitHub 仓库 + manifest | manifest 声明 + 信任分级安装 |

NightHawk 的选择：**运行时同时讲这些方言**。写一个 MCP server、一个 SKILL.md、或一份 OpenAI 风格 tools.json，都能进入同一个 tool registry——扩展作者用自己熟悉的格式，agent 引擎只认统一的内部表示。

## 扩展点全景

```
                     ┌────────────────────────────┐
                     │   Agent Tool Registry       │
                     │   （统一内部表示）           │
                     └──────┬──────┬──────┬───────┘
                            │      │      │
              ┌─────────────┤      │      ├─────────────┐
              ▼             ▼      ▼      ▼             ▼
         内置工具      MCP server  Skill  插件工具   动态注册
      (read/bash/       (stdio/   (知识   (manifest   (运行时
       security…)       http/sse)  注入)   声明)       声明)
```

所有扩展殊途同归：进入 registry、绑定 `approvalRule`、接受统一的审批与审计。**扩展的多样性不能成为绕过权限体系的通道。**

## 各扩展格式细则

### 1. Skill —— 知识扩展

Markdown + YAML frontmatter（`name` / `description` / `whenToUse` / `type` / `disableModelInvocation`）。多层 root（项目 > 用户 > plugin > builtin），按需激活、注入带 origin 标记的上下文块。

### 2. MCP —— 能力扩展

任何 MCP server（stdio / sse / http 传输）经 `McpConnectionManager` 接入，工具以 `mcp__<server>__<tool>` 命名空间注册。

### 3. 插件 manifest —— 打包分发

插件是一个包含 `nighthawk.plugin.json` 清单的目录，可同时携带：

```json
{
  "kind": "nighthawk-plugin-root",
  "name": "example-plugin",
  "version": "1.0.0",
  "skills": ["skills/"],
  "mcpServers": {
    "example": { "command": "node", "args": ["server.js"] }
  },
  "tools": ["tools/"]
}
```

安装来源（市场 / GitHub 仓库 / 本地路径）决定信任级别，安装时明示。**一个插件 = 知识 + 能力 + 配置的自包含分发包。**

### 4. 工具 schema 的通用交换格式

工具定义统一采用 OpenAI function-calling 风格的 JSON Schema 作为交换格式（DeepSeek 及绝大多数 OpenAI 兼容后端同为此格式）：

```json
{
  "name": "security_scan",
  "description": "Scan files for vulnerability patterns",
  "parameters": {
    "type": "object",
    "properties": { "paths": { "type": "array", "items": { "type": "string" } } },
    "required": ["paths"]
  }
}
```

选择它的理由：它是**最广泛实现的工具描述 lingua franca**——同一份 schema 既能驱动 NightHawk 的 tool registry，也能直接投喂任何 OpenAI 兼容后端的 tools 参数；DeepSeek harness 生态的工具/插件定义可直接复用，无需转译。provider 特有的扩展（如 Anthropic 的 input_schema、思考块）在 `kosong` 协议层做适配，扩展作者无感。

## 前沿理念对照（面试话术）

**Q: 为什么不定义自己的插件格式而要兼容这么多格式？**
A: 插件格式的网络效应在生态侧，不在引擎侧。自造方言意味着扩展作者要多学一套、多维护一份——这是纯粹的摩擦。把引擎内部表示做好，把外部格式做薄适配，作者在哪里的存量就在哪里。

**Q: 多格式兼容的边界在哪？什么时候拒绝兼容？**
A: 兼容清单（manifest/schema），不兼容运行时语义。任何扩展进入 registry 后必须遵守同一套审批、审计、命名空间规则——格式自由，行为不自由。这是安全边界的底线。

**Q: 和主流 coding agent 的扩展体系比，先进性体现在哪？**
A: 三点——(1) 扩展的三分法（知识/能力/分发）对应三种正交的扩展动机，而不是把一切都塞进"插件"一个筐；(2) 统一权限收敛，扩展多样性不侵蚀安全模型；(3) 工具 schema 选了最大公约数格式，生态复用零转译。
