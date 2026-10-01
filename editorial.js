// Editorial refinements for homepage copy. Loaded after script.js.
(() => {
  if (typeof translations === 'undefined') return;

  const copy = {
    it: {
      "home.title":"Semplice, raccolta,<br><em>curata nei dettagli.</em>",
      "home.lead":"Cotto, travi a vista e spazi raccolti: una dimora toscana da vivere con calma, nel centro storico di Montepulciano.",
      "village.lead":"Dal Nido raggiungi facilmente alcuni dei luoghi e degli indirizzi che rendono speciale Montepulciano.",
      "host.p2":"Abbiamo conservato il carattere della casa, aggiungendo ciò che serve per viverla con naturalezza, senza snaturarla.",
      "surroundings.title":"La Val d'Orcia<br><em>oltre Montepulciano.</em>",
      "surroundings.lead":"Da Montepulciano, borghi, colline e terme diventano tappe naturali per una giornata fuori porta.",
      "booking.title":"Scegli le tue date.<br><em>Al resto pensiamo noi.</em>",
      "booking.intro":"Indica il periodo desiderato. Verificheremo personalmente disponibilità e totale; dopo la conferma riceverai un link Stripe sicuro con l’importo esatto concordato."
    },
    en: {
      "home.title":"Simple, intimate,<br><em>thoughtfully detailed.</em>",
      "home.lead":"Terracotta floors, exposed beams and intimate spaces: a Tuscan home made to be enjoyed slowly, in Montepulciano’s old town.",
      "village.lead":"From Il Nido, some of the places and addresses that define Montepulciano are within easy walking distance.",
      "host.p2":"We have preserved the character of the house, adding what is needed to make it easy to live in without changing its nature.",
      "surroundings.title":"The Val d'Orcia<br><em>beyond Montepulciano.</em>",
      "surroundings.lead":"From Montepulciano, villages, hills and thermal baths become natural day-trip destinations.",
      "booking.title":"Choose your dates.<br><em>We’ll take care of the rest.</em>",
      "booking.intro":"Tell us your preferred dates. We will personally confirm availability and the total price; once confirmed, you will receive a secure Stripe link for the exact agreed amount."
    },
    es: {
      "home.title":"Sencilla, íntima,<br><em>cuidada al detalle.</em>",
      "home.lead":"Terracota, vigas vistas y espacios recogidos: una casa toscana para disfrutar sin prisas, en el centro histórico de Montepulciano.",
      "village.lead":"Desde Il Nido puedes llegar fácilmente a algunos de los lugares que mejor cuentan Montepulciano.",
      "host.p2":"Hemos conservado el carácter de la casa, añadiendo lo necesario para vivirla con naturalidad, sin desvirtuarla.",
      "surroundings.title":"La Val d'Orcia<br><em>más allá de Montepulciano.</em>",
      "surroundings.lead":"Desde Montepulciano, pueblos, colinas y termas se convierten en escapadas naturales de un día.",
      "booking.title":"Elige tus fechas.<br><em>Del resto nos ocupamos nosotros.</em>",
      "booking.intro":"Indica las fechas que prefieres. Comprobaremos personalmente disponibilidad y precio total; después recibirás un enlace seguro de Stripe con el importe exacto acordado."
    },
    de: {
      "home.title":"Schlicht, persönlich,<br><em>mit Liebe zum Detail.</em>",
      "home.lead":"Terrakotta, Sichtbalken und gemütliche Räume: ein toskanisches Zuhause für entspannte Tage in der Altstadt von Montepulciano.",
      "village.lead":"Vom Il Nido erreichen Sie bequem einige der Orte, die Montepulciano besonders machen.",
      "host.p2":"Wir haben den Charakter des Hauses bewahrt und nur das ergänzt, was einen natürlichen, unkomplizierten Aufenthalt ermöglicht.",
      "surroundings.title":"Das Val d'Orcia<br><em>jenseits von Montepulciano.</em>",
      "surroundings.lead":"Von Montepulciano aus werden Dörfer, Hügel und Thermalbäder zu natürlichen Zielen für einen Tagesausflug.",
      "booking.title":"Wählen Sie Ihre Daten.<br><em>Um den Rest kümmern wir uns.</em>",
      "booking.intro":"Nennen Sie uns Ihre Wunschdaten. Wir prüfen Verfügbarkeit und Gesamtpreis persönlich; anschließend erhalten Sie einen sicheren Stripe-Link über den genau vereinbarten Betrag."
    },
    fr: {
      "home.title":"Simple, intime,<br><em>soignée dans les détails.</em>",
      "home.lead":"Terre cuite, poutres apparentes et espaces intimes : une maison toscane à vivre tranquillement, dans le centre historique de Montepulciano.",
      "village.lead":"Depuis Il Nido, vous rejoignez facilement quelques-uns des lieux qui racontent le mieux Montepulciano.",
      "host.p2":"Nous avons préservé le caractère de la maison en ajoutant seulement ce qui permet de la vivre naturellement, sans la dénaturer.",
      "surroundings.title":"Le Val d'Orcia<br><em>au-delà de Montepulciano.</em>",
      "surroundings.lead":"Depuis Montepulciano, villages, collines et thermes deviennent des escapades naturelles à la journée.",
      "booking.title":"Choisissez vos dates.<br><em>Nous nous occupons du reste.</em>",
      "booking.intro":"Indiquez les dates souhaitées. Nous vérifierons personnellement disponibilité et prix total ; après confirmation, vous recevrez un lien Stripe sécurisé correspondant au montant exact convenu."
    },
    ru: {
      "home.title":"Просто, камерно,<br><em>с вниманием к деталям.</em>",
      "home.lead":"Терракота, открытые балки и уютные пространства — тосканский дом для неспешного отдыха в историческом центре Монтепульчано.",
      "village.lead":"От Il Nido легко дойти до мест, которые лучше всего передают характер Монтепульчано.",
      "host.p2":"Мы сохранили характер дома и добавили только то, что делает пребывание естественным и удобным, не меняя его сути.",
      "surroundings.title":"Валь-д'Орча<br><em>за пределами Монтепульчано.</em>",
      "surroundings.lead":"Из Монтепульчано деревни, холмы и термы становятся естественными направлениями для однодневных поездок.",
      "booking.title":"Выберите даты.<br><em>Остальное мы возьмём на себя.</em>",
      "booking.intro":"Укажите желаемые даты. Мы лично проверим доступность и итоговую стоимость, а после подтверждения отправим безопасную ссылку Stripe на точно согласованную сумму."
    },
    zh: {
      "home.title":"简洁、温馨，<br><em>细节考究。</em>",
      "home.lead":"赤陶地面、裸露木梁与温馨空间，让这间位于蒙特普尔恰诺老城的托斯卡纳小家适合慢慢生活。",
      "village.lead":"从 Il Nido 出发，步行即可到达一些最能体现蒙特普尔恰诺魅力的地方。",
      "host.p2":"我们保留了房子的原有气质，只加入让居住更自然舒适的必要细节。",
      "surroundings.title":"奥尔恰谷<br><em>在蒙特普尔恰诺之外延伸。</em>",
      "surroundings.lead":"从蒙特普尔恰诺出发，村庄、丘陵和温泉都很适合安排成轻松的一日行程。",
      "booking.title":"选择你的日期。<br><em>其余交给我们。</em>",
      "booking.intro":"告诉我们你希望入住的日期。我们会亲自确认房态和总价；确认后，你将收到对应准确金额的安全 Stripe 支付链接。"
    }
  };

  Object.entries(copy).forEach(([lang, values]) => {
    if (translations[lang]) Object.assign(translations[lang], values);
  });
})();
