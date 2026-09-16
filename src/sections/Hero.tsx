import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LockKeyhole, MapPin } from 'lucide-react'
import { useLayoutEffect, useRef } from 'react'
import { CTAButton } from '../components/CTAButton'
import { ResponsiveImage } from '../components/ResponsiveImage'
import { whatsappUrl } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
      timeline
        .from('.hero-visual', { opacity: 0.5, duration: 1.15 })
        .from('.hero-reveal', { opacity: 0.38, y: 28, duration: 0.78, stagger: 0.1 }, '-=0.82')
        .from('.hero-feature', { opacity: 0.42, y: 18, duration: 0.72 }, '-=0.4')

      gsap.to('.hero-image', {
        yPercent: 7,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, section)

    return () => context.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="inicio"
      aria-labelledby="hero-title"
      className="relative min-h-[100svh] overflow-hidden bg-navy-950 text-white"
    >
      <div className="grid min-h-[100svh] lg:grid-cols-[55%_45%]">
        <div className="relative z-10 flex items-center pt-28 pb-12 lg:pt-32 lg:pb-28">
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-28 top-[18%] size-[32rem] rounded-full border border-white/[0.035]" />
            <div className="absolute -left-5 top-[26%] size-[20rem] rounded-full border border-champagne/[0.055]" />
            <div className="absolute bottom-0 right-0 h-px w-1/2 bg-gradient-to-r from-transparent to-champagne/30" />
          </div>

          <div className="container-shell relative lg:pr-10 xl:pl-[max(4rem,calc((100vw-1360px)/2+4rem))]">
            <div className="max-w-[46rem] lg:max-w-[43rem]">
              <p className="hero-reveal eyebrow text-champagne-light">Dr. Márcio Garcia · Londrina</p>
              <h1 id="hero-title" className="hero-reveal display-h1 mt-6 max-w-[13ch] text-balance">
                Naturalidade, discrição e segurança em cada detalhe.
              </h1>
              <p className="hero-reveal mt-6 max-w-[39rem] text-base leading-[1.7] text-white/67 sm:text-lg">
                Procedimentos de preenchimento realizados com planejamento individualizado, acompanhamento médico e foco em resultados proporcionais à anatomia de cada paciente.
              </p>

              <div className="hero-reveal mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton
                  href={whatsappUrl}
                  external
                  variant="light"
                  ariaLabel="Agendar avaliação pelo WhatsApp"
                >
                  Agendar avaliação
                </CTAButton>
                <CTAButton href="#bioplastia" variant="outline-light">
                  Conhecer o procedimento
                </CTAButton>
              </div>

              <div className="hero-reveal mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/50">
                <span className="inline-flex items-center gap-2">
                  <LockKeyhole size={13} strokeWidth={1.6} aria-hidden="true" />
                  Atendimento confidencial
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={13} strokeWidth={1.6} aria-hidden="true" />
                  Londrina — PR
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual relative z-20 min-h-[54svh] lg:min-h-full">
          <ResponsiveImage
            name="hero"
            alt="Retrato profissional do Dr. Márcio Garcia"
            eager
            sizes="(max-width: 1023px) 100vw, 45vw"
            className="absolute inset-0"
            imgClassName="hero-image absolute -top-[7%] left-0 h-[114%] w-full object-cover object-[50%_32%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/20 via-transparent to-navy-950/55 lg:bg-gradient-to-r lg:from-navy-950/25 lg:via-transparent lg:to-transparent" />

          <div className="hero-feature absolute inset-x-5 bottom-6 z-30 border border-white/20 bg-navy-950/90 p-5 backdrop-blur-md sm:inset-x-auto sm:bottom-8 sm:left-8 sm:max-w-sm lg:bottom-10 lg:-left-10">
            <p className="eyebrow text-champagne-light">Bioplastia íntima masculina</p>
            <p className="mt-3 text-sm leading-6 text-white/72">
              Uma abordagem médica e individualizada para homens que buscam melhora de volume e proporção com discrição.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-20 hidden h-16 w-[55%] items-end px-12 pb-5 lg:flex">
        <span className="eyebrow text-[0.6rem] text-white/32">Role para descobrir</span>
        <span className="ml-5 h-px flex-1 bg-white/15" />
      </div>
    </section>
  )
}
