# NUMMA — Lot v20 (seul)

À déposer **par-dessus le v19**. 26 fichiers + `css/style.css`.

## 1. Quatre pages « alternative à… »

Ce sont les visiteurs les plus proches de l'achat : quelqu'un qui tape « alternative à Pennylane » a déjà décidé de changer d'outil.

| Page | Requêtes visées |
|---|---|
| `blog/alternative-pennylane.html` | alternative Pennylane, concurrent Pennylane, Pennylane prix |
| `blog/alternative-sage.html` | alternative Sage, remplacer Sage, quitter Sage |
| `blog/alternative-cegid.html` | alternative Cegid, quitter Cegid, Quadra alternative |
| `blog/alternative-cabinet-comptable.html` | alternative expert-comptable, réduire ses honoraires |

**Le parti pris : chaque page dit quand il vaut mieux rester chez le concurrent.** Ce n'est pas de la modestie : un comparatif qui dit « nous sommes meilleurs sur tout » ne convainc personne, alors qu'un comparatif honnête est cru, partagé et cité.

- Les **prix concurrents** viennent de sources publiques relevées en octobre 2026, avec une mention invitant à vérifier. Pour Cegid, qui ne publie pas ses prix, on le dit plutôt que d'inventer un chiffre.
- La page **cabinet comptable** ne prétend pas remplacer l'expert-comptable : on reprend la tenue, on lui laisse le bilan et le conseil. C'est exact, et ça évite de se mettre à dos les cabinets, qui sont aussi des prescripteurs.

Chaque page renvoie vers les trois autres et vers les comparatifs détaillés existants, qui renvoient eux aussi vers ces pages.

## 2. Les trois articles trop courts

| Article | Avant | Après |
|---|---|---|
| Facturation électronique 2026 | 703 mots | 1 641 mots — devient le guide complet de la réforme 2026-2027 : calendrier, concernés, formats, Plateforme Agréée, e-reporting, sanctions, plan de préparation |
| Autoliquidation de TVA | 584 mots | 1 389 mots — les 4 cas (BTP, services UE, biens UE, import), mentions, déclaration, exemple chiffré, erreurs |
| Choisir son logiciel compta | 712 mots | **fusionné** dans « 7 critères pour choisir son logiciel comptable » |

**Pourquoi fusionner plutôt qu'allonger le troisième** : le site avait trois pages sur la même requête (« choisir logiciel comptable »). Google ne sait pas laquelle classer et les trois se concurrencent. L'ancienne URL redirige vers l'article des 7 critères, et les 15 pages qui pointaient vers elle pointent maintenant directement vers le bon article.

## 3. Correctifs

- **Tableaux sur mobile** : la dernière colonne était coupée sur téléphone, c'est-à-dire la colonne NUMMA dans les comparatifs. Les tableaux tiennent maintenant dans l'écran. Ça corrige aussi tous les tableaux des articles e-reporting, paie et TVA.
- **Comparatif Sage** : l'article affirmait que Sage n'est pas Plateforme Agréée. Je n'ai pas pu le vérifier ; l'affirmation est retirée et remplacée par un renvoi à la liste officielle de la DGFiP. Écrire une chose fausse sur un concurrent nommé, c'est un risque juridique.

## 4. Backlinks

Voir `KIT-BACKLINKS-a-copier-coller.md` : tous les textes sont prêts (fiche Google, France Num, Capterra, message de demande d'avis client).

## Vérifications

0 lien mort, 0 JSON-LD invalide, 0 titre en double.

## Après mise en ligne

Search Console → Demander une indexation sur les 4 pages « alternative » et les 2 articles réécrits.
