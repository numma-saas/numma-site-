# CHANGELOG v46 — 3 novembre 2026

32 fichiers du site + 5 aperçus. À déposer sur GitHub (numma-saas/numma-site-, branche main) en remplaçant les fichiers existants. Scalingo redéploie tout seul.

Aucun changement SEO : pas de title, d'URL ni de canonical modifiés. Seules les meta descriptions des 4 pages légales changent, car elles citaient OVH.

---

## 1. Pages métier : bloc « démo + essai » refait (17 pages `logiciel-*.html`)

**Haut de page** : sous les deux boutons, une nouvelle ligne avec des coches vertes : *14 jours gratuits · Sans carte bancaire · Sans engagement · Démo de 30 min avec un expert*.

**Bas de page** : l'ancien bandeau violet est remplacé par un bloc en deux colonnes.

- **À gauche** :
  - une étiquette « Démo gratuite · 30 minutes en visio » ;
  - le titre et le texte de la page, inchangés ;
  - trois pastilles blanches bien visibles : 14 jours d'essai gratuit / Sans carte bancaire / Sans engagement.
- **À droite**, une carte « Mallory — Cofondateur de NUMMA » (initiale M, pas de photo) avec :
  - le gros bouton blanc « Réserver ma démo de 30 min » ;
  - le lien « ou démarrer l'essai gratuit de 14 jours ».

Les liens gardent leur paramètre `?metier=…`, donc le suivi des demandes par métier continue de marcher.

**Inchangés** : titres, textes, prix et FAQ.

---

## 2. Ressources (blog.html) : page allégée

Chaque thème affiche 5 liens. Les suivants sont dans un dépliant « Voir les N autres ».

- 7 thèmes sur 9 sont concernés. Trésorerie et Architecture ont 6 liens et restent entièrement ouverts.
- Tous les liens restent dans le code de la page : Google les voit toujours, le maillage interne ne change pas.

---

## 3. Hébergement : tout le site dit « Scalingo, en France »

### Pages légales

**mentions-legales.html**

- Hébergement du site : GitHub (États-Unis) remplacé par Scalingo SAS, 13 rue Jacques Peirotes, 67000 Strasbourg (SIREN 808 665 483, vérifié), sur l'infrastructure 3DS Outscale à Paris.
- Hébergement des données : OVH et Scaleway remplacés par Scalingo.
- Cookies : Google Analytics est maintenant nommé.

**politique-confidentialite.html**

- Hébergement : Scalingo.
- Nouveau tableau des sous-traitants, d'après ta liste : Scalingo, Mistral, Anthropic, Resend, Sentry, Bridge, SEQINO, OpenPaye, Stripe. S'y ajoutent Google Analytics, Google Workspace et GitHub côté site.
- Nouvelle section sur les transferts hors UE.
- Retirés : SendGrid, « aucune donnée hors UE » et la mention d'un DPO. Les questions passent par contact@numma.eu.

**dpa.html** (version 1.1)

- Art. 6 : nouvelle liste des sous-traitants.
- Art. 7 (sécurité) : ne garde que le vérifié :
  - hébergement Scalingo en France ;
  - HTTPS ;
  - droits par utilisateur ;
  - sauvegardes chez l'hébergeur ;
  - confidentialité.
- Art. 9 : transferts hors UE réécrits.
- Art. 10 : « rapports de pentest et certifications » retiré.
- Art. 2 : « PPF / PA » remplacé par « la Plateforme Agréée SEQINO ».

**securite.html** (page réécrite, title inchangé)

