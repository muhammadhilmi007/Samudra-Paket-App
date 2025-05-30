---
trigger: always_on
---

# Windsurf Rules for Frontend Guidelines & Structure

## 1. Architecture & Design
- Use component-based architecture with clear separation: Presentation, State, Service, Utility layers.
- Apply Atomic Design: Atoms, Molecules, Organisms, Templates, Pages.
- Ensure consistency, reusability, responsiveness (mobile-first), accessibility (WCAG 2.1 AA), and performance.

## 2. Technology Stack
- Framework: Next.js 14.x (App Router).
- Language: JavaScript.
- Styling: Tailwind CSS 3.x.
- Component Library: Shadcn UI.
- Build tools: Turborepo, pnpm.
- State: Redux Toolkit (global), React Query (server), Context API (local), React Hook Form (forms).
- Validation: Zod.
- Data viz: Recharts. Dates: date-fns. Tables: TanStack Table. Maps: Leaflet/MapBox.
- i18n: next-intl. Auth: next-auth.

## 3. Design System
- Color palette: Primary #2563EB, Secondary #10B981, Accent #F59E0B, Neutral #6B7280, Error #EF4444, Success #22C55E, Warning #F97316, Info #3B82F6.
- Typography: Inter font, scalable sizes (xs–4xl).
- Spacing: 4px grid, scalable steps.
- Breakpoints: sm 640px, md 768px, lg 1024px, xl 1280px, 2xl 1536px.
- Shadows: sm, md, lg, xl. Border radius: none–full.

## 4. Component Library
- Base on Shadcn UI. Provide: Buttons, Inputs, Feedback, Navigation, Layout, Overlays, Data Display.
- Build custom logistics components (e.g. ShipmentCard, TrackingTimeline, DeliveryMap, BarcodeScannerInput, SignaturePad, WeightVolumeCalculator, LoadingPlanner).
- Each component must include usage, props, variants, accessibility, and performance notes.

## 5. Project Structure
- Use feature/domain-based organization.
- `/app`: Auth, dashboard, branches, employees, vehicles, shipments, pickups, deliveries, returns, billing, finances, reports, settings, api, layout.tsx, page.tsx.
- `/components`: Atomic structure (atoms, molecules, organisms, templates, ui).
- `/lib`: Utilities. `/hooks`: Custom hooks. `/styles`: Global styles. `/store`: Redux store. `/services`: API clients. `/types`: Type definitions.
- Use kebab-case (dirs), camelCase (files/functions), PascalCase (components).

## 6. State & Data
- Use Redux Toolkit for global, React Query for server, Context API for local state.
- Use React Hook Form for forms, Zod for validation.
- Handle API/service logic in `/services`.
- Use optimistic updates and caching for better UX.

## 7. Responsiveness & Accessibility
- Mobile-first, responsive layouts using defined breakpoints.
- All UI must be WCAG 2.1 AA compliant: semantic HTML, keyboard navigation, ARIA labels, color contrast.
- Test accessibility for all new components and pages.

## 8. Best Practices
- Reuse components, avoid duplication.
- Document all components and flows.
- Use Prettier and ESLint for code quality.
- Use Git/GitHub for version control, PR-based workflow.
- Write unit and integration tests for business logic and UI.
- Optimize for performance (lazy loading, code splitting, minimal bundle size).

## 9. Documentation
- Provide usage, props, variants, accessibility, and performance notes for each component.
- Maintain workflow and troubleshooting guides.

---
All frontend code must follow these rules for maintainability, scalability, and consistent UX across Samudra ERP.