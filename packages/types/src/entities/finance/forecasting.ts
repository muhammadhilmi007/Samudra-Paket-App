/**
 * @file Financial forecasting type definitions
 * @description Defines types for financial forecasting and analysis in the finance module
 */

import { BaseEntity, AuditInfo, Money, FileAttachment } from '../base';

/**
 * Forecast model type enum
 */
export enum ForecastModelType {
  TIME_SERIES = 'TIME_SERIES',
  REGRESSION = 'REGRESSION',
  MOVING_AVERAGE = 'MOVING_AVERAGE',
  EXPONENTIAL_SMOOTHING = 'EXPONENTIAL_SMOOTHING',
  SEASONAL = 'SEASONAL',
  MANUAL = 'MANUAL',
  HYBRID = 'HYBRID',
}

/**
 * Forecast status enum
 */
export enum ForecastStatus {
  DRAFT = 'DRAFT',
  IN_REVIEW = 'IN_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  ACTIVE = 'ACTIVE',
  ARCHIVED = 'ARCHIVED',
}

/**
 * Scenario type enum
 */
export enum ScenarioType {
  BASE_CASE = 'BASE_CASE',
  OPTIMISTIC = 'OPTIMISTIC',
  PESSIMISTIC = 'PESSIMISTIC',
  CUSTOM = 'CUSTOM',
}

/**
 * Financial forecast interface
 */
export interface FinancialForecast extends BaseEntity, AuditInfo {
  forecastNumber: string;
  name: string;
  description?: string;
  fiscalYear: string;
  startDate: Date;
  endDate: Date;
  createdBy: string;
  status: ForecastStatus;
  modelType: ForecastModelType;

  // Forecast parameters
  parameters: {
    historicalPeriods?: number;
    confidenceLevel?: number;
    seasonalityPattern?: 'NONE' | 'MONTHLY' | 'QUARTERLY' | 'YEARLY';
    growthAssumption?: number;
    inflationRate?: number;
    customParameters?: Record<string, any>;
  };

  // Forecast categories
  categories: {
    id: string;
    name: string;
    type: 'REVENUE' | 'EXPENSE' | 'ASSET' | 'LIABILITY' | 'EQUITY';
    accountId?: string;
    forecastMethod: ForecastModelType;
    baseValue?: Money;
    growthRate?: number;
    seasonalFactors?: number[];
    notes?: string;
  }[];

  // Forecast periods
  periods: {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
    values: {
      categoryId: string;
      amount: Money;
      confidence?: number;
    }[];
  }[];

  // Scenarios
  scenarios: ForecastScenario[];

  // Approvals
  approvals: {
    level: number;
    approverId: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    date?: Date;
    notes?: string;
  }[];

  // Metadata
  lastUpdated: Date;
  lastCalculated?: Date;
  notes?: string;
  attachments?: FileAttachment[];
  tags?: string[];
}

/**
 * Forecast scenario interface
 */
export interface ForecastScenario {
  id: string;
  name: string;
  description?: string;
  type: ScenarioType;

  // Adjustments
  adjustments: {
    categoryId: string;
    adjustmentType: 'PERCENTAGE' | 'ABSOLUTE';
    adjustmentValue: number; // Percentage or absolute amount
    reason?: string;
  }[];

  // Period values
  periodValues: {
    periodId: string;
    values: {
      categoryId: string;
      amount: Money;
    }[];
  }[];

  // Summary
  summary: {
    totalRevenue: Money;
    totalExpenses: Money;
    netIncome: Money;
    comparisonToBase: {
      revenueVariance: Money;
      revenueVariancePercentage: number;
      expenseVariance: Money;
      expenseVariancePercentage: number;
      netIncomeVariance: Money;
      netIncomeVariancePercentage: number;
    };
  };

  isActive: boolean;
  createdBy: string;
  createdAt: Date;
  notes?: string;
}

/**
 * Financial analysis interface
 */
