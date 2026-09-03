# CHANGELOG v14 — Performance + refonte homepage + mega-menu

50 pages HTML · CSS · images. Aucune URL modifiée, aucun contenu supprimé hors comparatif tarifs.

---

## 1. Performance — les 3 postes de ton audit Lighthouse

| Correction | Détail |
|---|---|
| **Google Analytics différé** | `gtag.js` se charge sur l'événement `load` au lieu du parsing. La file `dataLayer` est conservée : aucune visite perdue. 164 Ko sortis du chemin critique, sur 50 pages. |
| **CSS minifié** | 39,7 → 29,5 Ko (−26 %). Source lisible conservée en local dans `css/style.source.css` (non livrée). |
| **Logo 96 → 72 px** | Il s'affiche en 32-36 px. J'avais surdimensionné au lot précédent. |
| **Bandeau de banques supprimé** | Plus gros bloc du DOM (21 enfants ×2) + animation permanente + emoji 🏦. |

⚠️ **Après déploiement** : ouvre Google Analytics en temps réel et charge une page. La visite doit remonter. 30 secondes de vérification.

---

## 2. Homepage refondue — 951 → 529 lignes

### Structure

| # | Section | Note |
|---|---|---|
| 1 | Hero | Titre court, 2 CTA, **vraie capture du dashboard** |
| 2 | Bandeau clients | VESPERA, Sancy Resort, SCAP, KW Luxury, Leasing Consulting |
| 3 | **Solutions métier** | 4 cartes secteur — remplace le bandeau conformité |
| 4 | « Vous êtes… » | Segmentation par taille, compactée |
| 5 | Le produit en écrans | 4 modules, vraies captures, alternance |
| 6 | Un abonnement au lieu de quatre | Comparatif chiffré + calculateur ROI |
| 7 | FAQ | Schéma FAQPage |
| 8 | CTA final | |
| — | Conformité | Descendue en ligne compacte dans le footer |

### Les marqueurs « IA » retirés

Les emoji 🏗️💻🛍️🚀 des cartes métier sont remplacés par des **icônes SVG en trait**, inline dans le HTML — aucune requête réseau supplémentaire.

| | Avant | Après (accueil) |
|---|---|---|
| Titres bicolores | plusieurs par page | **1** (le H1) |
| Emoji | 6 | **0** |
| Poids HTML | ~45 Ko | **31 Ko** |

### Images
5 captures réelles en **WebP avec repli JPEG — 131 Ko au total**. Le hero en `fetchpriority="high"`, les 4 autres en `loading="lazy"`. `width` et `height` explicites partout pour ne pas réintroduire de décalage de mise en page.

---

## 3. Mega-menu — déployé sur les 50 pages

Quatre colonnes, sur le modèle PayFit :

```
PAR PROFIL              PAR SECTEUR           LE PRODUIT              CHOISIR NUMMA
Indépendant & micro     BTP & artisan         Facturation élec.       Calculateur d'économies
TPE 2-10 salariés       Agence & freelance    Comptabilité            Sécurité & conformité
PME 11-49 salariés      Commerce de détail    Paie & RH               Comparatifs
Enterprise 50+                                Trésorerie              Ressources
```

**C'est le gain SEO interne le plus fort du lot** : chaque page produit et chaque landing sectorielle reçoit désormais un lien depuis les 50 pages du site.

Responsive : 4 colonnes en desktop, 2 en tablette, empilé en mobile.

---

## 4. Tarifs — comparatif concurrents retiré

La section « NUMMA vs les autres — le vrai match » (152 lignes) est supprimée, ainsi que 2,4 Ko de CSS devenu orphelin.

Remplacée par trois boutons vers tes articles comparatifs : Pennylane, Sage, et les 7 critères de choix.

**Aucune perte SEO** : ces requêtes sont déjà couvertes par les articles de blog dédiés, qui sont le bon endroit pour ça. Et un tableau comparatif sur une page de prix envoie le visiteur comparer ailleurs au moment où il allait décider.

Page : 652 → 518 lignes.

---

## ✅ Vérifications passées

- 0 lien mort, 0 image morte sur les 50 pages
- JSON-LD valides partout (accueil : SoftwareApplication + Organization + FAQPage)
- sitemap.xml valide
- CSS minifié : 380 accolades ouvertes / 380 fermées

---

## 📮 À uploader

Tout le dossier, en écrasant l'existant.

⚠️ **Nouveau dossier `images/app/`** — il contient les 5 captures. Ne l'oublie pas, sinon la homepage s'affiche sans visuels.

⚠️ **Ne supprime pas `images/logo.jpg`** du dépôt : les schémas JSON-LD l'utilisent encore comme logo d'éditeur (Google exige ≥ 112 px).

---

## Reste à faire

| Chantier | Volume |
|---|---|
| Dégraissage des 5 pages produit + landings | 47 titres bicolores, 21 emoji |
| 3 outils gratuits (simulateur brut/net, modèle de facture, charges sociales) | Le plus gros levier de trafic |
| 2 articles de septembre | Post-échéance du 1er septembre |
| Logos clients | Demander l'accord écrit + les fichiers officiels |
