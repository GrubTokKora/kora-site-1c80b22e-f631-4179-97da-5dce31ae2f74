/* Dre's Island Food Services — site behaviour.
   Header state, mobile menu, scroll reveal, menu tabs, mobile action bar, 404 anchors.
   The quote form submit lives inline in index.html (Kora forms API). */
(function () {
  'use strict';
  var doc = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  doc.classList.add('js');

  /* Header: add a class once the page scrolls, for the compact/elevated state. */
  var header = document.querySelector('[data-header]');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 24); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* Mobile menu: full-screen panel, Esc / link click closes, focus returns to the toggle. */
  var toggle = document.querySelector('[data-menu-toggle]');
  var panel = document.getElementById('mobile-menu');
  if (toggle && panel) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (open && header) panel.style.top = Math.max(0, header.getBoundingClientRect().bottom) + 'px';
      panel.hidden = !open;
      document.body.classList.toggle('menu-open', open);
      if (open) { var first = panel.querySelector('a'); if (first) first.focus(); }
    };
    toggle.addEventListener('click', function () { setOpen(toggle.getAttribute('aria-expanded') !== 'true'); });
    panel.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setOpen(false); toggle.focus(); }
    });
    window.matchMedia('(min-width: 1024px)').addEventListener('change', function (m) { if (m.matches) setOpen(false); });
  }

  /* Scroll reveal: content is visible by default; only hidden once JS + motion are allowed. */
  var revealEls = document.querySelectorAll('[data-reveal]');
  if (!reduceMotion && 'IntersectionObserver' in window && revealEls.length) {
    doc.classList.add('can-reveal');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-in'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* Tabs (WAI-ARIA tabs pattern with arrow-key support). */
  document.querySelectorAll('[role="tablist"]').forEach(function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
    var select = function (tab) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
    };
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(tab); });
      tab.addEventListener('keydown', function (e) {
        var next = null;
        if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === 'Home') next = tabs[0];
        if (e.key === 'End') next = tabs[tabs.length - 1];
        if (next) { e.preventDefault(); select(next); next.focus(); }
      });
    });
  });

  /* Mobile action bar: step aside while the quote form or footer is on screen. */
  var bar = document.querySelector('[data-action-bar]');
  if (bar && 'IntersectionObserver' in window) {
    var seen = new Set();
    var watch = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) seen.add(e.target); else seen.delete(e.target); });
      bar.classList.toggle('is-hidden', seen.size > 0);
      bar.inert = seen.size > 0;
    });
    document.querySelectorAll('#quote, footer').forEach(function (el) { watch.observe(el); });
  }

  /* Shell anchors (#menu, #quote…) live in the shared header/footer; off the homepage, point them home. */
  if (document.body.getAttribute('data-page') !== 'home') {
    document.querySelectorAll('[data-header] a[href^="#"], footer a[href^="#"], [data-action-bar] a[href^="#"]').forEach(function (el) {
      el.setAttribute('href', '/' + el.getAttribute('href'));
    });
  }

  /* Footer year. */
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
