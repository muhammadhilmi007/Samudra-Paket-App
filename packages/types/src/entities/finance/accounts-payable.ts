/**
 * @file Accounts Payable type definitions
 * @description Defines types for accounts payable entities in the finance module
 */

import { BaseEntity, AuditInfo, Money, FileAttachment } from '../base';

/**
 * Vendor invoice status enum
 */
export enum VendorInvoiceStatus {
  RECEIVED = 'RECEIVED',
  PENDING_APPROVAL = 'PENDING_APPROVAL',
  APPROVED = 'APPROVED',
  PARTIALLY_PAID = 'PARTIALLY_PAID',
  PAID = 'PAID',
  DISPUTED = 'DISPUTED',
  CANCELLED = 'CANCELLED',
}

/**
 * Vendor payment status enum
 */
export enum VendorPaymentStatus {
  DRAFT = 'DRAFT',
  SCHEDULED = 'SCHEDULED',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
}

/**
 * Vendor invoice interface
 */
export interface VendorInvoice extends BaseEntity, AuditInfo {
  invoiceNumber: string;
  vendorId: string;
  vendorName: string;
  status: VendorInvoiceStatus;
  receiveDate: Date;
  invoiceDate: Date;
  dueDate: Date;
  items: VendorInvoiceItem[];
  subtotal: Money;
  taxAmount: Money;
  discountAmount?: Money;
  totalAmount: Money;
  paidAmount: Money;
  dueAmount: Money;
  paymentTerms: string;
  notes?: string;
  approvalStatus: 'PENDING' | 'APPROVED' | 'REJECTED';
  approvedBy?: string;
  approvedAt?: Date;
  rejectionReason?: string;
  purchaseOrderId?: string;
  purchaseOrderNumber?: string;
  attachments?: FileAttachment[];
  paymentSchedule?: {
    scheduledDate: Date;
    amount: Money;
    status: 'SCHEDULED' | 'PAID' | 'CANCELLED';
    paymentId?: string;
  }[];
  accountingStatus: 'PENDING' | 'RECORDED';
  journalEntryId?: string;
}

/**
 * Vendor invoice item interface
 */
export interface VendorInvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: Money;
  taxRate: number; // Percentage
  taxAmount: Money;
  discountRate?: number; // Percentage
  discountAmount?: Money;
  totalAmount: Money;
  accountId?: string; // Expense account
  departmentId?: string;
  projectId?: string;
}

/**
 * Vendor payment interface
 */
export interface VendorPayment extends BaseEntity, AuditInfo {
  paymentNumber: string;
  vendorId: string;
  vendorName: string;
  amount: Money;
  method: 'CASH' | 'BANK_TRANSFER' | 'CHECK' | 'CREDIT_CARD' | 'DIGITAL_WALLET' | 'OTHER';
  status: VendorPaymentStatus;
  date: Date;
  scheduledDate?: Date;
  referenceNumber?: string;
  description?: string;
  invoices: {
    invoiceId: string;
    invoiceNumber: string;
    amount: Money;
  }[];
  preparedBy: string; // User ID
  approvedBy?: string; // User ID
  executedBy?: string; // User ID
  bankAccountId?: string;
  checkNumber?: string;
  attachments?: FileAttachment[];
  notes?: string;
  accountingStatus: 'PENDING' | 'RECORDED';
  journalEntryId?: string;
}

/**
 * Vendor credit note interface
 */
export interface VendorCreditNote extends BaseEntity, AuditInfo {
  creditNoteNumber: string;
  vendorId: string;
  vendorName: string;
  originalInvoiceId?: string;
  originalInvoiceNumber?: string;
  issueDate: Date;
  amount: Money;
  reason: string;
  description?: string;
  status: 'PENDING' | 'APPLIED' | 'PARTIALLY_APPLIED' | 'EXPIRED';
  applications: {
    invoiceId: string;
    invoiceNumber: string;
    amount: Money;
    date: Date;
  }[];
  expiryDate?: Date;
  attachments?: FileAttachment[];
  accountingStatus: 'PENDING' | 'RECORDED';
  journalEntryId?: string;
}

/**
 * Vendor aging interface
 */
export interface VendorAging extends BaseEntity {
  vendorId: string;
  vendorName: string;
  totalOutstanding: Money;
  current: Money;
  days1To30: Money;
  days31To60: Money;
  days61To90: Money;
  daysOver90: Money;
  lastPaymentDate?: Date;
  lastPaymentAmount?: Money;
}

/**
 * Payment batch interface
 */
export interface PaymentBatch extends BaseEntity, AuditInfo {
  batchNumber: string;
  description?: string;
  status: 'DRAFT' | 'PENDING_APPROVAL' | 'APPROVED' | 'PROCESSING' | 'COMPLETED' | 'CANCELLED';
  createdBy: string;
  approvedBy?: string;
  approvedAt?: Date;
  scheduledDate: Date;
  executedDate?: Date;
  paymentMethod: 'BANK_TRANSFER' | 'CHECK' | 'OTHER';
  bankAccountId?: string;
  totalAmount: Money;
  payments: {
    paymentId: string;
    vendorId: string;
    vendorName: string;
    amount: Money;
    status: VendorPaymentStatus;
  }[];
  notes?: string;
}
