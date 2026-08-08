import { ElencoDocumenti } from '@/components/ElencoDocumenti'
import property from '@/config/property.json'

const p = property.speseCondominiali

export default function SpeseCondominialiPage() {
  return (
    <ElencoDocumenti
      sectionNumber={p.sectionNumber}
      sectionTitle={p.sectionTitle}
      items={p.items}
    />
  )
}
