---
trigger: always_on
---

# Windsurf Rules for Mobile Guidelines & Structure

## 1. Architecture & Design
- Use layered architecture: Presentation, State, Service, Device Integration, Data Persistence.
- Apply component-based and atomic design (feature, screen, UI, device modules).
- Offline-first: all flows must work offline with background sync and conflict resolution.
- Optimize for performance, reliability, usability (field ops), adaptability, and battery efficiency.

## 2. Technology Stack
- Framework: React Native + Expo SDK.
- Language: TypeScript.
- State: Redux Toolkit, React Query.
- Navigation: React Navigation.
- UI: React Native Paper.
- Forms: React Hook Form. Validation: Zod.
- Device: expo-camera, expo-location, expo-local-authentication, react-native-signature-canvas, expo-network, expo-background-fetch.
- Storage: AsyncStorage (non-sensitive), SecureStore (sensitive), custom Sync Manager.
- Maps: react-native-maps. Charts: react-native-chart-kit.
- File: expo-file-system. Permissions: expo-permissions. Notifications: expo-notifications.

## 3. Project Structure
- `/apps/mobile/src`: screens, navigation, components, hooks, store, services, utils, theme, types, config.
- Screens: feature-based (auth, pickup, delivery, warehouse, common).
- Components: ui, forms, feedback, data, device.
- Navigation: stack/drawer/tab per flow.
- Store: Redux slices per domain, middleware, hooks.

## 4. UI/UX Guidelines
- Use React Native Paper for consistent UI; extend for logistics needs.
- Clear props/types, visual states, and accessibility (screen readers, ARIA).
- Responsive layouts, safe areas, orientation support, clear hierarchy.
- Minimize steps for field tasks, big touch targets, readable in sunlight.
- Support dark mode and custom themes.

## 5. State & Data
- Redux Toolkit for global, React Query for server, Context API for local state.
- Local storage: AsyncStorage/SecureStore for offline; sync with server via Sync Manager.
- Optimistic updates, queueing, and conflict handling for unreliable networks.
- Use Zod for validation, handle server and async validation.

## 6. Device Integration
- Integrate camera (photo/barcode), GPS/location, biometrics, signature pad, push notifications.
- Handle permissions and errors gracefully for all device features.

## 7. Offline-First & Sync
- All critical flows must work offline and sync in background.
- Show sync status, allow manual retry, resolve conflicts with user input.
- Use background fetch for periodic sync and notifications.
- Provide clear feedback on data state (pending, synced, error).

## 8. Security & Compliance
- Store sensitive data in SecureStore, never in plain storage.
- Enforce authentication (JWT, biometrics, PIN), session timeout, and secure token handling.
- Encrypt all sensitive data in transit and at rest.
- Log critical actions and status changes for audit.

## 9. Testing & Quality
- Use Jest for unit/integration tests; aim for 80%+ coverage for business logic.
- Test device features, offline/online transitions, sync, and error handling.
- Use CI for automated tests and linting.

## 10. Documentation
- Document architecture, flows, device integration, error handling, and custom hooks/services.
- Provide usage, props, and accessibility notes for all components.
- Maintain workflow and troubleshooting guides.

---
All mobile code must follow these rules for reliability, usability, security, and maintainability across Samudra ERP.
