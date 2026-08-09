import Image from 'next/image'
import Link from 'next/link'
import { DocumentLayout } from '@/components/DocumentLayout'
import property from '@/config/property.json'

interface Voce {
  label: string
  text: string
}

const p = property.qualitaImmobile

// Le dieci voci sono fisse, ma non tutte valgono per ogni immobile: un
// appartamento in condominio non ha un tetto proprio, uno non ristrutturato non
// ha ristrutturazioni. Una voce senza testo non compare, invece di lasciare
// un'etichetta seguita dal nulla.
const voci = (p.voci as Voce[]).filter((v) => v.text.trim())

// Le sezioni che dipendono da questa: non hanno una voce nel menu hamburger e si
// raggiungono da qui. Oggi è la sola "Caratteristiche principali", ma la regola
// è la stessa dell'indice de "La Documentazione", così aggiungerne un'altra non
// richiede di toccare questa pagina.
const SEZIONI: Record<string, { enabled?: boolean }> = {
  '/caratteristiche-principali': property.caratteristichePrincipali,
}

const sottopagine = property.navigation.filter(
  (n) =>
    'parent' in n &&
    n.parent === '/la-qualita-dell-immobile' &&
    n.enabled &&
    SEZIONI[n.href]?.enabled !== false
)

export default function QualitaImmobilePage() {
  return (
    <DocumentLayout sectionNumber={p.sectionNumber} sectionTitle={p.sectionTitle}>
      {voci.length === 0 && sottopagine.length === 0 ? (
        <p className="text-sm text-[#71717a]">
          Informazioni non ancora disponibili.
        </p>
      ) : (
        <>
          {voci.length > 0 && (
            <dl className="space-y-4">
              {voci.map((v) => (
                <div key={v.label} className="border-b border-[#f0f0f0] pb-4 last:border-0">
                  <dt className="text-[#CC1414] font-bold text-sm uppercase tracking-wide mb-1">
                    {v.label}
                  </dt>
                  <dd className="text-[#333333] text-sm leading-relaxed">{v.text}</dd>
                </div>
              ))}
            </dl>
          )}

          {sottopagine.length > 0 && (
            <ul className={`space-y-3 ${voci.length > 0 ? 'border-t border-[#e4e4e7] mt-8 pt-8' : ''}`}>
              {sottopagine.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-start gap-3 hover:opacity-80 transition-opacity"
                  >
                    <Image src="/images/cuore.png" alt="" width={16} height={14} className="flex-shrink-0 mt-0.5" />
                    <span className="text-[#333333] text-sm font-semibold underline">{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </DocumentLayout>
  )
}
