# Windsurf Rules for Samudra ERP

## Overview

This document defines the authoritative set of rules, standards, and principles that govern the development of the Samudra ERP system for PT. Sarana Mudah Raya (Samudra Paket). All development teams must adhere to these rules to ensure consistency, quality, and alignment with the project's architectural vision.

## 1. Architecture & Structure

### 1.1 Architecture Rules

1. **Hexagonal Architecture**: Backend services must follow hexagonal (ports and adapters) architecture with clear separation between API, Business Logic, Data Access, and Infrastructure layers.

2. **Microservice Architecture**: Implement microservice architecture with API-Gateway pattern for service communication.

3. **Monorepo Structure**: Use Turborepo for managing packages and dependencies in a monorepo structure.

4. **Naming Conventions**: Follow the defined file naming conventions:
   - kebab-case for directories
   - camelCase for files
   - PascalCase for components and classes

5. **Folder Structure**: Maintain consistent folder structure as defined in the File Structure Document.

6. **Clear Boundaries**: Maintain clear boundaries between modules and services.

7. **Code Organization**: Organize code by feature and domain, not by technical type.

8. **Layer Isolation**: Each layer should only depend on interfaces of the layers beneath it, not implementations.

9. **Dependency Direction**: Dependencies should always point inward, from outer layers to inner layers.

10. **Interface Segregation**: Define focused interfaces that serve specific clients rather than general-purpose interfaces.

## 2. Frontend Development

### 2.1 Web Application Rules

1. **Framework**: Build web applications using Next.js 14.x with App Router architecture.

2. **Language**: Use JavaScript for web application development.

3. **Component Design**: Implement Atomic Design methodology for component organization:
   - Atoms: Basic building blocks (buttons, inputs, icons)
   - Molecules: Simple component combinations (form fields, search bars)
   - Organisms: Complex UI sections (navigation bars, forms, cards)
   - Templates: Page layouts without specific content
   - Pages: Complete views with actual content

4. **Styling**: Use Tailwind CSS 3.x with the defined color palette:
   - Primary: #2563EB (Blue)
   - Secondary: #10B981 (Green)
   - Accent: #F59E0B (Amber)
   - Neutral: #6B7280 (Gray)
   - Error: #EF4444 (Red)

5. **Component Library**: Use Shadcn UI for consistent component styling.

6. **Responsive Design**: Follow mobile-first responsive design approach with defined breakpoints:
   - sm: 640px
   - md: 768px
   - lg: 1024px
   - xl: 1280px
   - 2xl: 1536px

7. **State Management Strategy**:
   - Redux Toolkit for global state
   - React Query for server state
   - React Context API for local component state

8. **Form Handling**: Create comprehensive form handling with React Hook Form and Zod validation.

9. **Accessibility**: Design all UI with WCAG 2.1 Level AA compliance.

10. **Error Handling**: Implement proper error handling and loading states for all async operations.

### 2.2 Mobile Application Rules

1. **Framework**: Build mobile apps with React Native and Expo SDK.

2. **Language**: Use TypeScript for mobile application development.

3. **Offline-First**: Design mobile apps with offline-first functionality using:
   - AsyncStorage for non-sensitive data
   - SecureStore for sensitive information
   - Sync Manager for data synchronization

4. **Device Integration**: Implement device integration features:
   - Camera for photo capture and barcode scanning
   - GPS for location tracking and geofencing
   - Biometric authentication
   - Signature capture

5. **UI Components**: Use React Native Paper for consistent UI components.

6. **Navigation**: Use React Navigation for app navigation.

7. **State Management**: Use the same state management strategy as web with mobile-specific optimizations.

8. **Battery Efficiency**: Optimize for battery life and data usage for field conditions.

9. **Sync Strategy**: Implement secure data synchronization with conflict resolution.

10. **Graceful Degradation**: Support both online and offline operations for field staff.

## 3. Backend Development

### 3.1 API Development Rules

1. **Runtime & Framework**: Develop with Node.js 18.x LTS and Express.js 4.x.

