import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'      // content editor
import {visionTool} from '@sanity/vision' // GROQ playground
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'website-factory-studio',
  title: 'Website Factory Studio',

  // 👇 put the real projectId here — copy it from the Vision URL host,
  // e.g. https://19onuo8u.api.sanity.io/...  -> projectId is 19onuo8u
  projectId: '19onuo8u',
  dataset: 'production',

  basePath: '/',
  plugins: [
    deskTool(),
    visionTool(),
  ],
  schema: {types: schemaTypes},
})
