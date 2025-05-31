/**
 * @file JWT token type definitions
 * @description Defines types for JWT tokens and related structures
 */

/**
 * JWT token payload interface
 * Represents the decoded contents of a JWT token
 */
export interface JwtPayload {
  // Standard JWT claims
  iss?: string; // Issuer
  sub: string; // Subject (user ID)
  aud?: string | string[]; // Audience
  exp: number; // Expiration time (Unix timestamp)
  nbf?: number; // Not before (Unix timestamp)
  iat: number; // Issued at (Unix timestamp)
  jti?: string; // JWT ID

  // Custom claims
  username: string;
  email: string;
  role: string;
  permissions: string[];
  branchId?: string;
  deviceId?: string;
  sessionId?: string;
  isMfaVerified?: boolean;
  tokenVersion?: number; // For token revocation
  tokenType: 'access' | 'refresh' | 'mfa' | 'passwordReset' | 'emailVerification';
}

/**
 * Access token payload
 * Short-lived token for API access
 */
export interface AccessTokenPayload extends JwtPayload {
  tokenType: 'access';
}

/**
 * Refresh token payload
 * Long-lived token for obtaining new access tokens
 */
export interface RefreshTokenPayload extends JwtPayload {
  tokenType: 'refresh';
  family?: string; // Token family for refresh token rotation
}

/**
 * MFA token payload
 * Short-lived token for multi-factor authentication
 */
export interface MfaTokenPayload extends JwtPayload {
  tokenType: 'mfa';
  mfaMethod: 'otp' | 'email' | 'sms' | 'biometric';
}

/**
 * Password reset token payload
 */
export interface PasswordResetTokenPayload extends JwtPayload {
  tokenType: 'passwordReset';
  email: string;
}

/**
 * Email verification token payload
 */
export interface EmailVerificationTokenPayload extends JwtPayload {
  tokenType: 'emailVerification';
  email: string;
}

/**
 * JWT token configuration
 */
export interface JwtConfig {
  accessToken: {
    secret: string;
    expiresIn: number | string; // Seconds or time string (e.g., '15m')
    algorithm: 'HS256' | 'HS384' | 'HS512' | 'RS256' | 'RS384' | 'RS512';
  };
  refreshToken: {
    secret: string;
    expiresIn: number | string; // Seconds or time string (e.g., '7d')
    algorithm: 'HS256' | 'HS384' | 'HS512' | 'RS256' | 'RS384' | 'RS512';
    rotationEnabled: boolean;
  };
  mfaToken: {
    secret: string;
    expiresIn: number | string; // Seconds or time string (e.g., '5m')
  };
  passwordResetToken: {
    secret: string;
    expiresIn: number | string; // Seconds or time string (e.g., '1h')
  };
  emailVerificationToken: {
    secret: string;
    expiresIn: number | string; // Seconds or time string (e.g., '24h')
  };
  issuer: string;
  audience: string | string[];
}

/**
 * Token verification result
 */
export interface TokenVerificationResult<T extends JwtPayload> {
  valid: boolean;
  expired: boolean;
  payload?: T;
  error?: {
    name: string;
    message: string;
  };
}

/**
 * Token generation options
 */
export interface TokenGenerationOptions {
  includePermissions?: boolean;
  includeBranch?: boolean;
  includeDeviceId?: boolean;
  includeSessionId?: boolean;
  expiresIn?: number | string;
}

/**
 * Token blacklist entry
 */
export interface TokenBlacklistEntry {
  jti: string;
  exp: number;
  reason?: 'logout' | 'passwordChange' | 'securityBreach' | 'userDisabled' | 'tokenRevoked';
  createdAt: Date;
}
