/**
 * @file Role type definitions
 * @description Defines types for role-based access control
 */

import { PermissionCode } from './permission';

/**
 * Role interface
 * Represents a user role with associated permissions
 */
export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: PermissionCode[];
  isSystem: boolean;
  isActive: boolean;
  level: number; // Hierarchical level (higher number = more privileges)
  createdAt: Date;
  updatedAt: Date;
  createdBy?: string;
  updatedBy?: string;
}

/**
 * System-defined user roles
 */
export enum SystemRole {
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
 * Role assignment interface
 * Represents the assignment of a role to a user
 */
export interface RoleAssignment {
  id: string;
  userId: string;
  roleId: string;
  roleName: string;
  branchId?: string;
  assignedAt: Date;
  assignedBy: string;
  expiresAt?: Date;
  isActive: boolean;
  restrictions?: RoleRestriction[];
}

/**
 * Role restriction interface
 * Represents restrictions applied to a role assignment
 */
export interface RoleRestriction {
  type: 'branch' | 'customer' | 'region' | 'service' | 'time' | 'amount';
  value: string | string[] | number | Record<string, any>;
  description?: string;
}

/**
 * Role hierarchy interface
 * Represents the hierarchical relationship between roles
 */
export interface RoleHierarchy {
  parentRoleId: string;
  childRoleId: string;
  relationship: 'direct' | 'indirect';
}

/**
 * Role mapping interface
 * Maps roles to their default permissions
 */
export interface RolePermissionMapping {
  roleId: string;
  roleName: string;
  permissions: PermissionCode[];
}

/**
 * Role creation request
 */
export interface CreateRoleRequest {
  name: string;
  description: string;
  permissions: PermissionCode[];
  level?: number;
  isActive?: boolean;
}

/**
 * Role update request
 */
export interface UpdateRoleRequest {
  name?: string;
  description?: string;
  permissions?: PermissionCode[];
  level?: number;
  isActive?: boolean;
}

/**
 * Role assignment request
 */
export interface AssignRoleRequest {
  userId: string;
  roleId: string;
  branchId?: string;
  expiresAt?: Date;
  restrictions?: RoleRestriction[];
}
