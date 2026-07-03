import { PhotoLayout } from '@/components/PhotoLayout'

export default function ComeRaggiungereViaCrocifissoPage() {
  return (
    <PhotoLayout>
      <h2 className="text-[#CC1414] font-bold italic text-xl text-center leading-snug mb-6">
        Come raggiungere l&apos;immobile da via Crocifisso
      </h2>

      <div className="bg-white/85 rounded-xl shadow-md p-6 w-full text-[#333333] text-sm leading-relaxed">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {/* Left column */}
          <div>
            <p>
              Percorrendo <strong>via Crocifisso</strong>, svoltate in{' '}
              <strong>via Cavour</strong>. L&apos;edificio è facilmente riconoscibile.
            </p>
          </div>

          {/* Right column */}
          <div>
            <p>
              Sono disponibili parcheggi nelle vie adiacenti.{' '}
              <strong>Seguite le indicazioni</strong> presenti sul posto.
            </p>
          </div>
        </div>

        {/* Image placeholders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500 text-xs text-center p-2">
            {/* TODO: replace with actual route map from via Crocifisso */}
            Mappa percorso da via Crocifisso
          </div>
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500 text-xs text-center p-2">
            {/* TODO: replace with actual building photo from via Crocifisso approach */}
            Vista edificio da via Crocifisso
          </div>
        </div>

        <p className="font-bold text-center text-[#333333]">
          Troverete una collaboratrice ad aspettarvi per condurvi all&apos;abitazione
        </p>
      </div>
    </PhotoLayout>
  )
}