2. **Language**: Use JavaScript for backend development.

3. **API Design**: Implement REST API principles with consistent request/response format.

4. **Authentication**: Use JWT-based authentication with RBAC authorization.

5. **Data Access**: Follow the repository pattern for data access layer.

6. **Business Logic**: Implement service layer pattern for business logic.

7. **Documentation**: Create comprehensive API documentation with Swagger/OpenAPI 3.0.

8. **Error Handling**: Follow the standardized error handling strategy with proper error types:
   - BaseError
   - ValidationError
   - AuthError
   - BusinessError

9. **Status Codes**: Design APIs with proper semantic status codes (200, 201, 400, 401, 403, 404, 500).

10. **Middleware**: Use middleware for cross-cutting concerns (authentication, validation, error handling).

### 3.2 Database Rules

1. **Database System**: Use MongoDB 6.x as the primary database with Mongoose 7.x ODM.

2. **Data Modeling**: Implement proper data models with validation at both schema and API levels.

3. **Document Structure**: Use Embedded Document pattern for related data with 1:1 or 1:few relationships.

4. **Indexing Strategy**: Implement proper indexing strategy for query optimization.

5. **Caching**: Use Redis 7.x for caching frequently accessed data.

6. **File Storage**: Store files in Railway Volumes (S3-compatible storage).

7. **Query Optimization**: Design efficient queries with proper projection and pagination.

8. **Transactions**: Use transactions for operations that require atomicity.

9. **Validation**: Implement comprehensive validation at both model and API levels.

10. **Migrations**: Maintain versioned database migrations for schema changes.

## 4. DevOps & Deployment

### 4.1 Development Process Rules

1. **Version Control**: Use Git with feature branching and pull requests.

2. **CI/CD**: Implement CI/CD pipeline using GitHub Actions.

3. **Environment Strategy**: Maintain Development, Staging, and Production environments.

4. **Docker**: Use Docker for local development environment.

5. **Logging**: Implement proper logging with Winston.

6. **Monitoring**: Set up monitoring for application performance and error tracking.

7. **Deployment Target**: Deploy to Railway.com platform with Git-based continuous deployment.

8. **Backup Strategy**: Follow the defined backup and disaster recovery procedures.

9. **Environment Variables**: Use environment variables for configuration.

10. **Infrastructure as Code**: Define infrastructure using code (Railway configuration).

## 5. Code Quality & Standards

### 5.1 Code Quality Rules

1. **Linting**: Use ESLint for code linting with the defined rule set.

2. **Formatting**: Format code with Prettier according to the defined style guide.

3. **Testing**: Write unit tests with Jest/Vitest for business logic.

4. **Integration Testing**: Implement integration tests for API endpoints.

5. **Git Workflow**: Follow the defined Git workflow for feature branches and pull requests.

6. **Code Reviews**: Conduct code reviews for all changes before merging.

7. **Documentation**: Maintain code documentation with JSDoc comments.

8. **Type Safety**: Use TypeScript types or JSDoc type annotations.

9. **Complexity**: Keep functions and methods focused and manageable (< 50 lines recommended).

10. **DRY Principle**: Don't repeat yourself - extract reusable functions and components.

### 5.2 Naming Rules

1. **Clear Names**: Use clear, descriptive names for all variables, functions, and components.

2. **Consistency**: Maintain consistent naming patterns across the codebase.

3. **Abbreviations**: Avoid abbreviations except for widely known ones.

4. **Boolean Variables**: Prefix boolean variables with "is", "has", or "should".

5. **Functions**: Name functions after what they do, not how they do it.

6. **Components**: Name components after their purpose or what they display.

7. **Event Handlers**: Prefix event handlers with "handle" or "on".

8. **Constants**: Use UPPER_SNAKE_CASE for constants.

9. **Interfaces/Types**: Prefix interfaces with "I" and types with "T".

10. **Files**: Name files after their primary export.

## 6. Security Guidelines

### 6.1 Security Rules

1. **Authentication**: Implement proper authentication and authorization for all endpoints.

2. **HTTPS**: Use HTTPS for all communications.

