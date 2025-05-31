/**
 * @file Permission type definitions
 * @description Defines types for permissions and access control
 */

/**
 * Permission interface
 * Represents a granular permission for access control
 */
export interface Permission {
  id: string;
  name: string;
  code: string;
  description: string;
  module: string;
  action:
    | 'create'
    | 'read'
    | 'update'
    | 'delete'
    | 'approve'
    | 'assign'
    | 'export'
    | 'import'
    | 'execute';
  resource: string;
  isSystem: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Permission module enum
 * Represents the system modules that can have permissions
 */
export enum PermissionModule {
  USER = 'user',
  BRANCH = 'branch',
  CUSTOMER = 'customer',
  SHIPMENT = 'shipment',
  PICKUP = 'pickup',
  DELIVERY = 'delivery',
  VEHICLE = 'vehicle',
  FINANCE = 'finance',
  REPORT = 'report',
  SETTINGS = 'settings',
  DASHBOARD = 'dashboard',
  NOTIFICATION = 'notification',
  AUDIT = 'audit',
}

/**
 * Permission action enum
 * Represents the actions that can be performed on resources
 */
export enum PermissionAction {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
  APPROVE = 'approve',
  ASSIGN = 'assign',
  EXPORT = 'export',
  IMPORT = 'import',
  EXECUTE = 'execute',
}

/**
 * Permission code enum
 * Represents the full permission codes used in the system
 */
export enum PermissionCode {
  // User management
  USER_VIEW = 'user:read',
  USER_CREATE = 'user:create',
  USER_UPDATE = 'user:update',
  USER_DELETE = 'user:delete',

  // Branch management
  BRANCH_VIEW = 'branch:read',
  BRANCH_CREATE = 'branch:create',
  BRANCH_UPDATE = 'branch:update',
  BRANCH_DELETE = 'branch:delete',

  // Customer management
  CUSTOMER_VIEW = 'customer:read',
  CUSTOMER_CREATE = 'customer:create',
  CUSTOMER_UPDATE = 'customer:update',
  CUSTOMER_DELETE = 'customer:delete',

  // Shipment management
  SHIPMENT_VIEW = 'shipment:read',
  SHIPMENT_CREATE = 'shipment:create',
  SHIPMENT_UPDATE = 'shipment:update',
  SHIPMENT_DELETE = 'shipment:delete',

  // Pickup management
  PICKUP_VIEW = 'pickup:read',
  PICKUP_CREATE = 'pickup:create',
  PICKUP_UPDATE = 'pickup:update',
  PICKUP_ASSIGN = 'pickup:assign',

  // Delivery management
  DELIVERY_VIEW = 'delivery:read',
  DELIVERY_CREATE = 'delivery:create',
  DELIVERY_UPDATE = 'delivery:update',
  DELIVERY_ASSIGN = 'delivery:assign',

  // Finance management
  FINANCE_VIEW = 'finance:read',
  FINANCE_CREATE = 'finance:create',
  FINANCE_UPDATE = 'finance:update',
  FINANCE_APPROVE = 'finance:approve',

  // Reports
  REPORT_VIEW = 'report:read',
  REPORT_EXPORT = 'report:export',

  // Settings
  SETTINGS_VIEW = 'settings:read',
  SETTINGS_UPDATE = 'settings:update',

  // Dashboard
  DASHBOARD_VIEW = 'dashboard:read',

  // Notifications
  NOTIFICATION_VIEW = 'notification:read',
  NOTIFICATION_UPDATE = 'notification:update',

  // Audit logs
  AUDIT_VIEW = 'audit:read',
}

/**
 * Permission group interface
 * Represents a logical grouping of permissions
 */
export interface PermissionGroup {
  id: string;
  name: string;
  description: string;
  module: PermissionModule;
  permissions: Permission[];
}

/**
 * Permission check result
 */
export interface PermissionCheckResult {
  hasPermission: boolean;
  missingPermissions?: string[];
  reason?: string;
}

/**
 * Permission creation request
 */
export interface CreatePermissionRequest {
  name: string;
  code: string;
  description: string;
  module: string;
  action: string;
  resource: string;
  isActive?: boolean;
}

/**
 * Permission update request
 */
export interface UpdatePermissionRequest {
  name?: string;
  description?: string;
  isActive?: boolean;
}
