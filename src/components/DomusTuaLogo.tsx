import Image from 'next/image'

interface DomusTuaLogoProps {
  size?: number
  className?: string
}

export function DomusTuaLogo({ size = 100, className = '' }: DomusTuaLogoProps) {
  return (
    <Image
      src="/images/22639e828439154297d6622ecd942558.png"
      alt="DomusTua Immobiliare"
      width={size}
      height={size}
      className={`rounded-full ${className}`}
      priority
    />
  )
}
