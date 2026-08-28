# 持久化与索引层

session 文件、minidb 查询索引、transcript、blob、cache 的持久化关系。

## 目录

`~/.nighthawk/sessions` 存会话，`blobs` 存媒体，`store` 存查询/状态，`cache` 存扫描缓存，`logs` 存日志，`credentials` 存 OAuth。

## Session Index

minidb read model 存 session summary，支持 keyset pagination、workspace 过滤、count。

## Search

kap-server search 服务基于 minidb text index，提供跨 session 全文搜索。

## Transcript

transcript 层把 agent 状态变更序列化为可重放事件，供 replay/UI。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core-v2/src/app/bootstrap/bootstrapService.ts` 导出：
    - 符号：`BootstrapService`
  - `packages/minidb/README.md`（非 TS 源码，可直接阅读）
  - `packages/kap-server/src/search/searchService.ts` 导出：
    - 符号：`SEARCH_WORKER_FLAG_ID`, `IGlobalSearchService`, `LiveTranscriptSource`, `SearchBackend`, `InlineSearchBackend`, `GlobalSearchService`

## 证据与代码位置

- `packages/agent-core-v2/src/app/bootstrap/bootstrapService.ts`
- `packages/minidb/README.md`
- `packages/kap-server/src/search/searchService.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
