import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'website-factory-studio',
  title: 'Website Factory Studio',
  projectId: '19onuo8u', // <-- your project ID
  dataset: 'production', // <-- your dataset
  basePath: '/',
  plugins: [visionTool()],
  schema: {
    types: schemaTypes,
  },
})
