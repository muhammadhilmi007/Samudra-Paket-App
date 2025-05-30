# **Business Requirement Document (BRD) - Updated**

# **Sistem ERP PT. Sarana Mudah Raya (Samudra Paket)**

**Versi Dokumen:** 1.1  
**Tanggal Pembuatan:** 26 April 2025  
**Update Terakhir:** 24 Mei 2025  
**Disusun oleh:** Business Analyst, System Analyst, Project Manager

## **Changelog**

| Versi | Tanggal | Deskripsi Perubahan | Dibuat oleh |
|-------|---------|-------------------|-------------|
| 1.0 | 26 April 2025 | Initial version | Business Analyst |
| 1.1 | 24 Mei 2025 | Penambahan Monorepo Turborepo untuk arsitektur ERP | System Analyst |

## **Update: Arsitektur Monorepo dengan Turborepo**

### **Kebutuhan Arsitektur Monorepo**

Untuk mendukung kompleksitas sistem ERP yang memiliki multiple aplikasi dan shared components, proyek akan menggunakan **Monorepo dengan Turborepo** sebagai build system dan orchestration tool. Pendekatan ini dipilih karena:

1. **Unified Development Experience**
   - Single repository untuk semua aplikasi (web, mobile, backend)
   - Shared codebase untuk komponen yang dapat digunakan ulang
   - Consistent tooling dan development workflow

2. **Dependency Management**
   - Centralized package management
   - Efficient sharing of utilities dan libraries
   - Version consistency across all packages

3. **Build Optimization**
   - Intelligent caching dengan Turborepo
   - Parallel builds untuk multiple packages
   - Incremental builds berdasarkan perubahan

4. **Code Sharing**
   - Shared UI components antara web dan mobile (React Native Web compatibility)
   - Shared business logic dan utilities
   - Shared type definitions dan schemas

### **Struktur Monorepo**

```
samudra-erp/
├── apps/
│   ├── web/                 # Next.js Web Application (JavaScript)
│   ├── mobile/              # React Native Expo App (TypeScript) 
│   ├── api/                 # Backend API (Node.js Express - JavaScript)
│   └── docs/                # Documentation site
├── packages/
│   ├── ui/                  # Shared UI components (Shadcn UI + Tailwind)
│   ├── shared/              # Shared utilities dan business logic
│   ├── database/            # Database models dan utilities (MongoDB/Mongoose)
│   ├── types/               # Shared TypeScript types
│   ├── config/              # Shared configuration (ESLint, Tailwind, etc.)
│   └── constants/           # Business constants dan enums
├── tools/
│   ├── scripts/             # Build dan deployment scripts
│   └── generators/          # Code generators
├── turbo.json              # Turborepo configuration
├── package.json            # Root package.json
└── tsconfig.json           # Root TypeScript config
```

### **Manfaat Bisnis Monorepo**

1. **Development Efficiency**
   - Faster development dengan shared components
   - Reduced code duplication
   - Easier refactoring across multiple applications

2. **Consistency**
   - Unified design system dengan shared UI components
   - Consistent business logic implementation
   - Standardized development practices

3. **Maintenance**
   - Single source of truth untuk shared functionality
   - Easier bug fixes yang affect multiple apps
   - Centralized testing dan quality assurance

4. **Deployment**
   - Coordinated deployments
   - Simplified CI/CD pipelines
   - Better dependency tracking

### **Impact pada Timeline dan Resources**

**Timeline Adjustment:**
- Setup fase bertambah 1 minggu untuk konfigurasi Monorepo
- Development efficiency meningkat 15-20% karena code sharing
- Testing phase lebih efisien dengan shared test utilities

**Resource Impact:**
- DevOps Engineer memerlukan expertise Turborepo
- Developers perlu training pada Monorepo workflow
- Infrastructure setup lebih kompleks namun lebih maintainable

### **Teknologi Stack Update**

**Monorepo Tools:**
- **Turborepo**: Build orchestration dan caching
- **PNPM**: Package manager untuk efficient node_modules
- **Changesets**: Version management dan changelog generation
- **Shared Tooling**: ESLint, Prettier, TypeScript configs

**Package Structure:**
- `@samudra/ui`: Shared UI components
- `@samudra/shared`: Business logic utilities  
- `@samudra/database`: Database models
- `@samudra/types`: TypeScript definitions
- `@samudra/config`: Configuration packages

### **Estimasi Biaya Update**

| Item | Biaya Tambahan (IDR) |
|------|---------------------|
| DevOps Engineer Training (Turborepo) | 15,000,000 |
| Development Setup Time | 25,000,000 |
| Additional Infrastructure Complexity | 10,000,000 |
| **Total Biaya Tambahan** | **50,000,000** |

**Updated Total Estimasi Biaya Proyek:** **3,419,000,000**

### **Risiko dan Mitigasi Monorepo**

| Risiko | Dampak | Mitigasi |
|--------|--------|----------|
| Learning curve untuk team | Sedang | Training dan dokumentasi komprehensif |
| Initial setup complexity | Sedang | Dedicated DevOps support |
| Build time increases | Rendah | Turborepo caching dan optimization |
| Repository size growth | Rendah | Git LFS untuk assets besar |

### **Success Metrics Monorepo**

1. **Development Velocity**: 15-20% improvement dalam development speed
2. **Code Reusability**: 30-40% shared code across applications  
3. **Build Performance**: Sub-linear build time growth dengan caching
4. **Developer Experience**: Improved DX metrics via surveys

## **Kesimpulan Update**

Penggunaan Monorepo dengan Turborepo akan memberikan foundation yang solid untuk sistem ERP yang kompleks dengan multiple applications. Meskipun ada initial investment dalam setup dan training, manfaat jangka panjang dalam terms of development efficiency, maintainability, dan code consistency akan sangat signifikan untuk project scale ini.

*[Konten asli BRD tetap sama, dengan penambahan bagian di atas]*