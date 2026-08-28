# kosong 包概览

本页介绍 packages/kosong 包的定位、版本、目录结构和依赖。

## 定位

The LLM abstraction layer for modern AI agent applications

## 元数据

| 属性 | 值 |
| --- | --- |
| 包名 | `@nighthawk/kosong` |
| 版本 | 0.5.5 |
| 说明 | The LLM abstraction layer for modern AI agent applications |
| 源码文件数 | 26 |
| 测试文件数 | 57 |
| 顶层源码目录 | capability.ts, catalog.ts, errors.ts, generate.ts, index.ts, message.ts, provider.ts, providers, tool.ts, usage.ts |
| 主要 scripts | build, typecheck, clean |
| 依赖数 | 7 |

## 顶层模块

主要顶层源码文件/目录：`capability.ts`, `catalog.ts`, `errors.ts`, `generate.ts`, `index.ts`, `message.ts`, `provider.ts`, `providers`, `tool.ts`, `usage.ts`。

## 测试规模

测试文件约 57 个；测试入口通常在 `packages/kosong/test/`。

## 专业实现要点（开发流程视角）

### 需求分析

每个包只解决一个领域问题，并通过 package.json exports 暴露最小公开面。

### 设计决策

使用 workspace 协议链接本地依赖；包入口用 `export *` 聚合；内部用 `#/` 别名。

### 实现步骤

定义接口与类型 → 实现服务/函数 → 注册到 DI（如适用）→ 编写测试 → 构建 dist。

### 验证方式

运行 `pnpm -C <pkg> typecheck`、`pnpm -C <pkg> test`、`pnpm lint:pkg`。

### 维护注意

公开导出变化要同步 `klient` contract parity 或 SDK 类型；发布前生成 changeset。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/kosong/package.json`（非 TS 源码，可直接阅读）
  - `packages/kosong/README.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/kosong/package.json`
- `packages/kosong/README.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
