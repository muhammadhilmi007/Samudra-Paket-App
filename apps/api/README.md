# Samudra ERP Backend API

## Overview
Express.js (JavaScript) backend API for Samudra ERP, following the Windsurf Rules and standards. Implements hexagonal architecture with clear separation of layers.

## Technology Stack
- **Runtime & Framework**: Node.js 18.x LTS with Express.js 4.x
- **Language**: JavaScript
- **Database**: MongoDB 6.x with Mongoose 7.x ODM
- **Authentication**: JWT-based with RBAC authorization
- **Documentation**: Swagger/OpenAPI 3.0
- **Caching**: Redis 7.x
- **File Storage**: Railway Volumes (S3-compatible)

## Hexagonal Architecture
- **API Layer**: Controllers, routes, middleware, validators, responses
- **Business Layer**: Services, events, workflows, errors
- **Data Layer**: Models, repositories, migrations, seeds
- **Infrastructure Layer**: DB, cache, storage, queue, email, SMS, external services

## Directory Structure
- `/src`: Main source code
  - `/api`: API layer (controllers, routes, middleware, validators)
  - `/business`: Business logic layer (services, events, workflows)
  - `/data`: Data access layer (models, repositories)
  - `/infrastructure`: Infrastructure layer (db, cache, storage, external)
  - `/utils`: Utility functions
  - `/config`: Configuration files
- `/tests`: Unit and integration tests

## Error Handling
Implements standardized error handling with proper error types:
- BaseError
- ValidationError
- AuthError
- BusinessError
- InfrastructureError

## Getting Started
```bash
# From the root of the monorepo
pnpm dev --filter=api
```

## Building for Production
```bash
# From the root of the monorepo
pnpm build --filter=api
```
