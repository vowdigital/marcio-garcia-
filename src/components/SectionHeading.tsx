import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  text?: ReactNode
  light?: boolean
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} ${className}`}>
      <p className={`eyebrow ${light ? 'text-champagne-light' : 'text-champagne'}`}>{eyebrow}</p>
      <h2 className={`display-h2 mt-5 text-balance ${light ? 'text-white' : 'text-navy-950'}`}>{title}</h2>
      {text && (
        <div className={`body-copy mt-6 ${light ? 'text-white/68' : 'text-ink/68'}`}>{text}</div>
      )}
    </div>
  )
}
