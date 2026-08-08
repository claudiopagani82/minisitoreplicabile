import { ElencoDocumenti } from '@/components/ElencoDocumenti'
import property from '@/config/property.json'

const p = property.certificazioneElettrico

export default function CertificazioneImpiantoElettricoPage() {
  return (
    <ElencoDocumenti
      sectionNumber={p.sectionNumber}
      sectionTitle={p.sectionTitle}
      items={p.items}
    />
  )
}
