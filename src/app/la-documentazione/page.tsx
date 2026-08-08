import Image from 'next/image'
import Link from 'next/link'
import { DocumentLayout } from '@/components/DocumentLayout'
import property from '@/config/property.json'

const p = property.laDocumentazione

// Ogni voce dell'indice corrisponde a una sezione di property.json: la voce di
// menu dà titolo e destinazione, la sezione dice se c'è davvero qualcosa da
// scaricare.
const SEZIONI: Record<string, { enabled?: boolean; items?: { enabled?: boolean; documentUrl?: string | null }[] }> = {
  '/ape': property.ape,
  '/certificazione-impianto-elettrico': property.certificazioneElettrico,
  '/certificazione-impianto-idrico-termico': property.certificazioneIdricoTermico,
  '/libretto-caldaia': property.librettoCaldaia,
  '/regolamento-condominio': property.regolamentoCondominio,
  '/spese-condominiali': property.speseCondominiali,
  '/verbali': property.verbali,
}

function haDocumenti(href: string): boolean {
  const sezione = SEZIONI[href]
  if (!sezione || sezione.enabled === false) return false
  return (sezione.items ?? []).some((i) => i.enabled !== false && i.documentUrl)
}

// Come nelle singole pagine, una voce senza documenti caricati non compare:
// l'indice elenca ciò che si può davvero aprire.
const voci = property.navigation.filter(
  (n) => 'parent' in n && n.parent === '/la-documentazione' && n.enabled && haDocumenti(n.href)
)

export default function LaDocumentazionePage() {
  return (
    <DocumentLayout sectionNumber={p.sectionNumber} sectionTitle={p.sectionTitle}>
      {voci.length === 0 ? (
        <p className="text-sm text-[#71717a]">
          Nessun documento disponibile al momento.
        </p>
      ) : (
        <ul className="space-y-3">
          {voci.map((v) => (
            <li key={v.href}>
              <Link
                href={v.href}
                className="flex items-start gap-3 hover:opacity-80 transition-opacity"
              >
                <Image src="/images/cuore.png" alt="" width={16} height={14} className="flex-shrink-0 mt-0.5" />
                <span className="text-[#333333] text-sm font-semibold underline">{v.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </DocumentLayout>
  )
}
