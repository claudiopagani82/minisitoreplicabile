import Image from 'next/image'
import { PhotoLayout } from '@/components/PhotoLayout'
import { RedHeartIcon } from '@/components/RedHeartIcon'
import property from '@/config/property.json'

const p = property.perTeVenditore

export default function PerTeVenditore() {
  return (
    <PhotoLayout>
      <div className="relative w-full rounded-xl overflow-hidden mb-6" style={{ height: 320 }}>
        <Image
          src="/images/1c822ac222a5faed196d8c7f0d45eb55.jpg"
          alt="Raffaela Rizza – Domus Tua Immobiliare"
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-[#CC1414] font-bold uppercase text-2xl tracking-wide mb-2">{p.heading}</h1>
        <p className="text-[#555555] text-sm italic">{p.subtitle}</p>
      </div>

      <div className="bg-red-50 border border-red-100 rounded-xl p-6 mb-8">
        <p className="text-[#333333] text-sm leading-relaxed">{p.intro}</p>
      </div>

      <h2 className="text-[#CC1414] font-bold uppercase text-base mb-4">{p.servicesTitle}</h2>

      <ul className="space-y-3">
        {p.benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <RedHeartIcon size={16} className="mt-0.5" />
            <span className="text-[#333333] text-sm leading-relaxed">{benefit}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 bg-[#CC1414] rounded-xl p-6 text-white text-center">
        <p className="font-bold text-lg mb-2">{p.ctaTitle}</p>
        <p className="text-sm text-red-100 mb-4">{p.ctaSubtitle}</p>
        <a
          href={`tel:${property.agencyPhone}`}
          className="inline-block bg-white text-[#CC1414] font-bold px-6 py-2 rounded-lg text-sm hover:bg-red-50 transition-colors"
        >
          {p.ctaButtonLabel}
        </a>
      </div>
    </PhotoLayout>
  )
}
