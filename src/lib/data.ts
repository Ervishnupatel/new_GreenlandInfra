import 'server-only'
import { getPayload } from 'payload'
import config from '@payload-config'

/**
 * Resilient data access.
 *
 * If the database isn't connected yet (e.g. no DATABASE_URL configured),
 * these helpers return empty/null instead of throwing, so the frontend
 * can fall back to the default content in src/content/defaults.ts.
 */

async function client() {
  try {
    return await getPayload({ config })
  } catch (err) {
    console.warn('[data] Payload not available — using default content.', err)
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
    const { docs } = await payload.find({
      collection: 'projects',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    return docs[0] ?? null
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
