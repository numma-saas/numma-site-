# NUMMA — Lot v17

**Territoire e-reporting 2027 · nouveaux tarifs paie · correctifs de conformité**
17 septembre 2026

> Dossier complet : 54 pages HTML, CSS, JS, sitemap, robots, llms.txt. À déposer comme d'habitude.

---

## 1. Tes trois demandes du jour

### Tarif paie : 27 € Pro / 25 € Business

Appliqué sur **11 pages** et dans le calculateur de ROI. Le libellé devient « Fiche de paie & RH » partout, parce que le tarif ne couvre plus seulement le bulletin.

**Le repositionnement.** Le site opposait jusqu'ici nos 15/10 € aux 25-35 € d'un cabinet. À 27 €, cet argument tombe. Je l'ai remplacé par celui-ci, qui est plus solide parce qu'il est vérifiable :

> « C'est l'ordre de prix d'un cabinet. La différence est ailleurs : un cabinet vous livre un bulletin. Ici, le même tarif couvre aussi les demandes de congés, la répartition par équipe, la DSN et les documents du salarié. »

**Le périmètre RH que j'ai écrit — à valider avant publication.** Tu m'as demandé de te faire la liste. Voici exactement ce qui est affirmé sur le site aujourd'hui. Barre ce qui est faux, je corrige :

| Élément | Où c'est affirmé | Réel ? |
|---|---|---|
| Édition automatique du bulletin | tarifs, index, paie-rh | ☐ |
| DSN nominative et télétransmission | tarifs, index, paie-rh | ☐ |
| Envoi sécurisé au salarié | tarifs | ☐ |
| Self-service salarié | tarifs, BTP | ☐ |
| **Demandes de congés** | tarifs, index (ajouté par toi) | ☐ |
| **Répartition par équipe** | tarifs, index (ajouté par toi) | ☐ |
| Notes de frais | tarifs (plan Business) | ☐ |
| Documents du salarié | index, tarifs FAQ | ☐ |
| Multi-conventions collectives | paie-rh, BTP, agence, commerce | ☐ |

Les deux lignes en gras viennent de toi. Les autres étaient déjà sur le site avant moi : si l'une n'existe pas, c'est une promesse commerciale à corriger.

### Titre coupé sur mobile — trouvé, et c'était un vrai défaut

Le H1 de la page d'accueil est découpé en mots par JavaScript pour l'animation d'apparition. Le CSS pose `opacity: 0` sur chaque mot, et le JS les révèle un par un avec un décalage de 55 ms.

Conséquence sur un téléphone lent : le titre reste partiellement invisible pendant près d'une seconde. C'est exactement ce que tu as vu.

Deux effets, pas un seul :

1. Le titre apparaît incomplet, ce qui fait amateur sur la première chose que voit un visiteur.
2. **Ce titre est l'élément LCP de la page.** Le masquer au chargement dégrade directement la note mobile — celle que tu cherches à faire remonter depuis des semaines.

**Correction :** l'animation mot à mot est désactivée en dessous de 768 px, avec un filet CSS qui garantit que les mots ne peuvent jamais rester masqués sur mobile. L'animation reste active sur ordinateur, où elle ne coûte rien.

J'ai vérifié au passage que le titre ne déborde pas horizontalement : à 320, 360, 375 et 390 px, il tient, y compris si la police Inter ne se charge pas.

### Plan backlinks

Dans un fichier séparé : `PLAN-BACKLINKS.md`. Nominatif, avec les messages types à envoyer.

Le point à retenir : **les quatre premières actions prennent une demi-journée et tu n'en as fait aucune.** France Num (`.gouv.fr`) est le meilleur lien accessible à une entreprise comme la tienne, et il est gratuit.

---

## 2. Le territoire e-reporting 2027

C'est le cœur du lot. Avant aujourd'hui, le mot « e-reporting » apparaissait sur **une seule page** de tout le site.

Or l'obligation d'émettre **et** l'e-reporting tombent le même jour pour les TPE et PME : **le 1er septembre 2027**. Douze mois. Presque personne ne traite ce sujet côté TPE aujourd'hui — d'où l'intérêt d'y être en premier.

Trois pages nouvelles, avec maillage croisé :

