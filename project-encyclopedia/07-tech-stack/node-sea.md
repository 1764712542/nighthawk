# Node SEA 与原生安装

CLI 可构建为单文件可执行应用（SEA），支持一键安装脚本。

## 脚本

`apps/nighthawk/scripts/native/` 下有 01-bundle、build、package、produce-manifest、resolve-release、smoke。

## 安装

`install.sh` / `install.ps1` 下载预构建 native 包，不需要 Node.js。

## Worker

SEA 中提取 minidb/search worker 到子进程，避免主线程阻塞。

## 更新

`nighthawk upgrade` 支持 staged native update 和 re-exec。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `apps/nighthawk/scripts/native//`（目录内无 .ts 文件）
  - `install.sh`（非 TS 源码，可直接阅读）
  - `apps/nighthawk/src/native//` 目录下源码文件示例：
    - `apps/nighthawk/src/native/minidb-worker.ts`
    - `apps/nighthawk/src/native/module-hook.ts`
    - `apps/nighthawk/src/native/native-assets.ts`
    - `apps/nighthawk/src/native/native-require.ts`
    - `apps/nighthawk/src/native/search-worker.ts`
    - `apps/nighthawk/src/native/smoke.ts`

## 证据与代码位置

- `apps/nighthawk/scripts/native/`
- `install.sh`
- `apps/nighthawk/src/native/`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
