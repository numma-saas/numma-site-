# CHANGELOG v49 — 4 novembre 2026 : suivre chaque demande et chaque démo

> **État au 4/11, 20 h 34** : l'étape A est faite par Claude (script collé, version 3 déployée sur la même adresse, endpoint vérifié : « NUMMA endpoint actif »).
> Il te reste, dans Apps Script : choisir `syncDemos` → Exécuter → accepter les autorisations (Agenda, Sheet, Gmail), puis `installerDeclencheur` → Exécuter. Google n'ouvre la fenêtre d'autorisation que sur ton clic.
> Puis l'étape B (les 4 fichiers sur GitHub).

Deux choses à faire, dans cet ordre :
- **A. Le script Google** (10 minutes) : il se colle dans Google, pas sur GitHub.
- **B. Les 4 fichiers du site**, sur GitHub comme d'habitude.

Le prompt Claude Code (PROMPT-CLAUDE-CODE-MESURE-ADS.md) n'est plus nécessaire : tout ce qu'il demandait est dans cette version.

---

## Ce que ça change pour toi

Chaque demande arrive dans ton Google Sheet « NUMMA — Demandes du site » avec :
- **d'où elle vient** : Google, une IA, LinkedIn, Instagram, une campagne précise ;
- **la page par laquelle le visiteur est entré** sur le site, et son métier ;
- **ce qu'il a répondu** à « Comment avez-vous connu NUMMA ? » ;
- **pour une démo** : « en attente », puis « oui » et la date dès que le rendez-vous est réservé dans ton agenda.

Tu reçois aussi un e-mail par demande, avec la source dans le sujet. Par exemple : « Nouvelle demande de DÉMO — Atelier X [google / cpc / chauffagistes] [plombier] ».

---

## A. Le script Google (à faire en premier)

Fichier : `APPS-SCRIPT (à coller dans Google, pas sur GitHub)/Code.gs`

1. Ouvre le Google Sheet « NUMMA — Demandes du site », puis **Extensions → Apps Script**. Connecte-toi avec le compte qui a créé le script, sans doute contact@numma.eu.
2. Remplace tout le contenu de `Code.gs` par celui du fichier fourni, puis **Enregistrer**.
3. **Déployer → Gérer les déploiements → crayon (modifier) → Version : « Nouvelle version » → Déployer.** C'est important : on garde le même déploiement, donc la même adresse, sinon les formulaires du site ne marchent plus.
4. **Donne au script l'accès à ton agenda.** Dans Google Agenda, connecté avec mallory@numma.eu : Paramètres → ton agenda → « Partager avec des personnes en particulier » → ajouter contact@numma.eu avec le droit « Voir tous les détails des événements ». Si le script appartient à mallory@numma.eu, cette étape est inutile.
5. Dans Apps Script, choisis la fonction **`installerDeclencheur`** en haut, puis **Exécuter**. Google demande des autorisations (Sheet, Gmail, Agenda) : accepte-les. Le script tournera ensuite tout seul chaque matin à 7 h.
6. Lance une fois **`syncDemos`** pour tester. Un onglet « Démos » doit apparaître dans le Sheet avec les rendez-vous des 7 derniers jours.

**Une valeur à remplir dans le script** (ligne `FILTRE_TITRE_DEMO`) : un mot présent dans le titre de tes rendez-vous de démo, par exemple « Démo ». Sans elle, le script compte aussi tes autres rendez-vous avec des personnes extérieures. Donne-moi le titre et je te dis quoi mettre.

---

## B. Les fichiers du site

