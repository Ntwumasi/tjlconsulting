import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'Brief description for cards and previews',
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'text',
      description: 'Detailed description for the services page',
    }),
    defineField({
      name: 'features',
      title: 'Service Features',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of key features or offerings',
    }),
    defineField({
      name: 'icon',
      title: 'Icon Type',
      type: 'string',
      options: {
        list: [
          {title: 'Marketing', value: 'marketing'},
          {title: 'Revenue', value: 'revenue'},
          {title: 'Operations', value: 'operations'},
          {title: 'Technology', value: 'technology'},
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display this service',
    }),
    defineField({
      name: 'priceRange',
      title: 'Price Range',
      type: 'object',
      fields: [
        {
          name: 'retainerMin',
          title: 'Retainer Min ($)',
          type: 'number',
        },
        {
          name: 'retainerMax',
          title: 'Retainer Max ($)',
          type: 'number',
        },
        {
          name: 'projectMin',
          title: 'Project Min ($)',
          type: 'number',
        },
        {
          name: 'projectMax',
          title: 'Project Max ($)',
          type: 'number',
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})