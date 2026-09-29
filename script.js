if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.addEventListener('pageshow',()=>{ if(!location.hash) setTimeout(()=>window.scrollTo(0,0),0); });

const translations = {
  it: {
    "nav.home":"La casa","nav.montepulciano":"Montepulciano","nav.valdorcia":"Val d'Orcia","nav.faq":"FAQ","nav.book":"Prenota direttamente","language.label":"Lingua",
    "hero.eyebrow":"MONTEPULCIANO · TOSCANA · ITALIA","hero.title":"Una dimora<br>nel cuore di Montepulciano.","hero.subtitle":"Autentica, intima e a pochi passi da Piazza Grande.","hero.discover":"Scopri l'appartamento","hero.book":"Prenota direttamente","hero.scroll":"SCORRI ↓",
    "position.kicker":"01 — LA POSIZIONE","position.title":"La Toscana<br><em>fuori dalla porta.</em>","position.lead":"Il Nido di Sofì si trova in Via del Poliziano, nel cuore di Montepulciano: una posizione da cui il borgo si scopre naturalmente a piedi.","position.body":"La Fortezza, Piazza Grande, enoteche e ristoranti sono a pochi passi. Una volta lasciata la porta di casa, non serve programmare tutto: basta uscire e lasciarsi guidare dalle strade del centro storico.",
    "facts.guests":"ospiti","facts.bedroom":"camera","facts.bathroom":"bagno","facts.center":"dal cuore del centro",
    "home.kicker":"02 — LA CASA","home.title":"Semplice, autentica,<br><em>curata nei dettagli.</em>","home.lead":"Una piccola dimora toscana pensata per vivere Montepulciano con calma, tra cotto, travi a vista e il carattere autentico di una casa nel centro storico.",
    "amenities.wifi":"Wi-Fi veloce","amenities.kitchen":"Cucina attrezzata","amenities.heating":"Riscaldamento autonomo","amenities.checkin":"Self check-in","amenities.workspace":"Spazio di lavoro","amenities.pets":"Animali ammessi",
    "village.kicker":"03 — IL BORGO","village.title":"Montepulciano<br><em>si vive a piedi.</em>","village.lead":"Dal Nido puoi raggiungere facilmente alcuni dei luoghi e degli indirizzi che rendono speciale il soggiorno.",
    "places.fortezza":"Circa 2 minuti. Il punto panoramico ideale per iniziare a guardare la Val d'Orcia dall'alto.","places.piazza":"Circa 5 minuti. Il cuore monumentale di Montepulciano, tra palazzi storici e vicoli.","places.acquacheta":"Una delle tavole storiche del borgo, perfetta per una cena toscana sostanziosa.","places.lieviti":"Pizza e atmosfera informale, un indirizzo che consigliamo volentieri ai nostri ospiti.",
    "host.title":"Una casa che amiamo<br><em>condividere.</em>","host.p1":"Il Nido di Sofì nasce dal desiderio di avere a Montepulciano un posto semplice, accogliente e davvero nostro. Oggi ci piace aprirlo a chi vuole scoprire questo angolo di Toscana senza rinunciare alla sensazione di sentirsi a casa.","host.p2":"Abbiamo cercato di conservare il carattere della casa e di aggiungere tutto ciò che rende un soggiorno semplice, piacevole e autentico.",
    "surroundings.kicker":"05 — DINTORNI","surroundings.title":"La Val d'Orcia<br><em>comincia da qui.</em>","surroundings.lead":"Montepulciano è una base perfetta per alternare il centro storico a giornate tra colline, borghi e terme.",
    "booking.kicker":"06 — PRENOTA DIRETTAMENTE","booking.title":"Il tuo soggiorno<br><em>comincia qui.</em>","booking.intro":"Invia una richiesta con le date desiderate. Verificheremo personalmente la disponibilità e ti risponderemo via email prima del pagamento.","booking.note":"La richiesta non costituisce ancora una prenotazione: riceverai la conferma della disponibilità via email. Il pagamento online verrà richiesto solo successivamente.",
    "form.name":"Nome e cognome","form.email":"Email","form.checkin":"Check-in","form.checkout":"Check-out","form.guests":"Ospiti","form.message":"Messaggio","form.messagePlaceholder":"Eventuali richieste","form.submit":"Invia richiesta",
    "faq.kicker":"07 — FAQ","faq.title":"Prima di arrivare.","faq.checkin.q":"Come funziona il check-in?","faq.checkin.a":"Il Nido utilizza il self check-in tramite cassetta di sicurezza. Le istruzioni complete vengono inviate prima dell'arrivo.","faq.parking.q":"Dove posso parcheggiare?","faq.parking.a":"Tra le possibilità più vicine ci sono il parcheggio della Fortezza, circa 2 minuti a piedi, e i parcheggi P8 Via dei Filosofi e P7 Via dell’Oriolo, circa 5 minuti.","faq.mobility.q":"L'appartamento è adatto a persone con mobilità ridotta?","faq.mobility.a":"L'appartamento si trova al terzo piano di un edificio storico e non dispone di ascensore. Per questo può non essere adatto a persone con difficoltà motorie.","faq.pets.q":"Gli animali sono ammessi?","faq.pets.a":"Sì, gli animali sono ammessi. Ti chiediamo semplicemente di segnalarlo nella richiesta.","faq.fireplace.q":"Il camino è utilizzabile?","faq.fireplace.a":"Al momento il camino a legna non è utilizzabile per motivi di sicurezza.",
    "footer.book":"Prenota","footer.airbnb":"Vedi su Airbnb"
  },
  en: {
    "nav.home":"The home","nav.montepulciano":"Montepulciano","nav.valdorcia":"Val d'Orcia","nav.faq":"FAQ","nav.book":"Book direct","language.label":"Language",
    "hero.eyebrow":"MONTEPULCIANO · TUSCANY · ITALY","hero.title":"A Tuscan home<br>in the heart of Montepulciano.","hero.subtitle":"Authentic, intimate and just a few steps from Piazza Grande.","hero.discover":"Discover the apartment","hero.book":"Book direct","hero.scroll":"SCROLL ↓",
    "position.kicker":"01 — LOCATION","position.title":"Tuscany<br><em>right outside your door.</em>","position.lead":"Il Nido di Sofì is on Via del Poliziano, in the heart of Montepulciano: a place from which the town is naturally explored on foot.","position.body":"The Fortress, Piazza Grande, wine bars and restaurants are all just a short walk away. Once you step outside, there is no need to plan every detail: simply follow the streets of the historic centre.",
    "facts.guests":"guests","facts.bedroom":"bedroom","facts.bathroom":"bathroom","facts.center":"from the historic centre",
    "home.kicker":"02 — THE HOME","home.title":"Simple, authentic,<br><em>thoughtfully detailed.</em>","home.lead":"A small Tuscan home made for experiencing Montepulciano at an unhurried pace, among terracotta floors, exposed beams and the character of a genuine house in the old town.",
    "amenities.wifi":"Fast Wi-Fi","amenities.kitchen":"Equipped kitchen","amenities.heating":"Independent heating","amenities.checkin":"Self check-in","amenities.workspace":"Workspace","amenities.pets":"Pets welcome",
    "village.kicker":"03 — THE TOWN","village.title":"Montepulciano<br><em>is best explored on foot.</em>","village.lead":"From Il Nido, some of the places and addresses that make a stay here special are within easy walking distance.",
    "places.fortezza":"About 2 minutes. An ideal viewpoint for your first look over the Val d'Orcia.","places.piazza":"About 5 minutes. Montepulciano's monumental heart, surrounded by historic buildings and lanes.","places.acquacheta":"One of the town's historic tables, ideal for a hearty Tuscan dinner.","places.lieviti":"Pizza and an informal atmosphere, a place we are always happy to recommend to our guests.",
    "host.title":"A home we love<br><em>to share.</em>","host.p1":"Il Nido di Sofì grew from our wish to have a simple, welcoming place in Montepulciano that truly felt like ours. Today we enjoy opening it to travellers who want to discover this corner of Tuscany while still feeling at home.","host.p2":"We have tried to preserve the character of the house while adding everything that makes a stay easy, pleasant and authentic.",
    "surroundings.kicker":"05 — SURROUNDINGS","surroundings.title":"The Val d'Orcia<br><em>starts from here.</em>","surroundings.lead":"Montepulciano is an ideal base for combining the historic centre with days among hills, villages and thermal baths.",
    "booking.kicker":"06 — BOOK DIRECT","booking.title":"Your stay<br><em>starts here.</em>","booking.intro":"Send us a request with your preferred dates. We will personally check availability and reply by email before any payment is requested.","booking.note":"A request is not yet a confirmed booking: you will receive availability confirmation by email. Online payment will only be requested afterwards.",
    "form.name":"Full name","form.email":"Email","form.checkin":"Check-in","form.checkout":"Check-out","form.guests":"Guests","form.message":"Message","form.messagePlaceholder":"Any requests","form.submit":"Send request",
    "faq.kicker":"07 — FAQ","faq.title":"Before you arrive.","faq.checkin.q":"How does check-in work?","faq.checkin.a":"Il Nido offers self check-in via a lockbox. Full instructions are sent before arrival.","faq.parking.q":"Where can I park?","faq.parking.a":"Nearby options include the Fortezza car park, about a 2-minute walk away, and P8 Via dei Filosofi and P7 Via dell’Oriolo, about 5 minutes away.","faq.mobility.q":"Is the apartment suitable for guests with reduced mobility?","faq.mobility.a":"The apartment is on the third floor of a historic building and there is no lift. It may therefore not be suitable for guests with mobility difficulties.","faq.pets.q":"Are pets allowed?","faq.pets.a":"Yes, pets are welcome. Please simply mention them in your request.","faq.fireplace.q":"Can the fireplace be used?","faq.fireplace.a":"The wood-burning fireplace is currently not available for safety reasons.",
    "footer.book":"Book","footer.airbnb":"View on Airbnb"
  },
  es: {
    "nav.home":"La casa","nav.montepulciano":"Montepulciano","nav.valdorcia":"Val d'Orcia","nav.faq":"FAQ","nav.book":"Reserva directa","language.label":"Idioma",
    "hero.eyebrow":"MONTEPULCIANO · TOSCANA · ITALIA","hero.title":"Una casa toscana<br>en el corazón de Montepulciano.","hero.subtitle":"Auténtica, íntima y a pocos pasos de Piazza Grande.","hero.discover":"Descubre el apartamento","hero.book":"Reserva directa","hero.scroll":"DESLIZA ↓",
    "position.kicker":"01 — UBICACIÓN","position.title":"La Toscana<br><em>al otro lado de la puerta.</em>","position.lead":"Il Nido di Sofì se encuentra en Via del Poliziano, en pleno corazón de Montepulciano: una ubicación perfecta para descubrir el pueblo a pie.","position.body":"La Fortezza, Piazza Grande, vinotecas y restaurantes están a pocos pasos. Al salir de casa no hace falta planearlo todo: basta con dejarse llevar por las calles del centro histórico.",
    "facts.guests":"huéspedes","facts.bedroom":"dormitorio","facts.bathroom":"baño","facts.center":"del centro histórico",
    "home.kicker":"02 — LA CASA","home.title":"Sencilla, auténtica,<br><em>cuidada al detalle.</em>","home.lead":"Una pequeña casa toscana pensada para vivir Montepulciano sin prisas, entre suelos de terracota, vigas vistas y el carácter auténtico de una vivienda del casco histórico.",
    "amenities.wifi":"Wi-Fi rápido","amenities.kitchen":"Cocina equipada","amenities.heating":"Calefacción independiente","amenities.checkin":"Llegada autónoma","amenities.workspace":"Zona de trabajo","amenities.pets":"Se admiten mascotas",
    "village.kicker":"03 — EL PUEBLO","village.title":"Montepulciano<br><em>se vive a pie.</em>","village.lead":"Desde Il Nido puedes llegar fácilmente a algunos de los lugares que hacen especial la estancia.",
    "places.fortezza":"A unos 2 minutos. Un mirador ideal para empezar a contemplar la Val d'Orcia desde lo alto.","places.piazza":"A unos 5 minutos. El corazón monumental de Montepulciano, entre palacios históricos y callejuelas.","places.acquacheta":"Uno de los restaurantes históricos del pueblo, perfecto para una cena toscana abundante.","places.lieviti":"Pizza y ambiente informal, un lugar que recomendamos con gusto a nuestros huéspedes.",
    "host.title":"Una casa que nos encanta<br><em>compartir.</em>","host.p1":"Il Nido di Sofì nació del deseo de tener en Montepulciano un lugar sencillo, acogedor y verdaderamente nuestro. Hoy nos gusta abrirlo a quienes quieren descubrir este rincón de la Toscana sintiéndose como en casa.","host.p2":"Hemos intentado conservar el carácter de la casa y añadir todo lo necesario para que la estancia sea sencilla, agradable y auténtica.",
    "surroundings.kicker":"05 — ALREDEDORES","surroundings.title":"La Val d'Orcia<br><em>empieza aquí.</em>","surroundings.lead":"Montepulciano es una base perfecta para combinar el centro histórico con días entre colinas, pueblos y termas.",
    "booking.kicker":"06 — RESERVA DIRECTA","booking.title":"Tu estancia<br><em>empieza aquí.</em>","booking.intro":"Envíanos una solicitud con las fechas que deseas. Comprobaremos personalmente la disponibilidad y te responderemos por email antes de solicitar cualquier pago.","booking.note":"La solicitud todavía no es una reserva confirmada: recibirás la confirmación de disponibilidad por email. El pago online se solicitará únicamente después.",
    "form.name":"Nombre y apellidos","form.email":"Email","form.checkin":"Llegada","form.checkout":"Salida","form.guests":"Huéspedes","form.message":"Mensaje","form.messagePlaceholder":"Peticiones especiales","form.submit":"Enviar solicitud",
    "faq.kicker":"07 — FAQ","faq.title":"Antes de llegar.","faq.checkin.q":"¿Cómo funciona la llegada?","faq.checkin.a":"Il Nido dispone de llegada autónoma mediante una caja de seguridad para llaves. Las instrucciones completas se envían antes de la llegada.","faq.parking.q":"¿Dónde puedo aparcar?","faq.parking.a":"Entre las opciones más cercanas están el aparcamiento de la Fortezza, a unos 2 minutos a pie, y P8 Via dei Filosofi y P7 Via dell’Oriolo, a unos 5 minutos.","faq.mobility.q":"¿El apartamento es apto para personas con movilidad reducida?","faq.mobility.a":"El apartamento está en la tercera planta de un edificio histórico y no dispone de ascensor. Por ello puede no ser adecuado para personas con dificultades de movilidad.","faq.pets.q":"¿Se admiten mascotas?","faq.pets.a":"Sí. Solo te pedimos que lo indiques en la solicitud.","faq.fireplace.q":"¿Se puede usar la chimenea?","faq.fireplace.a":"Actualmente la chimenea de leña no puede utilizarse por motivos de seguridad.",
    "footer.book":"Reservar","footer.airbnb":"Ver en Airbnb"
  },
  de: {
    "nav.home":"Das Zuhause","nav.montepulciano":"Montepulciano","nav.valdorcia":"Val d'Orcia","nav.faq":"FAQ","nav.book":"Direkt buchen","language.label":"Sprache",
    "hero.eyebrow":"MONTEPULCIANO · TOSKANA · ITALIEN","hero.title":"Ein Zuhause in der Toskana<br>im Herzen von Montepulciano.","hero.subtitle":"Authentisch, intim und nur wenige Schritte von der Piazza Grande entfernt.","hero.discover":"Apartment entdecken","hero.book":"Direkt buchen","hero.scroll":"SCROLLEN ↓",
    "position.kicker":"01 — LAGE","position.title":"Die Toskana<br><em>direkt vor der Tür.</em>","position.lead":"Il Nido di Sofì liegt in der Via del Poliziano, mitten im Herzen von Montepulciano – von hier lässt sich die Altstadt ganz natürlich zu Fuß entdecken.","position.body":"Die Fortezza, die Piazza Grande, Weinbars und Restaurants sind nur wenige Schritte entfernt. Draußen angekommen, muss man nicht alles planen: Lassen Sie sich einfach durch die Straßen der Altstadt treiben.",
    "facts.guests":"Gäste","facts.bedroom":"Schlafzimmer","facts.bathroom":"Bad","facts.center":"vom Altstadtzentrum",
    "home.kicker":"02 — DAS ZUHAUSE","home.title":"Schlicht, authentisch,<br><em>mit Liebe zum Detail.</em>","home.lead":"Ein kleines toskanisches Zuhause für entspannte Tage in Montepulciano – mit Terrakottaböden, sichtbaren Balken und dem authentischen Charakter eines Hauses in der Altstadt.",
    "amenities.wifi":"Schnelles WLAN","amenities.kitchen":"Ausgestattete Küche","amenities.heating":"Eigene Heizung","amenities.checkin":"Self-Check-in","amenities.workspace":"Arbeitsplatz","amenities.pets":"Haustiere willkommen",
    "village.kicker":"03 — DIE ALTSTADT","village.title":"Montepulciano<br><em>entdeckt man zu Fuß.</em>","village.lead":"Von Il Nido aus erreichen Sie bequem einige der Orte und Adressen, die einen Aufenthalt hier besonders machen.",
    "places.fortezza":"Etwa 2 Minuten. Ein idealer Aussichtspunkt für den ersten Blick über das Val d'Orcia.","places.piazza":"Etwa 5 Minuten. Das monumentale Herz von Montepulciano zwischen historischen Palästen und Gassen.","places.acquacheta":"Eines der traditionsreichen Lokale des Ortes, ideal für ein herzhaftes toskanisches Abendessen.","places.lieviti":"Pizza und ungezwungene Atmosphäre – eine Adresse, die wir unseren Gästen gerne empfehlen.",
    "host.title":"Ein Zuhause, das wir gerne<br><em>teilen.</em>","host.p1":"Il Nido di Sofì entstand aus dem Wunsch nach einem einfachen, gemütlichen Ort in Montepulciano, der sich wirklich nach unserem Zuhause anfühlt. Heute öffnen wir ihn gerne für Reisende, die diesen Teil der Toskana entdecken und sich zugleich wie zu Hause fühlen möchten.","host.p2":"Wir haben versucht, den Charakter des Hauses zu bewahren und alles hinzuzufügen, was einen Aufenthalt unkompliziert, angenehm und authentisch macht.",
    "surroundings.kicker":"05 — UMGEBUNG","surroundings.title":"Das Val d'Orcia<br><em>beginnt genau hier.</em>","surroundings.lead":"Montepulciano ist ein idealer Ausgangspunkt, um die Altstadt mit Ausflügen zu Hügeln, Dörfern und Thermalbädern zu verbinden.",
    "booking.kicker":"06 — DIREKT BUCHEN","booking.title":"Ihr Aufenthalt<br><em>beginnt hier.</em>","booking.intro":"Senden Sie uns eine Anfrage mit Ihren Wunschdaten. Wir prüfen die Verfügbarkeit persönlich und antworten per E-Mail, bevor eine Zahlung angefordert wird.","booking.note":"Die Anfrage ist noch keine bestätigte Buchung. Sie erhalten die Verfügbarkeitsbestätigung per E-Mail; die Online-Zahlung wird erst danach angefordert.",
    "form.name":"Vor- und Nachname","form.email":"E-Mail","form.checkin":"Check-in","form.checkout":"Check-out","form.guests":"Gäste","form.message":"Nachricht","form.messagePlaceholder":"Besondere Wünsche","form.submit":"Anfrage senden",
    "faq.kicker":"07 — FAQ","faq.title":"Vor Ihrer Anreise.","faq.checkin.q":"Wie funktioniert der Check-in?","faq.checkin.a":"Il Nido bietet Self-Check-in über eine Schlüsselbox. Die vollständigen Anweisungen werden vor der Anreise gesendet.","faq.parking.q":"Wo kann ich parken?","faq.parking.a":"Zu den nächstgelegenen Möglichkeiten gehören der Parkplatz an der Fortezza, etwa 2 Gehminuten entfernt, sowie P8 Via dei Filosofi und P7 Via dell’Oriolo, etwa 5 Minuten entfernt.","faq.mobility.q":"Ist das Apartment für Personen mit eingeschränkter Mobilität geeignet?","faq.mobility.a":"Das Apartment liegt im dritten Stock eines historischen Gebäudes ohne Aufzug und ist daher möglicherweise nicht für Gäste mit eingeschränkter Mobilität geeignet.","faq.pets.q":"Sind Haustiere erlaubt?","faq.pets.a":"Ja. Bitte erwähnen Sie Ihr Haustier einfach in der Anfrage.","faq.fireplace.q":"Kann der Kamin benutzt werden?","faq.fireplace.a":"Der Holzkamin kann derzeit aus Sicherheitsgründen nicht genutzt werden.",
    "footer.book":"Buchen","footer.airbnb":"Auf Airbnb ansehen"
  },
  fr: {
    "nav.home":"La maison","nav.montepulciano":"Montepulciano","nav.valdorcia":"Val d'Orcia","nav.faq":"FAQ","nav.book":"Réserver en direct","language.label":"Langue",
    "hero.eyebrow":"MONTEPULCIANO · TOSCANE · ITALIE","hero.title":"Une maison toscane<br>au cœur de Montepulciano.","hero.subtitle":"Authentique, intime et à quelques pas de Piazza Grande.","hero.discover":"Découvrir l'appartement","hero.book":"Réserver en direct","hero.scroll":"DÉFILER ↓",
    "position.kicker":"01 — EMPLACEMENT","position.title":"La Toscane<br><em>juste derrière la porte.</em>","position.lead":"Il Nido di Sofì se trouve Via del Poliziano, au cœur de Montepulciano : un emplacement idéal pour découvrir naturellement la ville à pied.","position.body":"La Fortezza, Piazza Grande, les bars à vin et les restaurants sont à quelques pas. Une fois dehors, nul besoin de tout programmer : il suffit de se laisser guider par les rues du centre historique.",
    "facts.guests":"voyageurs","facts.bedroom":"chambre","facts.bathroom":"salle de bain","facts.center":"du cœur historique",
    "home.kicker":"02 — LA MAISON","home.title":"Simple, authentique,<br><em>soignée dans les détails.</em>","home.lead":"Une petite maison toscane pensée pour vivre Montepulciano à un rythme tranquille, entre sols en terre cuite, poutres apparentes et caractère authentique d'une demeure du centre historique.",
    "amenities.wifi":"Wi-Fi rapide","amenities.kitchen":"Cuisine équipée","amenities.heating":"Chauffage autonome","amenities.checkin":"Arrivée autonome","amenities.workspace":"Espace de travail","amenities.pets":"Animaux acceptés",
    "village.kicker":"03 — LE VILLAGE","village.title":"Montepulciano<br><em>se découvre à pied.</em>","village.lead":"Depuis Il Nido, vous rejoignez facilement quelques-uns des lieux et adresses qui rendent le séjour si particulier.",
    "places.fortezza":"Environ 2 minutes. Un point de vue idéal pour un premier regard sur le Val d'Orcia.","places.piazza":"Environ 5 minutes. Le cœur monumental de Montepulciano, entre palais historiques et ruelles.","places.acquacheta":"L'une des tables historiques du village, parfaite pour un dîner toscan généreux.","places.lieviti":"Pizza et ambiance décontractée, une adresse que nous recommandons volontiers à nos voyageurs.",
    "host.title":"Une maison que nous aimons<br><em>partager.</em>","host.p1":"Il Nido di Sofì est né de notre envie d'avoir à Montepulciano un lieu simple, accueillant et vraiment à nous. Aujourd'hui, nous aimons l'ouvrir à celles et ceux qui souhaitent découvrir ce coin de Toscane tout en se sentant chez eux.","host.p2":"Nous avons cherché à préserver le caractère de la maison tout en ajoutant ce qui rend le séjour simple, agréable et authentique.",
    "surroundings.kicker":"05 — ALENTOURS","surroundings.title":"Le Val d'Orcia<br><em>commence ici.</em>","surroundings.lead":"Montepulciano est une base idéale pour alterner centre historique, collines, villages et thermes.",
    "booking.kicker":"06 — RÉSERVER EN DIRECT","booking.title":"Votre séjour<br><em>commence ici.</em>","booking.intro":"Envoyez-nous une demande avec les dates souhaitées. Nous vérifierons personnellement les disponibilités et vous répondrons par e-mail avant toute demande de paiement.","booking.note":"La demande n'est pas encore une réservation confirmée : vous recevrez la confirmation des disponibilités par e-mail. Le paiement en ligne ne sera demandé qu'ensuite.",
    "form.name":"Nom et prénom","form.email":"E-mail","form.checkin":"Arrivée","form.checkout":"Départ","form.guests":"Voyageurs","form.message":"Message","form.messagePlaceholder":"Demandes particulières","form.submit":"Envoyer la demande",
    "faq.kicker":"07 — FAQ","faq.title":"Avant votre arrivée.","faq.checkin.q":"Comment fonctionne l'arrivée ?","faq.checkin.a":"Il Nido propose une arrivée autonome grâce à une boîte à clés sécurisée. Les instructions complètes sont envoyées avant l'arrivée.","faq.parking.q":"Où puis-je me garer ?","faq.parking.a":"Parmi les options les plus proches : le parking de la Fortezza, à environ 2 minutes à pied, ainsi que P8 Via dei Filosofi et P7 Via dell’Oriolo, à environ 5 minutes.","faq.mobility.q":"L'appartement convient-il aux personnes à mobilité réduite ?","faq.mobility.a":"L'appartement se trouve au troisième étage d'un bâtiment historique sans ascenseur. Il peut donc ne pas convenir aux personnes ayant des difficultés de mobilité.","faq.pets.q":"Les animaux sont-ils acceptés ?","faq.pets.a":"Oui. Merci simplement de le signaler dans votre demande.","faq.fireplace.q":"La cheminée peut-elle être utilisée ?","faq.fireplace.a":"La cheminée à bois n'est actuellement pas utilisable pour des raisons de sécurité.",
    "footer.book":"Réserver","footer.airbnb":"Voir sur Airbnb"
  },
  ru: {
    "nav.home":"Дом","nav.montepulciano":"Монтепульчано","nav.valdorcia":"Валь-д'Орча","nav.faq":"FAQ","nav.book":"Забронировать напрямую","language.label":"Язык",
    "hero.eyebrow":"МОНТЕПУЛЬЧАНО · ТОСКАНА · ИТАЛИЯ","hero.title":"Тосканский дом<br>в самом сердце Монтепульчано.","hero.subtitle":"Аутентично, уютно и всего в нескольких шагах от Piazza Grande.","hero.discover":"Посмотреть апартаменты","hero.book":"Забронировать напрямую","hero.scroll":"ЛИСТАЙТЕ ↓",
    "position.kicker":"01 — РАСПОЛОЖЕНИЕ","position.title":"Тоскана<br><em>прямо за дверью.</em>","position.lead":"Il Nido di Sofì находится на Via del Poliziano, в самом сердце Монтепульчано — отсюда исторический центр удобно исследовать пешком.","position.body":"Крепость, Piazza Grande, винные бары и рестораны находятся всего в нескольких минутах ходьбы. Выйдя из дома, не нужно планировать каждый шаг — просто следуйте по улицам старого города.",
    "facts.guests":"гостя","facts.bedroom":"спальня","facts.bathroom":"ванная","facts.center":"от исторического центра",
    "home.kicker":"02 — ДОМ","home.title":"Просто, аутентично,<br><em>с вниманием к деталям.</em>","home.lead":"Небольшой тосканский дом для неспешного знакомства с Монтепульчано: терракотовые полы, открытые балки и подлинный характер жилья в историческом центре.",
    "amenities.wifi":"Быстрый Wi‑Fi","amenities.kitchen":"Оборудованная кухня","amenities.heating":"Автономное отопление","amenities.checkin":"Самостоятельное заселение","amenities.workspace":"Рабочее место","amenities.pets":"Можно с питомцами",
    "village.kicker":"03 — ГОРОД","village.title":"Монтепульчано<br><em>лучше открывать пешком.</em>","village.lead":"От Il Nido легко дойти до мест, которые делают пребывание здесь особенно приятным.",
    "places.fortezza":"Около 2 минут. Отличная обзорная точка для первого взгляда на Валь-д'Орча сверху.","places.piazza":"Около 5 минут. Монументальное сердце Монтепульчано среди исторических дворцов и переулков.","places.acquacheta":"Одно из исторических заведений города, отличное место для сытного тосканского ужина.","places.lieviti":"Пицца и непринуждённая атмосфера — место, которое мы с удовольствием рекомендуем гостям.",
    "host.title":"Дом, которым мы любим<br><em>делиться.</em>","host.p1":"Il Nido di Sofì появился из нашего желания иметь в Монтепульчано простое, уютное и по-настоящему наше место. Теперь мы с радостью открываем его тем, кто хочет узнать этот уголок Тосканы и при этом чувствовать себя как дома.","host.p2":"Мы постарались сохранить характер дома и добавить всё, что делает проживание удобным, приятным и аутентичным.",
    "surroundings.kicker":"05 — ОКРЕСТНОСТИ","surroundings.title":"Валь-д'Орча<br><em>начинается отсюда.</em>","surroundings.lead":"Монтепульчано — отличная база, чтобы чередовать прогулки по старому городу с поездками по холмам, деревням и термальным источникам.",
    "booking.kicker":"06 — ПРЯМОЕ БРОНИРОВАНИЕ","booking.title":"Ваше путешествие<br><em>начинается здесь.</em>","booking.intro":"Отправьте запрос с желаемыми датами. Мы лично проверим доступность и ответим по электронной почте до запроса оплаты.","booking.note":"Запрос ещё не является подтверждённым бронированием: подтверждение доступности придёт по электронной почте. Онлайн-оплата будет запрошена только после этого.",
    "form.name":"Имя и фамилия","form.email":"Электронная почта","form.checkin":"Заезд","form.checkout":"Выезд","form.guests":"Гости","form.message":"Сообщение","form.messagePlaceholder":"Особые пожелания","form.submit":"Отправить запрос",
    "faq.kicker":"07 — FAQ","faq.title":"Перед приездом.","faq.checkin.q":"Как проходит заселение?","faq.checkin.a":"В Il Nido предусмотрено самостоятельное заселение через сейф для ключей. Подробные инструкции отправляются до приезда.","faq.parking.q":"Где можно припарковаться?","faq.parking.a":"Среди ближайших вариантов — парковка у Fortezza примерно в 2 минутах пешком, а также P8 Via dei Filosofi и P7 Via dell’Oriolo примерно в 5 минутах.","faq.mobility.q":"Подходит ли квартира людям с ограниченной мобильностью?","faq.mobility.a":"Апартаменты находятся на третьем этаже исторического здания без лифта, поэтому могут не подойти гостям с ограниченной мобильностью.","faq.pets.q":"Можно ли с животными?","faq.pets.a":"Да. Просто укажите это в запросе.","faq.fireplace.q":"Можно ли пользоваться камином?","faq.fireplace.a":"Дровяной камин сейчас не используется по соображениям безопасности.",
    "footer.book":"Забронировать","footer.airbnb":"Смотреть на Airbnb"
  },
  zh: {
    "nav.home":"住所","nav.montepulciano":"蒙特普尔恰诺","nav.valdorcia":"奥尔恰谷","nav.faq":"常见问题","nav.book":"直接预订","language.label":"语言",
    "hero.eyebrow":"蒙特普尔恰诺 · 托斯卡纳 · 意大利","hero.title":"一处托斯卡纳之家<br>就在蒙特普尔恰诺中心。","hero.subtitle":"真实、宁静，步行几分钟即可到达大广场。","hero.discover":"了解公寓","hero.book":"直接预订","hero.scroll":"向下浏览 ↓",
    "position.kicker":"01 — 位置","position.title":"托斯卡纳<br><em>就在门外。</em>","position.lead":"Il Nido di Sofì 位于 Via del Poliziano，坐落在蒙特普尔恰诺历史中心，从这里可以轻松步行探索小城。","position.body":"Fortezza、Piazza Grande、葡萄酒吧和餐厅都近在咫尺。走出家门，无需安排得太满，只需沿着历史街区慢慢走，感受这里的节奏。",
    "facts.guests":"位客人","facts.bedroom":"间卧室","facts.bathroom":"间浴室","facts.center":"到历史中心",
    "home.kicker":"02 — 住所","home.title":"简洁、真实，<br><em>细节用心。</em>","home.lead":"这是一处小巧的托斯卡纳住所，适合慢慢感受蒙特普尔恰诺：赤陶地板、外露木梁，以及老城住宅特有的真实气息。",
    "amenities.wifi":"高速 Wi‑Fi","amenities.kitchen":"设备齐全的厨房","amenities.heating":"独立供暖","amenities.checkin":"自助入住","amenities.workspace":"工作空间","amenities.pets":"可携带宠物",
    "village.kicker":"03 — 小城","village.title":"蒙特普尔恰诺<br><em>最适合步行探索。</em>","village.lead":"从 Il Nido 出发，可以轻松步行到达许多让旅程更特别的地方。",
    "places.fortezza":"约 2 分钟。这里是俯瞰奥尔恰谷、开始认识周边风景的理想观景点。","places.piazza":"约 5 分钟。这里是蒙特普尔恰诺最具代表性的中心，四周环绕着历史建筑与小巷。","places.acquacheta":"小城里历史悠久的餐厅之一，适合享用丰盛的托斯卡纳晚餐。","places.lieviti":"披萨与轻松氛围，是我们很乐意推荐给客人的地方。",
    "host.title":"一个我们愿意<br><em>与你分享的家。</em>","host.p1":"Il Nido di Sofì 源于我们希望在蒙特普尔恰诺拥有一个简单、温暖、真正属于自己的空间。现在，我们也很愿意把它分享给想要探索托斯卡纳、同时又希望拥有家一般感觉的旅人。","host.p2":"我们尽量保留房子的原有气质，同时加入让住宿更轻松、舒适和真实所需要的一切。",
    "surroundings.kicker":"05 — 周边","surroundings.title":"奥尔恰谷<br><em>从这里开始。</em>","surroundings.lead":"蒙特普尔恰诺是理想的旅行据点，可以在历史中心漫步，也可以前往丘陵、小镇和温泉度过一天。",
    "booking.kicker":"06 — 直接预订","booking.title":"你的旅程<br><em>从这里开始。</em>","booking.intro":"提交你希望入住的日期。我们会亲自确认房态，并在任何付款之前通过电子邮件回复你。","booking.note":"提交申请并不等于确认预订。你会先通过电子邮件收到房态确认，在线付款将在之后进行。",
    "form.name":"姓名","form.email":"电子邮箱","form.checkin":"入住日期","form.checkout":"退房日期","form.guests":"客人数","form.message":"留言","form.messagePlaceholder":"其他需求","form.submit":"提交申请",
    "faq.kicker":"07 — 常见问题","faq.title":"抵达之前。","faq.checkin.q":"如何办理入住？","faq.checkin.a":"Il Nido 使用钥匙保险盒进行自助入住。完整说明会在抵达前发送。","faq.parking.q":"可以在哪里停车？","faq.parking.a":"附近可选择 Fortezza 停车场，步行约 2 分钟；P8 Via dei Filosofi 和 P7 Via dell’Oriolo 停车场步行约 5 分钟。","faq.mobility.q":"公寓适合行动不便的客人吗？","faq.mobility.a":"公寓位于历史建筑的三楼，且没有电梯，因此可能不适合行动不便的客人。","faq.pets.q":"可以携带宠物吗？","faq.pets.a":"可以。请在预订申请中告知我们。","faq.fireplace.q":"壁炉可以使用吗？","faq.fireplace.a":"出于安全原因，目前木柴壁炉暂不开放使用。",
    "footer.book":"预订","footer.airbnb":"在 Airbnb 查看"
  }
};


