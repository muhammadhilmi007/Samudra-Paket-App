/**
 * @file Contract type definitions
 * @description Defines types for customer contracts and service agreements
 */

import { BaseEntity, AuditInfo, Money } from './base';

/**
 * Contract status enum
 */
export enum ContractStatus {
  DRAFT = 'DRAFT',
  PENDING_APPROVAL = 'PENDING_APPROVAL',
  ACTIVE = 'ACTIVE',
  EXPIRED = 'EXPIRED',
  TERMINATED = 'TERMINATED',
  RENEWED = 'RENEWED',
}

/**
 * Contract type enum
 */
export enum ContractType {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  ENTERPRISE = 'ENTERPRISE',
  CUSTOM = 'CUSTOM',
  PROMOTIONAL = 'PROMOTIONAL',
  GOVERNMENT = 'GOVERNMENT',
}

/**
 * Billing cycle enum
 */
export enum BillingCycle {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  BIWEEKLY = 'BIWEEKLY',
  MONTHLY = 'MONTHLY',
  QUARTERLY = 'QUARTERLY',
  SEMIANNUAL = 'SEMIANNUAL',
  ANNUAL = 'ANNUAL',
  PER_SHIPMENT = 'PER_SHIPMENT',
}

/**
 * Service level enum
 */
export enum ServiceLevel {
  STANDARD = 'STANDARD',
  EXPRESS = 'EXPRESS',
  SAME_DAY = 'SAME_DAY',
  NEXT_DAY = 'NEXT_DAY',
  ECONOMY = 'ECONOMY',
  PREMIUM = 'PREMIUM',
}

/**
 * Contract interface
 */
export interface Contract extends BaseEntity, AuditInfo {
  contractNumber: string;
  customerId: string;
  type: ContractType;
  status: ContractStatus;
  startDate: Date;
  endDate: Date;
  renewalDate?: Date;
  terminationDate?: Date;
  terminationReason?: string;
  billingCycle: BillingCycle;
  paymentTerms: string; // e.g., "Net 30", "COD", "Prepaid"
  paymentMethod?: string;
  minimumCommitment?: Money;
  discountPercentage?: number;
  serviceAreas: string[]; // List of regions/cities covered
  serviceLevels: ServiceLevel[];
  specialTerms?: string;
  attachments?: string[]; // Document IDs
  signedBy?: {
    companyRepresentative: string;
    customerRepresentative: string;
    signatureDate: Date;
  };
  approvedBy?: string;
  approvedAt?: Date;
  rateCard?: ContractRateCard;
  autoRenew: boolean;
  renewalTerms?: string;
  cancellationTerms?: string;
  performanceMetrics?: ContractPerformanceMetrics;
  amendments?: ContractAmendment[];
  isTemplate: boolean;
}

/**
 * Contract rate card interface
 */
export interface ContractRateCard {
  id: string;
  name: string;
  effectiveDate: Date;
  expirationDate?: Date;
  baseRates: {
    serviceLevel: ServiceLevel;
    weightRanges: {
      minWeight: number;
      maxWeight: number;
      rate: Money;
      perKg?: boolean;
    }[];
    distanceRanges?: {
      minDistance: number;
      maxDistance: number;
      rate: Money;
      perKm?: boolean;
    }[];
  }[];
  surcharges: {
    type: string; // e.g., "Fuel", "Remote Area", "Oversized"
    calculation: 'FIXED' | 'PERCENTAGE';
    value: number;
    conditions?: string;
  }[];
  discounts: {
    type: string; // e.g., "Volume", "Loyalty", "Seasonal"
    calculation: 'FIXED' | 'PERCENTAGE';
    value: number;
    threshold?: number;
    thresholdUnit?: 'SHIPMENTS' | 'WEIGHT' | 'VALUE';
  }[];
  specialRates?: {
    description: string;
    conditions: string;
    rate: Money;
  }[];
  notes?: string;
  version: number;
}

/**
 * Contract amendment interface
 */
export interface ContractAmendment {
  id: string;
  amendmentNumber: string;
  date: Date;
  description: string;
  changes: {
    field: string;
    previousValue: any;
    newValue: any;
  }[];
  reason: string;
  requestedBy: string;
  approvedBy?: string;
  approvedAt?: Date;
  status: 'DRAFT' | 'PENDING' | 'APPROVED' | 'REJECTED';
  attachments?: string[]; // Document IDs
}

/**
 * Contract performance metrics interface
 */
export interface ContractPerformanceMetrics {
  lastUpdated: Date;
  onTimeDeliveryPercentage: number;
  serviceQualityScore: number; // 0-100
  volumeCommitmentFulfillment: number; // Percentage
  revenueToDate: Money;
  averageShipmentsPerMonth: number;
  customerSatisfactionScore?: number; // 0-10
  claimsRate: number; // Percentage
  retentionRisk: 'LOW' | 'MEDIUM' | 'HIGH';
  profitabilityScore: number; // 0-100
  keyPerformanceIndicators: {
    name: string;
    target: number;
    actual: number;
    unit: string;
  }[];
}

/**
 * Service agreement interface (simplified contract for specific services)
 */
export interface ServiceAgreement extends BaseEntity, AuditInfo {
  agreementNumber: string;
  customerId: string;
  parentContractId?: string;
  serviceType:
    | 'PICKUP'
    | 'DELIVERY'
    | 'WAREHOUSING'
    | 'PACKAGING'
    | 'CUSTOMS'
    | 'INSURANCE'
    | 'OTHER';
  status: 'ACTIVE' | 'INACTIVE' | 'EXPIRED';
  startDate: Date;
  endDate: Date;
  terms: string;
  pricing: {
    basePrice: Money;
    additionalFees?: {
      name: string;
      amount: Money;
      conditions?: string;
    }[];
  };
  frequency?: 'ONE_TIME' | 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'ON_DEMAND';
  locations: string[]; // Address IDs
  contactPerson: {
    name: string;
    phone: string;
    email?: string;
  };
  notes?: string;
}

/**
 * Pricing rule interface for dynamic pricing
 */
export interface PricingRule extends BaseEntity, AuditInfo {
  name: string;
  description?: string;
  contractId?: string; // Optional, if specific to a contract
  customerId?: string; // Optional, if specific to a customer
  serviceLevel: ServiceLevel;
  priority: number; // Lower number = higher priority
  conditions: {
    field: string; // e.g., "weight", "distance", "volume", "destination"
    operator: 'EQUALS' | 'NOT_EQUALS' | 'GREATER_THAN' | 'LESS_THAN' | 'BETWEEN' | 'IN' | 'NOT_IN';
    value: any;
    secondValue?: any; // For BETWEEN operator
  }[];
  action: {
    type: 'FIXED_PRICE' | 'BASE_PRICE_ADJUSTMENT' | 'SURCHARGE' | 'DISCOUNT';
    value: number;
    isPercentage: boolean;
    maxAdjustment?: Money; // Cap for percentage adjustments
  };
  startDate: Date;
  endDate?: Date;
  isActive: boolean;
  appliedCount: number; // How many times this rule has been applied
  lastApplied?: Date;
  createdBy: string;
}
