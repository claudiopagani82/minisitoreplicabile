import Image from 'next/image'
import { DocumentLayout } from '@/components/DocumentLayout'

export default function MatterportPage() {
  return (
    <DocumentLayout>
      <div className="text-center mb-6">
        <h1 className="text-[#CC1414] font-bold uppercase text-xl tracking-wide mb-2">
          GUARDA IL MATTERPORT!
        </h1>
        <p className="text-[#555555] text-sm">
          Entra dentro all&apos;appartamento attraverso una visita virtuale in 3D
        </p>
      </div>

      {/* Matterport embed placeholder */}
      <div className="relative w-full rounded-xl overflow-hidden border border-gray-200"
        style={{ paddingBottom: '56.25%' }}
      >
        <Image
          src="/images/5f4f75cfa1dd4c54d7e08fa03c394b97.jpg"
          alt="Tour virtuale Matterport 3D"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#CC1414]/90 flex items-center justify-center shadow-lg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <div className="text-center text-white">
            <p className="font-semibold text-sm">37 Via Camillo Benso di Cavour</p>
            <p className="text-xs text-white/70 mt-1">Tradate, Varese</p>
          </div>
          {/* TODO: replace src with actual Matterport embed URL */}
          {/* <iframe
            src="https://my.matterport.com/show/?m=YOUR_MODEL_ID"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            allow="xr-spatial-tracking"
            title="Tour virtuale 3D - Via Cavour 37, Tradate"
          /> */}
        </div>
      </div>
    </DocumentLayout>
  )
}
