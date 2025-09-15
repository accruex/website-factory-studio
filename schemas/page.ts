export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'heroTitle', title: 'Hero Title', type: 'string' },
    { name: 'heroSub', title: 'Hero Subtitle', type: 'string' },
    { name: 'heroImage', title: 'Hero Image', type: 'image' },
    { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] },
    { name: 'seoTitle', title: 'SEO Title', type: 'string' },
    { name: 'seoDescription', title: 'SEO Description', type: 'text' }
  ]
}
