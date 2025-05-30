# Backend Guidelines and Structure

## Overview

This document outlines the comprehensive backend development guidelines, architecture, and structure for the Samudra ERP system. It provides standards, best practices, and architectural patterns that ensure consistency, maintainability, and scalability across all backend components.

## 1. Architecture & Design Principles

### 1.1 Architectural Overview

The backend architecture follows hexagonal (ports and adapters) architecture with clear separation of concerns:

- **API Layer**: Handles HTTP requests and responses
- **Business Logic Layer**: Contains core business rules and workflows
- **Data Access Layer**: Manages data persistence and retrieval
- **Infrastructure Layer**: Provides technical capabilities and external integrations

### 1.2 Microservice Architecture

The system implements a microservice architecture with the following characteristics:

- **Service Boundaries**: Defined by business domains
- **Independent Deployment**: Each service can be deployed independently
- **Data Isolation**: Each service owns its data
- **API Gateway**: Central entry point for client requests
- **Service Communication**: REST APIs and event-based communication

### 1.3 Design Principles

- **Separation of Concerns**: Clear boundaries between layers
- **Dependency Inversion**: High-level modules do not depend on low-level modules
- **Single Responsibility**: Each component has one reason to change
- **Open/Closed**: Open for extension, closed for modification
- **Interface Segregation**: Clients should not depend on interfaces they don't use
- **Explicit Dependencies**: Dependencies are explicitly declared

## 2. Technology Stack

### 2.1 Core Technologies

- **Runtime**: Node.js 18.x LTS
- **Framework**: Express.js 4.x
- **Language**: JavaScript
- **Database**: MongoDB 6.x with Mongoose 7.x ODM
- **Caching**: Redis 7.x

### 2.2 Additional Libraries

- **Validation**: Joi/Yup for request validation
- **Authentication**: JWT for token-based authentication
- **Documentation**: Swagger/OpenAPI 3.0
- **Logging**: Winston for structured logging
- **Testing**: Jest for unit and integration testing
- **HTTP Client**: Axios for external API calls
- **File Handling**: Multer for file uploads
- **Image Processing**: Sharp for image manipulation
- **PDF Generation**: PDFKit for document generation
- **Email**: Nodemailer for email sending
- **SMS**: Twilio/Nexmo for SMS notifications
- **Scheduling**: node-cron for scheduled tasks

## 3. Project Structure

### 3.1 High-Level Structure

```
/apps/api
├── src
│   ├── api              # API Layer
│   ├── business         # Business Logic Layer
│   ├── data             # Data Access Layer
│   ├── infrastructure   # Infrastructure Layer
│   ├── utils            # Utility functions
│   └── config           # Configuration
├── tests                # Automated tests
└── scripts              # Utility scripts
```

### 3.2 API Layer

```
/api
├── controllers          # Request handlers
│   ├── auth
│   ├── branches
│   ├── employees
│   ├── shipments
│   └── ...
├── routes               # Route definitions
│   ├── auth.routes.js
│   ├── branches.routes.js
│   ├── employees.routes.js
│   ├── shipments.routes.js
│   └── ...
├── middleware           # API middleware
│   ├── auth.middleware.js
│   ├── validation.middleware.js
│   ├── error.middleware.js
│   └── ...
├── validators           # Request validation
│   ├── auth.validators.js
│   ├── branches.validators.js
│   ├── employees.validators.js
│   └── ...
└── responses            # Response formatters
    ├── success.response.js
    └── error.response.js
```

### 3.3 Business Logic Layer

```
/business
├── services             # Business services
│   ├── auth.service.js
│   ├── branch.service.js
│   ├── employee.service.js
│   ├── shipment.service.js
│   └── ...
├── events               # Event handlers
│   ├── shipment.events.js
│   ├── payment.events.js
│   └── ...
├── workflows            # Complex workflows
│   ├── pickup.workflow.js
│   ├── delivery.workflow.js
│   ├── billing.workflow.js
│   └── ...
└── errors               # Business errors
    ├── base.error.js
    ├── validation.error.js
    ├── auth.error.js
    ├── business.error.js
    └── ...
```

### 3.4 Data Access Layer

```
/data
├── models               # Database models
│   ├── user.model.js
│   ├── branch.model.js
│   ├── employee.model.js
│   ├── shipment.model.js
│   └── ...
├── repositories         # Data access repositories
│   ├── user.repository.js
│   ├── branch.repository.js
│   ├── employee.repository.js
│   ├── shipment.repository.js
│   └── ...
├── migrations           # Database migrations
│   ├── initial.migration.js
│   └── ...
└── seeds                # Seed data
    ├── roles.seed.js
    ├── admin.seed.js
    └── ...
```

