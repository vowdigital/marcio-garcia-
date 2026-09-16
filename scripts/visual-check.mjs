import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright-core'

const root = process.cwd()
const output = path.join(root, '.preview')
await mkdir(output, { recursive: true })

const browser = await chromium.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: true,
})

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
]

const reports = []

for (const viewport of viewports) {
  const page = await browser.newPage({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: 1,
    reducedMotion: 'reduce',
  })

  const consoleErrors = []
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text())
  })
  page.on('pageerror', (error) => consoleErrors.push(error.message))
  page.on('response', (response) => {
    if (response.status() >= 400) consoleErrors.push(`${response.status()} ${response.url()}`)
  })

  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  await page.evaluate(async () => {
    const pause = (duration) => new Promise((resolve) => setTimeout(resolve, duration))
    for (let y = 0; y < document.documentElement.scrollHeight; y += 650) {
      window.scrollTo(0, y)
      await pause(45)
    }
    window.scrollTo(0, 0)
  })
  await page.waitForFunction(
    () => [...document.images].every((image) => image.complete && image.naturalWidth > 0),
    undefined,
    { timeout: 15000 },
  )

  const metrics = await page.evaluate(() => ({
    innerWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    scrollHeight: document.documentElement.scrollHeight,
    h1Count: document.querySelectorAll('h1').length,
    images: document.images.length,
    incompleteImages: [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).length,
    interLoaded: document.fonts.check('900 48px Inter'),
    libreLoaded: document.fonts.check('500 16px "Libre Franklin"'),
  }))

  await page.screenshot({ path: path.join(output, `playwright-${viewport.name}.png`) })
  await page.screenshot({ path: path.join(output, `playwright-${viewport.name}-full.png`), fullPage: true })
  reports.push({ viewport, metrics, consoleErrors })
  await page.close()
}

await browser.close()
console.log(JSON.stringify(reports, null, 2))
