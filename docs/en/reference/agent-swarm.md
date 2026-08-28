# AgentSwarm Cluster Mode

AgentSwarm is NightHawk's cluster mode that allows launching multiple sub-agents in parallel to process tasks, dramatically improving execution efficiency for large-scale workloads.

## Overview

Key differences between AgentSwarm and a regular Agent:

| Feature | Regular Agent | AgentSwarm |
|---------|---------------|-----------|
| Concurrency | Single sub-agent | Up to 128 parallel sub-agents |
| Task Distribution | Single thread | Template-based, auto-splitting |
| Invocation | Model decides autonomously | Explicit `AgentSwarm` tool call |
| Use Cases | Single-point exploration, code modification | Batch scanning, large-scale auditing, parallel review |

## How It Works

AgentSwarm operates with a **prompt template** and an **items list**:

1. The `{{item}}` placeholder in the template is replaced with each value from the items list
2. Each resulting prompt is assigned to an independent sub-agent for execution
3. All sub-agents run in parallel without interference
4. Results are collected and returned to the main agent

## Use Cases

### Batch Security Scanning

```
Scan the following directory for SQL injection vulnerabilities: {{item}}
```

items: `["src/api/", "src/admin/", "src/auth/", "lib/", "config/"]`

→ 5 sub-agents scan different directories concurrently, achieving 5x speedup.

### Large-Scale Code Review

```
Review the following file for security risks: {{item}}
```

items: `["src/handler/users.ts", "src/handler/orders.ts", "src/handler/payments.ts", ...]`

→ Review all critical files in one pass.

### Parallel Penetration Testing

```
Perform port scanning and service enumeration on {{item}}
```

items: `["192.168.1.1", "192.168.1.2", "192.168.1.5", "10.0.0.1"]`

→ Scan multiple target hosts simultaneously.

## Limitations

- **Max concurrency**: 128 sub-agents
- **Timeout**: Each sub-agent runs for up to 2 hours
- **Context isolation**: Each sub-agent has its own independent context
- **Result merging**: Sub-agent results are aggregated by the main agent

## Usage in Penetration Test Mode

In penetration test mode, AgentSwarm can be used for:

- Multi-port parallel scanning: scan multiple port ranges simultaneously
- Multi-directory parallel brute-forcing: enumerate different paths concurrently
- Multi-target parallel reconnaissance: gather information from multiple targets
- Large-scale code audit: scan all code directories in parallel

## Notes

- AgentSwarm is not suitable for tasks that require shared state
- Each sub-agent independently consumes model tokens — manage your quota accordingly
- Sub-agents cannot communicate with each other
- Results are aggregated by the main agent, which may carry a risk of information loss