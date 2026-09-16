import type { ReactNode } from 'react'
import { WhatsAppIcon } from './WhatsAppIcon'

type CTAButtonProps = {
  href: string
  children: ReactNode
  variant?: 'light' | 'navy' | 'outline-light' | 'outline-navy'
  className?: string
  external?: boolean
  ariaLabel?: string
}

const variants = {
  light: 'bg-white text-navy-950 hover:bg-champagne-light',
  navy: 'bg-navy-950 text-white hover:bg-navy-800',
  'outline-light': 'border border-white/35 text-white hover:border-white hover:bg-white/10',
  'outline-navy': 'border border-navy-950/20 text-navy-950 hover:border-navy-950 hover:bg-navy-950 hover:text-white',
}

export function CTAButton({
  href,
  children,
  variant = 'navy',
  className = '',
  external = false,
  ariaLabel,
}: CTAButtonProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 px-5 py-3 font-display text-[0.72rem] font-bold uppercase tracking-[0.08em] transition duration-500 ease-premium hover:-translate-y-0.5 sm:px-6 ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <WhatsAppIcon className="size-5 transition-transform duration-500 ease-premium group-hover:scale-110" />
    </a>
  )
}
