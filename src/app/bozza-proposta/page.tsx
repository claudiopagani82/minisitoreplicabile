import { DocumentLayout } from '@/components/DocumentLayout'
import { RedHeartIcon } from '@/components/RedHeartIcon'

const items = [
  'Bozza proposta di acquisto compilabile',
  'Modalità di presentazione offerta',
  'Tempistiche e procedura',
]

export default function BozzaPropostaPage() {
  return (
    <DocumentLayout sectionNumber="8)" sectionTitle="BOZZA PROPOSTA DI ACQUISTO">
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
        {/* TODO: replace with actual bozza proposta di acquisto document */}
        Bozza proposta di acquisto – appartamento Via Cavour 37
      </div>
    </DocumentLayout>
  )
}
