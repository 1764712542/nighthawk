// ═══════════════════════════════════════════════════════════════════
// 沙箱命令执行 — 权限门禁 + 危险命令拦截 + 资源限制
// （对标简历中 Go+gVisor 沙箱：TS 侧实现权限模式与命令审查层）
// ═══════════════════════════════════════════════════════════════════
import { spawn } from 'node:child_process';
import path from 'node:path';
import type { Tool } from '../core/types.js';

// 绝对禁止（无论何种权限模式）
const BLACKLIST: Array<{ re: RegExp; reason: string }> = [
  { re: /\brm\s+(-[a-zA-Z]*[rf][a-zA-Z]*\s+)*(?:\/|~|\$HOME)(?:\s|$)/, reason: 'Recursive delete of root/home' },
  { re: /\bmkfs\b|\bdd\s+.*of=\/dev\//, reason: 'Filesystem/device destruction' },
  { re: /:\(\)\{.*\};\s*:/, reason: 'Fork bomb' },
  { re: />\s*\/dev\/sd[a-z]/, reason: 'Raw disk write' },
  { re: /\bchmod\s+-R\s+777\s+\//, reason: 'World-writable root' },
];

// 写操作类命令：manual 模式下需确认
const WRITE_CMDS = /^(?:rm|mv|cp|chmod|chown|mkdir|rmdir|tee|truncate|shred|git\s+(?:push|reset|clean|checkout\s+--|restore)|npm\s+(?:install|i|uninstall|publish|link)|pnpm\s+(?:install|i|add|remove)|yarn\s+(?:add|remove)|pip\s+install|curl\s+[^|]*\||wget\s+[^|]*\|)/;

export interface SandboxOptions {
  permissionMode: 'manual' | 'auto' | 'yolo';
  onConfirm?: (cmd: string) => Promise<boolean>;
  workspace: string;
}

export function createRunCommandTool(opts: SandboxOptions): Tool {
  return {
    definition: {
      name: 'run_command',
      description: 'Execute a shell command in the workspace sandbox with permission gating, timeout, and output limits.',
      parameters: { type: 'object', properties: {
        command: { type: 'string', description: 'Shell command to execute' },
        timeout_ms: { type: 'number', description: 'Timeout in ms (default 30000, max 120000)' },
      }, required: ['command'] },
    },
    async run(args) {
      const cmd = args.command as string;
      const timeout = Math.min((args.timeout_ms as number) || 30_000, 120_000);

      // 1. 黑名单拦截
      for (const b of BLACKLIST) {
        if (b.re.test(cmd)) return `⛔ BLOCKED by sandbox policy: ${b.reason}\nCommand: ${cmd}`;
      }

      // 2. 权限门禁
      const isWrite = WRITE_CMDS.test(cmd.trim());
      if (opts.permissionMode !== 'yolo' && (isWrite || opts.permissionMode === 'manual')) {
        if (opts.onConfirm) {
          const ok = await opts.onConfirm(cmd);
          if (!ok) return `⛔ Denied by user. Command not executed: ${cmd}`;
        } else {
          return `⛔ Permission denied (mode=${opts.permissionMode}). Switch to /yolo or approve interactively.\nCommand: ${cmd}`;
        }
      }

      // 3. 执行（受限环境）
      return new Promise<string>(resolve => {
        const child = spawn('sh', ['-c', cmd], {
          cwd: path.resolve(opts.workspace),
          env: { ...process.env, TERM: 'dumb', NO_COLOR: '1' },
          stdio: ['ignore', 'pipe', 'pipe'],
        });
        let out = '', truncated = false;
      const timer = setTimeout(() => { try { child.kill('SIGKILL'); } catch {} }, timeout);
        const append = (d: Buffer) => {
          if (out.length < 200_000) out += d.toString();
          else truncated = true;
        };
        child.stdout.on('data', append);
        child.stderr.on('data', append);
        child.on('close', code => {
          clearTimeout(timer);
          const tail = out.length > 20_000 ? out.slice(-20_000) : out;
          resolve(
            `Exit code: ${code}${truncated ? ' (output truncated)' : ''}\n\n${tail || '(no output)'}`
          );
        });
        child.on('error', e => { clearTimeout(timer); resolve(`Error: ${e.message}`); });
      });
    },
  };
}
