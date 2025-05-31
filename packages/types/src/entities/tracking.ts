/**
 * @file Tracking type definitions
 * @description Defines types for tracking and monitoring logistics operations
 */

import { BaseEntity, AuditInfo, GeoCoordinates } from './base';

/**
 * Tracking event type enum
 */
export enum TrackingEventType {
  LOCATION_UPDATE = 'LOCATION_UPDATE',
  STATUS_CHANGE = 'STATUS_CHANGE',
  EXCEPTION = 'EXCEPTION',
  DELIVERY_ATTEMPT = 'DELIVERY_ATTEMPT',
  PICKUP_ATTEMPT = 'PICKUP_ATTEMPT',
  SIGNATURE_CAPTURED = 'SIGNATURE_CAPTURED',
  PHOTO_CAPTURED = 'PHOTO_CAPTURED',
  BARCODE_SCANNED = 'BARCODE_SCANNED',
  VEHICLE_STARTED = 'VEHICLE_STARTED',
  VEHICLE_STOPPED = 'VEHICLE_STOPPED',
  GEOFENCE_ENTRY = 'GEOFENCE_ENTRY',
  GEOFENCE_EXIT = 'GEOFENCE_EXIT',
  DEVICE_OFFLINE = 'DEVICE_OFFLINE',
  DEVICE_ONLINE = 'DEVICE_ONLINE',
  BATTERY_LOW = 'BATTERY_LOW',
  MANUAL_UPDATE = 'MANUAL_UPDATE',
}

/**
 * Tracking entity type enum
 */
export enum TrackingEntityType {
  SHIPMENT = 'SHIPMENT',
  DELIVERY = 'DELIVERY',
  PICKUP = 'PICKUP',
  VEHICLE = 'VEHICLE',
  DRIVER = 'DRIVER',
  ROUTE = 'ROUTE',
  PACKAGE = 'PACKAGE',
  DEVICE = 'DEVICE',
}

/**
 * Tracking event interface
 */
export interface TrackingEvent extends BaseEntity, AuditInfo {
  eventType: TrackingEventType;
  entityType: TrackingEntityType;
  entityId: string;
  timestamp: Date;
  location?: GeoCoordinates;
  accuracy?: number; // In meters
  altitude?: number; // In meters
  speed?: number; // In km/h
  heading?: number; // In degrees, 0-359
  batteryLevel?: number; // 0-100 percentage
  networkType?: 'WIFI' | 'CELLULAR' | 'OFFLINE';
  data?: Record<string, any>; // Additional event-specific data
  notes?: string;
  deviceId?: string;
  isManualEntry: boolean;
  syncStatus: 'PENDING' | 'SYNCED' | 'FAILED';
  syncedAt?: Date;
}

/**
 * Tracking session interface
 */
export interface TrackingSession extends BaseEntity, AuditInfo {
  sessionId: string;
  driverId: string;
  vehicleId: string;
  deviceId: string;
  routeId?: string;
  startTime: Date;
  endTime?: Date;
  status: 'ACTIVE' | 'PAUSED' | 'COMPLETED' | 'TERMINATED';
  events: TrackingEvent[];
  totalDistanceKm: number;
  totalDurationMinutes: number;
  averageSpeedKmh: number;
  maxSpeedKmh: number;
  batteryDrainPercentage?: number;
  dataSentKb?: number;
  trackingInterval: number; // In seconds
  isAutoTracking: boolean;
  pauseReason?: string;
  terminationReason?: string;
}

/**
 * Geofence interface
 */
export interface Geofence extends BaseEntity, AuditInfo {
  name: string;
  description?: string;
  type: 'CIRCLE' | 'POLYGON' | 'RECTANGLE';
  center?: GeoCoordinates; // For circle
  radius?: number; // For circle, in meters
  vertices?: GeoCoordinates[]; // For polygon
  bounds?: {
    // For rectangle
    northeast: GeoCoordinates;
    southwest: GeoCoordinates;
  };
  associatedEntityType?: TrackingEntityType;
  associatedEntityId?: string;
  entryActions?: GeofenceAction[];
  exitActions?: GeofenceAction[];
  dwellTimeThreshold?: number; // In seconds
  isActive: boolean;
  color?: string; // Hex color code for display
  tags?: string[];
}

/**
 * Geofence action interface
 */
export interface GeofenceAction {
  type: 'NOTIFICATION' | 'STATUS_UPDATE' | 'WEBHOOK' | 'ALERT';
  recipients?: string[]; // User IDs or email addresses
  message?: string;
  statusUpdate?: {
    entityType: TrackingEntityType;
    statusField: string;
    newStatus: string;
  };
  webhookUrl?: string;
  alertLevel?: 'INFO' | 'WARNING' | 'CRITICAL';
}

/**
 * Tracking device interface
 */
export interface TrackingDevice extends BaseEntity, AuditInfo {
  deviceId: string;
  type: 'MOBILE_APP' | 'GPS_TRACKER' | 'TELEMATICS_DEVICE' | 'RFID_READER' | 'BEACON';
  model?: string;
  serialNumber?: string;
  phoneNumber?: string;
  imei?: string;
  macAddress?: string;
  osVersion?: string;
  appVersion?: string;
  firmwareVersion?: string;
  assignedTo?: {
    type: 'DRIVER' | 'VEHICLE' | 'BRANCH';
    id: string;
  };
  lastPing?: Date;
  lastLocation?: GeoCoordinates;
  batteryLevel?: number;
  status: 'ACTIVE' | 'INACTIVE' | 'MAINTENANCE' | 'LOST';
  trackingInterval: number; // In seconds
  issuedDate?: Date;
  issuedBy?: string;
  notes?: string;
}

/**
 * Tracking alert interface
 */
export interface TrackingAlert extends BaseEntity, AuditInfo {
  alertType:
    | 'GEOFENCE'
    | 'SPEEDING'
    | 'IDLE'
    | 'DEVIATION'
    | 'BATTERY'
    | 'OFFLINE'
    | 'TAMPERING'
    | 'CUSTOM';
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  entityType: TrackingEntityType;
  entityId: string;
  timestamp: Date;
  location?: GeoCoordinates;
  message: string;
  data?: Record<string, any>;
  status: 'NEW' | 'ACKNOWLEDGED' | 'RESOLVED' | 'DISMISSED';
  acknowledgedBy?: string;
  acknowledgedAt?: Date;
  resolvedBy?: string;
  resolvedAt?: Date;
  resolutionNotes?: string;
  notificationSent: boolean;
  notificationRecipients?: string[];
}

/**
 * Tracking report interface
 */
export interface TrackingReport extends BaseEntity, AuditInfo {
  reportType:
    | 'DRIVER_ACTIVITY'
    | 'VEHICLE_USAGE'
    | 'ROUTE_EFFICIENCY'
    | 'GEOFENCE_VIOLATIONS'
    | 'IDLE_TIME'
    | 'SPEED_VIOLATIONS'
    | 'DELIVERY_PERFORMANCE';
  name: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  filters?: Record<string, any>;
  generatedBy: string;
  format: 'PDF' | 'CSV' | 'EXCEL' | 'JSON';
  url?: string;
  size?: number; // In bytes
  status: 'QUEUED' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
  completedAt?: Date;
  failureReason?: string;
  isScheduled: boolean;
  schedule?: {
    frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY';
    dayOfWeek?: number; // 0-6, where 0 is Sunday
    dayOfMonth?: number; // 1-31
    time: string; // Format: "HH:MM"
    recipients: string[]; // Email addresses
  };
}
