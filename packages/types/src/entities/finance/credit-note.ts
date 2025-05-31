/**
 * @file Credit note type definitions
 * @description Defines types for credit note entities in the finance module
 */

import { BaseEntity, AuditInfo, Money, FileAttachment } from '../base';

/**
 * Credit note status
 */
export enum CreditNoteStatus {
  DRAFT = 'DRAFT',
  ISSUED = 'ISSUED',
  APPLIED = 'APPLIED',
  PARTIALLY_APPLIED = 'PARTIALLY_APPLIED',
  VOID = 'VOID',
}

/**
 * Credit note interface
 */
export interface CreditNote extends BaseEntity, AuditInfo {
  creditNoteNumber: string;
  customerId: string;
  customerName: string;
  status: CreditNoteStatus;
  issueDate: Date;
  originalInvoiceId?: string;
  originalInvoiceNumber?: string;
  reason: 'RETURN' | 'OVERPAYMENT' | 'DISCOUNT' | 'CANCELLATION' | 'CORRECTION' | 'OTHER';
  reasonDescription?: string;
  items: CreditNoteItem[];
  subtotal: Money;
  taxAmount: Money;
  totalAmount: Money;
  appliedAmount: Money;
  remainingAmount: Money;
  applications: {
    invoiceId: string;
    invoiceNumber: string;
    amount: Money;
    date: Date;
  }[];
  notes?: string;
  attachments?: FileAttachment[];
}

/**
 * Credit note item
 */
export interface CreditNoteItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: Money;
  taxRate: number; // Percentage
  taxAmount: Money;
  totalAmount: Money;
  originalInvoiceItemId?: string;
  shipmentId?: string;
  serviceType?: string;
}