| Fichier | Ce qui change |
|---|---|
| `js/cookies.js` | Le bandeau cookies prépare Google Ads et Meta. **Les identifiants sont vides : rien de nouveau n'est chargé.** Mode consentement de Google appliqué. La catégorie « Marketing » devient « Publicité » et cite Google Ads et Meta (avant : LinkedIn Insight, jamais utilisé). |
| `js/main.js` | Les formulaires envoient l'origine complète (campagne, contenu, mot-clé, et l'identifiant de clic publicitaire seulement si le visiteur a accepté la publicité). Les liens « démo » et « essai » gardent les paramètres de campagne d'une page à l'autre. Une demande envoyée = un événement « demande_demo » ou « demande_essai » dans GA4. |
| `reserver-demo.html` | **Démo en 2 temps** : 4 questions courtes (prénom, entreprise, e-mail pro, comment vous nous avez connus), puis l'agenda s'affiche. Un lien « Accéder directement à l'agenda » reste là pour ne bloquer personne. Si l'envoi tarde, l'agenda s'ouvre quand même au bout de 4 secondes. Aperçu dans `APERCU v49`. Le reste de la page ne change pas. |
| `essai-gratuit.html` | Une question facultative ajoutée : « Comment avez-vous connu NUMMA ? ». Rien d'autre ne change. |

**Ordre de dépôt** : le script d'abord (A), puis le site (B). Dans l'autre ordre, rien ne casse : l'ancien script ignore simplement les nouvelles informations.

---

## Tests réalisés

Les tests ont été faits avec de faux identifiants publicitaires, remis à vide ensuite. Résultat, en observant les requêtes réelles du navigateur :

| Choix du visiteur dans le bandeau | Google Analytics | Google Ads | Meta |
|---|---|---|---|
| Aucun choix | aucune requête | aucune requête | aucune requête |
| Tout refusé | aucune requête | aucune requête | aucune requête |
| Mesure d'audience seule | chargé | aucune requête | aucune requête |
| Publicité seule | aucune requête | chargé | chargé |
| Tout accepté | chargé | chargé | chargé |

**Parcours complet testé** :
1. Un visiteur arrive sur la page BTP depuis une annonce Google.
2. Il clique sur « Réserver une démo », et le lien garde la source de l'annonce.
3. Il remplit les 4 questions.
4. La demande part avec la page d'arrivée, la source, la campagne, le métier « btp » et l'identifiant de clic de l'annonce.
5. L'agenda s'affiche.

Le même parcours a été testé avec seulement « Mesure d'audience » acceptée : l'identifiant de clic publicitaire n'est alors **pas** envoyé, comme prévu.

**Autres vérifications** : formulaire d'essai, page de remerciement, lien direct vers l'agenda, aucun lien cassé.

---

## À valider avant d'activer les publicités [À CONFIRMER PAR MALLO / relecteur RGPD]

Tant que les identifiants Google Ads et Meta sont vides, rien de tout cela ne s'applique.

1. **Politique de confidentialité**, section cookies : elle dit aujourd'hui « aucun cookie publicitaire », ce qui reste vrai tant que les identifiants sont vides. Le jour de l'activation, il faudra :
   - ajouter Google Ads (Google Ireland) et Meta (Meta Platforms Ireland) ;
   - préciser la finalité : mesurer quelles annonces amènent des demandes ;
   - indiquer la durée de conservation et les transferts possibles vers les États-Unis.
   Je rédige la proposition à ce moment-là.
2. **L'origine du visiteur** (page d'arrivée, utm) est mémorisée dans le navigateur le temps de la visite, sans consentement, comme depuis octobre. C'est une mesure interne, sans outil tiers, mais à faire confirmer par la personne qui relit le RGPD.
3. **Le formulaire démo** : une mention « Vos informations servent uniquement à préparer la démo », avec un lien vers la politique de confidentialité. Pas de case à cocher, comme sur le formulaire de contact actuel. À confirmer.

## Pour activer les publicités plus tard

Dans `js/cookies.js`, tout en haut, renseigne les identifiants (bloc `NUMMA_TAGS`) :
- `GOOGLE_ADS` : l'identifiant de compte Google Ads, au format AW-… ;
- `GOOGLE_ADS_CONV_DEMO` et `GOOGLE_ADS_CONV_ESSAI` : les étiquettes des deux conversions créées dans Google Ads ;
- `META_PIXEL` : le numéro du pixel Meta.

Je peux le faire pour toi : donne-moi les identifiants et je livre le fichier.
