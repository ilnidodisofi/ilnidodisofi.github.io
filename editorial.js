// Editorial refinements for homepage copy. Loaded after script.js.
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
      "surroundings.title":"La Val d'Orcia<br><em>oltre Montepulciano.</em>",
      "surroundings.lead":"Da Montepulciano, borghi, colline e terme diventano tappe naturali per una giornata fuori porta.",
      "booking.title":"Scegli le tue date.<br><em>Al resto pensiamo noi.</em>",
      "booking.intro":"Indica il periodo desiderato. Verificheremo personalmente disponibilità e totale; dopo la conferma riceverai un link Stripe sicuro con l’importo esatto concordato.",
      "events.kicker":"04 — EVENTI A MONTEPULCIANO E DINTORNI",
      "events.title":"Ogni stagione ha<br><em>il suo appuntamento.</em>",
      "events.lead":"Vino, musica, tradizioni e feste popolari: alcuni degli appuntamenti che scandiscono l’anno tra Montepulciano e il territorio vicino.",
      "events.bravio.title":"Bravìo delle Botti",
      "events.bravio.text":"La corsa storica tra le otto contrade di Montepulciano: due spingitori per contrada fanno rotolare botti di circa 80 kg in salita fino a Piazza Grande.",
      "events.calici.title":"Calici di Stelle",
      "events.calici.text":"La notte di San Lorenzo dedicata al Vino Nobile e al Rosso di Montepulciano, con degustazioni, musica e prodotti del territorio nel centro storico.",
      "events.cantiere.title":"Cantiere Internazionale d’Arte",
      "events.cantiere.text":"Musica, teatro e performance trasformano Montepulciano e la Valdichiana in un grande palcoscenico estivo diffuso.",
      "events.live.title":"Live Rock Festival",
      "events.live.text":"Ad Acquaviva di Montepulciano, uno storico festival di musica indipendente con artisti italiani e internazionali.",
      "events.cantine.title":"Cantine Aperte",
      "events.cantine.text":"Un’occasione per entrare nelle cantine del territorio, incontrare i produttori e vivere il vino direttamente nei luoghi in cui nasce.",
      "events.natale.title":"Natale a Montepulciano",
      "events.natale.text":"Mercatini, casette in legno e atmosfera natalizia animano la parte alta del borgo durante l’Avvento e le festività.",
      "events.ruscello.title":"Ruscello · rievocazione contadina",
      "events.ruscello.text":"Nei dintorni di Arezzo, una festa dedicata alla civiltà contadina, alla mietitura e alla battitura del grano, con cucina tradizionale e spettacoli."
    },
    en: {
      "hero.subtitle":"An intimate home within the historic walls, just a few steps from Piazza Grande.",
      "position.lead":"Il Nido di Sofì is on Via del Poliziano, in the upper part of Montepulciano’s old town: a place from which the town is naturally explored on foot.",
      "home.title":"Simple, intimate,<br><em>thoughtfully detailed.</em>",
      "home.lead":"Terracotta floors, exposed beams and intimate spaces: a Tuscan home made to be enjoyed slowly, in Montepulciano’s old town.",
      "village.lead":"From Il Nido, some of the places and addresses that define Montepulciano are within easy walking distance.",
      "host.p2":"We have preserved the character of the house, adding what is needed to make it easy to live in without changing its nature.",
      "surroundings.title":"The Val d'Orcia<br><em>beyond Montepulciano.</em>",
      "surroundings.lead":"From Montepulciano, villages, hills and thermal baths become natural day-trip destinations.",
      "booking.title":"Choose your dates.<br><em>We’ll take care of the rest.</em>",
      "booking.intro":"Tell us your preferred dates. We will personally confirm availability and the total price; once confirmed, you will receive a secure Stripe link for the exact agreed amount.",
      "events.kicker":"04 — EVENTS IN MONTEPULCIANO & AROUND",
      "events.title":"Every season has<br><em>its own occasion.</em>",
      "events.lead":"Wine, music, traditions and local festivals: some of the events that shape the year in Montepulciano and nearby.",
      "events.bravio.title":"Bravìo delle Botti",
      "events.bravio.text":"The historic race between Montepulciano’s eight contrade, with teams pushing roughly 80 kg barrels uphill to Piazza Grande.",
      "events.calici.title":"Calici di Stelle",
      "events.calici.text":"A San Lorenzo night devoted to Vino Nobile and Rosso di Montepulciano, with tastings, music and local food in the old town.",
      "events.cantiere.title":"Cantiere Internazionale d’Arte",
      "events.cantiere.text":"Music, theatre and performance turn Montepulciano and the Valdichiana into a widespread summer stage.",
      "events.live.title":"Live Rock Festival",
      "events.live.text":"In Acquaviva di Montepulciano, a long-running independent music festival with Italian and international artists.",
      "events.cantine.title":"Cantine Aperte",
      "events.cantine.text":"A chance to step inside local wineries, meet producers and experience wine where it is actually made.",
      "events.natale.title":"Christmas in Montepulciano",
      "events.natale.text":"Markets, wooden chalets and Christmas atmosphere fill the upper part of the old town during Advent and the festive season.",
      "events.ruscello.title":"Ruscello · rural traditions",
      "events.ruscello.text":"Near Arezzo, a celebration of rural life, harvest and grain threshing, with traditional food and entertainment."
    },
    es: {
      "hero.subtitle":"Una casa íntima dentro de las murallas históricas, a pocos pasos de Piazza Grande.",
      "home.title":"Sencilla, íntima,<br><em>cuidada al detalle.</em>",
      "home.lead":"Suelos de terracota, vigas vistas y espacios recogidos: una casa toscana para disfrutar sin prisas, en el centro histórico de Montepulciano.",
      "surroundings.title":"La Val d'Orcia<br><em>más allá de Montepulciano.</em>",
      "booking.title":"Elige tus fechas.<br><em>Del resto nos ocupamos nosotros.</em>",
      "events.kicker":"04 — EVENTOS EN MONTEPULCIANO Y ALREDEDORES",
      "events.title":"Cada estación tiene<br><em>su cita.</em>",
      "events.lead":"Vino, música, tradiciones y fiestas populares marcan el año entre Montepulciano y su entorno.",
      "events.bravio.title":"Bravìo delle Botti","events.bravio.text":"La histórica carrera entre las ocho contradas de Montepulciano, empujando barriles de unos 80 kg cuesta arriba hasta Piazza Grande.",
      "events.calici.title":"Calici di Stelle","events.calici.text":"La noche de San Lorenzo dedicada al Vino Nobile y al Rosso di Montepulciano, con catas, música y productos locales.",
      "events.cantiere.title":"Cantiere Internazionale d’Arte","events.cantiere.text":"Música, teatro y espectáculos convierten Montepulciano y la Valdichiana en un gran escenario de verano.",
      "events.live.title":"Live Rock Festival","events.live.text":"En Acquaviva di Montepulciano, un histórico festival de música independiente con artistas italianos e internacionales.",
      "events.cantine.title":"Cantine Aperte","events.cantine.text":"Una oportunidad para entrar en las bodegas, conocer a los productores y vivir el vino en el lugar donde nace.",
      "events.natale.title":"Navidad en Montepulciano","events.natale.text":"Mercados, casetas de madera y ambiente navideño animan la parte alta del pueblo durante el Adviento.",
      "events.ruscello.title":"Ruscello · tradición rural","events.ruscello.text":"Cerca de Arezzo, una fiesta dedicada a la vida campesina, la siega y la trilla, con cocina tradicional y espectáculos."
    },
    de: {
      "hero.subtitle":"Ein persönliches Zuhause innerhalb der historischen Stadtmauern, nur wenige Schritte von der Piazza Grande entfernt.",
      "home.title":"Schlicht, persönlich,<br><em>mit Liebe zum Detail.</em>",
      "home.lead":"Terrakottaböden, Sichtbalken und gemütliche Räume: ein toskanisches Zuhause für entspannte Tage in der Altstadt von Montepulciano.",
      "surroundings.title":"Das Val d'Orcia<br><em>jenseits von Montepulciano.</em>",
      "booking.title":"Wählen Sie Ihre Daten.<br><em>Um den Rest kümmern wir uns.</em>",
      "events.kicker":"04 — VERANSTALTUNGEN IN MONTEPULCIANO & UMGEBUNG",
      "events.title":"Jede Jahreszeit hat<br><em>ihren eigenen Termin.</em>",
      "events.lead":"Wein, Musik, Traditionen und Volksfeste prägen das Jahr in Montepulciano und der Umgebung.",
      "events.bravio.title":"Bravìo delle Botti","events.bravio.text":"Das historische Fassrennen der acht Contrade von Montepulciano, bei dem rund 80 kg schwere Fässer bergauf bis zur Piazza Grande gerollt werden.",
      "events.calici.title":"Calici di Stelle","events.calici.text":"Die Nacht von San Lorenzo mit Vino Nobile, Rosso di Montepulciano, Verkostungen, Musik und regionalen Produkten.",
      "events.cantiere.title":"Cantiere Internazionale d’Arte","events.cantiere.text":"Musik, Theater und Performances verwandeln Montepulciano und die Valdichiana in eine sommerliche Kulturbühne.",
      "events.live.title":"Live Rock Festival","events.live.text":"In Acquaviva di Montepulciano findet ein traditionsreiches Independent-Festival mit italienischen und internationalen Künstlern statt.",
      "events.cantine.title":"Cantine Aperte","events.cantine.text":"Eine Gelegenheit, Weingüter zu besuchen, Produzenten kennenzulernen und Wein direkt an seinem Entstehungsort zu erleben.",
      "events.natale.title":"Weihnachten in Montepulciano","events.natale.text":"Märkte, Holzhütten und Weihnachtsstimmung beleben während der Adventszeit den oberen Teil der Altstadt.",
      "events.ruscello.title":"Ruscello · ländliche Tradition","events.ruscello.text":"Bei Arezzo erinnert ein Fest mit traditioneller Küche und Unterhaltung an Ernte, Dreschen und bäuerliches Leben."
    },
    fr: {
      "hero.subtitle":"Une maison intime à l’intérieur des remparts historiques, à quelques pas de Piazza Grande.",
      "home.title":"Simple, intime,<br><em>soignée dans les détails.</em>",
      "home.lead":"Sols en terre cuite, poutres apparentes et espaces intimes : une maison toscane à vivre tranquillement, dans le centre historique de Montepulciano.",
      "surroundings.title":"Le Val d'Orcia<br><em>au-delà de Montepulciano.</em>",
      "booking.title":"Choisissez vos dates.<br><em>Nous nous occupons du reste.</em>",
      "events.kicker":"04 — ÉVÉNEMENTS À MONTEPULCIANO ET ALENTOURS",
      "events.title":"Chaque saison a<br><em>son rendez-vous.</em>",
      "events.lead":"Vin, musique, traditions et fêtes populaires rythment l’année à Montepulciano et dans les environs.",
      "events.bravio.title":"Bravìo delle Botti","events.bravio.text":"La course historique des huit contrade de Montepulciano, avec des tonneaux d’environ 80 kg poussés en montée jusqu’à Piazza Grande.",
      "events.calici.title":"Calici di Stelle","events.calici.text":"La nuit de San Lorenzo consacrée au Vino Nobile et au Rosso di Montepulciano, avec dégustations, musique et produits locaux.",
      "events.cantiere.title":"Cantiere Internazionale d’Arte","events.cantiere.text":"Musique, théâtre et performances transforment Montepulciano et la Valdichiana en grande scène estivale.",
      "events.live.title":"Live Rock Festival","events.live.text":"À Acquaviva di Montepulciano, un festival historique de musique indépendante avec des artistes italiens et internationaux.",
      "events.cantine.title":"Cantine Aperte","events.cantine.text":"Une occasion d’entrer dans les domaines, de rencontrer les producteurs et de vivre le vin là où il naît.",
      "events.natale.title":"Noël à Montepulciano","events.natale.text":"Marchés, chalets en bois et ambiance de Noël animent la partie haute de la ville pendant l’Avent.",
      "events.ruscello.title":"Ruscello · traditions rurales","events.ruscello.text":"Près d’Arezzo, une fête consacrée à la vie rurale, à la moisson et au battage, avec cuisine traditionnelle et spectacles."
    },
    ru: {
      "events.kicker":"04 — СОБЫТИЯ В МОНТЕПУЛЬЧАНО И ОКРЕСТНОСТЯХ",
      "events.title":"У каждого сезона<br><em>своё событие.</em>",
      "events.lead":"Вино, музыка, традиции и народные праздники задают ритм году в Монтепульчано и окрестностях.",
      "events.bravio.title":"Bravìo delle Botti","events.bravio.text":"Историческая гонка восьми контрад Монтепульчано: тяжёлые бочки катят в гору до Piazza Grande.",
      "events.calici.title":"Calici di Stelle","events.calici.text":"Ночь Сан-Лоренцо с Vino Nobile, Rosso di Montepulciano, дегустациями, музыкой и местными продуктами.",
      "events.cantiere.title":"Cantiere Internazionale d’Arte","events.cantiere.text":"Музыка, театр и перформансы превращают Монтепульчано и Вальдикьяну в летнюю культурную сцену.",
      "events.live.title":"Live Rock Festival","events.live.text":"В Аквавиве-ди-Монтепульчано проходит известный фестиваль независимой музыки с итальянскими и международными артистами.",
      "events.cantine.title":"Cantine Aperte","events.cantine.text":"Возможность посетить винодельни, встретиться с производителями и познакомиться с вином там, где оно рождается.",
      "events.natale.title":"Рождество в Монтепульчано","events.natale.text":"Рождественские ярмарки и деревянные домики оживляют верхнюю часть старого города в период Адвента.",
      "events.ruscello.title":"Ruscello · сельские традиции","events.ruscello.text":"Недалеко от Ареццо проходит праздник сельской жизни, жатвы и молотьбы с традиционной кухней и развлечениями."
    },
    zh: {
      "events.kicker":"04 — 蒙特普尔恰诺及周边活动",
      "events.title":"每个季节，<br><em>都有值得期待的活动。</em>",
      "events.lead":"葡萄酒、音乐、传统与民俗节庆，让蒙特普尔恰诺及周边地区全年都有不同节奏。",
      "events.bravio.title":"Bravìo delle Botti 滚酒桶赛","events.bravio.text":"蒙特普尔恰诺八个历史街区之间的传统比赛，参赛者将约80公斤的酒桶沿上坡街道推至 Piazza Grande。",
      "events.calici.title":"Calici di Stelle","events.calici.text":"圣洛伦佐之夜以 Vino Nobile、Rosso di Montepulciano、品鉴、音乐和当地美食为主题。",
      "events.cantiere.title":"Cantiere Internazionale d’Arte","events.cantiere.text":"音乐、戏剧与表演让蒙特普尔恰诺和 Valdichiana 在夏季化身为一座开放舞台。",
      "events.live.title":"Live Rock Festival","events.live.text":"在 Acquaviva di Montepulciano 举办的独立音乐节，汇集意大利和国际艺术家。",
      "events.cantine.title":"Cantine Aperte 酒庄开放日","events.cantine.text":"走进当地酒庄、认识酿酒者，并在葡萄酒诞生的地方亲自体验它。",
      "events.natale.title":"蒙特普尔恰诺圣诞季","events.natale.text":"降临节和圣诞假期期间，木屋市集与节日氛围会装点老城上部。",
      "events.ruscello.title":"Ruscello · 乡村传统节","events.ruscello.text":"阿雷佐附近的乡村节庆，围绕收割、打谷和传统农耕生活展开，并设有地方美食与演出。"
    }
  };

  Object.entries(copy).forEach(([lang, values]) => {
    if (translations[lang]) Object.assign(translations[lang], values);
  });

  const oldTaste = document.querySelector('.taste-section');
  if (oldTaste) oldTaste.remove();
  const bravio = document.querySelector('#bravio');
  const host = document.querySelector('.host.section');
  if (bravio) bravio.remove();

  if (host && !document.querySelector('.events-section')) {
    const section = document.createElement('section');
    section.className = 'events-section section';
    section.innerHTML = `
      <div class="section-kicker" data-i18n="events.kicker">04 — EVENTI A MONTEPULCIANO E DINTORNI</div>
      <div class="events-head">
        <h2 data-i18n-html="events.title">Ogni stagione ha<br><em>il suo appuntamento.</em></h2>
        <p class="lead" data-i18n="events.lead">Vino, musica, tradizioni e feste popolari: alcuni degli appuntamenti che scandiscono l’anno tra Montepulciano e il territorio vicino.</p>
      </div>
      <div class="events-grid">
        <article><span>01</span><h3 data-i18n="events.bravio.title">Bravìo delle Botti</h3><p data-i18n="events.bravio.text">La corsa storica tra le otto contrade di Montepulciano: due spingitori per contrada fanno rotolare botti di circa 80 kg in salita fino a Piazza Grande.</p></article>
        <article><span>02</span><h3 data-i18n="events.calici.title">Calici di Stelle</h3><p data-i18n="events.calici.text">La notte di San Lorenzo dedicata al Vino Nobile e al Rosso di Montepulciano, con degustazioni, musica e prodotti del territorio nel centro storico.</p></article>
        <article><span>03</span><h3 data-i18n="events.cantiere.title">Cantiere Internazionale d’Arte</h3><p data-i18n="events.cantiere.text">Musica, teatro e performance trasformano Montepulciano e la Valdichiana in un grande palcoscenico estivo diffuso.</p></article>
        <article><span>04</span><h3 data-i18n="events.live.title">Live Rock Festival</h3><p data-i18n="events.live.text">Ad Acquaviva di Montepulciano, uno storico festival di musica indipendente con artisti italiani e internazionali.</p></article>
        <article><span>05</span><h3 data-i18n="events.cantine.title">Cantine Aperte</h3><p data-i18n="events.cantine.text">Un’occasione per entrare nelle cantine del territorio, incontrare i produttori e vivere il vino direttamente nei luoghi in cui nasce.</p></article>
        <article><span>06</span><h3 data-i18n="events.natale.title">Natale a Montepulciano</h3><p data-i18n="events.natale.text">Mercatini, casette in legno e atmosfera natalizia animano la parte alta del borgo durante l’Avvento e le festività.</p></article>
        <article><span>07</span><h3 data-i18n="events.ruscello.title">Ruscello · rievocazione contadina</h3><p data-i18n="events.ruscello.text">Nei dintorni di Arezzo, una festa dedicata alla civiltà contadina, alla mietitura e alla battitura del grano, con cucina tradizionale e spettacoli.</p></article>
      </div>`;
    host.parentNode.insertBefore(section, host);
  }
})();
