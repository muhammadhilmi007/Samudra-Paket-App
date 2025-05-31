/**
 * @file Invoice type definitions
 * @description Defines types for invoice entities in the finance module
 */

import { BaseEntity, AuditInfo, Money, FileAttachment } from '../base';

/**
 * Invoice status enum
 */
export enum InvoiceStatus {
  DRAFT = 'DRAFT',
  ISSUED = 'ISSUED',
  PARTIALLY_PAID = 'PARTIALLY_PAID',
  PAID = 'PAID',
  OVERDUE = 'OVERDUE',
  CANCELLED = 'CANCELLED',
  VOID = 'VOID',
}

/**
 * Invoice entity interface
 */
export interface Invoice extends BaseEntity, AuditInfo {
  invoiceNumber: string;
  customerId: string;
  customerName: string;
  status: InvoiceStatus;
  issueDate: Date;
  dueDate: Date;
  items: InvoiceItem[];
  subtotal: Money;
  taxAmount: Money;
  discountAmount?: Money;
  totalAmount: Money;
  paidAmount: Money;
  dueAmount: Money;
  paymentTerms: string;
  notes?: string;
  billingAddress: {
    attention: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  shipments: {
    shipmentId: string;
    waybillNumber: string;
  }[];
  payments: {
    paymentId: string;
    amount: Money;
    date: Date;
  }[];
  attachments?: FileAttachment[];
  remindersSent: {
    date: Date;
    method: 'EMAIL' | 'SMS' | 'MANUAL';
    sentBy: string;
  }[];
  taxId?: string;
}

/**
 * Invoice item
 */
export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: Money;
  taxRate: number; // Percentage
  taxAmount: Money;
  discountRate?: number; // Percentage
  discountAmount?: Money;
  totalAmount: Money;
  shipmentId?: string;
  serviceType?: string;
}
