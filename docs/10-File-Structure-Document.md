# File Structure Document

## Overview

This document defines the comprehensive file and directory structure for the Samudra ERP system. It provides a standardized organization system that ensures consistency, navigability, and maintainability across the codebase, aligned with the architectural principles specified in the Technical Design Document.

## 1. Repository Structure

### 1.1 Monorepo Organization

The Samudra ERP system uses a monorepo structure managed with Turborepo. This enables sharing code, configurations, and dependencies across the web application, mobile application, and backend services while maintaining separation of concerns.

```
samudra-erp/                       # Root directory
├── .github/                       # GitHub configuration
│   ├── workflows/                 # GitHub Actions workflows
│   └── ISSUE_TEMPLATE/            # Issue templates
├── apps/                          # Application packages
│   ├── web/                       # Next.js web application
│   ├── api/                       # Express.js API
│   └── mobile/                    # React Native mobile app
├── packages/                      # Shared packages
│   ├── ui/                        # Shared UI components
│   ├── eslint-config/             # ESLint configurations
│   ├── tsconfig/                  # TypeScript configurations
│   ├── api-client/                # API client library
│   ├── utils/                     # Shared utilities
│   └── types/                     # Shared TypeScript types
├── config/                        # Global configuration
├── scripts/                       # Build and utility scripts
├── docs/                          # Documentation
├── .gitignore                     # Git ignore file
├── .eslintrc.js                   # Root ESLint config
├── .prettierrc                    # Prettier config
├── package.json                   # Root package.json
├── pnpm-workspace.yaml            # PNPM workspace config
├── turbo.json                     # Turborepo config
└── README.md                      # Repository README
```

## 2. Web Application Structure

The web application follows Next.js 14.x App Router architecture with an Atomic Design methodology for component organization.

```
apps/web/                          # Web application root
├── app/                           # Next.js App Router
│   ├── (auth)/                    # Authentication route group
│   │   ├── login/                 # Login page
│   │   ├── register/              # Register page
│   │   ├── forgot-password/       # Password recovery
│   │   └── layout.tsx             # Auth layout
│   ├── (dashboard)/               # Dashboard route group
│   │   ├── dashboard/             # Main dashboard
│   │   ├── branches/              # Branch management
│   │   ├── employees/             # Employee management
│   │   ├── vehicles/              # Vehicle management
│   │   ├── shipments/             # Shipment management
│   │   ├── pickups/               # Pickup management
│   │   ├── deliveries/            # Delivery management
│   │   ├── returns/               # Return management
│   │   ├── billing/               # Billing management
│   │   ├── finances/              # Financial management
│   │   ├── reports/               # Reports management
│   │   ├── settings/              # System settings
│   │   └── layout.tsx             # Dashboard layout
│   ├── api/                       # API routes
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Landing page
│   └── globals.css                # Global styles
├── components/                    # Component library
│   ├── atoms/                     # Atomic design - atoms
│   │   ├── buttons/               # Button components
│   │   ├── inputs/                # Input components
│   │   ├── typography/            # Text components
│   │   └── icons/                 # Icon components
│   ├── molecules/                 # Atomic design - molecules
│   │   ├── form-fields/           # Form field combinations
│   │   ├── cards/                 # Card components
│   │   ├── alerts/                # Alert components
│   │   └── navigation-items/      # Navigation components
│   ├── organisms/                 # Atomic design - organisms
│   │   ├── forms/                 # Complex forms
│   │   ├── tables/                # Data tables
│   │   ├── navigation/            # Navigation structures
│   │   └── dashboards/            # Dashboard components
│   ├── templates/                 # Atomic design - templates
│   │   ├── layouts/               # Page layouts
│   │   ├── pages/                 # Page templates
│   │   └── modals/                # Modal templates
│   └── ui/                        # Shadcn UI components
├── lib/                           # Utility functions
│   ├── auth/                      # Authentication utilities
│   ├── api/                       # API utilities
│   ├── validation/                # Validation utilities
│   ├── formatters/                # Data formatting utilities
│   └── hooks/                     # Custom React hooks
├── store/                         # Redux store
│   ├── index.ts                   # Store configuration
│   ├── middleware.ts              # Redux middleware
│   └── slices/                    # Redux slices
├── services/                      # API service clients
│   ├── api.ts                     # Base API client
│   ├── auth.service.ts            # Auth services
│   ├── branch.service.ts          # Branch services
│   └── ...                        # Other services
├── styles/                        # Additional styles
├── types/                         # TypeScript definitions
├── public/                        # Static assets
├── .env.local                     # Environment variables
├── next.config.js                 # Next.js configuration
├── tailwind.config.js             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Package configuration
```

