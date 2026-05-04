export const footerSettings = {
  name: 'footerSettings',
  title: 'Footer Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Global Footer',
      hidden: true,
    },
    {
      name: 'logoText',
      title: 'Logo Text',
      type: 'string',
      initialValue: 'Insprosoftware',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'columns',
      title: 'Footer Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Column Title', type: 'string' },
            {
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'label', title: 'Label', type: 'string' },
                    { name: 'href', title: 'URL', type: 'string' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform Name', type: 'string' },
            { name: 'url', title: 'Profile URL', type: 'string' },
            { name: 'icon', title: 'Lucide Icon Name', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      initialValue: '© 2024 Insprosoftware. All rights reserved.',
    },
  ],
}
