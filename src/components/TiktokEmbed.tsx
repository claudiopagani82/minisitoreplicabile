'use client'

import { useEffect } from 'react'

const EMBED_SCRIPT = 'https://www.tiktok.com/embed.js'

// TikTok non espone i video di un profilo via API pubblica: l'unico modo per
// mostrarli senza credenziali è il widget ufficiale, che TikTok riempie nel
// browser del visitatore. Il markup qui sotto è quello restituito dal suo
// endpoint oEmbed per i profili creator.
export function TiktokEmbed({ username }: { username: string }) {
  useEffect(() => {
    // Lo script processa i blockquote una volta sola, al caricamento. Navigando
    // tra le pagine del sito il componente si rimonta e il widget resterebbe
    // vuoto: rimuovendo lo script e reinserendolo lo si obbliga a rileggere.
    document.querySelector(`script[src="${EMBED_SCRIPT}"]`)?.remove()

    const script = document.createElement('script')
    script.src = EMBED_SCRIPT
    script.async = true
    document.body.appendChild(script)
  }, [username])

  const profileUrl = `https://www.tiktok.com/@${username}`

  return (
    <blockquote
      className="tiktok-embed min-w-[288px] max-w-[780px]"
      cite={profileUrl}
      data-unique-id={username}
      data-embed-from="oembed"
      data-embed-type="creator"
    >
      <section>
        <a target="_blank" rel="noopener noreferrer" href={`${profileUrl}?refer=creator_embed`}>
          @{username}
        </a>
      </section>
    </blockquote>
  )
}
