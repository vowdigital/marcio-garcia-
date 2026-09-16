type BrandProps = {
  light?: boolean
  compact?: boolean
}

export function Brand({ light = false, compact = false }: BrandProps) {
  return (
    <span className="inline-flex items-center">
      <img
        src="/assets/images/logo.webp"
        alt="Márcio Garcia — Tricologia e Transplante Capilar"
        className={`w-auto object-contain ${compact ? 'h-6' : 'h-8'} ${light ? 'brightness-0 invert' : ''}`}
      />
    </span>
  )
}
