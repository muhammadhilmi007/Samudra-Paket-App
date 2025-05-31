/**
 * @file Customer entity type definitions
 * @description Defines types for customers and related entities in logistics system
 */

import { Address, AuditInfo, BaseEntity, ContactInfo, FileAttachment, Money } from './base';

/**
 * Customer type enum
 */
export enum CustomerType {
  INDIVIDUAL = 'INDIVIDUAL',
  BUSINESS = 'BUSINESS',
  GOVERNMENT = 'GOVERNMENT',
  NON_PROFIT = 'NON_PROFIT',
  CORPORATE = 'CORPORATE',
  RESELLER = 'RESELLER',
  PARTNER = 'PARTNER',
  MARKETPLACE = 'MARKETPLACE',
  INTERNATIONAL = 'INTERNATIONAL',
}

/**
 * Customer segment enum
 */
export enum CustomerSegment {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  ENTERPRISE = 'ENTERPRISE',
  SMB = 'SMB',
  RETAIL = 'RETAIL',
  WHOLESALE = 'WHOLESALE',
  STRATEGIC = 'STRATEGIC',
}

/**
 * Customer acquisition channel enum
 */
export enum CustomerAcquisitionChannel {
  DIRECT = 'DIRECT',
  REFERRAL = 'REFERRAL',
  WEBSITE = 'WEBSITE',
  SOCIAL_MEDIA = 'SOCIAL_MEDIA',
  SALES_TEAM = 'SALES_TEAM',
  PARTNER = 'PARTNER',
  MARKETING = 'MARKETING',
  EVENT = 'EVENT',
  OTHER = 'OTHER',
}

/**
 * Customer status enum
 */
export enum CustomerStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
  BLACKLISTED = 'BLACKLISTED',
}

/**
 * Customer entity interface
 */
export interface Customer extends BaseEntity, AuditInfo {
  customerNumber: string;
  type: CustomerType;
  status: CustomerStatus;
  segment: CustomerSegment;
  name: string;
  legalName?: string;
  contactPerson?: string;
  email?: string;
  phone: string;
  alternatePhone?: string;
  website?: string;
  industry?: string;
  acquisitionChannel?: CustomerAcquisitionChannel;
  referredBy?: string;
  addresses: Address[];
  contacts: ContactInfo[];
  accountManager?: string; // User ID of account manager
  creditLimit?: Money;
  paymentTerms?: PaymentTerms;
  pricingTier?: 'STANDARD' | 'PREMIUM' | 'VIP' | 'CUSTOM';
  discountRate?: number; // Percentage
  notes?: string;
  tags?: string[];
  kycDetails?: {
    kycStatus: 'PENDING' | 'IN_PROGRESS' | 'VERIFIED' | 'REJECTED' | 'EXPIRED';
    verificationDate?: Date;
    verifiedBy?: string;
    rejectionReason?: string;
    expiryDate?: Date;
    riskCategory?: 'LOW' | 'MEDIUM' | 'HIGH';
    complianceNotes?: string;
    documents?: FileAttachment[];
    verificationChecks?: {
      checkType: string;
      status: 'PASSED' | 'FAILED' | 'PENDING';
      date: Date;
      performedBy: string;
      notes?: string;
    }[];
    authorizedPersons?: {
      name: string;
      position: string;
      idNumber?: string;
      idType?: string;
      contactInfo?: string;
      signature?: FileAttachment;
    }[];
  };
  taxInfo?: {
    taxId?: string;
    taxType?: string;
    taxExempt?: boolean;
    taxExemptionNumber?: string;
    taxExemptionExpiry?: Date;
    vatRegistered?: boolean;
    vatNumber?: string;
    withholdingTaxApplicable?: boolean;
    withholdingTaxPercentage?: number;
    taxDocuments?: FileAttachment[];
    taxJurisdiction?: string;
  };
}

/**
 * Payment terms
 */
