import type { CollectionConfig } from 'payload'

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
        description: 'URL path, e.g. "riverside-villa"',
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
      name: 'featured',
      type: 'checkbox',
      label: 'Feature on home page',
      defaultValue: false,
    },
    {
      name: 'summary',
      type: 'textarea',
      admin: { description: 'Short one-line description used on cards.' },
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
