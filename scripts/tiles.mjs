// Gera pirâmides Deep Zoom (DZI) + thumbnails a partir dos scans em sources/.
// Uso: node scripts/tiles.mjs [slug]  (sem argumento processa todos)
import sharp from 'sharp'
import { readdirSync, mkdirSync, existsSync, rmSync } from 'node:fs'
import path from 'node:path'

const MAX_SIDE = 16000
// o tríptico de Bosch são três pinturas lado a lado: merece teto maior
const MAX_SIDE_POR_OBRA = { 'jardim-das-delicias': 20000 }
const TILE_SIZE = 512
const OVERLAP = 2
const QUALITY = 80
const THUMB_WIDTH = 1100

const root = path.resolve(import.meta.dirname, '..')
const sourcesDir = path.join(root, 'sources')
const onlySlug = process.argv[2]

const files = readdirSync(sourcesDir).filter((f) => /\.(jpe?g|png|tiff?)$/i.test(f))

for (const file of files) {
  const slug = path.parse(file).name
  if (onlySlug && slug !== onlySlug) continue

  const input = path.join(sourcesDir, file)
  const tilesDir = path.join(root, 'public', 'tiles', slug)
  const meta = await sharp(input, { limitInputPixels: false }).metadata()
  const maxSide = MAX_SIDE_POR_OBRA[slug] ?? MAX_SIDE
  const scale = Math.min(1, maxSide / Math.max(meta.width, meta.height))
  const width = Math.round(meta.width * scale)
  const height = Math.round(meta.height * scale)

  console.log(`${slug}: ${meta.width}x${meta.height} -> ${width}x${height}`)

  if (existsSync(tilesDir)) rmSync(tilesDir, { recursive: true })
  mkdirSync(tilesDir, { recursive: true })

  let pipeline = sharp(input, { limitInputPixels: false })
  if (scale < 1) pipeline = pipeline.resize(width, height)
  await pipeline
    .jpeg({ quality: QUALITY })
    .tile({ size: TILE_SIZE, overlap: OVERLAP, layout: 'dz' })
    .toFile(path.join(tilesDir, slug))

  await sharp(input, { limitInputPixels: false })
    .resize(THUMB_WIDTH)
    .jpeg({ quality: 80 })
    .toFile(path.join(root, 'public', 'thumbs', `${slug}.jpg`))

  console.log(`${slug}: tiles + thumb ok`)
}
