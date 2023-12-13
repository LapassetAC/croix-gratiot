import {supportedLanguages} from './supportedLanguages'

export const localeText = {
  name: 'localeText',
  type: 'object',
  fields: supportedLanguages.map((lang) => ({
    name: lang.id,
    title: lang.title,
    type: 'text',
  })),
}
