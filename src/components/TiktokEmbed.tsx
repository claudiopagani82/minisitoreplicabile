// TikTok non espone i video di un profilo via API pubblica: servirebbero OAuth
// e una revisione dell'app. L'unica via senza credenziali è la sua pagina di
// embed, che mostra i video più recenti e si aggiorna da sola.
//
// Si punta l'iframe direttamente a quella pagina invece di usare embed.js: lo
// script ufficiale crea sì l'iframe, ma non gli comunica mai l'altezza e lo
// lascia alto un pixel. Così il componente non ha bisogno di JavaScript e non
// carica script di terze parti nella pagina.
export function TiktokEmbed({ username }: { username: string }) {
  return (
    <iframe
      src={`https://www.tiktok.com/embed/@${username}`}
      title={`Ultimi video di @${username} su TikTok`}
      loading="lazy"
      className="w-full h-[600px] border-0"
    />
  )
}
