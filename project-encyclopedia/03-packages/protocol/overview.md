# protocol 包概览

本页介绍 packages/protocol 包的定位、版本、目录结构和依赖。

## 定位

Shared REST + WS protocol schemas (envelope, error codes, pagination, ws-control) for the nighthawk daemon.

## 元数据

| 属性 | 值 |
| --- | --- |
| 包名 | `@nighthawk/protocol` |
| 版本 | 0.5.0 |
| 说明 | Shared REST + WS protocol schemas (envelope, error codes, pagination, ws-control) for the nighthawk daemon. |
| 源码文件数 | 70 |
| 测试文件数 | 0 |
| 顶层源码目录 | __tests__, approval.ts, asyncapi.ts, display.ts, envelope.ts, error-codes.ts, events.ts, file.ts, fs.ts, index.ts, message.ts, modelCatalog.ts |
| 主要 scripts | build, typecheck, test, clean |
| 依赖数 | 2 |

## 顶层模块

主要顶层源码文件/目录：`__tests__`, `approval.ts`, `asyncapi.ts`, `display.ts`, `envelope.ts`, `error-codes.ts`, `events.ts`, `file.ts`, `fs.ts`, `index.ts`, `message.ts`, `modelCatalog.ts`, `pagination.ts`, `question.ts`, `request-id.ts`, `rest`, `session.ts`, `skill.ts`, `task.ts`, `time.ts`。

## 测试规模

测试文件约 0 个；测试入口通常在 `packages/protocol/test/`。

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

  - `packages/protocol/package.json`（非 TS 源码，可直接阅读）
  - `packages/protocol/package.json`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/protocol/package.json`
- `packages/protocol/package.json`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
