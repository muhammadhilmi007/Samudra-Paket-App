/**
 * @file Payment type definitions
 * @description Defines types for payment entities in the finance module
 */

import { BaseEntity, AuditInfo, Money, FileAttachment } from '../base';

/**
 * Payment status enum
 */
export enum PaymentStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED',
  PARTIALLY_REFUNDED = 'PARTIALLY_REFUNDED',
}

/**
 * Payment entity interface
 */
export interface Payment extends BaseEntity, AuditInfo {
  paymentNumber: string;
  customerId: string;
  customerName: string;
  amount: Money;
  method:
    | 'CASH'
    | 'BANK_TRANSFER'
    | 'CREDIT_CARD'
    | 'DEBIT_CARD'
    | 'DIGITAL_WALLET'
    | 'CHECK'
    | 'OTHER';
  status: PaymentStatus;
  date: Date;
  referenceNumber?: string;
  description?: string;
  invoices: {
    invoiceId: string;
    invoiceNumber: string;
    amount: Money;
  }[];
  collectedBy?: string; // User ID
  branchId: string;
  attachments?: FileAttachment[];
  notes?: string;
  bankDetails?: {
    bankName: string;
    accountNumber: string;
    accountName: string;
    transactionId?: string;
    transactionDate?: Date;
  };
  cardDetails?: {
    cardType: string;
    lastFourDigits: string;
    authorizationCode?: string;
  };
}