3. **Input Validation**: Sanitize all user inputs to prevent injection attacks.

4. **Output Encoding**: Properly encode all outputs to prevent XSS.

5. **Rate Limiting**: Implement rate limiting to prevent abuse.

6. **Sensitive Data**: Store sensitive data securely (passwords, API keys, etc.).

7. **Least Privilege**: Follow the principle of least privilege for user permissions.

8. **Audit Logging**: Maintain audit logs for security-relevant events.

9. **Session Management**: Implement proper session management and token handling.

10. **Security Headers**: Set appropriate security headers for all responses.

## 7. Performance Optimization

### 7.1 Performance Rules

1. **Database Queries**: Optimize database queries with proper indexing.

2. **Caching Strategy**: Implement caching for frequently accessed data.

3. **Code Splitting**: Use code splitting and lazy loading for frontend applications.

4. **Asset Optimization**: Optimize images and assets for web and mobile.

5. **Bundle Size**: Minimize JavaScript bundle size.

6. **Error Boundaries**: Implement proper error boundaries and fallbacks.

7. **Virtualization**: Use virtualization for long lists.

8. **Network Requests**: Minimize and optimize network requests.

9. **Performance Budgets**: Follow the defined performance budgets for load times and bundle sizes.

10. **Monitoring**: Monitor and analyze performance metrics.

## 8. Testing Strategy

### 8.1 Testing Rules

1. **Test Coverage**: Maintain minimum 80% test coverage for business logic.

2. **Unit Testing**: Write unit tests for all business logic and utilities.

3. **Integration Testing**: Write integration tests for API endpoints.

4. **E2E Testing**: Implement end-to-end tests for critical flows.

5. **Component Testing**: Test UI components for proper rendering and behavior.

6. **Test Isolation**: Ensure tests are isolated and don't depend on each other.

7. **Test Data**: Use fixtures or factories for test data.

8. **Mocking**: Mock external dependencies in unit tests.

9. **CI Integration**: Run tests automatically in CI pipeline.

10. **Test Documentation**: Document test cases and test strategies.

## 9. Documentation Requirements

### 9.1 Documentation Rules

1. **API Documentation**: Document all API endpoints with Swagger/OpenAPI.

2. **Code Documentation**: Use JSDoc comments for functions, classes, and components.

3. **README Files**: Maintain README files for all projects and significant modules.

4. **Architecture Documentation**: Document system architecture and design decisions.

5. **User Documentation**: Create user documentation for system features.

6. **Deployment Documentation**: Document deployment procedures and requirements.

7. **Testing Documentation**: Document testing strategies and test cases.

8. **Change Log**: Maintain a change log for all significant changes.

9. **Technical Specifications**: Create technical specifications for complex features.

10. **Knowledge Base**: Contribute to the project knowledge base.

## 10. Development Workflow

### 10.1 Workflow Rules

1. **Issue Tracking**: Track all work items in the issue tracking system.

