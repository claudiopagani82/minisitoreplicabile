import { PhotoLayout } from '@/components/PhotoLayout'
import { RedHeartIcon } from '@/components/RedHeartIcon'
import property from '@/config/property.json'

const p = property.bolletteImpianti

export default function BolletteImpiantiPage() {
  return (
    <PhotoLayout>
      <div className="mb-6">
        <h1 className="text-[#CC1414] font-bold text-xl uppercase tracking-wide">
          <span className="mr-1">{p.sectionNumber}</span>{p.sectionTitle}
        </h1>
      </div>
      <ul className="space-y-3 mb-8">
        {p.items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <RedHeartIcon size={16} className="mt-0.5" />
            <span className="text-[#333333] text-sm font-semibold">{item}</span>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center text-gray-500 text-xs text-center p-4 border border-gray-200">
          Bollette utenze – appartamento
        </div>
        <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center text-gray-500 text-xs text-center p-4 border border-gray-200">
          Dichiarazioni conformità impianti
        </div>
      </div>
    </PhotoLayout>
  )
}
