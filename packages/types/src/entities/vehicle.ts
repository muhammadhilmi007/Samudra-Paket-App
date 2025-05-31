/**
 * @file Vehicle entity type definitions
 * @description Defines types for vehicles and related entities in logistics system
 */

import { AuditInfo, BaseEntity, FileAttachment, GeoLocation, Money } from './base';

/**
 * Vehicle type enum
 */
export enum VehicleType {
  MOTORCYCLE = 'MOTORCYCLE',
  CAR = 'CAR',
  VAN = 'VAN',
  TRUCK_SMALL = 'TRUCK_SMALL',
  TRUCK_MEDIUM = 'TRUCK_MEDIUM',
  TRUCK_LARGE = 'TRUCK_LARGE',
  LORRY = 'LORRY',
  REFRIGERATED = 'REFRIGERATED',
  FLATBED = 'FLATBED',
  TANKER = 'TANKER',
  BOX_TRUCK = 'BOX_TRUCK',
  CONTAINER = 'CONTAINER',
}

/**
 * Vehicle status enum
 */
export enum VehicleStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  MAINTENANCE = 'MAINTENANCE',
  REPAIR = 'REPAIR',
  INSPECTION = 'INSPECTION',
  IN_TRANSIT = 'IN_TRANSIT',
  LOADING = 'LOADING',
  UNLOADING = 'UNLOADING',
  FUELING = 'FUELING',
  RETIRED = 'RETIRED',
  SOLD = 'SOLD',
  RESERVED = 'RESERVED',
}

/**
 * Vehicle ownership type enum
 */
export enum VehicleOwnershipType {
  OWNED = 'OWNED',
  LEASED = 'LEASED',
  RENTED = 'RENTED',
  CONTRACTED = 'CONTRACTED',
  PARTNER = 'PARTNER',
  FRANCHISE = 'FRANCHISE',
}

/**
 * Vehicle fuel type enum
 */
export enum VehicleFuelType {
  PETROL = 'PETROL',
  DIESEL = 'DIESEL',
  ELECTRIC = 'ELECTRIC',
  HYBRID = 'HYBRID',
  CNG = 'CNG',
  LPG = 'LPG',
}

/**
 * Vehicle transmission type enum
 */
export enum VehicleTransmissionType {
  MANUAL = 'MANUAL',
  AUTOMATIC = 'AUTOMATIC',
  SEMI_AUTOMATIC = 'SEMI_AUTOMATIC',
}

/**
 * Vehicle entity interface
 */
export interface Vehicle extends BaseEntity, AuditInfo {
  registrationNumber: string;
  type: VehicleType;
  make: string;
  model: string;
  year: number;
  color: string;
  fuelType: VehicleFuelType;
  transmission: VehicleTransmissionType;
  engineNumber?: string;
  chassisNumber: string;
  vin?: string;
  status: VehicleStatus;
  branchId: string;
  assignedDriver?: string; // User ID
  capacity: {
    weight?: number; // in kg
    volume?: number; // in cubic meters
    pallets?: number;
    packages?: number;
    length?: number; // in meters
    width?: number; // in meters
    height?: number; // in meters
    loadingArea?: number; // in square meters
    maxPayload?: number; // in kg
  };
  specifications: {
    fuelType: VehicleFuelType;
    transmission: VehicleTransmissionType;
    engineSize?: number; // in cc
    horsepower?: number;
    fuelEfficiency?: number; // km per liter
  };
  documents?: {
    insurance?: FileAttachment;
    registration?: FileAttachment;
    permit?: FileAttachment;
    inspection?: FileAttachment;
    roadTax?: FileAttachment;
    emissionCertificate?: FileAttachment;
    fitnessTest?: FileAttachment;
    leaseAgreement?: FileAttachment;
    driverAssignment?: FileAttachment;
    maintenanceHistory?: FileAttachment;
    accidentReports?: FileAttachment[];
    other?: FileAttachment[];
  };
  maintenance?: {
    lastServiceDate?: Date;
    nextServiceDate?: Date;
    lastServiceOdometer?: number; // in km
    serviceInterval?: number; // in km or days
    serviceIntervalType: 'DISTANCE' | 'TIME' | 'BOTH';
    maintenanceStatus: 'UP_TO_DATE' | 'DUE_SOON' | 'OVERDUE' | 'IN_PROGRESS';
    maintenanceAlerts?: {
      type: string;
      description: string;
      dueDate: Date;
      priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
      resolved: boolean;
      resolvedDate?: Date;
    }[];
    serviceHistory?: {
      date: Date;
      odometer: number; // in km
      type: string;
      description: string;
      cost?: Money;
      performedBy?: string;
      location?: string;
      parts?: {
        name: string;
        partNumber: string;
        quantity: number;
        unitCost?: Money;
      }[];
      documents?: FileAttachment[];
    }[];
  };
  availability?: {
    status: 'AVAILABLE' | 'UNAVAILABLE' | 'SCHEDULED_MAINTENANCE' | 'RESERVED';
    startDate?: Date;
    endDate?: Date;
    reason?: string;
    reservedBy?: string;
    reservationId?: string;
  };
  performance?: {
    totalDistance: number; // in km
    totalTrips: number;
    totalOperatingHours: number;
    fuelEfficiency: number; // km/liter
    utilizationRate: number; // percentage
    idleTime: number; // in hours
    breakdownFrequency: number; // incidents per 10,000 km
    maintenanceCostPerKm: number;
    onTimeDeliveryRate: number; // percentage
    loadFactor: number; // percentage of capacity utilized on average
  };
  telematics?: {
    deviceInfo: {
      manufacturer: string;
      model: string;
      serialNumber: string;
      installationDate: Date;
      lastCalibration?: Date;
    };
    drivingBehavior?: {
      harshBrakingEvents: number;
      harshAccelerationEvents: number;
      speedingEvents: number;
      idlingTime: number; // in minutes
      averageSpeed: number; // in km/h
      ecoScore?: number; // 0-100
    };
    diagnostics?: {
      engineHours: number;
      batteryVoltage: number;
      engineTemperature: number; // in Celsius
      oilPressure: number;
      fuelConsumption: number; // liters per 100km
      dtcCodes?: string[]; // Diagnostic Trouble Codes
      lastDiagnosticDate: Date;
    };
  };
  currentDriver?: string; // User ID
  currentRoute?: string; // Route ID
  currentBranch: string; // Branch ID
  assignmentHistory?: {
    driverId: string;
    assignedAt: Date;
    unassignedAt?: Date;
    assignedBy: string;
    routeId?: string;
    branchId: string;
    notes?: string;
  }[];
  driverPreferences?: {
    preferredDrivers: string[]; // User IDs
    restrictedDrivers: string[]; // User IDs
    requiresSpecialTraining: boolean;
    requiredLicenseTypes: string[];
    notes?: string;
  };
}

