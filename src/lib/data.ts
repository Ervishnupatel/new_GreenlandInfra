import 'server-only'
import { getPayload } from 'payload'
import pg from 'pg'
import config from '@payload-config'
import { slugify } from '@/lib/slug'

/**
 * Resilient data access.
 *
 * If the database isn't reachable yet (no DATABASE_URL, placeholder creds,
 * or wrong password), these helpers return empty/null instead of throwing,
 * so the frontend falls back to the default content in src/content/defaults.ts.
 *
 * We run ONE lightweight connectivity probe per server process (with a short
 * timeout and no auto-reconnect) and cache the result. This avoids Payload's
 * Postgres adapter spinning up a noisy reconnect loop when the DB is down.
 * NOTE: after you fix DATABASE_URL, restart the dev server so this re-probes.
 */

let dbReadyPromise: Promise<boolean> | null = null

function probeDb(): Promise<boolean> {
  const url = process.env.DATABASE_URL
  if (!url || url.includes('user:password@localhost')) return Promise.resolve(false)

  return (async () => {
    const probe = new pg.Client({
      connectionString: url,
      ssl: url.includes('localhost') ? false : { rejectUnauthorized: false },
      connectionTimeoutMillis: 4000,
    })
    try {
      await probe.connect()
      await probe.end()
      return true
    } catch (err) {
      console.warn(
        '[data] Database not reachable — using default content. ' +
          'Fix DATABASE_URL in .env and restart the dev server.',
        (err as Error)?.message,
      )
      try {
        await probe.end()
      } catch {
        /* ignore */
      }
      return false
    }
  })()
}

async function client() {
  if (!dbReadyPromise) dbReadyPromise = probeDb()
  const ready = await dbReadyPromise
  if (!ready) return null
  try {
    return await getPayload({ config })
  } catch {
    return null
  }
}

export async function getProjects(opts: { featured?: boolean; limit?: number } = {}) {
  const payload = await client()
  if (!payload) return []
  try {
    const where = opts.featured ? { featured: { equals: true } } : undefined
    const { docs } = await payload.find({
      collection: 'projects',
      where,
      limit: opts.limit ?? 100,
      sort: '-year',
    })
    return docs
  } catch {
    return []
  }
}

export async function getProjectBySlug(slug: string) {
  const payload = await client()
  if (!payload) return null
  try {
    // 1) exact match (clean slugs)
    const exact = await payload.find({
      collection: 'projects',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    if (exact.docs[0]) return exact.docs[0]

    // 2) resilient match — normalize both sides so messy stored slugs
    //    (spaces, capitals, trailing whitespace) still resolve.
    const target = slugify(slug)
    const { docs } = await payload.find({ collection: 'projects', limit: 500 })
    return docs.find((d: any) => slugify(String(d.slug ?? '')) === target) ?? null
  } catch {
    return null
  }
}

export async function getFounder() {
  const payload = await client()
  if (!payload) return null
  try {
    const { docs } = await payload.find({
      collection: 'team-members',
      where: { isFounder: { equals: true } },
      limit: 1,
    })
    return docs[0] ?? null
  } catch {
    return null
  }
}

export async function getFaqs() {
  const payload = await client()
  if (!payload) return []
  try {
    const { docs } = await payload.find({
      collection: 'faqs',
      sort: 'order',
      limit: 100,
    })
    return docs
  } catch {
    return []
  }
}

export async function getSiteSettings() {
  const payload = await client()
  if (!payload) return null
  try {
    return await payload.findGlobal({ slug: 'site-settings' })
  } catch {
    return null
  }
}
