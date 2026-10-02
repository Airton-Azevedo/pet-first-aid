/* ============================================================
   PetSocorro — Interações e internacionalização (PT / EN / ES)
   ============================================================ */
(function () {
  'use strict';

  var I18N = window.I18N || {};
  var SUPPORTED = ['pt', 'en', 'es'];
  var current = 'pt';

  /* ---------- Helpers ---------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  // Resolve "a.b.c" dentro do objeto de traduções
  function get(obj, path) {
    return path.split('.').reduce(function (acc, key) {
      return (acc && acc[key] !== undefined) ? acc[key] : undefined;
    }, obj);
  }

  function normalize(str) {
    return (str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  /* ---------- Renderizadores de seções dinâmicas ---------- */
  function renderStats(t) {
    var el = $('#heroStats');
    if (!el) return;
    el.innerHTML = t.hero.stats.map(function (s) {
      return '<div class="stat"><strong>' + s.n + '</strong><span>' + s.l + '</span></div>';
    }).join('');
  }

  function renderEmergencyCards(t) {
    var grid = $('#emergencyGrid');
    if (!grid) return;
    grid.innerHTML = t.emergencies.cards.map(function (c) {
      var tag = c.critical ? t.emergencies.tagCritical : t.emergencies.tagUrgent;
      var cls = c.critical ? 'critical' : '';
      var tagCls = c.critical ? '' : 'ok';
      return '<article class="em-card ' + cls + ' reveal" data-keywords="' + c.keywords + '">' +
        '<div class="em-ico">' + c.icon + '</div>' +
        '<h3>' + c.title + '</h3>' +
        '<p>' + c.desc + '</p>' +
        '<span class="tag ' + tagCls + '">' + tag + '</span>' +
        '</article>';
    }).join('');
  }

  function renderGuides(t) {
    var wrap = $('#guides');
    if (!wrap) return;
    wrap.innerHTML = t.guides.items.map(function (g) {
      var steps = g.steps.map(function (s) { return '<li>' + s + '</li>'; }).join('');
      return '<div class="guide reveal">' +
        '<button class="guide-head">' +
        '<span class="g-ico">' + g.icon + '</span> ' + g.title +
        '<span class="chev">⌄</span></button>' +
        '<div class="guide-body"><div class="guide-body-inner">' +
        '<ol>' + steps + '</ol>' +
        '<div class="warn-inline">' + g.warning + '</div>' +
        '</div></div></div>';
    }).join('');
  }

  function renderToxics(t) {
    var grid = $('#toxicGrid');
    if (!grid) return;
    grid.innerHTML = t.toxics.items.map(function (x) {
      return '<div class="toxic-item reveal"><span class="t-ico">' + x.icon + '</span>' +
        '<div><strong>' + x.title + '</strong><small>' + x.desc + '</small></div></div>';
    }).join('');
  }

  function renderKit(t) {
    var list = $('#kitList');
    if (!list) return;
    list.innerHTML = t.kit.items.map(function (item) {
      return '<li><span class="check">✓</span> ' + item + '</li>';
    }).join('');
  }

  function renderContacts(t) {
    var grid = $('#contactsGrid');
    if (!grid) return;
    grid.innerHTML = t.contacts.cards.map(function (c) {
      return '<div class="contact-card reveal"><div class="c-ico">' + c.icon + '</div>' +
        '<h3>' + c.title + '</h3><p>' + c.desc + '</p>' +
        '<span class="c-num">' + c.num + '</span></div>';
    }).join('');
  }

  function renderFooterLinks(t) {
    var ul = $('#footerEmergencyLinks');
    if (!ul) return;
    ul.innerHTML = t.footer.links.map(function (l) {
      return '<li><a href="' + l.href + '">' + l.text + '</a></li>';
    }).join('');
  }

  /* ---------- Aplicar textos estáticos (data-i18n) ---------- */
  function applyStaticText(t) {
    $all('[data-i18n]').forEach(function (el) {
      var val = get(t, el.getAttribute('data-i18n'));
      if (val !== undefined) el.textContent = val;
    });
    $all('[data-i18n-html]').forEach(function (el) {
      var val = get(t, el.getAttribute('data-i18n-html'));
      if (val !== undefined) el.innerHTML = val;
    });
    $all('[data-i18n-placeholder]').forEach(function (el) {
      var val = get(t, el.getAttribute('data-i18n-placeholder'));
      if (val !== undefined) el.setAttribute('placeholder', val);
    });
    $all('[data-i18n-content]').forEach(function (el) {
      var val = get(t, el.getAttribute('data-i18n-content'));
      if (val !== undefined) el.setAttribute('content', val);
    });
  }

  /* ---------- Reaplicar comportamentos após render ---------- */
  function bindGuides() {
    var guides = $all('.guide');
    guides.forEach(function (guide) {
      var head = $('.guide-head', guide);
      if (!head) return;
      head.addEventListener('click', function () {
        var isOpen = guide.classList.contains('open');
        guides.forEach(function (g) { g.classList.remove('open'); });
        if (!isOpen) guide.classList.add('open');
      });
    });
  }

  function bindReveal() {
    var reveals = $all('.reveal');
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      reveals.forEach(function (el) { observer.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add('visible'); });
    }
  }

  /* ---------- Busca de emergências ---------- */
  function filterCards() {
    var input = $('#searchInput');
    if (!input) return;
    var term = normalize(input.value.trim());
    var cards = $all('.em-card');
    var visible = 0;
    cards.forEach(function (card) {
      var haystack = normalize(card.textContent + ' ' + (card.dataset.keywords || ''));
      var match = term === '' || haystack.indexOf(term) !== -1;
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });
    var noResults = $('#noResults');
    if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
  }

  /* ---------- Troca de idioma ---------- */
  function setLanguage(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = 'pt';
    var t = I18N[lang];
    if (!t) return;
    current = lang;

    // Atualiza <html lang> e <title>
    document.documentElement.setAttribute('lang', t.meta.lang);
    document.title = t.meta.title;

    // Textos estáticos
    applyStaticText(t);

    // Seções dinâmicas
    renderStats(t);
    renderEmergencyCards(t);
    renderGuides(t);
    renderToxics(t);
    renderKit(t);
    renderContacts(t);
    renderFooterLinks(t);

    // Reaplica comportamentos
    bindGuides();
    bindReveal();
    filterCards();

    // Botões do seletor
    $all('.lang-btn').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });

    // Persiste a escolha
    try { localStorage.setItem('petsocorro-lang', lang); } catch (e) {}
  }

  /* ---------- Inicialização ---------- */
  function init() {
    // Ano no rodapé
    var yearEl = $('#year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Menu mobile
    var navToggle = $('#navToggle');
    var navLinks = $('#navLinks');
    if (navToggle && navLinks) {
      navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open');
      });
      navLinks.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') navLinks.classList.remove('open');
      });
    }

    // Busca
    var searchInput = $('#searchInput');
    if (searchInput) searchInput.addEventListener('input', filterCards);

    // Botão voltar ao topo
    var toTop = $('#toTop');
    if (toTop) {
      window.addEventListener('scroll', function () {
        toTop.classList.toggle('show', window.scrollY > 500);
      });
      toTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Seletor de idioma
    $all('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLanguage(btn.getAttribute('data-lang'));
      });
    });

    // Idioma inicial: preferência salva > idioma do navegador > PT
    var saved = null;
    try { saved = localStorage.getItem('petsocorro-lang'); } catch (e) {}
    var initial = saved;
    if (!initial) {
      var nav = (navigator.language || 'pt').slice(0, 2).toLowerCase();
      initial = SUPPORTED.indexOf(nav) !== -1 ? nav : 'pt';
    }
    setLanguage(initial);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
