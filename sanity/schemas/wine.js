export default {
  name: 'wine',
  title: 'Vin',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL de la page',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Rouge', value: 'rouge'},
          {title: 'Blanc', value: 'blanc'},
          {title: 'Rosé', value: 'rose'},
          {title: 'Autre', value: 'autre'},
        ],
      },
    },
    {
      name: 'productImage',
      title: 'Image produit',
      description: 'Image de la bouteille sur fond transparent (format portrait)',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'portraitImage',
      title: 'Image portrait',
      description: 'Image de la bouteille mise en scène (format portrait)',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'certification',
      title: 'Certification Bio',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cepages',
      title: 'Cépages',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