const extraTranslations = {
  it:{
    "bravio.kicker":"04 — IL BRAVÌO DELLE BOTTI","bravio.title":"Una settimana in cui<br><em>Montepulciano cambia ritmo.</em>","bravio.lead":"Negli ultimi giorni di agosto le otto contrade animano il centro storico con prove, cortei, cene e bandiere. La festa culmina nell’ultima domenica di agosto, quando due spingitori per contrada fanno rotolare botti da circa 80 kg lungo le strade in salita fino a Piazza Grande.","bravio.body":"Soggiornare al Nido durante il Bravìo significa vivere la città dall’interno: le contrade aperte, il Corteo dei Ceri, il corteo storico e l’attesa della gara trasformano ogni sera in qualcosa di diverso. È uno dei periodi più intensi e caratteristici dell’anno a Montepulciano.","bravio.book":"Prenota per la settimana del Bravìo","bravio.official":"Sito ufficiale del Bravìo ↗","bravio.stat1":"contrade","bravio.stat2":"circa per botte","bravio.lastSunday":"ultima domenica","bravio.stat3":"di agosto · giorno della gara","surroundings.kicker":"06 — DINTORNI","booking.kicker":"07 — PRENOTA DIRETTAMENTE","faq.kicker":"08 — FAQ"
  },
  en:{
    "bravio.kicker":"04 — THE BRAVÌO DELLE BOTTI","bravio.title":"A week when<br><em>Montepulciano changes rhythm.</em>","bravio.lead":"In the final days of August, the eight historic districts fill the old town with trials, parades, dinners and flags. The celebrations culminate on the last Sunday of August, when two pushers from each district race roughly 80 kg barrels uphill through the streets to Piazza Grande.","bravio.body":"Staying at Il Nido during the Bravìo means experiencing Montepulciano from within: open contrade, the candlelit procession, the historical parade and the anticipation of the race make every evening different. It is one of the most distinctive times of the year in town.","bravio.book":"Stay for Bravìo week","bravio.official":"Official Bravìo website ↗","bravio.stat1":"historic districts","bravio.stat2":"approx. per barrel","bravio.lastSunday":"last Sunday","bravio.stat3":"of August · race day","surroundings.kicker":"06 — SURROUNDINGS","booking.kicker":"07 — BOOK DIRECT","faq.kicker":"08 — FAQ"
  },
  es:{
    "bravio.kicker":"04 — EL BRAVÌO DELLE BOTTI","bravio.title":"Una semana en la que<br><em>Montepulciano cambia de ritmo.</em>","bravio.lead":"En los últimos días de agosto, las ocho contradas llenan el centro histórico de pruebas, desfiles, cenas y banderas. La fiesta culmina el último domingo de agosto, cuando dos empujadores por contrada hacen rodar barriles de unos 80 kg cuesta arriba hasta Piazza Grande.","bravio.body":"Alojarse en Il Nido durante el Bravìo significa vivir la ciudad desde dentro: las contradas abiertas, el Corteo dei Ceri, el desfile histórico y la espera de la carrera hacen que cada noche sea distinta.","bravio.book":"Reserva para la semana del Bravìo","bravio.official":"Web oficial del Bravìo ↗","bravio.stat1":"contradas","bravio.stat2":"aprox. por barril","bravio.lastSunday":"último domingo","bravio.stat3":"de agosto · día de la carrera","surroundings.kicker":"06 — ALREDEDORES","booking.kicker":"07 — RESERVA DIRECTA","faq.kicker":"08 — FAQ"
  },
  de:{
    "bravio.kicker":"04 — DER BRAVÌO DELLE BOTTI","bravio.title":"Eine Woche, in der<br><em>Montepulciano seinen Rhythmus ändert.</em>","bravio.lead":"In den letzten Augusttagen beleben die acht Stadtviertel die Altstadt mit Trainingsläufen, Umzügen, Abendessen und Fahnen. Höhepunkt ist der letzte Sonntag im August, wenn je zwei Läufer rund 80 kg schwere Fässer bergauf bis zur Piazza Grande rollen.","bravio.body":"Ein Aufenthalt im Il Nido während des Bravìo bedeutet, Montepulciano mitten im Geschehen zu erleben: offene Contrade, der Lichterzug Corteo dei Ceri, der historische Umzug und die Spannung vor dem Rennen machen jeden Abend besonders.","bravio.book":"Für die Bravìo-Woche buchen","bravio.official":"Offizielle Bravìo-Website ↗","bravio.stat1":"Contrade","bravio.stat2":"ca. pro Fass","bravio.lastSunday":"letzter Sonntag","bravio.stat3":"im August · Renntag","surroundings.kicker":"06 — UMGEBUNG","booking.kicker":"07 — DIREKT BUCHEN","faq.kicker":"08 — FAQ"
  },
  fr:{
    "bravio.kicker":"04 — LE BRAVÌO DELLE BOTTI","bravio.title":"Une semaine où<br><em>Montepulciano change de rythme.</em>","bravio.lead":"À la fin du mois d’août, les huit contrade animent le centre historique avec essais, cortèges, dîners et drapeaux. La fête culmine le dernier dimanche d’août, lorsque deux pousseurs par contrada font rouler des tonneaux d’environ 80 kg dans les rues en pente jusqu’à Piazza Grande.","bravio.body":"Séjourner à Il Nido pendant le Bravìo, c’est vivre Montepulciano de l’intérieur : contrade ouvertes, procession aux flambeaux, cortège historique et attente de la course rendent chaque soirée unique.","bravio.book":"Réserver pour la semaine du Bravìo","bravio.official":"Site officiel du Bravìo ↗","bravio.stat1":"contrade","bravio.stat2":"env. par tonneau","bravio.lastSunday":"dernier dimanche","bravio.stat3":"d’août · jour de la course","surroundings.kicker":"06 — ALENTOURS","booking.kicker":"07 — RÉSERVER EN DIRECT","faq.kicker":"08 — FAQ"
  },
  ru:{
    "bravio.kicker":"04 — BRAVÌO DELLE BOTTI","bravio.title":"Неделя, когда<br><em>Монтепульчано меняет ритм.</em>","bravio.lead":"В последние дни августа восемь контрад наполняют исторический центр тренировками, шествиями, ужинами и флагами. Праздник завершается в последнее воскресенье августа: по два участника от каждой контрады катят вверх по улицам бочки весом около 80 кг до Piazza Grande.","bravio.body":"Жить в Il Nido во время Bravìo — значит увидеть город изнутри: открытые контрады, шествие со свечами, исторический парад и ожидание гонки делают каждый вечер особенным.","bravio.book":"Забронировать на неделю Bravìo","bravio.official":"Официальный сайт Bravìo ↗","bravio.stat1":"контрад","bravio.stat2":"примерно на бочку","bravio.lastSunday":"последнее воскресенье","bravio.stat3":"августа · день гонки","surroundings.kicker":"06 — ОКРЕСТНОСТИ","booking.kicker":"07 — ПРЯМОЕ БРОНИРОВАНИЕ","faq.kicker":"08 — FAQ"
  },
  zh:{
    "bravio.kicker":"04 — 滚酒桶节 BRAVÌO","bravio.title":"一周时间，<br><em>蒙特普尔恰诺换了节奏。</em>","bravio.lead":"八月底，八个历史街区会用训练、游行、聚餐和旗帜点燃老城。庆典在八月最后一个星期日达到高潮：每个街区的两名选手将约80公斤重的酒桶沿上坡街道推向 Piazza Grande。","bravio.body":"Bravìo 期间住在 Il Nido，可以从城市内部感受节庆：开放的街区会所、烛光游行、历史巡游以及赛前的期待，让每一个夜晚都与众不同。","bravio.book":"预订 Bravìo 节庆周","bravio.official":"Bravìo 官方网站 ↗","bravio.stat1":"个历史街区","bravio.stat2":"每只酒桶约","bravio.lastSunday":"最后一个星期日","bravio.stat3":"八月 · 比赛日","surroundings.kicker":"06 — 周边","booking.kicker":"07 — 直接预订","faq.kicker":"08 — 常见问题"
  }
};


