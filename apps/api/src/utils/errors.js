/**
 * Error handling utilities for Samudra ERP API
 * Implements standardized error types as defined in Windsurf Rules
 */

/**
 * Base Error class for all application errors
 */
class BaseError extends Error {
  constructor(message, statusCode = 500, details = null) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.details = details;
    this.isOperational = true; // Used to distinguish operational errors from programming errors
    
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Validation Error for input validation failures
 */
class ValidationError extends BaseError {
  constructor(message = 'Validation Error', details = null) {
    super(message, 400, details);
  }
}

/**
 * Authentication Error for auth-related failures
 */
class AuthError extends BaseError {
  constructor(message = 'Authentication Error', details = null) {
    super(message, 401, details);
  }
}

/**
 * Business Error for business logic failures
 */
class BusinessError extends BaseError {
  constructor(message = 'Business Rule Violation', statusCode = 400, details = null) {
    super(message, statusCode, details);
  }
}

/**
 * Infrastructure Error for external service failures
 */
class InfrastructureError extends BaseError {
  constructor(message = 'Infrastructure Error', details = null) {
    super(message, 500, details);
  }
}

module.exports = {
  BaseError,
  ValidationError,
  AuthError,
  BusinessError,
  InfrastructureError
};
