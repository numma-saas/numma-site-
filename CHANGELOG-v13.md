# CHANGELOG v13 — Optimisation Lighthouse

Corrections issues de ton audit. **Aucune modification de contenu, d'URL, de title, de meta ni de schéma** — le SEO reste intact et s'améliore (le CLS est un critère de classement Google).

## 1. Logo : le plus gros gain — 26 Ko économisés sur CHAQUE page

Le fichier `logo.jpg` faisait **1280×1280 pixels pour un affichage en 36×36**. Lighthouse le signalait sur mobile et desktop.

| | Avant | Après |
|---|---|---|
| Fichier | logo.jpg — 31,8 Ko | logo-96.png — **5,3 Ko** |
| Balises `<img>` mises à jour | — | **100 sur 50 pages** |

⚠️ Les références dans les schémas JSON-LD pointent toujours vers `logo.jpg` : Google exige au moins 112 px pour le logo d'éditeur. C'est volontaire, ne le change pas.

## 2. CLS 0.168 → réservation de l'espace du hero

Le décalage de mise en page venait de `.hero-visual`, le mockup de la homepage, qui n'avait pas de dimensions réservées. J'ai mesuré son ratio réel sur le site en production (1,527 en desktop, 1,562 en mobile) et posé `aspect-ratio: 1.53`.

**Le CLS fait partie des Core Web Vitals, donc des critères de classement.** C'est la correction qui a le plus d'impact SEO du lot.

## 3. Accessibilité (95 → attendu 100)

- **Contraste du footer** : `--ink-400` et `--ink-500` étaient trop clairs sur le fond sombre. Remplacés par des gris plus contrastés (#C7C9D4, #BFC2CE, #D6D8E1).
- **Ordre des titres** : les `<h4>` des colonnes du footer cassaient la hiérarchie (h2 → h4). Convertis en `<p class="footer-h">`, rendu visuel identique. **200 occurrences sur 50 pages.**

## 4. Animation composée

`.ai-fab` animait `box-shadow`, que le navigateur ne peut pas composer sur le GPU. Remplacé par `transform` + `opacity`.

## 5. llms.txt — navigation agentique

Nouveau fichier `llms.txt` à la racine : résumé structuré du site pour les agents IA (ChatGPT, Perplexity, Claude…). C'était le seul audit non passé de la catégorie « Navigation agentique ». Renvoi ajouté dans `robots.txt`.

Il contient aussi le calendrier correct de la facturation électronique — utile pour que les IA citent la bonne information.

## ⚠️ Deux points que je ne peux pas corriger depuis le code

**Les en-têtes de sécurité** (CSP, HSTS, COOP, X-Frame-Options) sont signalés en gravité élevée. Ils se définissent au niveau du serveur — **GitHub Pages ne le permet pas**. Il faudrait passer par Cloudflare (gratuit) en proxy devant le domaine. Ça n'affecte ni le score « Bonnes pratiques » (déjà à 100) ni le SEO.

**Le cache de 10 minutes** est la valeur imposée par GitHub Pages. Même remarque : Cloudflare le corrigerait.

## 🔍 Une anomalie dans ton rapport

Le rapport desktop montre un appel à **`hit-pool.upscore.com` avec 2 654 ms de latence** sur le chemin critique. **Ce domaine n'existe nulle part dans ton code** — je l'ai cherché dans les 50 pages HTML et les fichiers JS.

C'est presque certainement une **extension de navigateur** sur la machine qui a lancé le test. Relance l'audit en navigation privée avec les extensions désactivées : le score de performance devrait remonter.

## ✅ Vérifications

- 0 lien mort, 0 image morte sur les 50 pages
- JSON-LD valides partout
- sitemap.xml valide

## 📮 À uploader

Tout le dossier, en écrasant l'existant : les 50 HTML, `css/style.css`, `images/logo-96.png`, `images/logo-192.png`, `llms.txt`, `robots.txt`.

⚠️ Ne supprime pas `images/logo.jpg` du dépôt : les schémas JSON-LD l'utilisent toujours.