const recommendationTranslations = {
  it:{
    "food.kicker":"04 — I NOSTRI INDIRIZZI","food.title":"Dove mangiare<br><em>e bere.</em>","food.lead":"A Montepulciano si mangia bene in tanti posti. Questi però sono gli indirizzi a cui siamo davvero affezionati: persone che conosciamo e che ci fa piacere farvi conoscere.",
    "food.lieviti":"Pizza napoletana, impasti lunghi e ingredienti scelti, con una bella selezione di birre, in una caratteristica struttura in pietra del centro storico.","food.bottega":"Un piccolo locale nel cuore del borgo: piatti della tradizione, taglieri, pici e vini del territorio. Perfetto per un pranzo, una cena o anche solo un buon calice.","food.acquacheta":"Un indirizzo storico, conosciuto per la carne alla brace e la bistecca alla fiorentina. Ambiente vivace, tavoli condivisi e nessuna formalità.","food.poliziano":"Uno dei caffè storici più affascinanti del borgo. Se riuscite, chiedete un tavolo con vista: è un bellissimo modo di iniziare la giornata.","food.romantico":"Il nostro posto preferito per un aperitivo verso il tramonto: ambiente piacevole e una posizione che regala Montepulciano nella luce migliore.","food.tenuta":"Una bella occasione per uscire dal centro e scoprire Montepulciano attraverso il Vino Nobile e i suoi paesaggi. Meglio prenotare la visita in anticipo.","food.tag.meat":"Carne alla brace","food.tag.breakfast":"Colazione","food.tag.aperitivo":"Aperitivo al tramonto","food.tag.tasting":"Degustazione · in auto",
    "map.kicker":"05 — TUTTO A PORTATA DI PASSEGGIATA","map.title":"La mappa dei<br><em>nostri consigli.</em>","map.lead":"Casa, tavole che amiamo, luoghi da vedere, parcheggi e servizi utili: una piccola mappa per capire subito cosa hai intorno.","map.note":"Tocca un punto per leggere il consiglio e aprire la posizione in Google Maps.","map.cat.home":"Casa","map.cat.food":"Mangiare e bere","map.cat.see":"Da vedere","map.cat.park":"Parcheggi","map.cat.useful":"Utile","map.home":"Centra su casa","map.credit":"I link dei punti aprono Google Maps.","map.open":"Apri in Google Maps",
    "bravio.kicker":"06 — IL BRAVÌO DELLE BOTTI","surroundings.kicker":"08 — DINTORNI","booking.kicker":"09 — PRENOTA DIRETTAMENTE","faq.kicker":"10 — FAQ"
  },
  en:{
    "food.kicker":"04 — OUR FAVOURITE ADDRESSES","food.title":"Where to eat<br><em>and drink.</em>","food.lead":"There are many good places to eat in Montepulciano. These are the ones we are genuinely fond of: people we know and places we are happy to share with our guests.",
    "food.lieviti":"Neapolitan pizza with long-fermented dough, carefully chosen ingredients and a good beer selection, inside a characterful stone building in the old town.","food.bottega":"A small place in the heart of town for traditional dishes, boards, pici pasta and local wines. Perfect for lunch, dinner or simply a good glass of wine.","food.acquacheta":"A historic address known for grilled meat and Florentine steak. Lively atmosphere, shared tables and no formality.","food.poliziano":"One of the town’s most charming historic cafés. If you can, ask for a table with a view: a beautiful way to start the day.","food.romantico":"Our favourite place for a sunset aperitivo: relaxed atmosphere and a position that shows Montepulciano in its best light.","food.tenuta":"A lovely reason to leave the old town and discover Montepulciano through Vino Nobile and its landscape. Booking ahead is recommended.","food.tag.meat":"Grilled meat","food.tag.breakfast":"Breakfast","food.tag.aperitivo":"Sunset aperitivo","food.tag.tasting":"Wine tasting · by car",
    "map.kicker":"05 — EVERYTHING WITHIN REACH","map.title":"Our little map<br><em>of recommendations.</em>","map.lead":"Home, places we love to eat and drink, sights, parking and useful services: a quick map of what is around you.","map.note":"Tap a point to read our note and open the location in Google Maps.","map.cat.home":"Home","map.cat.food":"Eat & drink","map.cat.see":"See","map.cat.park":"Parking","map.cat.useful":"Useful","map.home":"Centre on home","map.credit":"Point links open Google Maps.","map.open":"Open in Google Maps",
    "bravio.kicker":"06 — THE BRAVÌO DELLE BOTTI","surroundings.kicker":"08 — SURROUNDINGS","booking.kicker":"09 — BOOK DIRECT","faq.kicker":"10 — FAQ"
  },
  es:{
    "food.kicker":"04 — NUESTROS SITIOS FAVORITOS","food.title":"Dónde comer<br><em>y beber.</em>","food.lead":"En Montepulciano se come bien en muchos sitios. Estos son los lugares a los que de verdad tenemos cariño: personas que conocemos y que nos gusta recomendar.",
    "food.lieviti":"Pizza napolitana, masas de larga fermentación, buenos ingredientes y una cuidada selección de cervezas, en un característico local de piedra del centro.","food.bottega":"Un pequeño local en pleno centro: platos tradicionales, tablas, pici y vinos de la zona. Perfecto para comer, cenar o simplemente tomar una copa.","food.acquacheta":"Un clásico conocido por la carne a la brasa y la bistecca alla fiorentina. Ambiente animado, mesas compartidas y sin formalidades.","food.poliziano":"Uno de los cafés históricos más bonitos del pueblo. Si podéis, pedid una mesa con vistas: es una forma preciosa de empezar el día.","food.romantico":"Nuestro lugar favorito para un aperitivo al atardecer, con un ambiente agradable y Montepulciano bajo su mejor luz.","food.tenuta":"Una bonita ocasión para salir del centro y descubrir Montepulciano a través del Vino Nobile y su paisaje. Mejor reservar con antelación.","food.tag.meat":"Carne a la brasa","food.tag.breakfast":"Desayuno","food.tag.aperitivo":"Aperitivo al atardecer","food.tag.tasting":"Degustación · en coche",
    "map.kicker":"05 — TODO MUY CERCA","map.title":"El mapa de<br><em>nuestros consejos.</em>","map.lead":"La casa, nuestros lugares favoritos, sitios que ver, aparcamientos y servicios útiles: un mapa rápido de lo que tienes alrededor.","map.note":"Toca un punto para leer el consejo y abrirlo en Google Maps.","map.cat.home":"Casa","map.cat.food":"Comer y beber","map.cat.see":"Qué ver","map.cat.park":"Aparcamientos","map.cat.useful":"Útil","map.home":"Centrar en casa","map.credit":"Los enlaces abren Google Maps.","map.open":"Abrir en Google Maps",
    "bravio.kicker":"06 — EL BRAVÌO DELLE BOTTI","surroundings.kicker":"08 — ALREDEDORES","booking.kicker":"09 — RESERVA DIRECTA","faq.kicker":"10 — FAQ"
  },
  de:{
    "food.kicker":"04 — UNSERE LIEBLINGSADRESSEN","food.title":"Essen und<br><em>Trinken.</em>","food.lead":"In Montepulciano kann man an vielen Orten gut essen. Diese Adressen liegen uns besonders am Herzen: Menschen, die wir kennen, und Orte, die wir unseren Gästen gern empfehlen.",
    "food.lieviti":"Neapolitanische Pizza mit lang geführtem Teig, ausgewählten Zutaten und guter Bierauswahl in einem charakteristischen Steingebäude der Altstadt.","food.bottega":"Ein kleines Lokal mitten im Ort: traditionelle Gerichte, Platten, Pici und Weine aus der Region. Ideal zum Mittag- oder Abendessen oder einfach für ein gutes Glas Wein.","food.acquacheta":"Eine historische Adresse, bekannt für Grillfleisch und Bistecca alla Fiorentina. Lebhafte Atmosphäre, gemeinsame Tische, ganz unkompliziert.","food.poliziano":"Eines der schönsten historischen Cafés des Ortes. Wenn möglich, fragen Sie nach einem Tisch mit Aussicht – ein wunderbarer Start in den Tag.","food.romantico":"Unser Lieblingsort für einen Aperitif bei Sonnenuntergang: angenehme Atmosphäre und Montepulciano im schönsten Licht.","food.tenuta":"Eine schöne Gelegenheit, die Altstadt zu verlassen und Montepulciano über Vino Nobile und die Landschaft kennenzulernen. Vorab reservieren.","food.tag.meat":"Grillfleisch","food.tag.breakfast":"Frühstück","food.tag.aperitivo":"Aperitif zum Sonnenuntergang","food.tag.tasting":"Weinprobe · mit dem Auto",
    "map.kicker":"05 — ALLES GANZ NAH","map.title":"Unsere Karte<br><em>mit Empfehlungen.</em>","map.lead":"Zuhause, Lieblingslokale, Sehenswürdigkeiten, Parkplätze und Nützliches: eine schnelle Übersicht über alles in Ihrer Nähe.","map.note":"Tippen Sie auf einen Punkt, um unseren Hinweis zu lesen und ihn in Google Maps zu öffnen.","map.cat.home":"Zuhause","map.cat.food":"Essen & Trinken","map.cat.see":"Sehen","map.cat.park":"Parken","map.cat.useful":"Nützlich","map.home":"Auf Zuhause zentrieren","map.credit":"Die Links öffnen Google Maps.","map.open":"In Google Maps öffnen",
    "bravio.kicker":"06 — DER BRAVÌO DELLE BOTTI","surroundings.kicker":"08 — UMGEBUNG","booking.kicker":"09 — DIREKT BUCHEN","faq.kicker":"10 — FAQ"
  },
  fr:{
    "food.kicker":"04 — NOS ADRESSES PRÉFÉRÉES","food.title":"Où manger<br><em>et boire.</em>","food.lead":"On mange très bien à de nombreux endroits à Montepulciano. Voici ceux auxquels nous sommes vraiment attachés : des personnes que nous connaissons et des adresses que nous aimons partager.",
    "food.lieviti":"Pizza napolitaine, pâtes à fermentation longue, ingrédients choisis et belle sélection de bières, dans un lieu en pierre plein de caractère au cœur du centre historique.","food.bottega":"Une petite adresse au cœur du bourg : plats traditionnels, planches, pici et vins locaux. Parfait pour déjeuner, dîner ou simplement boire un bon verre.","food.acquacheta":"Une adresse historique réputée pour ses viandes grillées et la bistecca alla fiorentina. Ambiance animée, tables partagées et sans formalités.","food.poliziano":"L’un des cafés historiques les plus charmants du bourg. Si possible, demandez une table avec vue : une très belle façon de commencer la journée.","food.romantico":"Notre endroit préféré pour l’aperitivo au coucher du soleil : une atmosphère agréable et Montepulciano dans sa plus belle lumière.","food.tenuta":"Une belle occasion de sortir du centre historique et de découvrir Montepulciano à travers le Vino Nobile et ses paysages. Réservation conseillée.","food.tag.meat":"Viandes grillées","food.tag.breakfast":"Petit-déjeuner","food.tag.aperitivo":"Aperitivo au coucher du soleil","food.tag.tasting":"Dégustation · en voiture",
    "map.kicker":"05 — TOUT À PORTÉE DE MAIN","map.title":"La carte de<br><em>nos bonnes adresses.</em>","map.lead":"La maison, nos tables préférées, les lieux à voir, les parkings et les services utiles : une carte rapide de ce qui vous entoure.","map.note":"Touchez un point pour lire notre conseil et ouvrir l’adresse dans Google Maps.","map.cat.home":"Maison","map.cat.food":"Manger & boire","map.cat.see":"À voir","map.cat.park":"Parkings","map.cat.useful":"Utile","map.home":"Centrer sur la maison","map.credit":"Les liens ouvrent Google Maps.","map.open":"Ouvrir dans Google Maps",
    "bravio.kicker":"06 — LE BRAVÌO DELLE BOTTI","surroundings.kicker":"08 — ALENTOURS","booking.kicker":"09 — RÉSERVER EN DIRECT","faq.kicker":"10 — FAQ"
  },
  ru:{
    "food.kicker":"04 — НАШИ ЛЮБИМЫЕ МЕСТА","food.title":"Где поесть<br><em>и выпить.</em>","food.lead":"В Монтепульчано много хороших мест. Эти особенно дороги нам: мы знаем людей, которые за ними стоят, и с удовольствием рекомендуем их гостям.",
    "food.lieviti":"Неаполитанская пицца с долгой ферментацией теста, хорошими ингредиентами и выбором пива в характерном каменном помещении старого города.","food.bottega":"Небольшое место в самом центре: традиционные блюда, мясные и сырные тарелки, пичи и местные вина. Подойдёт для обеда, ужина или просто бокала вина.","food.acquacheta":"Историческое заведение, известное мясом на гриле и флорентийским стейком. Живая атмосфера, общие столы и минимум формальностей.","food.poliziano":"Одно из самых красивых исторических кафе города. Если получится, попросите столик с видом — отличный способ начать день.","food.romantico":"Наше любимое место для аперитива на закате: приятная атмосфера и Монтепульчано в самом красивом свете.","food.tenuta":"Хороший повод выехать из центра и открыть Монтепульчано через Vino Nobile и пейзажи. Лучше бронировать заранее.","food.tag.meat":"Мясо на гриле","food.tag.breakfast":"Завтрак","food.tag.aperitivo":"Аперитив на закате","food.tag.tasting":"Дегустация · на машине",
    "map.kicker":"05 — ВСЁ РЯДОМ","map.title":"Карта<br><em>наших рекомендаций.</em>","map.lead":"Дом, любимые рестораны, достопримечательности, парковки и полезные места — всё необходимое на одной карте.","map.note":"Нажмите на точку, чтобы прочитать совет и открыть место в Google Maps.","map.cat.home":"Дом","map.cat.food":"Еда и напитки","map.cat.see":"Посмотреть","map.cat.park":"Парковки","map.cat.useful":"Полезное","map.home":"Центрировать на доме","map.credit":"Ссылки открывают Google Maps.","map.open":"Открыть в Google Maps",
    "bravio.kicker":"06 — BRAVÌO DELLE BOTTI","surroundings.kicker":"08 — ОКРЕСТНОСТИ","booking.kicker":"09 — ПРЯМОЕ БРОНИРОВАНИЕ","faq.kicker":"10 — FAQ"
  },
  zh:{
    "food.kicker":"04 — 我们喜欢的店","food.title":"去哪里吃饭<br><em>和喝一杯。</em>","food.lead":"蒙特普尔恰诺有很多好吃的地方。下面这些是我们真正喜欢、也愿意介绍给客人的店，其中很多店主都是我们认识的人。",
    "food.lieviti":"那不勒斯风格披萨，长时间发酵面团、精选食材和不错的啤酒选择，店铺位于老城一处很有特色的石建筑中。","food.bottega":"老城中心的一家小店：传统菜、冷切拼盘、Pici 手工面和当地葡萄酒。适合午餐、晚餐，也适合只喝一杯好酒。","food.acquacheta":"老城里很有历史的餐厅，以炭烤肉和佛罗伦萨牛排闻名。气氛热闹，有共享桌，不拘礼节。","food.poliziano":"镇上最迷人的历史咖啡馆之一。如果可以，尽量选一张有景观的桌子，是开启一天很美的方式。","food.romantico":"我们最喜欢的日落开胃酒去处：氛围舒服，也能看到蒙特普尔恰诺最漂亮的光线。","food.tenuta":"离开老城、通过 Vino Nobile 和周边风景认识蒙特普尔恰诺的好机会。建议提前预约。","food.tag.meat":"炭烤肉","food.tag.breakfast":"早餐","food.tag.aperitivo":"日落开胃酒","food.tag.tasting":"品酒 · 需要开车",
    "map.kicker":"05 — 周边一目了然","map.title":"我们的<br><em>推荐地图。</em>","map.lead":"住所、我们喜欢的餐厅、景点、停车场和实用服务，都放在一张小地图里，方便你快速了解周边。","map.note":"点击地图上的点，可以查看我们的提示并在 Google Maps 中打开位置。","map.cat.home":"住所","map.cat.food":"吃喝","map.cat.see":"景点","map.cat.park":"停车","map.cat.useful":"实用","map.home":"定位到住所","map.credit":"地图中的链接会打开 Google Maps。","map.open":"在 Google Maps 中打开",
    "bravio.kicker":"06 — 滚酒桶节 BRAVÌO","surroundings.kicker":"08 — 周边","booking.kicker":"09 — 直接预订","faq.kicker":"10 — 常见问题"
  }
};

