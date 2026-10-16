/* ===== Attribution : d'où vient chaque visiteur (premier contact de la session) =====
   Stocké en sessionStorage, transmis avec chaque formulaire, et aux événements GA4
   (GA4 ne se charge qu'après consentement : voir js/cookies.js). */
(function () {
  try {
    var q = new URLSearchParams(location.search);
    var KEY = 'numma_ft';
    var ft = JSON.parse(sessionStorage.getItem(KEY) || 'null');
    var metierPage = (location.pathname.match(/electricien|borne|btp|agence|commerce|plombier|micro-entreprise/) || [''])[0];
    if (!ft) {
      var ref = document.referrer && document.referrer.indexOf(location.host) === -1 ? document.referrer : '';
      ft = {
        landing: location.pathname,
        referrer: ref,
        utm_source: q.get('utm_source') || (ref ? new URL(ref).hostname : 'direct'),
        utm_medium: q.get('utm_medium') || (ref ? 'referral' : ''),
        utm_campaign: q.get('utm_campaign') || '',
        metier: q.get('metier') || metierPage || ''
      };
    } else if (!ft.metier && (q.get('metier') || metierPage)) {
      ft.metier = q.get('metier') || metierPage;
    }
    sessionStorage.setItem(KEY, JSON.stringify(ft));
    window.NUMMA_FT = ft;
  } catch (e) { window.NUMMA_FT = {}; }
})();

// NUMMA — menu mobile, formulaire, état actif
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  const closeMenu = () => {
    if (!links) return;
    links.classList.remove('open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  // Hamburger toggle
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      // Lock scroll while menu is open (mobile)
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when any link (excluding top-level "has-dropdown" header if desired) is clicked
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (links.classList.contains('open')) closeMenu();
      });
    });
  }

  // Close mobile menu on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links && links.classList.contains('open')) {
      closeMenu();
    }
  });

  // Close mobile menu on resize to desktop
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 960 && links && links.classList.contains('open')) {
        closeMenu();
      }
    }, 120);
  });

  // Highlight current page in nav
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Contact form: envoi réel vers Google Apps Script
  const form = document.querySelector('form[data-contact]');
  if (form) {
    const PLACEHOLDER = 'COLLER_VOTRE_URL_APPS_SCRIPT_ICI';

    const showThanks = () => {
      form.innerHTML = '<div style="text-align:center;padding:2rem 0;"><h3 style="color:var(--numma-purple-700);margin-bottom:.5rem;">Merci !</h3><p>Votre demande est bien partie. Nous revenons vers vous sous 24 h ouvrées. Un email de confirmation vient de vous être envoyé.</p></div>';
    };

    const showError = (btn, original) => {
      let err = form.querySelector('.form-error');
      if (!err) {
        err = document.createElement('p');
        err.className = 'form-error';
        err.style.cssText = 'color:#DC2626;font-size:0.9rem;margin-top:0.75rem;';
        form.appendChild(err);
      }
      err.innerHTML = 'Une erreur est survenue. Réessayez ou écrivez-nous à <a href="mailto:contact@numma.eu">contact@numma.eu</a>.';
      if (btn) { btn.textContent = original; btn.disabled = false; }
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Anti-spam : si le honeypot est rempli, on simule un succès sans rien envoyer.
      if (form.website && form.website.value) { showThanks(); return; }

      const btn = form.querySelector('button[type="submit"]');
      const original = btn ? btn.textContent : 'Envoyer';
      if (btn) { btn.textContent = 'Envoi en cours…'; btn.disabled = true; }

      const endpoint = form.getAttribute('data-endpoint') || '';

      // Tant que l'URL Apps Script n'est pas configurée : message de remerciement (mode démo).
      if (!endpoint || endpoint.indexOf(PLACEHOLDER) !== -1) {
        setTimeout(showThanks, 700);
        return;
      }

      const data = new URLSearchParams();
      new FormData(form).forEach((value, key) => data.append(key, value));
      data.append('source', window.location.pathname);
      var ft = window.NUMMA_FT || {};
      ['landing','referrer','utm_source','utm_medium','utm_campaign','metier'].forEach(function (k) {
        if (!data.has(k)) data.append(k, ft[k] || '');
      });

      fetch(endpoint, { method: 'POST', body: data })
        .then((r) => r.json().catch(() => ({ result: 'success' })))
        .then((json) => {
          if (json && json.result === 'error') throw new Error(json.message || 'error');
          showThanks();
        })
        .catch(() => showError(btn, original));
    });
  }
});

