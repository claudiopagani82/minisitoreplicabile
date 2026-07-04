import { PhotoLayout } from '@/components/PhotoLayout'
import property from '@/config/property.json'

const p = property.openDomus

export default function OpenDomusPage() {
  return (
    <PhotoLayout>
      <h2 className="text-[#CC1414] font-bold uppercase text-lg text-center tracking-wide mb-3">
        {p.heading}
      </h2>

      <p className="text-[#333333] text-sm italic text-center mb-6 px-2">
        {p.subtitle}
      </p>

      <div className="bg-white/85 rounded-xl shadow-md p-6 w-full text-[#333333] text-sm leading-relaxed space-y-5">
        {p.sections.map((section, index) => (
          <div key={index}>
            <h3 className="font-bold text-[#333333] mb-2">{section.title}</h3>
            <p>{section.text}</p>
          </div>
        ))}
      </div>
    </PhotoLayout>
  )
}
