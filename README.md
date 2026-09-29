# Il Nido di Sofì — sito ufficiale v2

Questa versione è pensata per essere pubblicata nella **radice** del repository GitHub Pages `ilnidodisofi.github.io`, mantenendo la guida ospiti separata nella cartella `/guida/`.

## File da caricare nella radice

- `index.html`
- `style.css`
- `script.js`
- `grazie.html`
- cartella `assets/` con i tre loghi

**Non modificare e non cancellare la cartella `guida/`.**

La struttura finale dovrà essere:

```text
/
├── index.html
├── style.css
├── script.js
├── grazie.html
├── assets/
│   ├── logo-mark.png
│   ├── logo-wordmark.png
│   └── logo-large.png
└── guida/
    └── index.html
```

## Modifiche incluse

- Due loghi nella barra superiore: simbolo + scritta estesa.
- Grande logo completo nella homepage.
- Menu lingue: italiano, inglese, spagnolo, tedesco, francese, russo e cinese semplificato.
- Nessun link alla guida ospiti.
- Form di richiesta collegato a `ilnidodisofi@gmail.com` tramite FormSubmit.
- Pagina `grazie.html` dopo l'invio.
- Foto Airbnb richiamate come immagini con `referrerpolicy="no-referrer"` per aumentare la compatibilità rispetto alla precedente versione con immagini di sfondo.

## Importante: attivazione del modulo email

Dopo la pubblicazione, invia una richiesta di prova dal sito. Al primo invio FormSubmit manderà una mail di attivazione a `ilnidodisofi@gmail.com`. Apri quella mail e conferma l'indirizzo. Dopo la conferma, le richieste successive arriveranno normalmente alla casella.

## Foto

Le foto sono ancora richiamate dal CDN di Airbnb perché non sono disponibili come file originali in questa cartella. È più affidabile caricare in seguito le fotografie originali dentro `assets/` e sostituire i link remoti con file locali. In questo modo le immagini non dipenderanno più da Airbnb.