### 3.5 Infrastructure Layer

```
/infrastructure
├── database             # Database connection
│   ├── connection.js
│   ├── mongoose.js
│   └── ...
├── cache                # Cache implementation
│   ├── redis.js
│   ├── cache.service.js
│   └── ...
├── storage              # File storage
│   ├── s3.js
│   ├── local.js
│   └── ...
├── queue                # Message queue
│   ├── queue.service.js
│   └── ...
├── email                # Email service
│   ├── email.service.js
│   ├── templates
│   └── ...
├── sms                  # SMS service
│   ├── sms.service.js
│   └── ...
└── external             # External service clients
    ├── maps.service.js
    ├── payment.service.js
    └── ...
```

## 4. API Design

### 4.1 RESTful API Guidelines

- **Resource-Oriented**: APIs are organized around resources
- **HTTP Methods**: Use appropriate HTTP methods (GET, POST, PUT, DELETE)
- **URL Structure**: Follow consistent URL patterns
- **Status Codes**: Use semantic HTTP status codes
- **Query Parameters**: For filtering, sorting, and pagination
- **Versioning**: Include API version in URL path

### 4.2 URL Patterns

```
# Collection endpoints
GET    /api/v1/resources        # List resources
POST   /api/v1/resources        # Create a resource

# Singular endpoints
GET    /api/v1/resources/:id    # Get a resource
PUT    /api/v1/resources/:id    # Update a resource
DELETE /api/v1/resources/:id    # Delete a resource

# Sub-resource endpoints
GET    /api/v1/resources/:id/sub-resources        # List sub-resources
POST   /api/v1/resources/:id/sub-resources        # Create a sub-resource
GET    /api/v1/resources/:id/sub-resources/:subId # Get a sub-resource
PUT    /api/v1/resources/:id/sub-resources/:subId # Update a sub-resource
DELETE /api/v1/resources/:id/sub-resources/:subId # Delete a sub-resource

# Action endpoints
POST   /api/v1/resources/:id/actions/:action      # Perform an action
```

### 4.3 Request Format

```json
{
  "data": {
    "property1": "value1",
    "property2": "value2",
    "nested": {
      "property3": "value3"
    }
  },
  "meta": {
    "clientInfo": {
      "version": "1.0.0",
      "platform": "web"
    }
  }
}
```

### 4.4 Response Format

```json
{
  "success": true,
  "data": {
    "id": "123456",
    "property1": "value1",
    "property2": "value2",
    "nested": {
      "property3": "value3"
    },
    "createdAt": "2025-01-01T00:00:00Z",
    "updatedAt": "2025-01-02T00:00:00Z"
  },
  "meta": {
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 100,
      "totalPages": 10
    }
  }
}
```

### 4.5 Error Response Format

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  }
}
```

## 5. Database Design

### 5.1 MongoDB Schema Design

- **Document Structure**: Well-defined document schemas
- **Embedded Documents**: Use for related data with 1:1 or 1:few relationships
- **References**: Use for 1:many or many:many relationships
- **Denormalization**: Strategic duplication for read performance
- **Schema Validation**: Use MongoDB schema validation

### 5.2 Mongoose Implementation

- **Schema Definition**: Clear and consistent schema definitions
- **Middleware**: Use hooks for pre/post operations
- **Virtuals**: For computed properties
- **Methods**: For document instance methods
- **Statics**: For model static methods
- **Query Helpers**: For custom query methods
- **Plugins**: For reusable schema functionality

### 5.3 Indexing Strategy

- **Performance Indexes**: Based on query patterns
- **Unique Indexes**: For uniqueness constraints
- **Compound Indexes**: For multi-field queries
- **Text Indexes**: For text search
- **Geospatial Indexes**: For location-based queries

### 5.4 Example Schema

```javascript
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  passwordHash: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: true
  },
  branch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Branch'
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'suspended'],
    default: 'active'
  },
  lastLogin: {
    type: Date
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function(doc, ret) {
      delete ret.passwordHash;
      delete ret.salt;
      return ret;
    }
  }
});

// Indexes
userSchema.index({ username: 1 });
userSchema.index({ email: 1 });
userSchema.index({ role: 1 });
userSchema.index({ branch: 1 });
userSchema.index({ status: 1 });

