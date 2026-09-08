# CHANGELOG v15 — Titres, ciblage SEO, dégraissage

**Contient tout le lot v14** (que tu n'avais pas encore uploadé) **plus les corrections ci-dessous.**

---

## ⚠️ À uploader — ne pas oublier

| Élément | Pourquoi |
|---|---|
| **`js/main.js`** | Pilotage du mega-menu. Sans lui, le survol redevient capricieux. |
| **`images/app/`** | Les 5 captures de la homepage. |
| **`css/style.css`** | Tout le design en dépend. |

---

## 1. Titres réécrits — les 29 pages

**Le titre d'accueil**, comme demandé, avec un seul tiret :

> `NUMMA - Logiciel de gestion tout-en-un pour TPE et PME`

**10 titres dépassaient 60 caractères** et étaient donc tronqués par Google. Aucun ne dépasse désormais. Longueur moyenne : 45 caractères.

**Changement de logique sur les pages internes.** Elles plaçaient toutes « NUMMA » en tête, or c'est le début du titre qui compte le plus pour Google — et personne ne cherche encore ta marque. Le mot-clé passe donc devant, la marque derrière :

| Avant | Après |
|---|---|
| Logiciel de comptabilité en ligne — NUMMA (FEC, TVA, bilan) | Logiciel de comptabilité en ligne TPE/PME \| NUMMA |
| Logiciel de paie & RH — NUMMA (fiches de paie, DSN, congés) | Logiciel de paie et DSN pour TPE et PME \| NUMMA |
| Tarifs NUMMA — À partir de 19 €/mois · 14 jours gratuits sans CB | Tarifs : à partir de 19 € HT par mois \| NUMMA |

Un seul séparateur partout. L'accueil garde la marque en tête pour l'identité.

## 2. Meta descriptions — 11 réécrites

Elles allaient jusqu'à **241 caractères**, soit largement tronquées. Toutes tiennent maintenant entre 110 et 158 caractères, la fenêtre où Google affiche tout.

## 3. Schémas de structure ajoutés sur l'accueil

Deux nouveaux blocs, qui portent à cinq le nombre de schémas de la page :

- **`WebSite`** — déclare la marque et sa langue
- **`ItemList` / `SiteNavigationElement`** — déclare explicitement les 7 pages principales et leur description

C'est le signal le plus direct qu'on puisse envoyer à Google sur la structure du site. Voir la note sur les sitelinks plus bas.

## 4. Dégraissage terminé

| | Avant | Après |
|---|---|---|
| Titres bicolores | 76 | **34** — un seul par page |
| Emoji | 212 | **0** |

125 emoji et 30 titres bicolores retirés sur 27 fichiers. Contrôle d'équilibre des balises `<span>` passé sur chaque fichier modifié.

---

## 🔎 Sur les sitelinks — la réponse honnête

**On ne peut pas forcer les liens multiples sous le résultat Google.** Il n'existe aucune balise, aucun réglage, aucune demande possible. Google les génère seul, et il n'y a pas de délai garanti.

Ce qui les déclenche, dans l'ordre d'importance :

1. **Le volume de recherches sur ta marque.** Les sitelinks apparaissent surtout sur les requêtes de marque — quand quelqu'un tape « numma ». Aujourd'hui, presque personne ne le fait. C'est le facteur numéro un, et il ne se règle pas dans le code.
2. **Une structure claire.** Fait : mega-menu sur 50 pages, titres uniques, schéma de navigation.
3. **Les clics.** Google observe quelles pages les visiteurs choisissent depuis les résultats.
4. **L'ancienneté et l'autorité.** Ton site a quelques mois.

Volteyr a ses sitelinks parce que son nom est cherché régulièrement. C'est la conséquence du trafic, pas sa cause.

---

## ✅ Vérifications

- 50 pages : 0 lien mort, 0 image morte
- JSON-LD valides partout (accueil : 5 blocs)
- Balises `<span>` équilibrées après dégraissage
- sitemap.xml valide
- Titres : 24 à 54 caractères, aucun tronqué
- Descriptions : 110 à 158 caractères

---

## À vérifier après déploiement

1. **Le mega-menu** : survoler « Solutions », descendre, cliquer.
2. **Le hero animé** : cartes, compteur, barres.
3. **Google Analytics en temps réel.**
4. **Search Console** : soumettre à nouveau le sitemap pour accélérer la prise en compte des nouveaux titres.