2. **Branching Strategy**:
   - main/master: Production-ready code
   - develop: Integration branch
   - feature/*: Feature development
   - bugfix/*: Bug fixes
   - release/*: Release preparation
   - hotfix/*: Production hotfixes

3. **Commit Messages**: Use conventional commit format:
   - feat: New feature
   - fix: Bug fix
   - docs: Documentation changes
   - style: Formatting changes
   - refactor: Code refactoring
   - test: Adding or updating tests
   - chore: Maintenance tasks

4. **Pull Requests**: Create pull requests for all changes with descriptive titles and descriptions.

5. **Code Reviews**: Require at least one code review before merging.

6. **CI Checks**: Ensure all CI checks pass before merging.

7. **Documentation Updates**: Update relevant documentation with code changes.

8. **Testing**: Include appropriate tests with all changes.

9. **Version Bumping**: Update version numbers according to semver principles.

10. **Release Process**: Follow the defined release process for production deployments.

## 11. Project Implementation

### 11.1 Implementation Rules

1. **Phased Approach**: Follow the defined timeline and phasing from Project Requirements Document.

2. **Milestone Tracking**: Track and report on milestone completion.

3. **Success Metrics**: Implement success metrics tracking as defined in Project Requirements Document.

4. **Risk Mitigation**: Address risk mitigation strategies for identified project risks.

5. **Stakeholder Communication**: Maintain regular communication with stakeholders.

6. **Change Management**: Follow the defined change management process for requirement changes.

7. **Quality Gates**: Enforce quality gates before proceeding to next phase.

8. **User Acceptance**: Obtain user acceptance for completed features.

9. **Documentation**: Document all major decisions and architectural changes.

10. **Post-Implementation Support**: Provide post-implementation support as defined in the support plan.

## 12. Mobile-Specific Rules

### 12.1 Mobile Development Rules

1. **Offline Support**: All critical features must work offline.

2. **Sync Strategy**: Implement efficient sync with retry mechanisms.

3. **Error Recovery**: Provide graceful error recovery for network issues.

4. **Battery Optimization**: Optimize location updates and background tasks for battery life.

5. **Storage Management**: Implement proper storage management for device constraints.

6. **Performance**: Ensure smooth performance on mid-range devices.

7. **Permissions**: Request only necessary permissions with clear explanations.

8. **Feedback**: Provide clear feedback for all user actions.

9. **Connectivity Awareness**: Make app aware of connectivity changes.

10. **Testing**: Test on actual devices, not just emulators.

## 13. Compliance & Standards

### 13.1 Compliance Rules

1. **Accessibility**: Comply with WCAG 2.1 Level AA for web interfaces.

2. **Data Protection**: Implement proper data protection measures.

3. **Localization**: Support localization for Indonesian language.

4. **Legal Requirements**: Ensure compliance with relevant legal requirements.

5. **Industry Standards**: Follow logistics industry standards for data exchange.

6. **Audit Trails**: Maintain audit trails for compliance purposes.

7. **Reporting Requirements**: Support required business reporting.

8. **Data Retention**: Implement appropriate data retention policies.

9. **User Consent**: Obtain and record user consent where required.

10. **Accessibility Testing**: Include accessibility in testing process.

## 14. Exception Handling

### 14.1 Exception Rules

1. **Never Swallow Exceptions**: Always handle or propagate exceptions.

2. **Appropriate Level**: Handle exceptions at the appropriate level.

3. **User-Friendly Messages**: Present user-friendly error messages.

4. **Logging**: Log all exceptions with context.

5. **Recovery Actions**: Provide recovery actions when possible.

6. **Validation Errors**: Handle validation errors with clear feedback.

7. **Network Errors**: Gracefully handle network and connectivity errors.

8. **External Service Errors**: Handle external service failures.

9. **Database Errors**: Properly handle and recover from database errors.

10. **Unexpected Errors**: Capture and report unexpected errors.

## 15. Code Review Checklist

### 15.1 Code Review Rules

1. **Functionality**: Does the code work as expected?

2. **Security**: Are there any security vulnerabilities?

3. **Performance**: Is the code efficient?

4. **Readability**: Is the code clear and understandable?

5. **Testability**: Is the code testable?

6. **Error Handling**: Is error handling comprehensive?

7. **Documentation**: Is the code properly documented?

8. **Style Compliance**: Does the code follow style guidelines?

9. **Business Logic**: Does the code correctly implement business rules?

10. **Edge Cases**: Are edge cases handled appropriately?

## 16. Definition of Done

### 16.1 Done Rules

1. **Code Complete**: All code is written and committed.

2. **Tests Passed**: All automated tests pass.

3. **Code Reviewed**: Code has been reviewed and approved.

4. **Documentation Updated**: Documentation is updated.

5. **Acceptance Criteria Met**: All acceptance criteria are satisfied.

6. **Performance Tested**: Performance testing completed.

7. **Security Verified**: Security requirements verified.

8. **Accessibility Checked**: Accessibility requirements checked.

9. **Browser/Device Tested**: Tested on target browsers/devices.

10. **Product Owner Approval**: Product owner has approved the feature.
