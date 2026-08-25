for (const key of Object.keys(process.env)) {
  if (key.startsWith('NIGHTHAWK_EXPERIMENTAL_')) {
    delete process.env[key];
  }
}

process.env['NIGHTHAWK_EXPERIMENTAL_PERSISTENCE_MINIDB_READMODEL'] = 'false';
