// Homepage editorial layers. Loaded after script.js.
(() => {
  if (typeof translations === 'undefined') return;

  const copy = {
    it: {
      "hero.subtitle":"Una dimora intima all’interno delle mura storiche, a pochi passi da Piazza Grande.",
      "position.lead":"Il Nido di Sofì si trova in Via del Poliziano, nella parte alta del centro storico di Montepulciano: una posizione da cui il borgo si scopre naturalmente a piedi.",
      "home.title":"Semplice, raccolta,<br><em>curata nei dettagli.</em>",
      "home.lead":"Pavimenti in terracotta, travi a vista e spazi raccolti: una dimora toscana da vivere con calma, nel centro storico di Montepulciano.",
      "village.lead":"Dal Nido raggiungi facilmente alcuni dei luoghi e degli indirizzi che rendono speciale Montepulciano.",
      "host.p2":"Abbiamo conservato il carattere della casa, aggiungendo ciò che serve per viverla con naturalezza, senza snaturarla.",
      "events.kicker":"04 — EVENTI A MONTEPULCIANO",
      "events.title":"Un borgo,<br><em>molti appuntamenti.</em>",
      "events.lead":"Tradizioni, vino, musica e cultura accompagnano Montepulciano durante tutto l’anno.",
      "events.cantiere.title":"Cantiere Internazionale d’Arte","events.cantiere.text":"Musica, teatro e performance trasformano Montepulciano e la Valdichiana in un palcoscenico estivo diffuso.",
      "events.calici.title":"Calici di Stelle","events.calici.text":"Una serata dedicata al Vino Nobile e al Rosso di Montepulciano, tra degustazioni, musica e centro storico.",
      "events.bravio.title":"Bravìo delle Botti","events.bravio.text":"La storica corsa delle otto contrade: botti di circa 80 kg vengono spinte in salita fino a Piazza Grande.",
      "events.live.title":"Live Rock Festival","events.live.text":"Ad Acquaviva di Montepulciano, musica indipendente con artisti italiani e internazionali.",
      "events.cantine.title":"Cantine Aperte","events.cantine.text":"Cantine visitabili, incontri con i produttori e degustazioni direttamente nei luoghi in cui nasce il vino.",
      "events.natale.title":"Natale a Montepulciano","events.natale.text":"Mercatini, casette in legno e atmosfera natalizia animano la parte alta del borgo durante le festività.",
      "events.ruscello.title":"Ruscello · tradizione contadina","events.ruscello.text":"Una rievocazione della civiltà rurale tra mietitura, battitura del grano, cucina tradizionale e spettacoli.",
      "food.kicker":"05 — ENOGASTRONOMIA",
      "food.title":"Un territorio da bere<br><em>e da assaggiare.</em>",
      "food.lead":"Il vino e la tavola sono due modi diversi di conoscere la stessa Toscana.",
      "food.wine.title":"ENO · VINI E CANTINE","food.wine.text":"Vino Nobile di Montepulciano e Rosso di Montepulciano sono protagonisti del territorio. Poco più lontano, Montalcino porta con sé il Brunello. Cantine nel centro storico e aziende tra le colline permettono di alternare degustazioni, visite e paesaggio.",
      "food.table.title":"GASTRO · SAPORI DEL TERRITORIO","food.table.text":"Pici, Pecorino di Pienza, carne di razza Chianina e cucina toscana raccontano il territorio a tavola. Una gastronomia semplice e riconoscibile, legata ai prodotti e alle ricette della zona.",
      "surroundings.kicker":"07 — DINTORNI","surroundings.title":"La Val d'Orcia<br><em>oltre Montepulciano.</em>",
      "surroundings.lead":"Da Montepulciano, borghi, colline e terme diventano tappe naturali per una giornata fuori porta.",
      "booking.kicker":"08 — PRENOTA DIRETTAMENTE","booking.title":"Scegli le tue date.<br><em>Al resto pensiamo noi.</em>",
      "booking.intro":"Indica il periodo desiderato. Verificheremo personalmente disponibilità e totale; dopo la conferma riceverai un link Stripe sicuro con l’importo esatto concordato.",
      "faq.kicker":"10 — FAQ"
    },
    en: {
      "hero.subtitle":"An intimate home within the historic walls, just a few steps from Piazza Grande.",
      "home.title":"Simple, intimate,<br><em>thoughtfully detailed.</em>",
      "home.lead":"Terracotta floors, exposed beams and intimate spaces: a Tuscan home made to be enjoyed slowly in Montepulciano’s old town.",
      "events.kicker":"04 — EVENTS IN MONTEPULCIANO","events.title":"One town,<br><em>many occasions.</em>","events.lead":"Traditions, wine, music and culture accompany Montepulciano throughout the year.",
      "events.cantiere.title":"Cantiere Internazionale d’Arte","events.cantiere.text":"Music, theatre and performance turn Montepulciano and the Valdichiana into a summer stage.",
      "events.calici.title":"Calici di Stelle","events.calici.text":"An evening devoted to Vino Nobile and Rosso di Montepulciano, with tastings, music and the old town as a backdrop.",
      "events.bravio.title":"Bravìo delle Botti","events.bravio.text":"The historic race of the eight contrade, pushing roughly 80 kg barrels uphill to Piazza Grande.",
      "events.live.title":"Live Rock Festival","events.live.text":"Independent music in Acquaviva di Montepulciano with Italian and international artists.",
      "events.cantine.title":"Cantine Aperte","events.cantine.text":"Open wineries, meetings with producers and tastings where the wine is made.",
      "events.natale.title":"Christmas in Montepulciano","events.natale.text":"Markets, wooden chalets and festive atmosphere fill the upper old town during the Christmas season.",
      "events.ruscello.title":"Ruscello · rural traditions","events.ruscello.text":"A celebration of rural life, harvesting and threshing, with traditional food and entertainment.",
      "food.kicker":"05 — WINE & FOOD","food.title":"A territory to drink<br><em>and to taste.</em>","food.lead":"Wine and food are two different ways to discover the same Tuscany.",
      "food.wine.title":"WINE · CELLARS & VINEYARDS","food.wine.text":"Vino Nobile and Rosso di Montepulciano define the local wine culture. Nearby Montalcino adds Brunello, while historic cellars and countryside estates offer tastings, visits and landscape.",
      "food.table.title":"FOOD · LOCAL FLAVOURS","food.table.text":"Pici, Pecorino di Pienza, Chianina beef and Tuscan cooking tell the story of the area at the table, through distinctive local ingredients and recipes.",
      "surroundings.kicker":"07 — SURROUNDINGS","surroundings.title":"The Val d'Orcia<br><em>beyond Montepulciano.</em>",
      "booking.kicker":"08 — BOOK DIRECT","booking.title":"Choose your dates.<br><em>We’ll take care of the rest.</em>","faq.kicker":"10 — FAQ"
    },
    es: {
      "events.kicker":"04 — EVENTOS EN MONTEPULCIANO","events.title":"Un pueblo,<br><em>muchas citas.</em>","events.lead":"Tradiciones, vino, música y cultura acompañan Montepulciano durante todo el año.",
      "events.cantiere.title":"Cantiere Internazionale d’Arte","events.cantiere.text":"Música, teatro y espectáculos convierten Montepulciano y la Valdichiana en un escenario de verano.",
      "events.calici.title":"Calici di Stelle","events.calici.text":"Una noche dedicada al Vino Nobile y al Rosso di Montepulciano, entre catas, música y casco histórico.",
      "events.bravio.title":"Bravìo delle Botti","events.bravio.text":"La carrera histórica de las ocho contradas, empujando barriles de unos 80 kg cuesta arriba hasta Piazza Grande.",
      "events.live.title":"Live Rock Festival","events.live.text":"Música independiente en Acquaviva di Montepulciano con artistas italianos e internacionales.",
      "events.cantine.title":"Cantine Aperte","events.cantine.text":"Bodegas abiertas, encuentros con productores y catas en los lugares donde nace el vino.",
      "events.natale.title":"Navidad en Montepulciano","events.natale.text":"Mercados, casetas de madera y ambiente navideño animan la parte alta del pueblo.",
      "events.ruscello.title":"Ruscello · tradición rural","events.ruscello.text":"Una recreación de la vida campesina, la siega y la trilla, con cocina tradicional y espectáculos.",
      "food.kicker":"05 — ENOGASTRONOMÍA","food.title":"Un territorio para beber<br><em>y saborear.</em>","food.lead":"El vino y la mesa son dos formas de descubrir la misma Toscana.",
      "food.wine.title":"VINO · BODEGAS Y VIÑEDOS","food.wine.text":"Vino Nobile y Rosso di Montepulciano protagonizan el territorio. Cerca, Montalcino aporta el Brunello, entre bodegas históricas, fincas y catas.",
      "food.table.title":"GASTRO · SABORES LOCALES","food.table.text":"Pici, Pecorino di Pienza, carne Chianina y cocina toscana cuentan el territorio a través de productos y recetas locales.",
      "surroundings.kicker":"07 — ALREDEDORES","booking.kicker":"08 — RESERVA DIRECTA","faq.kicker":"10 — FAQ"
    },
    de: {
      "events.kicker":"04 — VERANSTALTUNGEN IN MONTEPULCIANO","events.title":"Eine Stadt,<br><em>viele Erlebnisse.</em>","events.lead":"Traditionen, Wein, Musik und Kultur begleiten Montepulciano durch das ganze Jahr.",
      "events.cantiere.title":"Cantiere Internazionale d’Arte","events.cantiere.text":"Musik, Theater und Performances machen Montepulciano und die Valdichiana zur sommerlichen Bühne.",
      "events.calici.title":"Calici di Stelle","events.calici.text":"Ein Abend mit Vino Nobile, Rosso di Montepulciano, Verkostungen, Musik und Altstadtatmosphäre.",
      "events.bravio.title":"Bravìo delle Botti","events.bravio.text":"Das historische Rennen der acht Contrade mit rund 80 kg schweren Fässern bergauf bis zur Piazza Grande.",
      "events.live.title":"Live Rock Festival","events.live.text":"Independent-Musik in Acquaviva di Montepulciano mit italienischen und internationalen Künstlern.",
      "events.cantine.title":"Cantine Aperte","events.cantine.text":"Offene Weingüter, Treffen mit Produzenten und Verkostungen direkt am Entstehungsort des Weins.",
      "events.natale.title":"Weihnachten in Montepulciano","events.natale.text":"Märkte, Holzhütten und Weihnachtsstimmung beleben die obere Altstadt.",
      "events.ruscello.title":"Ruscello · bäuerliche Tradition","events.ruscello.text":"Eine Erinnerung an ländliches Leben, Ernte und Dreschen mit traditioneller Küche und Unterhaltung.",
      "food.kicker":"05 — WEIN & KULINARIK","food.title":"Eine Region zum Trinken<br><em>und Genießen.</em>","food.lead":"Wein und Küche sind zwei Wege, dieselbe Toskana kennenzulernen.",
      "food.wine.title":"WEIN · KELLER & REBEN","food.wine.text":"Vino Nobile und Rosso di Montepulciano prägen die Region. In der Nähe ergänzt Montalcino mit Brunello das Erlebnis aus Kellern, Gütern und Verkostungen.",
      "food.table.title":"KÜCHE · REGIONALE AROMEN","food.table.text":"Pici, Pecorino di Pienza, Chianina-Rind und toskanische Küche erzählen die Region über Produkte und Rezepte.",
      "surroundings.kicker":"07 — UMGEBUNG","booking.kicker":"08 — DIREKT BUCHEN","faq.kicker":"10 — FAQ"
    },
    fr: {
      "events.kicker":"04 — ÉVÉNEMENTS À MONTEPULCIANO","events.title":"Un bourg,<br><em>de nombreux rendez-vous.</em>","events.lead":"Traditions, vin, musique et culture accompagnent Montepulciano toute l’année.",
      "events.cantiere.title":"Cantiere Internazionale d’Arte","events.cantiere.text":"Musique, théâtre et performances transforment Montepulciano et la Valdichiana en scène estivale.",
      "events.calici.title":"Calici di Stelle","events.calici.text":"Une soirée consacrée au Vino Nobile et au Rosso di Montepulciano, entre dégustations, musique et centre historique.",
      "events.bravio.title":"Bravìo delle Botti","events.bravio.text":"La course historique des huit contrade, avec des tonneaux d’environ 80 kg poussés jusqu’à Piazza Grande.",
      "events.live.title":"Live Rock Festival","events.live.text":"Musique indépendante à Acquaviva di Montepulciano avec artistes italiens et internationaux.",
      "events.cantine.title":"Cantine Aperte","events.cantine.text":"Domaines ouverts, rencontres avec les producteurs et dégustations là où le vin est produit.",
      "events.natale.title":"Noël à Montepulciano","events.natale.text":"Marchés, chalets en bois et ambiance de Noël animent la partie haute du bourg.",
      "events.ruscello.title":"Ruscello · tradition rurale","events.ruscello.text":"Une évocation de la vie rurale, de la moisson et du battage avec cuisine traditionnelle et spectacles.",
      "food.kicker":"05 — VIN & GASTRONOMIE","food.title":"Un territoire à boire<br><em>et à savourer.</em>","food.lead":"Le vin et la table sont deux façons de découvrir la même Toscane.",
      "food.wine.title":"VIN · CAVES & VIGNOBLES","food.wine.text":"Vino Nobile et Rosso di Montepulciano dominent le territoire. À proximité, Montalcino ajoute le Brunello, entre caves historiques, domaines et dégustations.",
      "food.table.title":"TABLE · SAVEURS LOCALES","food.table.text":"Pici, Pecorino di Pienza, viande Chianina et cuisine toscane racontent le territoire à travers ses produits et recettes.",
      "surroundings.kicker":"07 — ALENTOURS","booking.kicker":"08 — RÉSERVER EN DIRECT","faq.kicker":"10 — FAQ"
    },
    ru: {"events.kicker":"04 — СОБЫТИЯ В МОНТЕПУЛЬЧАНО","food.kicker":"05 — ВИНО И ГАСТРОНОМИЯ","surroundings.kicker":"07 — ОКРЕСТНОСТИ","booking.kicker":"08 — ПРЯМОЕ БРОНИРОВАНИЕ","faq.kicker":"10 — FAQ"},
    zh: {"events.kicker":"04 — 蒙特普尔恰诺活动","food.kicker":"05 — 葡萄酒与美食","surroundings.kicker":"07 — 周边","booking.kicker":"08 — 直接预订","faq.kicker":"10 — 常见问题"}
  };

  Object.entries(copy).forEach(([lang, values]) => {
    if (translations[lang]) Object.assign(translations[lang], values);
  });

  document.querySelector('.taste-section')?.remove();
  document.querySelector('#bravio')?.remove();
  document.querySelector('.events-section')?.remove();
  document.querySelector('.food-section')?.remove();

  const host = document.querySelector('.host.section');
  if (host) {
    const events = document.createElement('section');
    events.className = 'events-section section';
    events.innerHTML = `
      <div class="section-kicker" data-i18n="events.kicker">04 — EVENTI A MONTEPULCIANO</div>
      <div class="events-head"><h2 data-i18n-html="events.title">Un borgo,<br><em>molti appuntamenti.</em></h2><p class="lead" data-i18n="events.lead">Tradizioni, vino, musica e cultura accompagnano Montepulciano durante tutto l’anno.</p></div>
      <div class="events-grid mobile-rail">
        <article><span>01</span><h3 data-i18n="events.cantiere.title">Cantiere Internazionale d’Arte</h3><p data-i18n="events.cantiere.text">Musica, teatro e performance trasformano Montepulciano e la Valdichiana in un palcoscenico estivo diffuso.</p></article>
        <article><span>02</span><h3 data-i18n="events.calici.title">Calici di Stelle</h3><p data-i18n="events.calici.text">Una serata dedicata al Vino Nobile e al Rosso di Montepulciano.</p></article>
        <article><span>03</span><h3 data-i18n="events.bravio.title">Bravìo delle Botti</h3><p data-i18n="events.bravio.text">La storica corsa delle otto contrade con botti spinte fino a Piazza Grande.</p></article>
        <article><span>04</span><h3 data-i18n="events.live.title">Live Rock Festival</h3><p data-i18n="events.live.text">Musica indipendente ad Acquaviva di Montepulciano.</p></article>
        <article><span>05</span><h3 data-i18n="events.cantine.title">Cantine Aperte</h3><p data-i18n="events.cantine.text">Cantine visitabili, produttori e degustazioni.</p></article>
        <article><span>06</span><h3 data-i18n="events.natale.title">Natale a Montepulciano</h3><p data-i18n="events.natale.text">Mercatini e atmosfera natalizia nel borgo.</p></article>
        <article><span>07</span><h3 data-i18n="events.ruscello.title">Ruscello · tradizione contadina</h3><p data-i18n="events.ruscello.text">Una rievocazione della civiltà rurale e delle sue tradizioni.</p></article>
      </div>`;

    const food = document.createElement('section');
    food.className = 'food-section section';
    food.innerHTML = `
      <div class="section-kicker" data-i18n="food.kicker">05 — ENOGASTRONOMIA</div>
      <div class="food-head"><h2 data-i18n-html="food.title">Un territorio da bere<br><em>e da assaggiare.</em></h2><p class="lead" data-i18n="food.lead">Il vino e la tavola sono due modi diversi di conoscere la stessa Toscana.</p></div>
      <div class="food-grid mobile-rail">
        <article class="food-wine"><span>ENO</span><h3 data-i18n="food.wine.title">ENO · VINI E CANTINE</h3><p data-i18n="food.wine.text">Vino Nobile di Montepulciano, Rosso di Montepulciano, Brunello di Montalcino, cantine e degustazioni.</p></article>
        <article class="food-table"><span>GASTRO</span><h3 data-i18n="food.table.title">GASTRO · SAPORI DEL TERRITORIO</h3><p data-i18n="food.table.text">Pici, Pecorino di Pienza, Chianina e cucina toscana.</p></article>
      </div>`;

    host.parentNode.insertBefore(events, host);
    host.parentNode.insertBefore(food, host);

    const hostKicker = host.querySelector('.section-kicker');
    if (hostKicker) hostKicker.textContent = '06 — ROSARIO & SOFIA';
  }

  const contactsKicker = document.querySelector('.contacts .section-kicker');
  if (contactsKicker) contactsKicker.textContent = '09 — CONTATTI';
})();
