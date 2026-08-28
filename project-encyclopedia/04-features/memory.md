# 持久记忆与会话恢复

NightHawk 通过 session 文件、transcript、compaction 实现跨会话记忆。

## 会话持久化

session 目录保存 metadata、messages、records；`-S`/`-c` 恢复。

## Compaction

上下文超长时压缩：full compaction、micro compaction、handoff summary。

## Replay

transcript 和 records 支持回放。

## 长期记忆

项目记忆文件、AGENTS.md、用户 skill 等构成跨会话上下文。

## 证据与代码位置

- `packages/agent-core/src/agent/compaction/`
- `packages/agent-core/src/agent/records/`
- `packages/agent-core-v2/src/agent/contextMemory/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
