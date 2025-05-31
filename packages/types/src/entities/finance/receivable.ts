/**
 * @file Receivable type definitions
 * @description Defines types for accounts receivable entities in the finance module
 */

import { BaseEntity, AuditInfo, Money } from '../base';

/**
 * Aging bucket enum
 */
export enum AgingBucket {
  CURRENT = 'CURRENT',
  DAYS_1_30 = 'DAYS_1_30',
  DAYS_31_60 = 'DAYS_31_60',
  DAYS_61_90 = 'DAYS_61_90',
  DAYS_OVER_90 = 'DAYS_OVER_90',
}

/**
 * Customer aging interface
 */
export interface CustomerAging extends BaseEntity {
  customerId: string;
  customerName: string;
  totalOutstanding: Money;
  current: Money;
  days1To30: Money;
  days31To60: Money;
  days61To90: Money;
  daysOver90: Money;
  lastPaymentDate?: Date;
  lastPaymentAmount?: Money;
  creditLimit?: Money;
  availableCredit?: Money;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
}

/**
 * Collection status enum
 */
export enum CollectionStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  PARTIALLY_COLLECTED = 'PARTIALLY_COLLECTED',
  COLLECTED = 'COLLECTED',
  DISPUTED = 'DISPUTED',
  WRITTEN_OFF = 'WRITTEN_OFF',
}

/**
 * Collection case interface
 */
export interface CollectionCase extends BaseEntity, AuditInfo {
  caseNumber: string;
  customerId: string;
  customerName: string;
  invoices: {
    invoiceId: string;
    invoiceNumber: string;
    originalAmount: Money;
    outstandingAmount: Money;
    dueDate: Date;
    daysPastDue: number;
  }[];
  totalAmount: Money;
  assignedTo?: string; // User ID
  status: CollectionStatus;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  actions: {
    id: string;
    type: 'CALL' | 'EMAIL' | 'SMS' | 'LETTER' | 'VISIT' | 'OTHER';
    date: Date;
    performedBy: string;
    notes: string;
    outcome?: string;
    followUpDate?: Date;
  }[];
  nextActionDate?: Date;
  disputeReason?: string;
  resolutionNotes?: string;
  paymentPromises: {
    id: string;
    promisedAmount: Money;
    promisedDate: Date;
    status: 'PENDING' | 'FULFILLED' | 'PARTIALLY_FULFILLED' | 'BROKEN';
    actualPaymentDate?: Date;
    actualPaymentAmount?: Money;
    notes?: string;
  }[];
}
