import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
  name: 'wine',
  title: 'Vins',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'wine'}),
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
          {title: 'Blanc', value: 'blanc'},
          {title: 'Rosé', value: 'rose'},
          {title: 'Rouge', value: 'rouge'},
          {title: 'Autre', value: 'autre'},
        ],
      },
    },
    {
      name: 'productImage',
      title: 'Image produit',
      description: 'Image de la bouteille au format portrait sur fond transparent, sans bordures',
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
      type: 'internationalizedArrayText',
    },
    {
      name: 'adjectif',
      title: 'Le vin en un mot',
      description: 'Description en un adjectif du vin. Ex. pour le rosé : Le Velouté',
      type: 'internationalizedArrayString',
    },
    {
      name: 'intro',
      title: 'Le vin en une ou deux phrases',
      description:
        'Description en deux phrases du vin. Ex. pour le rosé : Velouté Syrah et Grenache. Ce vin très expressif, gourmand et fruité accompagné d’une belle vivacité.',
      type: 'internationalizedArrayText',
    },
    {
      name: 'description',
      title: 'Le mot des vignerons',
      description: 'Description du vin, de son origine, son histoire, etc.',
      type: 'internationalizedArrayText',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'videoUrl',
      title: 'URL vidéo (optionnel)',
      type: 'url',
      description:
        "Pour avoir la vidéo directement intégrée sur la page, utiliser Daylimotion avec un URL de type : https://www.dailymotion.com/embed/video/x3tknf où la dernière partie après video/ est l'identifiant de la vidéo accessible dans son URL ou via le bouton 'Partager'",
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
      type: 'internationalizedArrayText',
    },
    {
      name: 'degustation',
      title: 'Dégustation (optionnel)',
      description: 'Description de la dégustation du vin, ses associations, etc.',
      type: 'internationalizedArrayText',
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
      title: 'Appellation et millésime',
      descritpion: 'Par exemple : AOP Languedoc Blanc 2020',
      type: 'string',
    },
    {
      name: 'formats',
      title: 'Formats disponibles',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Demi (37,5cl)', value: 'Demi (37,5cl)'},
          {title: 'Bouteille (75cl)', value: 'Bouteille (75cl)'},
          {title: 'Magnum (1,5l)', value: 'Magnum (1,5l)'},
        ],
      },
    },
  ],
}
