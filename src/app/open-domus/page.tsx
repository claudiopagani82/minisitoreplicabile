import { PhotoLayout } from '@/components/PhotoLayout'

export default function OpenDomusPage() {
  return (
    <PhotoLayout>
      <h2 className="text-[#CC1414] font-bold uppercase text-lg text-center tracking-wide mb-3">
        COS&apos;È E COME FUNZIONA L&apos;OPEN DOMUS
      </h2>

      <p className="text-[#333333] text-sm italic text-center mb-6 px-2">
        Open Domus non è una semplice visita, ma{' '}
        <em>un modo organizzato, trasparente</em> e <em>corretto</em> per acquistare casa.
      </p>

      <div className="bg-white/85 rounded-xl shadow-md p-6 w-full text-[#333333] text-sm leading-relaxed space-y-5">
        <div>
          <h3 className="font-bold text-[#333333] mb-2">Visiti l&apos;immobile con tranquillità</h3>
          <p>
            Durante l&apos;Open Domus avrete tutto il tempo necessario per visitare
            l&apos;appartamento senza fretta, accompagnati dal nostro personale qualificato che
            risponderà a ogni vostra domanda. Potrete esaminare ogni dettaglio con calma e
            serenità.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-[#333333] mb-2">Nessuna corsa contro il tempo</h3>
          <p>
            Il formato Open Domus è pensato per garantire a tutti gli interessati le medesime
            opportunità. Non si tratta di una vendita all&apos;asta né di una gara: ogni
            acquirente viene trattato con rispetto e professionalità, con tempi adeguati per
            valutare con serenità la propria decisione.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-[#333333] mb-2">Trasparenza totale</h3>
          <p>
            Tutta la documentazione relativa all&apos;immobile è raccolta in questa brochure
            digitale. Nessun documento nascosto, nessuna sorpresa: quello che vedete è quello
            che acquistate.
          </p>
        </div>
      </div>
    </PhotoLayout>
  )
}
