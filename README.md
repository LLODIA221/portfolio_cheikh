# Portfolio Frontend (React + Vite + TypeScript)

Ce projet est une version **frontend-only** du portfolio:
- pas de backend Laravel
- pas de base de données
- déploiement automatique sur **GitHub Pages**

## Stack

- React 18
- Vite 5
- TypeScript
- Tailwind CSS
- React Router DOM
- TanStack Query

## Prérequis

- Node.js 20+ recommandé
- npm

## Installation locale (Windows)

```powershell
npm install
```

## Lancement en développement

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

Le script `build:pages` calcule automatiquement `VITE_BASE_PATH` à partir de `GITHUB_REPOSITORY` (format repo projet: `https://user.github.io/repo`).

## Variables d'environnement

Copier `.env.example` vers `.env` si nécessaire:

```env
VITE_BASE_PATH=/
```

En CI GitHub Actions, cette variable est surchargée automatiquement pour GitHub Pages.

## Déploiement automatique sur GitHub Pages

Workflow: `.github/workflows/deploy-pages.yml`

Il exécute:
1. `npm ci`
2. `npm run build:pages`
3. upload du dossier `dist`
4. publication via `actions/deploy-pages`

### Activation côté GitHub

1. Ouvrir `Settings > Pages`
2. Dans `Build and deployment`, choisir **GitHub Actions**
3. Push sur `main` pour déclencher le déploiement

## Correction React Router appliquée

Pour supprimer les warnings futurs v7, le router utilise:
- `HashRouter`
- `future.v7_startTransition: true`
- `future.v7_relativeSplatPath: true`

Le format d'URL en production est donc de type `/#/route`.
