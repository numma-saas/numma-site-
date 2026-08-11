# CHANGELOG v11 — 10 août 2026

24 fichiers. Base : v10 déjà déployée en production (vérifiée).

## 🆕 Nouvelle page : essai-gratuit.html

Landing de conversion dédiée, pensée pour le trafic LinkedIn et SEO.

- Promesse alignée sur le parcours réel : 14 jours · sans carte bancaire · sans engagement · **activation sous 24 h ouvrées**
- Déroulé en 4 étapes (formulaire → configuration → accès → essai) qui transforme le contact humain en argument plutôt qu'en friction
- Formulaire court : 4 champs obligatoires (prénom, nom, email, entreprise)
- **Nouveau champ de qualification** : « Aujourd'hui, vous gérez avec… » (Excel / autre logiciel / cabinet / rien)
- Bloc dédié « Vous venez d'Excel ? »
- FAQ 6 questions + schémas WebPage, FAQPage, BreadcrumbList
- Formulaire branché sur le **même endpoint Apps Script** que contact.html

## 🔗 Rebranchement des CTA (21 fichiers, 31 liens)

Tous les boutons dont le libellé contient « Essai » pointaient vers `contact.html`.
Ils pointent désormais vers `essai-gratuit.html`.

Les liens « Contact » de la navigation et du footer sont **inchangés** : ils continuent de mener à `contact.html`.

Fichiers concernés : index, tresorerie, securite, mentions-legales, cgv, cgu, dpa, paie-rh, fonctionnalites, a-propos, facturation-electronique, comptabilite, politique-confidentialite + 8 articles blog.

## 🐛 Correction de 4 liens morts en production (404)

| Page | Lien cassé | Remplacé par |
|---|---|---|
| blog/pcg-2025-nouveautes.html | loi-anti-fraude-tva-caisse.html | automatiser-tva-2026-8-leviers.html |
| blog/piloter-tresorerie-tpe-pme-2026.html | 13-kpi-tresorerie-suivre.html (×3) | 2 mentions supprimées, 1 carte remplacée par le livre blanc Trésorerie |

Ces articles n'ont jamais été écrits. Les liens renvoyaient un 404 aux visiteurs et aux robots.

## 🗺️ sitemap.xml

Ajout de `essai-gratuit.html` (priorité 0.95).

## ✅ Vérifications passées

- **0 lien mort** sur l'ensemble du site (51 pages scannées)
- JSON-LD valides sur toutes les pages
- sitemap.xml valide XML
- Un seul `form[data-contact]` sur la landing (le JS n'en gère qu'un)

## ⚠️ Action requise côté Google Sheet

Le formulaire envoie un champ supplémentaire : **`current`** (« Aujourd'hui, vous gérez avec… »).
Selon la façon dont ton Apps Script écrit les lignes, il faudra peut-être **ajouter une colonne `current`** dans la feuille pour ne pas perdre l'information.

Le champ `source` est déjà envoyé automatiquement par `js/main.js` : il vaudra `/essai-gratuit.html`, ce qui te permet de distinguer les leads LinkedIn des demandes de contact classiques.

## 📮 À uploader

Tout le contenu de ce dossier, en écrasant l'existant sur GitHub. Le dossier `blog/` écrase le `blog/` du repo.
