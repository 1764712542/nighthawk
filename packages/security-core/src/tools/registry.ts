import type { Tool } from '../core/types.js';

export interface ToolRegistry {
  register(tool: Tool): void;
  get(name: string): Tool | undefined;
  getAll(): Tool[];
  listNames(): string[];
}

export function createToolRegistry(): ToolRegistry {
  const tools = new Map<string, Tool>();
  return {
    register(t: Tool) { tools.set(t.definition.name, t); },
    get(n: string) { return tools.get(n); },
    getAll() { return Array.from(tools.values()); },
    listNames() { return Array.from(tools.keys()); },
  };
}

export const SKIP_DIRS = new Set(['.git','node_modules','__pycache__','.venv','venv','vendor','target','.pytest_cache','dist','build','.next','.cache','coverage']);
