/**
 * @file Notification type definitions
 * @description Defines types for system notifications and alerts
 */

import { BaseEntity, AuditInfo } from './base';

/**
 * Notification type enum
 */
export enum NotificationType {
  // System notifications
  SYSTEM = 'SYSTEM',
  MAINTENANCE = 'MAINTENANCE',
  SECURITY = 'SECURITY',

  // Operational notifications
  SHIPMENT_STATUS = 'SHIPMENT_STATUS',
  DELIVERY_STATUS = 'DELIVERY_STATUS',
  PICKUP_STATUS = 'PICKUP_STATUS',
  ROUTE_UPDATE = 'ROUTE_UPDATE',
  VEHICLE_STATUS = 'VEHICLE_STATUS',
  DRIVER_STATUS = 'DRIVER_STATUS',
  GEOFENCE_ALERT = 'GEOFENCE_ALERT',
  EXCEPTION = 'EXCEPTION',

  // Financial notifications
  INVOICE_CREATED = 'INVOICE_CREATED',
  PAYMENT_RECEIVED = 'PAYMENT_RECEIVED',
  PAYMENT_OVERDUE = 'PAYMENT_OVERDUE',
  EXPENSE_APPROVAL = 'EXPENSE_APPROVAL',

  // Administrative notifications
  USER_CREATED = 'USER_CREATED',
  ROLE_CHANGED = 'ROLE_CHANGED',
  PASSWORD_RESET = 'PASSWORD_RESET',
  DOCUMENT_UPLOADED = 'DOCUMENT_UPLOADED',
  TASK_ASSIGNED = 'TASK_ASSIGNED',

  // Customer notifications
  CUSTOMER_FEEDBACK = 'CUSTOMER_FEEDBACK',
  CONTRACT_EXPIRY = 'CONTRACT_EXPIRY',
  SERVICE_ISSUE = 'SERVICE_ISSUE',
}

/**
 * Notification priority enum
 */
export enum NotificationPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
}

/**
 * Notification channel enum
 */
export enum NotificationChannel {
  IN_APP = 'IN_APP',
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  PUSH = 'PUSH',
  WEBHOOK = 'WEBHOOK',
}

/**
 * Notification interface
 */
export interface Notification extends BaseEntity, AuditInfo {
  title: string;
  message: string;
  type: NotificationType;
  priority: NotificationPriority;
  channels: NotificationChannel[];
  recipientIds: string[]; // User IDs
  recipientRoles?: string[]; // Role IDs
  recipientBranches?: string[]; // Branch IDs
  entityType?: string; // e.g., 'SHIPMENT', 'DELIVERY', 'INVOICE'
  entityId?: string; // ID of the related entity
  actionUrl?: string; // URL to navigate to when clicked
  actionLabel?: string; // Label for the action button
  isRead: boolean;
  readBy?: {
    userId: string;
    timestamp: Date;
  }[];
  expiresAt?: Date;
  scheduledAt?: Date; // For scheduled notifications
  sentAt?: {
    channel: NotificationChannel;
    timestamp: Date;
    success: boolean;
    failureReason?: string;
  }[];
  attachments?: {
    id: string;
    name: string;
    type: string;
    url: string;
  }[];
  metadata?: Record<string, any>; // Additional data
}

/**
 * Notification template interface
 */
export interface NotificationTemplate extends BaseEntity, AuditInfo {
  name: string;
  description?: string;
  type: NotificationType;
  titleTemplate: string;
  messageTemplate: string;
  defaultPriority: NotificationPriority;
  defaultChannels: NotificationChannel[];
  defaultRecipientRoles?: string[]; // Role IDs
  placeholders: {
    name: string;
    description: string;
    required: boolean;
    defaultValue?: string;
  }[];
  actionUrlTemplate?: string;
  actionLabelTemplate?: string;
  isActive: boolean;
  category: 'OPERATIONAL' | 'FINANCIAL' | 'ADMINISTRATIVE' | 'CUSTOMER' | 'SYSTEM';
  version: number;
  metadata?: Record<string, any>; // Additional configuration
}

/**
 * Notification preference interface
 */
export interface NotificationPreference extends BaseEntity, AuditInfo {
  userId: string;
  preferences: {
    type: NotificationType;
    enabled: boolean;
    channels: NotificationChannel[];
    priority?: NotificationPriority; // Override default priority
  }[];
  quietHours?: {
    enabled: boolean;
    startTime: string; // Format: "HH:MM"
    endTime: string; // Format: "HH:MM"
    timezone: string;
    exceptPriority?: NotificationPriority[]; // Priorities that bypass quiet hours
  };
  emailDigest?: {
    enabled: boolean;
    frequency: 'DAILY' | 'WEEKLY' | 'NEVER';
    time?: string; // Format: "HH:MM"
    dayOfWeek?: number; // 0-6, where 0 is Sunday (for weekly)
  };
  pushEnabled: boolean;
  smsEnabled: boolean;
  emailEnabled: boolean;
}

/**
 * Notification batch interface for bulk sending
 */
export interface NotificationBatch extends BaseEntity, AuditInfo {
  name: string;
  description?: string;
  templateId: string;
  placeholderValues: Record<string, any>[];
  recipientIds: string[]; // User IDs
  recipientRoles?: string[]; // Role IDs
  recipientBranches?: string[]; // Branch IDs
  channels: NotificationChannel[];
  priority: NotificationPriority;
  scheduledAt?: Date;
  status: 'DRAFT' | 'SCHEDULED' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
  processedCount: number;
  successCount: number;
  failureCount: number;
  completedAt?: Date;
  failureReason?: string;
  metadata?: Record<string, any>; // Additional data
}

/**
 * Notification statistics interface
 */
export interface NotificationStatistics {
  id: string;
  period: 'DAILY' | 'WEEKLY' | 'MONTHLY';
  startDate: Date;
  endDate: Date;
  totalSent: number;
  byType: {
    type: NotificationType;
    count: number;
  }[];
  byChannel: {
    channel: NotificationChannel;
    count: number;
    deliveryRate: number; // Percentage
  }[];
  byPriority: {
    priority: NotificationPriority;
    count: number;
  }[];
  readRate: number; // Percentage
  averageReadTime: number; // In minutes
  clickThroughRate: number; // Percentage for actionable notifications
  topRecipients: {
    userId: string;
    count: number;
  }[];
  generatedAt: Date;
}
