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

## 逐函数实现说明

以下按源码文件列出可验证的导出函数/类，并给出实现职责说明。

### packages/kap-server/src/routes/approvals.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerApprovalsRoutes` | 58 | `export function registerApprovalsRoutes(app: ApprovalRouteHost, core: Scope): void {` | `registerApprovalsRoutes` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `toWireApproval` | 160 | `export function toWireApproval(interaction: Interaction, sessionId: string): {` | `toWireApproval` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/routes/auth.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerAuthRoute` | 18 | `export function registerAuthRoute(app: RouteHost, core: Scope): void {` | `registerAuthRoute` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/routes/capabilities.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerCapabilitiesRoutes` | 37 | `export function registerCapabilitiesRoutes(app: CapabilitiesRouteHost, core: Scope): void {` | `registerCapabilitiesRoutes` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/routes/config.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerConfigRoutes` | 36 | `export function registerConfigRoutes(app: ConfigRouteHost, core: Scope): void {` | `registerConfigRoutes` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/routes/connections.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerConnectionsRoutes` | 17 | `export function registerConnectionsRoutes(` | `registerConnectionsRoutes` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/routes/files.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerFilesRoutes` | 63 | `export function registerFilesRoutes(app: FilesRouteHost, core: Scope): void {` | `registerFilesRoutes` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/routes/fs.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerFsRoutes` | 285 | `export function registerFsRoutes(app: FsRouteHost, core: Scope): void {` | `registerFsRoutes` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/routes/guiStore.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerGuiStoreRoutes` | 34 | `export function registerGuiStoreRoutes(app: GuiStoreRouteHost, store: IGuiStoreService): void {` | `registerGuiStoreRoutes` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/routes/messages.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerMessagesRoutes` | 57 | `export function registerMessagesRoutes(app: MessageRouteHost, core: Scope): void {` | `registerMessagesRoutes` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/routes/meta.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerMetaRoute` | 47 | `export function registerMetaRoute(app: RouteHost, opts: MetaRouteOptions): void {` | `registerMetaRoute` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/routes/modelCatalog.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerModelCatalogRoutes` | 151 | `export function registerModelCatalogRoutes(app: ModelCatalogRouteHost, core: Scope): void {` | `registerModelCatalogRoutes` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/routes/oauth.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerOAuthRoutes` | 56 | `export function registerOAuthRoutes(app: RouteHost, core: Scope): void {` | `registerOAuthRoutes` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/routes/plugins.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerPluginsRoutes` | 120 | `export function registerPluginsRoutes(` | `registerPluginsRoutes` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/routes/prompts.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerPromptsRoutes` | 164 | `export function registerPromptsRoutes(app: PromptRouteHost, core: Scope): void {` | `registerPromptsRoutes` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `projectPromptSnapshot` | 457 | `export function projectPromptSnapshot(prompt: PromptQueueSnapshot['pending'][number]) {` | `projectPromptSnapshot` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `watchPromptSettlements` | 473 | `export function watchPromptSettlements(events: IEventBus): {` | `watchPromptSettlements` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/routes/questions.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerQuestionsRoutes` | 68 | `export function registerQuestionsRoutes(app: QuestionRouteHost, core: Scope): void {` | `registerQuestionsRoutes` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `toWireQuestion` | 271 | `export function toWireQuestion(` | `toWireQuestion` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/routes/registerApiV1Routes.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerApiV1Routes` | 95 | `export async function registerApiV1Routes(` | `registerApiV1Routes` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/routes/registerApiV2Routes.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerApiV2Routes` | 13 | `export async function registerApiV2Routes(app: ApiV2AppHost, core: Scope): Promise<void> {` | `registerApiV2Routes` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/routes/runtime.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerRuntimeRoutes` | 40 | `export function registerRuntimeRoutes(app: RuntimeRouteHost, core: Scope): void {` | `registerRuntimeRoutes` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/routes/search.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerSearchRoutes` | 77 | `export function registerSearchRoutes(app: SearchRouteHost, core: Scope): void {` | `registerSearchRoutes` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/routes/sessionAgentConfig.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `applySessionAgentConfig` | 19 | `export async function applySessionAgentConfig(` | `applySessionAgentConfig` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/routes/sessionExport.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerSessionExportRoute` | 40 | `export function registerSessionExportRoute(` | `registerSessionExportRoute` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/routes/sessionMedia.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `registerSessionMediaRoutes` | 48 | `export function registerSessionMediaRoutes(app: SessionMediaRouteHost, core: Scope): void {` | `registerSessionMediaRoutes` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/protocol/asyncapi.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `createAsyncApiDocument` | 21 | `export function createAsyncApiDocument(` | `createAsyncApiDocument` 负责创建/构建相关对象或流程。 |

