# **PRODUCT REQUIREMENT DOCUMENT (PRD) - Updated**

# **Sistem ERP PT. Sarana Mudah Raya (Samudra Paket)**

**Versi Dokumen:** 1.1  
**Tanggal:** 5 Mei 2025  
**Update Terakhir:** 24 Mei 2025  
**Status:** Draft  
**Disusun oleh:** Product Manager & Business Analyst

## **Changelog**

| Versi | Tanggal | Deskripsi Perubahan | Dibuat oleh |
|-------|---------|-------------------|-------------|
| 1.0 | 5 Mei 2025 | Initial version | Product Manager |
| 1.1 | 24 Mei 2025 | Update arsitektur Monorepo Turborepo | Product Manager, Business Analyst |

## **Update: Arsitektur Monorepo untuk ERP System**

### **Visi Arsitektur Monorepo**

Sistem ERP Samudra Paket akan dibangun menggunakan **Monorepo dengan Turborepo** untuk menciptakan ekosistem development yang terintegrasi dan efisien. Pendekatan ini mendukung visi produk sebagai solusi ERP yang scalable dan maintainable.

### **Struktur Produk dalam Monorepo**

```
samudra-erp-monorepo/
├── apps/
│   ├── web-admin/           # Admin Dashboard (Next.js + JavaScript)
│   ├── web-branch/          # Branch Management Portal (Next.js + JavaScript)
│   ├── mobile-checker/      # Checker Mobile App (Expo + TypeScript)
│   ├── mobile-driver/       # Driver Mobile App (Expo + TypeScript)  
│   ├── mobile-collector/    # Debt Collector Mobile App (Expo + TypeScript)
│   ├── api-gateway/         # API Gateway (Express.js + JavaScript)
│   ├── service-auth/        # Authentication Service (Express.js + JavaScript)
│   ├── service-operational/ # Operational Service (Express.js + JavaScript)
│   ├── service-financial/   # Financial Service (Express.js + JavaScript)
│   └── service-reporting/   # Reporting Service (Express.js + JavaScript)
├── packages/
│   ├── ui-components/       # Shared UI Components (Shadcn + Tailwind)
│   ├── business-logic/      # Shared Business Logic
│   ├── database-models/     # MongoDB Models (Mongoose)
│   ├── api-contracts/       # API Types & Contracts
│   ├── shared-utils/        # Utility Functions
│   ├── shared-constants/    # Business Constants
│   ├── shared-config/       # Configuration Packages
│   └── shared-types/        # TypeScript Type Definitions
└── tools/
    ├── build-scripts/       # Custom build tools
    ├── generators/          # Code generators
    └── deployment/          # Deployment utilities
```

### **Keuntungan Produk dengan Monorepo**

#### **1. Unified Design System**
- **Konsistensi UI/UX**: Shared UI components memastikan konsistensi visual across all applications
- **Brand Compliance**: Centralized brand assets dan design tokens
- **Component Reusability**: UI components dapat digunakan di web dan mobile (dengan React Native Web)

#### **2. Business Logic Consistency**
- **Shared Validations**: Business rules konsisten di frontend dan backend
- **Unified Data Models**: Consistent data structures across all services
- **API Contract Enforcement**: Type-safe API communications

#### **3. Development Velocity**
- **Code Sharing**: Reduced development time dengan shared utilities
- **Cross-team Collaboration**: Easier coordination antar tim development
- **Faster Iteration**: Quick prototyping dengan shared components

#### **4. Quality Assurance**
- **Unified Testing**: Shared testing utilities dan strategies
- **Cross-application Testing**: Integration tests across multiple apps
- **Consistent Code Quality**: Shared linting dan formatting rules

### **Package Breakdown untuk ERP Modules**

#### **Core Packages**

1. **@samudra/ui-components**
   - Dashboard components (charts, tables, forms)
   - Mobile-specific components (scanners, signature pads)
   - Form builders untuk operational forms
   - Data visualization components

2. **@samudra/business-logic** 
   - Pickup workflow logic
   - Shipment calculation algorithms
   - Financial computation functions
   - Validation rules

3. **@samudra/database-models**
   - User dan Role models
   - Operational entities (Shipments, Pickups)
   - Financial entities (Payments, Invoices)
   - Reporting data models

4. **@samudra/api-contracts**
   - REST API types
   - GraphQL schemas (if applicable)
   - WebSocket event types
   - Validation schemas

