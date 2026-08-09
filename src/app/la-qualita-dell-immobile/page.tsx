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

export default function QualitaImmobilePage() {
  return (
    <DocumentLayout sectionNumber={p.sectionNumber} sectionTitle={p.sectionTitle}>
      {voci.length === 0 ? (
        <p className="text-sm text-[#71717a]">
          Informazioni non ancora disponibili.
        </p>
      ) : (
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
    </DocumentLayout>
  )
}
