# CHANGELOG · v8 — Design polish, réorg tarifs, OG image & backlinks
**Date : 1er juillet 2026**

Après ton retour sur le v7, corrections design + refonte UX tarifs + création de 2 articles blog pour renforcer le SEO/backlinks + OG image pour partage réseaux.

---

## ⚡ Ce qui a changé (résumé express)

| # | Changement | Fichiers |
|---|---|---|
| 1 | 🎁 **OG image PNG** pour partage WhatsApp/SMS/LinkedIn | `images/og-cover.png` (nouveau) + 35 pages HTML |
| 2 | 🎨 **Fix contrastes** carte violette "Combien économisez-vous" | `tarifs.html`, `calculateur-roi.html` |
| 3 | 🧩 **Footer harmonisé** sur calculateur ROI | `calculateur-roi.html` |
| 4 | 🎚 **Toggle Mensuel/Annuel premium** style ON/OFF slider animé | `tarifs.html` |
| 5 | 🔀 **Comparateur concurrents déplacé tout en bas** de tarifs | `tarifs.html` |
| 6 | 🎁 **Badge "2,2 mois offerts" repositionné** en tagline sous le toggle | `tarifs.html` |
| 7 | 📰 **2 nouveaux articles blog** (backlinks + SEO) | `blog/pennylane-vs-numma-2026.html`, `blog/7-criteres-choisir-logiciel-comptable-2026.html` |
| 8 | 🗺 **Sitemap** mis à jour avec les 2 nouveaux articles | `sitemap.xml` |

---

## 📦 Ce qu'il y a dans le dossier

Le dossier `Mise à jour du site ` contient maintenant **TOUT le site** (26 pages racine + 17 articles blog + 1 image). Tu peux tout uploader d'un coup sur GitHub — ça remplace tout ce qui est en ligne actuellement.

### Racine (26 fichiers)
- Pages principales : `index.html`, `tarifs.html`, `calculateur-roi.html`, `a-propos.html`, `contact.html`, `blog.html`, `fonctionnalites.html`, `reserver-demo.html`
- Modules : `facturation-electronique.html`, `comptabilite.html`, `paie-rh.html`, `tresorerie.html`
- Landings sectorielles : `logiciel-gestion-btp.html`, `logiciel-gestion-agence.html`, `logiciel-gestion-commerce-detail.html`, `micro-entreprise.html`
- Livres blancs : `livre-blanc-roi-numma.html` (+ contenu), `livre-blanc-pilotage-tresorerie.html` (+ contenu)
- Légal : `mentions-legales.html`, `politique-confidentialite.html`, `cgu.html`, `cgv.html`, `dpa.html`, `securite.html`
- SEO : `sitemap.xml`

### /blog/ (17 articles)
Dont **2 NOUVEAUX** cette semaine :
- `pennylane-vs-numma-2026.html` — Comparatif honnête vs concurrent principal (~1 800 mots, schémas Article + FAQPage + BreadcrumbList)
- `7-criteres-choisir-logiciel-comptable-2026.html` — Guide de sélection (~1 700 mots, schémas Article + HowTo + BreadcrumbList)

### /images/ (1 fichier)
- `og-cover.png` (1200×630) — **IMPORTANT** : c'est l'image qui s'affichera dans les previews WhatsApp / SMS / LinkedIn / X quand tu partages une URL numma.eu.

---

## 🎯 Détails des changements

### 1. OG image pour partages sociaux
**Le problème** : quand tu partages `numma.eu` sur WhatsApp, aucune image / logo n'apparaissait.

**La solution** : nouvelle image `/images/og-cover.png` (1200×630, gradient NUMMA, logo N visible + titre + 3 pills "14 jours gratuits · Sans CB · Made in France"). Toutes les 35 pages HTML référencent maintenant cette image via les meta `og:image` + `twitter:image` + tailles `1200×630` + alt text.

**Comment tester après upload** : va sur https://www.opengraph.xyz/ et colle l'URL numma.eu → tu verras la preview WhatsApp/LinkedIn générée.

### 2. Fix contrastes sur cartes violettes CTA
- `tarifs.html` — `.roi-cta-card p` : `opacity: 0.95` → `color: rgba(255,255,255,0.95)` (le texte de la phrase sous-titre était en gris foncé sur violet, donc illisible)
- `calculateur-roi.html` — même fix sur `.final-cta p` + `.trust-final`

### 3. Footer calculateur ROI aligné au reste du site
- Utilise maintenant les mêmes classes `footer-brand`, `footer-logo-text`, `footer-col` que `index.html` / `tarifs.html`
- Structure et copyright identiques
- Fini l'incohérence visuelle

### 4. Toggle Mensuel/Annuel premium
Le nouveau toggle est un **vrai slider ON/OFF animé** :
- Fond blanc avec bordure violet clair
- Pill violet (linear-gradient) qui glisse en horizontal quand tu bascules
- Animation `cubic-bezier` fluide 0.35s
- Badge "−18%" en pill vert intégré au label "Annuel"
- Tagline sous le toggle : "🎁 Passez à l'annuel et récupérez **2,2 mois offerts** par an"
- Beaucoup plus visible et attractif que la version précédente

