import Link from 'next/link'
import { DomusTuaLogo } from '@/components/DomusTuaLogo'

export default function BenvenutoPage() {
  return (
    <div className="relative min-h-[calc(100vh-3rem)] flex items-center justify-center overflow-hidden">
      {/* Background placeholder — TODO: replace with actual living room photo */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: '#f5f5f0' }}
        aria-hidden="true"
      >
        {/* Warm overlay to simulate photo wash */}
        <div className="absolute inset-0 bg-white/60" />
      </div>

      {/* Instruction hint pointing to menu */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none">
        <p className="text-[#CC1414] italic text-sm font-semibold text-center">
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
        <div
          className="relative bg-[#1a1a1a] rounded-[2.5rem] shadow-2xl flex flex-col items-center overflow-hidden"
          style={{ width: 280, height: 560, border: '8px solid #111' }}
        >
          {/* Phone speaker notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#333] rounded-full" aria-hidden="true" />

          {/* Phone screen content */}
          <div className="absolute inset-2 rounded-[2rem] bg-white flex flex-col items-center justify-center px-5 py-6 overflow-hidden">
            {/* Logo */}
            <DomusTuaLogo size={80} className="mb-4" />

            {/* Property title */}
            <h1 className="text-[#CC1414] font-bold text-center uppercase text-base leading-tight mb-2">
              TRILOCALE RISTRUTTURATO IN PIENO CENTRO CON BOX
            </h1>

            {/* Address */}
            <p className="text-[#555555] italic text-sm text-center mb-3">
              Via Cavour, 37 / Centro Tradate
            </p>

            {/* CTA */}
            <Link
              href="/introduzione"
              className="text-[#CC1414] font-bold italic text-xl mb-3 hover:opacity-80 transition-opacity"
              style={{ fontFamily: 'var(--font-dancing-script), Dancing Script, cursive' }}
            >
              SCOPRI ORA
            </Link>

            {/* Description */}
            <p className="text-[#555555] text-xs text-center leading-relaxed">
              Tutti i dettagli dell&apos;immobile visualizzando la{' '}
              <strong className="text-[#333333]">nostra brochure digitale</strong>
            </p>
          </div>

          {/* Home button */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-[#444]" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
