/**
 * @file Delivery entity type definitions
 * @description Defines types for delivery and related entities in logistics system
 */

import {
  Address,
  AuditInfo,
  BaseEntity,
  FileAttachment,
  GeoLocation,
  Money,
  StatusHistoryEntry,
} from './base';
import { PaymentMethod } from './shipment';

/**
 * Delivery status enum
 */
export enum DeliveryStatus {
  PENDING = 'PENDING',
  ASSIGNED = 'ASSIGNED',
  SCHEDULED = 'SCHEDULED',
  IN_TRANSIT = 'IN_TRANSIT',
  OUT_FOR_DELIVERY = 'OUT_FOR_DELIVERY',
  ARRIVED = 'ARRIVED',
  ATTEMPTED = 'ATTEMPTED',
  DELIVERED = 'DELIVERED',
  PARTIALLY_DELIVERED = 'PARTIALLY_DELIVERED',
  FAILED = 'FAILED',
  RESCHEDULED = 'RESCHEDULED',
  RETURNED_TO_WAREHOUSE = 'RETURNED_TO_WAREHOUSE',
  RETURNED_TO_SENDER = 'RETURNED_TO_SENDER',
  CANCELLED = 'CANCELLED',
  EXCEPTION = 'EXCEPTION',
}

/**
 * Delivery priority enum
 */
export enum DeliveryPriority {
  LOW = 'LOW',
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
}

/**
 * Delivery failure reason enum
 */
export enum DeliveryFailureReason {
  RECIPIENT_UNAVAILABLE = 'RECIPIENT_UNAVAILABLE',
  INCORRECT_ADDRESS = 'INCORRECT_ADDRESS',
  RECIPIENT_REFUSED = 'RECIPIENT_REFUSED',
  UNSAFE_LOCATION = 'UNSAFE_LOCATION',
  DAMAGED_PACKAGE = 'DAMAGED_PACKAGE',
  WEATHER_CONDITIONS = 'WEATHER_CONDITIONS',
  ACCESS_RESTRICTED = 'ACCESS_RESTRICTED',
  BUSINESS_CLOSED = 'BUSINESS_CLOSED',
  PAYMENT_ISSUE = 'PAYMENT_ISSUE',
  OTHER = 'OTHER',
}

/**
 * Delivery entity interface
 */
export interface Delivery extends BaseEntity, AuditInfo {
  deliveryNumber: string;
  shipmentId: string;
  waybillNumber: string;
  status: DeliveryStatus;
  statusHistory: StatusHistoryEntry<DeliveryStatus>[];
  priority: DeliveryPriority;
  serviceType: string; // Matches ShipmentServiceType
  address: Address;
  scheduledDate: Date;
  timeWindow?: {
    start: string; // Format: "HH:MM"
    end: string; // Format: "HH:MM"
  };
  contactPerson: string;
  contactPhone: string;
  specialInstructions?: string;
  assignedTo?: string; // User ID
  assignedVehicle?: string; // Vehicle ID
  assignedBranch: string; // Branch ID
  serviceArea?: string; // Service area code
  routeCode?: string; // Route code
  sequence?: number; // Sequence in route
  estimatedTimeOfArrival?: Date;
  attempts: DeliveryAttempt[];
  currentAttempt: number;
  maxAttempts: number;
  lastAttemptDate?: Date;
  nextAttemptDate?: Date;
  payment?: {
    method: PaymentMethod;
    amount: Money;
    isCollected: boolean;
    collectedAt?: Date;
    collectedBy?: string;
    transactionId?: string;
  };
  proofOfDelivery?: {
    signature?: FileAttachment;
    photos?: FileAttachment[];
    receivedBy: string;
    relationshipToReceiver?: string;
    identityVerification?: string;
    notes?: string;
  };
  actualDeliveryTime?: Date;
  location?: GeoLocation;
  notes?: string;
  failureReason?: DeliveryFailureReason;
  failureDetails?: string;
  rescheduledDate?: Date;
  rescheduledTimeWindow?: {
    start: string; // Format: "HH:MM"
    end: string; // Format: "HH:MM"
  };
  returnReason?: string;
  returnApprovedBy?: string;
  returnProcessedDate?: Date;
  exceptions?: {
    type: string;
    timestamp: Date;
    description: string;
    reportedBy: string;
    status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
    resolution?: string;
    resolvedBy?: string;
    resolvedAt?: Date;
  }[];
  performance?: {
    onTime: boolean;
    delay?: number; // in minutes
    attemptDuration?: number; // in minutes
    firstAttemptSuccess: boolean;
    customerSatisfactionScore?: number; // 0-5
  };
}

