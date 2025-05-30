---
trigger: always_on
---

# Windsurf Rules for File Structure

## 1. Monorepo Organization
- Use a monorepo managed by Turborepo for all apps and packages.
- Top-level dirs: `/apps` (web, api, mobile), `/packages` (shared libs), `/config`, `/scripts`, `/docs`.
- Root files: `.gitignore`, `.eslintrc.js`, `.prettierrc`, `package.json`, `pnpm-workspace.yaml`, `turbo.json`, `README.md`.

## 2. Web Application Structure
- Located in `/apps/web` (Next.js 14.x, App Router, Atomic Design).
- `/app`: route groups (auth, dashboard, api, etc.), layouts, pages, global styles.
- `/components`: atomic structure (atoms, molecules, organisms, templates, ui).
- `/lib`: utilities (auth, api, validation, formatters, hooks).
- `/store`: Redux config, middleware, slices.
- `/services`: API clients (base, auth, domain services).
- `/styles`, `/types`, `/public` for styles, types, static assets.
- Config: `.env.local`, `next.config.js`, `tailwind.config.js`, `tsconfig.json`.

## 3. Backend API Structure
- Located in `/apps/api` (Node.js, Express, hexagonal architecture).
- `/src` with layers:
  - `/api`: controllers, routes, middleware, validators, responses.
  - `/business`: services, events, workflows, errors.
  - `/data`: models, repositories, migrations, seeds.
  - `/infrastructure`: db, cache, storage, queue, email, sms, external.
  - `/utils`, `/config` for utilities and config.
- `/tests`: unit/integration/fixtures.
- Config: `.env`, `.env.example`, `nodemon.json`, `package.json`.

## 4. Mobile App Structure
- Located in `/apps/mobile` (React Native + Expo SDK).
- `/src`: screens (feature-based), navigation, components (ui, forms, feedback, data, device), hooks, store, services, utils, theme, types, config.
- `/assets`: images, fonts, icons.
- Config: `app.json`, `App.tsx`, `babel.config.js`, `package.json`.

## 5. Shared Packages
- Located in `/packages`:
  - `/ui`: shared UI components
  - `/eslint-config`: lint configs
  - `/tsconfig`: TS configs
  - `/api-client`: shared API client
  - `/utils`: shared utilities
  - `/types`: shared types

## 6. Global Config, Scripts, Docs
- `/config`: global configuration files.
- `/scripts`: build, utility, migration scripts.
- `/docs`: product, tech, workflow, API, and architecture documentation.

## 7. Naming & Organization
- Directories: kebab-case. Files: camelCase. Components/classes: PascalCase.
- Organize by feature/domain, not technical type.
- Maintain clear boundaries between modules/services.
- Keep all configs, scripts, and docs up to date and versioned.

---
All codebases must follow this structure for consistency, maintainability, and scalability across Samudra ERP.
