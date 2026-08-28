# REST API 端点参考

kap-server `/api/v1` 的主要端点。

## Sessions

`GET/POST /api/v1/sessions`，`GET/POST /sessions/{id}`，archive/restore/fork/undo。

## Workspaces

`GET /api/v1/workspaces`，trust/untrust。

## Prompts

`POST /api/v1/sessions/{id}/prompts`。

## 其他

approvals、questions、files、fs、terminals、plugins、search、transcript、snapshot、tasks。

## 专业实现要点（开发流程视角）

### 需求分析

参考手册要支持用户快速查找参数、命令、API、协议。

### 设计决策

以表格和代码块为主，保持条目化、可复制。

### 实现步骤

从 CLI 定义、protocol schema、SDK 类型和路由源码提取事实。

### 验证方式

运行 `nighthawk --help`、`pnpm doctor` 或对照 schema 测试。

### 维护注意

参考内容随代码变更同步更新。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/kap-server/src/routes//` 目录下源码文件示例：
    - `packages/kap-server/src/routes/action-dispatch.ts`
    - `packages/kap-server/src/routes/action-suffix.ts`
    - `packages/kap-server/src/routes/approvals.ts`
    - `packages/kap-server/src/routes/auth.ts`
    - `packages/kap-server/src/routes/capabilities.ts`
    - `packages/kap-server/src/routes/config.ts`
    - `packages/kap-server/src/routes/connections.ts`
    - `packages/kap-server/src/routes/files.ts`
    - `packages/kap-server/src/routes/fs.ts`
    - `packages/kap-server/src/routes/guiStore.ts`
    - `packages/kap-server/src/routes/messages.ts`
    - `packages/kap-server/src/routes/meta.ts`
    - `packages/kap-server/src/routes/modelCatalog.ts`
    - `packages/kap-server/src/routes/oauth.ts`
    - `packages/kap-server/src/routes/plugins.ts`
    - `packages/kap-server/src/routes/prompts.ts`
    - `packages/kap-server/src/routes/questions.ts`
    - `packages/kap-server/src/routes/registerApiV1Routes.ts`
    - `packages/kap-server/src/routes/registerApiV2Routes.ts`
    - `packages/kap-server/src/routes/runtime.ts`
    - `packages/kap-server/src/routes/search.ts`
    - `packages/kap-server/src/routes/sessionAgentConfig.ts`
    - `packages/kap-server/src/routes/sessionExport.ts`
    - `packages/kap-server/src/routes/sessionMedia.ts`
  - `packages/kap-server/src/protocol//` 目录下源码文件示例：
    - `packages/kap-server/src/protocol/approval.ts`
    - `packages/kap-server/src/protocol/asyncapi.ts`
    - `packages/kap-server/src/protocol/display.ts`
    - `packages/kap-server/src/protocol/envelope.ts`
    - `packages/kap-server/src/protocol/error-codes.ts`
    - `packages/kap-server/src/protocol/events-zod.ts`
    - `packages/kap-server/src/protocol/goal.ts`
    - `packages/kap-server/src/protocol/message.ts`
    - `packages/kap-server/src/protocol/pagination.ts`
    - `packages/kap-server/src/protocol/question.ts`
    - `packages/kap-server/src/protocol/request-id.ts`
    - `packages/kap-server/src/protocol/rest-approval.ts`
    - `packages/kap-server/src/protocol/rest-capability.ts`
    - `packages/kap-server/src/protocol/rest-config.ts`
    - `packages/kap-server/src/protocol/rest-connection.ts`
    - `packages/kap-server/src/protocol/rest-file.ts`
    - `packages/kap-server/src/protocol/rest-fs.ts`
    - `packages/kap-server/src/protocol/rest-guiStore.ts`
    - `packages/kap-server/src/protocol/rest-message.ts`
    - `packages/kap-server/src/protocol/rest-meta.ts`
    - `packages/kap-server/src/protocol/rest-modelCatalog.ts`
    - `packages/kap-server/src/protocol/rest-oauth.ts`
    - `packages/kap-server/src/protocol/rest-plugin.ts`
    - `packages/kap-server/src/protocol/rest-prompt.ts`

## 证据与代码位置

- `packages/kap-server/src/routes/`
- `packages/kap-server/src/protocol/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
