import { PhotoLayout } from '@/components/PhotoLayout'
import property from '@/config/property.json'

const p = property.daViaCrocifisso

export default function ComeRaggiungereViaCrocifissoPage() {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500 text-xs text-center p-2">
            Mappa percorso da via Crocifisso
          </div>
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500 text-xs text-center p-2">
            Vista edificio da via Crocifisso
          </div>
        </div>

        <p className="font-bold text-center text-[#333333]">{p.footer}</p>
      </div>
    </PhotoLayout>
  )
}
