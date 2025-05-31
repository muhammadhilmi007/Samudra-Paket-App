/**
 * @file Financial compliance type definitions
 * @description Defines types for financial compliance, audit, and regulatory reporting
 */

import { BaseEntity, AuditInfo, Money, FileAttachment } from '../base';

/**
 * Compliance requirement status enum
 */
export enum ComplianceStatus {
  ACTIVE = 'ACTIVE',
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLIANT = 'COMPLIANT',
  NON_COMPLIANT = 'NON_COMPLIANT',
  EXEMPT = 'EXEMPT',
  EXPIRED = 'EXPIRED',
}

/**
 * Compliance requirement priority enum
 */
export enum CompliancePriority {
  CRITICAL = 'CRITICAL',
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
}

/**
 * Audit status enum
 */
export enum AuditStatus {
  PLANNED = 'PLANNED',
  IN_PROGRESS = 'IN_PROGRESS',
  UNDER_REVIEW = 'UNDER_REVIEW',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

/**
 * Finding severity enum
 */
export enum FindingSeverity {
  CRITICAL = 'CRITICAL',
  MAJOR = 'MAJOR',
  MODERATE = 'MODERATE',
  MINOR = 'MINOR',
  OBSERVATION = 'OBSERVATION',
}

/**
 * Compliance requirement interface
 */
export interface ComplianceRequirement extends BaseEntity, AuditInfo {
  requirementId: string;
  name: string;
  description: string;
  regulationType:
    | 'TAX'
    | 'FINANCIAL_REPORTING'
    | 'INDUSTRY_SPECIFIC'
    | 'LABOR'
    | 'ENVIRONMENTAL'
    | 'DATA_PRIVACY'
    | 'ANTI_CORRUPTION'
    | 'OTHER';
  regulatoryBody?: string;
  regulation?: string;
  section?: string;
  applicableCountries: string[];
  applicableBranches?: string[];
  status: ComplianceStatus;
  priority: CompliancePriority;

  // Compliance details
  effectiveDate: Date;
  expiryDate?: Date;
  filingFrequency?: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUALLY' | 'ANNUALLY' | 'ONE_TIME' | 'CUSTOM';
  nextFilingDate?: Date;
  filingDeadline?: Date;
  gracePeriodDays?: number;

  // Responsibility
  responsibleDepartment: string;
  primaryResponsible: string; // User ID
  secondaryResponsible?: string; // User ID

  // Compliance evidence
  evidenceRequired: boolean;
  evidenceTypes?: string[];
  evidenceDocuments?: {
    id: string;
    name: string;
    description?: string;
    fileId: string;
    uploadedBy: string;
    uploadedAt: Date;
    expiryDate?: Date;
    status: 'VALID' | 'EXPIRED' | 'REJECTED';
    notes?: string;
  }[];

  // Risk assessment
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  riskImpact?: string;
  potentialPenalties?: string;
  financialImpact?: Money;

  // Compliance history
  complianceHistory?: {
    id: string;
    date: Date;
    status: ComplianceStatus;
    notes?: string;
    updatedBy: string;
    attachments?: string[]; // File IDs
  }[];

  // Metadata
  notes?: string;
  attachments?: FileAttachment[];
  tags?: string[];
  relatedRequirements?: string[]; // IDs of related requirements
}

/**
 * Audit plan interface
 */
export interface AuditPlan extends BaseEntity, AuditInfo {
  planId: string;
  name: string;
  description?: string;
  year: number;
  status: 'DRAFT' | 'APPROVED' | 'IN_PROGRESS' | 'COMPLETED';

  // Audit scope
  scope: {
    departments?: string[];
    branches?: string[];
    processes?: string[];
    systems?: string[];
    financialAccounts?: string[];
    complianceRequirements?: string[];
  };

