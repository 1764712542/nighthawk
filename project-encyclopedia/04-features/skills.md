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

## 专业实现要点（开发流程视角）

### 需求分析

Feature 是自包含能力单元，必须能整体安装/卸载而不污染其他模块。

### 设计决策

用 `Feature` 基类组合 Service、Tool、Profile、Config、Command 贡献点；静态契约留在静态注册通道。

### 实现步骤

在 `src/features/<name>/` 写领域代码 → 写 `<name>Feature.ts` → 在 `src/index.ts` 精确导入 → 编写测试。

### 验证方式

通过 `test/features/feature.test.ts` 验证装配/卸载；通过 DI 视图观察 unit 状态。

### 维护注意

不要把所有能力塞进一个 Feature；配置段、wire 事件等静态契约必须保持可重放。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `docs/interview/skill-system.md`（非 TS 源码，可直接阅读）
  - `packages/agent-core/src/agent/skill//` 目录下源码文件示例：
    - `packages/agent-core/src/agent/skill/index.ts`
    - `packages/agent-core/src/agent/skill/prompt.ts`
    - `packages/agent-core/src/agent/skill/types.ts`
  - `packages/agent-core-v2/src/features/skill//` 目录下源码文件示例：
    - `packages/agent-core-v2/src/features/skill/catalog/builtin/builtin.ts`
    - `packages/agent-core-v2/src/features/skill/catalog/builtin/check-nighthawk-docs.ts`
    - `packages/agent-core-v2/src/features/skill/catalog/builtin/custom-theme.ts`
    - `packages/agent-core-v2/src/features/skill/catalog/builtin/import-from-cc-codex.ts`
    - `packages/agent-core-v2/src/features/skill/catalog/builtin/mcp-config.ts`
    - `packages/agent-core-v2/src/features/skill/catalog/builtin/registry.ts`
    - `packages/agent-core-v2/src/features/skill/catalog/builtin/sub-skill.ts`
    - `packages/agent-core-v2/src/features/skill/catalog/builtin/update-config.ts`
    - `packages/agent-core-v2/src/features/skill/catalog/builtin/write-goal.ts`
    - `packages/agent-core-v2/src/features/skill/catalog/builtinSkillSource.ts`
    - `packages/agent-core-v2/src/features/skill/catalog/configSection.ts`
    - `packages/agent-core-v2/src/features/skill/catalog/errors.ts`
    - `packages/agent-core-v2/src/features/skill/catalog/fileSkillDiscovery.ts`
    - `packages/agent-core-v2/src/features/skill/catalog/inMemorySkillDiscovery.ts`
    - `packages/agent-core-v2/src/features/skill/catalog/parser.ts`
    - `packages/agent-core-v2/src/features/skill/catalog/registry.ts`
    - `packages/agent-core-v2/src/features/skill/catalog/skillDiscovery.ts`
    - `packages/agent-core-v2/src/features/skill/catalog/skillRoots.ts`
    - `packages/agent-core-v2/src/features/skill/catalog/skillSource.ts`
    - `packages/agent-core-v2/src/features/skill/catalog/types.ts`
    - `packages/agent-core-v2/src/features/skill/catalog/userFileSkillSource.ts`
    - `packages/agent-core-v2/src/features/skill/prompt.ts`
    - `packages/agent-core-v2/src/features/skill/session/skillCatalog.ts`
    - `packages/agent-core-v2/src/features/skill/session/skillCatalogData.ts`

## 证据与代码位置

- `docs/interview/skill-system.md`
- `packages/agent-core/src/agent/skill/`
- `packages/agent-core-v2/src/features/skill/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
