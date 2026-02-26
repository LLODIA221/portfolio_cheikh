# Portfolio Frontend (React + Vite + TypeScript)

Ce projet est une version frontend-only du portfolio:
- pas de backend Laravel
- pas de base de donnees
- deploiement automatique sur GitHub Pages

## Stack

- React 18
- Vite 5
- TypeScript
- Tailwind CSS
- React Router DOM
- TanStack Query

## Prerequis

- Node.js 20+ recommande
- npm

## Installation locale (Windows)

```powershell
npm install
```

## Lancement en developpement

```powershell
npm run dev
```

## Build local

```powershell
npm run build
npm run preview
```

## Build GitHub Pages

```powershell
npm run build:pages
```

Le script `build:pages` calcule automatiquement `VITE_BASE_PATH` a partir de `GITHUB_REPOSITORY` (format repo projet: `https://user.github.io/repo`).

## Variables d'environnement

Copier `.env.example` vers `.env`:

```env
VITE_BASE_PATH=/
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/<form_id>
```

- `VITE_BASE_PATH`: base path pour Vite (surcharge automatique en CI Pages).
- `VITE_FORMSPREE_ENDPOINT`: endpoint Formspree utilise pour l'envoi direct du formulaire de contact.

## Activer Formspree (envoi direct formulaire)

1. Creer un formulaire sur Formspree.
2. Recuperer l'endpoint du type `https://formspree.io/f/xxxxxxx`.
3. Le renseigner dans `.env` via `VITE_FORMSPREE_ENDPOINT`.
4. Relancer le serveur local ou rebuild.

## GitHub Actions (variable Formspree)

Pour la production GitHub Pages, definir `VITE_FORMSPREE_ENDPOINT` dans:
- `Repository > Settings > Secrets and variables > Actions > Variables`

Le workflow de deploiement est:
- `.github/workflows/deploy-pages.yml`

## Deploiement automatique sur GitHub Pages

1. Ouvrir `Settings > Pages`
2. Dans `Build and deployment`, choisir `GitHub Actions`
3. Push sur `main` pour declencher le deploiement

## React Router

Le routeur utilise:
- `HashRouter`
- `future.v7_startTransition: true`
- `future.v7_relativeSplatPath: true`

Le format d'URL en production est `/#/route`.
