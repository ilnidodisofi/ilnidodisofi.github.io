// Extra editorial detail for sections 04 and 05. Loaded after editorial.js.
(() => {
  const data = {
    it: {
      events: {
        bravio: 'FINE AGOSTO · CONTRADE, CORTEI E CORSA DELLE BOTTI',
        cantiere: 'LUGLIO · MUSICA, TEATRO E PERFORMANCE',
        calici: 'AGOSTO · VINO, DEGUSTAZIONI E CENTRO STORICO',
        live: 'SETTEMBRE · MUSICA INDIPENDENTE AD ACQUAVIVA',
        cantine: 'PRIMAVERA E AUTUNNO · VISITE E DEGUSTAZIONI',
        natale: 'NOVEMBRE–GENNAIO · MERCATINI E ATMOSFERA NATALIZIA',
        ruscello: 'TRADIZIONE POPOLARE · TEATRO E CULTURA CONTADINA'
      },
      wine: ['Vino Nobile di Montepulciano', 'Rosso di Montepulciano', 'Brunello di Montalcino'],
      food: ['Pici', 'Pecorino di Pienza', 'Chianina'],
      noteTitle: 'I nostri indirizzi',
      noteText: 'Prima dell’arrivo condividiamo alcuni luoghi che conosciamo personalmente: cantine, enoteche, trattorie e botteghe da cui partire per scoprire il territorio con più gusto.'
    },
    en: {
      events: {
        bravio: 'LATE AUGUST · CONTRADE, PARADES AND BARREL RACE',
        cantiere: 'JULY · MUSIC, THEATRE AND PERFORMANCE',
        calici: 'AUGUST · WINE, TASTINGS AND THE OLD TOWN',
        live: 'SEPTEMBER · INDEPENDENT MUSIC IN ACQUAVIVA',
        cantine: 'SPRING & AUTUMN · WINERY VISITS AND TASTINGS',
        natale: 'NOVEMBER–JANUARY · MARKETS AND FESTIVE ATMOSPHERE',
        ruscello: 'FOLK TRADITION · THEATRE AND RURAL CULTURE'
      },
      wine: ['Vino Nobile di Montepulciano', 'Rosso di Montepulciano', 'Brunello di Montalcino'],
      food: ['Pici', 'Pecorino di Pienza', 'Chianina beef'],
      noteTitle: 'Our places',
      noteText: 'Before arrival we share a few places we know personally: wineries, wine bars, trattorias and small shops that are a good starting point for discovering the area through food and wine.'
    },
    es: {
      events: {
        bravio: 'FINALES DE AGOSTO · CONTRADAS, DESFILES Y CARRERA DE BARRILES',
        cantiere: 'JULIO · MÚSICA, TEATRO Y ESPECTÁCULOS',
        calici: 'AGOSTO · VINO, CATAS Y CENTRO HISTÓRICO',
        live: 'SEPTIEMBRE · MÚSICA INDEPENDIENTE EN ACQUAVIVA',
        cantine: 'PRIMAVERA Y OTOÑO · VISITAS Y CATAS',
        natale: 'NOVIEMBRE–ENERO · MERCADOS Y AMBIENTE NAVIDEÑO',
        ruscello: 'TRADICIÓN POPULAR · TEATRO Y CULTURA CAMPESINA'
      },
      wine: ['Vino Nobile di Montepulciano', 'Rosso di Montepulciano', 'Brunello di Montalcino'],
      food: ['Pici', 'Pecorino di Pienza', 'Chianina'],
      noteTitle: 'Nuestros sitios',
      noteText: 'Antes de la llegada compartimos algunos lugares que conocemos personalmente: bodegas, enotecas, trattorias y tiendas para descubrir mejor el territorio.'
    },
    de: {
      events: {
        bravio: 'ENDE AUGUST · CONTRADE, UMZÜGE UND FASSRENNEN',
        cantiere: 'JULI · MUSIK, THEATER UND PERFORMANCE',
        calici: 'AUGUST · WEIN, VERKOSTUNGEN UND ALTSTADT',
        live: 'SEPTEMBER · INDEPENDENT-MUSIK IN ACQUAVIVA',
        cantine: 'FRÜHLING & HERBST · BESUCHE UND VERKOSTUNGEN',
        natale: 'NOVEMBER–JANUAR · MÄRKTE UND WEIHNACHTSSTIMMUNG',
        ruscello: 'VOLKSTRADITION · THEATER UND LÄNDLICHE KULTUR'
      },
      wine: ['Vino Nobile di Montepulciano', 'Rosso di Montepulciano', 'Brunello di Montalcino'],
      food: ['Pici', 'Pecorino di Pienza', 'Chianina-Rind'],
      noteTitle: 'Unsere Adressen',
      noteText: 'Vor der Anreise teilen wir einige Orte, die wir persönlich kennen: Weingüter, Enotheken, Trattorien und kleine Läden als guter Ausgangspunkt für Genuss im Gebiet.'
    },
    fr: {
      events: {
        bravio: 'FIN AOÛT · CONTRADE, CORTÈGES ET COURSE DE TONNEAUX',
        cantiere: 'JUILLET · MUSIQUE, THÉÂTRE ET PERFORMANCES',
        calici: 'AOÛT · VIN, DÉGUSTATIONS ET CENTRE HISTORIQUE',
        live: 'SEPTEMBRE · MUSIQUE INDÉPENDANTE À ACQUAVIVA',
        cantine: 'PRINTEMPS & AUTOMNE · VISITES ET DÉGUSTATIONS',
        natale: 'NOVEMBRE–JANVIER · MARCHÉS ET AMBIANCE DE NOËL',
        ruscello: 'TRADITION POPULAIRE · THÉÂTRE ET CULTURE RURALE'
      },
      wine: ['Vino Nobile di Montepulciano', 'Rosso di Montepulciano', 'Brunello di Montalcino'],
      food: ['Pici', 'Pecorino di Pienza', 'Chianina'],
      noteTitle: 'Nos adresses',
      noteText: 'Avant l’arrivée, nous partageons quelques adresses que nous connaissons personnellement : domaines, bars à vin, trattorie et boutiques pour découvrir le territoire par le goût.'
    }
  };

  const eventKeys = [
    ['events.bravio.title', 'bravio'],
    ['events.cantiere.title', 'cantiere'],
    ['events.calici.title', 'calici'],
    ['events.live.title', 'live'],
    ['events.cantine.title', 'cantine'],
    ['events.natale.title', 'natale'],
    ['events.ruscello.title', 'ruscello']
  ];

  function currentLang() {
    const selected = document.getElementById('languageSelect')?.value || document.documentElement.lang || 'it';
    return data[selected] ? selected : 'en';
  }

  function render() {
    const lang = currentLang();
    const t = data[lang];

    eventKeys.forEach(([i18nKey, key]) => {
      const title = document.querySelector(`.events-grid [data-i18n="${i18nKey}"]`);
      const article = title?.closest('article');
      if (!article) return;
      let meta = article.querySelector('.event-meta');
      if (!meta) {
        meta = document.createElement('p');
        meta.className = 'event-meta';
        title.insertAdjacentElement('afterend', meta);
      }
      meta.textContent = t.events[key];
    });

    const wineCard = document.querySelector('.food-grid .food-wine');
    const foodCard = document.querySelector('.food-grid .food-table');
    [[wineCard, t.wine], [foodCard, t.food]].forEach(([card, items]) => {
      if (!card) return;
      let highlights = card.querySelector('.food-highlights');
      if (!highlights) {
        highlights = document.createElement('div');
        highlights.className = 'food-highlights';
        card.appendChild(highlights);
      }
      highlights.innerHTML = items.map(item => `<span>${item}</span>`).join('');
    });

    const grid = document.querySelector('.food-grid');
    if (grid) {
      let note = document.querySelector('.food-note');
      if (!note) {
        note = document.createElement('div');
        note.className = 'food-note';
        grid.insertAdjacentElement('afterend', note);
      }
      note.innerHTML = `<strong>${t.noteTitle}</strong><p>${t.noteText}</p>`;
    }
  }

  render();
  document.getElementById('languageSelect')?.addEventListener('change', () => setTimeout(render, 0));
})();