const languageMeta = {
  it:{htmlLang:'it', title:'Il Nido di Sofì — Montepulciano'},
  en:{htmlLang:'en', title:'Il Nido di Sofì — Montepulciano, Tuscany'},
  es:{htmlLang:'es', title:'Il Nido di Sofì — Montepulciano, Toscana'},
  de:{htmlLang:'de', title:'Il Nido di Sofì — Montepulciano, Toskana'},
  fr:{htmlLang:'fr', title:'Il Nido di Sofì — Montepulciano, Toscane'},
  ru:{htmlLang:'ru', title:'Il Nido di Sofì — Монтепульчано, Тоскана'},
  zh:{htmlLang:'zh-CN', title:'Il Nido di Sofì — 意大利蒙特普尔恰诺'}
};

function setLanguage(lang){
  if(!translations[lang]) lang='it';
  const t={...translations[lang], ...(extraTranslations[lang]||{}), ...(recommendationTranslations[lang]||{})};
  document.documentElement.lang=languageMeta[lang].htmlLang;
  document.title=languageMeta[lang].title;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    if(t[key]!==undefined) el.textContent=t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const key=el.dataset.i18nHtml;
    if(t[key]!==undefined) el.innerHTML=t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key=el.dataset.i18nPlaceholder;
    if(t[key]!==undefined) el.placeholder=t[key];
  });
  const select=document.getElementById('languageSelect');
  if(select) select.value=lang;
  const next=document.getElementById('nextUrl');
  if(next) next.value=`https://ilnidodisofi.github.io/grazie.html?lang=${lang}`;
  localStorage.setItem('nidoLanguage',lang);
  renderRecommendationsMap(lang);
}

