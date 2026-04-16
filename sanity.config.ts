import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '8nasmnlb'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'emash'

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [
      {
        name: 'author',
        title: 'Author',
        type: 'document',
        fields: [
          {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name', maxLength: 96 },
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
          },
          {
            name: 'bio',
            title: 'Bio',
            type: 'array',
            of: [{ type: 'block' }],
          },
        ],
      },
      {
        name: 'category',
        title: 'Category',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
          },
        ],
      },
      {
        name: 'post',
        title: 'Post',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }],
          },
          {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: { hotspot: true },
          },
          {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
          },
          {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
          },
          {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
          },
          {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{ type: 'block' }],
          },
        ],
      },
    ],
  },
})
