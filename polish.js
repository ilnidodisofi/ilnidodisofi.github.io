// Final polish layer: copy, translations, semantic ordering and small accessibility fixes.
(() => {
  if (typeof translations !== 'undefined') {
    const overrides = {
      it: {
        "position.lead":"Il Nido di Sofì si trova in Via del Poliziano, nella parte alta delle mura storiche, tra la Fortezza e Piazza Grande.",
        "position.body":"Da qui il borgo si vive a piedi: enoteche, ristoranti, botteghe e scorci panoramici sono a pochi minuti, senza dover organizzare ogni spostamento.",
        "facts.center":"le mura storiche",
        "home.lead":"Pavimenti in terracotta, travi a vista e spazi raccolti definiscono un interno toscano essenziale, curato per essere vissuto con calma.",
        "village.lead":"Dal Nido, alcuni dei luoghi simbolo di Montepulciano si raggiungono con una breve passeggiata.",
        "host.p1":"Il Nido di Sofì nasce dal desiderio di avere un luogo nostro a Montepulciano. Oggi ci piace aprirlo a chi vuole scoprire questo angolo di Toscana con libertà e sentirsi subito a proprio agio.",
        "host.p2":"Abbiamo conservato il carattere della casa, aggiungendo ciò che serve per viverla con naturalezza, senza snaturarla.",
        "events.lead":"Tradizioni, musica, vino e cultura cambiano il ritmo di Montepulciano in diversi momenti dell’anno.",
        "events.bravio.text":"Otto contrade, due spingitori per ciascuna e botti da circa 80 kg: la corsa risale le vie del centro fino a Piazza Grande.",
        "events.cantiere.text":"Concerti, opera, teatro e performance trasformano Montepulciano e la Valdichiana in un palcoscenico estivo diffuso.",
        "events.calici.text":"Il 10 agosto il centro storico si anima con degustazioni di Vino Nobile e Rosso di Montepulciano, musica e iniziative diffuse.",
        "events.live.text":"Ai Giardini Ex Fierale di Acquaviva, un festival dedicato alla musica indipendente italiana e internazionale.",
        "events.cantine.text":"L’appuntamento del Movimento Turismo del Vino apre le porte delle cantine aderenti a visite, incontri con i produttori e degustazioni.",
        "events.natale.text":"Tra Piazza Grande, Via San Donato e le vie vicine, casette di legno e iniziative natalizie accompagnano il periodo delle feste.",
        "events.ruscello.title":"Bruscello Poliziano",
        "events.ruscello.text":"Una tradizione di teatro popolare portata in scena in Piazza Grande intorno a Ferragosto, tra canto, musica e racconto.",
        "food.lead":"Il vino e la tavola sono due modi diversi di entrare nel paesaggio e nella cultura di questa parte di Toscana.",
        "food.wine.title":"Cantine e grandi rossi",
        "food.wine.text":"Il Vino Nobile è il riferimento del territorio, affiancato dal Rosso di Montepulciano. Tra cantine monumentali nel borgo e aziende sulle colline, degustare significa anche entrare nel paesaggio; poco più lontano, Montalcino apre la strada al Brunello.",
        "food.table.title":"Sapori del territorio",
        "food.table.text":"Pici, Pecorino di Pienza e Chianina sono alcuni dei sapori che ritornano più spesso sulle tavole della zona. Una cucina legata alla materia prima e alle ricette toscane, da scoprire tra trattorie e botteghe.",
        "faq.kicker":"10 — FAQ",
        "faq.checkin.q":"Come funzionano check-in e check-out?",
        "faq.checkin.a":"Il check-in è disponibile dalle 14:00 tramite self check-in con cassetta di sicurezza. Il check-out è entro le 10:00. Le istruzioni complete vengono inviate prima dell’arrivo.",
        "faq.parking.a":"Tra le opzioni più vicine ci sono il parcheggio Fortezza (Campino), P8 Il Bersaglio in Via dei Filosofi e P7 Porta delle Farine, in zona Via dell’Oriolo. Prima dell’arrivo inviamo indicazioni aggiornate su accesso e sosta.",
        "faq.mobility.q":"A che piano si trova l’appartamento?",
        "faq.mobility.a":"Il Nido di Sofì si trova al terzo piano di un edificio storico senza ascensore. È utile tenerne conto se si viaggia con bagagli pesanti o si preferiscono soluzioni senza scale.",
        "faq.pets.q":"Gli animali sono ammessi?",
        "faq.pets.a":"Sì, gli animali sono benvenuti. Ti chiediamo di segnalarne la presenza nella richiesta, così possiamo organizzare al meglio il soggiorno.",
        "faq.wifi.q":"L’appartamento ha il Wi-Fi ed è adatto anche per lavorare?",
        "faq.wifi.a":"Sì. L’appartamento dispone di Wi-Fi veloce e di uno spazio adatto a chi ha necessità di lavorare durante il soggiorno.",
        "faq.kitchen.q":"La cucina è attrezzata?",
        "faq.kitchen.a":"Sì. La cucina è attrezzata per preparare colazioni e pasti, con le dotazioni essenziali per l’uso quotidiano."
      },
      en: {
        "facts.center":"the historic walls",
        "events.ruscello.title":"Bruscello Poliziano",
        "events.ruscello.text":"A folk-theatre tradition performed in Piazza Grande around mid-August, combining song, music and storytelling.",
        "food.wine.title":"Cellars & great reds",
        "food.table.title":"Local flavours",
        "faq.kicker":"10 — FAQ",
        "faq.checkin.q":"How do check-in and check-out work?",
        "faq.checkin.a":"Check-in is available from 2:00 pm via self check-in with a lockbox. Check-out is by 10:00 am. Full instructions are sent before arrival.",
        "faq.parking.a":"Nearby options include the Fortezza (Campino) car park, P8 Il Bersaglio on Via dei Filosofi and P7 Porta delle Farine near Via dell’Oriolo. We send updated access and parking notes before arrival.",
        "faq.mobility.q":"What floor is the apartment on?",
        "faq.mobility.a":"Il Nido di Sofì is on the third floor of a historic building with no lift. This is worth considering if you travel with heavy luggage or prefer step-free accommodation.",
        "faq.wifi.q":"Does the apartment have Wi-Fi and space to work?",
        "faq.wifi.a":"Yes. The apartment has fast Wi-Fi and a practical space for working during your stay.",
        "faq.kitchen.q":"Is the kitchen equipped?",
        "faq.kitchen.a":"Yes. The kitchen is equipped for breakfast and everyday meals, with the essentials for daily use."
      },
      es: {
        "facts.center":"las murallas históricas",
        "events.ruscello.title":"Bruscello Poliziano",
        "events.ruscello.text":"Una tradición de teatro popular representada en Piazza Grande a mediados de agosto, entre canto, música y relato.",
        "food.wine.title":"Bodegas y grandes tintos",
        "food.table.title":"Sabores del territorio",
        "faq.kicker":"10 — FAQ",
        "faq.checkin.q":"¿Cómo funcionan la llegada y la salida?",
        "faq.checkin.a":"La llegada está disponible desde las 14:00 mediante self check-in con caja de seguridad. La salida es antes de las 10:00. Enviamos las instrucciones completas antes de la llegada.",
        "faq.parking.a":"Entre las opciones más cercanas están Fortezza (Campino), P8 Il Bersaglio en Via dei Filosofi y P7 Porta delle Farine, cerca de Via dell’Oriolo. Antes de la llegada enviamos indicaciones actualizadas.",
        "faq.mobility.q":"¿En qué planta está el apartamento?",
        "faq.mobility.a":"Il Nido di Sofì está en la tercera planta de un edificio histórico sin ascensor. Conviene tenerlo en cuenta si se viaja con equipaje pesado o se prefieren alojamientos sin escaleras.",
        "faq.wifi.q":"¿Hay Wi-Fi y espacio para trabajar?",
        "faq.wifi.a":"Sí. El apartamento dispone de Wi-Fi rápido y de un espacio práctico para trabajar durante la estancia.",
        "faq.kitchen.q":"¿La cocina está equipada?",
        "faq.kitchen.a":"Sí. La cocina está equipada para preparar desayunos y comidas cotidianas."
      },
      de: {
        "facts.center":"innerhalb der Stadtmauern",
        "events.ruscello.title":"Bruscello Poliziano",
        "events.ruscello.text":"Eine Volkstheater-Tradition, die Mitte August auf der Piazza Grande mit Gesang, Musik und Erzählung aufgeführt wird.",
        "food.wine.title":"Weinkeller & große Rotweine",
        "food.table.title":"Aromen der Region",
        "faq.kicker":"10 — FAQ",
        "faq.checkin.q":"Wie funktionieren Check-in und Check-out?",
        "faq.checkin.a":"Der Check-in ist ab 14:00 Uhr per Self Check-in mit Schlüsseltresor möglich. Check-out ist bis 10:00 Uhr. Die vollständigen Hinweise senden wir vor der Anreise.",
        "faq.parking.a":"Nahe Optionen sind Fortezza (Campino), P8 Il Bersaglio an der Via dei Filosofi und P7 Porta delle Farine bei der Via dell’Oriolo. Vor der Anreise senden wir aktuelle Hinweise zu Zufahrt und Parken.",
        "faq.mobility.q":"In welchem Stock liegt die Wohnung?",
        "faq.mobility.a":"Il Nido di Sofì liegt im dritten Stock eines historischen Gebäudes ohne Aufzug. Das ist bei schwerem Gepäck oder dem Wunsch nach stufenfreiem Zugang zu beachten.",
        "faq.wifi.q":"Gibt es WLAN und einen Platz zum Arbeiten?",
        "faq.wifi.a":"Ja. Die Wohnung verfügt über schnelles WLAN und einen praktischen Arbeitsbereich.",
        "faq.kitchen.q":"Ist die Küche ausgestattet?",
        "faq.kitchen.a":"Ja. Die Küche ist für Frühstück und alltägliche Mahlzeiten mit den wichtigsten Utensilien ausgestattet."
      },
      fr: {
        "facts.center":"à l’intérieur des remparts",
        "events.ruscello.title":"Bruscello Poliziano",
        "events.ruscello.text":"Une tradition de théâtre populaire jouée sur Piazza Grande à la mi-août, entre chant, musique et récit.",
        "food.wine.title":"Caves & grands rouges",
        "food.table.title":"Saveurs du terroir",
        "faq.kicker":"10 — FAQ",
        "faq.checkin.q":"Comment fonctionnent l’arrivée et le départ ?",
        "faq.checkin.a":"L’arrivée est possible à partir de 14 h en self check-in avec boîte à clés. Le départ se fait avant 10 h. Les instructions complètes sont envoyées avant l’arrivée.",
        "faq.parking.a":"Parmi les options proches : Fortezza (Campino), P8 Il Bersaglio via Via dei Filosofi et P7 Porta delle Farine près de Via dell’Oriolo. Nous envoyons des indications actualisées avant l’arrivée.",
        "faq.mobility.q":"À quel étage se trouve l’appartement ?",
        "faq.mobility.a":"Il Nido di Sofì se trouve au troisième étage d’un bâtiment historique sans ascenseur. À prendre en compte avec des bagages lourds ou si vous préférez éviter les escaliers.",
        "faq.wifi.q":"Y a-t-il le Wi-Fi et un espace pour travailler ?",
        "faq.wifi.a":"Oui. L’appartement dispose d’un Wi-Fi rapide et d’un espace pratique pour travailler.",
        "faq.kitchen.q":"La cuisine est-elle équipée ?",
        "faq.kitchen.a":"Oui. Elle est équipée pour préparer petits-déjeuners et repas du quotidien."
      },
      ru: {
        "facts.center":"внутри исторических стен",
        "events.kicker":"04 — СОБЫТИЯ В МОНТЕПУЛЬЧАНО",
        "events.title":"Один город,<br><em>много событий.</em>",
        "events.lead":"Традиции, музыка, вино и культура меняют ритм Монтепульчано в разные времена года.",
        "events.cantiere.title":"Cantiere Internazionale d’Arte","events.cantiere.text":"Концерты, опера, театр и перформансы превращают Монтепульчано и Вальдикьяну в летнюю сцену.",
        "events.calici.title":"Calici di Stelle","events.calici.text":"10 августа старый город оживает благодаря дегустациям Vino Nobile и Rosso di Montepulciano, музыке и событиям по всему центру.",
        "events.bravio.title":"Bravìo delle Botti","events.bravio.text":"Восемь контрад, по два участника от каждой и бочки около 80 кг: гонка проходит вверх по улицам до Piazza Grande.",
        "events.live.title":"Live Rock Festival","events.live.text":"Фестиваль независимой итальянской и международной музыки в Acquaviva di Montepulciano.",
        "events.cantine.title":"Cantine Aperte","events.cantine.text":"Участвующие винодельни открываются для посещений, встреч с производителями и дегустаций.",
        "events.natale.title":"Рождество в Монтепульчано","events.natale.text":"Деревянные домики и рождественские события оживляют Piazza Grande, Via San Donato и соседние улицы.",
        "events.ruscello.title":"Bruscello Poliziano","events.ruscello.text":"Традиция народного театра на Piazza Grande в середине августа, соединяющая пение, музыку и повествование.",
        "food.kicker":"05 — ВИНО И ГАСТРОНОМИЯ","food.title":"Регион, который можно<br><em>попробовать.</em>","food.lead":"Вино и кухня — два способа войти в пейзаж и культуру этой части Тосканы.",
        "food.wine.title":"Винные погреба и красные вина","food.wine.text":"Vino Nobile — главное вино территории рядом с Rosso di Montepulciano. Исторические погреба в городе и хозяйства на холмах соединяют дегустации с пейзажем; неподалёку Монтальчино открывает мир Brunello.",
        "food.table.title":"Вкусы региона","food.table.text":"Пичи, Pecorino di Pienza и Chianina — характерные вкусы местной кухни, основанной на качественных продуктах и тосканских рецептах.",
        "faq.kicker":"10 — FAQ",
        "faq.checkin.q":"Как проходят заезд и выезд?","faq.checkin.a":"Заезд возможен с 14:00 через самостоятельное заселение с сейфом для ключей. Выезд — до 10:00. Подробные инструкции отправляются заранее.",
        "faq.parking.a":"Среди ближайших вариантов — Fortezza (Campino), P8 Il Bersaglio на Via dei Filosofi и P7 Porta delle Farine рядом с Via dell’Oriolo. Перед приездом мы отправляем актуальные рекомендации.",
        "faq.mobility.q":"На каком этаже находится квартира?","faq.mobility.a":"Il Nido di Sofì находится на третьем этаже исторического здания без лифта. Это стоит учитывать при тяжёлом багаже или если вы предпочитаете жильё без лестниц.",
        "faq.wifi.q":"Есть ли Wi-Fi и место для работы?","faq.wifi.a":"Да. В квартире есть быстрый Wi-Fi и удобное место для работы.",
        "faq.kitchen.q":"Кухня оборудована?","faq.kitchen.a":"Да. На кухне есть всё необходимое для завтрака и повседневных блюд."
      },
      zh: {
        "facts.center":"历史城墙之内",
        "events.kicker":"04 — 蒙特普尔恰诺活动","events.title":"一座小城，<br><em>多种精彩时刻。</em>","events.lead":"传统、音乐、葡萄酒与文化在一年中的不同季节改变着蒙特普尔恰诺的节奏。",
        "events.cantiere.title":"Cantiere Internazionale d’Arte","events.cantiere.text":"音乐会、歌剧、戏剧与表演让蒙特普尔恰诺和瓦尔迪基亚纳在夏季变成一座开放舞台。",
        "events.calici.title":"Calici di Stelle","events.calici.text":"每年8月10日，老城会有 Vino Nobile 与 Rosso di Montepulciano 品鉴、音乐和分散在街区中的活动。",
        "events.bravio.title":"Bravìo delle Botti","events.bravio.text":"八个历史街区各派两名选手，推动约80公斤重的酒桶沿上坡街道前往 Piazza Grande。",
        "events.live.title":"Live Rock Festival","events.live.text":"在 Acquaviva di Montepulciano 举办的意大利及国际独立音乐节。",
        "events.cantine.title":"Cantine Aperte","events.cantine.text":"参与活动的酒庄开放参观，并安排与酿酒人交流和品鉴体验。",
        "events.natale.title":"蒙特普尔恰诺圣诞季","events.natale.text":"Piazza Grande、Via San Donato 及周边街道会被木屋市集和圣诞活动点亮。",
        "events.ruscello.title":"Bruscello Poliziano","events.ruscello.text":"八月中旬在 Piazza Grande 上演的民间戏剧传统，以歌唱、音乐和故事讲述为核心。",
        "food.kicker":"05 — 葡萄酒与美食","food.title":"用酒杯与餐桌<br><em>认识这片土地。</em>","food.lead":"葡萄酒与餐桌，是走进这片托斯卡纳风景和文化的两种方式。",
        "food.wine.title":"酒窖与经典红葡萄酒","food.wine.text":"Vino Nobile 是这里最具代表性的葡萄酒，Rosso di Montepulciano 与之相伴。老城酒窖和山间酒庄把品鉴与风景连接起来；不远处的 Montalcino 则带来 Brunello。",
        "food.table.title":"本地风味","food.table.text":"Pici、Pecorino di Pienza 和 Chianina 是当地餐桌上的代表风味，体现托斯卡纳对食材与传统做法的重视。",
        "faq.kicker":"10 — 常见问题",
        "faq.checkin.q":"入住和退房时间如何安排？","faq.checkin.a":"14:00 起可通过钥匙保险盒自助入住，退房时间为 10:00 前。完整说明会在抵达前发送。",
        "faq.parking.a":"附近可选择 Fortezza（Campino）、Via dei Filosofi 的 P8 Il Bersaglio，以及 Via dell’Oriolo 附近的 P7 Porta delle Farine。抵达前我们会发送最新停车与通行建议。",
        "faq.mobility.q":"公寓在几楼？","faq.mobility.a":"Il Nido di Sofì 位于历史建筑三楼，没有电梯。携带较重行李或希望避免楼梯时需要提前考虑。",
        "faq.wifi.q":"有 Wi‑Fi 和工作空间吗？","faq.wifi.a":"有。公寓提供高速 Wi‑Fi，并有适合临时工作的空间。",
        "faq.kitchen.q":"厨房设备齐全吗？","faq.kitchen.a":"是的。厨房配有准备早餐和日常餐食所需的基本设备。"
      }
    };
    Object.entries(overrides).forEach(([lang, values]) => {
      if (translations[lang]) Object.assign(translations[lang], values);
    });
  }

  const staticCopy = {
    it:{inside:'Dentro',wine:'VINO',food:'CIBO',minimum:'Soggiorno minimo: 2 notti.',stay:['UN SOGGIORNO PENSATO PER DUE','La cura si vede<br><em>nelle piccole cose.</em>','Uno spazio raccolto per due persone, preparato con attenzione perché all’arrivo sia già tutto pronto.','La giusta misura','Una camera matrimoniale e ambienti intimi, con proporzioni pensate per una coppia.','Tutto pronto all’arrivo','Letto preparato, biancheria da bagno e prodotti essenziali. In cucina, caffè, tè e tisane per i primi momenti.','Un piccolo gesto di benvenuto','Per chi lo gradisce, lasciamo anche un piccolo assaggio di vino rosso di Montepulciano.','Montepulciano, secondo noi','Prima dell’arrivo inviamo una guida privata con parcheggi, luoghi da vedere e indirizzi che consigliamo personalmente.','VIA DEL POLIZIANO','Una strada che racconta il borgo.','Il palazzo si trova nella parte alta di Montepulciano, di fronte alla storica Casa del Poliziano, lungo la strada legata ad Agnolo Poliziano. Un punto del borgo in cui ancora oggi le guide si fermano a raccontarne la storia.','In casa trovi anche','Wi-Fi veloce · Smart TV · cucina attrezzata · macchina espresso · bollitore · asciugacapelli · ferro da stiro · ventilatore · kit di primo soccorso · kit da cucito'],booking:[['Invia la richiesta','Indicaci date, ospiti e un recapito WhatsApp.'],['Verifichiamo noi','Controlliamo personalmente disponibilità e totale.'],['Conferma con Stripe','Ricevi un link personale e paghi solo dopo la nostra conferma.']],phone:'Telefono / WhatsApp',contacts:['09 — CONTATTI','Per qualsiasi cosa,<br><em>scrivici.</em>','Per una domanda prima del soggiorno o per organizzare al meglio il tuo arrivo, puoi trovarci qui.'],voices:['COSA APPREZZANO I NOSTRI OSPITI','Le impressioni che tornano più spesso.',['Sentirsi subito a proprio agio','Un ambiente raccolto e accogliente, dove è facile rallentare e trovare tranquillità fin dai primi momenti.'],['Il silenzio, nel cuore del borgo','Essere nel centro storico di Montepulciano e, una volta chiusa la porta, trovare calma e silenzio: una combinazione piacevole per riposare davvero.'],['Il carattere della casa','Pavimenti in terracotta, travi a vista, arredi e piccoli dettagli restituiscono il carattere di un interno toscano curato senza perdere semplicità.']],footer:['Prenota','Montepulciano · Toscana']},
    en:{inside:'Inside',wine:'WINE',food:'FOOD',minimum:'Minimum stay: 2 nights.',stay:['A STAY DESIGNED FOR TWO','Care lives<br><em>in the small details.</em>','An intimate space for two, prepared with care so everything is ready when you arrive.','The right scale','A double bedroom and intimate rooms, with proportions made for a couple.','Ready when you arrive','Bed made, bath linen and essentials provided. Coffee, tea and herbal infusions are ready in the kitchen.','A small welcome gesture','If you enjoy wine, we also leave a small taste of local red wine.','Montepulciano, our way','Before arrival we send a private guide with parking, places to see and addresses we personally recommend.','VIA DEL POLIZIANO','A street that tells the town’s story.','The building is in the upper part of Montepulciano, opposite the historic Casa del Poliziano, on the street linked to Agnolo Poliziano.','You will also find','Fast Wi-Fi · Smart TV · equipped kitchen · espresso machine · kettle · hairdryer · iron · fan · first-aid kit · sewing kit'],booking:[['Send your request','Tell us your dates, guests and a WhatsApp contact.'],['We check it personally','We verify availability and the total stay price.'],['Confirm with Stripe','You receive a personal link and pay only after our confirmation.']],phone:'Phone / WhatsApp',contacts:['09 — CONTACTS','Whatever you need,<br><em>write to us.</em>','For a question before your stay or to organise your arrival, you can reach us here.'],voices:['WHAT OUR GUESTS APPRECIATE','The impressions that come up most often.',['Feeling at ease right away','An intimate, welcoming setting where it is easy to slow down and settle in from the first moments.'],['Quiet, in the heart of town','Being in Montepulciano’s old town and finding calm once the door closes makes it especially easy to rest.'],['The character of the home','Terracotta floors, exposed beams, furnishings and small details preserve the feel of a Tuscan interior without overdoing it.']],footer:['Book','Montepulciano · Tuscany']},
    es:{inside:'Dentro',wine:'VINO',food:'COMIDA',minimum:'Estancia mínima: 2 noches.',stay:['UNA ESTANCIA PENSADA PARA DOS','El cuidado se nota<br><em>en los pequeños detalles.</em>','Un espacio íntimo para dos, preparado con atención para que todo esté listo al llegar.','La medida justa','Un dormitorio doble y ambientes íntimos, pensados para una pareja.','Todo listo al llegar','Cama preparada, ropa de baño y productos esenciales. En la cocina, café, té e infusiones.','Un pequeño gesto de bienvenida','Para quien lo desee, dejamos también una pequeña degustación de vino tinto de Montepulciano.','Montepulciano, a nuestra manera','Antes de la llegada enviamos una guía privada con aparcamientos, lugares que ver y direcciones que recomendamos personalmente.','VIA DEL POLIZIANO','Una calle que cuenta la historia del pueblo.','El edificio está en la parte alta de Montepulciano, frente a la histórica Casa del Poliziano, en la calle vinculada a Agnolo Poliziano.','También encontrarás','Wi-Fi rápido · Smart TV · cocina equipada · cafetera espresso · hervidor · secador · plancha · ventilador · botiquín · kit de costura'],booking:[['Envía tu solicitud','Indícanos fechas, huéspedes y un contacto de WhatsApp.'],['Lo comprobamos nosotros','Verificamos disponibilidad y el total de la estancia.'],['Confirma con Stripe','Recibes un enlace personal y pagas solo tras nuestra confirmación.']],phone:'Teléfono / WhatsApp',contacts:['09 — CONTACTO','Para cualquier cosa,<br><em>escríbenos.</em>','Para una pregunta antes de la estancia o para organizar la llegada, puedes encontrarnos aquí.'],voices:['LO QUE VALORAN NUESTROS HUÉSPEDES','Las impresiones que más se repiten.',['Sentirse a gusto enseguida','Un ambiente íntimo y acogedor donde es fácil bajar el ritmo y sentirse cómodo desde el primer momento.'],['Silencio, en pleno centro','Estar en el casco histórico y encontrar calma al cerrar la puerta es una combinación especialmente agradable para descansar.'],['El carácter de la casa','La terracota, las vigas vistas, los muebles y los detalles conservan el carácter de un interior toscano sin perder sencillez.']],footer:['Reservar','Montepulciano · Toscana']},
    de:{inside:'Innerhalb',wine:'WEIN',food:'KÜCHE',minimum:'Mindestaufenthalt: 2 Nächte.',stay:['EIN AUFENTHALT FÜR ZWEI','Sorgfalt zeigt sich<br><em>in den kleinen Dingen.</em>','Ein intimer Ort für zwei, sorgfältig vorbereitet, damit bei der Ankunft alles bereit ist.','Das richtige Maß','Ein Doppelzimmer und intime Räume, passend für ein Paar.','Bei der Ankunft bereit','Gemachtes Bett, Badwäsche und wichtige Dinge. In der Küche stehen Kaffee, Tee und Kräutertee bereit.','Eine kleine Aufmerksamkeit','Wenn Sie möchten, hinterlassen wir auch eine kleine Kostprobe eines Rotweins aus Montepulciano.','Montepulciano, wie wir es mögen','Vor der Anreise senden wir einen privaten Guide mit Parkplätzen, Sehenswürdigkeiten und persönlichen Empfehlungen.','VIA DEL POLIZIANO','Eine Straße, die vom Ort erzählt.','Das Gebäude liegt im oberen Teil von Montepulciano gegenüber der historischen Casa del Poliziano, an der mit Agnolo Poliziano verbundenen Straße.','Außerdem vorhanden','Schnelles WLAN · Smart TV · ausgestattete Küche · Espressomaschine · Wasserkocher · Föhn · Bügeleisen · Ventilator · Erste-Hilfe-Set · Nähset'],booking:[['Anfrage senden','Nennen Sie uns Daten, Gästezahl und einen WhatsApp-Kontakt.'],['Wir prüfen persönlich','Wir prüfen Verfügbarkeit und Gesamtpreis.'],['Mit Stripe bestätigen','Sie erhalten einen persönlichen Link und zahlen erst nach unserer Bestätigung.']],phone:'Telefon / WhatsApp',contacts:['09 — KONTAKT','Wenn Sie etwas brauchen,<br><em>schreiben Sie uns.</em>','Bei Fragen vor dem Aufenthalt oder zur Organisation Ihrer Anreise erreichen Sie uns hier.'],voices:['WAS UNSERE GÄSTE SCHÄTZEN','Die Eindrücke, die am häufigsten wiederkehren.',['Sich sofort wohlfühlen','Eine intime, einladende Atmosphäre, in der man schnell zur Ruhe kommt.'],['Ruhe mitten in der Altstadt','Mitten in Montepulciano zu wohnen und hinter der Tür Ruhe zu finden, ist besonders angenehm zum Erholen.'],['Der Charakter des Hauses','Terrakottaböden, sichtbare Balken, Möbel und Details bewahren den Charakter eines toskanischen Interieurs.']],footer:['Buchen','Montepulciano · Toskana']},
    fr:{inside:'À l’intérieur',wine:'VIN',food:'TABLE',minimum:'Séjour minimum : 2 nuits.',stay:['UN SÉJOUR PENSÉ POUR DEUX','Le soin se voit<br><em>dans les petits détails.</em>','Un espace intime pour deux, préparé avec attention afin que tout soit prêt à l’arrivée.','La juste mesure','Une chambre double et des pièces intimes, adaptées à un couple.','Tout est prêt à l’arrivée','Lit préparé, linge de bain et essentiels. Dans la cuisine : café, thé et infusions.','Une petite attention de bienvenue','Pour ceux qui le souhaitent, nous laissons aussi une petite dégustation de vin rouge de Montepulciano.','Montepulciano, à notre façon','Avant l’arrivée, nous envoyons un guide privé avec parkings, lieux à voir et adresses que nous recommandons personnellement.','VIA DEL POLIZIANO','Une rue qui raconte le bourg.','Le bâtiment se trouve dans la partie haute de Montepulciano, face à la Casa del Poliziano, le long de la rue liée à Agnolo Poliziano.','Vous trouverez aussi','Wi-Fi rapide · Smart TV · cuisine équipée · machine espresso · bouilloire · sèche-cheveux · fer · ventilateur · trousse de secours · kit de couture'],booking:[['Envoyez votre demande','Indiquez vos dates, le nombre de voyageurs et un contact WhatsApp.'],['Nous vérifions nous-mêmes','Nous confirmons les disponibilités et le montant total.'],['Confirmez avec Stripe','Vous recevez un lien personnel et ne payez qu’après notre confirmation.']],phone:'Téléphone / WhatsApp',contacts:['09 — CONTACT','Pour toute question,<br><em>écrivez-nous.</em>','Pour une question avant votre séjour ou pour organiser votre arrivée, vous pouvez nous joindre ici.'],voices:['CE QUE NOS HÔTES APPRÉCIENT','Les impressions qui reviennent le plus souvent.',['Se sentir bien tout de suite','Une atmosphère intime et accueillante où il est facile de ralentir dès les premiers instants.'],['Le calme, au cœur du bourg','Être dans le centre historique puis retrouver le silence une fois la porte fermée rend le repos particulièrement agréable.'],['Le caractère de la maison','Terracotta, poutres apparentes, mobilier et détails conservent le caractère d’un intérieur toscan sans perdre sa simplicité.']],footer:['Réserver','Montepulciano · Toscane']},
    ru:{inside:'Внутри',wine:'ВИНО',food:'КУХНЯ',minimum:'Минимальный срок: 2 ночи.',stay:['ПРОЖИВАНИЕ ДЛЯ ДВОИХ','Забота заметна<br><em>в мелочах.</em>','Уютное пространство для двоих, подготовленное так, чтобы к вашему приезду всё уже было готово.','Точный масштаб','Двуспальная спальня и камерные комнаты, удобные для пары.','Всё готово к приезду','Заправленная кровать, банные полотенца и необходимые средства. На кухне — кофе, чай и травяные настои.','Небольшой знак внимания','По желанию мы оставляем небольшую дегустацию красного вина из Монтепульчано.','Монтепульчано по-нашему','Перед приездом мы отправляем частный гид с парковками, местами для посещения и личными рекомендациями.','VIA DEL POLIZIANO','Улица, рассказывающая историю города.','Дом находится в верхней части Монтепульчано напротив исторической Casa del Poliziano, на улице, связанной с Аньоло Полициано.','В доме также есть','Быстрый Wi-Fi · Smart TV · оборудованная кухня · кофемашина · чайник · фен · утюг · вентилятор · аптечка · швейный набор'],booking:[['Отправьте запрос','Укажите даты, число гостей и контакт WhatsApp.'],['Мы всё проверим','Мы лично проверим доступность и общую стоимость.'],['Подтвердите через Stripe','Вы получите персональную ссылку и оплатите только после нашего подтверждения.']],phone:'Телефон / WhatsApp',contacts:['09 — КОНТАКТЫ','Если что-то понадобится,<br><em>напишите нам.</em>','Если у вас есть вопрос до приезда или нужно организовать прибытие, связаться с нами можно здесь.'],voices:['ЧТО ЦЕНЯТ НАШИ ГОСТИ','Впечатления, которые повторяются чаще всего.',['Сразу почувствовать себя комфортно','Камерная и гостеприимная атмосфера, в которой легко замедлиться и расслабиться с первых минут.'],['Тишина в сердце города','Жить в историческом центре и находить тишину за закрытой дверью — особенно приятное сочетание для отдыха.'],['Характер дома','Терракотовые полы, открытые балки, мебель и детали сохраняют характер тосканского интерьера.']],footer:['Забронировать','Монтепульчано · Тоскана']},
    zh:{inside:'城墙内',wine:'葡萄酒',food:'美食',minimum:'最少入住：2晚。',stay:['为两人设计的住宿','用心藏在<br><em>每一个小细节里。</em>','为两人准备的温馨空间，抵达时需要的一切都已经准备妥当。','恰到好处的尺度','一间双人卧室和舒适紧凑的空间，适合两人入住。','抵达即可入住','床铺、浴巾和基本用品都已备好；厨房里还有咖啡、茶和花草茶。','一个小小的欢迎心意','如果你喜欢葡萄酒，我们也会准备一小份蒙特普尔恰诺红葡萄酒品尝。','我们眼中的蒙特普尔恰诺','抵达前，我们会发送一份私人指南，包含停车、景点和我们亲自推荐的地址。','VIA DEL POLIZIANO','一条讲述老城故事的街道。','建筑位于蒙特普尔恰诺老城上部，正对历史悠久的 Casa del Poliziano，所在街道与 Agnolo Poliziano 有关。','屋内还提供','高速 Wi-Fi · Smart TV · 设备齐全的厨房 · 意式咖啡机 · 热水壶 · 吹风机 · 熨斗 · 风扇 · 急救包 · 针线包'],booking:[['提交住宿申请','告诉我们日期、入住人数和 WhatsApp 联系方式。'],['我们人工确认','我们会核实房态和住宿总价。'],['通过 Stripe 确认','确认后你会收到专属支付链接，再进行付款。']],phone:'电话 / WhatsApp',contacts:['09 — 联系方式','有任何需要，<br><em>请联系我们。</em>','无论是入住前的问题还是抵达安排，都可以通过以下方式联系我们。'],voices:['客人最常提到的优点','这些感受最常被提起。',['一进门就很放松','空间温暖而安静，很容易从抵达的第一刻慢下来。'],['老城中心里的安静','住在蒙特普尔恰诺老城中心，却能在关上门后享受安静，非常适合休息。'],['房子的独特气质','赤陶地板、外露木梁、家具和细节保留了托斯卡纳室内空间的真实气质。']],footer:['预订','蒙特普尔恰诺 · 托斯卡纳']}
  };

  function lang(){
    const selected=document.getElementById('languageSelect')?.value || (document.documentElement.lang||'it').slice(0,2);
    return staticCopy[selected] ? selected : 'en';
  }

  function reorderEvents(){
    const grid=document.querySelector('.events-grid');
    if(!grid) return;
    const keys=['events.bravio.title','events.cantiere.title','events.calici.title','events.live.title','events.cantine.title','events.natale.title','events.ruscello.title'];
    keys.forEach(key=>{
      const article=grid.querySelector(`[data-i18n="${key}"]`)?.closest('article');
      if(article) grid.appendChild(article);
    });
    [...grid.children].forEach((article,i)=>{
      const number=article.querySelector(':scope > span');
      if(number) number.textContent=String(i+1).padStart(2,'0');
    });
    grid.setAttribute('aria-label','Eventi a Montepulciano');
    const section=document.querySelector('.events-section'); if(section) section.id='eventi';
    const food=document.querySelector('.food-section'); if(food) food.id='enogastronomia';
    document.querySelector('.place-grid')?.setAttribute('aria-label','Luoghi da raggiungere a piedi');
  }

  function render(){
    const t=staticCopy[lang()]; if(!t) return;
    const fourth=document.querySelector('#posizione .facts > div:nth-child(4) strong'); if(fourth) fourth.textContent=t.inside;

    const values=['kicker','title','lead','c1t','c1p','c2t','c2p','c3t','c3p','c4t','c4p','historyKicker','historyTitle','historyText','essentialsLabel','essentials'];
    values.forEach((key,i)=>{
      const el=document.querySelector(`[data-value="${key}"]`); if(!el) return;
      if(key==='title') el.innerHTML=t.stay[i]; else el.textContent=t.stay[i];
    });
    const minimum=document.querySelector('[data-value="minimumStay"]'); if(minimum) minimum.textContent=t.minimum;

    const steps=document.querySelectorAll('.booking-step');
    steps.forEach((step,i)=>{ if(!t.booking[i]) return; const strong=step.querySelector('strong'); const p=step.querySelector('p'); if(strong) strong.textContent=t.booking[i][0]; if(p) p.textContent=t.booking[i][1]; });
    const phone=document.querySelector('#bookingForm [name="Telefono / WhatsApp"]');
    if(phone){ const label=phone.closest('label'); if(label){ [...label.childNodes].filter(n=>n.nodeType===3).forEach(n=>n.remove()); let span=label.querySelector('.polish-phone-label'); if(!span){span=document.createElement('span');span.className='polish-phone-label';label.insertBefore(span,phone);} span.textContent=t.phone; } }

    const contacts=document.querySelector('.contacts');
    if(contacts){ const k=contacts.querySelector('.section-kicker'); const h=contacts.querySelector('h2'); const p=contacts.querySelector('.lead'); if(k) k.textContent=t.contacts[0]; if(h) h.innerHTML=t.contacts[1]; if(p) p.textContent=t.contacts[2]; }

    const voices=document.querySelector('.guest-voices');
    if(voices){ const k=voices.querySelector('.section-kicker'); const h=voices.querySelector('.guest-voices-head h2'); if(k) k.textContent=t.voices[0]; if(h) h.textContent=t.voices[1]; const cards=voices.querySelectorAll('.guest-voice-card'); cards.forEach((card,i)=>{const item=t.voices[i+2]; if(!item)return; const title=card.querySelector('h3'); const p=card.querySelector('p:not(.guest-voice-name)'); if(title)title.textContent=item[0]; if(p)p.textContent=item[1];}); }

    const wine=document.querySelector('.food-grid .food-wine'); const table=document.querySelector('.food-grid .food-table');
    if(wine){const s=wine.querySelector(':scope > span'); if(s)s.textContent=t.wine;}
    if(table){const s=table.querySelector(':scope > span'); if(s)s.textContent=t.food;}

    const footerBook=document.querySelector('footer .footer-links a[href="#prenota"]'); if(footerBook) footerBook.textContent=t.footer[0];
    const footerLoc=document.querySelector('footer .footer-brand span'); if(footerLoc) footerLoc.textContent=t.footer[1];
  }

  reorderEvents();
  document.addEventListener('DOMContentLoaded',()=>{reorderEvents();render();});
  document.getElementById('languageSelect')?.addEventListener('change',()=>setTimeout(render,0));
})();
