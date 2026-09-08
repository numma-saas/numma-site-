# NUMMA — Lot v16

**Simulateur salaire brut / net + corrections tarifaires**
8 septembre 2026

---

## 1. Nouvelle page : `simulateur-salaire-brut-net.html`

Un outil gratuit, sans inscription. C'est le levier SEO le plus fort identifié : « salaire brut net » est une des requêtes les plus recherchées de notre secteur, et elle attire exactement notre cible — des dirigeants de TPE au moment où ils embauchent.

**Ce que fait l'outil**

- Brut → net avant impôt, puis net après prélèvement à la source
- Coût employeur réel, réduction générale incluse
- Détail ligne par ligne de chaque cotisation, avec son taux
- Bascule mensuel / annuel, cadre / non-cadre, temps partiel
- Curseur de taux de PAS

**Contenu SEO sur la même page**

- 6 sections d'explication (cotisations, PAS, plafond SS, écart cadre, coût employeur)
- FAQ de 5 questions + schémas `WebApplication`, `FAQPage`, `BreadcrumbList`
- CTA vers l'essai gratuit et le module Paie

---

## 2. Fiabilité des calculs

Le modèle a été écrit et validé en Python **avant** d'être porté en JavaScript, puis les deux ont été comparés ligne à ligne. Résultats identiques.

Bases 2026 : **PMSS 4 005 €/mois**, **PASS 48 060 €/an**, **SMIC 1 747,20 €/mois**.

| Brut mensuel | Statut | Net avant impôt | Coût employeur |
|---|---|---|---|
| 1 747,20 € (SMIC) | non-cadre | 1 383,08 € | 1 803,04 € (×1,03) |
| 2 500 € | non-cadre | 1 978,99 € | 3 221,08 € (×1,29) |
| 3 000 € | non-cadre | 2 374,79 € | 4 054,08 € (×1,35) |
| 3 000 € | cadre | 2 329,07 € | 4 099,08 € (×1,37) |
| 5 000 € | cadre | 3 907,16 € | 6 816,97 € (×1,36) |

Le point de contrôle : **1 747,20 € brut donne 1 383 € net**, ce qui correspond au SMIC net officiel 2026. Le modèle est bon.

### Deux réserves à connaître

1. **Le coût employeur est une estimation.** Il dépend du coefficient de la réduction générale, que j'ai fixé à **0,3194** — valeur documentée pour les entreprises de moins de 50 salariés. C'est indiqué sur la page, avec un lien vers le simulateur officiel de l'URSSAF comme référence opposable.
2. **La page affiche clairement ses limites** : pas de convention collective, pas de mutuelle d'entreprise, pas de taux AT/MP réel, pas d'heures supplémentaires, pas d'Alsace-Moselle. Écart courant annoncé : 1 à 3 %.

Un simulateur faux ferait plus de mal que pas de simulateur du tout — d'où ce niveau de prudence affiché.

### Un argument commercial utile

L'outil rend visible un fait que la plupart des dirigeants de TPE ignorent : **au SMIC, la réduction générale annule presque toutes les charges patronales** — 1 803 € de coût pour 1 747 € de brut. C'est développé dans la section « Ce que le poste coûte vraiment à l'employeur ».

---

## 3. Corrections trouvées en passant

### Deux tarifs paie obsolètes (5 €/bulletin)

Restés dans deux articles après le passage à 15 € / 10 € :

- `blog/cout-cache-logiciel-comptable.html` — « 40 €/mois de module paie (5 € × 8 salariés) » devient **80 €/mois (10 € HT par bulletin × 8)**, et le total annuel de la stack passe de 1 750 € à **1 900 €**
- `logiciel-gestion-btp.html` — « À partir de 5 € HT / employé » devient **« 10 € HT par bulletin, contre 25 à 35 € en cabinet »**

### Pénalités DSN incohérentes

Dans `blog/dsn-2026-guide-complet.html`, le JSON-LD annonçait encore *7,50 € par salarié* alors que le corps de l'article avait été corrigé en v15. Le schéma est maintenant aligné : **60,08 €** (défaut de production, 1,5 % du PMSS) et **8,01 €** (retard, 0,2 % du PMSS).

C'est important : Google lit le JSON-LD pour les extraits enrichis. Une donnée fausse là est une donnée fausse affichée dans les résultats de recherche.

### Un lien mort

`<a href="#">Centre d'aide</a>` supprimé du pied de page.

---

## 4. Maillage interne

Le simulateur est accessible depuis **toutes les pages** :

- **Mega-menu** — la 4ᵉ colonne « Choisir NUMMA » devient **« Outils gratuits »** : simulateur, calculateur d'économies, comparatifs, ressources (51 pages)
- **Pied de page** — ligne « Simulateur brut / net » (51 pages)
- **Liens contextuels en contenu** — depuis `paie-rh.html`, le guide DSN 2026, l'article DSN 15 minutes et le guide SaaS RH
- `sitemap.xml` (priorité 0.9) et `llms.txt`

---

## 5. Vérifications effectuées

- 51 pages HTML — **0 lien interne mort**
- Tous les blocs JSON-LD — **0 erreur de syntaxe**
- Toutes les variables et classes CSS du simulateur — présentes dans `style.css`
- Rendu testé — **aucune erreur JavaScript**
- Modèle JS comparé au modèle Python — **résultats identiques**

---

## 6. Ce qui reste ouvert

| Sujet | État |
|---|---|
| Modèle de facture gratuit + calculateur de charges | À faire — même logique SEO que le simulateur |
| Articles de septembre (facturation électronique) | À faire |
| « PDP » → « Plateforme Agréée (PA, ex-PDP) » | ~15 pages restantes |
| « Éditeur certifié GIP-MDS » et « 4 h → 5 min » | **Non vérifiées** — dis-moi si je les garde ou les retire |
| Logos clients | En attente d'autorisation écrite + fichiers officiels |

---

## Déploiement

Contenu du dossier à déposer sur GitHub Pages comme d'habitude. **`js/main.js` est inclus** — il porte le correctif de survol du mega-menu.

Après mise en ligne : Search Console → **Demander une indexation** sur `simulateur-salaire-brut-net.html`. Une page outil qui répond à une requête à fort volume peut se positionner en quelques semaines.
