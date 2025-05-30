# Frontend Guidelines and Structure

## Overview

This document outlines the comprehensive frontend development guidelines, architecture, and structure for the Samudra ERP system. It provides standards, best practices, and architectural patterns that ensure consistency, maintainability, and scalability across all frontend components.

## 1. Architecture & Design Principles

### 1.1 Architectural Overview

The frontend architecture follows a component-based design with clear separation of concerns:

- **Presentation Layer**: UI components and pages
- **State Management Layer**: Global and local state
- **Service Layer**: API interactions and external services
- **Utility Layer**: Reusable functions and helpers

### 1.2 Design Methodology

The frontend implements **Atomic Design Methodology** to organize components in a hierarchical structure:

- **Atoms**: Basic building blocks (buttons, inputs, icons)
- **Molecules**: Simple component combinations (form fields, search bars)
- **Organisms**: Complex UI sections (navigation bars, forms, cards)
- **Templates**: Page layouts without specific content
- **Pages**: Complete views with actual content

### 1.3 Design Principles

- **Consistency**: Maintain consistent UI patterns and interactions
- **Reusability**: Create components that can be reused across the application
- **Responsiveness**: Support all device sizes with mobile-first approach
- **Accessibility**: Comply with WCAG 2.1 Level AA standards
- **Performance**: Optimize for speed and resource efficiency

## 2. Technology Stack

### 2.1 Core Technologies

- **Framework**: Next.js 14.x with App Router architecture
- **Language**: JavaScript for web application
- **Styling**: Tailwind CSS 3.x
- **Component Library**: Shadcn UI
- **Build Tools**: Turborepo, pnpm

### 2.2 State Management

- **Global State**: Redux Toolkit for application-wide state
- **Server State**: React Query for API data fetching, caching, and synchronization
- **Local State**: React Context API for component-specific state
- **Form State**: React Hook Form for form management

### 2.3 Additional Libraries

- **Validation**: Zod for schema validation
- **Data Visualization**: Recharts for charts and graphs
- **Date/Time**: date-fns for date manipulation
- **Tables**: TanStack Table for data tables
- **Maps**: Leaflet/MapBox for geographical data
- **Internationalization**: next-intl for multi-language support
- **Authentication**: next-auth for authentication flows

## 3. Design System

### 3.1 Color Palette

The design system follows a consistent color palette:

- **Primary**: #2563EB (Blue)
- **Secondary**: #10B981 (Green)
- **Accent**: #F59E0B (Amber)
- **Neutral**: #6B7280 (Gray)
- **Error**: #EF4444 (Red)
- **Success**: #22C55E (Green)
- **Warning**: #F97316 (Orange)
- **Info**: #3B82F6 (Blue)

### 3.2 Typography

- **Heading Font**: Inter
- **Body Font**: Inter
- **Font Sizes**:
  - xs: 0.75rem (12px)
  - sm: 0.875rem (14px)
  - base: 1rem (16px)
  - lg: 1.125rem (18px)
  - xl: 1.25rem (20px)
  - 2xl: 1.5rem (24px)
  - 3xl: 1.875rem (30px)
  - 4xl: 2.25rem (36px)

### 3.3 Spacing System

Consistent spacing based on a 4px grid:
- 0: 0px
- 1: 0.25rem (4px)
- 2: 0.5rem (8px)
- 3: 0.75rem (12px)
- 4: 1rem (16px)
- 5: 1.25rem (20px)
- 6: 1.5rem (24px)
- 8: 2rem (32px)
- 10: 2.5rem (40px)
- 12: 3rem (48px)
- 16: 4rem (64px)
- 20: 5rem (80px)

### 3.4 Breakpoints

Mobile-first responsive design with defined breakpoints:
- **sm**: 640px (Small devices)
- **md**: 768px (Medium devices)
- **lg**: 1024px (Large devices)
- **xl**: 1280px (Extra large devices)
- **2xl**: 1536px (2X extra large devices)

### 3.5 Shadows

- **sm**: Small shadow for subtle elevation
- **md**: Medium shadow for cards and dropdowns
- **lg**: Large shadow for modals and popovers
- **xl**: Extra large shadow for important elements

### 3.6 Border Radius

- **none**: 0px
- **sm**: 0.125rem (2px)
- **DEFAULT**: 0.25rem (4px)
- **md**: 0.375rem (6px)
- **lg**: 0.5rem (8px)
- **xl**: 0.75rem (12px)
- **2xl**: 1rem (16px)
- **full**: 9999px (Fully rounded)

## 4. Component Library

### 4.1 Core Components

Built with Shadcn UI as the foundation:

- **Buttons**: Primary, secondary, outline, ghost, link
- **Inputs**: Text, number, date, select, checkbox, radio, toggle
- **Feedback**: Alert, toast, progress, spinner
- **Navigation**: Menu, tabs, breadcrumbs, pagination
- **Layout**: Card, container, grid, divider
- **Overlays**: Dialog, drawer, popover, tooltip
- **Data Display**: Table, list, badge, avatar

### 4.2 Custom Components

Domain-specific components for logistics operations:

