---
trigger: always_on
---

# Windsurf Rules for Coding & Developer Guidelines

## 1. Development Principles
- Prioritize simplicity, readability, maintainability, testability, and reusability.
- Separate concerns, avoid duplication (DRY), and follow SOLID principles.
- Adhere to hexagonal architecture, microservices, and clear layer separation.
- Use repository pattern for data access and service layer for business logic.

## 2. Code Organization
- Use monorepo: `/apps` (web, api, mobile), `/packages`, `/config`, `/docs`.
- Web: `/app` (routes), `/components` (atomic), `/lib`, `/hooks`, `/store`, `/services`, `/types`.
- Backend: `/src/api`, `/business`, `/data`, `/infrastructure`, `/utils`, `/config`, `/tests`.
- Mobile: `/src/screens`, `/navigation`, `/components`, `/hooks`, `/store`, `/services`, `/utils`, `/theme`, `/types`, `/assets`.
- Group related code by feature/domain, not technical type.
- One primary export per file; keep files focused (<300 lines).
- Use index files for clean exports.

## 3. Naming Conventions
- Directories: kebab-case (`user-management`).
- Files: camelCase (`userService.js`).
- Components/Classes: PascalCase (`UserProfile`).
- Functions/Variables: camelCase.
- Constants: UPPER_SNAKE_CASE.
- Types/Interfaces: PascalCase with prefix (`IUser`, `TConfig`).
- DB Collections: camelCase (`users`).

## 4. Coding Style
- Use ESLint and Prettier for linting and formatting.
- Use TypeScript for type safety (except web if JS-only by stack).
- Prefer const, avoid var; use destructuring, arrow functions, async/await, template literals, optional chaining, nullish coalescing.
- Use functional programming patterns where suitable.
- Use Tailwind CSS for styling (web/mobile), follow design system and color palette, utility-first, responsive (mobile-first), CSS variables for themes.
- Maintain consistent import order (external, internal, relative).
- Include clear file headers with description and author.

## 5. Testing & Quality
- Use Jest/Vitest for unit/integration tests; aim for 80%+ coverage on business logic.
- Write tests for edge cases, error handling, and critical flows.
- Use factories/seeds for test data.
- Use CI for automated linting, tests, and builds.
- Fix lint/test errors before merging.

## 6. Documentation
- Document all public functions, classes, and components with JSDoc or TypeDoc.
- Maintain up-to-date README, code comments, and usage examples.
- Document API endpoints, request/response, error types, and authentication.
- Provide onboarding docs, workflow guides, and troubleshooting.

## 7. Collaboration & Workflow
- Use Git, PR-based workflow, and conventional commits.
- Require code review for all changes; address feedback promptly.
- Keep branches up to date with main; resolve conflicts early.
- Use clear, descriptive commit messages.
- Communicate blockers and decisions in project channels.
- Regularly update docs, boards, and decision logs.

---
All developers must follow these rules for code quality, maintainability, and collaborative development across Samudra ERP.
