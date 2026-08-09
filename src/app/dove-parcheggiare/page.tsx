'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PhotoLayout } from '@/components/PhotoLayout'
import { Lightbox } from '@/components/Lightbox'
import property from '@/config/property.json'

interface Parcheggio {
  markerNumber: number
  label: string
  distanceText: string
  durationText: string
}

const p = property.doveParcheggiare
const parcheggi = p.parcheggi as Parcheggio[]

export default function DoveParcheggiarePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <PhotoLayout>
      <h2 className="text-[#CC1414] font-bold italic text-xl text-center leading-snug mb-6">
        {p.heading}
      </h2>

      <div className="bg-white/85 rounded-xl shadow-md p-6 w-full text-[#333333] text-sm leading-relaxed">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div><p>{p.leftText}</p></div>
          <div><p>{p.rightText}</p></div>
        </div>

        {p.mapImage && (
          <div className="mb-6">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#e4e4e7] mb-4">
              <Image src={p.mapImage} alt="Mappa dei parcheggi vicini all'immobile" fill className="object-cover" />
            </div>

            {parcheggi.length > 0 && (
              <ul className="space-y-2">
                {parcheggi.map((parcheggio) => (
                  <li key={parcheggio.markerNumber} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1a73e8] text-white text-xs font-bold flex items-center justify-center">
                      {parcheggio.markerNumber}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="font-semibold">{parcheggio.label}</span>
                      <span className="text-[#71717a]"> — {parcheggio.distanceText} a piedi, {parcheggio.durationText}</span>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {p.images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {p.images.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="relative rounded-lg overflow-hidden h-48 cursor-pointer"
              >
                <Image src={src} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        )}

        <p className="font-bold text-center text-[#333333]">{p.footer}</p>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={p.images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </PhotoLayout>
  )
}
