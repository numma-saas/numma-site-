# CHANGELOG v10 — 13 juillet 2026

## 🆕 Nouvel article blog (funnel Paie)
- **blog/parametrer-dsn-mensuelle-15-minutes.html** — "Paramétrer sa DSN mensuelle en 15 minutes" (~1800 mots)
  - Routine chronométrée en 5 étapes + tableau des échéances (5/15) + FAQ
  - Schémas : Article + HowTo + FAQPage + BreadcrumbList
  - Cross-linking : guide DSN 2026, SaaS RH PME, paie-rh, tarifs, calculateur ROI

## ⚖️ Correction des infos légales société (site entier)
Nouvelles valeurs officielles (fiche RCS) :

| Donnée | Avant | Après |
|---|---|---|
| SIREN / RCS | 919 123 456 | **104 676 242** (RCS Paris) |
| SIRET | 919 123 456 00012 | **104 676 242 00019** |
| TVA intracom. | FR 12 919123456 | **FR65104676242** |
| Capital (CGU) | 10 000 € | **1 000 €** |
| Année de fondation | 2025 | **2026** (immatriculation greffe de Paris le 20/05/2026) |

- mentions-legales.html : bloc éditeur complet (SIREN, RCS + date immatriculation, SIRET, TVA)
- cgu.html : capital corrigé + n° RCS ajouté
- cgv.html : identification complète ajoutée au préambule (capital, RCS, TVA)
- a-propos.html : stat "Année de création" 2025 → 2026
- **38 pages** : footer "Société française fondée en 2025" → "fondée en 2026"

## 🔗 Fixes SEO
- blog/dsn-2026-guide-complet.html : 3 liens morts supprimés dans "À lire aussi" (articles inexistants), remplacés par des liens valides dont le nouvel article DSN
- blog.html : nouvelle card en tête + JSON-LD Blog + compteur "21 articles"
- sitemap.xml : entrée ajoutée pour le nouvel article

## ✅ Vérifications passées
- JSON-LD valides (article, blog, guide DSN)
- Zéro lien interne cassé sur les fichiers touchés
- sitemap.xml valide XML
- Vocabulaire conforme (pré-comptabilité, pas d'"expert-comptable invité")

## 📮 À uploader
Tout le contenu de ce dossier (40 fichiers HTML + sitemap.xml + le dossier blog/), en écrasant les fichiers existants sur GitHub.
