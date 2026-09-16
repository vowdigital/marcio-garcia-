import { ArrowRight, CircleDot } from 'lucide-react'
import { CTAButton } from '../components/CTAButton'
import { ResponsiveImage } from '../components/ResponsiveImage'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { whatsappUrl } from '../data/content'

export function ComplementaryProcedures() {
  return (
    <section id="procedimentos" aria-labelledby="procedures-title" className="bg-white">
      <div className="container-shell section-space pb-16 md:pb-20">
        <Reveal>
          <SectionHeading
            eyebrow="Procedimentos complementares"
            title={<span id="procedures-title">Cuidado médico orientado por proporção, identidade e naturalidade.</span>}
            text="Cada possibilidade de tratamento é avaliada de acordo com as características e necessidades individuais."
            align="center"
            className="max-w-4xl"
          />
        </Reveal>
      </div>

      <div className="border-y border-navy-950/10 bg-[#F7F5F0]">
        <div className="container-shell grid items-stretch lg:grid-cols-2 lg:px-0 xl:max-w-[1360px]">
          <Reveal className="image-shell min-h-[30rem] lg:min-h-[44rem]" amount={0.1}>
            <ResponsiveImage
              name="facial"
              alt="Retrato do Dr. Márcio Garcia"
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="absolute inset-0"
              imgClassName="h-full w-full object-cover object-[50%_25%] transition-transform duration-1000 ease-premium hover:scale-[1.025]"
            />
          </Reveal>
          <Reveal className="flex items-center bg-[#F7F5F0] px-5 py-16 sm:px-10 lg:px-16 lg:py-20 xl:px-20">
            <div className="max-w-xl">
              <span className="font-display text-sm font-black text-champagne">01</span>
              <h3 className="display-h2 mt-5 text-navy-950">Preenchimento Facial</h3>
              <div className="body-copy mt-6 space-y-4 text-ink/62">
                <p>Os preenchimentos faciais podem ser utilizados para restaurar volumes, melhorar contornos e harmonizar proporções da face.</p>
                <p>Áreas como mandíbula, queixo, lábios, têmporas e outras regiões podem ser avaliadas de acordo com as características e necessidades de cada paciente.</p>
                <p className="font-bold text-navy-950/72">Todo planejamento busca preservar a identidade e as características individuais.</p>
              </div>
              <CTAButton href={whatsappUrl} external variant="outline-navy" className="mt-9">
                Saber mais
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-b border-navy-950/10 bg-mist">
        <div className="container-shell grid items-stretch lg:grid-cols-2 lg:px-0 xl:max-w-[1360px]">
          <Reveal className="order-2 flex items-center px-5 py-16 sm:px-10 lg:order-1 lg:px-16 lg:py-20 xl:px-20">
            <div className="max-w-xl">
              <span className="font-display text-sm font-black text-champagne">02</span>
              <h3 className="display-h2 mt-5 text-navy-950">Preenchimento Corporal</h3>
              <p className="body-copy mt-6 text-ink/62">
                O preenchimento corporal permite trabalhar determinadas regiões buscando aprimorar contornos e proporções de maneira individualizada.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3">
                {['Glúteos', 'Tórax masculino', 'Ombros', 'Outras regiões'].map((area) => (
                  <span key={area} className="flex items-center gap-2 text-sm font-bold text-navy-950/65">
                    <CircleDot size={12} strokeWidth={1.5} className="text-champagne" aria-hidden="true" />
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-7 text-sm leading-7 text-ink/55">
                O planejamento considera anatomia, proporção corporal e objetivo individual do paciente.
              </p>
              <CTAButton href={whatsappUrl} external className="mt-9">
                Agendar avaliação
              </CTAButton>
            </div>
          </Reveal>
          <Reveal className="image-shell order-1 min-h-[30rem] lg:order-2 lg:min-h-[44rem]" amount={0.1}>
            <ResponsiveImage
              name="body"
              alt="Dr. Márcio Garcia em retrato de corpo inteiro no consultório"
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="absolute inset-0"
              imgClassName="h-full w-full object-cover object-[52%_center] transition-transform duration-1000 ease-premium hover:scale-[1.025]"
            />
          </Reveal>
        </div>
      </div>

      <div className="bg-[#F7F5F0]">
        <div className="container-shell grid items-stretch lg:grid-cols-2 lg:px-0 xl:max-w-[1360px]">
          <Reveal className="relative image-shell min-h-[30rem] lg:min-h-[44rem]" amount={0.1}>
            <ResponsiveImage
              name="nanofat"
              className="absolute inset-0"
                alt="Dr. Márcio Garcia com equipamento médico de precisão"
                imgClassName="h-full w-full object-cover object-[50%_30%]"
              />
            <div aria-hidden="true" className="absolute -bottom-5 -right-5 h-36 w-36 border-b border-r border-champagne/60" />
          </Reveal>

          <Reveal className="flex items-center px-5 py-16 sm:px-10 lg:px-16 lg:py-20 xl:px-20" delay={0.08}>
            <div className="max-w-xl">
            <p className="eyebrow text-champagne">Medicina regenerativa</p>
            <div className="mt-5 flex items-end justify-between gap-5 border-b border-navy-950/10 pb-6">
              <h3 className="display-h2 text-navy-950">Nanofat</h3>
              <ArrowRight className="mb-2 hidden text-champagne sm:block" size={28} strokeWidth={1.2} aria-hidden="true" />
            </div>
            <div className="body-copy mt-7 space-y-5 text-ink/62">
              <p>O Nanofat é uma técnica que utiliza tecido adiposo do próprio paciente, submetido a um processo específico antes de sua aplicação.</p>
              <p>Na face, pode ser utilizado dentro de estratégias regenerativas voltadas à qualidade, textura e aparência global da pele.</p>
              <p className="border-l border-champagne pl-5 text-sm leading-7 text-ink/52">
                Trata-se de uma técnica inserida em estratégias regenerativas, e não de um preenchimento convencional.
              </p>
            </div>
            <CTAButton href={whatsappUrl} external variant="outline-navy" className="mt-9">
              Conversar sobre Nanofat
            </CTAButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
