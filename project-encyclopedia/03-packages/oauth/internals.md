# oauth 内部实现

本页说明 packages/oauth 的关键内部模块与设计思路，源码引用以文件列表为准。

## 关键模块

从源码树可以看到以下模块：`src/oauth.ts`, `src/identity.ts`, `src/managed-usage.ts`, `src/api-error.ts`, `src/errors.ts`, `src/managed-feedback.ts`, `src/model-alias-merge.ts`, `src/storage.ts`, `src/oauth-manager.ts`, `src/utils.ts`, `src/managed-feedback-upload.ts`, `src/types.ts`, `src/managed-userinfo.ts`, `src/managed-tools.ts`, `src/managed-nighthawk.ts`, `src/constants.ts`。

## 设计重点

OAuth 工具包：managed auth、token transaction、设备码/API key、provider 模型目录、用户信息/用量。

## 与其他包的关系

packages/oauth 被上层应用或相邻包通过 workspace 依赖引用；具体依赖关系见 `package.json` 的 `dependencies` 中 `@nighthawk/*` 项。

## 可证明路径

阅读代码时应从 `src/index.ts` 或包入口开始，再沿导出符号进入具体实现。

## 专业实现要点（开发流程视角）

### 需求分析

每个包只解决一个领域问题，并通过 package.json exports 暴露最小公开面。

### 设计决策

使用 workspace 协议链接本地依赖；包入口用 `export *` 聚合；内部用 `#/` 别名。

### 实现步骤

定义接口与类型 → 实现服务/函数 → 注册到 DI（如适用）→ 编写测试 → 构建 dist。

### 验证方式

运行 `pnpm -C <pkg> typecheck`、`pnpm -C <pkg> test`、`pnpm lint:pkg`。

### 维护注意

公开导出变化要同步 `klient` contract parity 或 SDK 类型；发布前生成 changeset。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数、类与方法：

  - `packages/oauth/src/index.ts`：
    - 导出签名/声明：
      - `export type {`
      - `export type { TokenStorage } from './storage';`
      - `export type { DevicePollResult, RefreshOptions } from './oauth';`
      - `export type { LoginOptions, OAuthManagerOptions, OAuthRefreshOutcome } from './oauth-manager';`
      - `export type { NighthawkHostIdentity, NighthawkIdentityOptions } from './identity';`
      - `export type { NighthawkRegion, NighthawkRegionProfile, ResolveNighthawkRegionOptions } from './region';`
      - `export type { OAuthTokenTransactionOptions } from './oauth-token-transaction';`

## 证据与代码位置

- `packages/oauth/src/index.ts`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
