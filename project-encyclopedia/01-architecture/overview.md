# 架构总览

NightHawk 是分层架构：应用层、服务端/传输层、Agent 引擎层、基础设施层。

## 分层模型

从上到下：`apps/nighthawk`（CLI/TUI）、`apps/vscode`（IDE 扩展）、`apps/nighthawk-inspect`（调试器）、`apps/vis`（可视化）；`packages/kap-server`（REST+WS）；`packages/agent-core-v2`（DI×Scope 引擎）；`packages/minidb`、`packages/transcript`、`packages/protocol` 等支撑层。

## 核心边界

应用不能直接 import 内核；`apps/nighthawk` 通过 `@nighthawk/nighthawk-sdk` 使用能力。服务端通过 dispatcher 把 REST/WS 调用翻译成 scope 内服务调用。

## 状态生命周期

引擎有 App/Workspace/Session/Agent 四层 scope；状态归属于哪一层就放在哪一层，避免用 App 级 Map 存 session 状态。

## 数据流向

用户输入进入 Session → Agent Loop → LLM Requester → 工具执行 → 结果回写 context/transcript → 事件广播到 TUI/Web。

## 核心实现细节（源码导出）

以下是本文涉及路径中的真实源码导出/结构，帮助你把概念映射到函数与类：

  - `packages/agent-core-v2/src/app/scopes.ts` 导出：
    - 符号：`LifecycleScope`, `SCOPE_TOPOLOGY`
  - `packages/kap-server/src/transport/dispatcher.ts` 导出：
    - 符号：`ChannelLookup`
  - `apps/nighthawk/AGENTS.md`（非 TS 源码，可直接阅读）

## 证据与代码位置

- `packages/agent-core-v2/src/app/scopes.ts`
- `packages/kap-server/src/transport/dispatcher.ts`
- `apps/nighthawk/AGENTS.md`

> 本文所有路径均相对仓库根目录；引用内容以仓库当前 `HEAD` 为准。
