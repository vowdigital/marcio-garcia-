import { ArrowRight, Check, ShieldCheck } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { CTAButton } from '../components/CTAButton'
import { ResponsiveImage } from '../components/ResponsiveImage'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { benefits, indications, whatsappUrl } from '../data/content'

export function ProcessBenefits() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <section aria-labelledby="benefits-title" className="relative overflow-hidden bg-pearl section-space">
        <ResponsiveImage
          name="clinic-room"
          alt=""
          sizes="100vw"
          width={1290}
          height={1720}
          className="absolute inset-0"
          imgClassName="h-full w-full object-cover object-[50%_46%] opacity-25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-pearl/95 via-pearl/80 to-pearl/65"
        />

        <div className="container-shell relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Objetivos possíveis"
                title={<span id="benefits-title">Um procedimento pensado para respeitar sua anatomia.</span>}
                text="A indicação e as possibilidades são sempre discutidas de forma individual, sem fórmulas prontas."
              />
              <div className="mt-8 border-l border-champagne pl-5 text-sm leading-7 text-ink/55">
                Resultados podem variar de acordo com as características e a resposta individual de cada paciente.
              </div>
            </Reveal>

            <div className="grid gap-px bg-navy-950/10 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <motion.article
                  key={benefit.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.65, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  className="group bg-white/90 p-6 shadow-[0_14px_45px_rgba(7,24,33,0.08)] backdrop-blur-sm sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-black text-champagne">0{index + 1}</span>
                    <ArrowRight size={16} strokeWidth={1.4} className="text-navy-950/22 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 font-display text-xl font-bold tracking-[-0.025em] text-navy-950">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink/57">{benefit.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="indications-title" className="bg-navy-950 text-white">
        <div className="container-shell grid lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="py-20 md:py-28 lg:border-r lg:border-white/10 lg:py-32 lg:pr-16">
            <p className="eyebrow text-champagne-light">Indicação responsável</p>
            <h2 id="indications-title" className="display-h2 mt-5 text-balance">
              Para quem esse procedimento pode ser indicado?
            </h2>
            <p className="body-large mt-6 text-white/62">A indicação depende de avaliação médica individual.</p>
          </Reveal>

          <Reveal delay={0.08} className="pb-20 md:pb-28 lg:py-32 lg:pl-16">
            <ul className="space-y-1">
              {indications.map((item) => (
                <li key={item} className="flex gap-4 border-b border-white/10 py-5 text-sm leading-6 text-white/72 sm:text-base">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center border border-champagne/50 text-champagne-light">
                    <Check size={13} strokeWidth={2} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-7 flex gap-3 text-sm leading-7 text-white/48">
              <ShieldCheck size={19} strokeWidth={1.4} className="mt-1 shrink-0 text-champagne" aria-hidden="true" />
              A indicação, quantidade de produto e estratégia de tratamento são definidas somente após avaliação.
            </p>
            <CTAButton href={whatsappUrl} external variant="light" className="mt-9">
              Agendar minha avaliação
            </CTAButton>
          </Reveal>
        </div>
      </section>
    </>
  )
}
