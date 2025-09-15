import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'      // <-- add this
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'website-factory-studio',
  title: 'Website Factory Studio',
  projectId: 'YOUR_REAL_PROJECT_ID',   // keep your correct id
  dataset: 'production',
  basePath: '/',
  plugins: [
    deskTool(),                       // <-- add this
    visionTool(),
  ],
  schema: { types: schemaTypes },
})
