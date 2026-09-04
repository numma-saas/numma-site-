# CHANGELOG v14 — Perf, refonte homepage, mega-menu, tarifs paie

**52 fichiers HTML · CSS · JS · images.** Aucune URL modifiée.

---

## ⚠️ À UPLOADER — trois nouveautés à ne pas oublier

| Élément | Pourquoi c'est critique |
|---|---|
| **`js/main.js`** | Contient le pilotage du mega-menu. Sans lui, le menu redevient capricieux au survol. |
| **`images/app/`** (nouveau dossier) | Les 5 captures de la homepage. Sans lui, la page s'affiche sans visuels. |
| **`css/style.css`** | Tout le nouveau design en dépend. |

`images/logo.jpg` est inclus : **ne le supprime pas du dépôt**, les schémas JSON-LD l'utilisent comme logo d'éditeur (Google exige ≥ 112 px).

---

## 1. Performance

| Correction | Détail |
|---|---|
| **Google Analytics différé** | `gtag.js` charge sur l'événement `load`. File `dataLayer` conservée : aucune visite perdue. 164 Ko hors du chemin critique, sur 50 pages. |
| **CSS minifié** | 39,7 → 33,2 Ko. Source lisible gardée en local (non livrée). |
| **Logo 96 → 72 px** | Affiché en 32-36 px. |
| **Bandeau de banques supprimé** | Plus gros bloc du DOM + animation permanente + emoji. |

**Après déploiement** : ouvre Google Analytics en temps réel et charge une page. La visite doit remonter.

---

## 2. Homepage refondue — 951 → 560 lignes

| # | Section |
|---|---|
| 1 | Hero + vraie capture du dashboard |
| 2 | Bandeau clients défilant |
| 3 | Solutions métier — 4 cartes, icônes SVG |
| 4 | « Vous êtes… » — segmentation par taille |
| 5 | Le produit en écrans — 4 modules |
| 6 | Un abonnement au lieu de trois |
| 7 | FAQ |
| 8 | CTA final |

Conformité descendue en ligne compacte dans le footer.

**Marqueurs « IA » retirés** : titres bicolores réduits à 1 (le H1), 0 emoji, plus de bandeau de banques.

**Images** : 5 captures WebP avec repli JPEG, 131 Ko au total. Hero en `fetchpriority="high"`, le reste en `loading="lazy"`, dimensions explicites partout.

---

## 3. Animations

**Au chargement** : titre composé mot par mot, capture en fondu montant, halo violet.

**Au défilement** : sections révélées, en-tête compact avec flou, barre de progression violet-orange, parallaxe léger sur la capture.

**En continu** : flottement du hero, bandeau clients défilant (pause au survol).

**Sur la capture** : deux cartes flottantes — le CA du mois s'incrémente de 0 à 20 856 €, six barres d'encaissements poussent en cascade. Elles sont en `position:absolute` et `pointer-events:none` : **zéro décalage de mise en page, aucun clic intercepté**. Masquées sous 900 px.

**Au survol** : captures produit qui se soulèvent, lueur suivant la souris sur les cartes métier, reflet traversant les boutons.

Tout est en `transform`/`opacity`. `prefers-reduced-motion` désactive l'ensemble.

---

## 4. Mega-menu

Quatre colonnes centrées sur la page : Par profil · Par secteur · Le produit · Choisir NUMMA. Déployé sur les **50 pages** — chaque page produit reçoit désormais un lien depuis tout le site.

**Correctif du survol** (le bug que tu as remonté) : `.nav-links` avait `align-items:center`, ce qui empêchait l'onglet de descendre jusqu'au bas de la barre. L'écart réel à franchir était de 25 px, mon pont n'en couvrait que 14.

Trois corrections cumulées :
1. L'onglet occupe toute la hauteur de la barre
2. Pont invisible de 30 px, inactif quand le menu est fermé
3. **Pilotage JavaScript** dans `main.js` : `pointerleave` ne se déclenche qu'en quittant l'onglet et tous ses descendants, panneau compris, avec 260 ms de tolérance. Le CSS reste en secours si le JS ne charge pas.

Pied de menu simplifié en lien texte.

---

## 5. Tarifs

**Comparatif concurrents retiré** (152 lignes + 2,4 Ko de CSS orphelin), remplacé par trois liens vers les articles comparatifs. Aucune perte SEO : ces requêtes sont déjà couvertes par le blog.

**Nouveau tarif paie** — appliqué sur 13 fichiers :

| Plan | Bulletin de paie |
|---|---|
| Pro | **15 € HT** |
| Business | **10 € HT** |
| Enterprise | illimité inclus |

Présenté comme une option discrète, avec le repère marché : **25 à 35 € HT en cabinet d'expertise comptable**, environ 28 € pour une TPE de 5 salariés. Tu es deux fois moins cher.

**Deux calculs corrigés en conséquence** :
- Le calculateur ROI ignorait totalement le coût de la paie — il annonçait 413 €/an là où la réalité est 1 493 € pour 5 salariés
- Les deux cas types du livre blanc ROI ont été recalculés

---

## ✅ Vérifications

- 50 pages : 0 lien mort, 0 image morte
- JSON-LD valides partout
- CSS : 403 accolades ouvertes / 403 fermées
- `main.js` : syntaxe validée
- sitemap.xml valide

---

## 🔎 Non testé — à valider par toi

Je n'ai pas pu ouvrir de navigateur pour tester le rendu réel. Trois points à vérifier après déploiement :

1. **Le mega-menu** : survoler « Solutions », descendre vers le panneau, cliquer un lien. Puis passer horizontalement à « Tarifs » et vérifier que le clic fonctionne.
2. **Le hero animé** : les deux cartes apparaissent, le chiffre monte, les barres poussent.
3. **Google Analytics** : une visite remonte bien en temps réel.

---

## Reste à faire

| Chantier | Volume |
|---|---|
| Dégraissage des pages produit et landings | 47 titres bicolores, 21 emoji |
| 3 outils gratuits (simulateur brut/net, modèle de facture, charges sociales) | Le plus gros levier de trafic |
| 2 articles de septembre | Fenêtre post-échéance ouverte maintenant |
| Logos clients | Demander l'accord écrit + les fichiers officiels |
