import { build } from 'vite'
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { pages, aliases, notFound, canonicalUrl, siteUrl, structuredData } from '../src/data/seo.js'

const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const temporary = resolve('.prerender')
try {
  await build()
  const template = await readFile('dist/index.html', 'utf8')
  await build({ build: { ssr: 'src/entry-server.jsx', outDir: temporary, copyPublicDir: false } })
  const { render } = await import(pathToFileURL(resolve(temporary, 'entry-server.js')))
  for (const [path, page] of Object.entries({ ...pages, '/404': notFound })) {
    const is404 = path === '/404'
    const url = canonicalUrl(path)
    const meta = `<title>${escape(page.title)}</title>
    <meta name="description" content="${escape(page.description)}">
    <meta name="robots" content="${is404 ? 'noindex,follow' : 'index,follow'}">
    <link rel="canonical" href="${url}">
    <meta property="og:title" content="${escape(page.title)}">
    <meta property="og:description" content="${escape(page.description)}">
    <meta property="og:url" content="${url}">
    <meta name="twitter:title" content="${escape(page.title)}">
    <meta name="twitter:description" content="${escape(page.description)}">
    ${path === '/' ? `<script type="application/ld+json">${JSON.stringify(structuredData).replaceAll('<', '\\u003c')}</script>` : ''}`
    const html = template.replace(/<!--page-meta:start-->[\s\S]*?<!--page-meta:end-->/, meta)
      .replace('<div id="root"></div>', `<div id="root">${render(path)}</div>`)
    const directory = path === '/' || is404 ? 'dist' : `dist${path}`
    await mkdir(directory, { recursive: true })
    await writeFile(`${directory}/${is404 ? '404' : 'index'}.html`, html)
  }
  for (const [from, to] of Object.entries(aliases)) {
    await mkdir(`dist${from}`, { recursive: true })
    await writeFile(`dist${from}/index.html`, `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Redirecting — Ricardo Andrade</title><link rel="canonical" href="${canonicalUrl(to)}"><meta http-equiv="refresh" content="0;url=${to}/"></head><body><a href="${to}/">Continue to ${pages[to].title}</a></body></html>`)
  }
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.keys(pages).map(path => `<url><loc>${canonicalUrl(path)}</loc></url>`).join('')}</urlset>\n`)
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)
  console.log('Prerendered all routes, redirects, sitemap, and 404 page.')
} finally {
  await rm(temporary, { recursive: true, force: true })
}
