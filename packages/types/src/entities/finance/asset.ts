/**
 * @file Asset type definitions
 * @description Defines types for asset management in the finance module
 */

import { BaseEntity, AuditInfo, Money, FileAttachment } from '../base';

/**
 * Asset status enum
 */
export enum AssetStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  UNDER_MAINTENANCE = 'UNDER_MAINTENANCE',
  DISPOSED = 'DISPOSED',
  SOLD = 'SOLD',
  WRITTEN_OFF = 'WRITTEN_OFF',
  STOLEN = 'STOLEN',
  DAMAGED = 'DAMAGED',
}

/**
 * Asset type enum
 */
export enum AssetType {
  VEHICLE = 'VEHICLE',
  EQUIPMENT = 'EQUIPMENT',
  FURNITURE = 'FURNITURE',
  COMPUTER = 'COMPUTER',
  BUILDING = 'BUILDING',
  LAND = 'LAND',
  LEASEHOLD_IMPROVEMENT = 'LEASEHOLD_IMPROVEMENT',
  INTANGIBLE = 'INTANGIBLE',
  OTHER = 'OTHER',
}

/**
 * Depreciation method enum
 */
export enum DepreciationMethod {
  STRAIGHT_LINE = 'STRAIGHT_LINE',
  DECLINING_BALANCE = 'DECLINING_BALANCE',
  DOUBLE_DECLINING = 'DOUBLE_DECLINING',
  SUM_OF_YEARS_DIGITS = 'SUM_OF_YEARS_DIGITS',
  UNITS_OF_PRODUCTION = 'UNITS_OF_PRODUCTION',
  NONE = 'NONE',
}

/**
 * Asset interface
 */
export interface Asset extends BaseEntity, AuditInfo {
  assetNumber: string;
  name: string;
  description?: string;
  type: AssetType;
  category: string;
  subcategory?: string;
  status: AssetStatus;

  // Acquisition details
  acquisitionDate: Date;
  purchasePrice: Money;
  vendor?: string;
  purchaseOrderNumber?: string;
  warrantyExpiryDate?: Date;

  // Location and assignment
  branchId: string;
  departmentId?: string;
  location?: string;
  assignedTo?: string; // User ID
  assignmentDate?: Date;

  // Financial details
  assetValue: Money;
  residualValue: Money;
  depreciationMethod: DepreciationMethod;
  usefulLifeYears: number;
  depreciationStartDate: Date;
  depreciationEndDate?: Date;
  currentDepreciationValue: Money;
  accumulatedDepreciation: Money;
  lastDepreciationDate?: Date;
  depreciationFrequency: 'MONTHLY' | 'QUARTERLY' | 'YEARLY';
  assetAccountId?: string;
  depreciationAccountId?: string;
  accumulatedDepreciationAccountId?: string;

  // Asset tracking
  serialNumber?: string;
  modelNumber?: string;
  barcode?: string;
  rfidTag?: string;

  // Maintenance
  maintenanceSchedule?: {
    frequency: 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'YEARLY' | 'CUSTOM';
    nextDate?: Date;
    description?: string;
  };
  maintenanceHistory?: {
    id: string;
    date: Date;
    type: 'PREVENTIVE' | 'CORRECTIVE' | 'INSPECTION';
    description: string;
    cost: Money;
    performedBy: string;
    notes?: string;
  }[];

  // Insurance
  insurance?: {
    policyNumber?: string;
    provider?: string;
    coverageAmount?: Money;
    startDate?: Date;
    endDate?: Date;
    premium?: Money;
    frequency?: 'MONTHLY' | 'QUARTERLY' | 'YEARLY';
  };

  // Disposal
  disposalDetails?: {
    date?: Date;
    type: 'SOLD' | 'SCRAPPED' | 'DONATED' | 'STOLEN' | 'WRITTEN_OFF';
    amount?: Money;
    reason?: string;
    approvedBy?: string;
    buyerInfo?: string;
    disposalExpenses?: Money;
    gainLoss?: Money;
  };

  notes?: string;
  attachments?: FileAttachment[];
  customFields?: Record<string, any>;
}

/**
 * Asset depreciation schedule interface
 */
export interface AssetDepreciationSchedule extends BaseEntity {
  assetId: string;
  scheduleItems: {
    period: string; // e.g., "2023-01", "2023-Q1", "2023"
    startDate: Date;
    endDate: Date;
    openingValue: Money;
    depreciationAmount: Money;
    closingValue: Money;
    status: 'PENDING' | 'PROCESSED' | 'ADJUSTED';
    journalEntryId?: string;
    notes?: string;
  }[];
  totalDepreciation: Money;
  remainingDepreciation: Money;
  createdBy: string;
  lastUpdated: Date;
}

/**
 * Asset transfer interface
 */
export interface AssetTransfer extends BaseEntity, AuditInfo {
  transferNumber: string;
  assetId: string;
  transferDate: Date;
  reason: string;

  // From
  fromBranchId: string;
  fromDepartmentId?: string;
  fromLocation?: string;
  fromAssignee?: string;

  // To
  toBranchId: string;
  toDepartmentId?: string;
  toLocation?: string;
  toAssignee?: string;

  status: 'PENDING' | 'IN_TRANSIT' | 'COMPLETED' | 'CANCELLED';
  approvedBy?: string;
  approvalDate?: Date;
  completedDate?: Date;
  notes?: string;
  attachments?: FileAttachment[];
}

/**
 * Asset revaluation interface
 */
export interface AssetRevaluation extends BaseEntity, AuditInfo {
  revaluationNumber: string;
  assetId: string;
  revaluationDate: Date;
  previousValue: Money;
  newValue: Money;
  adjustmentAmount: Money;
  reason: string;
  method: 'APPRAISAL' | 'MARKET_COMPARISON' | 'COST_APPROACH' | 'OTHER';
  appraiser?: string;
  approvedBy?: string;
  approvalDate?: Date;
  journalEntryId?: string;
  notes?: string;
  attachments?: FileAttachment[];
}

/**
 * Asset category interface
 */
export interface AssetCategory extends BaseEntity, AuditInfo {
  name: string;
  description?: string;
  parentCategoryId?: string;
  assetType: AssetType;
  defaultDepreciationMethod: DepreciationMethod;
  defaultUsefulLifeYears: number;
  defaultResidualValuePercentage: number;
  assetAccountId?: string;
  depreciationAccountId?: string;
  accumulatedDepreciationAccountId?: string;
  active: boolean;
}

/**
 * Asset inventory count interface
 */
export interface AssetInventoryCount extends BaseEntity, AuditInfo {
  countNumber: string;
  branchId: string;
  departmentId?: string;
  startDate: Date;
  endDate?: Date;
  status: 'PLANNED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  conductedBy: string[];
  supervisedBy?: string;

  countItems: {
    assetId: string;
    assetNumber: string;
    assetName: string;
    expectedLocation: string;
    found: boolean;
    actualLocation?: string;
    condition: 'EXCELLENT' | 'GOOD' | 'FAIR' | 'POOR' | 'UNUSABLE';
    notes?: string;
    scannedBy?: string;
    scannedAt?: Date;
  }[];

  summary: {
    totalAssets: number;
    assetsFound: number;
    assetsMissing: number;
    assetsInDifferentLocation: number;
    assetsDamaged: number;
  };

  notes?: string;
  attachments?: FileAttachment[];
  completedDate?: Date;
  approvedBy?: string;
  approvalDate?: Date;
}
