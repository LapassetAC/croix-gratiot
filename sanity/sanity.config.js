import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'croix-gratiot-sanity',

  projectId: 'tzu0yb4o',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title('Contenu administrable du site')
          .items([
            orderableDocumentListDeskItem({type: 'wine', title: 'Vins', S, context}),
            S.listItem().title('Évenements').child(S.documentTypeList('events')),
            S.listItem().title('Posts réseaux sociaux').child(S.documentTypeList('news')),
          ])
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
