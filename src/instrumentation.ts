/**
 * Runs once when the server starts. The Node-only handler lives in a
 * separate module so it's never analyzed for the Edge runtime.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./instrumentation-node')
  }
}
