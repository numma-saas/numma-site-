/* ===== Configuration des balises NUMMA (v49) =====
   Laisser une valeur vide = la balise n'est jamais chargée.
   Rien n'est chargé avant le consentement : GA4 après « Mesure d'audience »,
   Google Ads et Meta après « Publicité ». */
var NUMMA_TAGS={
  GA4:'G-7LBVCJ4GZG',
  GOOGLE_ADS:'',            // ex. 'AW-1234567890'
  GOOGLE_ADS_CONV_DEMO:'',  // ex. 'AW-1234567890/AbCdEf' : envoi du formulaire démo
  GOOGLE_ADS_CONV_ESSAI:'', // ex. 'AW-1234567890/GhIjKl' : envoi du formulaire essai
  META_PIXEL:''             // ex. '123456789012345'
};
(function(){'use strict';var STORAGE_KEY='numma-consent';var CONSENT_TTL_DAYS=180;function readConsent(){try{var raw=localStorage.getItem(STORAGE_KEY);if(!raw)return null;var data=JSON.parse(raw);if(!data||!data.ts)return null;var age=(Date.now()-data.ts)/(1000*60*60*24);if(age>CONSENT_TTL_DAYS)return null;return data;}catch(e){return null;}}
function saveConsent(consent){try{consent.ts=Date.now();consent.v='1.0';localStorage.setItem(STORAGE_KEY,JSON.stringify(consent));}catch(e){}}
var GA_ID=NUMMA_TAGS.GA4;window.NUMMA_TAGS=NUMMA_TAGS;window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};window.gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'});function gtagScript(id){if(window.__nummaGtagJs)return;window.__nummaGtagJs=true;window.gtag('js',new Date());var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+id;document.head.appendChild(s);}function loadGA(){if(window.__nummaGA||!GA_ID)return;window.__nummaGA=true;gtagScript(GA_ID);window.gtag('config',GA_ID,{anonymize_ip:true});}function loadAds(){if(window.__nummaAds||!NUMMA_TAGS.GOOGLE_ADS)return;window.__nummaAds=true;gtagScript(NUMMA_TAGS.GOOGLE_ADS);window.gtag('config',NUMMA_TAGS.GOOGLE_ADS);}function loadMeta(){if(!NUMMA_TAGS.META_PIXEL)return;if(window.__nummaMeta){window.fbq('consent','grant');return;}window.__nummaMeta=true;!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');window.fbq('init',NUMMA_TAGS.META_PIXEL);window.fbq('track','PageView');}window.NUMMA_track=function(kind,params){var c=window.NUMMA_CONSENT||{};var m=!!c.marketing;params=params||{};var map={demo:['demande_demo',NUMMA_TAGS.GOOGLE_ADS_CONV_DEMO,'Lead',0],essai:['demande_essai',NUMMA_TAGS.GOOGLE_ADS_CONV_ESSAI,'StartTrial',0],contact:['demande_contact','','',0],clic_demo:['','','ClicDemo',1],clic_essai:['','','ClicEssai',1]};var d=map[kind];if(!d)return;if(d[0]&&c.analytics)window.gtag('event',d[0],params);if(m&&d[1]&&window.__nummaAds)window.gtag('event','conversion',{send_to:d[1]});if(m&&d[2]&&window.__nummaMeta&&window.fbq){if(d[3])window.fbq('trackCustom',d[2]);else window.fbq('track',d[2]);}};
function applyConsent(consent){window.NUMMA_CONSENT=consent;var a=!!(consent&&consent.analytics),m=!!(consent&&consent.marketing);window.gtag('consent','update',{analytics_storage:a?'granted':'denied',ad_storage:m?'granted':'denied',ad_user_data:m?'granted':'denied',ad_personalization:m?'granted':'denied'});if(a)loadGA();if(m){loadAds();loadMeta();}else{if(window.__nummaMeta&&window.fbq)window.fbq('consent','revoke');try{sessionStorage.removeItem('numma_ad');}catch(e){}}}
function styleNode(){var css=''
+'.cookie-banner{position:fixed;left:1rem;right:1rem;bottom:1rem;z-index:9999;'
+'background:#fff;border:1px solid rgba(124,58,237,.18);border-radius:16px;'
+'box-shadow:0 24px 60px -20px rgba(15,23,42,.25),0 8px 24px -12px rgba(15,23,42,.18);'
+'padding:1.25rem 1.5rem;display:flex;flex-direction:column;gap:1rem;max-width:920px;margin:0 auto;'
+'font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#0f172a;}'
+'.cookie-banner h2{margin:0 0 .25rem;font-size:1.05rem;font-weight:700;color:#0f172a;}'
+'.cookie-banner p{margin:0;font-size:.95rem;line-height:1.55;color:#475569;}'
+'.cookie-banner a{color:#7C3AED;text-decoration:underline;}'
+'.cookie-actions{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;justify-content:flex-end;}'
+'.cookie-actions button{font:inherit;cursor:pointer;border-radius:999px;padding:.6rem 1.1rem;border:1px solid transparent;transition:transform .15s ease,box-shadow .15s ease,background .15s ease;}'
+'.cookie-actions .c-accept{background:linear-gradient(135deg,#7C3AED,#FB923C);color:#fff;border:none;font-weight:600;}'
+'.cookie-actions .c-accept:hover{transform:translateY(-1px);box-shadow:0 12px 24px -12px rgba(124,58,237,.45);}'
+'.cookie-actions .c-refuse{background:#fff;color:#0f172a;border-color:#e2e8f0;}'
+'.cookie-actions .c-refuse:hover{background:#f8fafc;}'
+'.cookie-actions .c-custom{background:transparent;color:#7C3AED;border-color:#c4b5fd;}'
+'.cookie-actions .c-custom:hover{background:#f5f3ff;}'
+'.cookie-modal-backdrop{position:fixed;inset:0;background:rgba(15,23,42,.55);z-index:10000;display:flex;align-items:center;justify-content:center;padding:1rem;}'
+'.cookie-modal{background:#fff;border-radius:18px;max-width:560px;width:100%;padding:1.75rem;box-shadow:0 30px 80px -30px rgba(15,23,42,.45);max-height:90vh;overflow-y:auto;}'
+'.cookie-modal h2{margin:0 0 .5rem;font-size:1.25rem;font-weight:700;}'
+'.cookie-modal p{font-size:.95rem;line-height:1.55;color:#475569;margin:0 0 1rem;}'
+'.cookie-cat{border:1px solid #e2e8f0;border-radius:12px;padding:1rem;margin-bottom:.75rem;display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;}'
+'.cookie-cat h3{margin:0 0 .25rem;font-size:1rem;font-weight:600;}'
+'.cookie-cat small{color:#64748b;font-size:.85rem;line-height:1.5;display:block;}'
+'.cookie-switch{position:relative;display:inline-block;width:44px;height:24px;flex-shrink:0;margin-top:.15rem;}'
+'.cookie-switch input{opacity:0;width:0;height:0;}'
+'.cookie-switch .slider{position:absolute;cursor:pointer;inset:0;background:#cbd5e1;border-radius:999px;transition:.2s;}'
+'.cookie-switch .slider::before{content:"";position:absolute;height:18px;width:18px;left:3px;top:3px;background:#fff;border-radius:50%;transition:.2s;}'
+'.cookie-switch input:checked + .slider{background:#7C3AED;}'
+'.cookie-switch input:checked + .slider::before{transform:translateX(20px);}'
+'.cookie-switch input:disabled + .slider{background:#94a3b8;cursor:not-allowed;}'
+'.cookie-modal-actions{display:flex;flex-wrap:wrap;gap:.5rem;justify-content:flex-end;margin-top:1rem;}'
+'.cookie-modal-actions button{font:inherit;cursor:pointer;border-radius:999px;padding:.6rem 1.1rem;border:1px solid transparent;font-weight:500;}'
+'.cookie-modal-actions .save{background:linear-gradient(135deg,#7C3AED,#FB923C);color:#fff;border:none;font-weight:600;}'
+'.cookie-modal-actions .cancel{background:#fff;color:#0f172a;border-color:#e2e8f0;}'
+'@media (max-width: 640px){.cookie-banner{padding:1rem;border-radius:14px;}.cookie-actions{justify-content:stretch;}.cookie-actions button{flex:1 1 auto;text-align:center;}}';var s=document.createElement('style');s.id='numma-cookie-styles';s.textContent=css;return s;}
function buildBanner(){var w=document.createElement('div');w.className='cookie-banner';w.setAttribute('role','dialog');w.setAttribute('aria-modal','false');w.setAttribute('aria-label','Bandeau de gestion des cookies');w.innerHTML=''
+'<div>'
+'<h2>Vos cookies, votre choix.</h2>'
+'<p>Nous utilisons des cookies nécessaires au fonctionnement du site. Avec votre accord, nous mesurons aussi l\'audience avec Google Analytics pour améliorer le site. Rien n\'est déposé tant que vous n\'avez pas choisi. <a href="/politique-confidentialite.html">En savoir plus</a>.</p>'
+'</div>'
+'<div class="cookie-actions">'
+'<button type="button" class="c-custom" data-act="custom">Personnaliser</button>'
+'<button type="button" class="c-refuse" data-act="refuse">Tout refuser</button>'
+'<button type="button" class="c-accept" data-act="accept">Tout accepter</button>'
+'</div>';return w;}
function buildModal(currentConsent){var c=currentConsent||{necessary:true,analytics:false,marketing:false};var bd=document.createElement('div');bd.className='cookie-modal-backdrop';bd.setAttribute('role','dialog');bd.setAttribute('aria-modal','true');bd.setAttribute('aria-label','Préférences cookies');bd.innerHTML=''
+'<div class="cookie-modal">'
+'<h2>Préférences cookies</h2>'
+'<p>Choisissez les catégories de cookies que vous autorisez. Vous pourrez modifier ce choix à tout moment depuis le pied de page.</p>'
+'<div class="cookie-cat"><div><h3>Strictement nécessaires</h3><small>Indispensables au fonctionnement du site et de votre session NUMMA. Ne peuvent pas être désactivés.</small></div><label class="cookie-switch"><input type="checkbox" data-cat="necessary" checked disabled><span class="slider"></span></label></div>'
+'<div class="cookie-cat"><div><h3>Mesure d\'audience anonyme</h3><small>Google Analytics 4 : pages vues, provenance des visites, durée. Cookies déposés uniquement avec votre accord, conservés 13 mois maximum.</small></div><label class="cookie-switch"><input type="checkbox" data-cat="analytics"'+(c.analytics?' checked':'')+'><span class="slider"></span></label></div>'
+'<div class="cookie-cat"><div><h3>Publicité</h3><small>Google Ads et Meta (Facebook, Instagram) : mesurer quelles annonces amènent des demandes de démo ou d\'essai. Désactivé par défaut.</small></div><label class="cookie-switch"><input type="checkbox" data-cat="marketing"'+(c.marketing?' checked':'')+'><span class="slider"></span></label></div>'
+'<div class="cookie-modal-actions">'
+'<button type="button" class="cancel" data-act="cancel">Annuler</button>'
+'<button type="button" class="save" data-act="save">Enregistrer mes choix</button>'
+'</div>'
+'</div>';return bd;}
function show(){if(document.getElementById('numma-cookie-styles'))return;document.head.appendChild(styleNode());var banner=buildBanner();document.body.appendChild(banner);banner.addEventListener('click',function(e){var act=e.target&&e.target.getAttribute('data-act');if(!act)return;if(act==='accept'){saveConsent({necessary:true,analytics:true,marketing:true});banner.remove();applyConsent(window.NUMMA_CONSENT={necessary:true,analytics:true,marketing:true});}else if(act==='refuse'){saveConsent({necessary:true,analytics:false,marketing:false});banner.remove();applyConsent({necessary:true,analytics:false,marketing:false});}else if(act==='custom'){openModal(banner);}});}
function openModal(banner){var current=readConsent()||{necessary:true,analytics:false,marketing:false};var modal=buildModal(current);document.body.appendChild(modal);modal.addEventListener('click',function(e){if(e.target===modal){modal.remove();return;}
var act=e.target&&e.target.getAttribute('data-act');if(act==='cancel'){modal.remove();}else if(act==='save'){var inputs=modal.querySelectorAll('input[data-cat]');var consent={necessary:true,analytics:false,marketing:false};inputs.forEach(function(i){consent[i.getAttribute('data-cat')]=i.checked;});saveConsent(consent);applyConsent(consent);modal.remove();if(banner)banner.remove();}});}
window.NUMMA_openCookiePrefs=function(){openModal(null);};document.addEventListener('DOMContentLoaded',function(){var c=readConsent();if(c){applyConsent(c);}else{show();}
document.querySelectorAll('[data-cookie-prefs]').forEach(function(el){el.addEventListener('click',function(e){e.preventDefault();window.NUMMA_openCookiePrefs();});});});})();