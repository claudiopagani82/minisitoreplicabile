# Changelog

Registro delle modifiche a questo template, una voce per ogni valore del campo `version` in `src/config/property.json`. Serve anche come base per la futura funzione "Aggiorna" nell'admin hub, che confronterà la versione di un sito già deployato con l'ultima disponibile qui.

Il changelog parte da questa versione in avanti: le versioni precedenti non sono documentate qui.

## [1.11] - 2026-08-09
### Aggiunto
- Nuova sezione **"La Qualità dell'Immobile"** (sezione 2), pagina `/la-qualita-dell-immobile`, con dieci voci fisse: anno costruzione, ristrutturazioni, serramenti, tetto, cappotto, riscaldamento, climatizzazione, materiali, impianti e "tutti i plus".
- I contenuti si ricavano dal PDF del modulo compilato al sopralluogo, allegato dal pannello alla creazione del sito o in un secondo momento. Le voci di cui il modulo non parla restano vuote e **non compaiono in pagina**: un appartamento in condominio non ha un tetto proprio, e un'etichetta seguita dal nulla è peggio di un'etichetta assente.

### Modificato
- Le voci che parlano di qualità costruttiva sono uscite da "Caratteristiche principali" per confluire qui: stato dell'immobile, interni, impianti e infissi, altre dotazioni. "Caratteristiche principali" resta su tipologia, superfici, area esterna, autorimessa e arredi inclusi. I testi già presenti sono stati travasati nelle voci corrispondenti, non persi.

## [1.10] - 2026-08-09
### Aggiunto
- La pagina "Dove parcheggiare" può mostrare **quattro varianti di mappa** una sotto l'altra, etichettate, per scegliere quale tenere. Si accende e si spegne dal pannello con `confrontoMappe`; da spenta resta la sola mappa disegnata.
  1. **Mappa disegnata** — quella già esistente.
  2. **Vista satellitare** (`mapImageSatellite`) — stessa inquadratura su foto aerea: si vedono i palazzi reali dall'alto, con i nomi delle vie sovrapposti. È la stessa chiamata di prima con `maptype=hybrid`, quindi non richiede nulla in più.
  3. **Mappa 3D interattiva** — riquadro di Google che il visitatore può ruotare e inclinare. È l'unica che gira nel browser: richiede `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY` sul progetto Vercel del singolo sito (vedi `.env.example`) e si paga a visita, non a generazione. Senza la chiave la variante semplicemente non compare.
  4. **Vista dalla strada** (`streetViewImage`) — foto Street View dell'ingresso. Prima di scaricarla si interrogano i metadati: dove Street View non è mai passato la variante non compare, invece di pubblicare il riquadro grigio "no imagery here" che Google restituirebbe comunque.
- Nuovo `.env.example` nel template, che finora non ne aveva uno.

## [1.9] - 2026-08-09
### Aggiunto
- La pagina **"Dove parcheggiare"** mostra una mappa generata da Google Maps che parte dall'indirizzo dell'immobile: l'immobile è il segnaposto rosso, i parcheggi più vicini sono numerati in blu. Sotto la mappa l'elenco dei parcheggi con distanza e tempo a piedi.
- Nuovi campi nella sezione `doveParcheggiare`: `mapImage`, `generatedAt`, `lat`, `lng` e `parcheggi[]`. I testi e le foto della pagina restano dov'erano, la mappa si aggiunge sopra di essi.
- La mappa cerca entro 800 metri e tiene i cinque parcheggi più vicini a piedi. Il raggio è più stretto di quello della mappa dei dintorni ("Dove siamo", 1200 m) perché un parcheggio lontano un chilometro non è un parcheggio utile.
- Se non viene trovato alcun parcheggio la mappa viene comunque generata: mostra dov'è l'immobile, senza elenco.

## [1.8] - 2026-08-09
### Aggiunto
- Nuovo ramo **"La Documentazione"** (sezione 4): la pagina `/la-documentazione` fa da indice a sette sezioni documentali — APE, certificazione (rispondenza) impianto elettrico, certificazione (rispondenza) impianto idrico/termico/sanitario, libretto caldaia, regolamento di condominio, spese condominiali 2024-2025, verbali.
- Le voci di `navigation` accettano un campo opzionale `parent`. Una voce che ce l'ha non compare nel menu hamburger e si raggiunge dalla pagina indice del ramo: il menu resta a un livello solo, senza sottomenu.
- Nuovo componente `ElencoDocumenti`, condiviso dalle pagine documentali.
- **Sottotitolo dell'immobile** (`subtitle`), mostrato nell'hero sotto il titolo. In precedenza titolo e sottotitolo stavano uniti nello stesso campo `title`.
- **Descrizione libera** (`description`), la riga in corsivo dell'hero sotto il sottotitolo, con gli a capo rispettati.
- Interruttore `doveSiamo.showAddress`: l'indirizzo compare sopra la mappa dei dintorni solo se acceso (di default lo è).

### Modificato
- **In tutte le pagine documentali una voce senza documento caricato non compare più**, invece di restare visibile in grigio come "non disponibile". Le pagine elencano quindi solo ciò che si può davvero scaricare, e la pagina indice salta le sezioni ancora vuote.
- L'**APE** passa da pagina fotografica (immagine dell'attestato con zoom) a elenco di documenti scaricabili, coerentemente con la regola qui sopra. `ape.caption` e `ape.images` non esistono più.
- `/come-raggiungerci-1` diventa **`/dove-parcheggiare`** e la sua chiave passa da `dalCentroTradate` a `doveParcheggiare`.
- Il campo `address` torna a contenere l'indirizzo dell'immobile: prima ospitava un testo descrittivo, ora spostato in `description`.
- Nell'hero il sottotitolo è di un gradino più grande e la riga "tutti i dettagli dell'immobile…" inizia in minuscolo.

### Rimosso
- Pagina `/come-raggiungerci-2` e chiave `daViaCrocifisso`.
- Pagina `/documenti-condominiali` e chiave `documentiCondominiali`: i suoi documenti sono confluiti nelle sezioni "Regolamento di condominio", "Spese condominiali" e "Verbali". Le voci impiantistiche sono uscite da `bolletteImpianti`, che conserva le sole bollette.

### Note per l'aggiornamento dei siti esistenti
Questa versione **rinomina e rimuove chiavi e rotte**, mentre la funzione "Aggiorna" aggiunge le chiavi mancanti senza togliere quelle vecchie. Un sito aggiornato dalla 1.7 o precedenti si ritroverebbe quindi le vecchie voci di menu verso pagine che non esistono più, e le sezioni nuove riempite con i contenuti del modello invece dei propri. Per i siti ancora sulle versioni precedenti conviene rifarli, non aggiornarli.

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
