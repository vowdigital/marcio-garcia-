import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navigation, whatsappUrl } from '../data/content'
import { Brand } from './Brand'
import { CTAButton } from './CTAButton'
import { WhatsAppIcon } from './WhatsAppIcon'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const light = !scrolled && !menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ease-premium ${
        scrolled || menuOpen
          ? 'border-navy-950/8 bg-pearl/95 shadow-[0_10px_40px_rgba(7,24,33,0.06)] backdrop-blur-xl'
          : 'border-white/20 bg-navy-950/38 backdrop-blur-md'
      }`}
    >
      <div className="container-shell flex h-[4.75rem] items-center justify-between gap-5 lg:h-20">
        <a href="#inicio" aria-label="Ir para o início" onClick={() => setMenuOpen(false)}>
          <Brand light={light} />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 xl:flex 2xl:gap-8">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative py-2 text-[0.78rem] font-extrabold tracking-[0.025em] transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-champagne after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100 ${
                light ? 'text-white/92 hover:text-white' : 'text-navy-950/80 hover:text-navy-950'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <CTAButton
              href={whatsappUrl}
              external
              variant={light ? 'light' : 'navy'}
              ariaLabel="Agendar avaliação pelo WhatsApp"
            >
              Agendar avaliação
            </CTAButton>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Abrir WhatsApp"
            className={`grid size-11 place-items-center border transition-colors lg:hidden ${
              light ? 'border-white/25 text-white' : 'border-navy-950/15 text-navy-950'
            }`}
          >
            <WhatsAppIcon className="size-5" />
          </a>
          <button
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className={`grid size-11 place-items-center border transition-colors xl:hidden ${
              light ? 'border-white/25 text-white' : 'border-navy-950/15 text-navy-950'
            }`}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Navegação mobile"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-navy-950/8 bg-pearl xl:hidden"
          >
            <div className="container-shell flex max-h-[calc(100svh-4.75rem)] flex-col overflow-y-auto py-6">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.35 }}
                  className="border-b border-navy-950/10 py-4 font-display text-xl font-bold tracking-[-0.025em] text-navy-950"
                >
                  {item.label}
                </motion.a>
              ))}
              <CTAButton href={whatsappUrl} external className="mt-6 w-full">
                Agendar avaliação
              </CTAButton>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
