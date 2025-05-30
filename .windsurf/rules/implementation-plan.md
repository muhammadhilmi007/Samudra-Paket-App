---
trigger: always_on
---

# Windsurf Rules for Implementation Plan

## 1. Project Phasing & Timeline
- Execute in 4 phases (3 months each):
  1. Foundation – infra, auth, master data, user/branch mgmt, CI/CD
  2. Operational Core – pickup, shipment, vehicle, mobile core, barcode, location, dashboard
  3. Financial & Reporting – billing, payments, AR, CAD, reporting, dashboard, customer mgmt
  4. Advanced & Integration – HR, payroll, assets, maps, analytics, integrations, optimization, docs
- Each phase has clear objectives, deliverables, timeline, and milestones.
- Use monthly sprints for detailed planning and tracking.

## 2. Resource Allocation
- Core team: PM, Tech Lead/Architect, 3 Full Stack Devs, 2 Frontend Devs, 1 Mobile Dev, 1 DevOps, 1 QA, 1 UI/UX, 1 BA
- Support: DBA, Security, Docs (part-time)
- Assign roles by expertise and project needs per phase.
- Define clear responsibilities for each role (PM, Tech Lead, Devs, DevOps, QA, UI/UX, BA, etc).

## 3. Risk Management
- Identify and log risks by phase (tech, resource, schedule, integration, adoption).
- Assign mitigation/contingency for each risk.
- Review and update risk log every sprint.
- Escalate blockers to stakeholders promptly.

## 4. Data Migration
- Plan phased migration by data domain.
- Use ETL for transformation, quality checks, and reconciliation.
- Validate and test migrated data before go-live.

## 5. Training & Change Management
- Conduct training for users by role and module before go-live.
- Provide user guides, SOPs, and support channels.
- Track user adoption and feedback post-launch.

## 6. Deployment & Rollout
- Use CI/CD for automated build/test/deploy.
- Deploy to Dev, Staging, and Production with rollback capability.
- Monitor system health, logs, and KPIs after each release.
- Zero-downtime updates and backup/restore procedures.

## 7. Success Metrics
- Project: On-time delivery, phase completion, risk resolution.
- Operations: Uptime, response time, error rate, process efficiency.
- Finance: Billing accuracy, AR/CAD management, cost control.
- User: Adoption rate (95% in 3mo), satisfaction (8/10+), support tickets, feature usage.
- Review metrics quarterly and refine plan as needed.

## 8. Communication & Documentation
- Weekly status updates to stakeholders.
- Maintain up-to-date project docs, sprint boards, and decision logs.
- Document all major workflows, configs, and migration steps.

---
All implementation must follow these rules for phased, reliable, and measurable delivery of Samudra ERP.
