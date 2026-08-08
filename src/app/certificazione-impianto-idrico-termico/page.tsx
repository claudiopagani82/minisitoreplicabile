import { ElencoDocumenti } from '@/components/ElencoDocumenti'
import property from '@/config/property.json'

const p = property.certificazioneIdricoTermico

export default function CertificazioneIdricoTermicoPage() {
  return (
    <ElencoDocumenti
      sectionNumber={p.sectionNumber}
      sectionTitle={p.sectionTitle}
      items={p.items}
    />
  )
}