## 3. Backend API Structure

The backend follows a hexagonal architecture with clear separation between API, business logic, data access, and infrastructure layers.

```
apps/api/                          # API application root
├── src/                           # Source code
│   ├── api/                       # API Layer
│   │   ├── controllers/           # Request handlers
│   │   │   ├── auth.controller.js
│   │   │   ├── branch.controller.js
│   │   │   └── ...
│   │   ├── routes/                # Route definitions
│   │   │   ├── auth.routes.js
│   │   │   ├── branch.routes.js
│   │   │   └── ...
│   │   ├── middleware/            # API middleware
│   │   │   ├── auth.middleware.js
│   │   │   ├── validation.middleware.js
│   │   │   ├── error.middleware.js
│   │   │   └── ...
│   │   ├── validators/            # Request validation
│   │   │   ├── auth.validators.js
│   │   │   ├── branch.validators.js
│   │   │   └── ...
│   │   └── responses/             # Response formatters
│   │       ├── success.response.js
│   │       └── error.response.js
│   ├── business/                  # Business Logic Layer
│   │   ├── services/              # Business services
│   │   │   ├── auth.service.js
│   │   │   ├── branch.service.js
│   │   │   └── ...
│   │   ├── events/                # Event handlers
│   │   │   ├── shipment.events.js
│   │   │   ├── payment.events.js
│   │   │   └── ...
│   │   ├── workflows/             # Complex workflows
│   │   │   ├── pickup.workflow.js
│   │   │   ├── delivery.workflow.js
│   │   │   └── ...
│   │   └── errors/                # Business errors
│   │       ├── base.error.js
│   │       ├── validation.error.js
│   │       └── ...
│   ├── data/                      # Data Access Layer
│   │   ├── models/                # Database models
│   │   │   ├── user.model.js
│   │   │   ├── branch.model.js
│   │   │   └── ...
│   │   ├── repositories/          # Data repositories
│   │   │   ├── user.repository.js
│   │   │   ├── branch.repository.js
│   │   │   └── ...
│   │   ├── migrations/            # Database migrations
│   │   └── seeds/                 # Seed data
│   ├── infrastructure/            # Infrastructure Layer
│   │   ├── database/              # Database connection
│   │   │   ├── connection.js
│   │   │   └── mongoose.js
│   │   ├── cache/                 # Cache implementation
│   │   │   ├── redis.js
│   │   │   └── cache.service.js
│   │   ├── storage/               # File storage
│   │   │   ├── s3.js
│   │   │   └── local.js
│   │   ├── queue/                 # Message queue
│   │   ├── email/                 # Email service
│   │   ├── sms/                   # SMS service
│   │   └── external/              # External services
│   ├── utils/                     # Utility functions
│   │   ├── logger.js              # Logging utility
│   │   ├── date.utils.js          # Date utilities
│   │   └── ...
│   └── config/                    # Configuration
│       ├── index.js               # Config export
│       ├── database.config.js     # Database config
│       └── ...
├── tests/                         # Automated tests
│   ├── unit/                      # Unit tests
│   ├── integration/               # Integration tests
│   └── fixtures/                  # Test fixtures
├── .env                           # Environment variables
├── .env.example                   # Example env variables
├── nodemon.json                   # Nodemon configuration
├── jest.config.js                 # Jest configuration
└── package.json                   # Package configuration
```

## 4. Mobile Application Structure

The mobile application uses React Native with Expo SDK and is structured for offline-first functionality.

