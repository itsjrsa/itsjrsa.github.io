export const siteUrl = 'https://www.itsjrsa.com'
export const pages = {
  '/': {
    title: 'Ricardo Andrade — R&D Engineer & Software Developer',
    description: 'Ricardo Andrade, R&D engineer at INESC TEC. Software projects, energy forecasting, machine learning, and research publications.',
  },
  '/experience': {
    title: 'Experience — Ricardo Andrade',
    description: 'Research and software engineering experience at INESC TEC: energy forecasting, machine learning, and industrial software systems.',
  },
  '/programming': {
    title: 'Software Projects — Ricardo Andrade',
    description: 'Software built by Ricardo Andrade, including Predico, Vupai, ELFOS, and AI4Substation. Forecasting platforms, agent development tools, and independent projects.',
  },
  '/research': {
    title: 'Research & Publications — Ricardo Andrade',
    description: 'Journal articles and conference papers by Ricardo Andrade on energy forecasting, machine learning, and power systems, with abstracts and citations.',
  },
  '/businesscard': {
    title: 'Contact — José Ricardo Andrade',
    description: 'Contact José Ricardo Andrade at INESC TEC. Find professional profiles and contact details.',
  },
}
export const aliases = { '/publications': '/research', '/projects': '/research' }
export const notFound = { title: 'Page not found — Ricardo Andrade', description: 'This page could not be found. Explore Ricardo Andrade’s projects, experience, and research.' }
export const normalizePath = path => path.replace(/\/+$/, '') || '/'
export const canonicalUrl = path => `${siteUrl}${path === '/' ? '/' : `${path}/`}`
export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: `${siteUrl}/`, name: 'Ricardo Andrade' },
    { '@type': 'ProfilePage', '@id': `${siteUrl}/#profile`, url: `${siteUrl}/`, mainEntity: { '@id': `${siteUrl}/#person` } },
    { '@type': 'Person', '@id': `${siteUrl}/#person`, name: 'Ricardo Andrade', alternateName: 'José Ricardo Andrade', url: `${siteUrl}/`, image: `${siteUrl}/images/portrait-jrsa-light.webp`, jobTitle: 'R&D Engineer', worksFor: { '@type': 'Organization', name: 'INESC TEC', url: 'https://www.inesctec.pt/' }, sameAs: ['https://github.com/itsjrsa', 'https://linkedin.com/in/itsjrsa', 'https://x.com/itsjrsa', 'https://orcid.org/0000-0001-8170-8235', 'https://scholar.google.com/citations?user=Q1Kye1AAAAAJ'] },
  ],
}
