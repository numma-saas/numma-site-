# CHANGELOG v50 — 4 novembre 2026 : bars, boulangeries, boutiques

15 fichiers du site à déposer sur GitHub, en respectant les dossiers. Le dossier `APERCU v50` sert seulement à voir le rendu : il ne va pas sur GitHub.

---

## Nouveau (8 fichiers)

| Fichier | Ce que c'est | Recherches visées |
|---|---|---|
| `logiciel-gestion-bar.html` | Page métier **bars, cafés et brasseries** | « logiciel gestion bar », « logiciel de gestion de bar et restaurant », « logiciel gestion café » |
| `logiciel-gestion-boulangerie.html` | Page métier **boulangeries-pâtisseries** | « logiciel gestion boulangerie », « logiciel boulangerie pâtisserie », « logiciel facturation boulangerie » |
| `logiciel-gestion-boutique.html` | Page métier **boutiques et magasins indépendants** (prêt-à-porter, déco, cave, fleuriste, librairie) | « logiciel gestion boutique », « logiciel gestion magasin », « logiciel comptabilité magasin » |
| `blog/facture-electronique-restaurant-bar-commerce.html` | Article : ce qui change pour les restaurants, bars et commerces en 2026 et 2027 | « facture électronique restaurant », « facture électronique bar », « obligation facture électronique restaurant » |
| `images/og/bar.jpg`, `boulangerie.jpg`, `boutique.jpg`, `blog-facture-electronique-restaurant-bar-commerce.jpg` | Images de partage (LinkedIn, WhatsApp, Facebook) | — |

Ces recherches viennent des suggestions Google relevées le 4/11. Les volumes ne sont pas disponibles : les crédits Semrush sont épuisés.

Chaque page métier suit le modèle des pages restaurant et commerce (v44) :
- les 4 douleurs du métier ;
- les modules ;
- l'encadré expert-comptable ;
- 3 cas chiffrés avec les prix publics ;
- un nouveau bloc **« Ce que NUMMA ne fait pas »** : pas une caisse, pas de stock, pas de planning, pas de boutique en ligne ;
- les règles du métier ;
- une FAQ, puis la démo en premier.

Les boutons de démo transmettent le métier (`?metier=bar`, `boulangerie`, `boutique`), et la page de démo affiche « pour les bars et cafés », etc.

## Modifié (7 fichiers) — ce qui change exactement

| Fichier | Changement |
|---|---|
| `logiciel-gestion-hotel-restaurant.html` | **Une phrase ajoutée** en bas de page : liens vers les bars et les boulangeries. Rien d'autre. |
| `logiciel-gestion-commerce-detail.html` | **Une phrase réécrite** en bas de page (« Vous tenez un restaurant ou un café ? ») : elle renvoie maintenant aussi vers les bars, les boulangeries et les boutiques. Rien d'autre. |
| `index.html` | **Une ligne ajoutée** sous la grille « Solutions métier » : « Aussi : Bars & cafés · Boulangeries-pâtisseries · Boutiques & magasins · Plombiers-chauffagistes · Électriciens ». Rien d'autre. |
| `blog.html` | La carte du nouvel article, le compteur (54 articles), l'article ajouté au thème « Facture électronique ». |
| `sitemap.xml` | 4 nouvelles adresses ; date mise à jour pour les pages restaurant et commerce. |
| `llms.txt` | 4 lignes pour les nouvelles pages (lu par ChatGPT, Claude, etc.). |
| `js/main.js` | Il reconnaît les pages bar, boulangerie et boutique comme métier d'origine, et ajoute leur libellé sur la page de démo. **Ce fichier remplace celui de la v49** ; le reste du suivi des demandes est inchangé. |

## Faits utilisés (vérifiés)

- **TVA bars** : 20 % sur l'alcool, 10 % sur les boissons sans alcool et la restauration servies sur place. Déjà sur la page restaurant (v44).
- **TVA boulangerie** (BOFiP, BOI-TVA-LIQ-30-10-10, et son annexe BOI-ANNX-000495) :
  - 5,5 % pour le pain, les viennoiseries et les pâtisseries à emporter ;
  - 10 % pour le snacking à consommer tout de suite et ce qui est servi sur place ;
  - 20 % pour la confiserie et les chocolats hors pâtisserie, et l'alcool.

  La page renvoie vers l'expert-comptable pour un produit précis.
- **Conventions collectives** : HCR (IDCC 1979), boulangerie-pâtisserie artisanale (IDCC 843), commerce de détail non alimentaire (IDCC 1517).
- **HCR, repris de la v44** : avantage nourriture 4,35 € depuis le 1er juin 2026 ; pourboires exonérés jusqu'au 31/12/2028 (1,6 SMIC) ; caisse sécurisée (amende 7 500 €).
- **Calendrier de la facture électronique et de l'e-reporting** : repris de la page e-reporting déjà publiée.

## Volontairement absent [À CONFIRMER PAR MALLO]

Je n'écris rien de ce qui suit tant que tu ne l'as pas confirmé :
- la paie spécifique HCR (extras, repas, pourboires) dans NUMMA ;
- la ventilation automatique de la TVA depuis le ticket Z ;
- l'import automatique depuis les caisses ;
- l'e-reporting automatique.

Les pages disent seulement « NUMMA en tire les écritures de ventes ».

**Remarque** : la page d'accueil (« paie HCR ») et `llms.txt` (« paie HCR ») parlent déjà de paie HCR depuis les versions précédentes. Je ne l'ai pas touché. Si ce n'est pas confirmé, dis-le-moi et je le retire.

## Après le dépôt

Je vérifie que les 15 fichiers en ligne sont identiques à la livraison, puis je demande l'indexation des 4 nouvelles pages dans la Search Console. La limite est d'environ 10 demandes par jour, et celles d'aujourd'hui sont déjà faites.
