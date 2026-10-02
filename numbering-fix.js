// Keep homepage section numbering consistent after all translation layers load.
(() => {
  const fixes = {
    it:{surroundings:'07 — DINTORNI',booking:'08 — PRENOTA DIRETTAMENTE',contacts:'09 — CONTATTI',faq:'10 — FAQ'},
    en:{surroundings:'07 — SURROUNDINGS',booking:'08 — BOOK DIRECT',contacts:'09 — CONTACTS',faq:'10 — FAQ'},
    es:{surroundings:'07 — ALREDEDORES',booking:'08 — RESERVA DIRECTA',contacts:'09 — CONTACTO',faq:'10 — FAQ'},
    de:{surroundings:'07 — UMGEBUNG',booking:'08 — DIREKT BUCHEN',contacts:'09 — KONTAKT',faq:'10 — FAQ'},
    fr:{surroundings:'07 — ALENTOURS',booking:'08 — RÉSERVER EN DIRECT',contacts:'09 — CONTACT',faq:'10 — FAQ'},
    ru:{surroundings:'07 — ОКРЕСТНОСТИ',booking:'08 — ПРЯМОЕ БРОНИРОВАНИЕ',contacts:'09 — КОНТАКТЫ',faq:'10 — FAQ'},
    zh:{surroundings:'07 — 周边',booking:'08 — 直接预订',contacts:'09 — 联系方式',faq:'10 — 常见问题'}
  };

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

  function applyNumbering(){
    const lang = document.getElementById('languageSelect')?.value || 'it';
    const v = fixes[lang] || fixes.it;
    const host = document.querySelector('.host .section-kicker');
    const contacts = document.querySelector('.contacts .section-kicker');
    if (host) host.textContent = '06 — ROSARIO & SOFIA';
    if (contacts) contacts.textContent = v.contacts;
    if (typeof setLanguage === 'function') setLanguage(lang);
  }

  document.addEventListener('DOMContentLoaded', applyNumbering);
  document.getElementById('languageSelect')?.addEventListener('change', () => setTimeout(applyNumbering, 0));
})();
