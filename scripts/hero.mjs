// Gera as imagens da landing a partir dos scans em sources/
import sharp from 'sharp'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const src = (slug) => path.join(root, 'sources', `${slug}.jpg`)
const out = (name) => path.join(root, 'public', 'hero', name)

async function crop(slug, region, width, dest) {
  const input = src(slug)
  const meta = await sharp(input, { limitInputPixels: false }).metadata()
  await sharp(input, { limitInputPixels: false })
    .extract({
      left: Math.round(region.x * meta.width),
      top: Math.round(region.y * meta.height),
      width: Math.round(region.w * meta.width),
      height: Math.round(region.h * meta.height),
    })
    .resize(width)
    .jpeg({ quality: 82 })
    .toFile(dest)
  console.log(dest)
}

// herói: o céu da Noite Estrelada (redemoinho, lua e Vênus)
await crop('noite-estrelada', { x: 0.16, y: 0.02, w: 0.82, h: 0.66 }, 2600, out('hero-landing.jpg'))
// seção das lupas: o espelho convexo do Casal Arnolfini
await crop('casal-arnolfini', { x: 0.40, y: 0.245, w: 0.20, h: 0.155 }, 1200, out('detalhe-espelho.jpg'))
