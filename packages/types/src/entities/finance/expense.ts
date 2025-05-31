/**
 * @file Expense type definitions
 * @description Defines types for expense entities in the finance module
 */

import { BaseEntity, AuditInfo, Money, FileAttachment } from '../base';

/**
 * Expense status enum
 */
export enum ExpenseStatus {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  PAID = 'PAID',
  CANCELLED = 'CANCELLED',
}

/**
 * Expense entity interface
 */
export interface Expense extends BaseEntity, AuditInfo {
  expenseNumber: string;
  category: string;
  subcategory?: string;
  amount: Money;
  tax?: Money;
  totalAmount: Money;
  date: Date;
  description: string;
  status: ExpenseStatus;
  paymentMethod?:
    | 'CASH'
    | 'BANK_TRANSFER'
    | 'CREDIT_CARD'
    | 'DEBIT_CARD'
    | 'COMPANY_ACCOUNT'
    | 'OTHER';
  paidBy?: string; // User ID
  paidTo: string;
  branchId: string;
  isRecurring: boolean;
  recurringDetails?: {
    frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'YEARLY';
    startDate: Date;
    endDate?: Date;
    nextDate?: Date;
  };
  approvalChain: {
    level: number;
    approverId: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    date?: Date;
    notes?: string;
  }[];
  attachments?: FileAttachment[];
  notes?: string;
  relatedTo?: {
    type: 'VEHICLE' | 'EMPLOYEE' | 'BRANCH' | 'SHIPMENT' | 'OTHER';
    id: string;
    description?: string;
  };
}
