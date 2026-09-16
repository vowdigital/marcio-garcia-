import { copyFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const output = path.join(root, 'public', 'assets')
const imageOutput = path.join(output, 'images')
const fontOutput = path.join(output, 'fonts')

await Promise.all([
  mkdir(imageOutput, { recursive: true }),
  mkdir(fontOutput, { recursive: true }),
])

const fonts = [
  ['@fontsource/inter', 'inter-latin-700-normal.woff2'],
  ['@fontsource/inter', 'inter-latin-700-italic.woff2'],
  ['@fontsource/inter', 'inter-latin-800-normal.woff2'],
  ['@fontsource/inter', 'inter-latin-900-normal.woff2'],
  ['@fontsource/inter', 'inter-latin-900-italic.woff2'],
  ['@fontsource/libre-franklin', 'libre-franklin-latin-500-normal.woff2'],
  ['@fontsource/libre-franklin', 'libre-franklin-latin-700-normal.woff2'],
  ['@fontsource/libre-franklin', 'libre-franklin-latin-800-normal.woff2'],
]

await Promise.all(
  fonts.map(([family, filename]) =>
    copyFile(
      path.join(root, 'node_modules', family, 'files', filename),
      path.join(fontOutput, filename),
    ),
  ),
)

const doctorFolder = path.join(root, 'assets', 'Dr Marcio - Ensaio Profissional_')
const clinicFolder = path.join(root, 'assets', 'Fotos consultório_')

const images = [
  ['hero', path.join(doctorFolder, 'L88A6755-Editar.jpg')],
  ['introduction', path.join(doctorFolder, 'L88A7203-Editar.jpg')],
  ['doctor', path.join(doctorFolder, 'L88A7347-Editar-2.jpg')],
  ['bioplasty', path.join(doctorFolder, 'L88A7535-Editar-2.jpg')],
  ['facial', path.join(doctorFolder, 'L88A7111-Editar-2.jpg')],
  ['body', path.join(doctorFolder, 'L88A7367-Editar-2.jpg')],
  ['nanofat', path.join(doctorFolder, 'L88A7549-Editar-2.jpg')],
  ['final', path.join(doctorFolder, 'L88A7498-Editar-2.jpg')],
  ['clinic-main', path.join(clinicFolder, 'IMG_2006.PNG')],
  ['clinic-room', path.join(clinicFolder, 'IMG_2009.PNG')],
  ['clinic-care', path.join(clinicFolder, 'IMG_1992.PNG')],
  ['clinic-detail', path.join(clinicFolder, 'IMG_2005.PNG')],
  ['clinic-lounge', path.join(clinicFolder, 'IMG_2007.PNG')],
  ['clinic-treatment', path.join(clinicFolder, 'IMG_1994.PNG')],
  ['clinic-chair', path.join(clinicFolder, 'IMG_1996.PNG')],
  ['clinic-waiting', path.join(clinicFolder, 'IMG_2003.PNG')],
]

for (const [name, source] of images) {
  const prepare = () => {
    const pipeline = sharp(source).rotate()
    return source.startsWith(clinicFolder)
      ? pipeline.trim({ background: { r: 0, g: 0, b: 0, alpha: 1 }, threshold: 8 })
      : pipeline
  }

  await Promise.all([
    prepare()
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 84, effort: 5 })
      .toFile(path.join(imageOutput, `${name}.webp`)),
    prepare()
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(path.join(imageOutput, `${name}-sm.webp`)),
  ])
}

console.log(`Prepared ${fonts.length} font files and ${images.length * 2} responsive images.`)
