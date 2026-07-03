'use client'

interface DomusTuaLogoProps {
  size?: number
  className?: string
}

export function DomusTuaLogo({ size = 100, className = '' }: DomusTuaLogoProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-full border-4 border-[#CC1414] bg-white ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size * 0.38}
        height={size * 0.28}
        viewBox="0 0 38 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* House shape */}
        <path
          d="M19 4L3 16H7V26H16V19H22V26H31V16H35L19 4Z"
          fill="#CC1414"
        />
        {/* Heart on house */}
        <path
          d="M19 12C19 12 14 8.5 14 11.5C14 13.5 16.5 14.5 19 17C21.5 14.5 24 13.5 24 11.5C24 8.5 19 12 19 12Z"
          fill="white"
        />
      </svg>
      <div className="flex flex-col items-center leading-none mt-0.5">
        <span
          className="font-bold text-[#CC1414] uppercase tracking-tight"
          style={{ fontSize: size * 0.1, lineHeight: 1.1 }}
        >
          DomusTua
        </span>
        <span
          className="text-[#CC1414] uppercase tracking-widest"
          style={{ fontSize: size * 0.07, lineHeight: 1.1 }}
        >
          IMMOBILIARE
        </span>
      </div>
    </div>
  )
}