// Virtuals
userSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

// Methods
userSchema.methods.verifyPassword = function(password) {
  // Password verification logic
};

// Statics
userSchema.statics.findByUsername = function(username) {
  return this.findOne({ username });
};

// Middleware
userSchema.pre('save', async function(next) {
  // Pre-save logic
  next();
});
```

## 6. Authentication & Authorization

### 6.1 Authentication Implementation

- **JWT-Based**: Token-based authentication with JWT
- **Token Structure**: Header, payload, signature
- **Token Storage**: HTTP-only cookies or secure client storage
- **Token Renewal**: Refresh token mechanism
- **Session Management**: Token expiration and renewal strategy

### 6.2 RBAC Implementation

- **Role Model**: Define roles with permissions
- **Permission Check**: Middleware for route protection
- **Resource Ownership**: Validate resource access rights
- **Role Hierarchy**: Support for role inheritance
- **Dynamic Permissions**: Runtime permission checks

### 6.3 Authentication Flow

1. User submits credentials
2. Server validates credentials
3. Server generates access token and refresh token
4. Tokens are returned to client
5. Client includes access token in subsequent requests
6. Server validates token on each request
7. Client uses refresh token to get new access token when needed

### 6.4 Authorization Middleware

```javascript
// Permission-based middleware
const checkPermission = (permission) => {
  return async (req, res, next) => {
    try {
      const user = req.user;
      
      // Get user role and permissions
      const role = await Role.findById(user.role).select('permissions');
      
      if (!role) {
        return res.status(403).json({
          success: false,
          error: {
            code: 'FORBIDDEN',
            message: 'Access denied. Role not found.'
          }
        });
      }
      
      // Check if role has required permission
      if (!role.permissions.includes(permission)) {
        return res.status(403).json({
          success: false,
          error: {
            code: 'FORBIDDEN',
            message: 'Access denied. Insufficient permissions.'
          }
        });
      }
      
      next();
    } catch (error) {
      next(error);
    }
  };
};
```

## 7. Error Handling

### 7.1 Error Types

- **BaseError**: Abstract base error class
- **ValidationError**: For input validation failures
- **AuthError**: For authentication/authorization issues
- **BusinessError**: For business rule violations
- **InfrastructureError**: For external service failures
- **NotFoundError**: For resource not found issues
- **ConflictError**: For resource conflicts

### 7.2 Error Hierarchy

```javascript
// Base Error
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

// Validation Error
class ValidationError extends BaseError {
  constructor(message, details = null) {
    super('VALIDATION_ERROR', message, details, 400);
  }
}

// Auth Error
class AuthError extends BaseError {
  constructor(message, details = null) {
    super('AUTH_ERROR', message, details, 401);
  }
}

// Business Error
class BusinessError extends BaseError {
  constructor(code, message, details = null) {
    super(code, message, details, 400);
  }
}

// Not Found Error
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

### 7.3 Error Middleware

```javascript
const errorMiddleware = (err, req, res, next) => {
  // Log error
  logger.error({
    message: err.message,
    stack: err.stack,
    name: err.name,
    code: err.code,
    path: req.path,
    method: req.method
  });

  // Handle known errors
  if (err instanceof BaseError) {
    return res.status(err.httpStatus).json({
      success: false,
      error: {
        code: err.code,
        message: err.message,
        details: err.details
      }
    });
  }

  // Handle Mongoose validation errors
  if (err.name === 'ValidationError') {
    const details = Object.values(err.errors).map(error => ({
      field: error.path,
      message: error.message
    }));

    return res.status(400).json({
      success: false,
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Validation failed',
        details
      }
    });
  }

  // Handle JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      success: false,
      error: {
        code: 'INVALID_TOKEN',
        message: 'Invalid token'
      }
    });
  }

  // Handle unknown errors
  return res.status(500).json({
    success: false,
    error: {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred'
    }
  });
};
```

## 8. Logging & Monitoring

### 8.1 Logging Implementation

- **Structured Logging**: JSON format for machine readability
- **Log Levels**: ERROR, WARN, INFO, DEBUG, TRACE
- **Context Enrichment**: Add request ID, user ID, etc.
- **Sensitive Data Filtering**: Mask passwords, tokens, etc.
- **Centralized Logging**: Store logs in centralized service

### 8.2 Winston Configuration

