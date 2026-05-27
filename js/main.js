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
