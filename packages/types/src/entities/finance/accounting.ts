/**
 * @file Accounting type definitions
 * @description Defines types for accounting entities in the finance module
 */

import { AuditInfo, BaseEntity, Money } from '../base';

/**
 * Chart of accounts type
 */
export enum AccountType {
  ASSET = 'ASSET',
  LIABILITY = 'LIABILITY',
  EQUITY = 'EQUITY',
  REVENUE = 'REVENUE',
  EXPENSE = 'EXPENSE',
}

/**
 * Account interface
 */
export interface Account extends BaseEntity, AuditInfo {
  accountCode: string;
  name: string;
  description?: string;
  type: AccountType;
  parentAccountId?: string;
  isActive: boolean;
  balance: Money;
  isSystemAccount: boolean;
}

/**
 * Journal entry status
 */
export enum JournalEntryStatus {
  DRAFT = 'DRAFT',
  POSTED = 'POSTED',
  VOIDED = 'VOIDED',
}

/**
 * Journal entry interface
 */
export interface JournalEntry extends BaseEntity, AuditInfo {
  entryNumber: string;
  date: Date;
  description: string;
  status: JournalEntryStatus;
  lines: JournalEntryLine[];
  reference?: string;
  source: 'MANUAL' | 'INVOICE' | 'PAYMENT' | 'EXPENSE' | 'ADJUSTMENT' | 'SYSTEM';
  sourceId?: string;
  notes?: string;
  postedBy?: string;
  postedAt?: Date;
}

/**
 * Journal entry line
 */
export interface JournalEntryLine {
  id: string;
  accountId: string;
  accountCode: string;
  accountName: string;
  description?: string;
  debit: Money;
  credit: Money;
  branchId?: string;
}
