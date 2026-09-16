import { whatsappUrl } from '../data/content'
import { WhatsAppIcon } from './WhatsAppIcon'

export function WhatsAppButton() {
  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Agendar minha consulta pelo WhatsApp"
        className="group fixed bottom-6 right-6 z-40 hidden size-14 place-items-center transition duration-500 ease-premium hover:-translate-y-1 md:grid"
      >
        <WhatsAppIcon className="size-14 transition-transform duration-500 ease-premium group-hover:scale-110" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy-950 p-2.5 md:hidden">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="flex min-h-12 items-center justify-center gap-3 bg-white px-5 font-display text-[0.72rem] font-bold uppercase tracking-[0.08em] text-navy-950"
        >
          <WhatsAppIcon className="size-5" />
          Agendar minha consulta
        </a>
      </div>
    </>
  )
}
