import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'About Page',
    }),
    defineField({
      name: 'pageTitle',
      title: 'Page Headline',
      type: 'string',
    }),
    defineField({
      name: 'pageSubtitle',
      title: 'Page Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
    }),
    defineField({
      name: 'vision',
      title: 'Vision Statement',
      type: 'text',
    }),
    defineField({
      name: 'competitiveEdge',
      title: 'Competitive Edge',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'description', type: 'text', title: 'Description'},
          ],
        },
      ],
    }),
    defineField({
      name: 'primaryMarket',
      title: 'Primary Market Description',
      type: 'text',
    }),
    defineField({
      name: 'primaryMarketList',
      title: 'Primary Market Industries',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'secondaryMarket',
      title: 'Secondary Market Description',
      type: 'text',
    }),
    defineField({
      name: 'geography',
      title: 'Geographic Focus',
      type: 'text',
    }),
    defineField({
      name: 'growthRoadmap',
      title: 'Growth Roadmap',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'period', type: 'string', title: 'Time Period'},
            {name: 'goals', type: 'text', title: 'Goals'},
          ],
        },
      ],
    }),
    defineField({
      name: 'yearOneRevenue',
      title: 'Year 1 Revenue Goal',
      type: 'string',
    }),
    defineField({
      name: 'profitTarget',
      title: 'Profit Target (%)',
      type: 'string',
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'CTA Subtitle',
      type: 'text',
    }),
  ],
})