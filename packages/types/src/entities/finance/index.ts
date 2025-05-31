/**
 * @file Finance module index
 * @description Exports all finance-related type definitions
 */
// Invoice types
export { InvoiceStatus } from './invoice';
export type { Invoice, InvoiceItem } from './invoice';

// Payment types
export { PaymentStatus } from './payment';
export type { Payment } from './payment';

// Expense types
export { ExpenseStatus } from './expense';
export type { Expense } from './expense';

// Cash collection types
export type { CashCollection } from './cash-collection';

// Accounting types
export { AccountType, JournalEntryStatus } from './accounting';
export type { Account, JournalEntry, JournalEntryLine } from './accounting';

// Bank types
export { BankAccountStatus, BankTransactionType } from './bank';
export type { BankAccount, BankTransaction } from './bank';

// Credit note types
export { CreditNoteStatus } from './credit-note';
export type { CreditNote, CreditNoteItem } from './credit-note';

// Receivable types
export { AgingBucket, CollectionStatus } from './receivable';
export type { CollectionCase, CustomerAging } from './receivable';

// Accounts Payable types
export { VendorInvoiceStatus, VendorPaymentStatus } from './accounts-payable';
export type {
  VendorInvoice,
  VendorInvoiceItem,
  VendorPayment,
  VendorCreditNote,
  VendorAging,
  PaymentBatch,
} from './accounts-payable';

// Financial Reporting types
export { FinancialReportType, ReportPeriodType, ReportStatus } from './reporting';
export type {
  FinancialReport,
  ReportSchedule,
  IncomeStatement,
  BalanceSheet,
  CashFlowStatement,
  FinancialKPI,
} from './reporting';

// Tax types
export { TaxPeriodStatus, TaxType } from './tax';
export type { TaxPeriod, TaxRate } from './tax';

// Budget types
export { BudgetStatus, BudgetType, BudgetAllocationMethod } from './budget';
export type {
  Budget,
  BudgetCategory,
  BudgetPeriod,
  BudgetTransaction,
  BudgetVarianceReport,
  BudgetForecast,
} from './budget';

// Asset types
export { AssetStatus, AssetType, DepreciationMethod } from './asset';
export type {
  Asset,
  AssetDepreciationSchedule,
  AssetTransfer,
  AssetRevaluation,
  AssetCategory,
  AssetInventoryCount,
} from './asset';

// Forecasting types
export { ForecastModelType, ForecastStatus, ScenarioType } from './forecasting';
export type {
  FinancialForecast,
  ForecastScenario,
  FinancialAnalysis,
  FinancialRatio,
  WhatIfAnalysis,
} from './forecasting';

// Compliance types
export { ComplianceStatus, CompliancePriority, AuditStatus, FindingSeverity } from './compliance';
export type {
  ComplianceRequirement,
  AuditPlan,
  Audit,
  Control,
  RegulatoryReport,
} from './compliance';

// Financial period
export interface FinancialPeriod {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  status: 'OPEN' | 'CLOSED' | 'LOCKED';
  closedBy?: string;
  closedAt?: Date;
}