  // Audit schedule
  audits: {
    id: string;
    name: string;
    type: 'INTERNAL' | 'EXTERNAL' | 'COMPLIANCE' | 'FINANCIAL' | 'OPERATIONAL' | 'IT' | 'SPECIAL';
    plannedStartDate: Date;
    plannedEndDate: Date;
    status: AuditStatus;
    auditors: string[]; // User IDs
    notes?: string;
  }[];

  // Resources
  resources: {
    personnelCount: number;
    estimatedHours: number;
    budget?: Money;
    externalResources?: string;
  };

  // Approvals
  approvals: {
    level: number;
    approverId: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    date?: Date;
    notes?: string;
  }[];

  // Metadata
  createdBy: string;
  lastUpdated: Date;
  notes?: string;
  attachments?: FileAttachment[];
}

/**
 * Audit interface
 */
export interface Audit extends BaseEntity, AuditInfo {
  auditId: string;
  planId?: string;
  name: string;
  description?: string;
  type: 'INTERNAL' | 'EXTERNAL' | 'COMPLIANCE' | 'FINANCIAL' | 'OPERATIONAL' | 'IT' | 'SPECIAL';

  // Audit timing
  plannedStartDate: Date;
  plannedEndDate: Date;
  actualStartDate?: Date;
  actualEndDate?: Date;

  // Audit scope
  scope: {
    departments?: string[];
    branches?: string[];
    processes?: string[];
    systems?: string[];
    financialAccounts?: string[];
    complianceRequirements?: string[];
    periodStart?: Date;
    periodEnd?: Date;
  };

  // Audit team
  auditTeam: {
    leadAuditor: string; // User ID
    auditors: string[]; // User IDs
    externalAuditors?: {
      name: string;
      organization: string;
      role: string;
      contactInfo?: string;
    }[];
  };

  // Audit execution
  status: AuditStatus;
  progress?: number; // Percentage
  findings: {
    id: string;
    title: string;
    description: string;
    area: string;
    criteria?: string;
    condition?: string;
    cause?: string;
    effect?: string;
    severity: FindingSeverity;
    recommendations?: string;
    managementResponse?: string;
    actionPlan?: string;
    responsiblePerson?: string;
    targetDate?: Date;
    status: 'OPEN' | 'IN_PROGRESS' | 'CLOSED' | 'DEFERRED';
    closedDate?: Date;
    closedBy?: string;
    attachments?: string[]; // File IDs
  }[];

  // Audit documentation
  workpapers: {
    id: string;
    name: string;
    description?: string;
    category: 'PLANNING' | 'FIELDWORK' | 'TESTING' | 'EVIDENCE' | 'REPORT' | 'OTHER';
    fileId: string;
    uploadedBy: string;
    uploadedAt: Date;
    status: 'DRAFT' | 'REVIEW' | 'FINAL';
    reviewedBy?: string;
    reviewedAt?: Date;
    notes?: string;
  }[];

  // Audit report
  report?: {
    reportId: string;
    version: number;
    status: 'DRAFT' | 'REVIEW' | 'FINAL';
    executiveSummary?: string;
    conclusions?: string;
    recommendations?: string;
    distributionList?: string[];
    preparedBy: string;
    preparedDate: Date;
    reviewedBy?: string;
    reviewedDate?: Date;
    approvedBy?: string;
    approvedDate?: Date;
    fileId?: string;
  };

  // Follow-up
  followUpRequired: boolean;
  followUpDate?: Date;
  followUpStatus?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  followUpNotes?: string;

  // Metadata
  notes?: string;
  attachments?: FileAttachment[];
  relatedAudits?: string[]; // IDs of related audits
}

/**
 * Control interface
 */
export interface Control extends BaseEntity, AuditInfo {
  controlId: string;
  name: string;
  description: string;
  type: 'PREVENTIVE' | 'DETECTIVE' | 'CORRECTIVE' | 'DIRECTIVE';
  nature: 'MANUAL' | 'AUTOMATED' | 'SEMI_AUTOMATED';
  frequency: 'CONTINUOUS' | 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'ANNUALLY' | 'AD_HOC';

