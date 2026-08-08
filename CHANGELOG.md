# Changelog

Registro delle modifiche a questo template, una voce per ogni valore del campo `version` in `src/config/property.json`. Serve anche come base per la futura funzione "Aggiorna" nell'admin hub, che confronterà la versione di un sito già deployato con l'ultima disponibile qui.

Il changelog parte da questa versione in avanti: le versioni precedenti non sono documentate qui.

## [1.7] - 2026-08-08
### Corretto
- `Navigation.tsx` chiamava `setState` in modo sincrono dentro un `useEffect` per chiudere il menu al cambio pagina (errore lint `react-hooks/set-state-in-effect`, può causare render a cascata non necessari). Ora l'apertura del menu è derivata dal confronto tra la rotta corrente e la rotta su cui è stato aperto (`openedFrom === pathname`): cambiare pagina lo chiude senza bisogno di un effect. Nessuna chiave di `property.json` coinvolta, nessun cambiamento visibile per l'utente finale.

## [1.6] - 2026-08-04
### Aggiunto
- Nella pagina "Link utili" la card Facebook mostra l'ultimo post pubblicato dalla Pagina dell'agenzia (foto del post, testo come didascalia, click che porta al post), come già faceva la card YouTube con l'ultimo video. I dati arrivano dall'endpoint `/api/social/facebook` di `minisito-admintool`, dove risiede l'unico token della Graph API: nessuna credenziale e nessuna configurazione da impostare sui singoli siti.
- `next.config.ts` autorizza `*.fbcdn.net` per `next/image` (dominio delle foto dei post Facebook).
- La card TikTok ospita il widget ufficiale del profilo, che mostra i video più recenti e si aggiorna da solo. Non richiede credenziali: l'handle si ricava dall'URL già presente in `property.json`. Il link "Guarda gli ultimi video su TikTok" resta sotto al widget e continua a funzionare anche se TikTok non risponde.
- **Nota implementativa:** l'iframe punta direttamente a `tiktok.com/embed/@handle` invece di usare `embed.js`. Lo script ufficiale crea l'iframe ma non gli comunica mai l'altezza, lasciandolo alto un pixel (verificato in produzione). Puntando l'iframe a mano il componente non richiede JavaScript e non carica script di terze parti nella pagina.
- **Modifica puramente additiva:** nessuna chiave di `property.json` cambia. Se l'endpoint Facebook non risponde, la card torna da sola all'aspetto statico precedente.
- **Nota privacy:** il widget TikTok carica uno script di terze parti nel browser del visitatore. Se in futuro verrà introdotto un banner cookie, questo componente va tra quelli da bloccare fino al consenso.

## [1.5] - 2026-08-03
### Modificato
- Le sezioni "Planimetrie" e "Documenti catastali" sono state unite in un'unica pagina "Planimetrie e dati catastali" (voce di navigazione unica, ancora su `/planimetrie`), nello stesso formato a elenco di documenti scaricabili già usato per "Documenti condominiali" (non più foto in galleria). Le chiavi `planimetrie` e `documentiCatastali` di `property.json` sono state sostituite dalla nuova chiave `planimetrieCatasto`.
- **Nota per l'Aggiorna:** questa è una modifica non additiva (rinomina/rimozione di chiavi). Un sito già deployato che riceve questo aggiornamento manterrà le vecchie chiavi `planimetrie`/`documentiCatastali` nel proprio `property.json` (dati non persi, ma non più raggiungibili da nessuna pagina) e la voce di menu "Documenti catastali" diventerà un link non più valido, finché non viene rimossa a mano nell'editor.

## [1.4] - 2026-08-01
### Aggiunto
- Pagina "Dove siamo": mappa dei dintorni (scuole, supermercati, farmacie, parcheggi, stazione) con distanza e tempo a piedi, generata automaticamente da `minisito-admintool` tramite Google Maps Platform. Nuova sezione `doveSiamo` in `property.json` e nuova voce di navigazione `/dove-siamo`.
