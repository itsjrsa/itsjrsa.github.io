import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import { pages, canonicalUrl } from '../src/data/seo.js'

for (const path of Object.keys(pages)) {
  const html = await readFile(`dist${path === '/' ? '' : path}/index.html`, 'utf8')
  assert.match(html, /<main[^>]*id="main-content"/)
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${path}: one page heading`)
  assert.ok(html.includes(`rel="canonical" href="${canonicalUrl(path)}"`), `${path}: correct canonical`)
  assert.ok(!html.includes('opacity:0'), `${path}: prerendered content must be visible`)
  assert.ok(!html.includes('cdnjs.cloudflare.com'), `${path}: no external icon font`)
  assert.ok(!html.includes('sessionStorage.redirect'), `${path}: no 404 redirect workaround`)
  for (const [, url] of html.matchAll(/(?:src|href)="(\/[^"?#]*)"/g)) {
    const file = url.endsWith('/') ? `${url}index.html` : url
    // Router links without an extension resolve to prerendered directories.
    await access(`dist${file}`).catch(() => access(`dist${file}/index.html`))
  }
}
const notFound = await readFile('dist/404.html', 'utf8')
assert.match(notFound, /content="noindex,follow"/)
assert.doesNotMatch(notFound, /http-equiv="refresh"/)
const manifest = JSON.parse(await readFile('dist/site.webmanifest', 'utf8'))
for (const icon of manifest.icons) await access(`dist${icon.src}`)
for (const asset of ['favicon.ico', 'favicon.svg', 'images/apple-touch-icon.png', 'images/og-image.png', 'sitemap.xml', 'robots.txt']) await access(`dist/${asset}`)
console.log('Static routes, metadata, landmarks, local links, icons, and 404 checks passed.')
