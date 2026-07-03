import { DomusTuaLogo } from '@/components/DomusTuaLogo'

interface PhotoLayoutProps {
  children: React.ReactNode
  logoSize?: number
}

export function PhotoLayout({ children, logoSize = 100 }: PhotoLayoutProps) {
  return (
    <div className="relative min-h-[calc(100vh-6rem)] flex flex-col items-center justify-start overflow-hidden">
      {/* Background placeholder — TODO: replace with actual living room photo */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: '#f5f5f0' }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl mx-auto px-4 py-8">
        <DomusTuaLogo size={logoSize} className="mb-6" />
        {children}
      </div>
    </div>
  )
}
