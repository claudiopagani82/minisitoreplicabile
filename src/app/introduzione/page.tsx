import { PhotoLayout } from '@/components/PhotoLayout'
import { RedHeartIcon } from '@/components/RedHeartIcon'

const sections = [
  'CARATTERISTICHE PRINCIPALI DELL\u2019IMMOBILE',
  'PLANIMETRIE',
  'DATI CATASTALI',
  'ATTESTATO DI PRESTAZIONE ENERGETICA (APE)',
  'RELAZIONE TECNICA',
  'DICHIARAZIONI IMPIANTI',
  'DOCUMENTI CONDOMINIO',
  'BOZZA PROPOSTA DI ACQUISTO',
  'PROSPETTO COSTI',
  'VIDEO SOCIAL',
]

export default function IntroduzionePage() {
  return (
    <PhotoLayout>
      <h2
        className="text-3xl text-[#CC1414] text-center mb-4"
        style={{ fontFamily: 'var(--font-dancing-script), Dancing Script, cursive' }}
      >
        Benvenuti in Domus Tua
      </h2>

      <div className="bg-white/85 rounded-xl shadow-md p-6 w-full text-[#333333] text-sm leading-relaxed space-y-4">
        <p>Gentile cliente,</p>

        <p>
          La presente <strong>brochure digitale</strong> è stata pensata per offrirLe una{' '}
          <em>panoramica completa e dettagliata dell&apos;immobile</em> di Suo interesse, con
          l&apos;obiettivo di fornirLe <em>tutte le informazioni</em> necessarie per valutare con
          chiarezza ogni aspetto dell&apos;immobile.
        </p>

        <p>All&apos;interno troverà sezioni dedicate a:</p>

        <ul className="space-y-2">
          {sections.map((section, index) => (
            <li key={index} className="flex items-start gap-2">
              <RedHeartIcon size={16} className="mt-0.5" />
              <span className="font-semibold uppercase text-xs tracking-wide text-[#333333]">
                {section}
              </span>
            </li>
          ))}
        </ul>

        <p>
          Con <strong>Domus Tua</strong>, avere tutte le informazioni a portata di mano
          significa poter valutare l&apos;immobile con serenità e trasparenza, senza dover
          attendere ulteriori documenti o chiarimenti.
        </p>
      </div>
    </PhotoLayout>
  )
}
