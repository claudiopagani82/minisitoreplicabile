import Image from 'next/image'
import { DocumentLayout } from '@/components/DocumentLayout'
import { RedHeartIcon } from '@/components/RedHeartIcon'
import property from '@/config/property.json'

const p = property.ape

export default function ApePage() {
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

      <div className="space-y-6">
        <div className="relative w-full rounded-xl overflow-hidden" style={{ height: 320 }}>
          <Image
            src="/images/ed442926865ddc73b7a776634595ec2d.jpg"
            alt="Attestato di Prestazione Energetica"
            fill
            className="object-cover object-center"
          />
        </div>
        <p className="text-[#555555] text-xs text-center italic">{p.caption}</p>
      </div>
    </DocumentLayout>
  )
}
