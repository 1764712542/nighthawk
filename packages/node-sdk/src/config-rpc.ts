import {
  createRPC,
  ErrorCodes,
  NighthawkError,
  parseConfigString,
  resolveConfigPath,
  type RPCMethods,
} from '@nighthawk/agent-core';
import { z } from 'zod';

export type NighthawkConfigValidationPathSegment = string | number;

export interface NighthawkConfigValidationIssue {
  readonly path: readonly NighthawkConfigValidationPathSegment[];
  readonly message: string;
}

export interface ResolveNighthawkConfigPathInput {
  readonly homeDir?: string | undefined;
  readonly configPath?: string | undefined;
}

export interface ValidateNighthawkConfigTomlInput {
  readonly text: string;
  readonly filePath?: string | undefined;
}

export interface NighthawkConfigRpc {
  resolveConfigPath(input?: ResolveNighthawkConfigPathInput): Promise<string>;
  validateConfigToml(input: ValidateNighthawkConfigTomlInput): Promise<void>;
}

interface NighthawkConfigCoreRpc {
  resolveConfigPath(input: ResolveNighthawkConfigPathInput): string;
  validateConfigToml(input: ValidateNighthawkConfigTomlInput): void;
}

interface NighthawkConfigClientRpc {}

class NighthawkConfigCoreRpcImpl implements NighthawkConfigCoreRpc {
  resolveConfigPath(input: ResolveNighthawkConfigPathInput): string {
    return resolveConfigPath(input);
  }

  validateConfigToml(input: ValidateNighthawkConfigTomlInput): void {
    try {
      parseConfigString(input.text, input.filePath);
    } catch (error) {
      const validationIssues = extractValidationIssues(error);
      if (validationIssues !== undefined) {
        throw toConfigValidationError(error, validationIssues);
      }
      throw error;
    }
  }
}

export class NighthawkConfigRpcClient implements NighthawkConfigRpc {
  private readonly ready: Promise<RPCMethods<NighthawkConfigCoreRpc>>;

  constructor() {
    const [coreRpc, clientRpc] = createRPC<NighthawkConfigCoreRpc, NighthawkConfigClientRpc>();
    void coreRpc(new NighthawkConfigCoreRpcImpl());
    this.ready = clientRpc({});
  }

  async resolveConfigPath(input: ResolveNighthawkConfigPathInput = {}): Promise<string> {
    const rpc = await this.ready;
    return rpc.resolveConfigPath(input);
  }

  async validateConfigToml(input: ValidateNighthawkConfigTomlInput): Promise<void> {
    const rpc = await this.ready;
    await rpc.validateConfigToml(input);
  }
}

export function createNighthawkConfigRpc(): NighthawkConfigRpc {
  return new NighthawkConfigRpcClient();
}

function toConfigValidationError(
  error: unknown,
  validationIssues: readonly NighthawkConfigValidationIssue[],
): NighthawkError {
  const details =
    error instanceof NighthawkError && error.details !== undefined
      ? { ...error.details, validationIssues }
      : { validationIssues };

  if (error instanceof NighthawkError) {
    return new NighthawkError(error.code, error.message, { details });
  }

  const message = error instanceof Error ? error.message : String(error);
  return new NighthawkError(ErrorCodes.CONFIG_INVALID, message, { details });
}

function extractValidationIssues(error: unknown): readonly NighthawkConfigValidationIssue[] | undefined {
  const zodError = findZodError(error);
  if (zodError === undefined) return undefined;
  return zodError.issues.map((issue) => ({
    path: issue.path.map((segment) =>
      typeof segment === 'number' ? segment : String(segment),
    ),
    message: issue.message,
  }));
}

function findZodError(error: unknown): z.ZodError | undefined {
  if (error instanceof z.ZodError) return error;
  if (error instanceof Error && error.cause instanceof z.ZodError) return error.cause;
  return undefined;
}
