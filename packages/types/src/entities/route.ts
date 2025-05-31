/**
 * @file Route type definitions
 * @description Defines types for route planning and optimization in the logistics module
 */

import { BaseEntity, AuditInfo, GeoCoordinates } from './base';

/**
 * Route status enum
 */
export enum RouteStatus {
  PLANNED = 'PLANNED',
  ASSIGNED = 'ASSIGNED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  DELAYED = 'DELAYED',
}

/**
 * Route optimization method enum
 */
export enum RouteOptimizationMethod {
  SHORTEST_DISTANCE = 'SHORTEST_DISTANCE',
  SHORTEST_TIME = 'SHORTEST_TIME',
  BALANCED = 'BALANCED',
  PRIORITY_BASED = 'PRIORITY_BASED',
  CUSTOM = 'CUSTOM',
}

/**
 * Stop type enum
 */
export enum StopType {
  PICKUP = 'PICKUP',
  DELIVERY = 'DELIVERY',
  DROPOFF = 'DROPOFF',
  REST = 'REST',
  REFUEL = 'REFUEL',
  MAINTENANCE = 'MAINTENANCE',
  OTHER = 'OTHER',
}

/**
 * Route stop interface
 */
export interface RouteStop {
  id: string;
  type: StopType;
  sequence: number;
  location: {
    address: string;
    coordinates: GeoCoordinates;
  };
  plannedArrivalTime: Date;
  plannedDepartureTime: Date;
  actualArrivalTime?: Date;
  actualDepartureTime?: Date;
  status: 'PENDING' | 'ARRIVED' | 'COMPLETED' | 'SKIPPED' | 'FAILED';
  notes?: string;
  durationMinutes: number;
  referenceId?: string; // ID of pickup or delivery
  referenceType?: 'PICKUP' | 'DELIVERY' | 'OTHER';
}

/**
 * Route interface
 */
export interface Route extends BaseEntity, AuditInfo {
  routeNumber: string;
  name?: string;
  date: Date;
  vehicleId: string;
  driverId: string;
  backupDriverId?: string;
  branchId: string;
  status: RouteStatus;
  stops: RouteStop[];
  optimizationMethod: RouteOptimizationMethod;
  startLocation: {
    address: string;
    coordinates: GeoCoordinates;
  };
  endLocation: {
    address: string;
    coordinates: GeoCoordinates;
  };
  plannedStartTime: Date;
  plannedEndTime: Date;
  actualStartTime?: Date;
  actualEndTime?: Date;
  totalDistanceKm: number;
  totalDurationMinutes: number;
  totalStops: number;
  completedStops: number;
  failedStops: number;
  skippedStops: number;
  pendingStops: number;
  deliveries: string[]; // Delivery IDs
  pickups: string[]; // Pickup IDs
  notes?: string;
  isOptimized: boolean;
  lastOptimizedAt?: Date;
  routePolyline?: string; // Encoded polyline for map display
  trafficConditions?: 'LIGHT' | 'MODERATE' | 'HEAVY' | 'SEVERE';
  weatherConditions?: 'CLEAR' | 'RAIN' | 'SNOW' | 'FOG' | 'STORM' | 'EXTREME';
  routeDeviations?: RouteDeviation[];
  performanceMetrics?: RoutePerformanceMetrics;
}

/**
 * Route deviation interface
 */
export interface RouteDeviation {
  id: string;
  timestamp: Date;
  originalLocation: GeoCoordinates;
  actualLocation: GeoCoordinates;
  deviationDistanceMeters: number;
  reason?: string;
  reportedByDriverId?: string;
  stopId?: string;
}

/**
 * Route performance metrics interface
 */
export interface RoutePerformanceMetrics {
  plannedVsActualDurationDifference: number; // In minutes
  plannedVsActualDistanceDifference: number; // In kilometers
  onTimeDeliveryPercentage: number;
  onTimePickupPercentage: number;
  averageStopDuration: number; // In minutes
  fuelConsumption?: number; // In liters
  co2Emissions?: number; // In kg
  driverRestTime: number; // In minutes
  trafficDelays: number; // In minutes
  serviceTimeEfficiency: number; // Percentage
  routeEfficiencyScore: number; // 0-100
}

/**
 * Route template interface for recurring routes
 */
export interface RouteTemplate extends BaseEntity, AuditInfo {
  name: string;
  description?: string;
  vehicleTypeId?: string;
  driverPreferences?: string[];
  defaultStartLocation: {
    address: string;
    coordinates: GeoCoordinates;
  };
  defaultEndLocation: {
    address: string;
    coordinates: GeoCoordinates;
  };
  defaultStartTime: string; // Format: "HH:MM"
  serviceAreas: string[];
  optimizationMethod: RouteOptimizationMethod;
  stopSequence?: {
    type: StopType;
    locationId: string;
    durationMinutes: number;
  }[];
  isActive: boolean;
  recurrence?: {
    frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY';
    daysOfWeek?: number[]; // 0-6, where 0 is Sunday
    daysOfMonth?: number[]; // 1-31
  };
  maxStops?: number;
  maxDistanceKm?: number;
  maxDurationMinutes?: number;
  notes?: string;
}
