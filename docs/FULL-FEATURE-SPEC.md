# Security Coding Agent — 完整功能规格

## 设计目标
移植 NightHawk 全部功能 + 安全工具超集（116 条规则 + 50+ 编码工具），成为最强终端代码安全助手。

## 与 NightHawk 的差异
| 特性 | NightHawk | SCA |
|------|-----------|-----|
| 定位 | 通用编码助手 | 安全编码超集 |
| 内置安全工具 | 无（依赖 MCP） | 116 条规则 + 11 核心工具 |
| Provider | Moonshot 托管优先 | OpenAI/Anthropic/Moonshot/Google/本地 |
| Logo | ████ 块字符 | ╔═╗╔═╗ EVA 风格 |
| 中文支持 | 有 | 原生中文 |
| AGENTS.md | ✅ | ✅ |
| MCP | ✅ | ✅ |
| Trust 沙箱 | ✅ | ✅ |
| /yolo 模式 | ✅ | ✅ |
| Goal 系统 | ✅ | ✅ |
| Undo | ✅ | ✅ |
| Web UI | ✅ | 待实现 |

## 移植的 NightHawk 功能（完整清单）

### / 命令系统
/help, /clear, /save, /sessions, /load, /status, /model, /provider, /compact, /undo, /export, /version, /quit
+ 新增: /scan, /audit, /fix, /rules, /lang, /theme, /yolo, /trust, /mcp, /plugin, /goal, /web

### 工具系统
read_file, write_file, list_files, search_code, apply_patch
+ 安全工具: semgrep_scan, secret_scan, file_hash, dep_audit, ast_analyze, taint_trace, propose_fix
+ 编码工具: grep_code, find_files, count_lines, run_tests, lint_code, format_code
+ Git 工具: git_status, git_diff, git_log, git_blame
+ 分析工具: complexity_score, dead_code_detect, dependency_graph

### 设定系统
- Provider 切换（热切换）
- Model 切换
- 权限模式（auto/approve/deny）
- 主题系统（EVA/Default/Dark）
- 语言切换（zh/en）
- AGENTS.md 项目配置
- MCP 服务器配置
- Goal 目标系统
