export default {
  name: 'news',
  title: 'Posts réseaux sociaux',
  type: 'document',
  fields: [
    {
      name: 'thumbImg',
      type: 'image',
      title: 'Vignette',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      title: 'Texte',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(150),
    },
    {
      name: 'newsUrl',
      title: 'Lien',
      description: '',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'text',
      media: 'thumbImg',
    },
  },
}
