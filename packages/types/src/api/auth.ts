/**
 * @file Authentication type definitions
 * @description Defines types for authentication and authorization
 */

/**
 * Authentication request
 */
export interface AuthRequest {
  username: string;
  password: string;
  deviceId?: string;
  deviceType?: 'web' | 'mobile' | 'desktop';
}

/**
 * Multi-factor authentication request
 */
export interface MfaRequest {
  userId: string;
  code: string;
  method: 'otp' | 'email' | 'sms' | 'biometric';
}

/**
 * Authentication response with tokens
 */
export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: 'Bearer';
  user: {
    id: string;
    username: string;
    email: string;
    fullName: string;
    role: string;
    permissions: string[];
    branchId?: string;
    lastLogin?: string;
  };
}

/**
 * Token refresh request
 */
export interface RefreshTokenRequest {
  refreshToken: string;
}

/**
 * Password reset request
 */
export interface PasswordResetRequest {
  email: string;
}

/**
 * Password reset confirmation
 */
export interface PasswordResetConfirmRequest {
  token: string;
  newPassword: string;
  confirmPassword: string;
}

/**
 * User roles enum
 */
export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  BRANCH_MANAGER = 'BRANCH_MANAGER',
  OPERATIONS_MANAGER = 'OPERATIONS_MANAGER',
  FINANCE_MANAGER = 'FINANCE_MANAGER',
  CUSTOMER_SERVICE = 'CUSTOMER_SERVICE',
  DRIVER = 'DRIVER',
  WAREHOUSE_STAFF = 'WAREHOUSE_STAFF',
  PICKUP_STAFF = 'PICKUP_STAFF',
  CUSTOMER = 'CUSTOMER',
}

/**
 * Permission types
 */
export enum Permission {
  // User management
  USER_VIEW = 'user:view',
  USER_CREATE = 'user:create',
  USER_UPDATE = 'user:update',
  USER_DELETE = 'user:delete',

  // Branch management
  BRANCH_VIEW = 'branch:view',
  BRANCH_CREATE = 'branch:create',
  BRANCH_UPDATE = 'branch:update',
  BRANCH_DELETE = 'branch:delete',

  // Customer management
  CUSTOMER_VIEW = 'customer:view',
  CUSTOMER_CREATE = 'customer:create',
  CUSTOMER_UPDATE = 'customer:update',
  CUSTOMER_DELETE = 'customer:delete',

  // Shipment management
  SHIPMENT_VIEW = 'shipment:view',
  SHIPMENT_CREATE = 'shipment:create',
  SHIPMENT_UPDATE = 'shipment:update',
  SHIPMENT_DELETE = 'shipment:delete',

  // Pickup management
  PICKUP_VIEW = 'pickup:view',
  PICKUP_CREATE = 'pickup:create',
  PICKUP_UPDATE = 'pickup:update',
  PICKUP_ASSIGN = 'pickup:assign',

  // Delivery management
  DELIVERY_VIEW = 'delivery:view',
  DELIVERY_CREATE = 'delivery:create',
  DELIVERY_UPDATE = 'delivery:update',
  DELIVERY_ASSIGN = 'delivery:assign',

  // Finance management
  FINANCE_VIEW = 'finance:view',
  FINANCE_CREATE = 'finance:create',
  FINANCE_UPDATE = 'finance:update',
  FINANCE_APPROVE = 'finance:approve',

  // Reports
  REPORT_VIEW = 'report:view',
  REPORT_EXPORT = 'report:export',

  // Settings
  SETTINGS_VIEW = 'settings:view',
  SETTINGS_UPDATE = 'settings:update',
}
