// Valida visualmente as coordenadas das lupas de uma obra:
// gera uma prancha (montagem) com o recorte de cada lupa, rotulado com o id.
// Uso: node scripts/crop.mjs <slug>            -> check/<slug>.jpg (prancha com todas as lupas)
//      node scripts/crop.mjs <slug> x y w h    -> check/<slug>-region.jpg (recorte avulso)
import sharp from 'sharp'
import { mkdirSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = path.resolve(import.meta.dirname, '..')
const slug = process.argv[2]
if (!slug) {
  console.error('uso: node scripts/crop.mjs <slug> [x y w h]')
  process.exit(1)
}

const sourceFile = readdirSync(path.join(root, 'sources')).find((f) => path.parse(f).name === slug)
if (!sourceFile) {
  console.error(`fonte não encontrada em sources/ para ${slug}`)
  process.exit(1)
}
const input = path.join(root, 'sources', sourceFile)
mkdirSync(path.join(root, 'check'), { recursive: true })

const meta = await sharp(input, { limitInputPixels: false }).metadata()

function regionPixels({ x, y, w, h }) {
  const left = Math.max(0, Math.round(x * meta.width))
  const top = Math.max(0, Math.round(y * meta.height))
  return {
    left,
    top,
    width: Math.min(Math.round(w * meta.width), meta.width - left),
    height: Math.min(Math.round(h * meta.height), meta.height - top),
  }
}

async function extract(region, size = 460) {
  return sharp(input, { limitInputPixels: false })
    .extract(regionPixels(region))
    .resize(size, size, { fit: 'inside' })
    .jpeg({ quality: 85 })
    .toBuffer()
}

if (process.argv.length >= 7) {
  const [x, y, w, h] = process.argv.slice(3, 7).map(Number)
  const out = path.join(root, 'check', `${slug}-region.jpg`)
  await sharp(await extract({ x, y, w, h }, 700)).toFile(out)
  console.log(out)
  process.exit(0)
}

const dataPath = path.join(root, 'src', 'data', 'obras', `${slug}.js`)
const obra = (await import(pathToFileURL(dataPath))).default
const lupas = obra.lupas
if (!lupas?.length) {
  console.error(`${slug} não tem lupas definidas`)
  process.exit(1)
}

const CELL = 480
const LABEL = 36
const cols = Math.min(3, lupas.length)
const rows = Math.ceil(lupas.length / cols)
const composites = []

for (let i = 0; i < lupas.length; i++) {
  const lupa = lupas[i]
  const buf = await extract(lupa, CELL - 20)
  const img = sharp(buf)
  const m = await img.metadata()
  const col = i % cols
  const row = Math.floor(i / cols)
  composites.push({
    input: buf,
    left: col * CELL + Math.round((CELL - m.width) / 2),
    top: row * (CELL + LABEL) + LABEL + Math.round((CELL - 20 - m.height) / 2),
  })
  const label = Buffer.from(
    `<svg width="${CELL}" height="${LABEL}"><text x="10" y="26" font-size="22" font-family="Arial" fill="#ffffff">${i + 1}. ${lupa.id}</text></svg>`
  )
  composites.push({ input: label, left: col * CELL, top: row * (CELL + LABEL) })
}

const out = path.join(root, 'check', `${slug}.jpg`)
await sharp({
  create: {
    width: cols * CELL,
    height: rows * (CELL + LABEL),
    channels: 3,
    background: { r: 20, g: 18, b: 14 },
  },
})
  .composite(composites)
  .jpeg({ quality: 85 })
  .toFile(out)
console.log(out)
