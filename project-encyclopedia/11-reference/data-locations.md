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

  - `packages/agent-core-v2/src/app/bootstrap/bootstrapService.ts`：
    - 导出签名/声明：
      - `export class BootstrapService implements IBootstrapService`
  - `docs/en/configuration/data-locations.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/agent-core-v2/src/app/bootstrap/bootstrapService.ts`
- `docs/en/configuration/data-locations.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
