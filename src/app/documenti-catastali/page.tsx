import { DocumentLayout } from '@/components/DocumentLayout'
import { RedHeartIcon } from '@/components/RedHeartIcon'

export default function DocumentiCatastaliPage() {
  return (
    <DocumentLayout sectionNumber="3)" sectionTitle="CATASTO">
      <ul className="space-y-3 mb-8">
        <li className="flex items-start gap-3">
          <RedHeartIcon size={16} className="mt-0.5" />
          <span className="text-[#333333] text-sm font-semibold">Schede catastali</span>
        </li>
        <li className="flex items-start gap-3">
          <RedHeartIcon size={16} className="mt-0.5" />
          <span className="text-[#333333] text-sm font-semibold">Visure catastali</span>
        </li>
      </ul>

      {/* Document images */}
      <div className="space-y-6">
        <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center text-gray-500 text-sm text-center p-4 border border-gray-200">
          {/* TODO: replace with actual catastali schede document image */}
          Scheda catastale – appartamento Via Cavour 37
        </div>
        <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center text-gray-500 text-sm text-center p-4 border border-gray-200">
          {/* TODO: replace with actual visura catastale document image */}
          Visura catastale – appartamento Via Cavour 37
        </div>
      </div>
    </DocumentLayout>
  )
}
