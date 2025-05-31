/**
 * @file Shipment entity type definitions
 * @description Defines types for shipment and related entities in logistics system
 */

import {
  Address,
  AuditInfo,
  BaseEntity,
  DocumentReference,
  FileAttachment,
  GeoLocation,
  Money,
  StatusHistoryEntry,
} from './base';

/**
 * Shipment service types
 */
export enum ShipmentServiceType {
  REGULAR = 'REGULAR',
  EXPRESS = 'EXPRESS',
  SAME_DAY = 'SAME_DAY',
  NEXT_DAY = 'NEXT_DAY',
  ECONOMY = 'ECONOMY',
  INTERNATIONAL = 'INTERNATIONAL',
  HEAVY_CARGO = 'HEAVY_CARGO',
  REFRIGERATED = 'REFRIGERATED',
  HAZARDOUS = 'HAZARDOUS',
  FRAGILE = 'FRAGILE',
}

/**
 * Shipment status enum
 */
export enum ShipmentStatus {
  CREATED = 'CREATED',
  CONFIRMED = 'CONFIRMED',
  PICKUP_ASSIGNED = 'PICKUP_ASSIGNED',
  PICKED_UP = 'PICKED_UP',
  IN_TRANSIT = 'IN_TRANSIT',
  IN_WAREHOUSE = 'IN_WAREHOUSE',
  SORTED = 'SORTED',
  DISPATCHED = 'DISPATCHED',
  OUT_FOR_DELIVERY = 'OUT_FOR_DELIVERY',
  ATTEMPTED_DELIVERY = 'ATTEMPTED_DELIVERY',
  DELIVERED = 'DELIVERED',
  FAILED_DELIVERY = 'FAILED_DELIVERY',
  RETURNED_TO_WAREHOUSE = 'RETURNED_TO_WAREHOUSE',
  RETURNED_TO_SENDER = 'RETURNED_TO_SENDER',
  CANCELLED = 'CANCELLED',
  EXCEPTION = 'EXCEPTION',
  ON_HOLD = 'ON_HOLD',
  CUSTOMS_CLEARANCE = 'CUSTOMS_CLEARANCE',
}

/**
 * Payment method enum
 */
export enum PaymentMethod {
  PREPAID = 'PREPAID',
  COD = 'COD', // Cash on Delivery
  CAD = 'CAD', // Cash after Delivery
  ACCOUNT = 'ACCOUNT', // Customer account
  CREDIT_CARD = 'CREDIT_CARD',
  BANK_TRANSFER = 'BANK_TRANSFER',
  DIGITAL_WALLET = 'DIGITAL_WALLET',
}

/**
 * Exception type enum
 */
export enum ShipmentExceptionType {
  ADDRESS_ISSUE = 'ADDRESS_ISSUE',
  PACKAGE_DAMAGE = 'PACKAGE_DAMAGE',
  WEATHER_DELAY = 'WEATHER_DELAY',
  CUSTOMS_DELAY = 'CUSTOMS_DELAY',
  VEHICLE_BREAKDOWN = 'VEHICLE_BREAKDOWN',
  SECURITY_ISSUE = 'SECURITY_ISSUE',
  NATURAL_DISASTER = 'NATURAL_DISASTER',
  REGULATORY_HOLD = 'REGULATORY_HOLD',
  MISSING_DOCUMENTATION = 'MISSING_DOCUMENTATION',
  OTHER = 'OTHER',
}

/**
 * Shipment priority enum
 */
export enum ShipmentPriority {
  LOW = 'LOW',
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
}

/**
 * Shipment entity interface
 */
