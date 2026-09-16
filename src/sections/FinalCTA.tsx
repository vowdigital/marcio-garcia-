import { LockKeyhole, MapPin } from 'lucide-react'
import { CTAButton } from '../components/CTAButton'
import { Reveal } from '../components/Reveal'
import { whatsappUrl } from '../data/content'

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="final-cta-bg relative min-h-[52rem] overflow-hidden bg-navy-950 text-white lg:min-h-[60rem]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/88 via-navy-950/48 to-transparent" />

      <div className="container-shell relative flex min-h-[52rem] items-center py-20 lg:min-h-[60rem] lg:py-28">
        <Reveal className="max-w-4xl">
          <p className="eyebrow text-champagne-light lg:text-sm">Atendimento individualizado</p>
          <h2 id="final-cta-title" className="display-h2 mt-5 max-w-[14ch] text-balance lg:text-[4.5rem]">
            Seu tratamento começa com uma avaliação.
          </h2>
          <p className="body-large mt-6 max-w-3xl text-white/68 lg:text-2xl">
            Converse com nossa equipe e agende um atendimento reservado com o Dr. Márcio Garcia.
          </p>
          <CTAButton href={whatsappUrl} external variant="light" className="mt-9 text-sm sm:min-w-64">
            Agendar minha consulta
          </CTAButton>
          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/52">
            <span className="inline-flex items-center gap-2">
              <LockKeyhole size={14} strokeWidth={1.5} aria-hidden="true" />
              Atendimento confidencial
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} strokeWidth={1.5} aria-hidden="true" />
              Londrina — Paraná
            </span>
            <span>(43) 98871-7584</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