/**
 * Vehicle document
 */
export interface VehicleDocument extends BaseEntity {
  vehicleId: string;
  type:
    | 'INSURANCE'
    | 'REGISTRATION'
    | 'PERMIT'
    | 'INSPECTION'
    | 'ROAD_TAX'
    | 'EMISSION_CERTIFICATE'
    | 'FITNESS_TEST'
    | 'LEASE_AGREEMENT'
    | 'OTHER';
  name: string;
  number: string;
  issuedDate: Date;
  expiryDate: Date;
  issuedBy: string;
  file?: FileAttachment;
  status: 'VALID' | 'EXPIRED' | 'EXPIRING_SOON';
  notes?: string;
}

/**
 * Maintenance record
 */
export interface MaintenanceRecord extends BaseEntity {
  id: string;
  vehicleId: string;
  date: Date;
  type: 'ROUTINE' | 'REPAIR' | 'INSPECTION' | 'ACCIDENT' | 'OTHER';
  odometer: number; // in km
  description: string;
  cost?: Money;
  performedBy?: string;
  location?: string;
  parts?: {
    name: string;
    partNumber: string;
    quantity: number;
    unitCost?: Money;
  }[];
  fuelRecords?: {
    date: Date;
    odometer: number; // in km
    quantity: number; // in liters
    cost: Money;
    fuelType: VehicleFuelType;
    filledBy?: string;
    location?: string;
    fuelStation?: string;
    fullTank: boolean;
    fuelEconomy?: number; // km/liter
    receipt?: FileAttachment;
    notes?: string;
  }[];
  attachments?: FileAttachment[];
  notes?: string;
}

/**
 * Vehicle assignment
 */
export interface VehicleAssignment extends BaseEntity, AuditInfo {
  id: string;
  vehicleId: string;
  assignedTo: string; // User ID
  assignedBy: string; // User ID
  assignedAt: Date;
  startDate: Date;
  endDate?: Date;
  purpose: 'DELIVERY' | 'PICKUP' | 'TRANSFER' | 'MAINTENANCE' | 'OTHER';
  status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
  odometerStart: number; // in km
  odometerEnd?: number; // in km
  routeId?: string;
  branchId: string;
  notes?: string;
}

/**
 * Vehicle tracking record
 */
export interface VehicleTrackingRecord extends BaseEntity, AuditInfo {
  id: string;
  vehicleId: string;
  timestamp: Date;
  location: GeoLocation;
  speed?: number; // in km/h
  heading?: number; // in degrees
  ignitionStatus: 'ON' | 'OFF';
  engineStatus: 'RUNNING' | 'IDLE' | 'OFF';
  fuelLevel?: number; // in percentage
  batteryLevel?: number; // in percentage
  temperature?: number; // in celsius
  alerts?: string[];
}
