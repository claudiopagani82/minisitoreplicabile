import { DocumentLayout } from '@/components/DocumentLayout'
import { RedHeartIcon } from '@/components/RedHeartIcon'

const items = [
  'Prezzo di vendita dell\'immobile',
  'Provvigione agenzia immobiliare',
  'Costi notarili stimati',
  'Imposte e tasse sull\'acquisto',
  'Riepilogo totale costi acquisto',
]

export default function ProspettoCostiPage() {
  return (
    <DocumentLayout sectionNumber="9)" sectionTitle="PROSPETTO COSTI">
      <ul className="space-y-3 mb-8">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <RedHeartIcon size={16} className="mt-0.5" />
            <span className="text-[#333333] text-sm font-semibold">{item}</span>
          </li>
        ))}
      </ul>

      {/* Costs breakdown */}
      <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center text-gray-500 text-sm text-center p-4 border border-gray-200">
        {/* TODO: replace with actual prospetto costi document */}
        Prospetto dettagliato dei costi di acquisto
      </div>
    </DocumentLayout>
  )
}
