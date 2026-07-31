'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface ScrollFadeBannerProps {
  src: string
}

export function ScrollFadeBanner({ src }: ScrollFadeBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    function handleScroll() {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      // Frazione ridotta dell'altezza: la foto è già completamente
      // sfumata a meta' della sua altezza di scroll, invece che alla fine.
      const fadeDistance = (rect.height || 1) * 0.35
      const scrolledPast = -rect.top
      const t = Math.min(Math.max(scrolledPast / fadeDistance, 0), 1)
      // Curva accelerata (non lineare): la trasparenza aumenta piu'
      // rapidamente appena si inizia a scrollare, per un effetto più marcato.
      const nextOpacity = Math.pow(1 - t, 1.6)
      setOpacity(nextOpacity)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="w-full aspect-[3/4] rounded-2xl bg-[#f4f4f5] border border-[#e4e4e7] overflow-hidden">
      <Image
        src={src}
        alt=""
        fill
        className="object-cover object-top"
        style={{ opacity, willChange: 'opacity' }}
      />
    </div>
  )
}
