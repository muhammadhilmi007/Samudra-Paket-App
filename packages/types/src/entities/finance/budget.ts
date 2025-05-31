/**
 * @file Budget type definitions
 * @description Defines types for budget management in the finance module
 */

import { BaseEntity, AuditInfo, Money } from '../base';

/**
 * Budget status enum
 */
export enum BudgetStatus {
  DRAFT = 'DRAFT',
  APPROVED = 'APPROVED',
  ACTIVE = 'ACTIVE',
  CLOSED = 'CLOSED',
  ARCHIVED = 'ARCHIVED',
}

/**
 * Budget type enum
 */
export enum BudgetType {
  OPERATIONAL = 'OPERATIONAL',
  CAPITAL = 'CAPITAL',
  PROJECT = 'PROJECT',
  DEPARTMENT = 'DEPARTMENT',
  BRANCH = 'BRANCH',
}

/**
 * Budget allocation method enum
 */
export enum BudgetAllocationMethod {
  EQUAL = 'EQUAL',
  PERCENTAGE = 'PERCENTAGE',
  MANUAL = 'MANUAL',
  SEASONAL = 'SEASONAL',
}

/**
 * Budget interface
 */
export interface Budget extends BaseEntity, AuditInfo {
  budgetNumber: string;
  name: string;
  description?: string;
  type: BudgetType;
  fiscalYear: string;
  startDate: Date;
  endDate: Date;
  status: BudgetStatus;
  totalAmount: Money;
  currency: string;
  owner: string; // User ID
  department?: string;
  branchId?: string;
  projectId?: string;
  categories: BudgetCategory[];
  periods: BudgetPeriod[];
  notes?: string;
  attachments?: string[]; // File IDs
  approvals: {
    level: number;
    approverId: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    date?: Date;
    notes?: string;
  }[];
  isRolling: boolean;
  rolloverSettings?: {
    rolloverUnused: boolean;
    rolloverPercentage?: number;
  };
}

/**
 * Budget category interface
 */
export interface BudgetCategory {
  id: string;
  name: string;
  description?: string;
  accountId?: string; // Reference to chart of accounts
  plannedAmount: Money;
  allocationMethod: BudgetAllocationMethod;
  allocations?: {
    periodId: string;
    amount: Money;
    percentage?: number;
  }[];
}

/**
 * Budget period interface
 */
export interface BudgetPeriod {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  plannedAmount: Money;
  actualAmount: Money;
  variance: Money;
  variancePercentage: number;
  status: 'OPEN' | 'CLOSED';
  notes?: string;
}

/**
 * Budget transaction interface
 */
export interface BudgetTransaction extends BaseEntity, AuditInfo {
  transactionId: string;
  budgetId: string;
  categoryId: string;
  periodId: string;
  amount: Money;
  date: Date;
  description: string;
  sourceType: 'EXPENSE' | 'INVOICE' | 'PAYMENT' | 'JOURNAL' | 'MANUAL';
  sourceId?: string;
  notes?: string;
}

/**
 * Budget variance report interface
 */
export interface BudgetVarianceReport extends BaseEntity {
  reportId: string;
  budgetId: string;
  name: string;
  generatedDate: Date;
  periodStart: Date;
  periodEnd: Date;
  totalPlanned: Money;
  totalActual: Money;
  totalVariance: Money;
  totalVariancePercentage: number;
  categories: {
    categoryId: string;
    categoryName: string;
    planned: Money;
    actual: Money;
    variance: Money;
    variancePercentage: number;
  }[];
  periods: {
    periodId: string;
    periodName: string;
    planned: Money;
    actual: Money;
    variance: Money;
    variancePercentage: number;
  }[];
  notes?: string;
  createdBy: string;
}

/**
 * Budget forecast interface
 */
export interface BudgetForecast extends BaseEntity, AuditInfo {
  forecastId: string;
  budgetId: string;
  name: string;
  description?: string;
  creationDate: Date;
  forecastPeriod: {
    startDate: Date;
    endDate: Date;
  };
  forecastMethod: 'HISTORICAL' | 'TREND' | 'MANUAL' | 'HYBRID';
  categories: {
    categoryId: string;
    categoryName: string;
    currentAmount: Money;
    forecastAmount: Money;
    adjustmentPercentage?: number;
    notes?: string;
  }[];
  periods: {
    periodId: string;
    periodName: string;
    currentAmount: Money;
    forecastAmount: Money;
    adjustmentPercentage?: number;
  }[];
  assumptions?: string;
  scenarios?: {
    id: string;
    name: string;
    type: 'OPTIMISTIC' | 'PESSIMISTIC' | 'MOST_LIKELY';
    adjustmentPercentage: number;
    totalAmount: Money;
  }[];
  approvalStatus: 'DRAFT' | 'PENDING' | 'APPROVED' | 'REJECTED';
  approvedBy?: string;
  approvalDate?: Date;
}
