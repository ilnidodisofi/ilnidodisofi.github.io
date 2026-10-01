// Extra editorial detail for sections 04 and 05. Loaded after editorial.js.
(() => {
  const data = {
    it: {
      events: {
        bravio: 'FINE AGOSTO · CONTRADE, CORTEI E CORSA DELLE BOTTI',
        cantiere: 'LUGLIO–AGOSTO · MUSICA, TEATRO E PERFORMANCE',
        calici: '10 AGOSTO · VINO, DEGUSTAZIONI E CENTRO STORICO',
        live: 'SETTEMBRE · MUSICA INDIPENDENTE AD ACQUAVIVA',
        cantine: 'FINE MAGGIO · CANTINE, PRODUTTORI E DEGUSTAZIONI',
        natale: 'NOVEMBRE–GENNAIO · MERCATINI E ATMOSFERA NATALIZIA',
        ruscello: 'METÀ AGOSTO · TEATRO POPOLARE IN PIAZZA GRANDE'
      },
      noteTitle: 'Dove ci piace tornare',
      noteText: 'Prima dell’arrivo condividiamo cantine, enoteche, trattorie e botteghe che conosciamo personalmente e che sceglieremmo anche per noi.'
    },
    en: {
      events: {
        bravio: 'LATE AUGUST · CONTRADE, PARADES AND BARREL RACE',
        cantiere: 'JULY–AUGUST · MUSIC, THEATRE AND PERFORMANCE',
        calici: '10 AUGUST · WINE, TASTINGS AND THE OLD TOWN',
        live: 'SEPTEMBER · INDEPENDENT MUSIC IN ACQUAVIVA',
        cantine: 'LATE MAY · WINERIES, PRODUCERS AND TASTINGS',
        natale: 'NOVEMBER–JANUARY · MARKETS AND FESTIVE ATMOSPHERE',
        ruscello: 'MID-AUGUST · FOLK THEATRE IN PIAZZA GRANDE'
      },
      noteTitle: 'Places we return to',
      noteText: 'Before arrival we share wineries, wine bars, trattorias and small shops we know personally and would choose for ourselves.'
    },
    es: {
      events: {
        bravio: 'FINALES DE AGOSTO · CONTRADAS, DESFILES Y CARRERA DE BARRILES',
        cantiere: 'JULIO–AGOSTO · MÚSICA, TEATRO Y ESPECTÁCULOS',
        calici: '10 DE AGOSTO · VINO, CATAS Y CENTRO HISTÓRICO',
        live: 'SEPTIEMBRE · MÚSICA INDEPENDIENTE EN ACQUAVIVA',
        cantine: 'FINALES DE MAYO · BODEGAS, PRODUCTORES Y CATAS',
        natale: 'NOVIEMBRE–ENERO · MERCADOS Y AMBIENTE NAVIDEÑO',
        ruscello: 'MEDIADOS DE AGOSTO · TEATRO POPULAR EN PIAZZA GRANDE'
      },
      noteTitle: 'Lugares a los que volvemos',
      noteText: 'Antes de la llegada compartimos bodegas, enotecas, trattorias y tiendas que conocemos personalmente y que también elegiríamos para nosotros.'
    },
    de: {
      events: {
        bravio: 'ENDE AUGUST · CONTRADE, UMZÜGE UND FASSRENNEN',
        cantiere: 'JULI–AUGUST · MUSIK, THEATER UND PERFORMANCE',
        calici: '10. AUGUST · WEIN, VERKOSTUNGEN UND ALTSTADT',
        live: 'SEPTEMBER · INDEPENDENT-MUSIK IN ACQUAVIVA',
        cantine: 'ENDE MAI · WEINGÜTER, PRODUZENTEN UND VERKOSTUNGEN',
        natale: 'NOVEMBER–JANUAR · MÄRKTE UND WEIHNACHTSSTIMMUNG',
        ruscello: 'MITTE AUGUST · VOLKSTHEATER AUF DER PIAZZA GRANDE'
      },
      noteTitle: 'Orte, zu denen wir zurückkehren',
      noteText: 'Vor der Anreise teilen wir Weingüter, Enotheken, Trattorien und kleine Läden, die wir persönlich kennen und auch selbst wählen würden.'
    },
    fr: {
      events: {
        bravio: 'FIN AOÛT · CONTRADE, CORTÈGES ET COURSE DE TONNEAUX',
        cantiere: 'JUILLET–AOÛT · MUSIQUE, THÉÂTRE ET PERFORMANCES',
        calici: '10 AOÛT · VIN, DÉGUSTATIONS ET CENTRE HISTORIQUE',
        live: 'SEPTEMBRE · MUSIQUE INDÉPENDANTE À ACQUAVIVA',
        cantine: 'FIN MAI · DOMAINES, PRODUCTEURS ET DÉGUSTATIONS',
        natale: 'NOVEMBRE–JANVIER · MARCHÉS ET AMBIANCE DE NOËL',
        ruscello: 'MI-AOÛT · THÉÂTRE POPULAIRE SUR PIAZZA GRANDE'
      },
      noteTitle: 'Les adresses où nous revenons',
      noteText: 'Avant l’arrivée, nous partageons des domaines, bars à vin, trattorie et boutiques que nous connaissons personnellement et que nous choisirions aussi pour nous.'
    },
    ru: {
      events: {
        bravio: 'КОНЕЦ АВГУСТА · КОНТРАДЫ, ШЕСТВИЯ И ГОНКА БОЧЕК',
        cantiere: 'ИЮЛЬ–АВГУСТ · МУЗЫКА, ТЕАТР И ПЕРФОРМАНСЫ',
        calici: '10 АВГУСТА · ВИНО, ДЕГУСТАЦИИ И СТАРЫЙ ГОРОД',
        live: 'СЕНТЯБРЬ · НЕЗАВИСИМАЯ МУЗЫКА В АККВАВИВЕ',
        cantine: 'КОНЕЦ МАЯ · ВИНОДЕЛЬНИ, ПРОИЗВОДИТЕЛИ И ДЕГУСТАЦИИ',
        natale: 'НОЯБРЬ–ЯНВАРЬ · ЯРМАРКИ И РОЖДЕСТВЕНСКАЯ АТМОСФЕРА',
        ruscello: 'СЕРЕДИНА АВГУСТА · НАРОДНЫЙ ТЕАТР НА PIAZZA GRANDE'
      },
      noteTitle: 'Места, куда мы возвращаемся',
      noteText: 'Перед приездом мы делимся винодельнями, энотеками, тратториями и лавками, которые знаем лично и выбрали бы для себя.'
    },
    zh: {
      events: {
        bravio: '八月底 · 历史街区、巡游与滚酒桶赛',
        cantiere: '七月至八月 · 音乐、戏剧与表演',
        calici: '8月10日 · 葡萄酒、品鉴与老城氛围',
        live: '九月 · 阿夸维瓦独立音乐节',
        cantine: '五月底 · 酒庄、酿酒人和品鉴活动',
        natale: '十一月至一月 · 圣诞市集与节日氛围',
        ruscello: '八月中旬 · 大广场上的民间戏剧'
      },
      noteTitle: '我们会再次光顾的地方',
      noteText: '抵达前，我们会分享一些自己熟悉、也愿意亲自再去的酒庄、葡萄酒吧、托斯卡纳餐馆和小店。'
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
    const t = data[currentLang()];

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

    document.querySelectorAll('.food-highlights').forEach(el => el.remove());

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
