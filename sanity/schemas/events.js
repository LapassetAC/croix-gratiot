export default {
  name: 'events',
  title: 'Évenements',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      description: "Titre de l'évenement",
      validation: (Rule) => Rule.required().min(5).max(30),
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
      placeholder: new Date().toLocaleDateString('fr-FR'),
      options: {
        dateFormat: 'DD/MM/YYYY',
      },
      description: "Date de l'évenement",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: "Courte description de l'évenement",
      validation: (Rule) => Rule.required().min(10).max(200),
    },
    {
      name: 'thumbImg',
      type: 'image',
      title: 'Vignette',
      options: {hotspot: true},
      description: "Image de l'évenement",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'eventUrl',
      title: 'Lien',
      description: "Lien vers l'évenement (Facebook, Instagram, ...)",
      type: 'url',
    },
  ],
}
