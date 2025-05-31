/**
 * @file Tax type definitions
 * @description Defines types for tax entities in the finance module
 */

import { BaseEntity, AuditInfo } from '../base';

/**
 * Tax type enum
 */
export enum TaxType {
  VAT = 'VAT',
  GST = 'GST',
  SALES_TAX = 'SALES_TAX',
  WITHHOLDING_TAX = 'WITHHOLDING_TAX',
  INCOME_TAX = 'INCOME_TAX',
  OTHER = 'OTHER',
}

/**
 * Tax rate interface
 */
export interface TaxRate extends BaseEntity, AuditInfo {
  code: string;
  name: string;
  description?: string;
  type: TaxType;
  rate: number; // Percentage
  isCompound: boolean;
  isRecoverable: boolean;
  isDefault: boolean;
  effectiveFrom: Date;
  effectiveTo?: Date;
  jurisdiction: {
    country: string;
    state?: string;
    city?: string;
  };
  accountId?: string; // For tax liability account
  recoveryAccountId?: string; // For tax recovery account
}

/**
 * Tax period status enum
 */
export enum TaxPeriodStatus {
  OPEN = 'OPEN',
  CALCULATED = 'CALCULATED',
  FILED = 'FILED',
  PAID = 'PAID',
  CLOSED = 'CLOSED',
}

/**
 * Tax period interface
 */
export interface TaxPeriod extends BaseEntity, AuditInfo {
  periodName: string;
  taxType: TaxType;
  startDate: Date;
  endDate: Date;
  dueDate: Date;
  status: TaxPeriodStatus;
  filingReference?: string;
  filingDate?: Date;
  paymentDate?: Date;
  notes?: string;
}
