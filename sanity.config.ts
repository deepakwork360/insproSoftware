import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemaTypes'

import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio',
  name: 'Insprosoftware_Studio',
  title: 'Insprosoftware Studio',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Website Content')
          .items([
            orderableDocumentListDeskItem({
              type: 'blogPost',
              title: 'Blog Posts (Drag to Reorder)',
              S,
              context,
            }),
            orderableDocumentListDeskItem({
              type: 'portfolio',
              title: 'Portfolios (Drag to Reorder)',
              S,
              context,
            }),
            S.divider(),
            // List the rest of the document types, but exclude blogPost and portfolio
            ...S.documentTypeListItems().filter(
              (item) => !['blogPost', 'portfolio'].includes(item.getId() || '')
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
