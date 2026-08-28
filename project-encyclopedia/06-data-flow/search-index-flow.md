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

## 证据与代码位置

- `packages/minidb/AGENTS.md`
- `packages/kap-server/src/search/searchService.ts`
- `packages/kap-server/src/routes/search.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
