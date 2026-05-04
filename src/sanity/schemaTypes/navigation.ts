export const navigation = {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Menu Title',
      type: 'string',
      description: 'e.g., Main Menu, Footer Menu',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navLink',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href', title: 'URL (optional if it has sub-menu)', type: 'string' },
            {
              name: 'type',
              title: 'Link Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Regular Link', value: 'regular' },
                  { title: 'Mega Menu (Services Style)', value: 'mega' },
                  { title: 'Dropdown (Portfolio Style)', value: 'dropdown' },
                ],
              },
              initialValue: 'regular',
            },
            {
              name: 'sections',
              title: 'Menu Sections (For Mega Menu)',
              type: 'array',
              hidden: ({ parent }: any) => parent?.type !== 'mega',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'title', title: 'Section Title', type: 'string' },
                    { 
                      name: 'icon', 
                      title: 'Icon Name', 
                      type: 'string',
                      description: 'Lucide icon name (e.g., Code, Smartphone, Palette)' 
                    },
                    {
                      name: 'links',
                      title: 'Section Links',
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
              name: 'dropdownLinks',
              title: 'Dropdown Links',
              type: 'array',
              hidden: ({ parent }: any) => parent?.type !== 'dropdown',
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
  ],
}
