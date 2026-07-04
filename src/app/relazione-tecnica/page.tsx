import { DocumentLayout } from '@/components/DocumentLayout'
import { RedHeartIcon } from '@/components/RedHeartIcon'
import property from '@/config/property.json'

const p = property.relazioneTecnica

export default function RelazioneTecnicaPage() {
  return (
    <DocumentLayout sectionNumber={p.sectionNumber} sectionTitle={p.sectionTitle}>
      <ul className="space-y-3 mb-8">
        {p.items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <RedHeartIcon size={16} className="mt-0.5" />
            <span className="text-[#333333] text-sm font-semibold">{item}</span>
          </li>
        ))}
      </ul>

      <div className="bg-gray-100 rounded-xl h-[500px] flex items-center justify-center text-gray-500 text-sm text-center p-4 border border-gray-200">
        Relazione tecnica – appartamento Via Cavour 37, Tradate
      </div>
    </DocumentLayout>
  )
}
