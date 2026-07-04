import Image from 'next/image'
import { DocumentLayout } from '@/components/DocumentLayout'
import { RedHeartIcon } from '@/components/RedHeartIcon'
import property from '@/config/property.json'

const p = property.bozzaProposta

export default function BozzaPropostaPage() {
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

      <div className="space-y-4">
        <div className="relative w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image src="/images/cba443dc0ee31925490f53351b4c99f4.jpg" alt="Proposta Irrevocabile di Acquisto – copertina" width={800} height={1100} className="w-full h-auto" />
        </div>
        <div className="relative w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image src="/images/087ff81d4997736a475c28c155fe7e20.jpg" alt="Proposta Irrevocabile di Acquisto – pagina 2" width={800} height={1100} className="w-full h-auto" />
        </div>
        <div className="relative w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image src="/images/18c9fbd494da5b53b10e44f903aff4bd.jpg" alt="Proposta Irrevocabile di Acquisto – pagina 6" width={800} height={1100} className="w-full h-auto" />
        </div>
        <div className="relative w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image src="/images/6fe4626cdc6db49391d8305d02d8e9cc.jpg" alt="Proposta Irrevocabile di Acquisto – pagina 7" width={800} height={1100} className="w-full h-auto" />
        </div>
        <div className="relative w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image src="/images/36ba0117307c1f5c7433ebc2ac5aa75c.jpg" alt="Conferimento incarico di mediazione" width={800} height={1100} className="w-full h-auto" />
        </div>
      </div>
    </DocumentLayout>
  )
}