```
apps/mobile/                       # Mobile application root
├── src/                           # Source code
│   ├── screens/                   # Application screens
│   │   ├── auth/                  # Authentication screens
│   │   │   ├── LoginScreen.tsx
│   │   │   ├── RegistrationScreen.tsx
│   │   │   └── ...
│   │   ├── pickup/                # Pickup screens
│   │   │   ├── PickupListScreen.tsx
│   │   │   ├── PickupDetailScreen.tsx
│   │   │   └── ...
│   │   ├── delivery/              # Delivery screens
│   │   │   ├── DeliveryListScreen.tsx
│   │   │   ├── DeliveryConfirmationScreen.tsx
│   │   │   └── ...
│   │   ├── warehouse/             # Warehouse screens
│   │   │   ├── ScanningScreen.tsx
│   │   │   ├── InventoryScreen.tsx
│   │   │   └── ...
│   │   └── common/                # Common screens
│   │       ├── DashboardScreen.tsx
│   │       ├── ProfileScreen.tsx
│   │       └── ...
│   ├── navigation/                # Navigation configuration
│   │   ├── AppNavigator.tsx       # Main navigator
│   │   ├── AuthNavigator.tsx      # Auth navigator
│   │   ├── MainNavigator.tsx      # Main app navigator
│   │   └── ...
│   ├── components/                # Component library
│   │   ├── ui/                    # UI components
│   │   ├── forms/                 # Form components
│   │   ├── feedback/              # Feedback components
│   │   ├── data/                  # Data display components
│   │   └── device/                # Device integration components
│   ├── hooks/                     # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useOfflineData.ts
│   │   └── ...
│   ├── store/                     # Redux store
│   │   ├── index.ts               # Store configuration
│   │   ├── slices/                # Redux slices
│   │   └── hooks.ts               # Redux hooks
│   ├── services/                  # API and device services
│   │   ├── api/                   # API services
│   │   │   ├── api.ts             # Base API client
│   │   │   ├── auth.service.ts    # Auth services
│   │   │   └── ...
│   │   ├── sync/                  # Sync services
│   │   │   ├── syncManager.ts
│   │   │   └── ...
│   │   └── device/                # Device services
│   │       ├── camera.service.ts
│   │       ├── location.service.ts
│   │       └── ...
│   ├── utils/                     # Utility functions
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   └── ...
│   ├── theme/                     # Styling theme
│   │   ├── index.ts
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   └── ...
│   └── types/                     # TypeScript definitions
├── assets/                        # Static assets
│   ├── images/                    # Image assets
│   ├── fonts/                     # Font assets
│   └── icons/                     # Icon assets
├── app.json                       # Expo configuration
├── App.tsx                        # Application entry point
├── babel.config.js                # Babel configuration
├── metro.config.js                # Metro configuration
├── tsconfig.json                  # TypeScript configuration
├── eas.json                       # EAS Build configuration
└── package.json                   # Package configuration
```

## 5. Shared Packages Structure

Shared packages provide reusable code across applications in the monorepo.

```
packages/                          # Shared packages root
├── ui/                            # Shared UI components
│   ├── src/                       # Source code
│   │   ├── components/            # UI components
│   │   ├── hooks/                 # UI-related hooks
│   │   └── types/                 # Type definitions
│   ├── package.json               # Package configuration
│   └── tsconfig.json              # TypeScript configuration
├── eslint-config/                 # ESLint configurations
│   ├── index.js                   # Base configuration
│   ├── next.js                    # Next.js configuration
│   ├── react.js                   # React configuration
│   └── package.json               # Package configuration
├── tsconfig/                      # TypeScript configurations
│   ├── base.json                  # Base configuration
│   ├── nextjs.json                # Next.js configuration
│   ├── react-native.json          # React Native configuration
│   └── package.json               # Package configuration
├── api-client/                    # API client library
│   ├── src/                       # Source code
│   │   ├── client.ts              # Base client
│   │   ├── endpoints/             # API endpoints
│   │   └── types/                 # Type definitions
│   ├── package.json               # Package configuration
│   └── tsconfig.json              # TypeScript configuration
├── utils/                         # Shared utilities
│   ├── src/                       # Source code
│   │   ├── formatters/            # Formatting utilities
│   │   ├── validators/            # Validation utilities
│   │   └── helpers/               # Helper functions
│   ├── package.json               # Package configuration
│   └── tsconfig.json              # TypeScript configuration
└── types/                         # Shared TypeScript types
    ├── src/                       # Source code
    │   ├── models/                # Data models
    │   ├── api/                   # API types
    │   └── common/                # Common types
    ├── package.json               # Package configuration
    └── tsconfig.json              # TypeScript configuration
```

## 6. Configuration Structure

Configuration files are organized to maintain consistency across the monorepo.