- **ShipmentCard**: Display shipment details
- **TrackingTimeline**: Visualize shipment journey
- **DeliveryMap**: Show delivery routes and locations
- **BarcodeScannerInput**: Input with barcode scanning capability
- **SignaturePad**: Capture digital signatures
- **WeightVolumeCalculator**: Calculate shipping costs
- **LoadingPlanner**: Plan vehicle loading

### 4.3 Component Documentation

Each component should include:
- Usage examples
- Props documentation
- Variants and states
- Accessibility considerations
- Performance notes

## 5. Project Structure

### 5.1 Next.js App Structure

```
/app
├── (auth)              # Authentication routes
│   ├── login
│   ├── register
│   └── forgot-password
├── (dashboard)         # Dashboard and protected routes
│   ├── dashboard
│   ├── branches
│   ├── employees
│   ├── vehicles
│   ├── shipments
│   ├── pickups
│   ├── deliveries
│   ├── returns
│   ├── billing
│   ├── finances
│   ├── reports
│   └── settings
├── api                 # API routes
├── layout.tsx          # Root layout
└── page.tsx            # Landing page
```

### 5.2 Component Structure

```
/components
├── atoms               # Atomic Design structure
│   ├── buttons
│   ├── inputs
│   ├── typography
│   └── icons
├── molecules
│   ├── form-fields
│   ├── cards
│   ├── alerts
│   └── navigation-items
├── organisms
│   ├── forms
│   ├── tables
│   ├── navigation
│   └── dashboards
├── templates
│   ├── layouts
│   ├── pages
│   └── modals
└── ui                  # Shadcn UI components
```

### 5.3 Core Directories

```
/lib                    # Utility functions
/hooks                  # Custom React hooks
/store                  # Redux store
/services               # API service clients
/styles                 # Global styles
/types                  # TypeScript type definitions
/public                 # Static assets
```

## 6. State Management Strategy

### 6.1 Redux Toolkit Implementation

- **Store Configuration**: Centralized store with proper typing
- **Slice Pattern**: Feature-based slices for domain-specific state
- **Async Thunks**: For complex async operations
- **Selectors**: Memoized selectors for derived state
- **Middleware**: Logger, redux-persist for state persistence

### 6.2 React Query Implementation

- **Query Keys**: Structured query keys for caching
- **Prefetching**: Prefetch data for anticipated user actions
- **Mutations**: Handle data updates with optimistic updates
- **Query Invalidation**: Automatic cache invalidation
- **Offline Support**: Cache persistence for offline usage

### 6.3 Context API Usage

- **Theme Context**: For theme switching
- **Auth Context**: For authentication state
- **UI Context**: For global UI state (sidebar, modals)
- **Preference Context**: For user preferences

### 6.4 State Management Decision Tree

- **Use Local State**: For component-specific state that doesn't affect other components
- **Use Context API**: For state shared between nearby components in the tree
- **Use React Query**: For server data that needs caching and synchronization
- **Use Redux**: For global application state that affects multiple parts of the application

## 7. Styling & CSS Strategy

### 7.1 Tailwind CSS Implementation

- **Configuration**: Extended theme with custom colors and values
- **Utilities**: Custom utility classes for domain-specific styling
- **Components**: Component-specific styles
- **Plugins**: Typography, forms, line-clamp plugins

### 7.2 CSS Organization

- **Base Styles**: Global styles and resets
- **Components**: Component-specific styles
- **Utilities**: Utility classes for common patterns

### 7.3 Dark Mode Support

- **Strategy**: Class-based dark mode implementation
- **Toggle**: User-controlled dark/light mode switching
- **System Preference**: Default to system preference
- **Persistence**: Remember user preference

### 7.4 Responsive Design Guidelines

- **Mobile-First**: Design for mobile and expand for larger screens
- **Fluid Typography**: Typography that scales with viewport
- **Flexible Layouts**: Layouts that adapt to different screen sizes
- **Touch Targets**: Minimum 44x44px for touch targets
- **Media Queries**: Use Tailwind breakpoint utilities

## 8. Form Handling

### 8.1 React Hook Form Implementation

- **Form Setup**: Consistent form initialization
- **Validation**: Integration with Zod for schema validation
- **Error Handling**: Display validation errors
- **Form Submission**: Handle submissions with loading states
- **Form Reset**: Reset form after submission

### 8.2 Form Components

- **FormField**: Reusable form field with label and error handling
- **FormSection**: Group related form fields
- **FieldArray**: Handle dynamic field arrays
- **FormActions**: Consistent form action buttons
- **FormProgress**: Multi-step form progress indicator

### 8.3 Form Validation Strategy

- **Client Validation**: Immediate feedback for user inputs
- **Server Validation**: Handle server-side validation errors
- **Cross-Field Validation**: Validate related fields together
- **Conditional Validation**: Dynamic validation based on form state
- **Async Validation**: Validate against server data (e.g., uniqueness)

## 9. API Integration

### 9.1 API Client Structure

- **Base Client**: Configured Axios instance with interceptors
- **Service Modules**: Domain-specific API clients
- **Request/Response Types**: TypeScript types for all API interactions
- **Error Handling**: Centralized error handling strategy

