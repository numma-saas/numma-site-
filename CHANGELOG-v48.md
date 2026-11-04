# CHANGELOG v48 — 4 novembre 2026 (contient la v47)

**Ce dossier remplace ENVOI v47.** Si la v47 n'est pas encore en ligne, dépose seulement ce dossier : il contient tout.

22 fichiers du site, plus des aperçus. Dépose-les sur GitHub en gardant les dossiers `blog/` et `images/og/`.

## Nouveau

### 4 pages issues de l'analyse des avis concurrents (chantier 2 du plan)

| Page | Pour qui | Pourquoi |
|---|---|---|
| `blog/alternative-abby.html` | Société qui embauche et qui utilise Abby | Abby ne présente pas de paie sur sa page tarifs ; NUMMA, si |
| `blog/alternative-tiime.html` | TPE qui veut garder sa banque | Tiime impose son compte pro sur une offre, et son prix dépend de l'effectif |
| `blog/changer-plateforme-agreee.html` | Toute entreprise bloquée par sa plateforme de facture électronique | Douleur n°2 des avis. La procédure officielle date de juillet 2026 et presque personne ne l'explique encore |
| `blog/changer-logiciel-gestion.html` | Dirigeant mécontent de son logiciel actuel | Couvre les douleurs n°1, 3, 4 et 6 : support, prix, résiliation, bugs |

**Comment les faits ont été vérifiés :**
- Abby : abby.fr/tarifs (offres sociétés) et abby.fr/ai-info.md, le 4 novembre 2026.
- Tiime : tiime.fr/tarifs, le 4 novembre 2026.
- Procédure de changement de Plateforme Agréée : décret n° 2026-677 et arrêté du 27 juillet 2026 (Légifrance), résumés par WebLex le 30 juillet 2026.
- Conservation des documents comptables, 10 ans : article L123-22 du code de commerce.

**Aucun dénigrement.** Chaque comparatif dit ce que fait bien le concurrent, quand rester chez lui, et cite ses prix datés. Aucune promesse sur notre support : elle attend ta confirmation (question 1 du plan).

### GEO

- **`informations-numma.html`** : la fiche d'identité officielle de NUMMA pour les IA, la presse et les clients. Elle donne la société, l'offre, les prix, l'hébergement, ce que NUMMA ne fait pas, et des consignes pour les assistants IA. Uniquement des faits vérifiés, avec des données structurées « Organisation » et « Logiciel ».
- **`llms-full.txt`** : la même chose en texte brut.
- **`llms.txt`** : pointe vers ces deux fichiers, et liste les 4 nouvelles pages et les 3 pages de petits déplacements.

### Venu de la v47

- 3 pages de petits déplacements : Hauts-de-France, Pays de la Loire, Isère.
- Le guide des petits déplacements passé à 10 territoires.
- Voir CHANGELOG-v47 pour le détail.

## Modifié (pages déjà validées)

- **`blog.html`** :
  - 7 nouvelles cartes dans les articles récents (compteur : 53) ;
  - Ressources : « Choisir son logiciel » gagne 3 liens, et « Facture électronique » gagne le lien vers le changement de plateforme.
- **`blog/choisir-plateforme-agreee.html`** : une phrase ajoutée à la question 5, avec un lien vers la procédure de changement. Rien d'autre ne change.
- **`a-propos.html`** : « Nos informations officielles » ajouté à la fin de la ligne « Souveraineté française ». Rien d'autre ne change.
- **`sitemap.xml`** : 8 nouvelles adresses au total. **`llms.txt`** : voir plus haut.

## À savoir

- **Mesure GEO de départ** : NUMMA n'est cité par aucune IA, même sur la question « NUMMA avis ». L'IA nous confond avec Numla et Numm. Le plan pour corriger ça est dans GEO-PLAN.md, à la racine du dossier NUMMA. La priorité n°1 est de créer les fiches Capterra, Appvizer et Google, avec de vrais avis clients.
- **Une phrase à vérifier sur une page déjà en ligne.** La page `alternative-indy.html`, en ligne depuis octobre, dit : « nous reprenons l'historique et les soldes… configuré sous 24 heures ». Je ne l'ai pas inventée cette semaine, mais je ne peux pas la vérifier. Confirme-la ou je la retire. [À CONFIRMER PAR MALLO]
