import { PhotoLayout } from '@/components/PhotoLayout'

export default function ComeRaggiungereCentroPage() {
  return (
    <PhotoLayout>
      <h2 className="text-[#CC1414] font-bold italic text-xl text-center leading-snug mb-6">
        Come raggiungere l&apos;immobile se arrivate dal centro di Tradate
      </h2>

      <div className="bg-white/85 rounded-xl shadow-md p-6 w-full text-[#333333] text-sm leading-relaxed">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {/* Left column */}
          <div>
            <p>
              Potete parcheggiare l&apos;auto in{' '}
              <strong>Via XXV Aprile o in Via de Simoni</strong>, dove sono presenti diversi
              parcheggi gratuiti.
            </p>
          </div>

          {/* Right column */}
          <div>
            <p>
              L&apos;ingresso all&apos;abitazione è accanto alla{' '}
              <strong>gelateria Buosi</strong>, come indicato dalla freccia.
            </p>
          </div>
        </div>

        {/* Image placeholders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500 text-xs text-center p-2">
            {/* TODO: replace with actual aerial Google Maps screenshot */}
            Vista aerea – mappa zona parcheggi
          </div>
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500 text-xs text-center p-2">
            {/* TODO: replace with actual building entrance photo */}
            Foto ingresso edificio – accanto gelateria Buosi
          </div>
        </div>

        <p className="font-bold text-center text-[#333333]">
          Troverete una collaboratrice ad aspettarvi per condurvi all&apos;abitazione
        </p>
      </div>
    </PhotoLayout>
  )
}
