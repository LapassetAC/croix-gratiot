import {supportedLanguages} from './supportedLanguages'

export const localeString = {
  name: 'localeString',
  type: 'object',
  fields: supportedLanguages.map((lang) => ({
    name: lang.id,
    title: lang.title,
    type: 'string',
  })),
}
