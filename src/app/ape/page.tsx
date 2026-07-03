import { DocumentLayout } from '@/components/DocumentLayout'
import { RedHeartIcon } from '@/components/RedHeartIcon'

export default function ApePage() {
  return (
    <DocumentLayout sectionNumber="4)" sectionTitle="APE - ATTESTATO DI PRESTAZIONE ENERGETICA">
      <ul className="space-y-3 mb-8">
        <li className="flex items-start gap-3">
          <RedHeartIcon size={16} className="mt-0.5" />
          <span className="text-[#333333] text-sm font-semibold">Certificato energetico</span>
        </li>
      </ul>

      {/* APE document */}
      <div className="space-y-6">
        <div className="bg-gray-100 rounded-xl h-[500px] flex items-center justify-center text-gray-500 text-sm text-center p-4 border border-gray-200">
          {/* TODO: replace with actual APE energy certificate document */}
          Attestato di Prestazione Energetica – Via Cavour 37, Tradate
        </div>
      </div>
    </DocumentLayout>
  )
}
