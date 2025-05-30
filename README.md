# Samudra ERP Monorepo

## Overview
This is the monorepo for the Samudra ERP system for PT. Sarana Mudah Raya (Samudra Paket), a comprehensive logistics management platform with web and mobile components. The project follows the Windsurf Rules and standards for consistent, maintainable, and scalable development.

## Architecture
- **Monorepo Structure**: Managed with Turborepo and pnpm workspaces
- **Web**: Next.js 14.x with App Router, JavaScript, Tailwind CSS, Atomic Design methodology
- **Mobile**: React Native with Expo SDK, TypeScript, offline-first approach
- **Backend**: Node.js with Express.js, MongoDB, hexagonal architecture
- **Shared Code**: UI components, utilities, and type definitions

## Directory Structure
```
samudra-erp/
├── apps/                  # Application packages
│   ├── web/              # Next.js web app
│   ├── mobile/           # Expo React Native app
│   └── api/              # Express.js backend API
├── packages/             # Shared packages
│   ├── ui/               # Shared UI components
│   ├── utils/            # Shared utilities
│   ├── types/            # Shared type definitions
│   ├── eslint-config/    # ESLint configurations
│   └── tsconfig/         # TypeScript configurations
├── tools/                # Development tools and scripts
├── config/               # Global configuration
├── scripts/              # Build and utility scripts
├── docs/                 # Documentation
├── pnpm-workspace.yaml   # Workspace configuration
├── turbo.json            # Turborepo configuration
└── package.json          # Root package.json
```

## Getting Started

### Prerequisites
- Node.js 18.x LTS or higher
- pnpm 10.x or higher

### Installation
```bash
# Clone the repository
git clone https://github.com/samudrapaket/samudra-erp.git
cd samudra-erp

# Install dependencies
pnpm install
```

### Development
```bash
# Start all applications in development mode
pnpm dev

# Start a specific application
pnpm dev --filter=web
pnpm dev --filter=mobile
pnpm dev --filter=api
```

### Building
```bash
# Build all applications
pnpm build

# Build a specific application
pnpm build --filter=web
pnpm build --filter=mobile
pnpm build --filter=api
```

## Project Standards
- **Code Style**: ESLint and Prettier for consistent formatting
- **Naming Conventions**: kebab-case for directories, camelCase for files, PascalCase for components
- **Git Workflow**: Feature branches, pull requests, conventional commits
- **Testing**: Jest/Vitest with minimum 80% coverage for business logic

## Documentation
Refer to the `/docs` directory for detailed documentation on:
- Architecture and design decisions
- API specifications
- Development workflows
- Deployment procedures

## License
Proprietary - All rights reserved by PT. Sarana Mudah Raya (Samudra Paket)