```javascript
const winston = require('winston');
const { format } = winston;

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'api-service' },
  transports: [
    new winston.transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, ...meta }) => {
          return `${timestamp} ${level}: ${message} ${
            Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''
          }`;
        })
      )
    })
  ]
});

// Add request context middleware
const requestLogger = (req, res, next) => {
  req.requestId = uuidv4();
  req.startTime = Date.now();
  
  const requestLog = {
    requestId: req.requestId,
    method: req.method,
    url: req.url,
    ip: req.ip,
    userAgent: req.get('User-Agent')
  };
  
  if (req.user) {
    requestLog.userId = req.user.id;
  }
  
  logger.info('Request received', requestLog);
  
  res.on('finish', () => {
    const responseTime = Date.now() - req.startTime;
    
    logger.info('Response sent', {
      requestId: req.requestId,
      statusCode: res.statusCode,
      responseTime
    });
  });
  
  next();
};
```

### 8.3 Monitoring Strategy

- **Health Checks**: Endpoint for system health
- **Metrics Collection**: Response times, error rates, etc.
- **Resource Monitoring**: CPU, memory, disk usage
- **Custom Metrics**: Business metrics tracking
- **Alerting**: Notification for critical issues

## 9. Testing Strategy

### 9.1 Unit Testing

- **Service Tests**: Test business logic in isolation
- **Repository Tests**: Test data access with database mocks
- **Utility Tests**: Test helper functions
- **Mocking**: Use Jest mocks for dependencies

### 9.2 Integration Testing

- **API Tests**: Test endpoints with real HTTP requests
- **Database Tests**: Test with real database (in test environment)
- **Service Integration**: Test service interactions

### 9.3 Test Structure

```javascript
// Unit test example
describe('UserService', () => {
  let userService;
  let userRepository;
  
  beforeEach(() => {
    userRepository = {
      findById: jest.fn(),
      findByEmail: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn()
    };
    
    userService = new UserService(userRepository);
  });
  
  describe('createUser', () => {
    it('should create a user with valid data', async () => {
      // Arrange
      const userData = {
        email: 'test@example.com',
        password: 'Password123!',
        firstName: 'Test',
        lastName: 'User',
        roleId: 'role123'
      };
      
      userRepository.findByEmail.mockResolvedValue(null);
      userRepository.create.mockResolvedValue({
        id: 'user123',
        ...userData,
        passwordHash: 'hashedpassword',
        salt: 'salt'
      });
      
      // Act
      const result = await userService.createUser(userData);
      
      // Assert
      expect(userRepository.findByEmail).toHaveBeenCalledWith(userData.email);
      expect(userRepository.create).toHaveBeenCalled();
      expect(result).toHaveProperty('id', 'user123');
      expect(result).not.toHaveProperty('password');
      expect(result).not.toHaveProperty('passwordHash');
      expect(result).not.toHaveProperty('salt');
    });
    
    it('should throw error if email already exists', async () => {
      // Arrange
      const userData = {
        email: 'existing@example.com',
        password: 'Password123!',
        firstName: 'Test',
        lastName: 'User',
        roleId: 'role123'
      };
      
      userRepository.findByEmail.mockResolvedValue({
        id: 'existingUser',
        email: userData.email
      });
      
      // Act & Assert
      await expect(userService.createUser(userData))
        .rejects
        .toThrow('User with this email already exists');
    });
  });
});
```

## 10. Performance Optimization

### 10.1 Database Optimization

- **Indexing**: Create appropriate indexes based on query patterns
- **Query Optimization**: Optimize queries for performance
- **Projection**: Select only needed fields
- **Pagination**: Limit result sets for large collections
- **Aggregation Pipeline**: Optimize aggregation queries

### 10.2 Caching Strategy

- **Data Caching**: Cache frequently accessed data
- **Query Caching**: Cache expensive query results
- **Cache Invalidation**: Strategy for keeping cache fresh
- **TTL Policies**: Time-based cache expiration
- **Cache Hierarchy**: Multi-level caching approach

### 10.3 Redis Implementation

