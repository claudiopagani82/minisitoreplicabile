import { DocumentLayout } from '@/components/DocumentLayout'
import { RedHeartIcon } from '@/components/RedHeartIcon'

const items = [
  'Bolletta gas – riscaldamento autonomo',
  'Bolletta energia elettrica',
  'Dichiarazione di conformità impianto elettrico',
  'Dichiarazione di conformità impianto idraulico',
  'Dichiarazione di conformità impianto termico',
  'Libretto caldaia a condensazione',
]

export default function BolletteImpiantiPage() {
  return (
    <DocumentLayout sectionNumber="5)" sectionTitle="BOLLETTE E IMPIANTI">
      <ul className="space-y-3 mb-8">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <RedHeartIcon size={16} className="mt-0.5" />
            <span className="text-[#333333] text-sm font-semibold">{item}</span>
          </li>
        ))}
      </ul>

      {/* Document images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center text-gray-500 text-xs text-center p-4 border border-gray-200">
          {/* TODO: replace with actual utility bills document */}
          Bollette utenze – appartamento
        </div>
        <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center text-gray-500 text-xs text-center p-4 border border-gray-200">
          {/* TODO: replace with actual impianti declarations */}
          Dichiarazioni conformità impianti
        </div>
      </div>
    </DocumentLayout>
  )
}
