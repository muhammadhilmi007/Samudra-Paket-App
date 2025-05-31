/**
 * @file Base entity type definitions
 * @description Defines base types for all entities
 */

/**
 * Base entity interface for all domain entities
 */
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

/**
 * Audit information for tracking entity changes
 */
export interface AuditInfo {
  createdBy: string;
  updatedBy?: string;
  deletedBy?: string;
  deletedAt?: Date;
}

/**
 * Base address interface
 */
export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  latitude?: number;
  longitude?: number;
  notes?: string;
  isDefault?: boolean;
  addressType?: 'residential' | 'business' | 'warehouse' | 'branch';
}

/**
 * Contact information interface
 */
export interface ContactInfo {
  name: string;
  phone: string;
  email?: string;
  position?: string;
  isPrimary?: boolean;
}

/**
 * Location coordinates
 */
export interface GeoLocation {
  latitude: number;
  longitude: number;
  accuracy?: number;
  timestamp?: Date;
}

/**
 * Geographic coordinates for mapping and routing
 */
export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

/**
 * Status history entry
 */
export interface StatusHistoryEntry<T> {
  status: T;
  timestamp: Date;
  userId: string;
  notes?: string;
  location?: GeoLocation;
}

/**
 * Document reference
 */
export interface DocumentReference {
  id: string;
  type: 'invoice' | 'waybill' | 'receipt' | 'manifest' | 'pod' | 'other';
  number: string;
  url?: string;
  issuedAt: Date;
}

/**
 * File attachment
 */
export interface FileAttachment {
  id: string;
  name: string;
  url: string;
  mimeType: string;
  size: number;
  uploadedAt: Date;
  uploadedBy: string;
  category?: 'image' | 'document' | 'signature' | 'other';
}

/**
 * Money amount with currency
 */
export interface Money {
  amount: number;
  currency: string;
}