/**
 * Delivery attempt result enum
 */
export enum DeliveryAttemptResult {
  SUCCESSFUL = 'SUCCESSFUL',
  FAILED = 'FAILED',
  PARTIALLY_SUCCESSFUL = 'PARTIALLY_SUCCESSFUL',
  CANCELLED = 'CANCELLED',
}

/**
 * Delivery attempt interface
 */
export interface DeliveryAttempt {
  id: string;
  attemptNumber: number;
  timestamp: Date;
  status: DeliveryAttemptResult;
  performedBy: string; // User ID
  location: GeoLocation;
  notes?: string;
  failureReason?: DeliveryFailureReason;
  failureDetails?: string;
  photos?: FileAttachment[];
  signature?: FileAttachment;
  receivedBy?: string;
  relationshipToReceiver?: string;
  identityVerification?: {
    method: 'ID_CARD' | 'PASSPORT' | 'DRIVING_LICENSE' | 'COMPANY_ID' | 'OTHER';
    idNumber?: string;
    verified: boolean;
  };
  paymentCollection?: {
    amount: Money;
    method: PaymentMethod;
    reference?: string;
    collectedBy: string;
    verified: boolean;
  };
  condition?: {
    status: 'GOOD' | 'DAMAGED' | 'OPENED' | 'MISSING_ITEMS';
    description?: string;
    reportedBy?: string;
    photos?: FileAttachment[];
  };
  duration: number; // in minutes
  customerFeedback?: {
    rating: number; // 0-5
    comments?: string;
    submittedAt: Date;
  };
}

/**
 * Delivery route status enum
 */
export enum DeliveryRouteStatus {
  PLANNED = 'PLANNED',
  DISPATCHED = 'DISPATCHED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  DELAYED = 'DELAYED',
  RESCHEDULED = 'RESCHEDULED',
}

/**
 * Delivery route
 */
export interface DeliveryRoute {
  id: string;
  date: Date;
  branchId: string;
  assignedTo: string; // User ID
  vehicleId?: string;
  status: DeliveryRouteStatus;
  deliveries: string[]; // Delivery IDs
  optimizedSequence: string[]; // Delivery IDs in optimized order
  startTime?: Date;
  endTime?: Date;
  totalDistance?: number; // in km
  totalDuration?: number; // in minutes
  actualDistance?: number; // in km
  actualDuration?: number; // in minutes
  notes?: string;
}

/**
 * Delivery exception type enum
 */
export enum DeliveryExceptionType {
  ADDRESS_ISSUE = 'ADDRESS_ISSUE',
  PACKAGE_DAMAGE = 'PACKAGE_DAMAGE',
  WEATHER_DELAY = 'WEATHER_DELAY',
  VEHICLE_BREAKDOWN = 'VEHICLE_BREAKDOWN',
  TRAFFIC_CONGESTION = 'TRAFFIC_CONGESTION',
  RECIPIENT_UNAVAILABLE = 'RECIPIENT_UNAVAILABLE',
  SECURITY_ISSUE = 'SECURITY_ISSUE',
  PAYMENT_ISSUE = 'PAYMENT_ISSUE',
  DOCUMENTATION_ISSUE = 'DOCUMENTATION_ISSUE',
  OTHER = 'OTHER',
}

/**
 * Delivery performance metrics
 */
export interface DeliveryMetrics {
  driverId: string;
  date: Date;
  totalDeliveries: number;
  successfulDeliveries: number;
  failedDeliveries: number;
  successRate: number; // Percentage
  averageDeliveryTime: number; // in minutes
  totalDistance: number; // in km
  totalCollected?: Money;
  firstAttemptSuccessRate: number; // Percentage
  averageAttempts: number;
  onTimeDeliveryRate: number; // Percentage
  customerSatisfactionScore?: number; // 0-5
  exceptionsCount: number;
  returnRate: number; // Percentage
  timePerformance: {
    averageTimePerDelivery: number; // in minutes
    averageTimePerSuccessfulDelivery: number; // in minutes
    averageTimePerFailedDelivery: number; // in minutes
    averageWaitTime: number; // in minutes
  };
  serviceAreaPerformance?: {
    areaCode: string;
    deliveryCount: number;
    successRate: number; // Percentage
    averageTime: number; // in minutes
  }[];
}