#### **Domain-Specific Packages**

1. **@samudra/operational-utils**
   - Route optimization algorithms
   - Cargo loading calculators
   - Delivery scheduling logic

2. **@samudra/financial-utils**
   - Accounting calculations  
   - Tax computation
   - Invoice generation
   - Payment processing utilities

3. **@samudra/reporting-utils**
   - Report generation functions
   - Data aggregation utilities
   - Chart configuration helpers

### **Development Workflow dalam Monorepo**

#### **Feature Development Process**
1. **Create Feature Branch** dari main repository
2. **Develop Cross-Package** - Update multiple packages simultaneously
3. **Shared Component Updates** - UI components available immediately across apps
4. **Integrated Testing** - Test changes across affected applications
5. **Coordinated Deployment** - Deploy related changes together

#### **Package Versioning Strategy**
- **Independent Versioning**: Each package has its own version
- **Coordinated Releases**: Major releases coordinated across related packages
- **Dependency Management**: Automatic update of dependent packages
- **Changelog Generation**: Automated changelog dengan Changesets

### **Build dan Deployment Strategy**

#### **Turborepo Configuration**
```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": ["coverage/**"]
    },
    "lint": {},
    "dev": {
      "cache": false
    }
  }
}
```

#### **Deployment Orchestration**
- **Parallel Builds**: Multiple applications build simultaneously
- **Dependency-aware Deployment**: Services deploy in correct order
- **Rollback Strategy**: Coordinated rollbacks across related services
- **Environment Consistency**: Same codebase deployed across environments

### **Impact pada Product Roadmap**

#### **Timeline Adjustments**
- **Fase 0: Monorepo Setup (2 minggu tambahan)**
  - Repository structure setup
  - Package configuration
  - CI/CD pipeline setup
  - Developer tooling configuration

#### **Enhanced Development Phases**
- **Fase 1**: Foundation packages dan core applications
- **Fase 2**: Feature-specific packages dan integrations  
- **Fase 3**: Advanced shared utilities dan optimizations
- **Fase 4**: Cross-application features dan workflows

### **Quality Metrics untuk Monorepo**

#### **Code Quality Metrics**
- **Code Coverage**: Target 80% across all packages
- **Duplication Rate**: Maximum 5% duplicated code
- **Package Dependencies**: Monitor dependency graph complexity
- **Bundle Size**: Track application bundle sizes

#### **Development Metrics**
- **Build Time**: Target <5 minutes for full monorepo build
- **Developer Velocity**: Track features delivered per sprint
- **Code Reuse**: Measure shared code utilization
- **Cross-team Collaboration**: Track cross-package contributions

### **Risk Management untuk Monorepo**

| Risk | Impact | Probability | Mitigation Strategy |
|------|--------|-------------|-------------------|
| Build complexity increases | Medium | High | Turborepo caching, parallel builds |
| Repository becomes too large | Medium | Medium | Git LFS, asset optimization |
| Coupling between packages | High | Medium | Clear package boundaries, API contracts |
| Developer learning curve | Medium | High | Comprehensive documentation, training |

### **Success Criteria**

#### **Technical Success Metrics**
- Build time improvement: 30% faster than separate repos
- Code reuse rate: 40%+ shared code utilization
- Developer productivity: 20% improvement in feature delivery
- Bug reduction: 25% fewer cross-application bugs

#### **Business Success Metrics**
- Faster time-to-market for new features
- Improved consistency across user interfaces
- Reduced maintenance overhead
- Better collaboration between development teams

### **Migration Strategy**

#### **Phase 1: Repository Setup**
- Initialize Turborepo structure
- Migrate existing codebases to apps/
- Create initial shared packages
- Setup CI/CD for monorepo

#### **Phase 2: Package Extraction**
- Extract shared UI components
- Create business logic packages
- Establish API contracts
- Migrate database models

#### **Phase 3: Integration**
- Update applications to use shared packages
- Implement cross-package testing
- Optimize build pipelines
- Document developer workflows

## **Kesimpulan Update**

Penggunaan Monorepo dengan Turborepo akan significantly enhance development experience dan product quality untuk Sistem ERP Samudra Paket. Investment dalam setup dan learning curve akan terbayar dengan improved development velocity, better code quality, dan enhanced maintainability dalam jangka panjang.

*[Konten asli PRD tetap sama, dengan penambahan bagian di atas di section 3. Gambaran Umum Produk]*