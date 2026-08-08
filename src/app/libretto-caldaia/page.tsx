import { ElencoDocumenti } from '@/components/ElencoDocumenti'
import property from '@/config/property.json'

const p = property.librettoCaldaia

export default function LibrettoCaldaiaPage() {
  return (
    <ElencoDocumenti
      sectionNumber={p.sectionNumber}
      sectionTitle={p.sectionTitle}
      items={p.items}
    />
  )
}
