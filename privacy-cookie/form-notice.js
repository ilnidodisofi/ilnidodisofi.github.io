(() => {
  const copy = {
    it: ["I dati servono a rispondere alla richiesta di soggiorno. Telefono e messaggio sono facoltativi. Il pulsante prepara un’email: la invii tu dalla tua app di posta.", "Leggi l’informativa privacy e cookie", "facoltativo"],
    en: ["We use your details to answer your stay request. Phone and message are optional. The button prepares an email for you to send from your own email app.", "Read the privacy and cookie notice", "optional"],
    fr: ["Vos données servent à répondre à votre demande de séjour. Téléphone et message sont facultatifs. Le bouton prépare un e-mail que vous envoyez depuis votre messagerie.", "Lire la notice de confidentialité et cookies", "facultatif"],
    es: ["Usamos tus datos para responder a tu solicitud de estancia. Teléfono y mensaje son opcionales. El botón prepara un correo que envías desde tu propia aplicación.", "Leer el aviso de privacidad y cookies", "opcional"],
    de: ["Wir verwenden Ihre Angaben zur Beantwortung Ihrer Aufenthaltsanfrage. Telefon und Nachricht sind freiwillig. Die Schaltfläche bereitet eine E-Mail vor, die Sie in Ihrer eigenen E-Mail-App senden.", "Datenschutz- und Cookie-Hinweise lesen", "freiwillig"],
    ru: ["Данные используются для ответа на запрос о проживании. Телефон и сообщение необязательны. Кнопка создаёт письмо, которое вы отправляете из своего почтового приложения.", "Информация о конфиденциальности и cookie", "необязательно"],
    zh: ["我们使用您的信息回复住宿咨询。电话和留言为选填项。按钮会在您的邮件应用中准备邮件，由您自行发送。", "阅读隐私与 Cookie 声明", "选填"]
  };
  function update() {
    const lang = document.documentElement.lang || 'it';
    const [text, label, optional] = copy[lang] || copy.it;
    const notice = document.getElementById('bookingPrivacyNote');
    if (!notice) return;
    const link = document.createElement('a');
    link.href = '/privacy-cookie/'; link.textContent = label;
    notice.replaceChildren(document.createTextNode(text + ' '), link, document.createTextNode('.'));
    const phone = document.querySelector('#bookingForm [name="Telefono / WhatsApp"]');
    if (phone) {
      phone.required = false;
      phone.placeholder = optional;
      phone.setAttribute('aria-describedby', 'bookingPrivacyNote');
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    update();
    new MutationObserver(update).observe(document.documentElement, {attributes:true,attributeFilter:['lang']});
  });
})();
