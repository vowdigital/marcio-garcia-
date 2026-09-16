import { AtSign } from 'lucide-react'
import { navigation, whatsappUrl } from '../data/content'
import { Brand } from './Brand'
import { WhatsAppIcon } from './WhatsAppIcon'

export function Footer() {
  return (
    <footer className="bg-[#041017] pb-24 pt-16 text-white md:pb-10 md:pt-20">
      <div className="container-shell">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-20">
          <div>
            <Brand light />
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
              Atendimento médico individualizado, com privacidade, discrição e planejamento em Londrina — Paraná.
            </p>
          </div>

          <div>
            <p className="eyebrow text-champagne-light">Navegação</p>
            <ul className="mt-5 space-y-3">
              {navigation.slice(1).map((item) => (
                <li key={item.href}>
                  <a className="text-sm text-white/58 transition-colors hover:text-white" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-champagne-light">Contato</p>
            <div className="mt-5 space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-white"
              >
                <WhatsAppIcon className="size-5" />
                (43) 98871-7584
              </a>
              <a
                href="https://www.instagram.com/drmarciogarciajr"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-white"
              >
                <AtSign size={17} strokeWidth={1.5} />
                @drmarciogarciajr
              </a>
              <a
                href="https://www.instagram.com/instituto.marciogarcia/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-white"
              >
                <AtSign size={17} strokeWidth={1.5} />
                @instituto.marciogarcia
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-[0.68rem] leading-5 text-white/38 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p>© {new Date().getFullYear()} Clínica Dr. Márcio Garcia. Todos os direitos reservados.</p>
            <p className="mt-1">Conteúdo informativo. A indicação de procedimentos depende de avaliação médica.</p>
          </div>
          <div className="border-l border-champagne/40 pl-4">
            <p className="font-bold uppercase tracking-[0.12em] text-white/50">Dados profissionais</p>
            <p>Espaço reservado para CRM/RQE após validação.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
