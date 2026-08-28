# @nighthawk/transcript

## 0.0.2

### Patch Changes

- [`07c3e93`](https://github.com/nighthawk-dev/nighthawk/commit/07c3e93b949841e9789181a124b9d235a942c401) Thanks [@nighthawk-dev](https://github.com/nighthawk-dev)! - Publish per-agent transcript activity state (idle / turn) on transcript snapshots, derived from live loop status and preserved across cold rebuilds and live backfills.

- [`07c3e93`](https://github.com/nighthawk-dev/nighthawk/commit/07c3e93b949841e9789181a124b9d235a942c401) Thanks [@nighthawk-dev](https://github.com/nighthawk-dev)! - Keep subagent task model and thinking-effort metadata on transcript tasks, including after the task terminates.

## 0.0.1

### Patch Changes

- [#1888](https://github.com/nighthawk-dev/nighthawk/pull/1888) [`5ae60fa`](https://github.com/nighthawk-dev/nighthawk/commit/5ae60fa6736b63b80bd764ef01d6c0334eb80595) Thanks [@sailist](https://github.com/sailist)! - Add a unified, agent-granular transcript rendering data layer and serve it from the v2 server: clients can fetch turn-paginated transcripts via `GET /sessions/{id}/transcript` and subscribe to per-agent transcript updates over the v1 WebSocket with per-connection granularity control (off / turn / block / delta). All transcript wire types are owned by the transcript package itself. `turn.started` now carries the turn's prompt text so live transcripts render the user input as soon as the turn opens.