function setDateLimits(){
  const ci=document.getElementById('checkin');
  const co=document.getElementById('checkout');
  if(!ci||!co) return;
  const today=new Date();
  const iso=d=>d.toISOString().split('T')[0];
  ci.min=iso(today);
  co.min=iso(today);
  ci.addEventListener('change',()=>{
    if(!ci.value) return;
    const d=new Date(`${ci.value}T12:00:00`);
    d.setDate(d.getDate()+1);
    co.min=iso(d);
    if(co.value && co.value<=ci.value) co.value='';
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  const saved=localStorage.getItem('nidoLanguage');
  const browser=(navigator.language||'it').slice(0,2).toLowerCase();
  const initial=translations[saved]?saved:(translations[browser]?browser:'it');
  setLanguage(initial);
  setDateLimits();
  document.getElementById('languageSelect')?.addEventListener('change',e=>setLanguage(e.target.value));
});


// Photo lightbox
document.addEventListener('DOMContentLoaded',()=>{
  const box=document.getElementById('lightbox');
  if(!box) return;
  const img=box.querySelector('.lightbox-image');
  const close=box.querySelector('.lightbox-close');
  const open=(src,alt='')=>{
    img.src=src; img.alt=alt;
    box.classList.add('is-open');
    box.setAttribute('aria-hidden','false');
    document.body.classList.add('lightbox-open');
  };
  const shut=()=>{
    box.classList.remove('is-open');
    box.setAttribute('aria-hidden','true');
    document.body.classList.remove('lightbox-open');
    img.src='';
  };
  document.querySelectorAll('[data-lightbox]').forEach(btn=>{
    btn.addEventListener('click',()=>open(btn.dataset.lightbox,btn.querySelector('img')?.alt||''));
  });
  close?.addEventListener('click',shut);
  box.addEventListener('click',e=>{if(e.target===box) shut();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&box.classList.contains('is-open')) shut();});
});


