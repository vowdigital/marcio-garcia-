import { ResponsiveImage } from '../components/ResponsiveImage'
import { Reveal } from '../components/Reveal'

export function IntroductionDoctor() {
  return (
    <section id="dr-marcio" aria-labelledby="introduction-title" className="bg-pearl py-20 md:py-28">
      <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-champagne">Medicina, estética e proporção</p>
            <h2 id="introduction-title" className="display-h2 mt-5 max-w-[18ch] text-balance text-navy-950">
              Cada paciente possui uma anatomia. Cada tratamento exige um planejamento.
            </h2>
            <p className="body-large mt-7 max-w-3xl text-navy-950">
              Na Clínica Dr. Márcio Garcia, os procedimentos são planejados de maneira individualizada, respeitando características anatômicas, objetivos pessoais e a busca por resultados naturais.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="relative lg:justify-self-end">
            <div className="image-shell aspect-[4/5] w-full max-w-md">
              <ResponsiveImage
                name="introduction"
                alt="Dr. Márcio Garcia em seu consultório"
                imgClassName="h-full w-full object-cover object-[48%_center] transition-transform duration-1000 ease-premium hover:scale-[1.025]"
              />
            </div>
            <div className="absolute -bottom-6 -left-5 bg-navy-950 p-5 text-white sm:-left-10 sm:p-6">
              <span className="font-display text-3xl font-black tracking-[-0.04em]">01</span>
              <span className="ml-4 text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-white/55">
                Paciente por vez
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
