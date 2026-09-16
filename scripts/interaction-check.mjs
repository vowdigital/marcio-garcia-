import { chromium } from 'playwright-core'

const browser = await chromium.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: true,
})

const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
const errors = []
page.on('console', (message) => {
  if (message.type() === 'error') errors.push(message.text())
})
page.on('pageerror', (error) => errors.push(error.message))

await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' })
await page.waitForTimeout(2200)

const heroOpacity = await page.locator('.hero-reveal').first().evaluate((element) =>
  Number.parseFloat(getComputedStyle(element).opacity),
)

const menuButton = page.getByRole('button', { name: 'Abrir menu' })
await menuButton.click()
const menuExpanded = await page.getByRole('button', { name: 'Fechar menu' }).getAttribute('aria-expanded')
const mobileNavigationVisible = await page.locator('#mobile-navigation').isVisible()
await page.locator('#mobile-navigation').getByRole('link', { name: 'Dr. Márcio' }).click()
await page.waitForTimeout(600)
const menuClosed = await page.locator('#mobile-navigation').count() === 0

const secondFaq = page.locator('#faq-button-1')
await secondFaq.scrollIntoViewIfNeeded()
await secondFaq.click()
const faqExpanded = await secondFaq.getAttribute('aria-expanded')
const faqPanelVisible = await page.locator('#faq-panel-1').isVisible()

const whatsappLinks = await page.locator('a[href*="wa.me/5543988717584"]').count()
const invalidBlankTargets = await page.locator('a[target="_blank"]:not([rel*="noopener"])').count()

console.log(
  JSON.stringify(
    {
      heroOpacity,
      menuExpanded,
      mobileNavigationVisible,
      menuClosed,
      faqExpanded,
      faqPanelVisible,
      whatsappLinks,
      invalidBlankTargets,
      errors,
    },
    null,
    2,
  ),
)

await browser.close()
