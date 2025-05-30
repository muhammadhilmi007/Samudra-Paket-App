# Samudra ERP Mobile App

## Overview
Expo (React Native, TypeScript) mobile application for Samudra ERP, following the Windsurf Rules and standards. Designed with an offline-first approach for field operations.

## Technology Stack
- **Framework**: React Native with Expo SDK
- **Language**: TypeScript
- **UI Components**: React Native Paper
- **Navigation**: React Navigation
- **State Management**:
  - Redux Toolkit (global state)
  - React Query (server state)
  - Context API (local state)
- **Forms**: React Hook Form with Zod validation
- **Storage**: AsyncStorage (non-sensitive), SecureStore (sensitive), custom Sync Manager
- **Device Integration**: Camera, GPS, biometrics, signature capture

## Directory Structure
- `/src`: Main source code
  - `/screens`: Screen components organized by feature
  - `/components`: UI components (ui, forms, feedback, data, device)
  - `/navigation`: Navigation structure and configuration
  - `/hooks`: Custom React hooks
  - `/store`: Redux store configuration
  - `/services`: API clients and services
  - `/utils`: Utility functions
  - `/theme`: Theme configuration and styles
  - `/types`: TypeScript type definitions
- `/assets`: Static assets (images, fonts, icons)

## Offline-First Approach
- All critical flows work offline with background synchronization
- Conflict resolution for data synchronization
- Optimized for battery life and data usage

## Getting Started
```bash
# From the root of the monorepo
pnpm dev --filter=mobile
```

## Building for Production
```bash
# From the root of the monorepo
pnpm build --filter=mobile
```
