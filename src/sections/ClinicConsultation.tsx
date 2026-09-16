import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'
import { ResponsiveImage } from '../components/ResponsiveImage'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

gsap.registerPlugin(ScrollTrigger)

export function ClinicConsultation() {
  const clinicRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const section = clinicRef.current
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.clinic-parallax').forEach((image, index) => {
        gsap.fromTo(
          image,
          { yPercent: index === 0 ? -4 : -2 },
          {
            yPercent: index === 0 ? 4 : 3,
            ease: 'none',
            scrollTrigger: {
              trigger: image,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.1,
            },
          },
        )
      })
    }, section)

    return () => context.revert()
  }, [])

  return (
    <section ref={clinicRef} id="clinica" aria-labelledby="clinic-title" className="section-space bg-white">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Instituto Márcio Garcia"
              title={<span id="clinic-title">Uma estrutura pensada para oferecer conforto, privacidade e segurança.</span>}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="body-large text-ink/62">
              Localizada em Londrina, a clínica oferece uma estrutura profissional preparada para proporcionar uma experiência reservada e personalizada durante todas as etapas do atendimento.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              {['Londrina — PR', 'Atendimento personalizado', 'Estrutura profissional', 'Privacidade'].map((item) => (
                <span key={item} className="text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-navy-950/52">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 lg:mt-20 lg:grid-cols-4 lg:grid-rows-2">
          {[
            { name: 'clinic-main', alt: 'Área de atendimento da Clínica Dr. Márcio Garcia' },
            { name: 'clinic-room', alt: 'Sala reservada da Clínica Dr. Márcio Garcia' },
            { name: 'clinic-detail', alt: 'Detalhe da recepção da Clínica Dr. Márcio Garcia' },
            { name: 'clinic-lounge', alt: 'Lounge da Clínica Dr. Márcio Garcia' },
            { name: 'clinic-treatment', alt: 'Ambiente de atendimento da Clínica Dr. Márcio Garcia' },
            { name: 'clinic-chair', alt: 'Poltrona de atendimento da Clínica Dr. Márcio Garcia' },
            { name: 'clinic-waiting', alt: 'Área de espera da Clínica Dr. Márcio Garcia' },
            { name: 'clinic-care', alt: 'Sala de cuidado da Clínica Dr. Márcio Garcia' },
          ].map((image, index) => (
            <Reveal
              key={image.name}
              className="image-shell col-span-1 aspect-[3/4]"
              delay={index * 0.04}
              amount={0.08}
            >
              <ResponsiveImage
                name={image.name}
                alt={image.alt}
                sizes="(max-width: 639px) 50vw, 25vw"
                className="absolute inset-0"
                imgClassName="clinic-parallax absolute -top-[8%] h-[116%] w-full object-cover object-center transition-transform duration-1000 ease-premium hover:scale-[1.025]"
              />
              <span
                aria-hidden="true"
                className="absolute right-3 top-3 border border-white/35 bg-navy-950/55 px-2 py-1 font-display text-[0.58rem] font-bold tracking-[0.12em] text-white backdrop-blur-sm"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
