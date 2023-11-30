export default {
  name: 'news',
  title: 'Posts réseaux sociaux',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Texte',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(200),
    },
    {
      name: 'thumbImg',
      type: 'image',
      title: 'Vignette',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'newsUrl',
      title: 'Lien',
      description: '',
      type: 'url',
    },
  ],
}
