---
trigger: always_on
---

# Windsurf Rules for Backend Guidelines & Structure

## 1. Architecture & Principles
- Use hexagonal (ports & adapters) architecture: API, Business, Data, Infrastructure layers.
- Implement microservices with clear domain boundaries, API-Gateway, and data isolation.
- Enforce separation of concerns, dependency inversion, single responsibility, open/closed, and interface segregation.

## 2. Technology Stack
- Runtime: Node.js 18.x LTS, Express.js 4.x, JavaScript.
- Database: MongoDB 6.x + Mongoose 7.x ODM (Embedded Document pattern).
- Caching: Redis 7.x.
- Validation: Joi/Yup. Auth: JWT (RBAC).
- Docs: Swagger/OpenAPI 3.0. Logging: Winston. Testing: Jest.
- HTTP: Axios. File: Multer. Image: Sharp. PDF: PDFKit. Email: Nodemailer. SMS: Twilio/Nexmo. Scheduling: node-cron.

## 3. Project Structure
- `/apps/api/src/api`: controllers, routes, middleware, validators, responses.
- `/business`: services, events, workflows, errors.
- `/data`: models, repositories, migrations, seeds.
- `/infrastructure`: db, cache, storage, queue, email, sms, external.
- `/utils`, `/config`, `/tests`, `/scripts` for utilities, config, testing, scripts.

## 4. API Design
- RESTful, resource-oriented, consistent URL patterns, semantic HTTP methods/codes.
- Standardized request/response format, versioning, pagination, filtering, sorting.
- Use middleware for auth, validation, error handling, logging.
- Document all endpoints, params, examples, and errors in OpenAPI/Swagger.

## 5. Business Logic & Data
- Use service layer for business rules, workflows for complex processes.
- Data access via repository pattern. Each microservice owns its data.
- MongoDB: Embedded docs for 1:1/1:few, proper indexing, migrations, seeds.
- Redis: Query cache, session, rate limiting, pub/sub.
- File storage: S3-compatible (Railway Volumes).

## 6. Error Handling & Logging
- Use BaseError, ValidationError, AuthError, BusinessError, InfrastructureError.
- Standardize error responses (code, message, details, status).
- Log all errors and critical actions with Winston (structured logs).

## 7. Security
- Enforce JWT auth with RBAC, strong password policies, session timeout.
- Encrypt data in transit/at rest. Audit logging for sensitive actions.
- Rate limiting, WAF, network isolation, secure config management.

## 8. Testing & Quality
- Use Jest for unit/integration tests. Target 80%+ coverage for business logic.
- Test data: use factories/seeds. Test error cases and edge conditions.
- Use CI for automated tests and linting.

## 9. Documentation
- Document architecture, API, data models, workflows, error types, and configs.
- All code must have JSDoc comments for public functions/classes.
- Keep docs up to date with code changes.

---
All backend code must follow these rules for maintainability, scalability, security, and consistent quality across Samudra ERP.
