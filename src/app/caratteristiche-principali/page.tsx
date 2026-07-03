import { DocumentLayout } from '@/components/DocumentLayout'
import { RedHeartIcon } from '@/components/RedHeartIcon'

const features = [
  {
    text: (
      <>
        <strong>Tipologia:</strong> trilocale disposto su un unico livello, situato al secondo
        piano di una palazzina di 4 piani fuori terra dotata di ascensore.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Appartamento:</strong> superficie coperta di <strong>95.5 m²</strong>.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Area Esterna:</strong> terrazzo (o balcone) di 7.2 m².
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Autorimessa:</strong> Include un box auto singolo di 19 m² situato al piano
        interrato.
      </>
    ),
  },
  {
    text: (
      <>
        Stato dell&apos;Immobile: L&apos;edificio, con struttura in cemento armato, è stato
        costruito nel 1993, mentre l&apos;appartamento ha subito una ristrutturazione nel 2021 💧
      </>
    ),
  },
  {
    text: (
      <>
        Interni: È composto da tre locali con una cucina abitabile. Le pavimentazioni sono in
        gres porcellanato nel bagno e parquet in massello nel resto dell&apos;abitazione
      </>
    ),
  },
  {
    text: (
      <>
        Arredi inclusi: La vendita comprende l&apos;arredamento della cucina e del bagno
      </>
    ),
  },
  {
    text: (
      <>
        Impianti e infissi: Il riscaldamento è autonomo, caldaia a condensazione con radiatori
        in ghisa, porta blindata, infissi sono in PVC con vetri tripli e persiane in legno.
      </>
    ),
  },
  {
    text: (
      <>
        Altre dotazioni: videocitofono, zanzariere, tende da sole manuali e una rete per
        computer cablata.
      </>
    ),
  },
]

export default function CaratteristichePage() {
  return (
    <DocumentLayout sectionNumber="1" sectionTitle="CARATTERISTICHE PRINCIPALI">
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <RedHeartIcon size={16} className="mt-0.5" />
            <span className="text-[#333333] text-sm leading-relaxed">{feature.text}</span>
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-200 pt-6">
        <h2 className="text-[#CC1414] font-bold uppercase text-base mb-4">
          Informazioni Condominiali
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <RedHeartIcon size={16} className="mt-0.5" />
            <span className="text-[#333333] text-sm leading-relaxed">
              Struttura scala: 3 appartamenti per pianerottolo per un totale di 10 appartamenti
              nella scala.
            </span>
          </li>
        </ul>
      </div>
    </DocumentLayout>
  )
}
