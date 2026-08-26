---
"@nighthawk/nighthawk": patch
---

Fix sessions hanging forever when a provider stream silently stops emitting events. Set `NIGHTHAWK_STREAM_STALL_TIMEOUT_MS` to tune the stall timeout (default 5 minutes, 0 disables).
