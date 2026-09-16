import { chromium } from 'playwright-core'

const browser = await chromium.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: true,
})

const widths = [360, 390, 430, 768, 1024, 1280, 1440]
const results = []

for (const width of widths) {
  const page = await browser.newPage({
    viewport: { width, height: width < 768 ? 844 : 900 },
    reducedMotion: 'reduce',
  })
  const errors = []
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('pageerror', (error) => errors.push(error.message))

  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' })
  const layout = await page.evaluate(() => ({
    viewport: window.innerWidth,
    documentWidth: document.documentElement.scrollWidth,
    bodyWidth: document.body.scrollWidth,
    h1Count: document.querySelectorAll('h1').length,
    mainVisible: document.querySelector('main')?.getBoundingClientRect().width === window.innerWidth,
  }))

  results.push({ width, layout, errors })
  await page.close()
}

await browser.close()
console.log(JSON.stringify(results, null, 2))
