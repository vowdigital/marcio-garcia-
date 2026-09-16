import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { WhatsAppButton } from './components/WhatsAppButton'
import { Bioplasty } from './sections/Bioplasty'
import { ClinicConsultation } from './sections/ClinicConsultation'
import { ComplementaryProcedures } from './sections/ComplementaryProcedures'
import { DifferentialsResults } from './sections/DifferentialsResults'
import { FAQ } from './sections/FAQ'
import { FinalCTA } from './sections/FinalCTA'
import { Hero } from './sections/Hero'
import { IntroductionDoctor } from './sections/IntroductionDoctor'
import { ProcessBenefits } from './sections/ProcessBenefits'

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-white px-4 py-3 text-sm font-bold text-navy-950 shadow-lg transition-transform focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <IntroductionDoctor />
        <ProcessBenefits />
        <Bioplasty />
        <ComplementaryProcedures />
        <DifferentialsResults />
        <ClinicConsultation />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
