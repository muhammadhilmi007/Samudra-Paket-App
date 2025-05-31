/**
 * @file Financial Reporting type definitions
 * @description Defines types for financial reports and statements
 */

import { BaseEntity, AuditInfo, Money } from '../base';

/**
 * Report type enum
 */
export enum FinancialReportType {
  INCOME_STATEMENT = 'INCOME_STATEMENT',
  BALANCE_SHEET = 'BALANCE_SHEET',
  CASH_FLOW = 'CASH_FLOW',
  ACCOUNTS_RECEIVABLE_AGING = 'ACCOUNTS_RECEIVABLE_AGING',
  ACCOUNTS_PAYABLE_AGING = 'ACCOUNTS_PAYABLE_AGING',
  GENERAL_LEDGER = 'GENERAL_LEDGER',
  TRIAL_BALANCE = 'TRIAL_BALANCE',
  TAX_SUMMARY = 'TAX_SUMMARY',
  REVENUE_BY_CUSTOMER = 'REVENUE_BY_CUSTOMER',
  REVENUE_BY_SERVICE = 'REVENUE_BY_SERVICE',
  EXPENSE_BY_CATEGORY = 'EXPENSE_BY_CATEGORY',
  PROFIT_LOSS_BY_BRANCH = 'PROFIT_LOSS_BY_BRANCH',
  CUSTOM = 'CUSTOM',
}

/**
 * Report period type enum
 */
export enum ReportPeriodType {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  QUARTERLY = 'QUARTERLY',
  YEARLY = 'YEARLY',
  CUSTOM = 'CUSTOM',
}

/**
 * Report status enum
 */
export enum ReportStatus {
  SCHEDULED = 'SCHEDULED',
  GENERATING = 'GENERATING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  ARCHIVED = 'ARCHIVED',
}

/**
 * Financial report interface
 */
export interface FinancialReport extends BaseEntity, AuditInfo {
  reportNumber: string;
  name: string;
  type: FinancialReportType;
  format: 'PDF' | 'EXCEL' | 'CSV' | 'HTML' | 'JSON';
  status: ReportStatus;
  periodType: ReportPeriodType;
  startDate: Date;
  endDate: Date;
  comparisonPeriod?: {
    startDate: Date;
    endDate: Date;
  };
  parameters?: Record<string, any>;
  filters?: {
    field: string;
    operator: 'EQUALS' | 'NOT_EQUALS' | 'GREATER_THAN' | 'LESS_THAN' | 'BETWEEN' | 'IN' | 'NOT_IN';
    value: any;
    secondValue?: any; // For BETWEEN operator
  }[];
  generatedBy?: string; // User ID
  generatedAt?: Date;
  fileUrl?: string;
  fileSize?: number;
  scheduleId?: string;
  notes?: string;
  isTemplate: boolean;
}

/**
 * Report schedule interface
 */
export interface ReportSchedule extends BaseEntity, AuditInfo {
  name: string;
  reportType: FinancialReportType;
  frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'YEARLY';
  dayOfWeek?: number; // 0-6, where 0 is Sunday (for weekly)
  dayOfMonth?: number; // 1-31 (for monthly)
  month?: number; // 1-12 (for quarterly, yearly)
  time: string; // Format: "HH:MM"
  timezone: string;
  parameters: Record<string, any>;
  format: 'PDF' | 'EXCEL' | 'CSV' | 'HTML' | 'JSON';
  recipients: {
    userId?: string;
    email?: string;
    name?: string;
  }[];
  isActive: boolean;
  lastRunAt?: Date;
  nextRunAt?: Date;
  createdBy: string;
}

/**
 * Income statement interface
 */
export interface IncomeStatement {
  reportDate: Date;
  periodStart: Date;
  periodEnd: Date;
  revenue: {
    accountCode: string;
    accountName: string;
    amount: Money;
    percentOfRevenue: number;
    comparisonAmount?: Money;
    percentChange?: number;
  }[];
  totalRevenue: Money;
  expenses: {
    accountCode: string;
    accountName: string;
    amount: Money;
    percentOfRevenue: number;
    comparisonAmount?: Money;
    percentChange?: number;
  }[];
  totalExpenses: Money;
  grossProfit: Money;
  grossProfitMargin: number; // Percentage
  operatingIncome: Money;
  operatingMargin: number; // Percentage
  otherIncome: Money;
  otherExpenses: Money;
  incomeTax: Money;
  netIncome: Money;
  netProfitMargin: number; // Percentage
}

/**
 * Balance sheet interface
 */
export interface BalanceSheet {
  reportDate: Date;
  asOfDate: Date;
  assets: {
    accountCode: string;
    accountName: string;
    amount: Money;
    percentOfTotal: number;
    comparisonAmount?: Money;
    percentChange?: number;
  }[];
  currentAssets: Money;
  nonCurrentAssets: Money;
  totalAssets: Money;
  liabilities: {
    accountCode: string;
    accountName: string;
    amount: Money;
    percentOfTotal: number;
    comparisonAmount?: Money;
    percentChange?: number;
  }[];
  currentLiabilities: Money;
  nonCurrentLiabilities: Money;
  totalLiabilities: Money;
  equity: {
    accountCode: string;
    accountName: string;
    amount: Money;
    percentOfTotal: number;
    comparisonAmount?: Money;
    percentChange?: number;
  }[];
  totalEquity: Money;
  totalLiabilitiesAndEquity: Money;
}

/**
 * Cash flow statement interface
 */
export interface CashFlowStatement {
  reportDate: Date;
  periodStart: Date;
  periodEnd: Date;
  operatingActivities: {
    description: string;
    amount: Money;
    isSubtotal: boolean;
  }[];
  netCashFromOperatingActivities: Money;
  investingActivities: {
    description: string;
    amount: Money;
    isSubtotal: boolean;
  }[];
  netCashFromInvestingActivities: Money;
  financingActivities: {
    description: string;
    amount: Money;
    isSubtotal: boolean;
  }[];
  netCashFromFinancingActivities: Money;
  netIncreaseInCash: Money;
  cashAtBeginningOfPeriod: Money;
  cashAtEndOfPeriod: Money;
}

/**
 * Financial KPI interface
 */
export interface FinancialKPI extends BaseEntity {
  name: string;
  category: 'PROFITABILITY' | 'LIQUIDITY' | 'EFFICIENCY' | 'GROWTH' | 'CUSTOM';
  value: number;
  unit: '%' | 'DAYS' | 'RATIO' | 'CURRENCY';
  target?: number;
  variance?: number;
  trend: 'UP' | 'DOWN' | 'STABLE';
  periodType: ReportPeriodType;
  date: Date;
  previousValue?: number;
  percentChange?: number;
  formula?: string;
  description?: string;
}
