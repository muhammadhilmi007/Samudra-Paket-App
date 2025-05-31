/**
 * @file User authentication type definitions
 * @description Defines detailed types for user authentication
 */

/**
 * Authentication user interface
 * Represents the user data specifically for authentication purposes
 */
export interface AuthUser {
  id: string;
  username: string;
  email: string;
  fullName: string;
  role: string;
  permissions: string[];
  branchId?: string;
  isActive: boolean;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  isMfaEnabled: boolean;
  mfaMethod?: MfaMethod;
  lastLogin?: Date;
  loginAttempts: number;
  lockUntil?: Date;
}

/**
 * Authentication credentials
 */
export interface AuthCredentials {
  username: string;
  password: string;
  deviceId?: string;
  deviceType?: 'web' | 'mobile' | 'desktop';
  ipAddress?: string;
  userAgent?: string;
  rememberMe?: boolean;
}

/**
 * Authentication result
 */
export interface AuthResult {
  success: boolean;
  user?: AuthUser;
  tokens?: {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    tokenType: 'Bearer';
  };
  requiresMfa?: boolean;
  mfaToken?: string;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

/**
 * Multi-factor authentication methods
 */
export enum MfaMethod {
  OTP = 'otp',
  EMAIL = 'email',
  SMS = 'sms',
  BIOMETRIC = 'biometric',
}

/**
 * Multi-factor authentication setup
 */
export interface MfaSetup {
  userId: string;
  method: MfaMethod;
  isEnabled: boolean;
  secret?: string;
  verifiedAt?: Date;
  backupCodes?: string[];
}

/**
 * Multi-factor authentication verification request
 */
export interface MfaVerificationRequest {
  userId: string;
  token: string;
  method: MfaMethod;
  deviceId?: string;
  deviceTrusted?: boolean;
}

/**
 * Multi-factor authentication verification result
 */
export interface MfaVerificationResult {
  success: boolean;
  user?: AuthUser;
  tokens?: {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    tokenType: 'Bearer';
  };
  error?: {
    code: string;
    message: string;
  };
}

/**
 * Password change request
 */
export interface PasswordChangeRequest {
  userId: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

/**
 * Password reset request
 */
export interface PasswordResetRequest {
  email: string;
}

/**
 * Password reset verification
 */
export interface PasswordResetVerification {
  token: string;
  newPassword: string;
  confirmPassword: string;
}

/**
 * Authentication provider
 */
export enum AuthProvider {
  LOCAL = 'local',
  GOOGLE = 'google',
  MICROSOFT = 'microsoft',
  FACEBOOK = 'facebook',
  APPLE = 'apple',
}

/**
 * Social authentication profile
 */
export interface SocialAuthProfile {
  provider: AuthProvider;
  providerId: string;
  email: string;
  name?: string;
  picture?: string;
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: Date;
  isConnected: boolean;
  connectedAt?: Date;
}

/**
 * User account status
 */
export enum UserAccountStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
  SUSPENDED = 'suspended',
  LOCKED = 'locked',
  DELETED = 'deleted',
}