```
config/                            # Global configuration root
├── eslint/                        # ESLint configurations
│   ├── base.js                    # Base rules
│   ├── typescript.js              # TypeScript rules
│   └── react.js                   # React rules
├── prettier/                      # Prettier configurations
│   └── index.js                   # Prettier rules
├── jest/                          # Jest configurations
│   ├── base.js                    # Base config
│   ├── react.js                   # React config
│   └── node.js                    # Node.js config
├── typescript/                    # TypeScript configurations
│   ├── base.json                  # Base config
│   ├── react.json                 # React config
│   └── node.json                  # Node.js config
└── docker/                        # Docker configurations
    ├── api.dockerfile             # API Dockerfile
    ├── web.dockerfile             # Web Dockerfile
    └── docker-compose.yml         # Docker Compose file
```

## 7. Documentation Structure

Documentation is organized to provide comprehensive information about the system.

```
docs/                              # Documentation root
├── architecture/                  # Architecture documentation
│   ├── overview.md                # System overview
│   ├── frontend.md                # Frontend architecture
│   ├── backend.md                 # Backend architecture
│   └── database.md                # Database architecture
├── api/                           # API documentation
│   ├── auth.md                    # Auth endpoints
│   ├── branches.md                # Branch endpoints
│   └── ...                        # Other endpoints
├── guides/                        # Development guides
│   ├── getting-started.md         # Getting started
│   ├── coding-standards.md        # Coding standards
│   ├── testing.md                 # Testing guide
│   └── deployment.md              # Deployment guide
├── workflows/                     # Workflow documentation
│   ├── pickup.md                  # Pickup workflow
│   ├── delivery.md                # Delivery workflow
│   └── ...                        # Other workflows
└── windsurf-rules/                # Windsurf Rules
    ├── product-requirements.md    # PRD
    ├── app-flow.md                # App Flow
    ├── tech-stack.md              # Tech Stack
    └── ...                        # Other rules
```

## 8. Naming Conventions

### 8.1 Directory Naming

- Use **kebab-case** for all directories (e.g., `form-fields`, `user-management`)
- Group related functionality in descriptively named directories
- Use plural forms for collections of similar items (e.g., `components`, `services`)

### 8.2 File Naming

- Use **camelCase** for most JavaScript/TypeScript files (e.g., `userService.js`, `dateUtils.ts`)
- Use **PascalCase** for React components and class files (e.g., `UserProfile.tsx`, `AuthMiddleware.js`)
- Use **kebab-case** for configuration and static files (e.g., `docker-compose.yml`, `app-icon.png`)
- Add suffixes to indicate file purpose:
  - `.service.ts` for services
  - `.controller.js` for controllers
  - `.repository.js` for repositories
  - `.middleware.js` for middleware
  - `.validator.js` for validators
  - `.model.js` for models
  - `.types.ts` for type definitions
  - `.test.js` or `.spec.js` for test files

### 8.3 Component Naming

- Use **PascalCase** for component files and component names
- Name components after their purpose (e.g., `ShipmentCard`, `UserProfile`)
- Prefix form components with "Form" (e.g., `FormInput`, `FormSelect`)
- Suffix container components with "Container" (e.g., `DashboardContainer`)
- Suffix context providers with "Provider" (e.g., `AuthProvider`)
- Suffix custom hooks with "use" prefix (e.g., `useAuth`, `useForm`)

## 9. File Organization Principles

### 9.1 Code Organization

- Group related functionality together
- Limit file size (< 300 lines recommended)
- One primary export per file
- Consistent import ordering:
  1. External dependencies
  2. Internal dependencies from other packages
  3. Internal dependencies from the same package
  4. Relative imports from parent directories
  5. Relative imports from same or child directories

### 9.2 Component Organization

- Each component should have its own directory for complex components
- Include index.js/ts files for clean exports
- Co-locate component-specific tests, styles, and utilities
- Group related smaller components in feature directories

### 9.3 Module Organization

- Feature-based organization for related functionality
- Clear separation between layers (API, business, data, infrastructure)
- Domain-driven boundaries between modules
- Clear and explicit dependencies between modules

## 10. Implementation Guidelines

### 10.1 Directory Creation

- Create directories only when needed for grouping related files
- Avoid deeply nested directory structures (> 4 levels)
- Maintain consistent structure across similar features
- Document directory purpose in README files for complex structures

### 10.2 File Creation

- Follow established patterns for new files
- Include appropriate headers with description
- Group related functionality in single files when appropriate
- Split large files into smaller, focused ones when they grow beyond 300 lines
