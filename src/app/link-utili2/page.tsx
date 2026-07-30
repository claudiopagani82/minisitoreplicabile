import { PhotoLayout } from '@/components/PhotoLayout'
import property from '@/config/property.json'

const p = property.linkUtili2

export default function LinkUtili2Page() {
  return (
    <PhotoLayout>
      <div className="text-center mb-5">
        <h1 className="text-[#CC1414] font-bold uppercase text-xl tracking-wide mb-2">
          {p.heading}
        </h1>
        <p className="text-[#555555] text-sm mb-3">{p.bio}</p>
        <span className="inline-block bg-white/90 text-[#333333] text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
          {p.reviewsBadge}
        </span>
      </div>

      <div className="w-full max-w-sm flex flex-col gap-3">
        {p.links
          .filter((link) => link.enabled)
          .map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white hover:bg-[#f4f4f5] text-[#18181b] font-medium text-sm text-center rounded-full py-3.5 px-6 shadow-md transition-colors"
            >
              {link.label}
            </a>
          ))}
      </div>
    </PhotoLayout>
  )
}