// Recommendations map — adapted from the private guest guide.
const TIP_HOME=[43.0909279,11.7811431];
const TIP_COLORS={casa:'#7b2d20',mangiare:'#c35a2b',vedere:'#a38528',parcheggio:'#496d8e',utile:'#47705b'};
const TIP_PLACES=[
  {cat:'casa',lat:43.0909279,lng:11.7811431,name:'Il Nido di Sofì',q:'Il Nido di Sofì Via del Poliziano 12 Montepulciano',desc:{it:'Via del Poliziano 12 — il punto da cui partire.',en:'Via del Poliziano 12 — your starting point.',es:'Via del Poliziano 12 — vuestro punto de partida.',de:'Via del Poliziano 12 — Ihr Ausgangspunkt.',fr:'Via del Poliziano 12 — votre point de départ.',ru:'Via del Poliziano 12 — ваша отправная точка.',zh:'Via del Poliziano 12 — 你的出发点。'}},
  {cat:'mangiare',lat:43.0919791,lng:11.7814425,name:'Lieviti Pizzeria',q:'Lieviti Pizzeria Montepulciano',desc:{it:'Pizza napoletana in una struttura in pietra del centro.',en:'Neapolitan pizza in a characterful stone setting.',es:'Pizza napolitana en un local de piedra con mucho carácter.',de:'Neapolitanische Pizza in einem charakteristischen Steingebäude.',fr:'Pizza napolitaine dans un lieu en pierre plein de caractère.',ru:'Неаполитанская пицца в атмосферном каменном помещении.',zh:'老城石建筑里的那不勒斯披萨。'}},
  {cat:'mangiare',lat:43.09162,lng:11.7813507,name:'La Bottega del Vino',q:'La Bottega del Vino Montepulciano',desc:{it:'Piatti della tradizione, pici e vini del territorio.',en:'Traditional dishes, pici and local wines.',es:'Platos tradicionales, pici y vinos locales.',de:'Traditionelle Gerichte, Pici und lokale Weine.',fr:'Cuisine traditionnelle, pici et vins locaux.',ru:'Традиционные блюда, пичи и местные вина.',zh:'传统菜、Pici 手工面和当地葡萄酒。'}},
  {cat:'mangiare',lat:43.091404,lng:11.781266,name:'Osteria Acquacheta',q:'Osteria Acquacheta Montepulciano',desc:{it:'Carne alla brace e bistecca alla fiorentina. Prenotate.',en:'Grilled meat and Florentine steak. Booking recommended.',es:'Carne a la brasa y bistecca alla fiorentina. Mejor reservar.',de:'Grillfleisch und Bistecca alla Fiorentina. Reservieren.',fr:'Viandes grillées et bistecca alla fiorentina. Réservez.',ru:'Мясо на гриле и флорентийский стейк. Лучше бронировать.',zh:'炭烤肉和佛罗伦萨牛排，建议预订。'}},
  {cat:'mangiare',lat:43.0942808,lng:11.7821115,name:'Caffè Storico Poliziano',q:'Caffè Poliziano Montepulciano',desc:{it:'Colazione con vista nelle sale storiche.',en:'Breakfast with a view in historic rooms.',es:'Desayuno con vistas en sus salones históricos.',de:'Frühstück mit Aussicht in historischen Räumen.',fr:'Petit-déjeuner avec vue dans des salles historiques.',ru:'Завтрак с видом в исторических залах.',zh:'在历史咖啡厅里享用带景观的早餐。'}},
  {cat:'mangiare',lat:43.093107,lng:11.780476,name:'Romantico',q:'Romantico Montepulciano',desc:{it:'Aperitivo al tramonto, il nostro preferito.',en:'Our favourite sunset aperitivo.',es:'Nuestro aperitivo favorito al atardecer.',de:'Unser Lieblingsort für den Aperitif bei Sonnenuntergang.',fr:'Notre aperitivo préféré au coucher du soleil.',ru:'Наше любимое место для аперитива на закате.',zh:'我们最喜欢的日落开胃酒去处。'}},
  {cat:'mangiare',lat:43.1337606,lng:11.8365681,name:'Tenuta di Gracciano della Seta',q:'Tenuta di Gracciano della Seta Montepulciano',desc:{it:'Degustazione di Vino Nobile fuori dal centro: serve l’auto.',en:'Vino Nobile tasting outside town: you will need a car.',es:'Degustación de Vino Nobile fuera del centro: hace falta coche.',de:'Vino-Nobile-Verkostung außerhalb der Altstadt: Auto nötig.',fr:'Dégustation de Vino Nobile hors du centre : voiture nécessaire.',ru:'Дегустация Vino Nobile за пределами центра: нужна машина.',zh:'老城外的 Vino Nobile 品酒体验，需要开车。'}},
  {cat:'vedere',lat:43.0925919,lng:11.7808956,name:'Piazza Grande',q:'Piazza Grande Montepulciano',desc:{it:'Il cuore monumentale di Montepulciano.',en:'The monumental heart of Montepulciano.',es:'El corazón monumental de Montepulciano.',de:'Das monumentale Herz von Montepulciano.',fr:'Le cœur monumental de Montepulciano.',ru:'Монументальное сердце Монтепульчано.',zh:'蒙特普尔恰诺最具代表性的中心广场。'}},
  {cat:'vedere',lat:43.0909163,lng:11.7797282,name:'Fortezza Medicea',q:'Fortezza Medicea Montepulciano',desc:{it:'Verde, panorami e passeggiate, a due passi da casa.',en:'Gardens, views and walks just steps from home.',es:'Jardines, vistas y paseos a pocos pasos de casa.',de:'Grün, Aussicht und Spaziergänge direkt bei der Wohnung.',fr:'Jardins, panoramas et promenade à deux pas de la maison.',ru:'Сады, виды и прогулки буквально в двух шагах от дома.',zh:'离住所很近的花园、景观和散步路线。'}},
  {cat:'vedere',lat:43.0907791,lng:11.7745647,name:'Tempio di San Biagio',q:'Tempio di San Biagio Montepulciano',desc:{it:'Capolavoro rinascimentale appena fuori dalle mura.',en:'A Renaissance masterpiece just outside the walls.',es:'Una obra maestra renacentista justo fuera de las murallas.',de:'Ein Renaissance-Meisterwerk direkt außerhalb der Mauern.',fr:'Un chef-d’œuvre de la Renaissance juste hors des remparts.',ru:'Шедевр Ренессанса сразу за городскими стенами.',zh:'城墙外的文艺复兴建筑杰作。'}},
  {cat:'parcheggio',lat:43.0909641,lng:11.7805203,name:'Parcheggio Fortezza',q:'Parcheggio Fortezza Montepulciano',desc:{it:'Il più vicino a casa, circa 2 minuti a piedi.',en:'The closest to the apartment, about 2 minutes on foot.',es:'El más cercano a la casa, unos 2 minutos andando.',de:'Am nächsten zur Wohnung, etwa 2 Minuten zu Fuß.',fr:'Le plus proche de la maison, environ 2 minutes à pied.',ru:'Ближайшая парковка, около 2 минут пешком.',zh:'离住所最近，步行约2分钟。'}},
  {cat:'parcheggio',lat:43.0894384,lng:11.7790681,name:'P8 · Via dei Filosofi',q:'Parcheggio P8 Via dei Filosofi Montepulciano',desc:{it:'Fuori dalle mura, circa 5 minuti a piedi.',en:'Outside the walls, about 5 minutes on foot.',es:'Fuera de las murallas, unos 5 minutos andando.',de:'Außerhalb der Mauern, etwa 5 Minuten zu Fuß.',fr:'Hors des remparts, environ 5 minutes à pied.',ru:'За городскими стенами, около 5 минут пешком.',zh:'城墙外，步行约5分钟。'}},
  {cat:'parcheggio',lat:43.0914985,lng:11.7823742,name:"P7 · Via dell'Oriolo",q:"Parcheggio P7 Via dell'Oriolo Montepulciano",desc:{it:'Alternativa nei giorni più affollati.',en:'A useful alternative on busy days.',es:'Una buena alternativa en los días de mayor afluencia.',de:'Eine gute Alternative an stark besuchten Tagen.',fr:'Une bonne alternative les jours de forte affluence.',ru:'Удобная альтернатива в загруженные дни.',zh:'客流较多时的备选停车场。'}},
  {cat:'utile',lat:43.0939771,lng:11.7820736,name:'Farmacia Franceschi',q:'Farmacia Franceschi Montepulciano',desc:{it:'Farmacia nel centro storico.',en:'Pharmacy in the historic centre.',es:'Farmacia en el centro histórico.',de:'Apotheke in der Altstadt.',fr:'Pharmacie dans le centre historique.',ru:'Аптека в историческом центре.',zh:'历史中心内的药房。'}},
  {cat:'utile',lat:43.1192629,lng:11.825645,name:'Ospedale · Nottola',q:'Ospedale Nottola Montepulciano',desc:{it:'Pronto soccorso più vicino, circa 10 minuti in auto.',en:'Nearest emergency department, about 10 minutes by car.',es:'Urgencias más cercanas, unos 10 minutos en coche.',de:'Nächste Notaufnahme, etwa 10 Autominuten.',fr:'Service d’urgences le plus proche, environ 10 minutes en voiture.',ru:'Ближайшее отделение неотложной помощи, около 10 минут на машине.',zh:'最近的急诊，开车约10分钟。'}}
];
const activeTipCats=new Set(['casa','mangiare','vedere','parcheggio','utile']);
let tipsMap=null,tipsLayer=null,tipsMapLanguage='it';

