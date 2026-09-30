# NUMMA — Lot v18

**Nouveau hero animé · pages piliers SEO · 3 articles**
30 septembre 2026

> Dossier complet (57 pages, CSS, JS, sitemap, llms.txt). À déposer comme d'habitude.

---

## 1. Le hero : le tableau de bord reconstruit en HTML, animé

La capture d'écran est remplacée par une **reproduction du nouveau tableau de bord en code** : barre latérale, 5 indicateurs, graphique facturé / encaissé sur 6 mois, « À faire aujourd'hui ».

Pourquoi en code plutôt qu'une image :

- **Net à toutes les tailles**, écran Retina compris — une capture floute dès qu'on la redimensionne.
- **Plus léger** que l'image qu'il remplace : meilleur pour la note Lighthouse.
- **Chaque chiffre s'anime** — impossible avec une photo.
- **Version mobile dédiée** : sur téléphone, on n'affiche que les indicateurs clés et le graphique, lisibles, au lieu d'une miniature illisible.

**La séquence d'animation** (une seule fois, à l'arrivée à l'écran) :

1. Les montants défilent jusqu'à leur valeur, les barres du graphique montent mois par mois.
2. Les tâches du jour glissent une à une, une info-bulle se pose sur septembre.
3. La carte « Répartition des dépenses » apparaît, son anneau se dessine.
4. À 3 secondes, une notification **« Paiement reçu · +2 160 € »** arrive : la trésorerie monte et les impayés baissent en direct, les deux cartes s'éclairent en vert.

C'est la promesse du produit racontée en quatre secondes : vous êtes payé, et votre tableau de bord le sait.

**Les données ont été refaites et sont cohérentes entre elles** (facturé du mois = barre de septembre, HT = TTC / 1,2, encours = facturé − encaissé, taux d'encaissement 94,8 %). Les chiffres de ta capture ne l'étaient pas (0 € de TVA, 4 % d'encaissement) et, surtout, **elle contenait ton adresse e-mail et des noms de test** : rien de tout ça n'est publié. La société fictive s'appelle « Maison Verdier », la dirigeante « Claire Martin ». La barre latérale met en avant la section **Paie & RH avec Congés**.

Respect de `prefers-reduced-motion`, aucun décalage de mise en page, contenu visible même sans JavaScript.

---

## 2. SEO : viser « facture électronique », « fiche de paie », « gestion de trésorerie », « logiciel de gestion »

**Il faut être franc sur ces quatre requêtes.** Ce sont les plus disputées du secteur : impots.gouv, service-public, Pennylane, PayFit, Qonto, Sage. Aucun site ne s'y classe en quelques semaines, et personne ne peut te le garantir. La méthode qui marche est toujours la même :

1. **Une page pilier** par requête, qui dit clairement ce qu'elle vend — c'est elle qui doit se classer.
2. **Des articles satellites** sur les questions longues autour (« comment lire une fiche de paie », « facture électronique exemple »), plus faciles à gagner, qui renvoient vers la page pilier.
3. **Des backlinks** (voir `PLAN-BACKLINKS.md`) — sans eux, les deux premiers points plafonnent.

### Les 4 pages piliers, retravaillées

Jusqu'ici leurs titres H1 étaient des slogans sans mot-clé (« La paie, sans prise de tête. »). Google ne pouvait pas deviner de quoi parlait la page.

| Page | Nouveau titre | Nouveau H1 | Mots |
|---|---|---|---|
| facturation-electronique | Logiciel de facture électronique conforme 2026-2027 | Le logiciel de facture électronique prêt pour 2027 | 570 → 1 111 |
| paie-rh | Logiciel de fiche de paie et DSN pour TPE et PME | Le logiciel de fiche de paie sans prise de tête | 564 → 1 007 |
| tresorerie | Logiciel de gestion de trésorerie pour TPE et PME | Le logiciel de gestion de trésorerie en temps réel | 548 → 960 |
| fonctionnalites | Logiciel de gestion d'entreprise tout-en-un | Le logiciel de gestion d'entreprise tout-en-un | 443 → 898 |

Chacune gagne un bloc de contenu (définition, ce que fait NUMMA, prix, liens vers les articles) et une **FAQ de 5 questions avec schéma FAQPage**, qui peut s'afficher directement dans les résultats Google.

Au passage : les boutons « Essayer gratuitement » de ces pages menaient à **contact.html** au lieu de la page d'essai. Corrigé.

### 3 articles satellites

| Article | Requêtes visées | Mots |
|---|---|---|
| Facture électronique : définition, formats et exemple | facture électronique, définition, exemple, Factur-X | 1 159 |
| Comment lire une fiche de paie, ligne par ligne | fiche de paie, lire un bulletin, net social | 1 204 |
| Logiciel de gestion d'entreprise : comment choisir | logiciel de gestion TPE / PME | 1 182 |

L'exemple chiffré de la fiche de paie (2 500 € brut → 1 978,99 € net → 1 919,62 € après impôt) est calculé avec le même modèle que le simulateur : les deux pages se renvoient l'une à l'autre et donnent les mêmes chiffres.

Le guide trésorerie existant (4 400 mots, le plus riche du site) est retitré **« Gestion de trésorerie TPE/PME : le guide complet 2026 »** pour viser la requête exacte.

Tous ajoutés au blog, au sitemap et à llms.txt.

---

## 3. Vérifications

- 57 pages — **0 lien interne mort**, **0 JSON-LD invalide**, **0 titre en double**
- Hero testé en rendu réel, en version ordinateur et mobile

---

## Après mise en ligne

Search Console → **Demander une indexation** sur les 4 pages piliers et les 3 articles. Compte 4 à 8 semaines avant de juger ; regarde les *impressions* d'abord, les clics suivent.

## Toujours en attente de toi

- Le **tableau RH du CHANGELOG-v17** à cocher (ce qui existe vraiment dans l'outil).
- **« Éditeur certifié GIP-MDS »** et **« 4 h → 5 min »** dans le guide DSN : je garde ou je retire ?