  // Control details
  objective: string;
  riskAddressed: string;
  controlOwner: string; // User ID
  controlPerformer: string; // User ID
  controlReviewer?: string; // User ID

  // Control implementation
  implementationStatus:
    | 'PLANNED'
    | 'IMPLEMENTED'
    | 'UNDER_REVIEW'
    | 'EFFECTIVE'
    | 'INEFFECTIVE'
    | 'REMEDIATION';
  implementationDate?: Date;
  lastTestedDate?: Date;
  nextTestDate?: Date;

  // Control assessment
  effectiveness: 'EFFECTIVE' | 'PARTIALLY_EFFECTIVE' | 'INEFFECTIVE' | 'NOT_TESTED';
  testResults?: {
    id: string;
    testDate: Date;
    testedBy: string;
    sampleSize?: number;
    passCount?: number;
    failCount?: number;
    result: 'PASS' | 'FAIL' | 'INCONCLUSIVE';
    findings?: string;
    recommendations?: string;
    attachments?: string[]; // File IDs
  }[];

  // Control documentation
  procedures?: string;
  evidenceRequired: boolean;
  evidenceRetentionPeriod?: number; // In months

  // Related items
  relatedControls?: string[]; // IDs of related controls
  relatedRisks?: string[]; // IDs of related risks
  relatedComplianceRequirements?: string[]; // IDs of related compliance requirements

  // Metadata
  notes?: string;
  attachments?: FileAttachment[];
  tags?: string[];
}

/**
 * Regulatory report interface
 */
export interface RegulatoryReport extends BaseEntity, AuditInfo {
  reportId: string;
  name: string;
  description?: string;
  regulationType: 'TAX' | 'FINANCIAL' | 'INDUSTRY_SPECIFIC' | 'STATISTICAL' | 'OTHER';
  regulatoryBody: string;

  // Report details
  reportingPeriodStart: Date;
  reportingPeriodEnd: Date;
  dueDate: Date;
  extendedDueDate?: Date;
  filingFrequency: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUALLY' | 'ANNUALLY' | 'ONE_TIME';

  // Report status
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'REVIEW' | 'APPROVED' | 'FILED' | 'REJECTED' | 'AMENDED';
  preparationStartDate?: Date;
  preparationCompleteDate?: Date;
  reviewDate?: Date;
  reviewedBy?: string;
  approvalDate?: Date;
  approvedBy?: string;
  filingDate?: Date;
  filedBy?: string;
  filingReference?: string;

  // Report content
  sections: {
    id: string;
    name: string;
    description?: string;
    status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';
    assignedTo?: string;
    dueDate?: Date;
    completedDate?: Date;
    notes?: string;
  }[];

  // Financial data
  financialData?: {
    totalAssets?: Money;
    totalLiabilities?: Money;
    equity?: Money;
    revenue?: Money;
    expenses?: Money;
    netIncome?: Money;
    taxLiability?: Money;
    otherFinancialMetrics?: Record<string, Money>;
  };

  // Compliance
  complianceStatus: 'COMPLIANT' | 'NON_COMPLIANT' | 'EXEMPTED' | 'PENDING';
  penalties?: {
    amount?: Money;
    reason?: string;
    status: 'POTENTIAL' | 'ASSESSED' | 'PAID' | 'DISPUTED' | 'WAIVED';
    dueDate?: Date;
    paidDate?: Date;
    notes?: string;
  };

  // Responsibility
  responsibleDepartment: string;
  primaryResponsible: string; // User ID
  secondaryResponsible?: string; // User ID

  // Metadata
  notes?: string;
  attachments?: FileAttachment[];
  relatedReports?: string[]; // IDs of related reports
  amendmentOf?: string; // ID of original report if this is an amendment
  amendments?: string[]; // IDs of amendments to this report
}
