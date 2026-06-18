import type { CollectionConfig } from 'payload'

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'isFounder'],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'role', type: 'text' },
    {
      name: 'isFounder',
      type: 'checkbox',
      label: 'Founder (shown in Founder Philosophy section)',
      defaultValue: false,
    },
    { name: 'photo', type: 'upload', relationTo: 'media' },
    {
      name: 'philosophy',
      type: 'textarea',
      admin: { description: 'Short philosophy / quote (founders).' },
    },
    { name: 'bio', type: 'richText' },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
}
