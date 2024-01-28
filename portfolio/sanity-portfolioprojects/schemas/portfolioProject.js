export default {
  name: 'portfolioProject',
  type: 'document',
  title: 'portfolioProject',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'projectImage',
      type: 'image',
      title: 'ProjectImage',
    },
    {
      name: 'techLogos',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'usedTech',
      type: 'array',
      title: 'usedTech',
      of: [{type: 'string'}],
    },
    {
      title: 'What I learned',
      name: 'learned',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      title: 'Wrongs and Updates',
      name: 'wu',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'wrongs', type: 'string', title: 'wrongs'},
            {name: 'updates', type: 'string', title: 'updates'},
          ],
        },
      ],
    },
  ],
}
