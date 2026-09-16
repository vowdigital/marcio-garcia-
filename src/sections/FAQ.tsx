import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { faqs } from '../data/content'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const reduceMotion = useReducedMotion()

  return (
    <section id="duvidas" aria-labelledby="faq-title" className="section-space bg-white">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20 xl:gap-28">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Perguntas frequentes"
              title={<span id="faq-title">Informação clara para uma decisão consciente.</span>}
              text="As respostas abaixo apresentam informações gerais. Definições específicas dependem de avaliação individual."
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="border-t border-navy-950/15">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex
              const buttonId = `faq-button-${index}`
              const panelId = `faq-panel-${index}`

              return (
                <div key={faq.question} className="border-b border-navy-950/15">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                    >
                      <span className="font-display text-base font-bold leading-6 tracking-[-0.018em] text-navy-950 sm:text-lg">
                        {faq.question}
                      </span>
                      <span className={`grid size-9 shrink-0 place-items-center border transition-colors ${isOpen ? 'border-navy-950 bg-navy-950 text-white' : 'border-navy-950/18 text-navy-950 group-hover:border-champagne group-hover:text-champagne'}`}>
                        {isOpen ? <Minus size={15} aria-hidden="true" /> : <Plus size={15} aria-hidden="true" />}
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 pr-12 text-sm leading-7 text-ink/60 sm:text-base sm:leading-8">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
