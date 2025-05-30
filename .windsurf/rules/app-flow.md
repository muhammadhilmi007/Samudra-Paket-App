---
trigger: always_on
---

# Windsurf Rules for App Flow

## 1. Authentication & Session
- Use secure login with MFA for all users.
- Enforce password reset via email link and security policy.
- Maintain JWT sessions with 30-min timeout and warning prompt.
- Persist session until timeout or logout; require re-auth after expiry.

## 2. Core Operational Flows
- Pickup: Initiate request, validate area, assign team/route, confirm GPS, capture package/photo/signature, update status.
- Waybill: Enter sender/receiver, validate service, input package, auto-calculate cost, select payment, generate barcode, update records.
- Inter-Branch: Scan/load packages, validate status, seal vehicle, track journey/location, reconcile at destination, record discrepancies.
- Delivery: Plan route, assign driver, confirm recipient, capture signature/photo, handle COD/CAD, update status, manage exceptions (redelivery/return).
- Return: Initiate after failed delivery/customer request, assign reason, route to origin, notify sender, record disposition, update status and finance.

## 3. Financial Flows
- Auto-generate invoices for completed deliveries; group by customer/period.
- Support CASH, COD, CAD: record collection in system/mobile, reconcile daily, track overdue, assign collectors.
- Manage expenses: request, approve, process, and record in accounting; support recurring and scheduled payments.
- Reporting: Provide parameterized, exportable, and scheduled reports with drill-down for authorized users.

## 4. Mobile App Flows
- Register device/employee, OTP authentication, store token, background sync for offline use.
- Pickup team: receive assignment, navigate, confirm GPS, record/package photo/signature, sync status.
- Driver: receive delivery, navigate, confirm recipient, capture signature/photo, record payment, handle exceptions, sync status.
- All mobile flows must support offline-first, background sync, and efficient battery/data use.

## 5. Admin & Branch Management
- Admin: manage branches, assign managers, update branch info, activate/deactivate branches.
- Staff: manage users, assign roles, reset passwords, monitor activity.
- All changes must be logged and auditable.

## 6. Workflow & Process Standards
- All flows must display clear statuses and next actions.
- Use notifications for assignments, updates, and exceptions.
- Validate all user inputs and process steps.
- Escalate exceptions (discrepancy, failed delivery, overdue payment) to responsible roles.
- Ensure traceability for every transaction and status change.

## 7. Usability & UX
- Minimize steps for frequent tasks; auto-suggest and prefill where possible.
- Use role-based dashboards and landing pages.
- Support contextual help and error messages at each step.
- Ensure mobile and web flows are consistent and intuitive.

## 8. Compliance & Security
- Enforce RBAC for all sensitive actions.
- Log all critical actions and status changes.
- Encrypt all sensitive data in transit and at rest.
- Regularly review flows for compliance with business and regulatory requirements.

---
All application flows must be documented, versioned, and regularly reviewed for improvements and compliance with business needs.