/**
 * Node-only: keep the dev console readable when the database is unreachable.
 *
 * The Payload Postgres adapter retries failed connections in the background;
 * those surface as noisy `unhandledRejection` crashes. We log one concise
 * line for DB-connection rejections instead. (The /admin panel still needs a
 * valid DATABASE_URL to actually work.)
 */
process.on('unhandledRejection', (reason: unknown) => {
  const msg = reason instanceof Error ? reason.message : String(reason)
  if (/postgres|password authentication|ECONNREFUSED|ECIRCUITBREAKER|database|getaddrinfo/i.test(msg)) {
    console.warn('[db] connection issue — admin/CMS needs a valid DATABASE_URL:', msg)
    return
  }
  console.error('Unhandled rejection:', reason)
})

export {}
