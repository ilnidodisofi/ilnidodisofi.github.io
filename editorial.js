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
      "taste.kicker":"VINO, TAVOLA, STAGIONI",
      "taste.title":"Montepulciano si assaggia,<br><em>si ascolta, si vive.</em>",
      "taste.lead":"Per molti il viaggio parte dal vino. Qui può continuare a tavola e nel calendario del borgo.",
      "taste.wine.title":"Il vino, dentro il borgo",
      "taste.wine.text":"Vino Nobile di Montepulciano, Rosso di Montepulciano, enoteche, cantine e degustazioni: il vino è parte dell’esperienza, non una tappa a parte.",
      "taste.food.title":"La Toscana a tavola",
      "taste.food.text":"Pici, carne Chianina, Pecorino di Pienza e cucina toscana raccontano il territorio tanto quanto i suoi paesaggi.",
      "taste.events.title":"Un borgo che cambia con le stagioni",
      "taste.events.text":"Cantiere Internazionale d’Arte in estate, Calici di Stelle ad agosto, Bravìo a fine agosto, Live Rock ad Acquaviva a settembre e mercatini di Natale in inverno."
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
      "taste.kicker":"WINE, FOOD, SEASONS",
      "taste.title":"Montepulciano is something<br><em>to taste, hear and live.</em>",
      "taste.lead":"For many travellers the journey begins with wine. Here it continues at the table and through the town’s calendar.",
      "taste.wine.title":"Wine, within the old town",
      "taste.wine.text":"Vino Nobile di Montepulciano, Rosso di Montepulciano, wine bars, cellars and tastings make wine part of the experience rather than a separate stop.",
      "taste.food.title":"Tuscany at the table",
      "taste.food.text":"Pici, Chianina beef, Pecorino di Pienza and Tuscan cooking tell the story of the area as clearly as its landscapes.",
      "taste.events.title":"A town that changes with the seasons",
      "taste.events.text":"The Cantiere Internazionale d’Arte in summer, Calici di Stelle in August, the Bravìo at the end of August, Live Rock in nearby Acquaviva in September and Christmas markets in winter."
    },
    es: {
      "hero.subtitle":"Una casa íntima dentro de las murallas históricas, a pocos pasos de Piazza Grande.",
      "position.lead":"Il Nido di Sofì se encuentra en Via del Poliziano, en la parte alta del casco histórico de Montepulciano: una ubicación perfecta para descubrir el pueblo a pie.",
      "home.title":"Sencilla, íntima,<br><em>cuidada al detalle.</em>",
      "home.lead":"Suelos de terracota, vigas vistas y espacios recogidos: una casa toscana para disfrutar sin prisas, en el centro histórico de Montepulciano.",
      "village.lead":"Desde Il Nido puedes llegar fácilmente a algunos de los lugares que mejor cuentan Montepulciano.",
      "host.p2":"Hemos conservado el carácter de la casa, añadiendo lo necesario para vivirla con naturalidad, sin desvirtuarla.",
      "surroundings.title":"La Val d'Orcia<br><em>más allá de Montepulciano.</em>",
      "surroundings.lead":"Desde Montepulciano, pueblos, colinas y termas se convierten en escapadas naturales de un día.",
      "booking.title":"Elige tus fechas.<br><em>Del resto nos ocupamos nosotros.</em>",
      "booking.intro":"Indica las fechas que prefieres. Comprobaremos personalmente disponibilidad y precio total; después recibirás un enlace seguro de Stripe con el importe exacto acordado.",
      "taste.kicker":"VINO, MESA, ESTACIONES",
      "taste.title":"Montepulciano se saborea,<br><em>se escucha y se vive.</em>",
      "taste.lead":"Para muchos el viaje empieza con el vino. Aquí continúa en la mesa y en el calendario del pueblo.",
      "taste.wine.title":"El vino, dentro del pueblo",
      "taste.wine.text":"Vino Nobile di Montepulciano, Rosso di Montepulciano, enotecas, bodegas y catas hacen del vino una parte de la experiencia, no una parada aparte.",
      "taste.food.title":"La Toscana en la mesa",
      "taste.food.text":"Pici, carne Chianina, Pecorino di Pienza y cocina toscana cuentan el territorio tanto como sus paisajes.",
      "taste.events.title":"Un pueblo que cambia con las estaciones",
      "taste.events.text":"Cantiere Internazionale d’Arte en verano, Calici di Stelle en agosto, Bravìo a finales de agosto, Live Rock en Acquaviva en septiembre y mercados navideños en invierno."
    },
    de: {
      "hero.subtitle":"Ein persönliches Zuhause innerhalb der historischen Stadtmauern, nur wenige Schritte von der Piazza Grande entfernt.",
      "position.lead":"Il Nido di Sofì liegt in der Via del Poliziano im oberen Teil der Altstadt von Montepulciano – ideal, um den Ort zu Fuß zu entdecken.",
      "home.title":"Schlicht, persönlich,<br><em>mit Liebe zum Detail.</em>",
      "home.lead":"Terrakottaböden, Sichtbalken und gemütliche Räume: ein toskanisches Zuhause für entspannte Tage in der Altstadt von Montepulciano.",
      "village.lead":"Vom Il Nido erreichen Sie bequem einige der Orte, die Montepulciano besonders machen.",
      "host.p2":"Wir haben den Charakter des Hauses bewahrt und nur das ergänzt, was einen natürlichen, unkomplizierten Aufenthalt ermöglicht.",
      "surroundings.title":"Das Val d'Orcia<br><em>jenseits von Montepulciano.</em>",
      "surroundings.lead":"Von Montepulciano aus werden Dörfer, Hügel und Thermalbäder zu natürlichen Zielen für einen Tagesausflug.",
      "booking.title":"Wählen Sie Ihre Daten.<br><em>Um den Rest kümmern wir uns.</em>",
      "booking.intro":"Nennen Sie uns Ihre Wunschdaten. Wir prüfen Verfügbarkeit und Gesamtpreis persönlich; anschließend erhalten Sie einen sicheren Stripe-Link über den genau vereinbarten Betrag.",
      "taste.kicker":"WEIN, KÜCHE, JAHRESZEITEN",
      "taste.title":"Montepulciano kann man<br><em>schmecken, hören und erleben.</em>",
      "taste.lead":"Für viele beginnt die Reise mit dem Wein. Hier geht sie am Tisch und im Veranstaltungskalender der Stadt weiter.",
      "taste.wine.title":"Wein mitten in der Altstadt",
      "taste.wine.text":"Vino Nobile di Montepulciano, Rosso di Montepulciano, Weinbars, Keller und Verkostungen machen den Wein zu einem Teil des Aufenthalts.",
      "taste.food.title":"Toskana auf dem Teller",
      "taste.food.text":"Pici, Chianina-Rind, Pecorino di Pienza und toskanische Küche erzählen ebenso viel über die Region wie ihre Landschaft.",
      "taste.events.title":"Eine Stadt im Rhythmus der Jahreszeiten",
      "taste.events.text":"Cantiere Internazionale d’Arte im Sommer, Calici di Stelle im August, Bravìo Ende August, Live Rock im nahegelegenen Acquaviva im September und Weihnachtsmärkte im Winter."
    },
    fr: {
      "hero.subtitle":"Une maison intime à l’intérieur des remparts historiques, à quelques pas de Piazza Grande.",
      "position.lead":"Il Nido di Sofì se trouve Via del Poliziano, dans la partie haute du centre historique de Montepulciano : un emplacement idéal pour découvrir la ville à pied.",
      "home.title":"Simple, intime,<br><em>soignée dans les détails.</em>",
      "home.lead":"Sols en terre cuite, poutres apparentes et espaces intimes : une maison toscane à vivre tranquillement, dans le centre historique de Montepulciano.",
      "village.lead":"Depuis Il Nido, vous rejoignez facilement quelques-uns des lieux qui racontent le mieux Montepulciano.",
      "host.p2":"Nous avons préservé le caractère de la maison en ajoutant seulement ce qui permet de la vivre naturellement, sans la dénaturer.",
      "surroundings.title":"Le Val d'Orcia<br><em>au-delà de Montepulciano.</em>",
      "surroundings.lead":"Depuis Montepulciano, villages, collines et thermes deviennent des escapades naturelles à la journée.",
      "booking.title":"Choisissez vos dates.<br><em>Nous nous occupons du reste.</em>",
      "booking.intro":"Indiquez les dates souhaitées. Nous vérifierons personnellement disponibilité et prix total ; après confirmation, vous recevrez un lien Stripe sécurisé correspondant au montant exact convenu.",
      "taste.kicker":"VIN, TABLE, SAISONS",
      "taste.title":"Montepulciano se goûte,<br><em>s’écoute et se vit.</em>",
      "taste.lead":"Pour beaucoup, le voyage commence par le vin. Ici, il se poursuit à table et au fil du calendrier de la ville.",
      "taste.wine.title":"Le vin, au cœur du bourg",
      "taste.wine.text":"Vino Nobile di Montepulciano, Rosso di Montepulciano, œnothèques, caves et dégustations font du vin une partie intégrante du séjour.",
      "taste.food.title":"La Toscane à table",
      "taste.food.text":"Pici, viande Chianina, Pecorino di Pienza et cuisine toscane racontent le territoire autant que ses paysages.",
      "taste.events.title":"Un bourg qui change au fil des saisons",
      "taste.events.text":"Cantiere Internazionale d’Arte en été, Calici di Stelle en août, Bravìo fin août, Live Rock à Acquaviva en septembre et marchés de Noël en hiver."
    },
    ru: {
      "hero.subtitle":"Камерный дом внутри исторических стен, всего в нескольких шагах от Piazza Grande.",
      "position.lead":"Il Nido di Sofì находится на Via del Poliziano, в верхней части исторического центра Монтепульчано — отсюда город естественно исследовать пешком.",
      "home.title":"Просто, камерно,<br><em>с вниманием к деталям.</em>",
      "home.lead":"Терракотовые полы, открытые балки и уютные пространства — тосканский дом для неспешного отдыха в историческом центре Монтепульчано.",
      "village.lead":"От Il Nido легко дойти до мест, которые лучше всего передают характер Монтепульчано.",
      "host.p2":"Мы сохранили характер дома и добавили только то, что делает пребывание естественным и удобным, не меняя его сути.",
      "surroundings.title":"Валь-д'Орча<br><em>за пределами Монтепульчано.</em>",
      "surroundings.lead":"Из Монтепульчано деревни, холмы и термы становятся естественными направлениями для однодневных поездок.",
      "booking.title":"Выберите даты.<br><em>Остальное мы возьмём на себя.</em>",
      "booking.intro":"Укажите желаемые даты. Мы лично проверим доступность и итоговую стоимость, а после подтверждения отправим безопасную ссылку Stripe на точно согласованную сумму.",
      "taste.kicker":"ВИНО, КУХНЯ, СЕЗОНЫ",
      "taste.title":"Монтепульчано можно<br><em>пробовать, слышать и проживать.</em>",
      "taste.lead":"Для многих путешествие начинается с вина. Здесь оно продолжается за столом и в календаре городских событий.",
      "taste.wine.title":"Вино внутри старого города",
      "taste.wine.text":"Vino Nobile di Montepulciano, Rosso di Montepulciano, энотеки, винные погреба и дегустации делают вино частью самого пребывания.",
      "taste.food.title":"Тоскана за столом",
      "taste.food.text":"Пичи, мясо кьянина, Pecorino di Pienza и тосканская кухня рассказывают о регионе не меньше, чем его пейзажи.",
      "taste.events.title":"Город в ритме сезонов",
      "taste.events.text":"Cantiere Internazionale d’Arte летом, Calici di Stelle в августе, Bravìo в конце августа, Live Rock в Аквавиве в сентябре и рождественские ярмарки зимой."
    },
    zh: {
      "hero.subtitle":"一处位于历史城墙内、距离 Piazza Grande 仅几步之遥的温馨居所。",
      "position.lead":"Il Nido di Sofì 位于 Via del Poliziano，坐落在蒙特普尔恰诺老城上部，从这里步行探索古城十分自然。",
      "home.title":"简洁、温馨，<br><em>细节考究。</em>",
      "home.lead":"赤陶地面、裸露木梁与温馨空间，让这间位于蒙特普尔恰诺老城的托斯卡纳小家适合慢慢生活。",
      "village.lead":"从 Il Nido 出发，步行即可到达一些最能体现蒙特普尔恰诺魅力的地方。",
      "host.p2":"我们保留了房子的原有气质，只加入让居住更自然舒适的必要细节。",
      "surroundings.title":"奥尔恰谷<br><em>在蒙特普尔恰诺之外延伸。</em>",
      "surroundings.lead":"从蒙特普尔恰诺出发，村庄、丘陵和温泉都很适合安排成轻松的一日行程。",
      "booking.title":"选择你的日期。<br><em>其余交给我们。</em>",
      "booking.intro":"告诉我们你希望入住的日期。我们会亲自确认房态和总价；确认后，你将收到对应准确金额的安全 Stripe 支付链接。",
      "taste.kicker":"葡萄酒、美食与四季",
      "taste.title":"蒙特普尔恰诺，<br><em>值得品尝、聆听与体验。</em>",
      "taste.lead":"对很多旅行者来说，旅程从葡萄酒开始；在这里，它还会延伸到餐桌和小镇一整年的活动。",
      "taste.wine.title":"老城里的葡萄酒体验",
      "taste.wine.text":"Vino Nobile di Montepulciano、Rosso di Montepulciano、葡萄酒吧、酒窖与品鉴，让葡萄酒成为住宿体验本身的一部分。",
      "taste.food.title":"餐桌上的托斯卡纳",
      "taste.food.text":"Pici 手工面、Chianina 牛肉、Pecorino di Pienza 羊奶酪和托斯卡纳料理，同样讲述着这片土地。",
      "taste.events.title":"随季节变化的小镇",
      "taste.events.text":"夏季有 Cantiere Internazionale d’Arte，八月有 Calici di Stelle 与 Bravìo，九月附近 Acquaviva 有 Live Rock，冬季则有圣诞市集。"
    }
  };

  Object.entries(copy).forEach(([lang, values]) => {
    if (translations[lang]) Object.assign(translations[lang], values);
  });

  const village = document.querySelector('#montepulciano');
  const bravio = document.querySelector('#bravio');
  if (village && bravio && !document.querySelector('.taste-section')) {
    const section = document.createElement('section');
    section.className = 'taste-section section';
    section.innerHTML = `
      <div class="section-kicker" data-i18n="taste.kicker">VINO, TAVOLA, STAGIONI</div>
      <div class="taste-head">
        <h2 data-i18n-html="taste.title">Montepulciano si assaggia,<br><em>si ascolta, si vive.</em></h2>
        <p class="lead" data-i18n="taste.lead">Per molti il viaggio parte dal vino. Qui può continuare a tavola e nel calendario del borgo.</p>
      </div>
      <div class="taste-grid">
        <article><span>01</span><h3 data-i18n="taste.wine.title">Il vino, dentro il borgo</h3><p data-i18n="taste.wine.text">Vino Nobile di Montepulciano, Rosso di Montepulciano, enoteche, cantine e degustazioni: il vino è parte dell’esperienza, non una tappa a parte.</p></article>
        <article><span>02</span><h3 data-i18n="taste.food.title">La Toscana a tavola</h3><p data-i18n="taste.food.text">Pici, carne Chianina, Pecorino di Pienza e cucina toscana raccontano il territorio tanto quanto i suoi paesaggi.</p></article>
        <article><span>03</span><h3 data-i18n="taste.events.title">Un borgo che cambia con le stagioni</h3><p data-i18n="taste.events.text">Cantiere Internazionale d’Arte in estate, Calici di Stelle ad agosto, Bravìo a fine agosto, Live Rock ad Acquaviva a settembre e mercatini di Natale in inverno.</p></article>
      </div>`;
    bravio.parentNode.insertBefore(section, bravio);
  }
})();