| Page | Mots | Cible |
|---|---|---|
| `e-reporting.html` | 2 510 | Page pilier : qui, quoi, quelle fréquence, quelles sanctions |
| `blog/facturation-electronique-2027-obligation-emettre.html` | 1 580 | Ce qui change au quotidien, calendrier mois par mois |
| `blog/choisir-plateforme-agreee.html` | 1 408 | Les 6 questions à poser à un éditeur |

Toutes les trois avec schémas Article, FAQPage et BreadcrumbList. Ajoutées au mega-menu (54 pages), au sitemap, à blog.html et à llms.txt.

**Sources vérifiées avant écriture** : calendrier officiel, article 1737 III et article 1788 D du CGI, barème relevé par la loi de finances 2026, documentation Fiducial mise à jour au 01/09/2026.

---

## 3. Deux erreurs factuelles corrigées

### Les sanctions affichées étaient fausses

Le site annonçait **250 € par transmission d'e-reporting manquante, plafonnées à 45 000 €/an**. Les deux chiffres sont faux depuis la loi de finances 2026. Il affichait aussi **15 € par facture** là où c'est désormais 50 €.

Barème corrigé, sur `blog/facturation-electronique-2026.html`, le livre blanc et `blog/5-signes-changer-logiciel-comptable.html` :

| Manquement | Montant | Plafond annuel |
|---|---|---|
| Facture B2B émise hors Plateforme Agréée | **50 €** / facture (art. 1737 III CGI) | 15 000 € |
| Transmission d'e-reporting non effectuée | **500 €** / transmission (art. 1788 D CGI) | 15 000 € |
| Absence de Plateforme Agréée en réception | **500 €** après mise en demeure de 3 mois | — |

Le livre blanc citait en plus **les articles L. 62 et L. 89 du CGI**, qui ne traitent pas de la facturation électronique. Supprimés.

Sur un site de conformité, une sanction fausse est le genre d'erreur qu'un prospect averti repère immédiatement.

### « PDP » → « Plateforme Agréée (PA) »

**85 occurrences sur 17 pages.** Le terme officiel a changé en juillet 2025. La forme retenue est « Plateforme Agréée (PA, ex-PDP) » à la première mention de chaque page, ce qui garde le bénéfice sur les recherches encore faites avec « PDP ».

---

## 4. Autres incohérences trouvées en passant

- `logiciel-gestion-agence.html` — « paie SYNTEC 120 €/mois (12 bulletins × 10 €) » et le total annuel qui en découlait. Recalculé.
- `logiciel-gestion-agence.html` et `logiciel-gestion-commerce-detail.html` — le prix cabinet était annoncé à 15-20 €/bulletin, alors que le reste du site dit 25-35 €. Aligné.
- `blog/pennylane-vs-numma-2026.html` et `logiciel-gestion-btp.html` — même incohérence sur le prix d'un bulletin en cabinet. Aligné à 28 €.
- Lien mort `<a href="#">Centre d'aide</a>` supprimé du pied de page.

---

## 5. Vérifications

- 54 pages HTML — **0 lien interne mort**
- Tous les blocs JSON-LD — **0 erreur de syntaxe**
- Prix au bulletin — **seuls 27 € et 25 € subsistent** côté NUMMA ; les 28 € et 4 € restants sont des prix concurrents assumés
- « PDP » hors « ex-PDP » — **plus aucune occurrence involontaire**
- Titre mobile — mesuré à 320, 360, 375 et 390 px, avec et sans la police Inter

---

## 6. Ce qui reste, pour le lot suivant

| Sujet | État |
|---|---|
| Étoffer les 3 articles minces | `facturation-electronique-2026` (703 mots), `choisir-logiciel-compta` (712), `tva-auto-liquidation` (584). URLs déjà connues de Google, il leur manque de la matière. |
| 4 pages « alternative à… » | Pennylane, Sage, Cegid, cabinet comptable. Intention d'achat. |
| Calculateur de charges sociales + vérificateur de mentions | Les deux prochains outils gratuits. |
| « Éditeur certifié GIP-MDS » et « 4 h → 5 min » | **Toujours non vérifiées.** Dans `blog/dsn-2026-guide-complet.html`. Je les garde ou je les retire ? |
| Logos clients | En attente d'autorisation écrite + fichiers officiels. |

---

## Déploiement

Après mise en ligne, Search Console → **Demander une indexation** sur `e-reporting.html` en priorité. C'est la page qui a le plus de chances de se positionner vite, parce que la concurrence y est encore faible.