### packages/kap-server/src/protocol/envelope.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `errEnvelope` | 33 | `export function errEnvelope(` | `errEnvelope` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |

### packages/kap-server/src/protocol/request-id.ts

| 函数 | 行号 | 签名 | 实现说明 |
| --- | --- | --- | --- |
| `parseOrGenerateRequestId` | 5 | `export function parseOrGenerateRequestId(headerValue: string \| undefined): string {` | `parseOrGenerateRequestId` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |
| `isUlid` | 12 | `export function isUlid(value: string): boolean {` | `isUlid` 是本文涉及模块中的一个导出函数/类，具体语义以源码实现为准。 |


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

### 来自 `packages/kap-server/src/routes/approvals.ts` 的 `registerApprovalsRoutes`

源码位置：`packages/kap-server/src/routes/approvals.ts:58` 附近。

```ts
export function registerApprovalsRoutes(app: ApprovalRouteHost, core: Scope): void {
  const listRoute = defineRoute(
    {
      method: 'GET',
      path: '/sessions/{session_id}/approvals',
      params: sessionIdParamSchema,
      querystring: listPendingApprovalsQuerySchema,
      success: { data: listPendingApprovalsResponseSchema },
      errors: {
        [ErrorCode.VALIDATION_FAILED]: { detailsSchema },
        [ErrorCode.SESSION_NOT_FOUND]: {},
      },
      description: 'List pending approval requests for a session',
      tags: ['approvals'],
    },
    async (req, reply) => {
      const { session_id } = req.params;
      const handle = await resumeSessionById(core.accessor, session_id);
      if (handle === undefined) {
        reply.send(
          errEnvelope(ErrorCode.SESSION_NOT_FOUND, `session ${session_id} does not exist`, req.id),
        );
        return;
      }
// ...
```

### 来自 `packages/kap-server/src/routes/auth.ts` 的 `registerAuthRoute`

源码位置：`packages/kap-server/src/routes/auth.ts:18` 附近。

```ts
export function registerAuthRoute(app: RouteHost, core: Scope): void {
  const route = defineRoute(
    {
      method: 'GET',
      path: '/auth',
      success: { data: authSummarySchema },
      description: 'Get server auth readiness snapshot',
      tags: ['auth'],
    },
    async (req, reply) => {
      const summary = await core.accessor.get(IAuthLegacyService).get();
      reply.send(okEnvelope(summary, req.id));
    },
  );
  app.get(route.path, route.options, route.handler as Parameters<RouteHost['get']>[2]);
}
```

### 来自 `packages/kap-server/src/routes/capabilities.ts` 的 `registerCapabilitiesRoutes`

源码位置：`packages/kap-server/src/routes/capabilities.ts:37` 附近。

```ts
export function registerCapabilitiesRoutes(app: CapabilitiesRouteHost, core: Scope): void {
  const listRoute = defineRoute(
    {
      method: 'GET',
      path: '/capabilities',
      success: { data: listCapabilitiesResponseSchema },
      errors: {},
      description: 'List built-in capabilities with layered readiness status',
      tags: ['capabilities'],
      operationId: 'listCapabilities',
    },
    async (req, reply) => {
      const capabilities = await core.accessor.get(ICapabilityService).listCapabilities();
      reply.send(okEnvelope({ capabilities }, req.id));
    },
  );
  app.get(
    listRoute.path,
    listRoute.options,
    listRoute.handler as Parameters<CapabilitiesRouteHost['get']>[2],
  );

  const getRoute = defineRoute(
    {
// ...
```


## 时序/状态图

```mermaid
flowchart LR
    A[入口/调用方] --> B[本文核心模块]
    B --> C[依赖服务/数据层]
    C --> D[输出/事件/持久化]
```

> 图注：`11-reference/api-endpoints.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

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
