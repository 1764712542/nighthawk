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

## 逐函数实现说明

以下按源码文件列出可验证的导出函数/类，并给出实现职责说明。

### packages/agent-core-v2/src/app/bootstrap/bootstrapService.ts

| 类 | 行号 | 声明 | 实现说明 |
| --- | --- | --- | --- |
| `BootstrapService` | 14 | `export class BootstrapService implements IBootstrapService {` | 该类封装本文模块的核心状态与行为。 |


## 核心代码片段

以下片段直接从仓库源码截取，用于展示关键实现形态；完整实现请打开对应文件。

### 来自 `packages/agent-core-v2/src/app/bootstrap/bootstrapService.ts` 的 `BootstrapService`

源码位置：`packages/agent-core-v2/src/app/bootstrap/bootstrapService.ts:14` 附近。

```ts
export class BootstrapService implements IBootstrapService {
  declare readonly _serviceBrand: undefined;

  readonly platform: NodeJS.Platform;
  readonly arch: string;
  readonly cwd: string;
  readonly osHomeDir: string;
  readonly homeDir: string;
  readonly configPath: string;
  readonly clientIdentity: NighthawkHostIdentity;
  readonly args: HostArgs;
  readonly sessionsDir: string;
  readonly blobsDir: string;
  readonly storeDir: string;
  readonly cacheDir: string;
  readonly logsDir: string;
  readonly configKey: string;

  private readonly env: NodeJS.ProcessEnv;
  private readonly scopes: Readonly<Record<PersistenceScopeName, string>>;

  constructor(@IBootstrapOptions options: IBootstrapOptions) {
    this.platform = options.platform;
    this.arch = options.arch;
// ...
```


## 时序/状态图

```mermaid
flowchart LR
    A[入口/调用方] --> B[本文核心模块]
    B --> C[依赖服务/数据层]
    C --> D[输出/事件/持久化]
```

> 图注：`11-reference/data-locations.md` 的抽象流程；具体参与者与状态以源码和上文函数说明为准。

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
