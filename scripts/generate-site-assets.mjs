import sharp from 'sharp'
import { readFile, writeFile } from 'node:fs/promises'

const icon = await readFile('public/favicon.svg')
for (const [size, name] of [[180, 'apple-touch-icon'], [192, 'icon-192'], [512, 'icon-512']]) {
  await sharp(icon).resize(size, size).png().toFile(`public/images/${name}.png`)
}
const portrait = (await sharp('public/images/portrait-jrsa-dark.webp').png().toBuffer()).toString('base64')
const preview = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#1e1e1e"/>
<image href="data:image/png;base64,${portrait}" x="90" y="165" width="300" height="300"/>
<text x="450" y="265" fill="#e0e0e0" font-family="Arial,sans-serif" font-size="58" letter-spacing="-2">Ricardo Andrade</text>
<text x="454" y="320" fill="#aaa" font-family="Arial,sans-serif" font-size="26">R&amp;D engineer · Software developer</text>
<text x="454" y="365" fill="#aaa" font-family="Arial,sans-serif" font-size="22">Software, energy forecasting, and research.</text>
<text x="454" y="440" fill="#aaa" font-family="Arial,sans-serif" font-size="20">itsjrsa.com</text>
</svg>`
await writeFile('public/images/og-image.svg', preview)
await sharp(Buffer.from(preview)).png().toFile('public/images/og-image.png')
for (const theme of ['light', 'dark']) {
  await sharp(`public/images/portrait-jrsa-${theme}.webp`).resize(300, 300).webp({ quality: 85 }).toFile(`public/images/portrait-jrsa-${theme}-300.webp`)
}
