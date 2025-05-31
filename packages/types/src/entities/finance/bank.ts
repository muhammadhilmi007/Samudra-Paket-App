/**
 * @file Bank type definitions
 * @description Defines types for bank entities in the finance module
 */

import { BaseEntity, AuditInfo, Money } from '../base';

/**
 * Bank account status
 */
export enum BankAccountStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  CLOSED = 'CLOSED',
}

/**
 * Bank account interface
 */
export interface BankAccount extends BaseEntity, AuditInfo {
  accountNumber: string;
  bankName: string;
  branchName?: string;
  accountName: string;
  accountType: 'CHECKING' | 'SAVINGS' | 'CURRENT' | 'DEPOSIT' | 'OTHER';
  currency: string;
  balance: Money;
  status: BankAccountStatus;
  isDefault: boolean;
  swiftCode?: string;
  routingNumber?: string;
  notes?: string;
  lastReconciliationDate?: Date;
  statementDay?: number;
}

/**
 * Bank transaction type
 */
export enum BankTransactionType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAWAL = 'WITHDRAWAL',
  TRANSFER = 'TRANSFER',
  PAYMENT = 'PAYMENT',
  RECEIPT = 'RECEIPT',
  FEE = 'FEE',
  INTEREST = 'INTEREST',
  ADJUSTMENT = 'ADJUSTMENT',
}

/**
 * Bank transaction interface
 */
export interface BankTransaction extends BaseEntity, AuditInfo {
  transactionNumber: string;
  accountId: string;
  type: BankTransactionType;
  amount: Money;
  date: Date;
  description: string;
  reference?: string;
  relatedTo?: {
    type: 'PAYMENT' | 'INVOICE' | 'EXPENSE' | 'TRANSFER' | 'OTHER';
    id: string;
  };
  reconciled: boolean;
  reconciledDate?: Date;
  notes?: string;
}
