import * as vscode from "vscode";
import type { NighthawkHarness } from "@nighthawk/nighthawk-sdk";

export async function updateLoginContext(harness: NighthawkHarness): Promise<boolean> {
  const status = await harness.auth.status();
  const loggedIn = status.providers.some((provider) => provider.hasToken);
  await vscode.commands.executeCommand("setContext", "nighthawk.isLoggedIn", loggedIn);
  return loggedIn;
}
