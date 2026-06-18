import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'siteName', type: 'text', defaultValue: 'Greenland Infra' },
    { name: 'tagline', type: 'text' },
    { name: 'logo', type: 'upload', relationTo: 'media' },
    {
      type: 'collapsible',
      label: 'Contact details',
      fields: [
        { name: 'email', type: 'text' },
        { name: 'phone', type: 'text' },
        { name: 'address', type: 'textarea' },
        { name: 'mapEmbedUrl', type: 'text', admin: { description: 'Google Maps embed URL.' } },
      ],
    },
    {
      name: 'social',
      type: 'group',
      label: 'Social media handles',
      fields: [
        { name: 'instagram', type: 'text' },
        { name: 'linkedin', type: 'text' },
        { name: 'facebook', type: 'text' },
        { name: 'youtube', type: 'text' },
        { name: 'pinterest', type: 'text' },
      ],
    },
  ],
}
