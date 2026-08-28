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

## 证据与代码位置

- `packages/kap-server/src/routes/`
- `packages/kap-server/src/protocol/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
