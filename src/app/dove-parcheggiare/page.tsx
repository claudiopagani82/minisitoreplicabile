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

// Modalità di confronto: mostra le quattro varianti di mappa una sotto l'altra,
// etichettate, per poter scegliere quale tenere. Spegnendo `confrontoMappe`
// resta solo la prima.
const confronto = p.confrontoMappe === true

// La mappa 3D è un riquadro interattivo di Google, quindi la chiave viaggia nel
// browser: è una chiave a parte, limitata ai domini dei minisiti, non quella
// che il pannello usa lato server. Senza, la variante 3 non viene mostrata.
const embedKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY ?? ''

function VarianteTitolo({ n, nome }: { n: number; nome: string }) {
  return (
    <p className="text-xs font-bold text-[#CC1414] uppercase tracking-wider mb-2">
      Variante {n} — {nome}
    </p>
  )
}

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
            {confronto && <VarianteTitolo n={1} nome="Mappa disegnata" />}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#e4e4e7] mb-4">
              <Image src={p.mapImage} alt="Mappa dei parcheggi vicini all'immobile" fill className="object-cover" />
            </div>

            {confronto && p.mapImageSatellite && (
              <>
                <VarianteTitolo n={2} nome="Vista satellitare — palazzi reali dall'alto" />
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#e4e4e7] mb-4">
                  <Image src={p.mapImageSatellite} alt="Vista satellitare dei parcheggi vicini" fill className="object-cover" />
                </div>
              </>
            )}

            {confronto && embedKey && p.lat != null && p.lng != null && (
              <>
                <VarianteTitolo n={3} nome="Mappa 3D interattiva — si ruota e si inclina" />
                <iframe
                  title="Mappa 3D interattiva"
                  className="w-full aspect-[4/3] rounded-xl border border-[#e4e4e7] mb-4"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=${embedKey}&q=${p.lat},${p.lng}&maptype=satellite&zoom=18`}
                />
              </>
            )}

            {confronto && p.streetViewImage && (
              <>
                <VarianteTitolo n={4} nome="Vista dalla strada — l'ingresso" />
                <div className="relative w-full aspect-[8/5] rounded-xl overflow-hidden border border-[#e4e4e7] mb-4">
                  <Image src={p.streetViewImage} alt="Vista dalla strada dell'ingresso" fill className="object-cover" />
                </div>
              </>
            )}

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
