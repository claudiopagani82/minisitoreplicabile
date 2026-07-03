import Image from 'next/image'
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

      {/* Floor plan context photo */}
      <div className="relative w-full rounded-xl overflow-hidden mb-6" style={{ height: 260 }}>
        <Image
          src="/images/c25176a0978c920212a50b0f663b3c7a.jpg"
          alt="Planimetrie quotate appartamento"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Floor plan images placeholders */}
      <div className="space-y-4">
        <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center text-gray-500 text-sm text-center p-4 border border-gray-200">
          Planimetria quotata appartamento – Via Cavour 37, secondo piano
        </div>
        <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center text-gray-500 text-sm text-center p-4 border border-gray-200">
          Planimetria box auto – piano interrato
        </div>
      </div>
    </DocumentLayout>
  )
}
