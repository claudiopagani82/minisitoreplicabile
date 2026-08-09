import Image from 'next/image'
import { PhotoLayout } from '@/components/PhotoLayout'
import { ListaDocumenti, documentiDisponibili, type VoceDocumento } from '@/components/ElencoDocumenti'
import { GalleriaImmagini } from '@/components/GalleriaImmagini'
import property from '@/config/property.json'

const p = property.laDocumentazione
const bollette = property.bolletteImpianti

// I sette gruppi documentali erano sette pagine, raggiunte da una pagina indice:
// tre click per arrivare a un PDF. Ora stanno tutti qui, uno sotto l'altro, e
// nessuno di loro ha una voce propria nel menu.
//
// L'ordine di questo elenco è l'ordine in cui compaiono in pagina.
const GRUPPI: { titolo: string; sezione: { enabled?: boolean; items: VoceDocumento[] } }[] = [
  { titolo: 'APE', sezione: property.ape },
  { titolo: 'Certificazione (rispondenza) impianto elettrico', sezione: property.certificazioneElettrico },
  { titolo: 'Certificazione (rispondenza) impianto idrico/termico/sanitario', sezione: property.certificazioneIdricoTermico },
  { titolo: 'Libretto caldaia', sezione: property.librettoCaldaia },
  { titolo: 'Regolamento di condominio', sezione: property.regolamentoCondominio },
  { titolo: 'Spese condominiali 2024-2025', sezione: property.speseCondominiali },
  { titolo: 'Verbali', sezione: property.verbali },
]

// Un gruppo compare solo se è acceso e ha almeno un documento caricato: la
// pagina elenca ciò che si può davvero scaricare, senza titoli seguiti dal nulla.
const gruppi = GRUPPI.filter(
  (g) => g.sezione.enabled !== false && documentiDisponibili(g.sezione.items).length > 0
)

// "Bollette e impianti" chiude la pagina, ma non passa da GRUPPI: non è un
// elenco di PDF scaricabili come gli altri, è un elenco di voci con sotto le
// foto delle bollette, che si aprono a schermo intero.
const mostraBollette =
  bollette.enabled && (bollette.items.length > 0 || bollette.images.length > 0)

export default function LaDocumentazionePage() {
  return (
    <PhotoLayout>
      <div className="bg-white/85 rounded-xl shadow-md p-6 w-full space-y-6">
        <h1 className="text-[#CC1414] font-bold text-xl uppercase tracking-wide">
          {p.sectionNumber && <span className="mr-1">{p.sectionNumber}</span>}
          {p.sectionTitle}
        </h1>

        {gruppi.length === 0 && !mostraBollette && (
          <p className="text-sm text-[#71717a]">Nessun documento disponibile al momento.</p>
        )}

        {gruppi.map((g) => (
          <section key={g.titolo} className="border-t border-[#e4e4e7] pt-5 first:border-0 first:pt-0">
            <h2 className="text-[#333333] font-bold text-sm uppercase tracking-wide mb-3">
              {g.titolo}
            </h2>
            <ListaDocumenti items={g.sezione.items} />
          </section>
        ))}

        {mostraBollette && (
          <section className="border-t border-[#e4e4e7] pt-5 first:border-0 first:pt-0 space-y-4">
            <h2 className="text-[#333333] font-bold text-sm uppercase tracking-wide">
              {bollette.sectionTitle}
            </h2>

            {bollette.items.length > 0 && (
              <ul className="space-y-3">
                {bollette.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Image src="/images/cuore.png" alt="" width={16} height={14} className="flex-shrink-0 mt-0.5" />
                    <span className="text-[#333333] text-sm font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <GalleriaImmagini images={bollette.images} alt="Bollette e impianti" />
          </section>
        )}
      </div>
    </PhotoLayout>
  )
}
