import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

const differentials = [
  'Segurança e qualidade',
  'Avaliação individualizada',
  'Atendimento personalizado',
  'Acompanhamento direto',
  'Privacidade e discrição',
  'Foco em naturalidade',
]

export function DifferentialsResults() {
  const reduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (reduceMotion) return

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % differentials.length)
    }, 3000)

    return () => window.clearInterval(interval)
  }, [reduceMotion])

  return (
    <>
      <section aria-labelledby="differentials-title" className="differentials-bg relative isolate py-16 text-white md:py-20 lg:py-24">
        <div
          className="absolute inset-0 bg-gradient-to-b from-navy-950/55 via-navy-950/38 to-navy-950/58"
          aria-hidden="true"
        />

        <div className="container-shell relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="Nossos princípios"
              title={<span id="differentials-title">Um atendimento construído em torno de você.</span>}
              text="Decisões cuidadosas, comunicação clara e uma experiência reservada em todas as etapas."
              light
              align="center"
              className="max-w-3xl"
            />
          </Reveal>

          <div className="relative mt-10 flex min-h-[13rem] items-center justify-center lg:mt-14 lg:min-h-[16rem]">
            <div className="relative -top-4 w-full text-center lg:-top-6">
              <div aria-hidden="true" className="mx-auto mb-8 h-px w-16 bg-champagne/80" />

              <AnimatePresence mode="wait" initial={false}>
                <motion.h3
                  key={differentials[activeIndex]}
                  initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -28 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  aria-live="polite"
                  className="display-h2 text-balance text-white"
                >
                  {differentials[activeIndex]}
                </motion.h3>
              </AnimatePresence>

              <div aria-hidden="true" className="mx-auto mt-8 h-px w-16 bg-champagne/80" />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="results-title" className="section-space bg-pearl">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Resultados e individualidade"
                title={<span id="results-title">Resultados que respeitam características individuais.</span>}
                text="Cada resultado é consequência de características anatômicas, planejamento, técnica utilizada e resposta individual de cada paciente."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border-t border-navy-950/15 pt-6">
                <p className="text-sm leading-7 text-ink/58">
                  Não existem resultados padronizados. A avaliação médica é o momento para compreender o que pode ser indicado e construir expectativas proporcionais para cada caso.
                </p>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.1em] text-navy-950/42">
                  Resultados podem variar individualmente.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid border-y border-navy-950/10 md:grid-cols-3">
            {[
              ['01', 'Anatomia'],
              ['02', 'Planejamento'],
              ['03', 'Resposta individual'],
            ].map(([number, label], index) => (
              <div
                key={number}
                className={`flex items-baseline gap-5 py-7 md:px-7 ${
                  index > 0 ? 'border-t border-navy-950/10 md:border-l md:border-t-0' : ''
                }`}
              >
                <span className="font-display text-3xl font-black tracking-[-0.05em] text-champagne">{number}</span>
                <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-navy-950/65">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
