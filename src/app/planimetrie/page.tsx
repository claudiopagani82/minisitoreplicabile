import Image from 'next/image'
import { DocumentLayout } from '@/components/DocumentLayout'
import { RedHeartIcon } from '@/components/RedHeartIcon'
import property from '@/config/property.json'

const p = property.planimetrie

export default function PlanimetriePage() {
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

      <div className="relative w-full rounded-xl overflow-hidden mb-6" style={{ height: 260 }}>
        <Image
          src="/images/c25176a0978c920212a50b0f663b3c7a.jpg"
          alt="Planimetrie quotate appartamento"
          fill
          className="object-cover object-center"
        />
      </div>

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