### 5. Réorganisation tarifs.html
Nouvelle structure (dans l'ordre) :
1. Hero + breadcrumb
2. Bandeau Indépendants (offre 19 €)
3. **Toggle Mensuel/Annuel + Tagline "2,2 mois offerts"**
4. 3 cards de prix (Pro / Business / Enterprise)
5. Trust strip (14 jours · sans CB · sans engagement · résiliable 1 clic · support français)
6. **CTA Calculateur ROI** violet
7. **Comparatif détaillé des offres NUMMA** (le tableau par plan Indépendant/Pro/Business/Enterprise) — **maintenant en premier**
8. FAQ 9 questions
9. **Comparateur concurrents (NUMMA vs Alteore/Pennylane/Sage/Cegid/Excel)** — **maintenant tout en bas**
10. CTA final "Pas encore convaincu ?"
11. Footer

### 6. 2 nouveaux articles blog (SEO + backlinks)

**Article 1 — `pennylane-vs-numma-2026.html`**
- Comparaison honnête sur 7 dimensions (prix, compta, facturation, paie, trésorerie, IA, migration)
- 2 tableaux comparatifs mini (prix + paie)
- Cible mot-clé "Pennylane vs NUMMA", "alternative Pennylane"
- Cross-linking : cout-cache-logiciel-comptable, digitaliser-comptabilite-tpe-pme, tarifs, calculateur-roi
- Schémas Article + FAQPage (3 Q) + BreadcrumbList

**Article 2 — `7-criteres-choisir-logiciel-comptable-2026.html`**
- Guide checklist en 7 points (PDP, FEC, Paie DSN, hébergement France, IA rédigée, migration, coût total)
- Warning box pour éviter les pièges commerciaux
- Cible mot-clé "choisir logiciel comptable 2026"
- Schémas Article + **HowTo** (7 étapes) + BreadcrumbList — HowTo est très efficace pour featured snippets Google
- Cross-linking : pennylane-vs-numma-2026, cout-cache-logiciel-comptable, digitaliser-comptabilite-tpe-pme, facturation-electronique-2026, livre-blanc-roi-numma, calculateur-roi

**Impact SEO attendu :**
- Enrichit le maillage interne (2 nouveaux hubs qui pointent vers tarifs + calculateur ROI + landings sectorielles)
- Cible des requêtes transactionnelles ("Pennylane vs" et "choisir logiciel") = trafic qualifié en fin de funnel
- Schéma HowTo augmente la probabilité d'apparaître en featured snippet Google

---

## ⚠️ Point ouvert — Refresh mockups modules (bas de homepage)

Concernant ta demande de refaire les mockups des sections modules (Facturation / Compta / Paie / Trésorerie) avec le style des captures que tu m'as envoyées :

**J'ai analysé les SVG existants** (`factures-ventes.svg`, `tva-ca3.svg`, `fiches-de-paie.svg`, `tresorerie.svg`) — ils affichent déjà **les vrais chiffres et données de ton app** (GIOVVVV admin, GIOVY TEST 1440 €, Marie Lopez 3450 € net, Julien Durand 2780 € net, DSN Transmise URSSAF, Trésorerie +86 240 €, Prévisionnel mai +92 100 €, Prévisionnel juin +78 400 €). Le contenu est déjà fidèle.

**Ce qu'il resterait à faire (sprint dédié)** : convertir ces SVG en composants HTML/CSS inline (comme le hero de la homepage) pour :
- Animations plus poussées (notifications flottantes qui apparaissent au scroll)
- Meilleur contrôle visuel pixel-perfect
- Responsivité optimale mobile
- Texte indexable par Google (plus de SEO)

Je propose de le faire dans un prochain sprint dédié "Polish mockups" — c'est ~2h de travail minutieux et je préfère te livrer plus vite les changements demandés maintenant qui ont plus d'impact conversion.

---

## 🚀 À faire côté toi

1. **Uploade tout le dossier sur GitHub** (racine + `blog/` + `images/`)
2. Attends 2 min que Pages redéploie
3. **Test partage** : envoie l'URL numma.eu sur WhatsApp à toi-même → tu dois voir le logo NUMMA + titre en preview
4. **Test toggle tarifs** : sur `tarifs.html`, bascule Mensuel ↔ Annuel — la pill violette doit slider
5. **Test réorg tarifs** : scroll `tarifs.html` de haut en bas — l'ordre doit être Prix cards → Comparatif offres NUMMA → FAQ → Comparateur concurrents → CTA final
6. **Test blog** : `numma.eu/blog/pennylane-vs-numma-2026.html` et `numma.eu/blog/7-criteres-choisir-logiciel-comptable-2026.html` doivent s'afficher
7. **Submit sitemap** sur Google Search Console pour indexer les 2 nouveaux articles

---

## 💡 Suggestions pour le prochain sprint (v9)

Si tu veux continuer à monter en qualité :
1. **Refresh mockups modules HTML/CSS** — le sprint "polish visuel" évoqué ci-dessus
2. **Ajouter la nav "Ressources"** avec dropdown (blog, livres blancs, calculateur) — plus visible que l'unique lien "Ressources" actuel
3. **Page /a-propos avec fondateurs** — quand tu auras les photos Pierre & Gauthier
4. **Vidéo hero 30 sec** — capture d'écran de l'app en boucle silencieuse
5. **A/B test "2,2 mois offerts"** vs "−18% en annuel" pour voir ce qui convertit le mieux
6. **Landing pages sectorielles supplémentaires** : Restaurant CHR, Cabinet libéral, E-commerce

---

**Made in France · Version 8 · Design polish + réorg tarifs + blogs + OG image**
