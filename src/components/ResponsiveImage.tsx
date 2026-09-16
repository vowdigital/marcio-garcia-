type ResponsiveImageProps = {
  name: string
  alt: string
  className?: string
  imgClassName?: string
  sizes?: string
  eager?: boolean
  width?: number
  height?: number
}

export function ResponsiveImage({
  name,
  alt,
  className = '',
  imgClassName = '',
  sizes = '(max-width: 768px) 100vw, 50vw',
  eager = false,
  width = 1600,
  height = 2400,
}: ResponsiveImageProps) {
  return (
    <picture className={className}>
      <source
        type="image/webp"
        srcSet={`/assets/images/${name}-sm.webp 800w, /assets/images/${name}.webp 1600w`}
        sizes={sizes}
      />
      <img
        src={`/assets/images/${name}.webp`}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        decoding={eager ? 'sync' : 'async'}
        className={imgClassName}
      />
    </picture>
  )
}
