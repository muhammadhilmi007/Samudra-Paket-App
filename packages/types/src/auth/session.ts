/**
 * @file Session type definitions
 * @description Defines types for authentication sessions and related structures
 */

/**
 * User session interface
 * Represents an active user session
 */
export interface Session {
  id: string;
  userId: string;
  deviceId: string;
  accessToken: string;
  refreshToken: string;
  ipAddress: string;
  userAgent: string;
  createdAt: Date;
  expiresAt: Date;
  lastActiveAt: Date;
  isMfaVerified: boolean;
  isRevoked: boolean;
  revokedAt?: Date;
  revokedReason?: SessionRevokeReason;
  tokenVersion: number;
  metadata?: Record<string, any>;
}

/**
 * Session revoke reason enum
 */
export enum SessionRevokeReason {
  USER_LOGOUT = 'user_logout',
  ADMIN_REVOKE = 'admin_revoke',
  PASSWORD_CHANGE = 'password_change',
  SECURITY_BREACH = 'security_breach',
  INACTIVITY = 'inactivity',
  TOKEN_EXPIRED = 'token_expired',
  SUSPICIOUS_ACTIVITY = 'suspicious_activity',
}

/**
 * Session status enum
 */
export enum SessionStatus {
  ACTIVE = 'active',
  EXPIRED = 'expired',
  REVOKED = 'revoked',
  PENDING_MFA = 'pending_mfa',
}

/**
 * Session creation options
 */
export interface SessionCreateOptions {
  userId: string;
  deviceId: string;
  ipAddress: string;
  userAgent: string;
  expiresIn: number; // Seconds
  isMfaVerified: boolean;
  tokenVersion: number;
  metadata?: Record<string, any>;
}

/**
 * Session update options
 */
export interface SessionUpdateOptions {
  lastActiveAt?: Date;
  expiresAt?: Date;
  isMfaVerified?: boolean;
  accessToken?: string;
  refreshToken?: string;
  tokenVersion?: number;
  metadata?: Record<string, any>;
}

/**
 * Session revoke options
 */
export interface SessionRevokeOptions {
  reason: SessionRevokeReason;
  revokedBy?: string;
  revokedAt?: Date;
}

/**
 * Session query options
 */
export interface SessionQueryOptions {
  userId?: string;
  deviceId?: string;
  ipAddress?: string;
  status?: SessionStatus;
  createdBefore?: Date;
  createdAfter?: Date;
  expiresAt?: Date;
  isRevoked?: boolean;
}

/**
 * Session summary
 */
export interface SessionSummary {
  id: string;
  deviceInfo: {
    deviceType: string;
    deviceName: string;
    browserName?: string;
    osName?: string;
  };
  location?: {
    city?: string;
    country?: string;
    region?: string;
  };
  ipAddress: string;
  createdAt: Date;
  lastActiveAt: Date;
  status: SessionStatus;
  isCurrentSession: boolean;
}

/**
 * Session cleanup options
 */
export interface SessionCleanupOptions {
  expiredBefore?: Date;
  revokedBefore?: Date;
  inactiveSince?: Date;
  userId?: string;
  deviceId?: string;
}

/**
 * Session cleanup result
 */
export interface SessionCleanupResult {
  deletedCount: number;
  errors?: any[];
}
