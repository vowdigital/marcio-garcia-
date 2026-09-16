type BrandProps = {
  light?: boolean
  compact?: boolean
}

export function Brand({ light = false, compact = false }: BrandProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${light ? 'text-white' : 'text-navy-950'}`}>
      <span
        aria-hidden="true"
        className={`grid size-9 shrink-0 place-items-center border ${
          light ? 'border-white/35' : 'border-navy-950/25'
        }`}
      >
        <span className="font-display text-[0.66rem] font-black tracking-[-0.05em]">MG</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.72rem] font-extrabold tracking-[0.08em] sm:text-[0.8rem]">
          MÁRCIO GARCIA
        </span>
        {!compact && (
          <span className={`mt-1 text-[0.5rem] font-bold uppercase tracking-[0.2em] ${light ? 'text-white/60' : 'text-navy-950/55'}`}>
            Clínica médica
          </span>
        )}
      </span>
    </span>
  )
}
