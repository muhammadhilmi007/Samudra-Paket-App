# Samudra ERP Docker Development Environment

This directory contains Docker configurations for local development of the Samudra ERP system, following the Windsurf Rules for development environments.

## Overview

The Docker setup provides a complete local development environment with:

- MongoDB 6.x database with initialization scripts
- Redis 7.x for caching and session management
- API service (Node.js/Express) with hot reloading
- Web application (Next.js) with hot reloading
- Shared network and volume configuration
- Development utilities

## Prerequisites

- Docker and Docker Compose installed on your development machine
- Git installed for version control
- pnpm 10.x installed for package management

## Getting Started

1. Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

2. Customize environment variables in `.env` as needed

3. Start the development environment:

   ```bash
   # On Windows PowerShell
   docker-compose up -d

   # On Linux/Mac or using bash
   ./docker/docker-dev.sh start
   ```

4. Access the services:
   - Web Application: http://localhost:3000
   - API: http://localhost:3001
   - MongoDB: localhost:27017
   - Redis: localhost:6379

## Development Workflow

The Docker setup is configured for an optimal development experience:

- **Hot Reloading**: Changes to source code will automatically trigger rebuilds
- **Volume Mounting**: Local files are mounted into containers for real-time development
- **Node Modules Isolation**: Node modules are stored in Docker volumes for better performance
- **Database Persistence**: MongoDB and Redis data is persisted across container restarts

## Docker Utilities

Use the `docker-dev.sh` script for common operations:

```bash
# Start all services
./docker/docker-dev.sh start

# View logs
./docker/docker-dev.sh logs
./docker/docker-dev.sh logs api

# Open shell in a container
./docker/docker-dev.sh shell api
./docker/docker-dev.sh shell mongodb

# Stop all services
./docker/docker-dev.sh stop

# Rebuild services
./docker/docker-dev.sh rebuild

# View service status
./docker/docker-dev.sh status
```

## Container Details

### MongoDB

- Version: 6.0
- Authentication enabled
- Initial database and collections created
- Default admin user created
- Proper indexes configured

### Redis

- Version: 7.0-alpine
- Custom configuration for optimal performance
- Persistence enabled
- Memory limits configured

### API Service

- Node.js 18.x with Express
- Hot reloading with nodemon
- Connected to MongoDB and Redis
- Environment variables configured
- Port: 3001

### Web Service

- Next.js 14.x
- Hot reloading enabled
- Connected to API service
- Environment variables configured
- Port: 3000

## Data Persistence

All data is persisted using Docker volumes:

- `mongodb_data`: MongoDB database files
- `redis_data`: Redis data
- `node_modules_*`: Node modules for each service

## Troubleshooting

If you encounter issues:

1. Check container logs: `docker-compose logs [service]`
2. Ensure Docker has sufficient resources allocated
3. Try rebuilding: `docker-compose build --no-cache`
4. Verify environment variables in `.env`
5. Check network connectivity between containers

## Security Notes

This configuration is for development only. For production:

- Use stronger passwords
- Configure proper network security
- Set up proper backup strategies
- Use secrets management
- Implement proper logging and monitoring
