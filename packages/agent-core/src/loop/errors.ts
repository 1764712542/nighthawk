/**
 * Loop-local error helpers.
 */

import { ErrorCodes, NighthawkError, isNighthawkError } from '#/errors';

export function createMaxStepsExceededError(maxSteps: number, message?: string): NighthawkError {
  return new NighthawkError(
    ErrorCodes.LOOP_MAX_STEPS_EXCEEDED,
    message ??
      `Turn exceeded maxSteps=${maxSteps}. If max_steps_per_turn is too small, raise it in config.toml (loop_control.max_steps_per_turn), or run "/update-config" to update it, then "/reload".`,
    {
      details: { maxSteps },
    },
  );
}

export function isMaxStepsExceededError(error: unknown): boolean {
  return isNighthawkError(error) && error.code === ErrorCodes.LOOP_MAX_STEPS_EXCEEDED;
}

export function isAbortError(err: unknown): boolean {
  if (err instanceof Error) {
    return err.name === 'AbortError';
  }
  return false;
}

export function errorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  return String(err);
}
