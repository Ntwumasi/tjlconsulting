import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Homepage',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main headline on the homepage',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      description: 'Subtitle text under the main headline',
    }),
    defineField({
      name: 'primaryButtonText',
      title: 'Primary Button Text',
      type: 'string',
    }),
    defineField({
      name: 'secondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string',
    }),
    defineField({
      name: 'servicesTitle',
      title: 'Services Section Title',
      type: 'string',
    }),
    defineField({
      name: 'servicesSubtitle',
      title: 'Services Section Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'whoWeServeTitle',
      title: 'Who We Serve Title',
      type: 'string',
    }),
    defineField({
      name: 'whoWeServeSubtitle',
      title: 'Who We Serve Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'targetMarkets',
      title: 'Target Markets',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of target markets/industries',
    }),
    defineField({
      name: 'ctaTitle',
      title: 'Final CTA Title',
      type: 'string',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'Final CTA Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'Final CTA Button Text',
      type: 'string',
    }),
  ],
})