export interface Shipment extends BaseEntity, AuditInfo {
  waybillNumber: string;
  referenceNumber?: string;
  serviceType: ShipmentServiceType;
  status: ShipmentStatus;
  statusHistory: StatusHistoryEntry<ShipmentStatus>[];
  priority: ShipmentPriority;
  originBranchId: string;
  destinationBranchId: string;
  currentBranchId?: string;
  routeCode?: string;
  sender: ShipmentParty;
  receiver: ShipmentParty;
  pickup: {
    address: Address;
    date: Date;
    timeWindow?: {
      start: string; // Format: "HH:MM"
      end: string; // Format: "HH:MM"
    };
    instructions?: string;
    contactPerson: string;
    contactPhone: string;
  };
  delivery: {
    address: Address;
    expectedDate?: Date;
    timeWindow?: {
      start: string; // Format: "HH:MM"
      end: string; // Format: "HH:MM"
    };
    instructions?: string;
    contactPerson: string;
    contactPhone: string;
    proofOfDelivery?: FileAttachment[];
  };
  packages: ShipmentPackage[];
  totalWeight: number; // in kg
  totalVolume?: number; // in cubic meters
  totalValue?: Money;
  insurance?: {
    isInsured: boolean;
    declaredValue?: Money;
    premium?: Money;
  };
  payment: {
    method: PaymentMethod;
    amount: Money;
    isPaid: boolean;
    paidAt?: Date;
    transactionId?: string;
    collectedBy?: string;
  };
  pricing: {
    baseCharge: Money;
    weightCharge?: Money;
    distanceCharge?: Money;
    insuranceCharge?: Money;
    packagingCharge?: Money;
    additionalCharges: {
      name: string;
      amount: Money;
    }[];
    discount?: Money;
    tax?: Money;
    total: Money;
  };
  tracking: {
    events: TrackingEvent[];
    currentLocation?: GeoLocation;
    lastUpdated: Date;
    estimatedDeliveryDate?: Date;
    actualDeliveryDate?: Date;
    transitTime?: number; // in hours
    delayReason?: string;
  };
  exceptions?: {
    type: ShipmentExceptionType;
    timestamp: Date;
    description: string;
    reportedBy: string;
    status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
    resolution?: string;
    resolvedBy?: string;
    resolvedAt?: Date;
  }[];
  documents: DocumentReference[];
  notes?: string;
  tags?: string[];
  customFields?: Record<string, any>;
  relatedShipments?: {
    shipmentId: string;
    relationType: 'PARENT' | 'CHILD' | 'RETURN' | 'REPLACEMENT' | 'CONSOLIDATED';
  }[];
  consolidation?: {
    isConsolidated: boolean;
    consolidationId?: string;
    masterWaybill?: string;
    position?: number;
  };
  customs?: {
    declarationType?: string;
    declarationNumber?: string;
    customsStatus: 'NOT_REQUIRED' | 'PENDING' | 'CLEARED' | 'HELD' | 'REJECTED';
    dutyAmount?: Money;
    taxAmount?: Money;
    contentDescription?: string;
    countryOfOrigin?: string;
    harmonizedCode?: string;
    documents?: DocumentReference[];
  };
  performance?: {
    onTimePickup: boolean;
    onTimeDelivery: boolean;
    pickupDelay?: number; // in minutes
    deliveryDelay?: number; // in minutes
    totalTransitTime: number; // in hours
    qualityScore?: number; // 0-100
  };
}

/**
 * Shipment party (sender or receiver)
 */
export interface ShipmentParty {
  type: 'INDIVIDUAL' | 'BUSINESS';
  name: string;
  companyName?: string;
  phone: string;
  email?: string;
  address: Address;
  customerId?: string; // Reference to Customer entity if applicable
}

/**
 * Shipment package
 */
export interface ShipmentPackage {
  id: string;
  type: 'ENVELOPE' | 'PARCEL' | 'BOX' | 'PALLET' | 'CUSTOM';
  description?: string;
  weight: number; // in kg
  dimensions?: {
    length: number; // in cm
    width: number; // in cm
    height: number; // in cm
  };
  volume?: number; // in cubic meters
  quantity: number;
  value?: Money;
  isFragile: boolean;
  requiresSpecialHandling: boolean;
  specialHandlingInstructions?: string;
  barcode?: string;
  trackingId?: string;
  photos?: FileAttachment[];
  contentType?: 'DOCUMENT' | 'MERCHANDISE' | 'GIFT' | 'SAMPLE' | 'RETURN' | 'OTHER';
  contentDescription?: string;
  dangerousGoods?: {
    isDangerous: boolean;
    unNumber?: string; // UN Dangerous Goods Number
    class?: string;
    packingGroup?: 'I' | 'II' | 'III';
    properShippingName?: string;
  };
  temperature?: {
    requiresTemperatureControl: boolean;
    minTemperature?: number; // in Celsius
    maxTemperature?: number; // in Celsius
    currentTemperature?: number; // in Celsius
    lastChecked?: Date;
  };
}

/**
 * Tracking event
 */
export interface TrackingEvent {
  id: string;
  timestamp: Date;
  status: ShipmentStatus;
  location?: {
    name: string;
    branchId?: string;
    coordinates?: GeoLocation;
    address?: string;
    city?: string;
    region?: string;
    country?: string;
    postalCode?: string;
  };
  description: string;
  performedBy?: string; // User ID
  deviceId?: string;
  notes?: string;
  photos?: FileAttachment[];
  isCustomerVisible: boolean;
  exceptionType?: ShipmentExceptionType;
  scanType?: 'MANUAL' | 'BARCODE' | 'RFID' | 'GPS' | 'SYSTEM';
}

/**
 * Delivery attempt
 */
export interface DeliveryAttempt {
  id: string;
  shipmentId: string;
  attemptNumber: number;
  timestamp: Date;
  status: 'SUCCESSFUL' | 'FAILED';
  failureReason?: string;
  notes?: string;
  location: GeoLocation;
  performedBy: string; // User ID
  signature?: FileAttachment;
  photos?: FileAttachment[];
  receivedBy?: string;
  relationshipToReceiver?: string;
}
