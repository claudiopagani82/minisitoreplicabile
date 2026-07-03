import { DocumentLayout } from '@/components/DocumentLayout'
import { RedHeartIcon } from '@/components/RedHeartIcon'

const items = [
  'Relazione tecnica descrittiva dell\'immobile',
  'Stato di conservazione delle strutture',
  'Descrizione interventi di ristrutturazione 2021',
]

export default function RelazioneTecnicaPage() {
  return (
    <DocumentLayout sectionNumber="6)" sectionTitle="RELAZIONE TECNICA">
      <ul className="space-y-3 mb-8">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <RedHeartIcon size={16} className="mt-0.5" />
            <span className="text-[#333333] text-sm font-semibold">{item}</span>
          </li>
        ))}
      </ul>

      {/* Document */}
      <div className="bg-gray-100 rounded-xl h-[500px] flex items-center justify-center text-gray-500 text-sm text-center p-4 border border-gray-200">
        {/* TODO: replace with actual relazione tecnica document */}
        Relazione tecnica – appartamento Via Cavour 37, Tradate
      </div>
    </DocumentLayout>
  )
}
