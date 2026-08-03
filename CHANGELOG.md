# Changelog

Registro delle modifiche a questo template, una voce per ogni valore del campo `version` in `src/config/property.json`. Serve anche come base per la futura funzione "Aggiorna" nell'admin hub, che confronterà la versione di un sito già deployato con l'ultima disponibile qui.

Il changelog parte da questa versione in avanti: le versioni precedenti non sono documentate qui.

## [1.4] - 2026-08-01
### Aggiunto
- Pagina "Dove siamo": mappa dei dintorni (scuole, supermercati, farmacie, parcheggi, stazione) con distanza e tempo a piedi, generata automaticamente da `minisito-admintool` tramite Google Maps Platform. Nuova sezione `doveSiamo` in `property.json` e nuova voce di navigazione `/dove-siamo`.
