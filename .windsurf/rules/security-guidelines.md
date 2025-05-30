---
trigger: always_on
---

# Windsurf Rules for Security Guidelines

## 1. Authentication & Identity
- Use JWT for stateless auth; short-lived access tokens, refresh tokens for renewal.
- Enforce strong password policies (min 8 chars, complexity, no common words).
- Hash passwords with bcrypt; support password reset with expiring tokens.
- Multi-factor authentication for sensitive ops; biometrics on mobile.
- Store tokens securely: HTTP-only cookies (web), SecureStore (mobile).
- Auto logout after 30min inactivity; support session revocation and device tracking.
- Require email verification and admin role assignment for new users.
- Track all user account changes (audit trail).

## 2. Authorization & Access Control
- Enforce RBAC with clear role hierarchy and granular permissions.
- Support custom roles, separation of duties, and resource ownership checks.
- Restrict access by branch, record, and hierarchy; auto-filter data by permissions.
- All APIs require auth; check permissions before processing.
- Apply rate limiting, strict CORS, and request validation.
- Secure mobile auth, offline auth, token refresh, and encrypted device storage.

## 3. Data Protection
- Classify data (Public, Internal, Confidential, Restricted); label and control access.
- Encrypt data in transit (TLS 1.2+) and at rest (DB, backups, fields).
- Manage and rotate encryption keys securely.
- Identify and minimize PII; obtain consent and support data subject rights.
- Validate all inputs/outputs; use digital signatures for critical data.
- Maintain audit trails for sensitive data changes.

## 4. Application Security
- Validate/encode all inputs/outputs at API boundaries.
- Use parameterized queries; never interpolate SQL/NoSQL queries.
- Proper error handling; avoid leaking sensitive info.
- Prevent common attacks: SQLi, XSS, CSRF, SSRF, clickjacking, command injection.
- Harden mobile apps: certificate pinning, code obfuscation, tamper/root/jailbreak detection.
- Apply CSP, SRI, HTTP security headers, secure cookies, and frame protection on frontend.

## 5. Infrastructure & Network
- Enforce HTTPS and secure TLS config (TLS 1.2+); redirect HTTP to HTTPS.
- Segment networks, restrict firewall rules, and enable DDoS protection.
- Harden servers/containers: minimal base images, patching, vulnerability scanning, least privilege, resource limits.
- Secure DB access: strong auth, strict controls, encryption, audit logs, secure backups.

## 6. Logging, Monitoring & Response
- Log all security-relevant events; protect and retain logs, mask sensitive data.
- Standardize log formats, monitor in real-time, detect anomalies.
- Define incident response plan: detection, escalation, investigation, recovery.
- Regularly test incident response and update runbooks.

## 7. Compliance & Best Practices
- Conduct regular security reviews, vulnerability scans, and penetration tests.
- Enforce secure SDLC: code reviews, dependency checks, static/dynamic analysis.
- Manage secrets in secure vaults; never hardcode secrets in code or config.
- Automate compliance checks for regulatory requirements.

---
All code, infra, and ops must follow these rules for security, privacy, and compliance across Samudra ERP.
