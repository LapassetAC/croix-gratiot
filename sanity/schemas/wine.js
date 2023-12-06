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
      description:
        "Le bouton 'Generate' génère automatiquement l'URL de la page du vin. Cet URL est modifiable.",
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
      title: 'Image portrait du vin',
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
      title: 'Cépage(s)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'quote',
      title: 'Citation',
      description:
        'Citation qui apparaît sous le titre du vin. Ex. pour le rosé : Osez Rosé, Roséphine !',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'adjectif',
      title: 'Le vin en un mot',
      description: 'Description en un mot du vin. Ex. pour le rosé : Le Velouté',
      type: 'string',
    },
    {
      name: 'intro',
      title: 'Le vin en deux phrases',
      description:
        'Description en deux phrases du vin. Ex. pour le rosé : Velouté Syrah et Grenache. Ce vin très expressif, gourmand et fruité accompagné d’une belle vivacité.',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Le mot des vignerons',
      description: 'Description du vin, de son origine, son histoire, etc.',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'videoUrl',
      title: 'URL vidéo (optionnel)',
      type: 'url',
      description: 'URL complet de la vidéo',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'vinification',
      title: 'Vinification (optionnel)',
      description: 'Description de la vinification',
      type: 'text',
    },
    {
      name: 'degustation',
      title: 'Dégustation (optionnel)',
      description: 'Description de la dégustation du vin, ses associations, etc.',
      type: 'text',
    },
    {
      name: 'landscapeImage',
      title: 'Image paysage du vin (optionnel)',
      description: 'Image de la bouteille mise en scène (format paysage)',
      type: 'image',
    },
    {
      name: 'alcool',
      title: 'Teneur en alcool',
      description: 'Ne fournir que le nombre. Ex. : 12 pour 12% Vol.',
      type: 'number',
    },
    {
      name: 'millesime',
      title: 'Millésime',
      type: 'string',
    },
    {
      name: 'formats',
      title: 'Formats disponibles',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Demi (37,5cl)', value: 'demi'},
          {title: 'Bouteille (75cl)', value: 'bouteille'},
          {title: 'Magnum (1,5l)  ', value: 'magnum'},
        ],
      },
    },
  ],
}
