/**
 * @file Settings entity type definitions
 * @description Defines types for system and application settings
 */

import { BaseEntity, AuditInfo, Money } from './base';

/**
 * System settings entity interface
 */
export interface SystemSettings extends BaseEntity, AuditInfo {
  companyInfo: {
    name: string;
    legalName: string;
    taxId: string;
    address: {
      street: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
    };
    phone: string;
    email: string;
    website: string;
    logo: string;
  };
  security: {
    passwordPolicy: {
      minLength: number;
      requireUppercase: boolean;
      requireLowercase: boolean;
      requireNumbers: boolean;
      requireSpecialChars: boolean;
      expiryDays: number;
      preventReuse: number;
    };
    sessionTimeout: number; // in minutes
    mfaEnabled: boolean;
    mfaMethods: ('otp' | 'email' | 'sms' | 'biometric')[];
    loginAttempts: number;
    lockoutDuration: number; // in minutes
  };
  notifications: {
    email: {
      enabled: boolean;
      provider: string;
      senderName: string;
      senderEmail: string;
      templates: {
        [key: string]: {
          subject: string;
          body: string;
        };
      };
    };
    sms: {
      enabled: boolean;
      provider: string;
      senderId: string;
      templates: {
        [key: string]: string;
      };
    };
    push: {
      enabled: boolean;
      provider: string;
    };
  };
  shipment: {
    waybillPrefix: string;
    waybillNumberFormat: string;
    waybillNumberSequence: number;
    defaultServiceType: string;
    defaultMaxDeliveryAttempts: number;
    defaultInsuranceRate: number; // Percentage
    autoGenerateInvoice: boolean;
    requireProofOfDelivery: boolean;
    allowCashOnDelivery: boolean;
  };
  finance: {
    currency: string;
    taxRate: number; // Percentage
    invoicePrefix: string;
    invoiceNumberFormat: string;
    invoiceNumberSequence: number;
    paymentTerms: {
      default: string;
      options: string[];
    };
    fiscalYearStart: {
      month: number; // 1-12
      day: number; // 1-31
    };
  };
}

/**
 * Branch settings entity interface
 */
export interface BranchSettings extends BaseEntity, AuditInfo {
  branchId: string;
  operationalSettings: {
    pickupCutoffTime: string; // Format: "HH:MM"
    deliveryCutoffTime: string; // Format: "HH:MM"
    processingCapacity: {
      maxDailyShipments: number;
      maxDailyPickups: number;
      maxDailyDeliveries: number;
    };
    serviceAreas: {
      city: string;
      postalCodes: string[];
      isActive: boolean;
    }[];
    defaultAssignmentRules: {
      pickupAssignmentRadius: number; // in km
      deliveryAssignmentRadius: number; // in km
      maxAssignmentsPerDriver: number;
    };
  };
  financialSettings: {
    cashCollectionLimit: Money;
    requireApprovalAbove: Money;
    allowExpenseCreation: boolean;
    expenseApprovalLevels: number;
  };
  notificationSettings: {
    sendPickupConfirmation: boolean;
    sendDeliveryUpdates: boolean;
    notifyLowInventory: boolean;
    notifyDriverAssignment: boolean;
  };
}

/**
 * User settings entity interface
 */
export interface UserSettings extends BaseEntity, AuditInfo {
  userId: string;
  preferences: {
    theme: 'light' | 'dark' | 'system';
    language: string;
    timezone: string;
    dateFormat: string;
    timeFormat: '12h' | '24h';
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
      inApp: boolean;
    };
    dashboardLayout?: Record<string, any>;
  };
  mobileSettings?: {
    syncFrequency: 'realtime' | 'hourly' | 'daily' | 'manual';
    dataUsage: 'low' | 'medium' | 'high';
    cameraResolution: 'low' | 'medium' | 'high';
    locationTrackingInterval: number; // in minutes
    offlineMode: boolean;
  };
  workSettings?: {
    preferredVehicleTypes: string[];
    preferredWorkingHours: {
      start: string; // Format: "HH:MM"
      end: string; // Format: "HH:MM"
    };
    preferredServiceAreas: string[];
    maxDailyAssignments?: number;
  };
}

/**
 * Service pricing entity interface
 */
export interface ServicePricing extends BaseEntity, AuditInfo {
  serviceType: string;
  isActive: boolean;
  basePrice: Money;
  weightRanges: {
    minWeight: number; // in kg
    maxWeight: number; // in kg
    price: Money;
  }[];
  distanceRanges: {
    minDistance: number; // in km
    maxDistance: number; // in km
    pricePerKm: Money;
  }[];
  volumeRanges?: {
    minVolume: number; // in cubic meters
    maxVolume: number; // in cubic meters
    price: Money;
  }[];
  additionalServices: {
    name: string;
    description: string;
    price: Money;
    isPercentage: boolean;
  }[];
  specialZones?: {
    zoneId: string;
    zoneName: string;
    priceAdjustment: Money;
    isPercentage: boolean;
  }[];
  customerTiers?: {
    tier: string;
    discountPercentage: number;
  }[];
  effectiveDate: Date;
  expiryDate?: Date;
  notes?: string;
}
