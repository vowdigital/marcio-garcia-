import { LockKeyhole, MoveHorizontal, ScanLine } from 'lucide-react'
import { CTAButton } from '../components/CTAButton'
import { ResponsiveImage } from '../components/ResponsiveImage'
import { Reveal } from '../components/Reveal'
import { whatsappUrl } from '../data/content'

export function Bioplasty() {
  return (
    <section id="bioplastia" aria-labelledby="bioplasty-title" className="relative overflow-hidden bg-mist">
      <div className="grid lg:min-h-[52rem] lg:grid-cols-[43%_57%]">
        <Reveal className="relative min-h-[32rem] overflow-hidden lg:min-h-full" amount={0.08}>
          <ResponsiveImage
            name="bioplasty"
            alt="Dr. Márcio Garcia com vestimenta médica em ambiente profissional"
            sizes="(max-width: 1023px) 100vw, 43vw"
            className="absolute inset-0"
            imgClassName="h-full w-full object-cover object-[52%_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/65 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-6 right-6 border-l border-champagne-light/60 pl-5 text-white sm:bottom-10 sm:left-10">
            <p className="eyebrow text-champagne-light">Privacidade como princípio</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/68">
              Uma conversa reservada para compreender objetivos e avaliar possibilidades.
            </p>
          </div>
        </Reveal>

        <div className="flex items-center py-20 md:py-28 lg:py-32">
          <div className="w-full px-5 sm:px-8 lg:px-14 xl:px-20 2xl:pr-[max(5rem,calc((100vw-1360px)/2+4rem))]">
            <Reveal className="max-w-3xl">
              <p className="eyebrow text-champagne">Bioplastia íntima masculina</p>
              <h2 id="bioplasty-title" className="display-h2 mt-5 text-balance text-navy-950">
                Planejamento individualizado para quem busca volume, proporção e naturalidade.
              </h2>

              <div className="body-copy mt-7 space-y-5 text-ink/65">
                <p>
                  O preenchimento peniano é um procedimento minimamente invasivo realizado principalmente com ácido hialurônico e pode ser indicado para homens que desejam aumentar o volume e, especialmente, a circunferência da região.
                </p>
                <p>
                  A quantidade de produto e a técnica utilizada são definidas individualmente, considerando a anatomia, as características de cada paciente e seus objetivos.
                </p>
                <p>
                  O objetivo é buscar um resultado proporcional e natural, preservando a funcionalidade da região.
                </p>
              </div>

              <div className="mt-9 grid gap-px bg-navy-950/10 sm:grid-cols-3">
                {[
                  { icon: ScanLine, label: 'Anatomia avaliada' },
                  { icon: MoveHorizontal, label: 'Proporção planejada' },
                  { icon: LockKeyhole, label: 'Atendimento reservado' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 bg-mist px-4 py-5 text-navy-950">
                    <Icon size={19} strokeWidth={1.4} className="text-champagne" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-[0.08em]">{label}</span>
                  </div>
                ))}
              </div>

              <CTAButton href={whatsappUrl} external className="mt-10">
                Agendar minha consulta
              </CTAButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
