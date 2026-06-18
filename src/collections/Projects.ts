import type { CollectionConfig } from 'payload'

/** Make any string a clean, URL-safe slug. */
const slugify = (input: string): string =>
  input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-') // non-alphanumeric -> hyphen
    .replace(/^-+|-+$/g, '') // trim leading/trailing hyphens

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'year', 'location', 'featured'],
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'URL path. Auto-cleaned to lowercase with hyphens (e.g. "riverside-villa"). Leave blank to generate from the title.',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            const base =
              value && String(value).trim() ? String(value) : String(data?.title ?? '')
            return slugify(base)
          },
        ],
      },
    },
    {
      type: 'row',
      fields: [
        { name: 'year', type: 'number', admin: { width: '33%' } },
        { name: 'location', type: 'text', admin: { width: '33%' } },
        {
          name: 'category',
          type: 'select',
          options: ['Residential', 'Commercial', 'Interior', 'Urban', 'Landscape'],
          admin: { width: '34%' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'area',
          type: 'text',
          admin: { width: '33%', description: 'e.g. "420 m²"' },
        },
        { name: 'client', type: 'text', admin: { width: '33%' } },
      ],
    },
    {
      name: 'services',
      type: 'select',
      hasMany: true,
      options: [
        'Architecture',
        'Interiors',
        '3D Visualization',
        'Master Planning',
        'Sustainability',
        'Landscape',
        'Water Harvesting',
      ],
      admin: { description: 'Shown in the project spec sheet.' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Feature on home page',
      defaultValue: false,
    },
    {
      name: 'summary',
      type: 'textarea',
      admin: { description: 'Short one-line description shown on cards and at the top of the project page.' },
    },
    {
      name: 'hero',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'gallery',
      type: 'array',
      labels: { singular: 'Image', plural: 'Gallery Images' },
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'caption', type: 'text' },
      ],
    },
    {
      name: 'description',
      type: 'richText',
    },
  ],
}
