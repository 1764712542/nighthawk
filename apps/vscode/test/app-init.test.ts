/**
 * Scenario: App-level view routing after init.
 * Wiring: resolveAppView is pure; the bridge and toast boundaries are mocked away.
 * Run: pnpm exec vitest run --config apps/vscode/vitest.config.ts test/app-init.test.ts
 */
import { describe, expect, it, vi } from "vitest";

vi.mock("@/services", () => ({
  bridge: {},
  Events: {},
}));
vi.mock("@/components/ui/sonner", () => ({
  toast: { error: vi.fn(), warning: vi.fn() },
}));

import { resolveAppView, type AppStatus } from "../webview-ui/src/hooks/useAppInit";

function resolve(status: AppStatus, modelsCount = 0) {
  return resolveAppView({ status, modelsCount });
}

describe("resolveAppView", () => {
  it("routes no-models status to status view", () => {
    expect(resolve("no-models")).toEqual({ view: "status", status: "no-models" });
  });

  it("routes ready with models to the main view", () => {
    expect(resolve("ready", 2)).toEqual({ view: "main" });
  });

  it("routes non-ready statuses to status screens", () => {
    for (const status of ["loading", "no-workspace", "runtime-error"] as const) {
      expect(resolve(status, 1)).toEqual({ view: "status", status });
    }
  });

  it("routes ready with 0 models to no-models status", () => {
    expect(resolve("ready", 0)).toEqual({ view: "status", status: "no-models" });
  });

  it("routes loading with models to loading status", () => {
    expect(resolve("loading", 1)).toEqual({ view: "status", status: "loading" });
  });
});