export interface FinancialAnalysis extends BaseEntity, AuditInfo {
  analysisNumber: string;
  name: string;
  description?: string;
  type: 'RATIO_ANALYSIS' | 'TREND_ANALYSIS' | 'VARIANCE_ANALYSIS' | 'CASH_FLOW_ANALYSIS' | 'CUSTOM';
  startDate: Date;
  endDate: Date;

  // Analysis parameters
  parameters: {
    comparePreviousPeriod?: boolean;
    compareToForecast?: boolean;
    forecastId?: string;
    includeTrend?: boolean;
    trendPeriods?: number;
    customParameters?: Record<string, any>;
  };

  // Analysis metrics
  metrics: {
    id: string;
    name: string;
    category: 'PROFITABILITY' | 'LIQUIDITY' | 'SOLVENCY' | 'EFFICIENCY' | 'GROWTH' | 'CUSTOM';
    formula?: string;
    currentValue: number;
    previousValue?: number;
    forecastValue?: number;
    variance?: number;
    variancePercentage?: number;
    trend?: number[];
    benchmark?: number;
    status: 'GOOD' | 'NEUTRAL' | 'WARNING' | 'CRITICAL';
    notes?: string;
  }[];

  // Period data
  periods: {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
    values: {
      metricId: string;
      value: number;
    }[];
  }[];

  // Insights
  insights: {
    id: string;
    title: string;
    description: string;
    relatedMetrics: string[];
    severity: 'INFO' | 'LOW' | 'MEDIUM' | 'HIGH';
    recommendations?: string;
    createdBy: string;
    createdAt: Date;
  }[];

  // Metadata
  generatedBy: string;
  generatedAt: Date;
  lastUpdated: Date;
  status: 'DRAFT' | 'FINAL' | 'ARCHIVED';
  notes?: string;
  attachments?: FileAttachment[];
  sharedWith?: string[];
}

/**
 * Financial ratio interface
 */
export interface FinancialRatio extends BaseEntity {
  id: string;
  name: string;
  category: 'PROFITABILITY' | 'LIQUIDITY' | 'SOLVENCY' | 'EFFICIENCY' | 'GROWTH' | 'CUSTOM';
  description?: string;
  formula: string;
  interpretation?: string;
  industryBenchmark?: number;
  companyTarget?: number;
  goodThreshold?: number;
  warningThreshold?: number;
  criticalThreshold?: number;
  higherIsBetter: boolean;
  isActive: boolean;
  displayOrder?: number;
  includeInDashboard: boolean;
  includeInReports: boolean;
  customFields?: Record<string, any>;
}

/**
 * What-if analysis interface
 */
export interface WhatIfAnalysis extends BaseEntity, AuditInfo {
  analysisNumber: string;
  name: string;
  description?: string;
  baseScenarioId?: string;

  // Variables
  variables: {
    id: string;
    name: string;
    description?: string;
    type: 'REVENUE' | 'EXPENSE' | 'RATE' | 'VOLUME' | 'CUSTOM';
    baseValue: number;
    unit?: string;
    minValue?: number;
    maxValue?: number;
    step?: number;
    affectedCategories: string[];
  }[];

  // Scenarios
  scenarios: {
    id: string;
    name: string;
    description?: string;
    variableValues: {
      variableId: string;
      value: number;
    }[];
    results: {
      categoryId: string;
      value: Money;
      changeFromBase?: number;
    }[];
    summary: {
      totalRevenue: Money;
      totalExpenses: Money;
      netIncome: Money;
      changeFromBase: {
        revenueChange: Money;
        revenueChangePercentage: number;
        expenseChange: Money;
        expenseChangePercentage: number;
        netIncomeChange: Money;
        netIncomeChangePercentage: number;
      };
    };
    isRecommended?: boolean;
    notes?: string;
  }[];

  // Sensitivity analysis
  sensitivityAnalysis?: {
    variableId: string;
    targetMetric: string;
    values: {
      variableValue: number;
      metricValue: number;
    }[];
    elasticity?: number;
  }[];

  // Metadata
  createdBy: string;
  createdAt: Date;
  lastUpdated: Date;
  status: 'DRAFT' | 'FINAL' | 'ARCHIVED';
  notes?: string;
  attachments?: FileAttachment[];
}
