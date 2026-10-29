/* Additive enhancement: content remains visible if animations are unavailable. */
(() => {
  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let enabled = false;
  let observer;
  let frame = 0;
  const animations = new Set();
  const progress = document.createElement('div');
  progress.className = 'nido-progress';
  progress.setAttribute('aria-hidden', 'true');

  function animate(element, distance = 24, delay = 0, duration = 850) {
    if (!element || !element.animate) return;
    const animation = element.animate([
      { opacity: 0, transform: `translateY(${distance}px)` },
      { opacity: 1, transform: 'translateY(0)' }
    ], { duration, delay, easing: 'cubic-bezier(.2,.65,.3,1)', fill: 'backwards' });
    animations.add(animation);
    animation.finished.then(() => animations.delete(animation), () => animations.delete(animation));
  }
  function updateProgress() {
    frame = 0;
    const range = root.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0})`;
  }
  function onScroll() { if (!frame) frame = requestAnimationFrame(updateProgress); }
  function stop() {
    root.classList.remove('nido-motion');
    observer?.disconnect();
    animations.forEach(animation => animation.cancel());
    animations.clear();
    cancelAnimationFrame(frame);
    frame = 0;
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
  }
  function start() {
    stop();
    if (!enabled || reduced.matches) return;
    root.classList.add('nido-motion');
    document.querySelectorAll('.hero-content > *').forEach((element, index) => {
      if (element.getBoundingClientRect().bottom > 0) animate(element, 22, index * 120, 1000);
    });
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => {
        let stagger = 0;
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          animate(entry.target, entry.target.matches('.gallery-photo') ? 16 : 28, (stagger++ % 4) * 75);
          observer.unobserve(entry.target);
        });
      }, { threshold: .08, rootMargin: '0px 0px -24px 0px' });
      // Observe individual blocks only; never animate a section and its descendants together.
      document.querySelectorAll('.section-kicker, .section h2, .intro-copy, .story-grid > div > .lead, .amenities, .gallery-photo, .stay-value-grid > article, .stay-value-history, .place-grid > article, .events-grid > article, .food-grid > article, .host-copy > p, .host-image, .destinations > div, .booking-flow, #bookingForm, .contact-list, .guest-voice-card, .faq-list > details').forEach(element => {
        if (element.getBoundingClientRect().top >= window.innerHeight * .85) observer.observe(element);
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateProgress();
  }
  window.nidoMotion = {
    setEnabled(value) { enabled = Boolean(value); start(); },
    get enabled() { return enabled; }
  };
  reduced.addEventListener('change', start);
  document.addEventListener('DOMContentLoaded', () => {
    document.body.append(progress);
    window.nidoMotion.setEnabled(true);
  }, { once: true });
})();
