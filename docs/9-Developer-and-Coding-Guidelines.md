# Developer and Coding Guidelines

## Overview

This document outlines the comprehensive development standards, coding guidelines, and best practices for the Samudra ERP system. It provides a consistent framework for all developers to follow, ensuring code quality, maintainability, and alignment with the architectural vision of the system.

## 1. Development Principles

### 1.1 Core Principles

- **Simplicity**: Prefer simple solutions over complex ones
- **Readability**: Write code that is easy to read and understand
- **Maintainability**: Design for long-term maintenance
- **Testability**: Create code that is easy to test
- **Reusability**: Build reusable components
- **Separation of Concerns**: Clearly separate different aspects of the application
- **DRY (Don't Repeat Yourself)**: Avoid code duplication
- **SOLID Principles**: Follow object-oriented design principles

### 1.2 Architecture Adherence

- Follow the hexagonal architecture for backend services
- Implement microservice architecture with API-Gateway pattern
- Maintain clear separation between API, Business Logic, Data Access, and Infrastructure layers
- Use defined file naming conventions and folder structures
- Follow the repository pattern for data access
- Implement service layer pattern for business logic

## 2. Code Organization

### 2.1 Project Structure

#### Monorepo Structure

```
/
├── apps/                  # Application packages
│   ├── web/               # Next.js web application
│   ├── api/               # Express.js API
│   └── mobile/            # React Native mobile application
├── packages/              # Shared packages
│   ├── ui/                # Shared UI components
│   ├── eslint-config/     # ESLint configurations
│   ├── tsconfig/          # TypeScript configurations
│   ├── utils/             # Shared utilities
│   └── types/             # Shared TypeScript types
├── config/                # Configuration files
└── docs/                  # Documentation
```

#### Web Application Structure

```
/apps/web/
├── app/                   # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Dashboard routes
│   ├── api/               # API routes
│   └── ...                # Other route groups
├── components/            # Components library
│   ├── atoms/             # Atomic design structure
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── ui/                # Shadcn UI components
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
├── styles/                # Global styles
├── store/                 # Redux store
├── services/              # API service clients
└── types/                 # TypeScript type definitions
```

#### Backend API Structure

```
/apps/api/
├── src/
│   ├── api/               # API Layer
│   │   ├── controllers/   # Request handlers
│   │   ├── routes/        # Route definitions
│   │   ├── middleware/    # API middleware
│   │   └── validators/    # Request validation
│   ├── business/          # Business Layer
│   │   ├── services/      # Business logic
│   │   ├── events/        # Event handlers
│   │   └── workflows/     # Complex workflows
│   ├── data/              # Data Access Layer
│   │   ├── models/        # Database models
│   │   ├── repositories/  # Data access
│   │   └── migrations/    # Database migrations
│   ├── infrastructure/    # Infrastructure Layer
│   │   ├── database/      # Database connection
│   │   ├── cache/         # Cache implementation
│   │   ├── storage/       # File storage
│   │   └── external/      # External service clients
│   ├── utils/             # Utility functions
│   └── config/            # Configuration
└── tests/                 # Automated tests
```

#### Mobile Application Structure

```
/apps/mobile/
├── src/
│   ├── screens/           # Application screens
│   ├── navigation/        # Navigation configuration
│   ├── components/        # Component library
│   ├── hooks/             # Custom hooks
│   ├── store/             # Redux store
│   ├── services/          # API clients
│   ├── utils/             # Utility functions
│   ├── theme/             # Styling theme
│   └── types/             # TypeScript types
└── assets/                # Static assets
```

### 2.2 Naming Conventions

- **Directories**: kebab-case (e.g., `user-management`)
- **Files**: camelCase (e.g., `userService.js`)
- **Components**: PascalCase (e.g., `UserProfile.jsx`)
- **Classes**: PascalCase (e.g., `UserRepository`)
- **Functions and Methods**: camelCase (e.g., `getUserById`)
- **Variables**: camelCase (e.g., `userData`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_RETRY_COUNT`)
- **Interfaces/Types**: PascalCase with prefix (e.g., `IUser`, `TConfig`)
- **Database Collections**: camelCase (e.g., `users`, `shipmentOrders`)

### 2.3 File Organization

- One primary export per file
- Group related functionality in directories
- Keep files focused and manageable in size (< 300 lines)
- Organize imports consistently (external, internal, relative)
- Include clear file headers with description and author
- Maintain index files for clean exports

## 3. Coding Style

### 3.1 JavaScript/TypeScript Style

- Use ESLint with the project's defined rule set
- Format code with Prettier according to the defined style guide
- Use TypeScript for type safety and better developer experience
- Prefer const over let, avoid var
- Use destructuring for cleaner code
- Use arrow functions for brevity and lexical this
- Use async/await over promises when possible
- Use template literals for string concatenation
- Use optional chaining and nullish coalescing
- Use functional programming patterns where appropriate

### 3.2 CSS/Styling Style

- Use Tailwind CSS for styling
- Follow the project's design system and color palette
- Use utility-first approach with Tailwind
- Create custom utility classes for repeated patterns
- Use CSS variables for theme values
- Implement responsive designs with mobile-first approach
- Use CSS modules or styled-components for component-specific styles

### 3.3 Code Formatting

```javascript
// Example of properly formatted code
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import { fetchUserData } from '@/services/userService';
import { Card, Button, Text } from '@/components/ui';
import { formatDate } from '@/utils/dateUtils';

/**
 * UserProfile component displays user information and allows editing
 * @param {string} userId - The ID of the user to display
 * @returns {JSX.Element} Rendered component
 */
const UserProfile = ({ userId }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const { 
    data: userData,
    isLoading,
    error
  } = useQuery(['user', userId], () => fetchUserData(userId));
  
  useEffect(() => {
    if (error) {
      console.error('Error loading user data:', error);
    }
  }, [error]);
  
  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
  };
  
  if (isLoading) {
    return <div className="p-4">Loading user data...</div>;
  }
  
  if (error) {
    return <div className="p-4 text-red-500">Error loading user data</div>;
  }
  
  const { name, email, createdAt } = userData;
  
  return (
    <Card className="p-4 max-w-md">
      <div className="flex justify-between items-center mb-4">
        <Text variant="h3">{name}</Text>
        <Button onClick={handleEditClick}>
          {isEditing ? 'Cancel' : 'Edit'}
        </Button>
      </div>
      
      <div className="space-y-2">
        <div>
          <Text variant="label">Email</Text>
          <Text>{email}</Text>
        </div>
        <div>
          <Text variant="label">Member Since</Text>
          <Text>{formatDate(createdAt)}</Text>
        </div>
      </div>
      
      {isEditing && (
        <div className="mt-4">
          {/* Edit form would go here */}
        </div>
      )}
    </Card>
  );
};

export default UserProfile;
```

## 4. Documentation Standards

### 4.1 Code Comments

- Use JSDoc for functions, classes, and methods
- Include parameter and return type documentation
- Document complex logic and business rules
- Avoid obvious comments that duplicate code
- Use TODO, FIXME, and NOTE tags for temporary comments
- Include references to requirements or tickets when relevant

Example:

```javascript
/**
 * Calculates the shipping cost based on weight, distance, and service type
 * 
 * @param {number} weight - The weight of the package in kg
 * @param {number} distance - The shipping distance in km
 * @param {string} serviceType - The type of shipping service
 * @returns {number} The calculated shipping cost
 * @throws {ValidationError} If parameters are invalid
 */
function calculateShippingCost(weight, distance, serviceType) {
  // Implementation...
}
```

### 4.2 README Files

Each project and significant module should include a README.md with:

- Brief description of purpose
- Installation instructions
- Usage examples
- Configuration options
- Testing instructions
- Contributing guidelines
- Link to more detailed documentation

### 4.3 API Documentation

- Document all API endpoints with OpenAPI/Swagger
- Include endpoint descriptions, parameters, and responses
- Provide example requests and responses
- Document error responses and codes
- Include authentication requirements
- Document rate limits and performance considerations

## 5. TypeScript Usage

### 5.1 Type Definitions

- Define interfaces for all major data structures
- Use type aliases for complex types
- Define enum types for fixed sets of values
- Use generics for reusable components
- Avoid using `any` type when possible
- Use strict null checks
- Document complex types with JSDoc

Example:

```typescript
/**
 * Represents a shipment in the system
 */
interface Shipment {
  id: string;
  waybillNo: string;
  sender: {
    id: string;
    name: string;
    contactInfo: ContactInfo;
  };
  receiver: {
    name: string;
    contactInfo: ContactInfo;
  };
  packageDetails: {
    weight: number;
    dimensions?: Dimensions;
    description: string;
    itemCount: number;
  };
  status: ShipmentStatus;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Contact information for parties
 */
interface ContactInfo {
  address: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
  email?: string;
}

/**
 * Package dimensions
 */
interface Dimensions {
  length: number;
  width: number;
  height: number;
  unit: 'cm' | 'in';
}

/**
 * Possible shipment statuses
 */
enum ShipmentStatus {
  PENDING = 'pending',
  PICKED_UP = 'picked_up',
  IN_TRANSIT = 'in_transit',
  OUT_FOR_DELIVERY = 'out_for_delivery',
  DELIVERED = 'delivered',
  RETURNED = 'returned',
  CANCELLED = 'cancelled'
}
```

### 5.2 Type Safety

- Enable strict TypeScript configuration
- Use type guards for runtime type checking
- Leverage TypeScript's utility types
- Define discriminated unions for complex state
- Use mapped types for consistent transformations
- Ensure API responses are properly typed
- Use unknown instead of any for API responses

## 6. Error Handling

### 6.1 Error Types

- Create a hierarchy of custom error classes
- Use descriptive error names and messages
- Include relevant context in errors
- Distinguish between operational and programmer errors
- Create specific error types for different scenarios

Example:

```javascript
class BaseError extends Error {
  constructor(code, message, details = null, httpStatus = 500) {
    super(message);
    this.code = code;
    this.details = details;
    this.httpStatus = httpStatus;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class ValidationError extends BaseError {
  constructor(message, details = null) {
    super('VALIDATION_ERROR', message, details, 400);
  }
}

class AuthError extends BaseError {
  constructor(message, details = null) {
    super('AUTH_ERROR', message, details, 401);
  }
}

class BusinessError extends BaseError {
  constructor(code, message, details = null) {
    super(code, message, details, 400);
  }
}

class NotFoundError extends BaseError {
  constructor(resource, id) {
    super(
      'NOT_FOUND',
      `${resource} with id ${id} not found`,
      null,
      404
    );
  }
}
```

### 6.2 Error Handling Patterns

- Use try-catch blocks for error handling
- Centralized error handling middleware for APIs
- Error boundaries for React components
- Don't swallow errors silently
- Log errors with appropriate context
- Present user-friendly error messages
- Include error tracking with unique identifiers

Example:

```javascript
try {
  const result = await processOrder(orderData);
  return result;
} catch (error) {
  if (error instanceof ValidationError) {
    // Handle validation errors
    logger.warn('Validation error during order processing', {
      orderId: orderData.id,
      error: error.message,
      details: error.details
    });
    // Return appropriate response
  } else if (error instanceof BusinessError) {
    // Handle business logic errors
    logger.error('Business rule violation during order processing', {
      orderId: orderData.id,
      error: error.message,
      code: error.code
    });
    // Return appropriate response
  } else {
    // Handle unexpected errors
    logger.error('Unexpected error during order processing', {
      orderId: orderData.id,
      error: error.message,
      stack: error.stack
    });
    // Return generic error response
    throw error; // Re-throw for global handler
  }
}
```

## 7. Testing Standards

### 7.1 Unit Testing

- Write tests with Jest/Vitest
- Follow AAA pattern (Arrange-Act-Assert)
- Test one concern per test
- Use descriptive test names
- Mock external dependencies
- Aim for high test coverage (minimum 80%)
- Test edge cases and error scenarios

Example:

```javascript
describe('calculateShippingCost', () => {
  // Arrange - Setup
  const standardServiceType = 'standard';
  const expressServiceType = 'express';
  
  test('calculates correct cost for standard service', () => {
    // Arrange
    const weight = 5; // 5kg
    const distance = 100; // 100km
    
    // Act
    const cost = calculateShippingCost(weight, distance, standardServiceType);
    
    // Assert
    expect(cost).toBe(50); // 5kg * 100km * standard rate
  });
  
  test('calculates correct cost for express service', () => {
    // Arrange
    const weight = 5; // 5kg
    const distance = 100; // 100km
    
    // Act
    const cost = calculateShippingCost(weight, distance, expressServiceType);
    
    // Assert
    expect(cost).toBe(75); // 5kg * 100km * express rate
  });
  
  test('throws error for invalid weight', () => {
    // Arrange
    const weight = -5; // Invalid weight
    const distance = 100;
    
    // Act & Assert
    expect(() => {
      calculateShippingCost(weight, distance, standardServiceType);
    }).toThrow(ValidationError);
  });
});
```

### 7.2 Integration Testing

- Test API endpoints with Supertest
- Test database interactions
- Test component integration
- Use test databases for integration tests
- Clean up test data after tests
- Test authentication and authorization

### 7.3 End-to-End Testing

- Write E2E tests with Cypress
- Test critical user flows
- Focus on high-value business processes
- Use realistic test data
- Test across different environments
- Include mobile-specific E2E tests with Detox

## 8. Git Workflow

### 8.1 Branch Strategy

- **main/master**: Production-ready code
- **develop**: Integration branch for features
- **feature/[feature-name]**: New feature development
- **bugfix/[bug-description]**: Bug fixes
- **hotfix/[hotfix-description]**: Production hotfixes
- **release/[version]**: Release preparation

### 8.2 Commit Standards

- Use conventional commits format
- Write clear commit messages
- Reference issue/ticket numbers
- Keep commits focused and atomic
- Squash commits before merging when appropriate

Example commit messages:

```
feat(auth): implement multi-factor authentication
fix(shipment): correct weight calculation formula
docs(readme): update installation instructions
chore(deps): update dependencies
test(api): add tests for billing endpoints
refactor(utils): simplify date formatting functions
```

### 8.3 Pull Request Process

- Create descriptive PR titles
- Include detailed description of changes
- Reference related issues
- Add screenshots for UI changes
- Ensure all tests pass
- Address code review comments
- Squash and merge when approved
- Delete branch after merging

## 9. Performance Optimization

### 9.1 Frontend Performance

- Use Next.js Image component for optimized images
- Implement code splitting with dynamic imports
- Minimize bundle size
- Optimize render performance
- Memoize expensive calculations
- Virtualize long lists
- Implement lazy loading
- Follow Core Web Vitals guidelines

### 9.2 Backend Performance

- Optimize database queries
- Implement appropriate indexing
- Use caching for frequent data
- Paginate large result sets
- Optimize file uploads and processing
- Use connection pooling
- Implement rate limiting
- Optimize API response size

### 9.3 Mobile Performance

- Minimize app size
- Optimize image usage
- Implement efficient list rendering
- Minimize JS bridge usage
- Optimize animations
- Reduce unnecessary re-renders
- Implement efficient state management
- Optimize battery usage
