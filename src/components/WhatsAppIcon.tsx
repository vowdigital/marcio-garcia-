import whatsappIcon from '../../assets/whatsapp (1).png'

type WhatsAppIconProps = {
  className?: string
}

export function WhatsAppIcon({ className = 'size-5' }: WhatsAppIconProps) {
  return <img src={whatsappIcon} alt="" aria-hidden="true" className={`shrink-0 object-contain ${className}`} />
}
