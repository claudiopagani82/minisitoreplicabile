import Image from 'next/image'
import { DocumentLayout } from '@/components/DocumentLayout'

export interface VoceDocumento {
  label: string
  enabled?: boolean
  documentUrl?: string | null
}

interface Props {
  sectionNumber?: string
  sectionTitle: string
  items: VoceDocumento[]
}

/**
 * Elenco di documenti scaricabili, senza immagini.
 *
 * Mostra **solo** le voci che hanno davvero un file caricato: una voce senza
 * documento sparisce dalla pagina invece di comparire in grigio come "non
 * disponibile". La pagina resta così una lista di cose effettivamente
 * scaricabili, e l'operatore non deve spegnere a mano le voci che non servono.
 */
export function ElencoDocumenti({ sectionNumber, sectionTitle, items }: Props) {
  const disponibili = items.filter((i) => i.enabled !== false && i.documentUrl)

  return (
    <DocumentLayout sectionNumber={sectionNumber} sectionTitle={sectionTitle}>
      {disponibili.length === 0 ? (
        <p className="text-sm text-[#71717a]">
          Nessun documento disponibile al momento.
        </p>
      ) : (
        <ul className="space-y-3">
          {disponibili.map((item, i) => (
            <li key={i}>
              <a
                href={item.documentUrl!}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:opacity-80 transition-opacity"
              >
                <Image src="/images/cuore.png" alt="" width={16} height={14} className="flex-shrink-0 mt-0.5" />
                <span className="text-[#333333] text-sm font-semibold underline">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </DocumentLayout>
  )
}
