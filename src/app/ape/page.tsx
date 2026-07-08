import Image from 'next/image'
import { PhotoLayout } from '@/components/PhotoLayout'
import { RedHeartIcon } from '@/components/RedHeartIcon'
import property from '@/config/property.json'

const p = property.ape

export default function ApePage() {
  return (
    <PhotoLayout>
      <div className="bg-white/85 rounded-xl shadow-md p-6 w-full space-y-4">
        <h1 className="text-[#CC1414] font-bold text-xl uppercase tracking-wide">
          {p.sectionTitle}
        </h1>

        <ul className="space-y-3">
          {p.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <RedHeartIcon size={16} className="mt-0.5" />
              <span className="text-[#333333] text-sm font-semibold">{item}</span>
            </li>
          ))}
        </ul>

        {p.images.length > 0 && (
          <div className="space-y-4">
            {p.images.map((src, i) => (
              <div key={i} className="relative w-full rounded-xl overflow-hidden" style={{ height: 360 }}>
                <Image src={src} alt={`APE ${i + 1}`} fill className="object-contain object-center" />
              </div>
            ))}
            <p className="text-[#555555] text-xs text-center italic">{p.caption}</p>
          </div>
        )}
      </div>
    </PhotoLayout>
  )
}
