/**
 * @file Cash collection type definitions
 * @description Defines types for cash collection entities in the finance module
 */

import { BaseEntity, AuditInfo, Money, FileAttachment } from '../base';

/**
 * Cash collection record
 */
export interface CashCollection extends BaseEntity, AuditInfo {
  collectionNumber: string;
  collectedBy: string; // User ID
  branchId: string;
  startTime: Date;
  endTime?: Date;
  expectedAmount: Money;
  actualAmount: Money;
  discrepancyAmount?: Money;
  discrepancyReason?: string;
  status: 'OPEN' | 'BALANCED' | 'DISCREPANCY' | 'CLOSED';
  transactions: {
    type: 'PAYMENT' | 'REFUND' | 'EXPENSE' | 'ADJUSTMENT';
    id: string;
    amount: Money;
    time: Date;
  }[];
  notes?: string;
  handoverTo?: string; // User ID
  handoverTime?: Date;
  handoverNotes?: string;
  attachments?: FileAttachment[];
}
