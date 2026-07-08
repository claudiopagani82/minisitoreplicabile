import Image from 'next/image'
import Link from 'next/link'
import { DomusTuaLogo } from '@/components/DomusTuaLogo'
import property from '@/config/property.json'

export default function BenvenutoPage() {
  return (
    <div className="relative h-[calc(100vh-3rem)] flex items-center justify-center overflow-hidden">
      {/* Background property photo */}
      <Image
        src="/images/foto-principale.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-white/15" aria-hidden="true" />

      {/* Instruction hint pointing to menu */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none">
        <p className="text-[#CC1414] italic text-sm font-semibold text-center drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
          Clicca sul menù di navigazione
        </p>
        <svg
          width="40"
          height="30"
          viewBox="0 0 40 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-1"
          aria-hidden="true"
        >
          <path
            d="M5 25 Q20 5 35 8"
            stroke="#CC1414"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="3 2"
          />
          <path d="M32 4 L38 10 L30 11" fill="#CC1414" />
        </svg>
      </div>

      {/* Phone mockup */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="relative shadow-2xl" style={{ width: 280, height: 560 }}>

          {/* Screen content (visible through iPhone frame) */}
          <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center px-8 py-10">
            {/* Property photo inside screen */}
            <Image
              src="/images/foto-principale.jpg"
              alt=""
              fill
              className="object-cover object-center"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-white/60" aria-hidden="true" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center w-full">
              <DomusTuaLogo size={95} className="mb-3" />

              <h1 className="text-[#CC1414] font-bold text-center uppercase text-base leading-tight mb-2">
                {property.title}
              </h1>

              <p className="text-[#555555] italic text-sm text-center mb-2">
                {property.address}
              </p>

              <Link
                href="/introduzione"
                className="text-[#CC1414] font-bold italic text-3xl mb-2 hover:opacity-80 transition-opacity"
                style={{ fontFamily: 'var(--font-dancing-script), Dancing Script, cursive' }}
              >
                SCOPRI ORA
              </Link>

              <p className="text-[#555555] text-sm text-center leading-snug">
                Tutti i dettagli dell&apos;immobile visualizzando la{' '}
                <strong className="text-[#333333]">nostra brochure digitale</strong>
              </p>
            </div>
          </div>

          {/* iPhone frame overlay — mix-blend-mode:multiply makes white screen transparent */}
          <div className="absolute inset-0 pointer-events-none" style={{ mixBlendMode: 'multiply' }}>
            <Image
              src="/images/iphone-mockup.png"
              alt=""
              fill
              className="object-contain"
              aria-hidden="true"
            />
          </div>

        </div>
      </div>
    </div>
  )
}
