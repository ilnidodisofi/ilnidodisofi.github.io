// Small homepage layout/content fixes loaded after editorial.js.
(() => {
  if (typeof translations !== 'undefined') {
    const labels = {
      it: 'Bruscello · tradizione popolare',
      en: 'Bruscello · folk tradition',
      es: 'Bruscello · tradición popular',
      de: 'Bruscello · Volkstradition',
      fr: 'Bruscello · tradition populaire',
      ru: 'Bruscello · народная традиция',
      zh: 'Bruscello · 民间传统'
    };
    Object.entries(labels).forEach(([lang, value]) => {
      if (translations[lang]) translations[lang]['events.ruscello.title'] = value;
    });
  }

  const grid = document.querySelector('.events-grid');
  if (grid) {
    const bravio = grid.querySelector('[data-i18n="events.bravio.title"]')?.closest('article');
    if (bravio) grid.insertBefore(bravio, grid.firstElementChild);
    [...grid.children].forEach((card, i) => {
      const n = card.querySelector(':scope > span');
      if (n) n.textContent = String(i + 1).padStart(2, '0');
    });
  }
})();
