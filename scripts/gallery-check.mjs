import { chromium } from 'playwright-core'

const browser = await chromium.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: true,
})

for (const [name, width] of [['desktop', 1440], ['mobile', 390]]) {
  const page = await browser.newPage({
    viewport: { width, height: width < 768 ? 844 : 900 },
    reducedMotion: 'reduce',
  })
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' })
  await page.locator('#clinica').scrollIntoViewIfNeeded()
  await page.waitForTimeout(250)
  await page.evaluate(async () => {
    const pause = (duration) => new Promise((resolve) => setTimeout(resolve, duration))
    const section = document.querySelector('#clinica')
    if (!section) return
    const top = section.getBoundingClientRect().top + window.scrollY
    const bottom = top + section.getBoundingClientRect().height
    for (let y = top; y < bottom; y += 500) {
      window.scrollTo(0, y)
      await pause(60)
    }
  })
  await page.waitForFunction(
    () => [...document.querySelectorAll('#clinica img')].every((image) => image.complete && image.naturalWidth > 0),
    undefined,
    { timeout: 15000 },
  )
  await page.locator('#clinica').screenshot({ path: `.preview/clinic-mosaic-${name}.png` })
  await page.close()
}

await browser.close()
