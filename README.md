# Il Nido di Sofì — sito ufficiale

Prima versione del sito ufficiale per la prenotazione diretta.

## Pubblicazione su GitHub Pages

1. Crea/apri il repository GitHub che vuoi usare per il sito.
2. Carica `index.html` e `style.css` nella cartella principale del repository.
3. Vai in **Settings → Pages**.
4. Seleziona **Deploy from a branch**, scegli `main` e `/root` (root), quindi salva.
5. Dopo la pubblicazione apri l'indirizzo GitHub Pages generato.

## Prima della pubblicazione definitiva

- Sostituire le immagini temporanee prese dalla CDN di Airbnb con le fotografie originali ad alta risoluzione.
- Sostituire `INSERISCI-LA-TUA-EMAIL` nel form con l'indirizzo email reale.
- Collegare la richiesta di prenotazione a un sistema gratuito di raccolta richieste/form.
- Successivamente collegare il pagamento tramite Stripe Payment Link dopo la verifica manuale delle date.
- Quando le prenotazioni dirette aumenteranno, valutare un booking engine/channel manager con sincronizzazione Airbnb.

Il form attuale è intenzionalmente una **richiesta di prenotazione**, non una conferma automatica: serve a evitare doppie prenotazioni mentre il calendario viene verificato manualmente.
