---
trigger: always_on
---

# Windsurf Rules for Tech Stack

## 1. Architecture
- Use microservice architecture with API-Gateway and hexagonal (ports & adapters) backend.
- Separate layers: Frontend, API Gateway, Microservices, Data, Integration, Infrastructure.
- Enforce component-based frontend, API-first, event-driven, CQRS, repository, and service layer patterns.

## 2. Frontend (Web)
- Framework: Next.js 14.x (App Router).
- Language: JavaScript.
- UI: Shadcn UI, Atomic Design (atoms, molecules, organisms, templates, pages).
- Styling: Tailwind CSS 3.x, defined color palette.
- State: Redux Toolkit (global), React Query (server), Context API (local).
- Forms: React Hook Form + Zod.
- Other: Recharts, date-fns, Leaflet/MapBox, TanStack Table, react-pdf, next-intl, next-auth.
- Accessibility: WCAG 2.1 AA.

## 3. Mobile
- Framework: React Native + Expo SDK.
- Language: TypeScript.
- UI: React Native Paper.
- Styling: StyleSheet, styled-components.
- State: Redux Toolkit, React Query, Context API.
- Forms: React Hook Form + Zod.
- Navigation: React Navigation.
- Offline: AsyncStorage (non-sensitive), SecureStore (sensitive), custom sync manager.
- Device: expo-camera, expo-location, expo-local-authentication, react-native-signature-canvas.
- Maps: react-native-maps. Charts: react-native-chart-kit.

## 4. Backend
- Framework: Node.js 18.x LTS, Express.js 4.x (JavaScript).
- API: REST, Swagger/OpenAPI 3.0 docs.
- Auth: JWT + RBAC.
- Validation: Joi/Yup.
- File/Image: Multer, Sharp.
- PDF/Excel: PDFKit, ExcelJS.
- Email/SMS: Nodemailer, Twilio/Nexmo.
- HTTP: Axios. Scheduling: node-cron.
- Error: BaseError, ValidationError, AuthError, BusinessError, InfrastructureError, standardized error response.

## 5. Database & Storage
- Primary DB: MongoDB 6.x + Mongoose 7.x (Embedded Document pattern).
- Indexing: Based on query patterns.
- Caching: Redis 7.x (query cache, session, rate limiting, pub/sub).
- File Storage: Railway Volumes (S3-compatible) for docs, images, exports.

## 6. DevOps & Infrastructure
- Version control: Git + GitHub.
- Containers: Docker, Docker Compose.
- API testing: Postman/Insomnia.
- Lint/Format: ESLint, Prettier, Husky.
- CI/CD: GitHub Actions, Jest/Vitest, Supertest, Cypress.
- Deployment: Railway.com (Git-based CD, horizontal scaling).
- Security: SSL/TLS, WAF, rate limiting, network isolation.
- Logging: Winston. Monitoring: Railway, Sentry, Datadog/New Relic. Alerting: Email/Slack.

## 7. Project Structure
- Monorepo: Turborepo, pnpm workspaces.
- Structure: `/apps` (frontend/backend), `/packages` (shared libs), `/config`, `/docs`.
- Naming: kebab-case (dirs), camelCase (files/functions), PascalCase (components).
- Frontend: `/app` (routes), `/components` (atomic structure, Shadcn UI), `/lib`, `/hooks`, `/styles`, `/store`, `/services`, `/types`.
- Backend: `/src/api` (controllers, routes, middleware, validators), `/src/business` (services, events, workflows), `/src/data` (models, repositories, migrations), `/src/infrastructure` (db, cache).

## 8. General
- All stack choices must be documented, versioned, and reviewed regularly.
- Use only approved libraries and tools; deviations require review.
- Ensure security, scalability, maintainability, and developer experience in all tech decisions.
