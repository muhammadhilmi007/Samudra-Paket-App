/**
 * @file Pickup entity type definitions
 * @description Defines types for pickup requests and related entities in logistics system
 */

import {
  Address,
  AuditInfo,
  BaseEntity,
  FileAttachment,
  GeoLocation,
  StatusHistoryEntry,
} from './base';

/**
 * Pickup status enum
 */
export enum PickupStatus {
  REQUESTED = 'REQUESTED',
  CONFIRMED = 'CONFIRMED',
  SCHEDULED = 'SCHEDULED',
  ASSIGNED = 'ASSIGNED',
  IN_PROGRESS = 'IN_PROGRESS',
  ARRIVED = 'ARRIVED',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  FAILED = 'FAILED',
  RESCHEDULED = 'RESCHEDULED',
  DELAYED = 'DELAYED',
}

/**
 * Pickup type enum
 */
export enum PickupType {
  REGULAR = 'REGULAR',
  SCHEDULED = 'SCHEDULED',
  RECURRING = 'RECURRING',
  ON_DEMAND = 'ON_DEMAND',
  BULK = 'BULK',
  RETURN = 'RETURN',
}

/**
 * Pickup priority enum
 */
export enum PickupPriority {
  LOW = 'LOW',
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
}

/**
 * Pickup entity interface
 */
export interface Pickup extends BaseEntity, AuditInfo {
  requestNumber: string;
  type: PickupType;
  priority: PickupPriority;
  customerId?: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  status: PickupStatus;
  statusHistory: StatusHistoryEntry<PickupStatus>[];
  address: Address;
  scheduledDate: Date;
  timeWindow: {
    start: string; // Format: "HH:MM"
    end: string; // Format: "HH:MM"
  };
  contactPerson: string;
  contactPhone: string;
  estimatedPackages: number;
  estimatedWeight?: number; // in kg
  estimatedVolume?: number; // in cubic meters
  specialInstructions?: string;
  assignedTeam?: string; // User ID or team ID
  assignedVehicle?: string; // Vehicle ID
  assignedBranch: string; // Branch ID
  serviceArea?: string; // Service area code
  routeCode?: string; // Route code
  sequence?: number; // Sequence in route
  actualPickupTime?: Date;
  actualPackages?: number;
  actualWeight?: number; // in kg
  actualVolume?: number; // in cubic meters
  shipmentIds: string[]; // IDs of shipments created from this pickup
  photos?: FileAttachment[];
  signature?: FileAttachment;
  location?: GeoLocation;
  notes?: string;
  cancellationReason?: PickupCancellationReason | 'OTHER';
  failureReason?: PickupFailureReason | 'OTHER';
  performance?: {
    scheduledArrivalTime: Date;
    actualArrivalTime?: Date;
    arrivalDelay?: number; // in minutes
    processingTime?: number; // in minutes
    completionTime?: number; // in minutes
    isOnTime: boolean;
  };
  packageDetails?: {
    packageTypes: string[];
    containsFragile: boolean;
    containsHazardous: boolean;
    requiresSpecialHandling: boolean;
    specialHandlingInstructions?: string;
  };
  recurring?: {
    isRecurring: boolean;
    frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY';
    daysOfWeek?: (
      | 'MONDAY'
      | 'TUESDAY'
      | 'WEDNESDAY'
      | 'THURSDAY'
      | 'FRIDAY'
      | 'SATURDAY'
      | 'SUNDAY'
    )[];
    dayOfMonth?: number;
    startDate: Date;
    endDate?: Date;
    nextPickupDate?: Date;
    totalOccurrences?: number;
    completedOccurrences?: number;
  };
}

/**
 * Pickup cancellation reason enum
 */
