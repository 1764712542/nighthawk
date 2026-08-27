import { useState, useEffect, useCallback } from "react";
import { bridge, Events } from "@/services";
import { useSettingsStore } from "@/stores";
import type { ExtensionConfig } from "shared/types";

export type AppStatus = "loading" | "no-workspace" | "runtime-error" | "no-models" | "ready";

export type ConfigErrorStatus = "loading" | "no-workspace" | "runtime-error" | "no-models";

export type AppViewResolution =
  | {
      readonly view: "status";
      readonly status: ConfigErrorStatus;
    }
  | { readonly view: "main" };

/**
 * Pure view router for App.
 */
export function resolveAppView(input: {
  readonly status: AppStatus;
  readonly modelsCount: number;
}): AppViewResolution {
  const { status, modelsCount } = input;
  if (modelsCount === 0) {
    return { view: "status", status: "no-models" };
  }
  if (status !== "ready") {
    return { view: "status", status };
  }
  return { view: "main" };
}

export interface AppInitState {
  status: AppStatus;
  errorMessage: string | null;
  modelsCount: number;
  refresh: () => void;
}

export function useAppInit(): AppInitState {
  const [state, setState] = useState<Omit<AppInitState, "refresh">>({
    status: "loading",
    errorMessage: null,
    modelsCount: 0,
  });
  const [initKey, setInitKey] = useState(0);
  const { initModels, setExtensionConfig, setMCPServers, setWireSlashCommands, setWorkspaceRoot } = useSettingsStore();

  const refresh = useCallback(() => {
    setState({ status: "loading", errorMessage: null, modelsCount: 0 });
    setInitKey((k) => k + 1);
  }, []);

  useEffect(() => {
    return bridge.on<{ config: ExtensionConfig; changedKeys: string[] }>(Events.ExtensionConfigChanged, ({ config }) => {
      setExtensionConfig(config);
    });
  }, [setExtensionConfig, refresh]);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      try {
        const workspace = await bridge.checkWorkspace();
        if (cancelled) {
          return;
        }

        if (!workspace.hasWorkspace) {
          setState({ status: "no-workspace", errorMessage: null, modelsCount: 0 });
          return;
        }

        setWorkspaceRoot(workspace.workspaceRoot ?? workspace.path ?? null);

        const [extensionConfig, mcpServers, slashCommands, nighthawkConfig] = await Promise.all([
          bridge.getExtensionConfig(),
          bridge.getMCPServers(),
          bridge.getSlashCommands(),
          bridge.getModels(),
        ]);
        if (cancelled) {
          return;
        }

        setExtensionConfig(extensionConfig);
        setMCPServers(mcpServers);
        setWireSlashCommands(slashCommands);

        initModels(nighthawkConfig.models, nighthawkConfig.defaultModel, nighthawkConfig.defaultThinking, nighthawkConfig.defaultThinkingEffort);

        const modelsCount = nighthawkConfig.models?.length ?? 0;

        if (modelsCount === 0) {
          setState({ status: "no-models", errorMessage: null, modelsCount: 0 });
          return;
        }

        setState({ status: "ready", errorMessage: null, modelsCount });
      } catch (err) {
        if (!cancelled) {
          setState({
            status: "runtime-error",
            errorMessage: err instanceof Error ? err.message : "Failed to initialize",
            modelsCount: 0,
          });
        }
      }
    }

    void init();
    return () => {
      cancelled = true;
    };
  }, [initKey, initModels, setExtensionConfig, setMCPServers, setWireSlashCommands]);

  return { ...state, refresh };
}
