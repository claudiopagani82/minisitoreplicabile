import { DocumentLayout } from '@/components/DocumentLayout'
import { RedHeartIcon } from '@/components/RedHeartIcon'

export default function PlanimetriePage() {
  return (
    <DocumentLayout sectionNumber="2)" sectionTitle="PLANIMETRIE QUOTATE:">
      <ul className="space-y-3 mb-8">
        <li className="flex items-start gap-3">
          <RedHeartIcon size={16} className="mt-0.5" />
          <span className="text-[#333333] text-sm font-semibold">Appartamento</span>
        </li>
        <li className="flex items-start gap-3">
          <RedHeartIcon size={16} className="mt-0.5" />
          <span className="text-[#333333] text-sm font-semibold">Box</span>
        </li>
      </ul>

      {/* Floor plan images */}
      <div className="space-y-6">
        <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center text-gray-500 text-sm text-center p-4 border border-gray-200">
          {/* TODO: replace with actual floor plan image of the apartment */}
          Planimetria quotata appartamento – Via Cavour 37, secondo piano
        </div>
        <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center text-gray-500 text-sm text-center p-4 border border-gray-200">
          {/* TODO: replace with actual floor plan image of the box/garage */}
          Planimetria box auto – piano interrato
        </div>
      </div>
    </DocumentLayout>
  )
}
