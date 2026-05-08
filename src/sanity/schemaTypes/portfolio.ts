import { orderRankField } from '@sanity/orderable-document-list'

export const portfolio = {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    orderRankField({ type: 'portfolio' }),
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'imageUrl',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Project Link',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A detailed description of the project for the homepage showcase.',
    },
    {
      name: 'showOnHome',
      title: 'Show on Home Page',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      description: 'CSS object-position (e.g., "center", "top", "bottom", or percentage "center 20%"). Default is "center".',
      initialValue: 'center',
    },
    {
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'Web', value: 'web' },
          { title: 'Mobile', value: 'mobile' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'imageUrl',
    },
  },
}
