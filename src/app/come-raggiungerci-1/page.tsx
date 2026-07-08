import Image from 'next/image'
import { PhotoLayout } from '@/components/PhotoLayout'
import property from '@/config/property.json'

const p = property.dalCentroTradate

export default function ComeRaggiungereCentroPage() {
  return (
    <PhotoLayout>
      <h2 className="text-[#CC1414] font-bold italic text-xl text-center leading-snug mb-6">
        {p.heading}
      </h2>

      <div className="bg-white/85 rounded-xl shadow-md p-6 w-full text-[#333333] text-sm leading-relaxed">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div><p>{p.leftText}</p></div>
          <div><p>{p.rightText}</p></div>
        </div>

        {p.images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {p.images.map((src, i) => (
              <div key={i} className="relative rounded-lg overflow-hidden h-48">
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        )}

        <p className="font-bold text-center text-[#333333]">{p.footer}</p>
      </div>
    </PhotoLayout>
  )
}