```javascript
const redis = require('redis');
const { promisify } = require('util');

class CacheService {
  constructor() {
    this.client = redis.createClient({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASSWORD
    });
    
    this.getAsync = promisify(this.client.get).bind(this.client);
    this.setAsync = promisify(this.client.set).bind(this.client);
    this.delAsync = promisify(this.client.del).bind(this.client);
    this.expireAsync = promisify(this.client.expire).bind(this.client);
    
    this.client.on('error', (error) => {
      logger.error('Redis error', { error });
    });
  }
  
  async get(key) {
    const data = await this.getAsync(key);
    return data ? JSON.parse(data) : null;
  }
  
  async set(key, value, expireSeconds = 3600) {
    await this.setAsync(key, JSON.stringify(value));
    if (expireSeconds > 0) {
      await this.expireAsync(key, expireSeconds);
    }
  }
  
  async delete(key) {
    await this.delAsync(key);
  }
  
  generateKey(prefix, params) {
    return `${prefix}:${JSON.stringify(params)}`;
  }
}
```

## 11. Security Implementation

### 11.1 Input Validation

- **Request Validation**: Validate all API inputs
- **Data Sanitization**: Sanitize inputs to prevent injection attacks
- **Type Checking**: Ensure correct data types
- **Size Limits**: Enforce maximum sizes for inputs
- **Whitelisting**: Allow only expected values

### 11.2 Authentication Security

- **Password Hashing**: Use bcrypt for password hashing
- **Rate Limiting**: Limit login attempts
- **Brute Force Protection**: Temporary account locking
- **Session Management**: Secure session handling
- **MFA Support**: Multi-factor authentication

### 11.3 Authorization Security

- **Principle of Least Privilege**: Minimal necessary permissions
- **Resource Isolation**: Prevent unauthorized access
- **Cross-tenant Protection**: Prevent access across tenants
- **Data Filtering**: Filter data based on user permissions

### 11.4 Data Protection

- **Encryption**: Encrypt sensitive data
- **Data Classification**: Identify and protect sensitive data
- **Data Masking**: Mask sensitive data in logs and responses
- **Data Retention**: Policies for data storage duration
- **Secure Deletion**: Secure data removal

## 12. Documentation

### 12.1 API Documentation

- **OpenAPI/Swagger**: Document all API endpoints
- **Description**: Clear description of purpose
- **Parameters**: Document all parameters
- **Request/Response Examples**: Show example usage
- **Error Responses**: Document possible errors

### 12.2 Code Documentation

- **JSDoc Comments**: Document all functions, classes, and methods
- **Architecture Documentation**: Document system architecture
- **Data Model Documentation**: Document database schema
- **Workflow Documentation**: Document complex workflows
- **Decision Records**: Document significant design decisions

### 12.3 Swagger Configuration

```javascript
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Samudra ERP API',
      version: '1.0.0',
      description: 'API documentation for Samudra ERP system',
      contact: {
        name: 'API Support',
        email: 'support@samudrapaket.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Development server'
      },
      {
        url: 'https://api.samudrapaket.com/api/v1',
        description: 'Production server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ['./src/api/routes/*.js', './src/api/controllers/*.js']
};

const specs = swaggerJsdoc(options);

// Setup Swagger middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
```

## 13. Deployment & DevOps

### 13.1 Containerization

- **Docker**: Containerize all services
- **Dockerfile**: Optimized multi-stage builds
- **Container Orchestration**: Kubernetes for production
- **Environment Variables**: Configuration via environment
- **Secrets Management**: Secure storage of sensitive data

### 13.2 CI/CD Pipeline

- **Automated Testing**: Run tests on every commit
- **Static Analysis**: Code quality checks
- **Security Scanning**: Vulnerability scanning
- **Automated Deployment**: Deploy to environments
- **Deployment Verification**: Verify successful deployments

### 13.3 Environment Management

- **Development**: For active development
- **Staging**: For pre-release testing
- **Production**: For live system
- **Configuration**: Environment-specific configuration
- **Feature Flags**: Toggle features by environment

## 14. Code Standards & Best Practices

### 14.1 Coding Style

- **ESLint**: Enforce coding standards
- **Prettier**: Consistent code formatting
- **Naming Conventions**: Clear and consistent naming
- **Code Organization**: Logical file and folder structure
- **Comments**: Meaningful comments for complex logic

### 14.2 Best Practices

- **Async/Await**: Use for asynchronous operations
- **Error Handling**: Proper error handling for all operations
- **Input Validation**: Validate all inputs
- **Dependency Injection**: Use for testability
- **Immutability**: Prefer immutable data structures
- **Pure Functions**: Minimize side effects

### 14.3 Code Review Guidelines

- **Functionality**: Code works as expected
- **Security**: No security vulnerabilities
- **Performance**: Efficient implementation
- **Maintainability**: Clear and maintainable code
- **Testing**: Adequate test coverage
- **Documentation**: Proper documentation
