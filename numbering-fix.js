// Booking terms enhancement. The previous booking/pricing script is preserved byte-for-byte
// in numbering-fix-core.js and is executed synchronously below.
(() => {
  const TERMS_URL = 'https://ilnidodisofi.github.io/condizioni-prenotazione/';

  const copy = {
    it:{place:'Montepulciano · Toscana',request:'RICHIESTA DI SOGGIORNO',guest:'OSPITE',stay:'SOGGIORNO',name:'Nome e cognome',email:'Email',phone:'Telefono',checkin:'Check-in',checkout:'Check-out',duration:'Durata',guests:'Ospiti',message:'MESSAGGIO',nights:'notti',night:'notte',subject:'Richiesta di soggiorno — Il Nido di Sofì',open:'Si sta aprendo la tua app email. Controlla la richiesta e premi Invia.',minError:'Il soggiorno minimo è di 2 notti.',requestNote:'La presente è una richiesta di disponibilità pre-compilata.',confirmNote:'La prenotazione sarà confermata solo dopo la nostra verifica e il successivo pagamento tramite link Stripe personale.',termsSite:'Prima di inviare la richiesta, consulta le',termsLink:'condizioni della prenotazione diretta',termsEmail:'La richiesta è soggetta alle condizioni della prenotazione diretta disponibili qui:'},
    en:{place:'Montepulciano · Tuscany',request:'STAY REQUEST',guest:'GUEST',stay:'STAY',name:'Full name',email:'Email',phone:'Phone',checkin:'Check-in',checkout:'Check-out',duration:'Length',guests:'Guests',message:'MESSAGE',nights:'nights',night:'night',subject:'Stay request — Il Nido di Sofì',open:'Your email app is opening. Review the request and press Send.',minError:'The minimum stay is 2 nights.',requestNote:'This is a pre-filled availability request.',confirmNote:'The booking will be confirmed only after our check and the subsequent payment through your personal Stripe link.',termsSite:'Before sending your request, please read the',termsLink:'direct booking terms',termsEmail:'This request is subject to the direct booking terms available here:'},
    es:{place:'Montepulciano · Toscana',request:'SOLICITUD DE ESTANCIA',guest:'HUÉSPED',stay:'ESTANCIA',name:'Nombre y apellidos',email:'Email',phone:'Teléfono',checkin:'Llegada',checkout:'Salida',duration:'Duración',guests:'Huéspedes',message:'MENSAJE',nights:'noches',night:'noche',subject:'Solicitud de estancia — Il Nido di Sofì',open:'Se está abriendo tu aplicación de correo. Revisa la solicitud y pulsa Enviar.',minError:'La estancia mínima es de 2 noches.',requestNote:'Esta es una solicitud de disponibilidad precompletada.',confirmNote:'La reserva se confirmará únicamente después de nuestra comprobación y del posterior pago mediante tu enlace personal de Stripe.',termsSite:'Antes de enviar la solicitud, consulta las',termsLink:'condiciones de reserva directa',termsEmail:'La solicitud está sujeta a las condiciones de reserva directa disponibles aquí:'},
    de:{place:'Montepulciano · Toskana',request:'AUFENTHALTSANFRAGE',guest:'GAST',stay:'AUFENTHALT',name:'Vor- und Nachname',email:'E-Mail',phone:'Telefon',checkin:'Check-in',checkout:'Check-out',duration:'Dauer',guests:'Gäste',message:'NACHRICHT',nights:'Nächte',night:'Nacht',subject:'Aufenthaltsanfrage — Il Nido di Sofì',open:'Ihre E-Mail-App wird geöffnet. Bitte prüfen Sie die Anfrage und klicken Sie auf Senden.',minError:'Der Mindestaufenthalt beträgt 2 Nächte.',requestNote:'Dies ist eine vorausgefüllte Verfügbarkeitsanfrage.',confirmNote:'Die Buchung wird erst nach unserer Prüfung und der anschließenden Zahlung über Ihren persönlichen Stripe-Link bestätigt.',termsSite:'Bitte lesen Sie vor dem Absenden die',termsLink:'Bedingungen für Direktbuchungen',termsEmail:'Diese Anfrage unterliegt den Bedingungen für Direktbuchungen:'},
    fr:{place:'Montepulciano · Toscane',request:'DEMANDE DE SÉJOUR',guest:'VOYAGEUR',stay:'SÉJOUR',name:'Nom et prénom',email:'E-mail',phone:'Téléphone',checkin:'Arrivée',checkout:'Départ',duration:'Durée',guests:'Voyageurs',message:'MESSAGE',nights:'nuits',night:'nuit',subject:'Demande de séjour — Il Nido di Sofì',open:'Votre application e-mail va s’ouvrir. Vérifiez la demande puis appuyez sur Envoyer.',minError:'Le séjour minimum est de 2 nuits.',requestNote:'Il s’agit d’une demande de disponibilité préremplie.',confirmNote:'La réservation ne sera confirmée qu’après notre vérification et le paiement ultérieur via votre lien Stripe personnel.',termsSite:'Avant d’envoyer votre demande, consultez les',termsLink:'conditions de réservation directe',termsEmail:'Cette demande est soumise aux conditions de réservation directe disponibles ici :'},
    ru:{place:'Монтепульчано · Тоскана',request:'ЗАПРОС НА ПРОЖИВАНИЕ',guest:'ГОСТЬ',stay:'ПРОЖИВАНИЕ',name:'Имя и фамилия',email:'Email',phone:'Телефон',checkin:'Заезд',checkout:'Выезд',duration:'Продолжительность',guests:'Гости',message:'СООБЩЕНИЕ',nights:'ночей',night:'ночь',subject:'Запрос на проживание — Il Nido di Sofì',open:'Откроется ваше почтовое приложение. Проверьте запрос и нажмите «Отправить».',minError:'Минимальный срок проживания — 2 ночи.',requestNote:'Это предварительно заполненный запрос о доступности.',confirmNote:'Бронирование будет подтверждено только после нашей проверки и последующей оплаты по вашей персональной ссылке Stripe.',termsSite:'Перед отправкой запроса ознакомьтесь с',termsLink:'условиями прямого бронирования',termsEmail:'Запрос регулируется условиями прямого бронирования:'},
    zh:{place:'蒙特普尔恰诺 · 托斯卡纳',request:'住宿申请',guest:'住客',stay:'入住信息',name:'姓名',email:'电子邮箱',phone:'电话',checkin:'入住',checkout:'退房',duration:'住宿时长',guests:'人数',message:'留言',nights:'晚',night:'晚',subject:'住宿申请 — Il Nido di Sofì',open:'即将打开你的邮件应用。请检查申请内容，然后点击发送。',minError:'至少入住 2 晚。',requestNote:'这是一封已预填的房态咨询邮件。',confirmNote:'预订仅在我们确认房态并通过专属 Stripe 链接完成后续付款后才正式确认。',termsSite:'发送申请前，请阅读',termsLink:'直接预订条款',termsEmail:'此申请受以下直接预订条款约束：'}
  };

  const currentLang = () => {
    const selected = document.getElementById('languageSelect')?.value || localStorage.getItem('nidoLanguage') || 'it';
    return copy[selected] ? selected : 'it';
  };
  const t = () => copy[currentLang()] || copy.it;
  const nightsBetween = (start,end) => {
    if(!start || !end) return 0;
    const a = new Date(`${start}T12:00:00`);
    const b = new Date(`${end}T12:00:00`);
    return Math.round((b-a)/86400000);
  };
  const field = (form,name) => {
    const value = form.elements[name]?.value;
    return typeof value === 'string' ? value.trim() : (value || '');
  };
  const formatDate = (value,lang) => {
    if(!value) return '—';
    const localeMap={it:'it-IT',en:'en-GB',es:'es-ES',de:'de-DE',fr:'fr-FR',ru:'ru-RU',zh:'zh-CN'};
    return new Intl.DateTimeFormat(localeMap[lang]||'it-IT',{day:'numeric',month:'long',year:'numeric'}).format(new Date(`${value}T12:00:00`));
  };

  function ensureTermsNote(){
    const form = document.getElementById('bookingForm');
    if(!form) return;
    let note = document.getElementById('bookingTermsNote');
    if(!note){
      note = document.createElement('p');
      note.id = 'bookingTermsNote';
      note.style.cssText = 'margin:16px 0 0;font-size:10px;line-height:1.55;color:#77776f;';
      form.appendChild(note);
    }
    const c = t();
    note.innerHTML = `${c.termsSite} <a href="/condizioni-prenotazione/" style="color:inherit;text-decoration:underline;text-underline-offset:2px">${c.termsLink}</a>.`;
  }

  // Register before the preserved booking script so this refined email wins.
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
    if(n < 2){
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
      c.termsEmail,
      TERMS_URL,'',
      'IL NIDO DI SOFÌ','Via del Poliziano 12 · Montepulciano'
    ].join('\n');

    if(status){status.hidden=false;status.className='booking-status is-success';status.textContent=c.open;}
    window.location.href = `mailto:ilnidodisofi@gmail.com?subject=${encodeURIComponent(c.subject)}&body=${encodeURIComponent(body)}`;
  },true);

  document.addEventListener('DOMContentLoaded',()=>{
    ensureTermsNote();
    document.getElementById('languageSelect')?.addEventListener('change',()=>setTimeout(ensureTermsNote,0));
  });

  // Execute the previously published script unchanged, preserving pricing, FAQ and numbering.
  try {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','/numbering-fix-core.js?v=1',false);
    xhr.send(null);
    if((xhr.status >= 200 && xhr.status < 300) || xhr.status === 0){
      (0,eval)(`${xhr.responseText}\n//# sourceURL=numbering-fix-core.js`);
    }
  } catch (err) {
    console.error('Unable to load preserved booking script',err);
  }
})();
