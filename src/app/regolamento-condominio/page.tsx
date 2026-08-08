import { ElencoDocumenti } from '@/components/ElencoDocumenti'
import property from '@/config/property.json'

const p = property.regolamentoCondominio

export default function RegolamentoCondominioPage() {
  return (
    <ElencoDocumenti
      sectionNumber={p.sectionNumber}
      sectionTitle={p.sectionTitle}
      items={p.items}
    />
  )
}