function tipGoogleUrl(p){
  return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(p.q);
}
function tipPin(cat){
  return L.divIcon({className:'',html:'<div class="tip-pin" style="background:'+TIP_COLORS[cat]+'"><span></span></div>',iconSize:[27,27],iconAnchor:[14,25],popupAnchor:[0,-24]});
}
function drawTipMarkers(lang){
  if(!tipsMap||!tipsLayer) return;
  tipsLayer.clearLayers();
  const pts=[];
  TIP_PLACES.filter(p=>activeTipCats.has(p.cat)).forEach(p=>{
    const desc=p.desc[lang]||p.desc.it;
    const open=((recommendationTranslations[lang]||{})['map.open']||recommendationTranslations.it['map.open']);
    const html='<div class="tip-popup"><strong>'+p.name+'</strong><p>'+desc+'</p><a href="'+tipGoogleUrl(p)+'" target="_blank" rel="noopener">'+open+' ↗</a></div>';
    L.marker([p.lat,p.lng],{icon:tipPin(p.cat),title:p.name}).bindPopup(html).addTo(tipsLayer);
    pts.push([p.lat,p.lng]);
  });
  if(pts.length>1) tipsMap.fitBounds(L.latLngBounds(pts).pad(.16),{maxZoom:16});
  else if(pts.length===1) tipsMap.setView(pts[0],17);
}
function renderRecommendationsMap(lang){
  tipsMapLanguage=lang||'it';
  const el=document.getElementById('tipsMap');
  if(!el||typeof L==='undefined') return;
  if(!tipsMap){
    const mobile=window.matchMedia('(max-width: 560px)').matches;
    tipsMap=L.map('tipsMap',{scrollWheelZoom:false,dragging:!mobile,touchZoom:!mobile,doubleClickZoom:!mobile}).setView(TIP_HOME,15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap'}).addTo(tipsMap);
    tipsLayer=L.layerGroup().addTo(tipsMap);
    document.querySelectorAll('[data-map-filter]').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const cat=btn.dataset.mapFilter;
        if(activeTipCats.has(cat)){activeTipCats.delete(cat);btn.classList.remove('is-active');}
        else{activeTipCats.add(cat);btn.classList.add('is-active');}
        drawTipMarkers(tipsMapLanguage);
      });
    });
    document.getElementById('mapHomeButton')?.addEventListener('click',()=>tipsMap.setView(TIP_HOME,17));
    setTimeout(()=>tipsMap.invalidateSize(),100);
  }
  drawTipMarkers(tipsMapLanguage);
}