export enum PickupCancellationReason {
  CUSTOMER_REQUEST = 'CUSTOMER_REQUEST',
  SCHEDULING_CONFLICT = 'SCHEDULING_CONFLICT',
  INSUFFICIENT_CAPACITY = 'INSUFFICIENT_CAPACITY',
  WEATHER_CONDITIONS = 'WEATHER_CONDITIONS',
  VEHICLE_ISSUE = 'VEHICLE_ISSUE',
  STAFF_UNAVAILABLE = 'STAFF_UNAVAILABLE',
  DUPLICATE_REQUEST = 'DUPLICATE_REQUEST',
  ADDRESS_ISSUE = 'ADDRESS_ISSUE',
  OTHER = 'OTHER',
}

/**
 * Pickup failure reason enum
 */
export enum PickupFailureReason {
  CUSTOMER_UNAVAILABLE = 'CUSTOMER_UNAVAILABLE',
  INCORRECT_ADDRESS = 'INCORRECT_ADDRESS',
  PACKAGES_NOT_READY = 'PACKAGES_NOT_READY',
  EXCEEDS_CAPACITY = 'EXCEEDS_CAPACITY',
  UNSAFE_CONDITIONS = 'UNSAFE_CONDITIONS',
  ACCESS_DENIED = 'ACCESS_DENIED',
  TIME_CONSTRAINT = 'TIME_CONSTRAINT',
  OTHER = 'OTHER',
}

/**
 * Pickup team assignment
 */
export interface PickupAssignment {
  id: string;
  pickupId: string;
  assignedTo: string; // User ID
  assignedBy: string; // User ID
  assignedAt: Date;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'COMPLETED';
  acceptedAt?: Date;
  rejectedAt?: Date;
  rejectionReason?: string;
  completedAt?: Date;
  notes?: string;
  checkpoints?: {
    id: string;
    name: string;
    address: string;
    coordinates: GeoLocation;
    estimatedArrivalTime: Date;
    actualArrivalTime?: Date;
    status: 'PENDING' | 'ARRIVED' | 'COMPLETED' | 'SKIPPED';
    sequence: number;
  }[];
  routeOptimization?: {
    isOptimized: boolean;
    optimizationMethod: 'DISTANCE' | 'TIME' | 'PRIORITY' | 'CUSTOM';
    optimizationScore?: number; // 0-100
    originalSequence?: string[];
    constraints?: {
      maxDistance?: number; // in km
      maxDuration?: number; // in minutes
      timeWindows: boolean;
      vehicleCapacity: boolean;
      driverWorkHours: boolean;
      trafficConditions: boolean;
    };
  };
}

/**
 * Pickup assignment status enum
 */
export enum PickupAssignmentStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

/**
 * Pickup route
 */
export interface PickupRoute {
  id: string;
  date: Date;
  branchId: string;
  assignedTo: string; // User ID
  vehicleId?: string;
  status: 'PLANNED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' | 'DELAYED' | 'RESCHEDULED';
  pickups: string[]; // Pickup IDs
  optimizedSequence: string[]; // Pickup IDs in optimized order
  startTime?: Date;
  endTime?: Date;
  totalDistance?: number; // in km
  totalDuration?: number; // in minutes
  actualDistance?: number; // in km
  actualDuration?: number; // in minutes
  notes?: string;
  checkpoints?: {
    id: string;
    name: string;
    address: string;
    coordinates: GeoLocation;
    estimatedArrivalTime: Date;
    actualArrivalTime?: Date;
    status: 'PENDING' | 'ARRIVED' | 'COMPLETED' | 'SKIPPED';
    sequence: number;
  }[];
  routeOptimization?: {
    isOptimized: boolean;
    optimizationMethod: 'DISTANCE' | 'TIME' | 'PRIORITY' | 'CUSTOM';
    optimizationScore?: number; // 0-100
    originalSequence?: string[];
    constraints?: {
      maxDistance?: number; // in km
      maxDuration?: number; // in minutes
      timeWindows: boolean;
      vehicleCapacity: boolean;
      driverWorkHours: boolean;
      trafficConditions: boolean;
    };
  };
}
