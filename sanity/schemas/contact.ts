import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Contact Page',
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
      name: 'formTitle',
      title: 'Contact Form Title',
      type: 'string',
    }),
    defineField({
      name: 'processTitle',
      title: 'Process Section Title',
      type: 'string',
    }),
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of process steps (e.g., Free consultation, Business diagnosis, etc.)',
    }),
    defineField({
      name: 'investmentTitle',
      title: 'Investment Section Title',
      type: 'string',
    }),
    defineField({
      name: 'retainerRange',
      title: 'Monthly Retainer Range',
      type: 'string',
    }),
    defineField({
      name: 'projectRange',
      title: 'One-off Project Range',
      type: 'string',
    }),
    defineField({
      name: 'targetMarketTitle',
      title: 'Target Market Title',
      type: 'string',
    }),
    defineField({
      name: 'targetMarketDescription',
      title: 'Target Market Description',
      type: 'text',
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
    defineField({
      name: 'roiTarget',
      title: 'ROI Target',
      type: 'string',
    }),
    defineField({
      name: 'responseTime',
      title: 'Response Time Message',
      type: 'text',
    }),
  ],
})