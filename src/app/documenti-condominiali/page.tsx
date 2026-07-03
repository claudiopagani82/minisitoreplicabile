import { DocumentLayout } from '@/components/DocumentLayout'
import { RedHeartIcon } from '@/components/RedHeartIcon'

const items = [
  'Regolamento condominiale',
  'Verbale ultima assemblea condominiale',
  'Piano di riparto spese condominiali',
  'Attestazione assenza morosità condominiale',
]

export default function DocumentiCondominaliPage() {
  return (
    <DocumentLayout sectionNumber="7)" sectionTitle="DOCUMENTI CONDOMINIALI">
      <ul className="space-y-3 mb-8">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <RedHeartIcon size={16} className="mt-0.5" />
            <span className="text-[#333333] text-sm font-semibold">{item}</span>
          </li>
        ))}
      </ul>

      {/* Document images */}
      <div className="space-y-4">
        <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center text-gray-500 text-sm text-center p-4 border border-gray-200">
          {/* TODO: replace with actual condominium documents */}
          Documenti condominiali – Via Cavour 37, Tradate
        </div>
      </div>
    </DocumentLayout>
  )
}
