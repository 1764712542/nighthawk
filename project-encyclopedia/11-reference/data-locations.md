# 数据目录参考

`~/.nighthawk` 下各子目录保存什么。

## sessions

会话目录，含 metadata/messages/records。

## blobs

图片/视频等媒体 blob。

## store

minidb 查询/索引存储。

## cache

扫描缓存、模型 catalog 缓存。

## logs

诊断日志。

## credentials

OAuth token 等凭据。

## 证据与代码位置

- `packages/agent-core-v2/src/app/bootstrap/bootstrapService.ts`
- `docs/en/configuration/data-locations.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
