/**
 * legacy-cli → nighthawk migration: host integration surface.
 *
 * Removable glue: the `nighthawk migrate` sub-command, the first-launch detection,
 * the native pi-tui migration screen, and the session-picker `[imported]`
 * badge helper. Migration logic itself lives in
 * `@nighthawk/migration-legacy`.
 */
export { registerMigrateCommand } from './command';
export { formatSessionLabel, isImportedSession, type SessionLabelInput } from './badge';
export { detectPendingMigration } from './detect-pending';
export { MigrationScreenComponent, type MigrationScreenResult } from './migration-screen';