export interface PaymentTerms {
  type: 'PREPAID' | 'COD' | 'NET' | 'CREDIT';
  daysToPayment?: number; // For NET terms
  earlyPaymentDiscount?: number; // Percentage
  latePaymentPenalty?: number; // Percentage
  notes?: string;
  metrics?: {
    lifetimeValue?: number;
    acquisitionCost?: number;
    retentionRate?: number; // percentage
    averageOrderValue?: number;
    orderFrequency?: number; // orders per month
    lastOrderDate?: Date;
    totalOrders?: number;
    totalShipments?: number;
    onTimeDeliveryRate?: number; // percentage
    returnRate?: number; // percentage
    claimRate?: number; // percentage
    averageResponseTime?: number; // in hours
    netPromoterScore?: number; // -100 to 100
  };
  contractDetails?: {
    contractNumber?: string;
    contractType?: string;
    startDate?: Date;
    endDate?: Date;
    renewalDate?: Date;
    autoRenewal?: boolean;
    contractValue?: number;
    specialTerms?: string;
    negotiatedRates?: {
      serviceType: string;
      baseRate: number;
      discountPercentage?: number;
      minimumCharge?: number;
      additionalCharges?: {
        name: string;
        amount: number;
        type: 'FIXED' | 'PERCENTAGE';
      }[];
    }[];
    volumeCommitments?: {
      period: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL';
      minimumShipments: number;
      minimumRevenue?: number;
      penaltyRate?: number;
    };
    approvedBy?: string;
    status: 'DRAFT' | 'ACTIVE' | 'EXPIRED' | 'TERMINATED' | 'RENEWED';
    document?: FileAttachment;
    documents?: {
      idProof?: FileAttachment;
      addressProof?: FileAttachment;
      businessRegistration?: FileAttachment;
      taxDocument?: FileAttachment;
      contract?: FileAttachment;
      creditApplication?: FileAttachment;
      financialStatements?: FileAttachment[];
      insuranceCertificate?: FileAttachment;
      complianceCertificates?: FileAttachment[];
      authorizedSignatoryList?: FileAttachment;
      kycDocuments?: FileAttachment[];
      other?: FileAttachment[];
    };
  };
  serviceLevel?: {
    level: 'STANDARD' | 'SILVER' | 'GOLD' | 'PLATINUM';
    assignedCSR?: string; // Customer Service Rep ID
    dedicatedSupport?: boolean;
    priorityHandling?: boolean;
    guaranteedDeliveryTimes?: boolean;
    customReporting?: boolean;
    reviewFrequency?: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL';
    lastReviewDate?: Date;
    nextReviewDate?: Date;
  };
  integrations?: {
    type: 'API' | 'EDI' | 'PORTAL' | 'FILE_TRANSFER' | 'OTHER';
    status: 'ACTIVE' | 'INACTIVE' | 'PENDING' | 'FAILED';
    details: string;
    credentials?: {
      apiKeyId?: string; // Reference to encrypted API key
      username?: string; // OK if it's just an identifier
      endpoint?: string; // OK - not sensitive
      webhookUrl?: string; // OK - not sensitive
      // Add fields for secure credential management
      credentialType?: 'API_KEY' | 'OAUTH' | 'BASIC_AUTH';
      lastRotated?: Date;
      expiresAt?: Date;
    };
    lastSyncDate?: Date;
    syncFrequency?: string;
  }[];
}

/**
 * Customer balance
 */
export interface CustomerBalance {
  accountBalance?: {
    currentBalance: number;
    overdueBalance?: number;
    availableCredit?: number;
    lastPaymentDate?: Date;
    lastPaymentAmount?: number;
    creditStatus: 'GOOD' | 'WARNING' | 'HOLD' | 'SUSPENDED';
    agingBuckets?: {
      current: number;
      days30: number;
      days60: number;
      days90: number;
      days90Plus: number;
    };
    averageDaysToPay?: number;
    yearToDateSpend?: number;
    monthToDateSpend?: number;
  };
}

/**
 * Customer shipping preference
 */
export interface CustomerShippingPreference {
  customerId: string;
  defaultServiceType?: 'REGULAR' | 'EXPRESS' | 'SAME_DAY' | 'ECONOMY';
  defaultPackagingType?: 'ENVELOPE' | 'BOX' | 'PALLET' | 'CUSTOM';
  defaultInsuranceOption?: boolean;
  preferredPickupTime?: {
    startTime: string; // Format: "HH:MM"
    endTime: string; // Format: "HH:MM"
  };
  preferredDeliveryTime?: {
    startTime: string; // Format: "HH:MM"
    endTime: string; // Format: "HH:MM"
  };
  specialInstructions?: string;
}
