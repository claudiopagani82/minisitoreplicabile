import { DocumentLayout } from '@/components/DocumentLayout'

export default function VideoSocialPage() {
  return (
    <DocumentLayout>
      <div className="text-center mb-6">
        <h1 className="text-[#CC1414] font-bold uppercase text-xl tracking-wide mb-2">
          GUARDA IL VIDEO DELL&apos;IMMOBILE SU INSTAGRAM
        </h1>
        <p className="text-[#555555] text-sm">
          Segui Domus Tua Immobiliare su Instagram per non perdere nessun immobile
        </p>
      </div>

      {/* Instagram embed placeholder */}
      <div className="flex justify-center">
        <div
          className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-2xl flex flex-col items-center justify-center gap-4 p-8 shadow-lg"
          style={{ width: 340, minHeight: 400 }}
        >
          {/* Instagram logo */}
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <p className="text-white font-semibold text-center text-sm">
            Video immobile disponibile su Instagram
          </p>
          <p className="text-white/80 text-xs text-center">
            @domustua.immobiliare
          </p>
          {/* TODO: replace with actual Instagram embed blockquote */}
          {/* <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/YOUR_POST_ID/"
            data-instgrm-version="14"
          /> */}
        </div>
      </div>
    </DocumentLayout>
  )
}