- Retiré, car non vérifié ou faux :
  - OVH et Scaleway ;
  - « aucune donnée hors UE » ;
  - AES-256 et HSM ;
  - double authentification obligatoire ;
  - sauvegardes toutes les 4 h sur deux datacenters ;
  - pentest PASSI et bug bounty ;
  - plan de continuité multi-AZ ;
  - option HDS ;
  - Budget Insight ;
  - « réponse sous 4 h » ;
  - « 15 % du budget tech » ;
  - documents sur demande (rapport de pentest, plan d'assurance sécurité).
- Gardé ou ajouté :
  - hébergement Scalingo / Outscale Paris ;
  - HTTPS ;
  - droits par utilisateur ;
  - sauvegardes ;
  - Bridge et Stripe ;
  - sous-traitants publiés ;
  - transferts hors UE expliqués ;
  - signalement de faille.

**cgv.html** (version 1.1)

- Art. 6 : ajout de la ligne « Hébergement : en France, chez Scalingo… ».
- « Sauvegardes : quotidiennes, redondées sur 2 datacenters européens » devient « Sauvegardes : quotidiennes, chez notre hébergeur en France ».

**cgu.html** (version 1.1)

- Art. 3 : ajout d'un paragraphe sur l'hébergement en France chez Scalingo, avec un lien vers le DPA.

### Pages commerciales : « OVH / Scaleway » remplacé par « Scalingo »

- **index.html** : FAQ « Mes données sont-elles hébergées en France ? », dans le texte visible et dans les données structurées.
- **a-propos.html** : une phrase.
- **micro-entreprise.html** : 3 endroits. « Pas de Cloud Act américain sur vos données comptables » est retiré, car c'est faux avec Anthropic, Sentry et Stripe comme sous-traitants.
- **blog/logiciel-expert-comptable-2026.html** : « Conformité de niveau bancaire… audit de sécurité annuel » devient « Données hébergées en France — chez Scalingo, DPA en ligne, échanges chiffrés ».
- **blog/saas-rh-pme-guide-2026.html** : une phrase.
- **blog/sage-vs-numma-2026.html** : « hébergement 100 % français » devient « hébergé en France chez Scalingo ».
- **tresorerie.html** : « Via Bridge / Budget Insight » devient « Via Bridge ».

Non modifiés : deux articles de conseil (*7 critères*, *Digitaliser sa compta*) citent OVH et Scaleway comme exemples d'hébergeurs français. Ils ne parlent pas de NUMMA.

---

## 4. À vérifier (Mallo, Gauthier ou la personne qui relit le RGPD)

Les textes publiés n'affirment que ce qui est vérifié. Restent à confirmer :

1. **Transferts hors UE** (Anthropic, Resend, Sentry, Stripe, Google) : le texte dit qu'ils sont encadrés par les clauses contractuelles types et/ou le Data Privacy Framework. Il faut vérifier que les accords de traitement de ces fournisseurs sont bien acceptés côté NUMMA. [À CONFIRMER PAR MALLO]
2. **Sentry et Resend** : les données sont-elles stockées dans l'UE ou aux États-Unis ? Le tableau indique « États-Unis » par prudence. [À CONFIRMER PAR MALLO]
3. **Sauvegardes « quotidiennes »** (CGV) : le plan de base de données Scalingo du logiciel les inclut-il ? Le SLA (RPO 24 h / RTO 4 h, 99,9 %) reste inchangé. [À CONFIRMER PAR MALLO]
4. **Double authentification** : les CGU (art. 4) disent toujours qu'elle est disponible. Est-ce vrai dans le logiciel ? [À CONFIRMER PAR MALLO]
5. **Marque INPI** : la phrase « NUMMA est une marque déposée » est conservée. Si la marque n'est pas déposée, il faut la retirer. [À CONFIRMER PAR MALLO]
6. **Délai de 24 h** pour prévenir un client en cas de fuite de données (DPA, art. 5) : conservé. Est-il tenable ? [À CONFIRMER PAR MALLO]
7. **Clients actuels** : les CGU (art. 10) prévoient un e-mail 30 jours avant une modification. Ici, seul l'hébergement change, mais un court e-mail aux clients est plus sûr. Je peux le rédiger.

---

## 5. Pour les prochaines pages métier

`mk_metier.py` applique désormais ce nouveau bloc automatiquement.
