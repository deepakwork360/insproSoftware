import { orderRankField } from '@sanity/orderable-document-list'

export const blogPost = {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    orderRankField({ type: 'blogPost' }),
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'bannerDescription',
      title: 'Banner Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      description: 'e.g. "center", "18%", "85%"',
      initialValue: 'center',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Inspro Team',
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'e.g. "8 min read"',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'date',
    },
    {
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'section',
          fields: [
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Heading', value: 'heading' },
                  { title: 'Paragraph', value: 'paragraph' },
                  { title: 'List', value: 'list' },
                ],
              },
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
              description: 'For headings and paragraphs, enter text. For lists, enter items separated by newlines.',
            },
          ],
        },
      ],
    },
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'que', title: 'Question', type: 'string' },
            { name: 'ans', title: 'Answer', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 2,
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'bannerImage',
    },
    prepare(selection: any) {
      const { author } = selection
      return { ...selection, subtitle: author ? `by ${author}` : '' }
    },
  },
}
