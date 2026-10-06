// Keep homepage section numbering consistent after all translation layers load.
// Also adds the direct-booking indicative rate, live stay estimate, tourist-tax FAQ,
// and the same transparent estimate inside the pre-filled booking email.
(() => {
  const NIGHTLY_RATE = 129;
  const MIN_NIGHTS = 2;

  const fixes = {
    it:{surroundings:'07 — DINTORNI',booking:'08 — PRENOTA DIRETTAMENTE',contacts:'09 — CONTATTI',faq:'10 — FAQ'},
    en:{surroundings:'07 — SURROUNDINGS',booking:'08 — BOOK DIRECT',contacts:'09 — CONTACTS',faq:'10 — FAQ'},
    es:{surroundings:'07 — ALREDEDORES',booking:'08 — RESERVA DIRECTA',contacts:'09 — CONTACTO',faq:'10 — FAQ'},
    de:{surroundings:'07 — UMGEBUNG',booking:'08 — DIREKT BUCHEN',contacts:'09 — KONTAKT',faq:'10 — FAQ'},
    fr:{surroundings:'07 — ALENTOURS',booking:'08 — RÉSERVER EN DIRECT',contacts:'09 — CONTACT',faq:'10 — FAQ'},
    ru:{surroundings:'07 — ОКРЕСТНОСТИ',booking:'08 — ПРЯМОЕ БРОНИРОВАНИЕ',contacts:'09 — КОНТАКТЫ',faq:'10 — FAQ'},
    zh:{surroundings:'07 — 周边',booking:'08 — 直接预订',contacts:'09 — 联系方式',faq:'10 — 常见问题'}
  };

  const copy = {
    it:{
      rateLabel:'TARIFFA DIRETTA INDICATIVA',perNight:'a notte',min:'Soggiorno minimo: 2 notti',rateNote:'Il totale definitivo viene confermato dopo la verifica della disponibilità.',estimate:'Stima indicativa del soggiorno',nights:'notti',night:'notte',calc:'Calcolo',taxShort:'Tassa di soggiorno ed eventuali supplementi non inclusi.',
      taxQ:'A quanto ammonta la tassa di soggiorno?',taxA:'La tassa di soggiorno del Comune di Montepulciano è di 2 € a persona per notte e si applica per un massimo di 7 pernottamenti consecutivi. Dall’ottava notte non è più dovuta. Sono previste eventuali esenzioni nei casi stabiliti dal regolamento comunale.',
      subject:'Richiesta di soggiorno — Il Nido di Sofì',open:'Si sta aprendo la tua app email. Controlla la richiesta e premi Invia.',place:'Montepulciano · Toscana',request:'RICHIESTA DI SOGGIORNO',guest:'OSPITE',stay:'SOGGIORNO',name:'Nome e cognome',email:'Email',phone:'Telefono',checkin:'Check-in',checkout:'Check-out',duration:'Durata',guests:'Ospiti',message:'MESSAGGIO',priceSection:'STIMA INDICATIVA DEL SOGGIORNO',rateLine:'Tariffa indicativa',total:'TOTALE STIMATO',note1:'Il prezzo definitivo verrà confermato dopo la verifica della disponibilità e delle eventuali condizioni applicabili.',note2:'La stima non include la tassa di soggiorno o eventuali supplementi concordati.',requestNote:'La presente è una richiesta di disponibilità pre-compilata.',confirmNote:'La prenotazione sarà confermata solo dopo la nostra verifica e il successivo pagamento tramite link Stripe personale.',minError:'Il soggiorno minimo è di 2 notti.'
    },
    en:{
      rateLabel:'INDICATIVE DIRECT RATE',perNight:'per night',min:'Minimum stay: 2 nights',rateNote:'The final total is confirmed after we check availability.',estimate:'Indicative stay estimate',nights:'nights',night:'night',calc:'Calculation',taxShort:'Tourist tax and any agreed supplements are not included.',
      taxQ:'How much is the tourist tax?',taxA:'Montepulciano tourist tax is €2 per person per night for a maximum of 7 consecutive nights. From the eighth night onward it is no longer due. Exemptions may apply in the cases set out by the municipal regulations.',
      subject:'Stay request — Il Nido di Sofì',open:'Your email app is opening. Review the request and press Send.',place:'Montepulciano · Tuscany',request:'STAY REQUEST',guest:'GUEST',stay:'STAY',name:'Full name',email:'Email',phone:'Phone',checkin:'Check-in',checkout:'Check-out',duration:'Length',guests:'Guests',message:'MESSAGE',priceSection:'INDICATIVE STAY ESTIMATE',rateLine:'Indicative rate',total:'ESTIMATED TOTAL',note1:'The final price will be confirmed after availability and any applicable conditions have been checked.',note2:'The estimate does not include tourist tax or any agreed supplements.',requestNote:'This is a pre-filled availability request.',confirmNote:'The booking will be confirmed only after our check and the subsequent payment through your personal Stripe link.',minError:'The minimum stay is 2 nights.'
    },
    es:{
      rateLabel:'TARIFA DIRECTA ORIENTATIVA',perNight:'por noche',min:'Estancia mínima: 2 noches',rateNote:'El total definitivo se confirma tras comprobar la disponibilidad.',estimate:'Estimación orientativa de la estancia',nights:'noches',night:'noche',calc:'Cálculo',taxShort:'No incluye la tasa turística ni posibles suplementos acordados.',
      taxQ:'¿A cuánto asciende la tasa turística?',taxA:'La tasa turística del Ayuntamiento de Montepulciano es de 2 € por persona y noche durante un máximo de 7 noches consecutivas. A partir de la octava noche deja de aplicarse. Pueden existir exenciones previstas por la normativa municipal.',
      subject:'Solicitud de estancia — Il Nido di Sofì',open:'Se está abriendo tu aplicación de correo. Revisa la solicitud y pulsa Enviar.',place:'Montepulciano · Toscana',request:'SOLICITUD DE ESTANCIA',guest:'HUÉSPED',stay:'ESTANCIA',name:'Nombre y apellidos',email:'Email',phone:'Teléfono',checkin:'Llegada',checkout:'Salida',duration:'Duración',guests:'Huéspedes',message:'MENSAJE',priceSection:'ESTIMACIÓN ORIENTATIVA DE LA ESTANCIA',rateLine:'Tarifa orientativa',total:'TOTAL ESTIMADO',note1:'El precio definitivo se confirmará tras comprobar la disponibilidad y las condiciones aplicables.',note2:'La estimación no incluye la tasa turística ni posibles suplementos acordados.',requestNote:'Esta es una solicitud de disponibilidad precompletada.',confirmNote:'La reserva se confirmará únicamente después de nuestra comprobación y del posterior pago mediante tu enlace personal de Stripe.',minError:'La estancia mínima es de 2 noches.'
    },
    de:{
      rateLabel:'UNVERBINDLICHER DIREKTPREIS',perNight:'pro Nacht',min:'Mindestaufenthalt: 2 Nächte',rateNote:'Der endgültige Gesamtpreis wird nach Prüfung der Verfügbarkeit bestätigt.',estimate:'Unverbindliche Aufenthaltsschätzung',nights:'Nächte',night:'Nacht',calc:'Berechnung',taxShort:'Kurtaxe und gegebenenfalls vereinbarte Zuschläge sind nicht enthalten.',
      taxQ:'Wie hoch ist die Kurtaxe?',taxA:'Die Kurtaxe der Gemeinde Montepulciano beträgt 2 € pro Person und Nacht für maximal 7 aufeinanderfolgende Nächte. Ab der achten Nacht fällt sie nicht mehr an. In den von der Gemeindeverordnung vorgesehenen Fällen können Befreiungen gelten.',
      subject:'Aufenthaltsanfrage — Il Nido di Sofì',open:'Ihre E-Mail-App wird geöffnet. Bitte prüfen Sie die Anfrage und klicken Sie auf Senden.',place:'Montepulciano · Toskana',request:'AUFENTHALTSANFRAGE',guest:'GAST',stay:'AUFENTHALT',name:'Vor- und Nachname',email:'E-Mail',phone:'Telefon',checkin:'Check-in',checkout:'Check-out',duration:'Dauer',guests:'Gäste',message:'NACHRICHT',priceSection:'UNVERBINDLICHE AUFENTHALTSSCHÄTZUNG',rateLine:'Unverbindlicher Preis',total:'GESCHÄTZTER GESAMTPREIS',note1:'Der endgültige Preis wird nach Prüfung der Verfügbarkeit und der gegebenenfalls geltenden Bedingungen bestätigt.',note2:'Die Schätzung enthält weder Kurtaxe noch gegebenenfalls vereinbarte Zuschläge.',requestNote:'Dies ist eine vorausgefüllte Verfügbarkeitsanfrage.',confirmNote:'Die Buchung wird erst nach unserer Prüfung und der anschließenden Zahlung über Ihren persönlichen Stripe-Link bestätigt.',minError:'Der Mindestaufenthalt beträgt 2 Nächte.'
    },
    fr:{
      rateLabel:'TARIF DIRECT INDICATIF',perNight:'par nuit',min:'Séjour minimum : 2 nuits',rateNote:'Le total définitif est confirmé après vérification des disponibilités.',estimate:'Estimation indicative du séjour',nights:'nuits',night:'nuit',calc:'Calcul',taxShort:'Taxe de séjour et éventuels suppléments convenus non inclus.',
      taxQ:'Quel est le montant de la taxe de séjour ?',taxA:'La taxe de séjour de la commune de Montepulciano est de 2 € par personne et par nuit, pour un maximum de 7 nuits consécutives. Elle n’est plus due à partir de la huitième nuit. Des exonérations peuvent s’appliquer dans les cas prévus par le règlement municipal.',
      subject:'Demande de séjour — Il Nido di Sofì',open:'Votre application e-mail va s’ouvrir. Vérifiez la demande puis appuyez sur Envoyer.',place:'Montepulciano · Toscane',request:'DEMANDE DE SÉJOUR',guest:'VOYAGEUR',stay:'SÉJOUR',name:'Nom et prénom',email:'E-mail',phone:'Téléphone',checkin:'Arrivée',checkout:'Départ',duration:'Durée',guests:'Voyageurs',message:'MESSAGE',priceSection:'ESTIMATION INDICATIVE DU SÉJOUR',rateLine:'Tarif indicatif',total:'TOTAL ESTIMÉ',note1:'Le prix définitif sera confirmé après vérification des disponibilités et des éventuelles conditions applicables.',note2:'L’estimation n’inclut pas la taxe de séjour ni les éventuels suppléments convenus.',requestNote:'Il s’agit d’une demande de disponibilité préremplie.',confirmNote:'La réservation ne sera confirmée qu’après notre vérification et le paiement ultérieur via votre lien Stripe personnel.',minError:'Le séjour minimum est de 2 nuits.'
    },
    ru:{
      rateLabel:'ОРИЕНТИРОВОЧНЫЙ ПРЯМОЙ ТАРИФ',perNight:'за ночь',min:'Минимальный срок: 2 ночи',rateNote:'Итоговая сумма подтверждается после проверки доступности.',estimate:'Ориентировочная стоимость проживания',nights:'ночей',night:'ночь',calc:'Расчёт',taxShort:'Туристический налог и согласованные доплаты не включены.',
      taxQ:'Каков размер туристического налога?',taxA:'Туристический налог муниципалитета Монтепульчано составляет 2 € с человека за ночь максимум за 7 ночей подряд. Начиная с восьмой ночи налог не взимается. В случаях, предусмотренных муниципальными правилами, возможны освобождения.',
      subject:'Запрос на проживание — Il Nido di Sofì',open:'Откроется ваше почтовое приложение. Проверьте запрос и нажмите «Отправить».',place:'Монтепульчано · Тоскана',request:'ЗАПРОС НА ПРОЖИВАНИЕ',guest:'ГОСТЬ',stay:'ПРОЖИВАНИЕ',name:'Имя и фамилия',email:'Email',phone:'Телефон',checkin:'Заезд',checkout:'Выезд',duration:'Продолжительность',guests:'Гости',message:'СООБЩЕНИЕ',priceSection:'ОРИЕНТИРОВОЧНАЯ СТОИМОСТЬ ПРОЖИВАНИЯ',rateLine:'Ориентировочный тариф',total:'ОРИЕНТИРОВОЧНАЯ СУММА',note1:'Окончательная цена будет подтверждена после проверки доступности и применимых условий.',note2:'В ориентировочную сумму не входят туристический налог и согласованные доплаты.',requestNote:'Это предварительно заполненный запрос о доступности.',confirmNote:'Бронирование будет подтверждено только после нашей проверки и последующей оплаты по вашей персональной ссылке Stripe.',minError:'Минимальный срок проживания — 2 ночи.'
    },
    zh:{
      rateLabel:'直订参考价',perNight:'每晚',min:'至少入住 2 晚',rateNote:'最终总价将在确认房态后确定。',estimate:'住宿参考估价',nights:'晚',night:'晚',calc:'计算',taxShort:'不含旅游税及经双方确认的其他附加费用。',
      taxQ:'旅游税是多少？',taxA:'蒙特普尔恰诺市旅游税为每人每晚 2 欧元，连续住宿最多计收 7 晚；从第 8 晚起不再收取。市政规定所列情形可能适用免税。',
      subject:'住宿申请 — Il Nido di Sofì',open:'即将打开你的邮件应用。请检查申请内容，然后点击发送。',place:'蒙特普尔恰诺 · 托斯卡纳',request:'住宿申请',guest:'住客',stay:'入住信息',name:'姓名',email:'电子邮箱',phone:'电话',checkin:'入住',checkout:'退房',duration:'住宿时长',guests:'人数',message:'留言',priceSection:'住宿参考估价',rateLine:'参考价',total:'预计总价',note1:'最终价格将在确认房态及适用条件后确定。',note2:'参考估价不含旅游税及经双方确认的其他附加费用。',requestNote:'这是一封已预填的房态咨询邮件。',confirmNote:'预订仅在我们确认房态并通过专属 Stripe 链接完成后续付款后才正式确认。',minError:'至少入住 2 晚。'
    }
  };

  // Styling is kept here so the new pricing UI appears consistently without
  // disturbing the established homepage CSS cascade.
  const style = document.createElement('style');
  style.id = 'direct-rate-styles';
  style.textContent = `
    .direct-rate-card{margin:34px 0 8px;border:1px solid var(--line);background:var(--cream);display:grid;grid-template-columns:minmax(210px,.8fr) 1.2fr;align-items:stretch}
    .direct-rate-price{padding:24px 28px;border-right:1px solid var(--line);display:flex;flex-direction:column;justify-content:center}
    .direct-rate-label{font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:#6b6b64;margin-bottom:8px}
    .direct-rate-amount{display:flex;align-items:baseline;gap:8px;white-space:nowrap}
    .direct-rate-amount strong{font:500 40px/1 var(--serif);letter-spacing:-.025em;color:var(--brand)}
    .direct-rate-amount span{font-size:12px;color:#5e5f58}
    .direct-rate-info{padding:22px 28px;display:flex;flex-direction:column;justify-content:center;gap:3px}
    .direct-rate-info strong{font:500 18px/1.15 var(--serif)}
    .direct-rate-info span{font-size:11px;color:#70716b;line-height:1.5}
    #bookingSummary.price-summary{display:grid;grid-template-columns:1fr auto;gap:8px 28px;align-items:end;margin:30px 0 8px;padding:22px 24px;border:1px solid rgba(110,50,24,.28);background:rgba(245,241,233,.55);text-align:left}
    #bookingSummary.price-summary .estimate-label{grid-column:1/-1;font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:#77776f}
    #bookingSummary.price-summary .estimate-calc{font:500 18px/1.25 var(--serif);color:var(--ink)}
    #bookingSummary.price-summary .estimate-total{font:500 38px/1 var(--serif);letter-spacing:-.025em;color:var(--brand);white-space:nowrap}
    #bookingSummary.price-summary .estimate-note{grid-column:1/-1;border-top:1px solid var(--line);margin-top:8px;padding-top:12px;font-size:10px;color:#77776f;line-height:1.55}
    .faq-tax-note{font-size:inherit}
    @media(max-width:700px){
      .direct-rate-card{grid-template-columns:1fr;margin-top:28px}
      .direct-rate-price{border-right:0;border-bottom:1px solid var(--line);padding:21px 22px}
      .direct-rate-info{padding:18px 22px}
      .direct-rate-amount strong{font-size:36px}
      #bookingSummary.price-summary{grid-template-columns:1fr;padding:19px 20px;gap:7px;margin-top:24px}
      #bookingSummary.price-summary .estimate-label,#bookingSummary.price-summary .estimate-note{grid-column:1}
      #bookingSummary.price-summary .estimate-total{font-size:36px;margin-top:2px}
    }
  `;
  document.head.appendChild(style);

  Object.entries(fixes).forEach(([lang,v]) => {
    if (typeof siteV8Translations !== 'undefined' && siteV8Translations[lang]) {
      Object.assign(siteV8Translations[lang], {
        'surroundings.kicker': v.surroundings,
        'booking.kicker': v.booking,
        'contacts.kicker': v.contacts,
        'faq.kicker': v.faq
      });
    }
    if (typeof translations !== 'undefined' && translations[lang]) {
      Object.assign(translations[lang], {
        'surroundings.kicker': v.surroundings,
        'booking.kicker': v.booking,
        'faq.kicker': v.faq
      });
    }
  });

  const currentLang = () => {
    const selected = document.getElementById('languageSelect')?.value || localStorage.getItem('nidoLanguage') || 'it';
    return copy[selected] ? selected : 'it';
  };
  const t = () => copy[currentLang()] || copy.it;
  const euro = value => `${Math.round(value)} €`;
  const nightsBetween = (start,end) => {
    if(!start || !end) return 0;
    const a = new Date(`${start}T12:00:00`);
    const b = new Date(`${end}T12:00:00`);
    return Math.round((b-a)/86400000);
  };

  function applyNumbering(){
    const lang = currentLang();
    const v = fixes[lang] || fixes.it;
    const host = document.querySelector('.host .section-kicker');
    const contacts = document.querySelector('.contacts .section-kicker');
    if (host) host.textContent = '06 — ROSARIO & SOFIA';
    if (contacts) contacts.textContent = v.contacts;
    if (typeof setLanguage === 'function') setLanguage(lang);
  }

  function ensureRateCard(){
    const card = document.querySelector('.booking-card');
    if(!card || document.getElementById('directRateCard')) return;
    const flow = card.querySelector('.booking-flow');
    const rate = document.createElement('div');
    rate.id = 'directRateCard';
    rate.className = 'direct-rate-card';
    rate.innerHTML = `
      <div class="direct-rate-price">
        <span class="direct-rate-label" data-rate="label"></span>
        <div class="direct-rate-amount"><strong>${euro(NIGHTLY_RATE)}</strong><span data-rate="perNight"></span></div>
      </div>
      <div class="direct-rate-info"><strong data-rate="min"></strong><span data-rate="note"></span></div>`;
    if(flow) card.insertBefore(rate,flow); else card.appendChild(rate);
  }

  function ensureTaxFaq(){
    const list = document.querySelector('.faq-list');
    if(!list || list.querySelector('[data-tax-faq]')) return;
    const item = document.createElement('details');
    item.setAttribute('data-tax-faq','');
    item.innerHTML = '<summary data-tax="q"></summary><p class="faq-tax-note" data-tax="a"></p>';
    const petItem = [...list.querySelectorAll('details')].find(d => d.querySelector('[data-i18n="faq.pets.q"]'));
    if(petItem) petItem.insertAdjacentElement('afterend',item); else list.appendChild(item);
  }

  function updateRateCopy(){
    const c = t();
    const rate = document.getElementById('directRateCard');
    if(rate){
      rate.querySelector('[data-rate="label"]').textContent = c.rateLabel;
      rate.querySelector('[data-rate="perNight"]').textContent = c.perNight;
      rate.querySelector('[data-rate="min"]').textContent = c.min;
      rate.querySelector('[data-rate="note"]').textContent = c.rateNote;
    }
    const faq = document.querySelector('[data-tax-faq]');
    if(faq){
      faq.querySelector('[data-tax="q"]').textContent = c.taxQ;
      faq.querySelector('[data-tax="a"]').textContent = c.taxA;
    }
  }

  function updateEstimate(){
    const form = document.getElementById('bookingForm');
    const summary = document.getElementById('bookingSummary');
    if(!form || !summary) return;
    const start = form.elements['Check-in']?.value || '';
    const end = form.elements['Check-out']?.value || '';
    const n = nightsBetween(start,end);
    if(n < MIN_NIGHTS){
      summary.hidden = true;
      summary.classList.remove('price-summary');
      summary.innerHTML = '';
      return;
    }
    const c = t();
    const word = n===1 ? c.night : c.nights;
    const total = n*NIGHTLY_RATE;
    summary.classList.add('price-summary');
    summary.innerHTML = `
      <div class="estimate-label">${c.estimate}</div>
      <div class="estimate-calc">${n} ${word} × ${euro(NIGHTLY_RATE)} / ${c.perNight.replace(/^a |^per |^por |^pro |^par |^за |^每/, '')}</div>
      <div class="estimate-total">${euro(total)}</div>
      <div class="estimate-note">${c.taxShort}</div>`;
    summary.hidden = false;
  }

  function renderPricing(){
    ensureRateCard();
    ensureTaxFaq();
    updateRateCopy();
    // Run after the original booking summary listener so our richer estimate wins.
    setTimeout(updateEstimate,0);
  }

  function formatDate(value,lang){
    if(!value) return '—';
    const localeMap={it:'it-IT',en:'en-GB',es:'es-ES',de:'de-DE',fr:'fr-FR',ru:'ru-RU',zh:'zh-CN'};
    return new Intl.DateTimeFormat(localeMap[lang]||'it-IT',{day:'numeric',month:'long',year:'numeric'}).format(new Date(`${value}T12:00:00`));
  }

  function field(form,name){
    const value = form.elements[name]?.value;
    return typeof value === 'string' ? value.trim() : (value || '');
  }

  // Capture at window level so this refined email runs before the legacy form listener.
  window.addEventListener('submit',(event)=>{
    const form = event.target;
    if(!(form instanceof HTMLFormElement) || form.id !== 'bookingForm') return;
    event.preventDefault();
    event.stopImmediatePropagation();
    if(!form.reportValidity()) return;

    const lang = currentLang();
    const c = t();
    const start = field(form,'Check-in');
    const end = field(form,'Check-out');
    const n = nightsBetween(start,end);
    const status = document.getElementById('bookingStatus');
    if(n < MIN_NIGHTS){
      if(status){status.hidden=false;status.className='booking-status is-error';status.textContent=c.minError;}
      form.elements['Check-out']?.focus();
      return;
    }

    const word = n===1 ? c.night : c.nights;
    const line = '────────────────────────';
    const body = [
      'IL NIDO DI SOFÌ',c.place,'',line,c.request,line,'',
      c.guest,
      `${c.name}: ${field(form,'Nome e cognome')}`,
      `${c.email}: ${field(form,'email')}`,
      `${c.phone}: ${field(form,'Telefono / WhatsApp')}`,'',
      c.stay,
      `${c.checkin}: ${formatDate(start,lang)}`,
      `${c.checkout}: ${formatDate(end,lang)}`,
      `${c.duration}: ${n} ${word}`,
      `${c.guests}: ${field(form,'Ospiti')}`,'',
      c.message,
      field(form,'Messaggio') || '—','',
      line,
      c.requestNote,
      c.confirmNote,'',
      'IL NIDO DI SOFÌ','Via del Poliziano 12 · Montepulciano'
    ].join('\n');

    if(status){status.hidden=false;status.className='booking-status is-success';status.textContent=c.open;}
    window.location.href = `mailto:ilnidodisofi@gmail.com?subject=${encodeURIComponent(c.subject)}&body=${encodeURIComponent(body)}`;
  },true);

  document.addEventListener('DOMContentLoaded',()=>{
    applyNumbering();
    renderPricing();
    const form = document.getElementById('bookingForm');
    form?.elements['Check-in']?.addEventListener('change',()=>setTimeout(updateEstimate,0));
    form?.elements['Check-out']?.addEventListener('change',()=>setTimeout(updateEstimate,0));
    document.getElementById('languageSelect')?.addEventListener('change',()=>setTimeout(()=>{applyNumbering();renderPricing();},0));
  });
})();
