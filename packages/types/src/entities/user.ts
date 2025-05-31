/**
 * @file User entity type definitions
 * @description Defines types for user and authentication entities
 */

import { Permission, UserRole } from '../api/auth';
import { AuditInfo, BaseEntity } from './base';

/**
 * User entity interface
 */
export interface User extends BaseEntity, AuditInfo {
  username: string;
  email: string;
  passwordHash: string;
  fullName: string;
  phone?: string;
  role: UserRole;
  permissions: Permission[];
  branchId?: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  isMfaEnabled: boolean;
  mfaMethod?: 'otp' | 'email' | 'sms' | 'biometric';
  mfaSecret?: string;
  lastLogin?: Date;
  lastPasswordChange: Date;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  loginAttempts: number;
  lockUntil?: Date;
  preferences: UserPreferences;
  devices: UserDevice[];
}

/**
 * User preferences
 */
export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  timezone: string;
  dateFormat: string;
  timeFormat: '12h' | '24h';
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
    inApp: boolean;
  };
  dashboardLayout?: Record<string, any>;
}

/**
 * User device information
 */
export interface UserDevice {
  id: string;
  deviceType: 'web' | 'mobile' | 'desktop';
  deviceName: string;
  deviceModel?: string;
  osName?: string;
  osVersion?: string;
  browserName?: string;
  browserVersion?: string;
  ipAddress: string;
  lastUsed: Date;
  isCurrentDevice: boolean;
  pushToken?: string;
}

/**
 * User session
 */
export interface UserSession {
  id: string;
  userId: string;
  deviceId: string;
  ipAddress: string;
  userAgent: string;
  createdAt: Date;
  expiresAt: Date;
  lastActiveAt: Date;
  isRevoked: boolean;
  revokedAt?: Date;
  revokedReason?: string;
}

/**
 * User activity log
 */
export interface UserActivity {
  id: string;
  userId: string;
  action: string;
  entityType?: string;
  entityId?: string;
  details?: Record<string, any>;
  ipAddress: string;
  userAgent: string;
  timestamp: Date;
}
