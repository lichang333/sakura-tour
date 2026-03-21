import sharp from 'sharp'
import { readFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const svgPath = join(__dirname, 'icon.svg')
const publicDir = join(__dirname, '../public')
const svg = readFileSync(svgPath)

mkdirSync(publicDir, { recursive: true })

const sizes = [
  { size: 512, name: 'icon-512.png' },
  { size: 192, name: 'icon-192.png' },
  { size: 180, name: 'apple-touch-icon.png' },  // iOS home screen
  { size: 32,  name: 'favicon-32.png' },
]

for (const { size, name } of sizes) {
  await sharp(svg)
    .resize(size, size)
    .png()
    .toFile(join(publicDir, name))
  console.log(`✅ Generated ${name} (${size}x${size})`)
}

// Also generate favicon.ico (32px)
await sharp(svg)
  .resize(32, 32)
  .png()
  .toFile(join(publicDir, 'favicon.png'))
console.log('✅ Generated favicon.png')

console.log('\n🌸 All icons generated!')
