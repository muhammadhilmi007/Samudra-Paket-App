/**
 * @file Branch entity type definitions
 * @description Defines types for branch and location entities
 */

import { Address, BaseEntity, AuditInfo, ContactInfo, GeoLocation } from './base';

/**
 * Branch types enum
 */
export enum BranchType {
  HEAD_OFFICE = 'HEAD_OFFICE',
  REGIONAL_OFFICE = 'REGIONAL_OFFICE',
  BRANCH_OFFICE = 'BRANCH_OFFICE',
  WAREHOUSE = 'WAREHOUSE',
  HUB = 'HUB',
  AGENT = 'AGENT',
}

/**
 * Branch entity interface
 */
export interface Branch extends BaseEntity, AuditInfo {
  code: string;
  name: string;
  type: BranchType;
  address: Address;
  phone: string;
  email?: string;
  managerId?: string;
  parentBranchId?: string;
  operatingHours: OperatingHours;
  serviceArea: ServiceArea;
  facilities: BranchFacility[];
  contacts: ContactInfo[];
  isOperational: boolean;
  notes?: string;
}

/**
 * Branch operating hours
 */
export interface OperatingHours {
  monday: DailyHours;
  tuesday: DailyHours;
  wednesday: DailyHours;
  thursday: DailyHours;
  friday: DailyHours;
  saturday: DailyHours;
  sunday: DailyHours;
  holidays: HolidaySchedule[];
}

/**
 * Daily operating hours
 */
export interface DailyHours {
  isOpen: boolean;
  openTime?: string; // Format: "HH:MM"
  closeTime?: string; // Format: "HH:MM"
  breakStart?: string; // Format: "HH:MM"
  breakEnd?: string; // Format: "HH:MM"
}

/**
 * Holiday schedule
 */
export interface HolidaySchedule {
  date: Date;
  name: string;
  isOpen: boolean;
  openTime?: string; // Format: "HH:MM"
  closeTime?: string; // Format: "HH:MM"
}

/**
 * Branch service area
 */
export interface ServiceArea {
  cities: string[];
  postalCodes: string[];
  radius?: number; // in kilometers
  polygons?: GeoLocation[][]; // For complex service areas
  isNationwide: boolean;
}

/**
 * Branch facility
 */
export interface BranchFacility {
  type: 'PARKING' | 'LOADING_DOCK' | 'STORAGE' | 'CUSTOMER_SERVICE' | 'CASH_COUNTER' | 'OTHER';
  name: string;
  capacity?: number;
  isOperational: boolean;
  notes?: string;
}

/**
 * Branch performance metrics
 */
export interface BranchMetrics {
  branchId: string;
  period: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'YEARLY';
  date: Date;
  shipmentVolume: number;
  deliverySuccessRate: number;
  pickupCompletionRate: number;
  customerSatisfaction?: number;
  revenue: number;
  expenses: number;
  profit: number;
}
