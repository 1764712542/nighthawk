# 搜索索引数据流

session 数据如何进入 minidb 全文索引并被搜索。

## Mirror

Session summary mirror 排队写入 query store。

## Index

minidb text-index 对 transcript/文档建倒排索引，支持 CJK uni/bigram。

## Query

kap-server `/api/v1/search` 调用 search service，支持 live/index 模式。

## Generation

索引 generation 持久化，启动时加载 published generation + WAL replay。

## 专业实现要点（开发流程视角）

### 需求分析

数据流文档要回答“一个请求从哪里来、经过哪些服务、最终写到哪里”。

### 设计决策

用事件驱动解耦引擎与 UI；用 transcript 记录可重放状态；用 minidb read model 加速查询。

### 实现步骤

识别入口 API → 跟踪 service 调用链 → 标注持久化点 → 标注事件/WS 推送。

### 验证方式

通过 e2e、klient conformance suite、WS 订阅测试验证链路。

### 维护注意

异步链路要处理取消、重试、幂等；持久化要保证崩溃安全。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/minidb/AGENTS.md`（非 TS 源码，可直接阅读）
  - `packages/kap-server/src/search/searchService.ts`：
    - 导出签名/声明：
      - `export type { GlobalSearchErrorReason } from './contract';`
      - `export const SEARCH_WORKER_FLAG_ID = 'search_worker';`
      - `export async function drainGlobalSearchDisposals(): Promise<void>`
      - `export interface IGlobalSearchService {`
      - `export const IGlobalSearchService = createDecorator<IGlobalSearchService>('globalSearch');`
      - `export interface LiveTranscriptSource {`
      - `export interface SearchBackend {`
      - `export class InlineSearchBackend implements SearchBackend`
      - `export class GlobalSearchService implements IGlobalSearchService`
    - 类内方法（节选）：`dropLiveLockToken`
  - `packages/kap-server/src/routes/search.ts`：
    - 导出签名/声明：
      - `export function registerSearchRoutes(app: SearchRouteHost, core: Scope): void`

## 证据与代码位置

- `packages/minidb/AGENTS.md`
- `packages/kap-server/src/search/searchService.ts`
- `packages/kap-server/src/routes/search.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
