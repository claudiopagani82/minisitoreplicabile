import { PhotoLayout } from '@/components/PhotoLayout'
import { ListaDocumenti, documentiDisponibili, vociDocumento } from '@/components/ElencoDocumenti'
import property from '@/config/property.json'

const p = property.comeAcquistarla

// I tre passi dell'acquisto — manifestare interesse, presentare la proposta,
// versare la caparra — erano una pagina di fotografie della bozza cartacea.
// Sono documenti da leggere e compilare, non da guardare: come nelle altre
// sezioni documentali, una voce senza file allegato non compare.
const items = vociDocumento(p.items)
const vuoto = documentiDisponibili(items).length === 0

export default function ComeAcquistarlaPage() {
  return (
    <PhotoLayout>
      <div className="bg-white/85 rounded-xl shadow-md p-6 w-full space-y-4">
        <h1 className="text-[#CC1414] font-bold text-xl uppercase tracking-wide">
          {p.sectionNumber && <span className="mr-1">{p.sectionNumber}</span>}
          {p.sectionTitle}
        </h1>

        {vuoto ? (
          <p className="text-sm text-[#71717a]">Nessun documento disponibile al momento.</p>
        ) : (
          <ListaDocumenti items={items} />
        )}
      </div>
    </PhotoLayout>
  )
}
