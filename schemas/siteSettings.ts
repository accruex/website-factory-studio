export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'siteName', title: 'Site Name', type: 'string' },
    {
      name: 'navLinks', title: 'Navigation Links', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'url', title: 'URL', type: 'string' },
      ]}]
    },
    { name: 'footerText', title: 'Footer Text', type: 'string' }
  ]
}
