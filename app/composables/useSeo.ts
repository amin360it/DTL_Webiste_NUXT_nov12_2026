const SITE_NAME = 'DHAKATHAI ALCOMAXX PLC'
const DEFAULT_IMAGE = '/assets/img/exterior_1024x550feae.jpg'
const TITLE_TEMPLATE = `%s | ${SITE_NAME}`

export type SeoOptions = {
  title: string
  description: string
  titleTemplate?: string | null
  image?: string
  type?: 'website' | 'article' | 'profile'
  noindex?: boolean
}

export function siteUrl() {
  const config = useRuntimeConfig()
  return String(config.public.siteUrl || 'https://dhakathaibd.com').replace(/\/+$/, '')
}

export function canonicalPath() {
  const route = useRoute()
  const path = route.path.replace(/\/+$/, '')
  return path === '' ? '/' : path
}

export function useSeo(options: SeoOptions) {
  const base = siteUrl()
  const path = canonicalPath()
  const url = `${base}${path}`
  const fullTitle = options.titleTemplate === null ? options.title : `${options.title} | ${SITE_NAME}`
  const image = `${base}${options.image || DEFAULT_IMAGE}`

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: fullTitle,
      description: options.description,
      isPartOf: { '@id': `${base}/#website` },
      about: { '@id': `${base}/#organization` },
      primaryImageOfPage: image,
      inLanguage: 'en'
    }
  ]

  if (path !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
        { '@type': 'ListItem', position: 2, name: options.title, item: url }
      ]
    })
  }

  const schema = { '@context': 'https://schema.org', '@graph': graph }

  useHead({
    title: options.title,
    titleTemplate: options.titleTemplate === undefined ? TITLE_TEMPLATE : options.titleTemplate,
    link: [{ rel: 'canonical', href: url }],
    meta: [
      { name: 'description', content: options.description },
      {
        name: 'robots',
        content: options.noindex
          ? 'noindex, nofollow'
          : 'index, follow, max-image-preview:large, max-snippet:-1'
      },
      { property: 'og:type', content: options.type || 'website' },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: options.description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:image:alt', content: SITE_NAME },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: options.description },
      { name: 'twitter:image', content: image },
      { property: 'og:image:width', content: '1024' },
      { property: 'og:image:height', content: '550' }
    ],
    script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
  })
}

export function useOrganizationSchema() {
  const base = siteUrl()
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${base}/#organization`,
        name: SITE_NAME,
        legalName: 'DHAKATHAI ALCOMAXX PLC',
        url: `${base}/`,
        logo: `${base}/assets/img/dtl-new-plc-logo-2024---rgb-final-for-website29e1.png`,
        image: `${base}${DEFAULT_IMAGE}`,
        description:
          "Bangladesh's largest aluminium extrusion company. Manufacturer of quality aluminium profiles since 1997.",
        foundingDate: '1997',
        address: [
          {
            '@type': 'PostalAddress',
            streetAddress: 'Elite Rowshan Villa, Apartment No A-2, Plot-03, Road No 9/A, Block-J',
            addressLocality: 'Baridhara, Dhaka',
            addressCountry: 'BD'
          },
          {
            '@type': 'PostalAddress',
            streetAddress: 'Burirpara, East Norshinghpur, Ashulia, Savar',
            addressLocality: 'Dhaka',
            addressCountry: 'BD'
          }
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+88-02-9882666',
          email: 'info@dhakathaibd.com',
          contactType: 'customer service',
          areaServed: 'BD',
          availableLanguage: ['en', 'bn']
        },
        sameAs: [
          'https://www.facebook.com/dhakathaialcomaxxplc',
          'https://www.linkedin.com/company/dhakathai-alcomaxx-plc'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${base}/#website`,
        url: `${base}/`,
        name: SITE_NAME,
        publisher: { '@id': `${base}/#organization` },
        inLanguage: 'en'
      }
    ]
  }

  useHead({
    script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
  })
}
