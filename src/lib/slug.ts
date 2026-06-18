/** Make any string a clean, URL-safe slug (lowercase, hyphens). */
export const slugify = (input: string): string =>
  String(input ?? '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
