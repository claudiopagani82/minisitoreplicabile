import { DocumentLayout } from '@/components/DocumentLayout'
import { RedHeartIcon } from '@/components/RedHeartIcon'

const benefits = [
  'Brochure digitale professionale inclusa nella vendita',
  'Fotografie professionali dell\'immobile',
  'Video tour dell\'appartamento per i social media',
  'Tour virtuale in 3D Matterport',
  'Open Domus: format di vendita organizzato e trasparente',
  'Assistenza completa in tutte le fasi della compravendita',
  'Supporto nella gestione della documentazione',
  'Consulenza per la valutazione dell\'immobile',
]

export default function PerTeVenditore() {
  return (
    <DocumentLayout>
      <div className="text-center mb-8">
        <h1 className="text-[#CC1414] font-bold uppercase text-2xl tracking-wide mb-2">
          Per te, VENDITORE
        </h1>
        <p className="text-[#555555] text-sm italic">
          Tutto quello che Domus Tua fa per valorizzare il tuo immobile
        </p>
      </div>

      <div className="bg-red-50 border border-red-100 rounded-xl p-6 mb-8">
        <p className="text-[#333333] text-sm leading-relaxed">
          Con <strong>Domus Tua Immobiliare</strong>, la vendita del tuo immobile è gestita in
          modo professionale, trasparente e digitale. Mettiamo a tua disposizione tutti gli
          strumenti più innovativi per presentare al meglio la tua proprietà e trovare
          l&apos;acquirente giusto nel minor tempo possibile.
        </p>
      </div>

      <h2 className="text-[#CC1414] font-bold uppercase text-base mb-4">
        I nostri servizi per il venditore
      </h2>

      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <RedHeartIcon size={16} className="mt-0.5" />
            <span className="text-[#333333] text-sm leading-relaxed">{benefit}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 bg-[#CC1414] rounded-xl p-6 text-white text-center">
        <p className="font-bold text-lg mb-2">Contattaci oggi</p>
        <p className="text-sm text-red-100 mb-4">
          Scopri come possiamo valorizzare il tuo immobile
        </p>
        <a
          href="tel:+39"
          className="inline-block bg-white text-[#CC1414] font-bold px-6 py-2 rounded-lg text-sm hover:bg-red-50 transition-colors"
        >
          Chiama Domus Tua
        </a>
      </div>
    </DocumentLayout>
  )
}