/* ===== Mega-menu : ouverture pilotée par intention, sans dépendre de la géométrie =====
   pointerleave sur le <li> ne se déclenche qu'en quittant l'onglet ET tous ses
   descendants — panneau compris. Un délai de 260 ms absorbe le trajet de la souris. */
document.addEventListener('DOMContentLoaded', function () {
  var fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  if (!fine) return;                       // tactile : on garde le comportement natif
  document.querySelectorAll('.has-dropdown').forEach(function (li) {
    var t = null;
    function open()  { clearTimeout(t); li.classList.add('is-open'); }
    function close() { clearTimeout(t); t = setTimeout(function () { li.classList.remove('is-open'); }, 260); }
    li.addEventListener('pointerenter', open);
    li.addEventListener('pointerleave', close);
    li.addEventListener('focusin',  open);
    li.addEventListener('focusout', function (e) {
      if (!li.contains(e.relatedTarget)) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { clearTimeout(t); li.classList.remove('is-open'); }
    });
  });
});

/* ===== Événements de conversion (envoyés seulement si GA4 est autorisé) ===== */
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a[href]');
  if (!a || typeof window.gtag !== 'function') return;
  var h = a.getAttribute('href') || '';
  var ft = window.NUMMA_FT || {};
  var p = { page: location.pathname, metier: ft.metier || '', source: ft.utm_source || '' };
  if (h.indexOf('reserver-demo') !== -1) window.gtag('event', 'clic_demo', p);
  else if (h.indexOf('essai-gratuit') !== -1) window.gtag('event', 'clic_essai', p);
  else if (h.indexOf('tel:') === 0) window.gtag('event', 'clic_telephone', p);
});

/* ===== Page démo : message adapté au métier d'origine ===== */
document.addEventListener('DOMContentLoaded', function () {
  if (location.pathname.indexOf('reserver-demo') === -1) return;
  var m = (window.NUMMA_FT || {}).metier;
  var labels = { electricien: 'électriciens', 'borne-irve': 'installateurs de bornes de recharge', borne: 'installateurs de bornes de recharge', btp: 'entreprises du bâtiment', plombier: 'plombiers-chauffagistes', agence: 'agences', commerce: 'commerçants' };
  var lead = document.querySelector('.page-header .lead');
  if (m && labels[m] && lead) {
    var p = document.createElement('p');
    p.className = 'demo-metier';
    p.style.cssText = 'display:inline-block;margin-top:.75rem;padding:.4rem .9rem;border-radius:999px;background:var(--numma-purple-50);color:var(--numma-purple-700);font-weight:600;font-size:.9rem';
    p.textContent = 'Démo adaptée aux ' + labels[m] + ' : on part de vos devis, de vos taux de TVA et de vos salariés.';
    lead.insertAdjacentElement('afterend', p);
  }
});

/* ===== Mobile : barre « Réserver une démo » collante ===== */
document.addEventListener('DOMContentLoaded', function () {
  if (/reserver-demo|essai-gratuit|contact|mentions-legales|cgu|cgv|dpa|politique-confidentialite/.test(location.pathname)) return;
  var m = (window.NUMMA_FT || {}).metier || '';
  var pre = location.pathname.indexOf('/blog/') !== -1 ? '../' : '';
  var q = m ? '?metier=' + encodeURIComponent(m) : '';
  var bar = document.createElement('div');
  bar.className = 'sticky-demo';
  bar.innerHTML = '<a class="sd-p" href="' + pre + 'reserver-demo.html' + q + '">Réserver une démo</a><a class="sd-s" href="' + pre + 'essai-gratuit.html' + q + '">Essai gratuit</a>';
  document.body.appendChild(bar);
  document.body.classList.add('has-sticky');
  var shown = false;
  window.addEventListener('scroll', function () {
    var on = window.scrollY > 500;
    if (on !== shown) { shown = on; bar.classList.toggle('on', on); }
  }, { passive: true });
});
