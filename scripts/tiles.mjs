// Gera pirâmides Deep Zoom (DZI) + thumbnails a partir dos scans em sources/.
// Uso: node scripts/tiles.mjs [slug] [--dest <dirTiles>] [--max <px>]
//   --dest: para onde vão os tiles (default public/tiles do repo principal;
//           para obras de acervo, apontar para o working copy do repo satélite)
//   --max:  teto do lado maior em px (default 16000; obras de acervo usam 12000)
// As thumbnails vão sempre para public/thumbs do repo principal.
import sharp from 'sharp'
import { readdirSync, mkdirSync, existsSync, rmSync } from 'node:fs'
import path from 'node:path'

const TILE_SIZE = 512
const OVERLAP = 2
const QUALITY = 80
const THUMB_WIDTH = 1100

// o tríptico de Bosch são três pinturas lado a lado: merece teto maior
const MAX_SIDE_POR_OBRA = { 'jardim-das-delicias': 20000 }

const root = path.resolve(import.meta.dirname, '..')
const sourcesDir = path.join(root, 'sources')

const args = process.argv.slice(2)
const slugsAlvo = []
let destDir = path.join(root, 'public', 'tiles')
let maxSideDefault = 16000
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--dest') destDir = path.resolve(args[++i])
  else if (args[i] === '--max') maxSideDefault = parseInt(args[++i], 10)
  else slugsAlvo.push(args[i])
}

const files = readdirSync(sourcesDir).filter((f) => /\.(jpe?g|png|tiff?)$/i.test(f))

for (const file of files) {
  const slug = path.parse(file).name
  if (slugsAlvo.length && !slugsAlvo.includes(slug)) continue

  const input = path.join(sourcesDir, file)
  const tilesDir = path.join(destDir, slug)
  const meta = await sharp(input, { limitInputPixels: false }).metadata()
  const maxSide = MAX_SIDE_POR_OBRA[slug] ?? maxSideDefault
  const scale = Math.min(1, maxSide / Math.max(meta.width, meta.height))
  const width = Math.round(meta.width * scale)
  const height = Math.round(meta.height * scale)

  console.log(`${slug}: ${meta.width}x${meta.height} -> ${width}x${height} (${tilesDir})`)

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
