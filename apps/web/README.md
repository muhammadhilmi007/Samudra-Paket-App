# Samudra ERP Web App

## Overview
Next.js 14.x (JavaScript) web application for Samudra ERP, following the Windsurf Rules and standards.

## Technology Stack
- **Framework**: Next.js 14.x with App Router
- **Language**: JavaScript
- **Styling**: Tailwind CSS 3.x with defined color palette
- **Component Design**: Atomic Design methodology (atoms, molecules, organisms, templates, pages)
- **Component Library**: Shadcn UI
- **State Management**:
  - Redux Toolkit (global state)
  - React Query (server state)
  - Context API (local state)
- **Forms**: React Hook Form with Zod validation

## Directory Structure
- `/app`: Next.js App Router routes and layouts
- `/components`: UI components organized by Atomic Design
  - `/atoms`: Basic building blocks (buttons, inputs, icons)
  - `/molecules`: Simple component combinations (form fields, search bars)
  - `/organisms`: Complex UI sections (navigation bars, forms, cards)
  - `/templates`: Page layouts without specific content
  - `/ui`: Shadcn UI components
- `/lib`: Utilities and helpers
- `/hooks`: Custom React hooks
- `/store`: Redux store configuration
- `/services`: API clients and services
- `/styles`: Global styles and Tailwind configuration

## Getting Started
```bash
# From the root of the monorepo
pnpm dev --filter=web
```

## Building for Production
```bash
# From the root of the monorepo
pnpm build --filter=web
```
