/**
 * @file API endpoint type definitions
 * @description Defines types for API endpoints and their parameters
 */

import {
  BaseRequest as _BaseRequest,
  IdRequest as _IdRequest,
  ListRequest as _ListRequest,
} from './request';
import {
  BaseResponse as _BaseResponse,
  EmptyResponse as _EmptyResponse,
  PaginatedResponse as _PaginatedResponse,
  SuccessResponse as _SuccessResponse,
} from './response';

/**
 * API endpoint paths
 */
export enum ApiEndpoint {
  // Auth endpoints
  LOGIN = '/auth/login',
  LOGOUT = '/auth/logout',
  REFRESH_TOKEN = '/auth/refresh',
  RESET_PASSWORD = '/auth/reset-password',
  RESET_PASSWORD_CONFIRM = '/auth/reset-password-confirm',

  // User endpoints
  USERS = '/users',
  USER = '/users/:id',
  USER_PROFILE = '/users/profile',

  // Branch endpoints
  BRANCHES = '/branches',
  BRANCH = '/branches/:id',

  // Customer endpoints
  CUSTOMERS = '/customers',
  CUSTOMER = '/customers/:id',

  // Shipment endpoints
  SHIPMENTS = '/shipments',
  SHIPMENT = '/shipments/:id',
  SHIPMENT_TRACKING = '/shipments/:id/tracking',
  SHIPMENT_STATUS = '/shipments/:id/status',

  // Pickup endpoints
  PICKUPS = '/pickups',
  PICKUP = '/pickups/:id',
  PICKUP_ASSIGN = '/pickups/:id/assign',

  // Delivery endpoints
  DELIVERIES = '/deliveries',
  DELIVERY = '/deliveries/:id',
  DELIVERY_ASSIGN = '/deliveries/:id/assign',
  DELIVERY_CONFIRM = '/deliveries/:id/confirm',

  // Vehicle endpoints
  VEHICLES = '/vehicles',
  VEHICLE = '/vehicles/:id',

  // Finance endpoints
  INVOICES = '/invoices',
  INVOICE = '/invoices/:id',
  PAYMENTS = '/payments',
  PAYMENT = '/payments/:id',
  EXPENSES = '/expenses',
  EXPENSE = '/expenses/:id',

  // Report endpoints
  REPORTS = '/reports',
  REPORT_SHIPMENTS = '/reports/shipments',
  REPORT_FINANCE = '/reports/finance',
  REPORT_OPERATIONS = '/reports/operations',

  // Settings endpoints
  SETTINGS = '/settings',
  SETTING = '/settings/:key',
}

/**
 * API version enum
 */
export enum ApiVersion {
  V1 = 'v1',
  V2 = 'v2',
}

/**
 * API response content types
 */
export enum ContentType {
  JSON = 'application/json',
  FORM = 'application/x-www-form-urlencoded',
  MULTIPART = 'multipart/form-data',
  TEXT = 'text/plain',
  HTML = 'text/html',
  CSV = 'text/csv',
  PDF = 'application/pdf',
  EXCEL = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
}

/**
 * API method types
 */
export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

/**
 * Generic API endpoint configuration
 */
export interface ApiEndpointConfig<TRequest, TResponse> {
  path: string;
  method: HttpMethod;
  version: ApiVersion;
  requiresAuth: boolean;
  contentType: ContentType;
  responseContentType: ContentType; // renamed to avoid conflict
  requestSchema: TRequest; // renamed for clarity
  responseSchema: TResponse; // renamed for clarity
}