### 9.2 Data Fetching Patterns

- **Initial Data Loading**: Server-side rendering for initial data
- **Client-side Fetching**: React Query for client-side data fetching
- **Pagination**: Efficient pagination with cursor or offset
- **Infinite Scrolling**: Load more data as user scrolls
- **Polling**: Periodic data refresh for real-time updates

### 9.3 Offline Support

- **Data Persistence**: Cache critical data for offline access
- **Offline Actions**: Queue actions for execution when online
- **Conflict Resolution**: Strategy for handling conflicts
- **Sync Indicators**: UI indicators for sync status

## 10. Error Handling & Loading States

### 10.1 Error Boundary Implementation

- **Global Error Boundary**: Catch unhandled errors
- **Feature-level Boundaries**: Isolate errors to specific features
- **Fallback UI**: User-friendly fallback components
- **Error Reporting**: Send errors to monitoring service

### 10.2 Loading State Management

- **Initial Load**: Skeleton screens for initial loading
- **Action Loading**: Button loading states
- **Partial Loading**: Load partial content while fetching more
- **Background Loading**: Invisible loading for background operations
- **Loading Indicators**: Consistent loading UI components

### 10.3 Error Display Patterns

- **Toast Notifications**: For transient errors
- **Inline Errors**: For form validation errors
- **Error Pages**: For critical navigation errors
- **Error Summaries**: For batch operations with multiple potential errors

## 11. Performance Optimization

### 11.1 Code Optimization

- **Code Splitting**: Split code by routes and large components
- **Tree Shaking**: Remove unused code
- **Bundle Analysis**: Regular analysis of bundle size
- **Dependency Management**: Minimize dependencies

### 11.2 Rendering Optimization

- **Memoization**: Use React.memo, useMemo, and useCallback
- **Virtualization**: Virtual lists for large datasets
- **Image Optimization**: Next.js Image component with proper sizing
- **Font Optimization**: Next.js Font optimization

### 11.3 Performance Metrics

- **Core Web Vitals**: LCP, FID, CLS targets
- **Time to Interactive**: Minimize TTI
- **First Contentful Paint**: Optimize FCP
- **Bundle Size Budget**: Maximum bundle size limits

## 12. Accessibility Standards

### 12.1 WCAG 2.1 Compliance

- **Perceivable**: Ensure content is perceivable to all users
- **Operable**: Ensure UI is operable by all users
- **Understandable**: Ensure content and operation are understandable
- **Robust**: Ensure content is robust enough for various user agents

### 12.2 Accessibility Implementation

- **Semantic HTML**: Use proper HTML elements
- **ARIA Attributes**: Add ARIA when necessary
- **Keyboard Navigation**: Ensure keyboard accessibility
- **Focus Management**: Proper focus handling
- **Color Contrast**: Meet minimum contrast ratios
- **Screen Readers**: Support screen reader announcements

### 12.3 Accessibility Testing

- **Automated Testing**: Regular automated accessibility checks
- **Manual Testing**: Keyboard navigation and screen reader testing
- **Focus Groups**: Testing with users with disabilities
- **Compliance Documentation**: Document accessibility features

## 13. Testing Strategy

### 13.1 Component Testing

- **Unit Tests**: Test individual components
- **Integration Tests**: Test component interactions
- **Snapshot Tests**: Visual regression testing
- **Accessibility Tests**: Test accessibility compliance

### 13.2 End-to-End Testing

- **Critical Flows**: Test complete user journeys
- **Cross-browser Testing**: Test on major browsers
- **Responsive Testing**: Test on various device sizes
- **Performance Testing**: Test loading and interaction performance

### 13.3 Testing Tools

- **Jest**: Unit and integration testing
- **React Testing Library**: Component testing
- **Cypress**: End-to-end testing
- **Lighthouse**: Performance and accessibility testing

## 14. Documentation Standards

### 14.1 Code Documentation

- **JSDoc Comments**: Document functions and components
- **Type Definitions**: Use TypeScript for type safety
- **Component Stories**: Document component usage with Storybook
- **Architecture Diagrams**: Document system architecture

### 14.2 Developer Documentation

- **Setup Guide**: Environment setup instructions
- **Style Guide**: Coding conventions and best practices
- **Workflow Guide**: Development workflow documentation
- **Troubleshooting Guide**: Common issues and solutions

## 15. Development Workflow

### 15.1 Version Control

- **Branching Strategy**: Feature branching with pull requests
- **Commit Style**: Conventional commits for readable history
- **Code Reviews**: Required reviews before merging
- **CI Integration**: Automated checks on pull requests

### 15.2 Development Environment

- **Local Setup**: Docker-based development environment
- **Hot Reloading**: Fast feedback during development
- **Dev Tools**: Browser extensions and debugging tools
- **Mock Services**: Mock APIs for offline development

### 15.3 Quality Assurance

- **Linting**: ESLint for code quality
- **Formatting**: Prettier for consistent formatting
- **Type Checking**: TypeScript for type safety
- **Pre-commit Hooks**: Automated checks before commits
