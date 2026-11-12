import { readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const SITE = (process.env.DTL_SITE_URL || 'https://dhakathaibd.com').replace(/\/+$/, '')
const PAGES_DIR = 'app/pages'
const today = new Date().toISOString().slice(0, 10)

const PRIORITY = {
  '/': { p: '1.0', f: 'weekly' },
  '/about': { p: '0.9', f: 'monthly' },
  '/contact': { p: '0.9', f: 'monthly' },
  '/products': { p: '0.9', f: 'monthly' },
  '/online-catalogue': { p: '0.9', f: 'weekly' },
  '/dealer-list': { p: '0.9', f: 'monthly' },
  '/investors-relation': { p: '0.8', f: 'monthly' },
  '/news': { p: '0.8', f: 'weekly' },
  '/career': { p: '0.8', f: 'weekly' }
}

const routes = readdirSync(PAGES_DIR)
  .filter((f) => f.endsWith('.vue'))
  .map((f) => {
    const name = f.replace(/\.vue$/, '')
    return name === 'index' ? '/' : `/${name}`
  })
  .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)))

const urls = routes
  .map((route) => {
    const meta = PRIORITY[route] || { p: '0.6', f: 'monthly' }
    return [
      '  <url>',
      `    <loc>${SITE}${route}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      `    <changefreq>${meta.f}</changefreq>`,
      `    <priority>${meta.p}</priority>`,
      '  </url>'
    ].join('\n')
  })
  .join('\n')

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  urls,
  '</urlset>',
  ''
].join('\n')

writeFileSync('public/sitemap.xml', xml, 'utf8')
writeFileSync(
  'public/robots.txt',
  ['User-Agent: *', 'Allow: /', 'Disallow: /_nuxt/', '', `Sitemap: ${SITE}/sitemap.xml`, ''].join('\n'),
  'utf8'
)

console.log(`sitemap.xml: ${routes.length} URLs`)
