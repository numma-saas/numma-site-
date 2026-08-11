# CHANGELOG v12 — 11 août 2026
## Correction du calendrier de la facturation électronique

**9 fichiers.** Correctif de fond : le site confondait par endroits l'obligation de *réception* et celle d'*émission*, et écrivait l'échéance au passé alors qu'elle n'est pas encore survenue.

## Le calendrier de référence (vérifié)

| Date | Obligation | Qui |
|---|---|---|
| 1er septembre 2026 | **Réception** de factures électroniques | **Toutes** les entreprises assujetties à la TVA, sans exception |
| 1er septembre 2026 | **Émission** | Grandes entreprises et ETI uniquement |
| 1er septembre 2027 | **Émission** | TPE, PME et micro-entreprises |

Source : décret et arrêté du 27 juillet 2026, DGFiP. Aucun report supplémentaire annoncé.

## 1. Erreurs factuelles corrigées

**`livre-blanc-facturation-electronique-2026.html`** — c'était la plus grave.
> Avant : « Le 1er septembre 2026, toutes les entreprises françaises devront **émettre et recevoir** leurs factures B2B au format électronique »

Faux : l'émission pour les TPE/PME est en 2027. Réécrit avec la distinction réception / émission explicite.

**`livre-blanc-facturation-electronique-2026-contenu.html`** — l'intro du chapitre 1 affirmait que toute facture B2B devait être émise au format structuré dès 2026. Nuancé. (Le tableau du calendrier du chapitre était déjà correct.)

**`blog/logiciel-expert-comptable-2026.html`** (×2, dont un dans un bloc FAQ JSON-LD) — « l'émission/réception devient obligatoire pour toutes les entreprises B2B » en 2026. Corrigé.

**`blog/7-criteres-choisir-logiciel-comptable-2026.html`** — « toute facture B2B doit passer par une PDP » sans distinction. Corrigé.

**`blog/sage-vs-numma-2026.html`** — « mise en obligation généralisée en septembre 2026 ». Précisé en obligation de réception.

## 2. Temps verbal — l'échéance est à venir, pas passée

Cinq pages écrivaient « **Depuis** septembre 2026 » alors que nous sommes en août 2026. Remplacé par « À partir de septembre 2026 ».

Fichiers : `blog/digitaliser-comptabilite-tpe-pme.html`, `blog/5-signes-changer-logiciel-comptable.html`, `blog/7-criteres-choisir-logiciel-comptable-2026.html`, `livre-blanc-roi-numma-contenu.html`, `micro-entreprise.html`.

## 3. Terminologie

Sur les passages réécrits uniquement, « PDP » est devenu « **Plateforme Agréée (PA, ex-PDP)** » — l'administration a abandonné le sigle PDP en juillet 2025. La forme « PA, ex-PDP » conserve la valeur SEO de l'ancien terme.

⚠️ Le reste du site emploie encore « PDP » (~15 pages). Passe complète non effectuée : elle reste à valider.

## ✅ Vérifications

- 0 lien mort sur les 52 pages
- JSON-LD valides (dont la FAQ modifiée de l'article expert-comptable)
- sitemap.xml valide
- Plus aucune occurrence de « Depuis septembre 2026 » ni de « devront émettre et recevoir »

## 📮 À uploader

Les 9 fichiers de ce dossier, en écrasant l'existant. Le dossier `blog/` écrase le `blog/` du repo.
