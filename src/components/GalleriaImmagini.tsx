'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Lightbox } from '@/components/Lightbox'

/**
 * Immagini in colonna, ciascuna apribile a schermo intero.
 *
 * Vive a parte perché il lightbox ha bisogno di stato: incapsulandolo qui, le
 * pagine che ospitano una galleria dentro altro contenuto — la 4, dove le
 * bollette convivono con i gruppi documentali — restano componenti server.
 */
export function GalleriaImmagini({ images, alt, altezza = 280 }: {
  images: string[]
  alt: string
  altezza?: number
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (images.length === 0) return null

  return (
    <>
      <div className="space-y-4">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="relative w-full rounded-xl overflow-hidden cursor-pointer"
            style={{ height: altezza }}
          >
            <Image src={src} alt={`${alt} ${i + 1}`} fill className="object-contain object-center" />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}
