export default {
  name: 'news',
  title: 'Post Instagram',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Texte',
      type: 'text',
      validation: (Rule) => Rule.required(),
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
