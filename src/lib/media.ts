/** Resolve a media field (relation or id) to a usable image URL + alt. */
export function mediaSrc(media: unknown): { url: string | null; alt: string } {
  if (media && typeof media === 'object') {
    const m = media as { url?: string; alt?: string; sizes?: Record<string, { url?: string }> }
    const url = m.sizes?.card?.url || m.url || null
    return { url, alt: m.alt || '' }
  }
  return { url: null, alt: '' }
}
